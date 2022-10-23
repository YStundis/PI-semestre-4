function habilitar_botao(funcao) 
{
	var incluir = true;

	if (funcao == 'incluir') 
	{
		incluir = true;
	} 
	else if (funcao == 'alterar') 
	{
		incluir = false;
	}

	$("#btnIncluir").prop('disabled', !incluir);
	$("#btnAlterar").prop('disabled', incluir);
	$("#btnDeletar").prop('disabled', incluir);
}

function auto_habilitar_botao(form, funcao) 
{
	var incluir = true;

	if (funcao == 'incluir') 
	{
		incluir = true;
	} 
	else if (funcao == 'alterar') 
	{
		incluir = false;
	}

	$("#btnIncluir_"+form).prop('disabled', !incluir);
	$("#btnAlterar_"+form).prop('disabled', incluir);
	$("#btnDeletar_"+form).prop('disabled', incluir);
}

function focar() 
{
	$(':input.obrigatorio').first().focus();
}

function limpacampos()
{
	var input = document.getElementsByTagName('input');
	var select = document.getElementsByTagName('select');
	var textarea = document.getElementsByTagName('textarea');

	for(var i=0; i<select.length; i++)
		select[i].selectedIndex = 0;

	for(var i=0; i<textarea.length; i++)
		textarea[i].value = '';

	for(var i=0; i<input.length; i++) 
	{
		switch (input[i].type)
		{
			case 'text':
				input[i].value = ''; break;
			case 'radio':
			case 'checkbox':
				input[i].checked = ''; break;
		}
	}

	$(":select multiple").val([]);
	$(".select").selectpicker('refresh');
	$('input').iCheck('update');
	$('.label_valor').text('');
	$(":input.imagem").val("");
	$(".file-input-name.imagem").text('');

	if($('#jqxgrid').length > 0)
	{
		$(".grid_valor").jqxGrid('clearselection');
	}

	if($('#jqxtable').length > 0)
	{
		$(".table_valor").jqxDataTable('clearselection');
		$("div.jqx-icon-close.jqx-icon-close-classic").css('display','none');
		$("#jqxtable").jqxDataTable('clearfilters');
	}
}

function limpacamposTable()
{
	var input = document.forms[form].getElementsByTagName('input');
	var select = document.forms[form].getElementsByTagName('select');
	var textarea = document.forms[form].getElementsByTagName('textarea');

	for(var i=0; i<select.length; i++)
		select[i].selectedIndex = 0;

	for(var i=0; i<textarea.length; i++)
		textarea[i].value = '';

	for(var i=0; i<input.length; i++) 
	{
		switch (input[i].type)
		{
			case 'text':
				input[i].value = ''; break;
			case 'radio':
			case 'checkbox':
				input[i].checked = ''; break;
		}
	}

	$(":select multiple").val([]);
	$(".select").selectpicker('refresh');
	$('input').iCheck('update');
	$('.label_valor').text('');
	$(":input.imagem").val("");
	$(".file-input-name.imagem").text('');
}

function auto_limpacampos(form)
{
	if(form === undefined)
	{
		form = $("form:first").attr('id');
	}
		
	var input = document.forms[form].getElementsByTagName('input');
	var select = document.forms[form].getElementsByTagName('select');
	var textarea = document.forms[form].getElementsByTagName('textarea');

	for(var i=0; i<select.length; i++)
		select[i].selectedIndex = 0;

	for(var i=0; i<textarea.length; i++)
		textarea[i].value = '';

	for(var i=0; i<input.length; i++) 
	{
		switch (input[i].type)
		{
			case 'text':
				input[i].value = ''; break;
			case 'radio':
			case 'checkbox':
				input[i].checked = ''; break;
		}
	}

	$(":select multiple").val([]);
	$(".select").selectpicker('refresh');
	$('input').iCheck('update');
	$('.label_valor').text('');
	$(":input.imagem").val("");
	$(".file-input-name.imagem").text('');


	//Pega o form no qual a pessoa está mexendo, não no contexto todo
	if( ( $(form).first('#grid').first('#jqxgrid') ).length > 0 )
	{
		$(".grid_valor").jqxGrid('clearselection');
	}

	if( ( $(form).first('#grid').first('#jqxtable') ).length > 0)
	{
		$(".table_valor").jqxDataTable('clearselection');
		$("div.jqx-icon-close.jqx-icon-close-classic").css('display','none');
		$("#jqxtable").jqxDataTable('clearfilters');
	}
}

function mensagem_notificacao (mensagem, tipo_mensagem) 
{
		//Depois de 2 segundos, fecha o noty - Alterar tempo é só trocar o 2000 para x (quanto quiser)
		var n = noty({text: mensagem, layout: 'topCenter', type: tipo_mensagem});

		var tempo = 2000;
		if(tipo_mensagem == 'error')
		{
			tempo = 2500;
		}

		setTimeout(function () 
		{
			n.close();
		}, tempo);
}

function mensagem_notificacao_confirmacao(pergunta, nomeDaFuncao)
{
	noty({
		text:  pergunta,
		layout: 'center',
		buttons: 
		[
			{
				addClass: 'btn btn-success btn-clean', text: 'Sim',
				onClick: function($noty) 
				{
					$noty.close(); 
					eval(nomeDaFuncao);
				}
			},
			{
				addClass: 'btn btn-danger btn-clean', text: 'Não',
				onClick: function($noty) 
				{
					$noty.close();
				}
			}
		]
	});

	$('.noty_buttons').css('text-align', 'center');
}

function verificar_obrigatorio(form) 
{
	var vazio = false;
	if(form === undefined)
	{
		form = $("form:first").attr('id');
	}	
	 
	$('#'+form+' :input.obrigatorio').each(function() 
	{
		if($(this).val() == "")
		{
			vazio = true;
		}

	});

	$("select[multiple].obrigatorio").each(function (){
		if( $(this).has('option:selected').length < 1 ){
			vazio = true;
		}
	});

	if(vazio)
	{
		return 0;
	}
	else
	{
		return 1;
	}
}


