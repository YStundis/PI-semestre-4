<?php 
if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Exemplo extends MY_Controller {

	function __construct()
	{
		parent::__construct();
		$this->load->model('padrao_model');
	}

	public $table = 'tblExemplo';
	public $page = 'exemplo';

	public function index()
	{
        if($this->session->userdata('logged_in'))
        {
            $session_data = $this->session->userdata('logged_in');
		
			$this->load->helper('form');
			$data['itens'] = $this->padrao_model->get_combo('tblItem1','Item_1');

			$this->carrega_base_menu($this->page.'/index', $data);            
        }
        else
        {
            //If no session, redirect to login page
            redirect('login', 'refresh');
        }
	}

	public function ajaxLoadExemplo()
	{	
		$query = "SELECT
						fk_IDItem_1,
						Item_2,
						Item_3,
						Item_4,
						CONCAT('<div class=".'"'."d-flex align-items-start cursor-pointer".'"'." onclick=".'"'."event.preventDefault(); showModal(',ID,')".'"'."><span class=".'"'."material-icons font-blue".'"'."> edit </span> <label class=".'"'."cursor-pointer font-blue".'"'.">Editar</label></div>') AS Ação
					FROM
						tblExemplo
					WHERE
						Ativo = 1
					ORDER BY Item_2 ASC";

		$data = $this->padrao_model->query_c($query);
		//SEMPRE fazer a verificação, pois um return false, para a table.
		$resp = ($data) ? $data : '';

		echo json_encode($resp);
	}

	public function ajaxLoadDataExemplo()
	{
		$ID    = $this->input->post('ID');
		$query = "SELECT * FROM ".$this->table." WHERE ID = ".$ID;
		$data  = $this->padrao_model->query_c($query);

		echo json_encode($data);
	}

	public function ajaxCRUD()
	{
		$username = $_SESSION["logged_in"]["username"];

		$data = array();

		$ID_Ajax = $this->input->post("ID_Ajax");
		$method  = $this->input->post("method");
		$post 	 = $this->input->post("data");

		parse_str($post, $data);


		//dados log
		$dataItem = $this->padrao_model->get_f('tblItem1','Item_1',array('ID' => $data['selItem_1']));
		$dadosInLog = array(
								"Item_1" => $dataItem["Item_1"],
								"Item_2" => mb_strtoupper($data["txtItem_2"]),
								"Item_3" => mb_strtoupper($data["txtItem_3"]),
								"Item_4" => ($data["chkItem_4"] == 1) ? 'Sim' : 'Não'
							);

		//Configuração do log.
		$data_log = array
		(
				'User'    => $username,
				'Page'    => 'Cadastro de Exemplos',
				'Action'  => $method,
				'Content' => 'Item 1: '.$dadosInLog['Item_1'].', Item 2: '.$dadosInLog['Item_2'].', Item 3: '.$dadosInLog['Item_3']
							.', Item 4: '.$dadosInLog['Item_4'],
				'Date'    => date('Y-m-d H:i:s')
		);

		//Preenchendo o array com as informações que serão salvas/alteradas no banco
		if($method != "delete")
		{
			$array_data = array(
								"fk_IDItem_1" => $data["selItem_1"],
								"Item_2"     => $data["txtItem_2"],
								"Item_3"     => $data["txtItem_3"],
								"Item_4"     => $data["chkItem_4"]
							);

			$array_data = $this->upperArray($array_data);			
		}

		//Todos os métodos são passados em Inglês
		if($method == "add")
		{			
			$insert = $this->padrao_model->CRUD($this->table, $method, $array_data, NULL, $data_log);
			if ($insert) 
			{
				echo json_encode($insert);	
			}
			else
			{
				$data_log['Action'] = 'error';
				$data_log['Content'] = 'Erro ao Inserir Cadastro: '.$data_log['Content'];

				$this->padrao_model->CRUD('tblLogs', "add", $data_log);

				echo json_encode(false);
			}
		}
		else if ($method == "edit")
		{
			$edit = $this->padrao_model->CRUD($this->table, $method, $array_data, array("ID" => $ID_Ajax), $data_log);
			if ($edit) 
			{
				echo json_encode($ID_Ajax);	
			}
			else
			{
				$data_log['Action'] = 'error';
				$data_log['Content'] = 'Erro ao Alterar Cadastro: '.$data_log['Content'];

				$this->padrao_model->CRUD('tblLogs', "add", $data_log);

				echo json_encode(false);
			}
		}
		else
		{
			$array_data = array
			(
				"Active"  => 0
			);
			
			$data_log["Action"] = "delete";
			$delete = $this->padrao_model->CRUD($this->table, "edit", $array_data, array("ID" => $ID_Ajax), $data_log);
			
			if($delete)
			{
				echo json_encode($ID_Ajax);
			}
			else
			{
				$data_log['Action'] = 'error';
				$data_log['Content'] = 'Erro ao Deletar Cadastro: '.$data_log['Content'];

				$this->padrao_model->CRUD('tblLogs', "add", $data_log);

				echo json_encode(false);
			}
		}
	}
}
?>