function autoGrid(form, controler, funcaoCampos, funcaoGrid,parametroLocalData, rowSelection)
{
	//verificar o tamanho da tela do dispositivo.
	var tamanhoTela = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

	//prepara os dados
	var campos;           //irá receber os dados dos campos.
	var camposGrid = [];  //irá receber o nome e o tipo dos campos que irão alimentar o grid. (datafields)
	var colunas = [];     //irá receber as colunas que serão exibidas no grid (columns)

	//trás as informações dos campos para alimentação do grid.
	$.ajax({
			type: 'POST',
			dataType: 'JSON',
			async: false,
			url: raizSite + '/'+controler+'/'+funcaoCampos,
			success: function(retornoCampos)
			{
				qtdCampos = retornoCampos.campos.length;
				campos = retornoCampos.campos;
			}
		});

	/*Este FOR percorerrá todos os registros do object (campos) para SEPARAR os atributos (Nome, tipo e largura)
	para compor os objects que abastecerão o grid, são eles:
	 - camposGrid(fields): são as informações que abastecerão os campos da tela.
	 - colunas(columns): são as colunas que serão exibidas no grid.
	*/	
	for(i=0; i < qtdCampos; i++)
	{
		var tipo = "";
		var tipoBanco = campos[i].Type.substr(0,3);
		var larguraColuna = 0;

		if(tipoBanco == 'int' || tipoBanco == 'tin')
		{
			tipo = 'integer';
			var campo = campos[i].Type;
			campo = campo.replace(')', '('); 
			var S_campo = campo.split('(');
			larguraColuna = S_campo[1];

		}
		else if(tipoBanco == 'dec')
		{
			tipo = 'float';
			var campo = campos[i].Type;
			campo = campo.replace(')', '('); 
			var S_campo = campo.split('(');
			DEClarguraColuna = S_campo[1].split(',');
			larguraColuna = DEClarguraColuna[0];

		}
		else if(tipoBanco == 'cha' || tipoBanco == 'var' || tipoBanco == 'lon')
		{
			tipo = 'string';

			if(tipoBanco != "lon"){
				var campo = campos[i].Type;
				campo = campo.replace(')', '('); 
				var S_campo = campo.split('(');
				larguraColuna = S_campo[1];

			}
			else
			{
				larguraColuna = 150;
			}
		}

		camposGrid[i] = {'name' : campos[i].Field, 'type' : tipo};

		/*faz a verificação para ver se tem Comments, caso sim ele irá acidionar no object colunas
		  que irão ser exibidas no grid.*/
		if(campos[i].Comment != "")
		{
			//o que define se irá ou não aparecer no grid é o 3º parametro do Comments (G);
			var flag = campos[i].Comment.split(',');
			if(flag[2] != undefined && flag[2] == 'G')
			{
				/*faz a verificação por tamanho de tela, setando valores minimos com cálculos usando como base
				a variavel larguraColuna, caso menor que o estipulado define valores mínimos padrões, são eles:
				- Tela < 500: 120 (medida em pixel);
				- Tela > 500: 10% (medida em porcentagem);
				*/
				if(tamanhoTela < 500)
				{
					larguraColuna = larguraColuna*15;

					if(larguraColuna < 120)
					{
						larguraColuna = 120;
					}
			
				}
				else
				{
					if(larguraColuna <= 11)
					{
						larguraColuna = '10%';
					}
					else
					{
						if((larguraColuna > 12) && (larguraColuna <= 40 ))
						{
							larguraColuna = 40;
						}
						else
						{	
							larguraColuna = larguraColuna;
						}

						larguraColuna = larguraColuna*0.6;
						
						larguraColuna = larguraColuna+'%';
					}

				}

				//preenchimento do objet que irá compor as colunas exibidas no grid.
				colunas[i] = {text: flag[1], editable: false, datafield: campos[i].Field, width: larguraColuna};
			}
			
		}

	}//término do for

	var camposColuna = []; //guarda os valores das colunas a serem balanceados.
	var qtdCamposPadrao = 0; //quantidade de campos com o tamanho padrão minimo.

	//faz a verificação se existe objetos indefinidos(vazios), se sim os eliminam.
	for(i=0; i < colunas.length; i++)
	{
		if(colunas[i] == undefined )
		{
			colunas.splice(i, 1);
			 i--;
		}
	}

	//guarda os valores dos width e a quantidade de campos com tamanho padrao para fazer calculos de balanceamentos.
	for(i=0; i < colunas.length; i++)
	{
		if(tamanhoTela < 500)
		{
			if(colunas[i].width != 120) 
			{
				camposColuna.push({'campo': colunas[i].text, 'width': colunas[i].width});
			}
			else
			{
				qtdCamposPadrao++;
			}
		}
		else
		{
			if(colunas[i].width.indexOf('10%') == -1) 
			{
				camposColuna.push({'campo': colunas[i].text, 'width': colunas[i].width});
			}
			else
			{
				qtdCamposPadrao++;
			}
			
		}
			
	}//fim for

	//caso todos os campos forem de tamanhos padrões, sera feito um loop(for) para adicioná-los
	//e fazer o balancemamento com eles.
	if(camposColuna.length == 0)
	{
		if(colunas.length == qtdCamposPadrao)
		{
			qtdCamposPadrao = 0;

			for(i=0; i < colunas.length; i++)
			{
				if(tamanhoTela < 500)
				{
					if(colunas[i].width != 120) 
					{
						camposColuna.push({'campo': colunas[i].text, 'width': colunas[i].width});
					}
				}
				else
				{
					camposColuna.push({'campo': colunas[i].text, 'width': colunas[i].width});
					
				}
					
			}//fim for

		}
	}

	//aqui fazer uma função para verificar o qtdCamposPadrao, se for zerado, percorre o array coluna
	//fazendo a verificacao com com os tamanhos se no 500 < 480 e no maior < 100%
	//colocar a quantidade de colunas no camposColuna para fazer o balanceamento.

	//ou se a quantide de colunas = qtdCamposPadrao = coloca as colunas pra balancear.

	var valorBalancear = 0; //armazena os valores das larguras das colunas para fazer o balanceamento.
	for(i=0; i < camposColuna.length; i++)
	{
		if(tamanhoTela < 500)
		{
			valorBalancear = valorBalancear + camposColuna[i].width;
		}
		else
		{
			S_width = camposColuna[i].width.split('%');
			valorBalancear = valorBalancear + parseFloat(S_width[0]);
		}
	}


	/*verifica se o tamanho da tela não é menor que a somatoria da lagura dos campos para fazer o balanceamento.
	caso sim, calcula o tamanho restante para fazer balanceamentos.*/
	if(tamanhoTela < 500)
	{
		/*o calculo é baseado na somatoria dos campos com tamanho superiores a 120 e com a multiplicação da
		quantidade dos campos inferiores a 120 multiplicados por 9.5 (que é o tamanho padrão dos campos menores)*/
		tamanhoCampos = valorBalancear + (qtdCamposPadrao * 120);

		if(tamanhoTela > tamanhoCampos)
		{
			valorBalancear = tamanhoTela - tamanhoCampos;
		}
		else
		{
			valorBalancear = 0;
		}

	}
	else
	{
		/*o calculo é baseado na somatoria dos campos com tamanho superiores a 10% e com a multiplicação da
		quantidade dos campos inferiores a 10% multiplicados por 9.5 (que é +/- o tamanho padrão dos campos menores)*/
		tamanhoCampos = valorBalancear + (qtdCamposPadrao * 9.5);
		if(100 > tamanhoCampos)
		{
			valorBalancear = 100 - tamanhoCampos;
		}
		else
		{
			valorBalancear = 0;
		}
	}

	/*Se houver valores para fazer balanceamentos, será feito de acordo com o tamanho da tela.*/
	if(valorBalancear > 0)
	{
		if(tamanhoTela < 500)
		{
			for(i=0; i < colunas.length; i++)
			{
				for(j=0; j < camposColuna.length; j++)
				{
					if(colunas[i].text == camposColuna[j].campo)
					{
						var widthColunas = colunas[i].width;
						var widthBalanc = parseInt(widthColunas)+parseFloat((valorBalancear/(camposColuna.length)));

						colunas[i].width = parseFloat(widthBalanc);
					}
				}
			}
			
		}
		else
		{
			for(i=0; i < colunas.length; i++)
			{
				for(j=0; j < camposColuna.length; j++)
				{
					if(colunas[i].text == camposColuna[j].campo)
					{
						var widthColunas = colunas[i].width.split('%');
						var widthBalanc = Math.ceil(parseFloat(widthColunas[0])+parseFloat((valorBalancear/(camposColuna.length))));

						if(colunas.length == 1)
						{
							colunas[i].width = '100%';
						}
						else
						{							
							if(j == ((colunas.length)-1))
							{
								colunas[i].width = Math.ceil(widthBalanc)+'%';
							}
							else
							{
								colunas[i].width = Math.ceil(widthBalanc)+'%';

							}

						}

					}
				}
			}
		}
	}

	var tipoGrid = "";
	var nomeGrid = "";

	if($("#"+form).hasClass('parametro'))
	{
		tipoGrid = 'jqxGrid';

		nomeGrid = $("#"+form).find('.grid_valor').attr('id');
	}
	else
	{
		if($("#"+form).hasClass('Tabela'))
		{
			tipoGrid = 'jqxDataTable';
			nomeGrid = $("#"+form).find('.table_valor').attr('id');
		}
	}

	var theme = 'classic';

	if(parametroLocalData != undefined)
	{
		var source =
		{
			localdata: parametroLocalData,
			datatype: "json",
			datafields: camposGrid,
			id: 'ID',
			url: raizSite + '/'+controler+'/'+funcaoGrid
		};
		
	}
	else
	{
		var source =
		{
			datatype: "json",
			datafields: camposGrid,
			id: 'ID',
			url: raizSite + '/'+controler+'/'+funcaoGrid
		};
		
	}

	var tipoSelecao = "singleRow";

	if(rowSelection != undefined)
	{
		tipoSelecao = rowSelection;
	}

	if(tipoGrid == 'jqxDataTable')
	{
		var dataAdapter = new $.jqx.dataAdapter(source);
		$("#"+nomeGrid).jqxDataTable(
	    {
	        source: dataAdapter,
	        width: '99%',
	        height: 233,
	        theme: theme,
			editable: false,
			altRows: true,
			filterable: true,
			pageable: true,
			columns: colunas,
			selectionMode: tipoSelecao

		});
	}
	else
	{
		$("#"+nomeGrid).jqxGrid(
	    {
			width: '99%',
			height: 233,
			source: source,
			theme: theme,
			editable: false,
			columns: colunas,
			selectionMode: tipoSelecao

		});
	}

	// inicializa grid ou table

	$("#"+nomeGrid).on('rowSelect', function (event) 
	{
		//event arguments
		var args = event.args;
		//linha selecionada
		var row = event.args.row;

		ID = row.ID;

		for(i=0; i < campos.length; i++)
		{
			if(campos[i].Comment != "")
			{
				var S_camposCriar = campos[i].Comment.split(',');
				var elemento = S_camposCriar[0];
				var campoRow = campos[i].Field;


				if(elemento.indexOf('ckk') !== -1) 
				{
					if(row[campoRow] == 1)
					{
						$('#'+elemento).prop("checked", true);
						$('input').iCheck('update');
					}
					else
					{
						$('#'+elemento).prop("checked", false);
						$('input').iCheck('update');
					}
				}
				else
				{
					//Se não for UPS ou UPM (Upload Simples ou Upload Múltiplo)
					if( !((elemento.indexOf('ups') !== -1)  || (elemento.indexOf('upm') !== -1)) ) 
					{
						$('#'+elemento).val(row[campoRow]);
					}	
				}
			}
		}

		$("select").selectpicker('refresh');

		auto_habilitar_botao(form, 'alterar');
	});
}

function selecionaIndexGrid(nomeGrid, index, tipoGrid)
{
	if(tipoGrid == 'T' || undefined)
	{
		$('#'+nomeGrid).on('bindingComplete', function (event) 
		{
			$('#'+nomeGrid).jqxDataTable('selectrow', index);
		});
	}
	else if(tipoGrid == 'G')
	{
		$('#'+nomeGrid).on('bindingComplete', function (event) 
		{
			$('#'+nomeGrid).jqxGrid('selectrow', index);
		});
	}

}

function autoTable(table, controller, funcaoCampos, funcaoGrid,editavel)
{

    //prepara os dados
    var campos;           //irá receber os dados dos campos.
    var camposGrid = [];  //irá receber o nome e o tipo dos campos que irão alimentar o grid. (datafields)
    var colunas = [];     //irá receber as colunas que serão exibidas no grid (columns)

    //trás as informações dos campos para alimentação do grid.
    $.ajax({
            type: 'POST',
            dataType: 'JSON',
            async: false,
            url: raizSite + '/'+controller+'/'+funcaoCampos,
            success: function(retornoCampos)
            {
                qtdCampos = retornoCampos.campos.length;
                campos = retornoCampos.campos;
            }
        });


    var titleColuna = '';

    for(i=0; i < qtdCampos; i++)
    {
        /*faz a verificação para ver se tem Comments, caso sim ele irá acidionar no object colunas
          que irão ser exibidas no grid.*/
        if(campos[i].Comment != "")
        {
            //o que define se irá ou não aparecer no grid é o 3º parametro do Comments (G);
            var flag = campos[i].Comment.split(',');
            if(flag[2] != undefined && flag[2] == 'G')
            {

                //preenchimento do objet que irá compor as colunas exibidas no grid.
                colunas[i] = {data: campos[i].Field};
                titleColuna += "<th>" + flag[1] + "</th>"; //terminar aqui ver se e flag ou field pra compor a coluna
            }
            
        }

    }//término do for

    for(i=0; i < colunas.length; i++)
    {
        if(colunas[i] == undefined )
        {
            colunas.splice(i, 1);
             i--;
        }
    }

    var link = "";
    var alinhamento = "";
    var iconeAlterar = "fa fa-pencil";
    var iconeDeletar = "fa fa-trash-o";

    if(editavel || editavel == undefined)
    {
        colunas.push({"data": "ID",
                        "render": function(data, type, row, meta)
                        {
                            if(type === 'display'){
                                link = '<a href="'+raizSite+controller+'/editar/'+row.ID+'" class="editar" style="cursor: pointer; text-align: center !important;"><button class="btn btn-info btn-condensed btn-sm"><span id="spnAlterarAutoTable" class="'+iconeAlterar+'"></span></button></a>';
                            }

                            return link;
                        }
                    },
                    {"data": "ID",
                        "render": function(data, type, row, meta)
                        {
                            if(type === 'display'){
                                link = '<a onclick="event.preventDefault(); apagarTable('+row.ID+')" class="editar" style="cursor: pointer; text-align: center !important;"><button id="btnExcluir'+row.ID+'" class="btn btn-danger btn-condensed btn-sm"><span id="spnDeletarAutoTable" class="'+iconeDeletar+'"></span></button></a>';
                            }

                            return link;
                        }
                    }

                );

        titleColuna += "<th id='thEditarAutoTable' width='50px;'>Editar</th>";
        
        if($("#form_Usuarios").length < 1)
        {
        	titleColuna += "<th id='thDeletarAutoTable' width='50px;'>Deletar</th>";
        }
        else
        {
        	colunas.pop();
        }

        alinhamento = { className: "centro", "targets": [ -1,-2 ] };
    }

    var order = true;
    if($("#form_atualizacoes").length > 0)
    {
    	order = false;
    }

    var nomeTable = "";

    nomeTable = $("#"+table).find('.criaTable').attr('id');

	$("#"+nomeTable).empty();
    $("#"+nomeTable).append('<table id="displayTable" class="display" cellspacing="0" width="100%"><thead><tr>' + titleColuna + '</tr></thead></table>');

    $('#'+nomeTable).DataTable( {
         "processing": true, 
         "serverside": true, 
         "deferRender": true,
         "pageLength": 25,
         "lengthChange": false,
         "ordering": order,
         'ajax': {
            "type"   : "POST",
            "url"    : raizSite + '/'+controller+'/'+funcaoGrid,
            "dataSrc": ""
          },
          'columns': colunas,
          "columnDefs": [
							//{ className: "centro", "targets": [ -1,-2 ] }
							alinhamento
		                ],
          "responsive": "true",
          "language": 
                    {
                        "sEmptyTable": "Nenhum registro encontrado",
                        "sInfo": "Mostrando de _START_ até _END_ de _TOTAL_ registros",
                        "sInfoEmpty": "Mostrando 0 até 0 de 0 registros",
                        "sInfoFiltered": "(Filtrados de _MAX_ registros)",
                        "sInfoPostFix": "",
                        "sInfoThousands": ".",
                        "sLengthMenu": "_MENU_ resultados por página",
                        "sLoadingRecords": "Carregando...",
                        "sProcessing": "Processando...",
                        "sZeroRecords": "Nenhum registro encontrado",
                        "sSearch": "Pesquisar",
                        "oPaginate": 
                        {
                            "sNext": "Próximo",
                            "sPrevious": "Anterior",
                            "sFirst": "Primeiro",
                            "sLast": "Último"
                        }
                    }

    } );

    var tabela = $('#'+nomeTable).DataTable();
     
    $('#'+table+' tbody').on('click', 'tr', function () {
        var data = tabela.row( this ).data();

        ID = data.ID;

    } );

}

function preencheCampos(controllerDados,IDFuncao,Form)
{
	if(IDFuncao != "")
	{
		var dados;
		var dadosCampos;

		$.ajax({
			type: 'POST',
			dataType: 'JSON',
			async: false,
			url: raizSite + controllerDados+'/ajaxDados',
			data: {
					ID : IDFuncao
				},
			success: function(retornoJSON){
				dados = retornoJSON.dados;
				dadosCampos = retornoJSON.campos;

				for(i=0; i < dadosCampos.length; i++)
				{
					for(j=0; j < Object.keys(dados[0]).length; j++)
					{
						if(dadosCampos[i].Comment != "")
						{
							var field = dadosCampos[i].Field;
							var campo = dadosCampos[i].Comment.split(',');
							$("#"+campo[0]).val(dados[0][field]);

							if(campo[0].indexOf('ckk') !== -1) 
							{
								if(dados[0][field] == 1)
								{
									$('#'+campo[0]).prop("checked", true);
									
								}
								else
								{
									$('#'+campo[0]).prop("checked", false);
								}

								$('input').iCheck('update');
							}

						}

					}
				}
				if(form != undefined)
				{
					$("#btnIncluir_"+Form).remove();
				}
				$('select').selectpicker('refresh');
			}
		});
	}
	else
	{
		$("#btnAlterar_"+Form).remove();
	}
}

function autoBuscar(valor, url, grid)
{
	$.ajax({
		type: 'POST',
		dataType: 'JSON',
		url: raizSite + url,
		data: {
			IDAjax: valor
		},
		success: function(retornoJSONModulos)
		{
			grid(retornoJSONModulos);
		}
	});	
}

function inserirAuto(form, controller,funcaoController, grid,callback)
{
	if(form === undefined)
	{
		form = $("form:first").attr('id');
	}

	var verificacao = verificar_obrigatorio(form);

	if(verificacao == 1)
	{
		var dadosFormulario = new FormData();

		//Se houver imagens, acrescenta ao array na parte $_FILES
		if( $('input[type="file"]').length > 0 )
		{		
			var file_data = $('input[type="file"]')[0].files; 

			for(var i = 0;i < file_data.length;i++)
			{
				dadosFormulario.append("file_"+i, file_data[i]);
			}	
		}

		//Serializa o resto do formulário
		var formulario_serializado = $('#'+form).serialize();

		dadosFormulario.append("dados", formulario_serializado);
		dadosFormulario.append("metodo", 'inserir');

		$.ajax
		({
			type: 'POST',
			dataType: 'JSON',
			processData: false,
			contentType: false,
			url: raizSite + '/'+controller+'/'+funcaoController,
			data: dadosFormulario,
			success: function(retornoInsercao)
			{
				if(retornoInsercao)
				{
					auto_limpacampos(form);
					
					eval(grid+'()');
					auto_habilitar_botao(form,'incluir');

					if(callback !== undefined)
					{
						if(callback.inserir !== undefined)
						{
							for(i=0; i < callback.inserir.length; i++)
							{
								eval(callback.inserir[i]);
							}

						}

					}
					mensagem_notificacao('Inserido com sucesso!', 'success');
				}
				else
				{
					mensagem_notificacao('Erro ao inserir dados!', 'error');
				}
			}
		});		
	}
	else
	{
		mensagem_notificacao('Preencha todos os campos!', 'error');
	}
}

function inserirTableAuto(form, controller,funcaoController,callback)
{
	if(form === undefined)
	{
		form = $("form:first").attr('id');
	}

	var verificacao = verificar_obrigatorio(form);

	if(verificacao == 1)
	{
		var dadosFormulario = new FormData();

		//Se houver imagens, acrescenta ao array na parte $_FILES
		if( $('input[type="file"]').length > 0 )
		{		
			var file_data = $('input[type="file"]')[0].files; 

			for(var i = 0;i < file_data.length;i++)
			{
				dadosFormulario.append("file_"+i, file_data[i]);
			}	
		}

		//Serializa o resto do formulário
		var formulario_serializado = $('#'+form).serialize();

		dadosFormulario.append("dados", formulario_serializado);
		dadosFormulario.append("metodo", 'inserir');

		if($("#form_Editarususarios").length < 1)
		{
			$.ajax
			({
				type: 'POST',
				dataType: 'JSON',
				processData: false,
				contentType: false,
				url: raizSite + '/'+controller+'/'+funcaoController,
				data: dadosFormulario,
				success: function(retornoInsercao)
				{
					if(retornoInsercao)
					{
						limpacamposTable();
						
						if(callback !== undefined)
						{
							if(callback.inserir !== undefined)
							{
								for(i=0; i < callback.inserir.length; i++)
								{
									eval(callback.inserir[i]);
								}

							}

						}
						mensagem_notificacao('Inserido com sucesso!', 'success');

						var telaCadastro = raizSite + '/'+controller;
						location.assign(telaCadastro); 
					}
					else
					{
						mensagem_notificacao('Erro ao inserir dados!', 'error');
					}
				}
			});
		}
		else
		{
			var CPF   = ajaxDados({'ID':ID, 'campo':'CPF',   'metodo':'inserir', 'valor': $("#txtCPF").val()},'usuarios/verificaDados');
			var Email = ajaxDados({'ID':ID, 'campo':'Email', 'metodo':'inserir', 'valor': $("#txtEmail").val()},'usuarios/verificaDados');

			if(CPF == 'NAO')
			{
				mensagem_notificacao('CPF já cadastrado!', 'error');
			}
			else if(Email == 'NAO')
			{
				mensagem_notificacao('Email já cadastrado!', 'error');
			}
			else
			{
				$.ajax
				({
					type: 'POST',
					dataType: 'JSON',
					processData: false,
					contentType: false,
					url: raizSite + '/'+controller+'/'+'ajaxCRUD',
					data: dadosFormulario,
					success: function(retornoInsercao)
					{
						if(retornoInsercao)
						{
							limpacamposTable();
							
							if(callback !== undefined)
							{
								if(callback.inserir !== undefined)
								{
									for(i=0; i < callback.inserir.length; i++)
									{
										eval(callback.inserir[i]);
									}

								}

							}
							mensagem_notificacao('Inserido com sucesso!', 'success');

							var telaCadastro = raizSite + '/'+controller;
							location.assign(telaCadastro); 
						}
						else
						{
							mensagem_notificacao('Erro ao inserir dados!', 'error');
						}
					}
				});
			}

		}

	}
	else
	{
		mensagem_notificacao('Preencha todos os campos!', 'error');
	}
}

function alterarAuto(form, controller,funcaoController, grid,callback) 
{
	if(form === undefined)
	{
		form = $("form:first").attr('id');
	}

	var dadosFormulario = new FormData();

	//Se houver imagens, acrescenta ao array na parte $_FILES
	if( $('input[type="file"]').length > 0 )
	{		
		var file_data = $('input[type="file"]')[0].files; 

		for(var i = 0;i < file_data.length;i++)
		{
			dadosFormulario.append("file_"+i, file_data[i]);
		}	
	}

	//Serializa o resto do formulário
	var formulario_serializado = $('#'+form).serialize();

	dadosFormulario.append("dados", formulario_serializado);
	dadosFormulario.append("metodo", 'alterar');
	dadosFormulario.append("ID_Ajax", ID);

	var verificacao = verificar_obrigatorio(form);

	if(verificacao == 1)
	{
		$.ajax({
			type: 'POST',
			dataType: 'JSON',
			processData: false,
			contentType: false,
			url:raizSite + '/'+controller+'/'+funcaoController,
			data: dadosFormulario,
			success: function(retornoAlteracao)
			{
				if(retornoAlteracao)
				{
					auto_limpacampos(form);
					
					eval(grid+'()');

					if(callback !== undefined)
					{
						if(callback.alterar !== undefined)
						{
							for(i=0; i < callback.alterar.length; i++)
							{
								eval(callback.alterar[i]);
							}
						}
					}

					auto_habilitar_botao(form, 'incluir');
					mensagem_notificacao('Alterado com sucesso!', 'success');
				}
				else
				{
					mensagem_notificacao('Erro ao alterar dados!', 'error');
				}
			}
		});
	}
	else
	{
		mensagem_notificacao('Preencha todos os campos!', 'error');
	}
}

function alterarTableAuto(form, controller,funcaoController,callback) 
{
	if(form === undefined)
	{
		form = $("form:first").attr('id');
	}

	var dadosFormulario = new FormData();

	//Se houver imagens, acrescenta ao array na parte $_FILES
	if( $('input[type="file"]').length > 0 )
	{		
		var file_data = $('input[type="file"]')[0].files; 

		for(var i = 0;i < file_data.length;i++)
		{
			dadosFormulario.append("file_"+i, file_data[i]);
		}	
	}

	//Serializa o resto do formulário
	var formulario_serializado = $('#'+form).serialize();

	var ativo = ($("#ckkAtivo").is(':checked')) ? 1 : 0;

	dadosFormulario.append("dados", formulario_serializado);
	dadosFormulario.append("metodo", 'alterar');
	dadosFormulario.append("ID_Ajax", $("#txtHidden").val());
	dadosFormulario.append("Ativo", ativo);

	var verificacao = verificar_obrigatorio(form);

	if(verificacao == 1)
	{
		if($("#form_Editarususarios").length < 1)
		{
			$.ajax({
				type: 'POST',
				dataType: 'JSON',
				processData: false,
				contentType: false,
				url:raizSite + '/'+controller+'/'+funcaoController,
				data: dadosFormulario,
				success: function(retornoAlteracao)
				{
					if(retornoAlteracao)
					{
						limpacamposTable();
						preencheCampos(controller,ID);
						
						if(callback !== undefined)
						{
							if(callback.alterar !== undefined)
							{
								for(i=0; i < callback.alterar.length; i++)
								{
									eval(callback.alterar[i]);
								}
							}
						}

						mensagem_notificacao('Alterado com sucesso!', 'success');
					}
					else
					{
						mensagem_notificacao('Erro ao alterar dados!', 'error');
					}
				}
			});			
		}
		else
		{

			var CPF   = ajaxDados({'ID_Ajax':ID, 'campo':'CPF',   'metodo':'alterar', 'valor': $("#txtCPF").val()},'usuarios/verificaDados');
			var Email = ajaxDados({'ID_Ajax':ID, 'campo':'Email', 'metodo':'alterar', 'valor': $("#txtEmail").val()},'usuarios/verificaDados');

			if(CPF == 'NAO')
			{
				mensagem_notificacao('CPF já cadastrado!', 'error');
			}
			else if(Email == 'NAO')
			{
				mensagem_notificacao('Email já cadastrado!', 'error');
			}
			else
			{

				$.ajax({
					type: 'POST',
					dataType: 'JSON',
					processData: false,
					contentType: false,
					url:raizSite + '/'+controller+'/ajaxCRUD',
					data: dadosFormulario,
					success: function(retornoAlteracao)
					{
						if(retornoAlteracao)
						{
							limpacamposTable();
							preencheCampos(controller,ID);
							
							if(callback !== undefined)
							{
								if(callback.alterar !== undefined)
								{
									for(i=0; i < callback.alterar.length; i++)
									{
										eval(callback.alterar[i]);
									}
								}
							}

							mensagem_notificacao('Alterado com sucesso!', 'success');
						}
						else
						{
							mensagem_notificacao('Erro ao alterar dados!', 'error');
						}
					}
				});

			}

		}

	}
	else
	{
		mensagem_notificacao('Preencha todos os campos!', 'error');
	}
}

function deletarAuto(form, controller,funcaoController,grid,callback) 
{
	if(form === undefined)
	{
		form = $("form:first").attr('id');
	}

	if(ID != 0)
	{
		$.ajax({
			type: 'POST',
			dataType: 'JSON',
			url: raizSite + '/'+controller+'/'+funcaoController,
			data: {
				ID_Ajax: ID,
				dados: $('#'+form).serialize(),
				metodo: 'deletar'
			},
			success: function(retornoExcluir)
			{
				if(retornoExcluir)
				{
					auto_limpacampos(form);
					
					auto_habilitar_botao(form, 'incluir');
					eval(grid+'()');

					if(callback !== undefined)
					{
						if(callback.deletar !== undefined)
						{
							for(i=0; i < callback.deletar.length; i++)
							{
								eval(callback.deletar[i]);
							}
						}
					}

					mensagem_notificacao('Registro excluído com sucesso!', 'success');
				}
				else
				{
					mensagem_notificacao('Erro ao excluir dados!', 'error');
				}
			}
		});	
		
	}
	else
	{
		mensagem_notificacao('Selecione um registro!', 'error');
	}
}

function apagarTable(valor)
{
  var funcoes = valor+",divTable, controller,crudPadrao,controllerDados";
  mensagem_notificacao_confirmacao('Deseja deletar o registro?', 'deletarAutoTable('+funcoes+')');
}

function deletarAutoTable(ID, divTable,controller,funcaoController,funcaoCarregaGrid,callback) 
{
	if(divTable === undefined)
	{
		divTable = $('div.gerar:first').attr('id');
	}

	//pega o id da primeira table do divTable passada.
	var table = $("#"+divTable+" table").attr('id');

	if(ID != 0)
	{
		if($("#form_Usuarios").length < 1)
		{
			$.ajax({
				type: 'POST',
				dataType: 'JSON',
				url: raizSite + '/'+controller+'/'+funcaoController,
				data: {
					ID_Ajax: ID,
					metodo: 'deletar'
				},
				success: function(retornoExcluir)
				{
					if(retornoExcluir)
					{
						//recarrega o table.
						var tabela = $('#'+table).DataTable();					 
						tabela.ajax.url(raizSite + '/'+controller+'/'+funcaoCarregaGrid).load();

						if(callback !== undefined)
						{
							if(callback.deletar !== undefined)
							{
								for(i=0; i < callback.deletar.length; i++)
								{
									eval(callback.deletar[i]);
								}
							}
						}

						mensagem_notificacao('Registro excluído com sucesso!', 'success');
					}
					else
					{
						mensagem_notificacao('Erro ao excluir dados!', 'error');
					}
				}
			});	

		}
		else
		{
			$.ajax({
				type: 'POST',
				dataType: 'JSON',
				url: raizSite + '/'+controller+'/ajaxCRUD',
				data: {
					ID_Ajax: ID,
					metodo: 'deletar'
				},
				success: function(retornoExcluir)
				{
					if(retornoExcluir)
					{
						//recarrega o table.
						var tabela = $('#'+table).DataTable();					 
						tabela.ajax.url(raizSite + '/'+controller+'/'+funcaoCarregaGrid).load();

						if(callback !== undefined)
						{
							if(callback.deletar !== undefined)
							{
								for(i=0; i < callback.deletar.length; i++)
								{
									eval(callback.deletar[i]);
								}
							}
						}

						mensagem_notificacao('Registro excluído com sucesso!', 'success');
					}
					else
					{
						mensagem_notificacao('Erro ao excluir dados!', 'error');
					}
				}
			});
		}

		
	}
	else
	{
		mensagem_notificacao('Selecione um registro!', 'error');
	}
}

function novoAuto(form, grid,callback)
{
	auto_habilitar_botao(form, 'incluir');
	auto_limpacampos(form);
	
	eval(grid+'()');


	if(callback !== undefined)
	{
		if(callback.novo !== undefined)
		{
			for(i=0; i < callback.novo.length; i++)
			{
				eval(callback.novo[i]);
			}

		}

	}
}

function novoTableAuto(form, callback)
{
	limpacamposTable();
	
	if(callback !== undefined)
	{
		if(callback.novo !== undefined)
		{
			for(i=0; i < callback.novo.length; i++)
			{
				eval(callback.novo[i]);
			}

		}

	}
}

function funcoesAutoCRUD(form, controller, crudPadrao, nomeGrid, callback)
{
	$('#btnNovo_'+form).click(function()
	{
		if(callback === undefined)
		{
			novoAuto(form, nomeGrid);
		}
		else
		{	
			novoAuto(form, nomeGrid, callback);
		}
	});

	$('#btnIncluir_'+form).click(function(e)
	{	
		if(callback === undefined)
		{
			inserirAuto(form, controller,crudPadrao,nomeGrid);
		}
		else
		{	
			inserirAuto(form, controller,crudPadrao,nomeGrid, callback);
		}
		
	});

	$('#btnAlterar_'+form).click(function(e) 
	{
		if(callback === undefined)
		{
			alterarAuto(form, controller,crudPadrao,nomeGrid);
		}
		else
		{	
			alterarAuto(form, controller,crudPadrao,nomeGrid, callback);
		}
	});

	$('#btnDeletar_'+form).click(function(e) 
	{
		var chamarCallback = "";

		if(callback === undefined)
		{
			chamarCallback = 'form, controller,crudPadrao,nomeGrid';
		}
		else
		{
			chamarCallback = 'form, controller,crudPadrao,nomeGrid,callback';
		}

		DeletarAuto = 'deletarAuto('+chamarCallback+')';

		noty({
		text:  'Deseja deletar o registro?',
		layout: 'center',
		buttons: 
			[
				{
					addClass: 'btn btn-success btn-clean', text: 'Sim',
					onClick: function($noty) 
					{
						$noty.close(); 
						eval(DeletarAuto);
					}
				},
				{
					addClass: 'btn btn-danger btn-clean', text: 'Não',
					onClick: function($noty) 
					{
						$noty.close();
					}
				}
			]
		});

	$('.noty_buttons').css('text-align', 'center');
		//mensagem_notificacao_confirmacao('Deseja deletar o registro?', DeletarAuto);

	});
}

function funcoesAutoTableCRUD(form, controller, crudPadrao, callback)
{
	$('#btnNovo_'+form).click(function()
	{
		if(callback === undefined)
		{
			novoTableAuto(form);
		}
		else
		{	
			novoTableAuto(form, callback);
		}
	});

	$('#btnIncluir_'+form).click(function(e)
	{	
		if(callback === undefined)
		{
			inserirTableAuto(form, controller,crudPadrao);
		}
		else
		{	
			inserirTableAuto(form, controller,crudPadrao,callback);
		}
		
	});

	$('#btnAlterar_'+form).click(function(e) 
	{
		if(callback === undefined)
		{
			alterarTableAuto(form, controller,crudPadrao);
		}
		else
		{	
			alterarTableAuto(form, controller,crudPadrao,callback);
		}
	});
	
}


//tooltip select obrigatório
$('.select.obrigatorio').selectpicker();
$('.select.obrigatorio').tooltip({title: 'campo obrigatório', placement: "top"});



/*Inicio formatar datas datepicker */
$('.datepicker').datepicker({
	format: 'dd/mm/yyyy',
	language: 'pt-BR'
});

//mascaras
$('.mask_dataptbr').mask("99/99/9999");
$('.phone_ptbr').mask("(99)9999-9999");
$('.cel_ptbr').mask("(99)99999-9999");
$('.cep_ptbr').mask("99999-999");
$('.cpf_ptbr').mask("999.999.999-99");
$('.cnpj').mask("99.999.999/9999-99");
$('.inscricaoestadual').mask("999.999.999/999");
$('.cnae').mask("9999-9/99");
$('.hora').mask("99:99");

if($('input.dinheiro').length > 0) 
{
	$("input.dinheiro").maskMoney({decimal:",", thousands:""});
}

//Mascara de telefone dinâmica, se for numero com 9, ele muda
$('.telefonecelular').on('focusout', function () 
{
    numero = $(this).val();
    numero = numero.replace('_','');

    if (numero.length == 13)
        $('.telefonecelular').mask('(99)9999-9999?9');
    else
        $('.telefonecelular').mask('(99)?99999-9999');
});

$('.telefonecelular').on('focusin', function () 
{
    numero = $(this).val();
    numero = numero.replace('_','');

    if (numero.length == 13)
        $('.telefonecelular').mask('(99)9999-9999?9');
    else
        $('.telefonecelular').mask('(99)?99999-9999');
});

$('.somente_numero').keydown(function(e)
{
	var tecla = e.which;
	if((tecla > 47 && tecla < 58) || (tecla > 95 && tecla < 106))
	{
		return true;
	}
	else
	{//      backspace||     tab    ||      F5      ||  seta esq.  || seta dirt.  ||   delete    ||    end      ||     home 
		if(tecla == 8 || tecla == 9 || tecla == 116 || tecla == 37 || tecla == 39 || tecla == 46 || tecla == 35 || tecla == 36)
		{ 
			return true;
		}
		else
		{
			return false;
		}
	}
});

$('.alfa_num').keydown(function(e){
	var tecla = e.which;
	//(          numeros          ||          letras            ||          numeros (numpad))
	if((tecla > 47 && tecla < 58) || (tecla > 64 && tecla < 90) || (tecla > 95 && tecla < 106)){
		return true;
	}else{// backspace||     tab    ||      F5      ||  seta esq.  || seta dirt.  ||   delete    ||    end      ||     home
		if(tecla == 8 || tecla == 9 || tecla == 116 || tecla == 37 || tecla == 39 || tecla == 46 || tecla == 35 || tecla == 36){ 
			return true;
		}else{
			return false;
		}
		
	}
});

$('.numero_virgula').keydown(function(e)
{
	var tecla = e.which;
	//(          numeros          ||          numeros (numpad))
	if((tecla > 47 && tecla < 58) || (tecla > 95 && tecla < 106)){
		return true;
	}else{// backspace||     tab    ||      F5      ||  seta esq.  || seta dirt.  ||   delete    ||    end      ||     home    ||  comma(alfa) || comma(numpad)  
		if(tecla == 8 || tecla == 9 || tecla == 116 || tecla == 37 || tecla == 39 || tecla == 46 || tecla == 35 || tecla == 36 || tecla == 188 || tecla == 110){ 
			return true;
		}else{
			return false;
		}
		
	}
});

/* Fim datas datepicker */

//Função marota pra ajax.
function ajaxDados(dados,caminho,tipoDados,tipo,assincrono)
{
	var Tipo       = (tipo != undefined) ? tipo : 'POST';
	var TipoDados  = (tipoDados != undefined) ? tipoDados : 'JSON';
	var Assincrono = (assincrono != undefined) ? assincrono : false;	
	var retornoAjax;

	$.ajax
	({
		type: Tipo,
		dataType: TipoDados,
		url: raizSite + caminho,
		async: Assincrono,
		data: dados 
		,
		success: function(retorno)
		{
			if(typeof(retorno) == "boolean")
			{
				if(retorno)
				{
					retornoAjax = retorno;
				}
				else
				{
					mensagem_notificacao('Erro ao carregar os dados!', 'error');
				}
			}
			else
			{
				retornoAjax = retorno;
			}
		}
	});

	return retornoAjax;
}

//Função marotissima para recarregar DataTable
function recarregarTable(table, controller, ajax, funcoes, parametro)
{
	var caminho = (parametro != undefined) ? raizSite + controller+'/'+ajax+'/'+parametro : raizSite + controller+'/'+ajax;

	$.ajax
	({
		type: 'POST',
		dataType: 'JSON',
		url: caminho,
		async: false,
		success: function(retorno)
		{
			var tabela = $('#'+table).DataTable();
			tabela.clear().draw();
			tabela.rows.add(retorno);
			tabela.columns.adjust().draw();

			if((funcoes != undefined) && (funcoes.length > 0))
			{
				for(i=0; i < funcoes.length; i++)
				{
					eval(funcoes[i]);
				}
			}
		}
	});
}



$(document).ready(function ()
{
	if($("form:first").hasClass('parametro'))
	{
		var parametro = $("form").attr('ID').substr(5, $("form").attr('ID').length);
		var grid = 'grid_' + parametro + '()';
		eval(grid);
	}

	if($("form:first").hasClass('Tabela'))
	{
		var parametro = $("form").attr('ID').substr(5, $("form").attr('ID').length);
		var grid = 'table_' + parametro + '()';
		eval(grid);
	}
	
	// if($("form.parametro").length > 0)
	// {
	// 	var parametro = $("form").attr('ID').substr(5, $("form").attr('ID').length);
	// 	var grid = 'grid_' + parametro + '()';
	// 	eval(grid);
	// }

	// if($("form.Tabela").length > 0)
	// {
	// 	var parametro = $("form").attr('ID').substr(5, $("form").attr('ID').length);
	// 	var grid = 'table_' + parametro + '()';
	// 	eval(grid);
	// }
});