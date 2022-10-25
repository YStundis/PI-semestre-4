let ID = 0
const classElem = "Exemplo"; //Usar Comummente Capitular UPPER
const controller = "exemplo"; 

//Criando datatable
let dataTable = new simpleDatatables.DataTable("#table"+classElem, {perPage: 10, perPageSelect: [10, 20 ,30]});

//Instanciando o Choices select
//Cadada Select deve instanciar um elemento do Choice
let element = document.getElementById('selItem_1');
const select = new Choices(element, {
	removeItemButton: false,
	shouldSort: false,
	loadingText: 'Carregando...',
	noResultsText: 'Nenhum registo encontrado',
});

//Carrega os dados da Tabela
function loadTable()
{
	const resp = ajaxDados({}, controller+'/ajaxLoadExemplo');

	dataTable.clear();
	dataTable.data = [];
	if(resp)
	{
		dataTable.insert(resp);
	}
}

//Limpa os campos
function clearFields(classElem)
{
	//Limpa o Choices Select
	select.setChoiceByValue('');

	$('input.'+classElem).val('');
	$('div.'+classElem).removeClass('is-filled');
	$('label').removeClass('font-rose')
	$('input.form-check-input.'+classElem).prop("checked", false);
}

//Carrega os dados da tela
function loadData(IDItem = 0)
{
	const resp = ajaxDados({'ID':IDItem}, controller+'/ajaxLoadDataExemplo');
	let flagItem_4 = (data[0]?.Item_4 == 1) ? true : false;

	ID = IDItem;
	select.setChoiceByValue(resp[0]?.fk_IDItem1);
	$("#txtItem_2").val(resp[0]?.Item_2);
	$("#txtItem_3").val(resp[0]?.Item_3);	
	$('#chkItem_4').prop("checked", flagItem_4);

	//adiciona-se essa classe a div para mudar o estado do input para preenchido (obrigatório)
	$('div.'+classElem).addClass('is-filled');
	stateButtons('edit', 'form'+classElem);
}

//Evento disparado no editar da tabela.
function showModal(IDItem = 0)
{
	//retirando a classe is-focused dos campos
	$("div").removeClass('is-focused');

	if(IDItem > 0)
	{
		loadData(IDItem);
	}

	if(window.innerWidth <= 1300)
	{
		sidenavShow.classList.remove("g-sidenav-pinned"), sidenavShow.classList.add("g-sidenav-hidden"), toggleNavbarMinimize && (toggleNavbarMinimize.click(), toggleNavbarMinimize.setAttribute("checked", "true"));
	}

	$("#modal"+classElem).modal('show');
}

//Verificação de campos preenchido
function checkRequired()
{
	let empty = false;

	$("input.field-required").each(function()
	{
		if($(this).val() == '')
		{
			empty = true;

			const divParent = $(this).parent().attr('id');

			$("#"+divParent).addClass('is-focused');
		}
	});

	$("select.field-required").each(function()
	{
		if($(this).prop('value') == '')
		{
			empty = true;
			const divParent = $(this).parent().parent().parent().attr('id');
			$('#'+divParent + " > label").addClass('font-rose');			
		}
	});		

	return empty;
}

//Verifica se o Choice não está vazio para a classe font-rose
function checkChoiceValue()
{
	$("select.field-required").on('change', function () 
	{ 
		if ($(this).val() != '')
		{
			const divParent = $(this).parent().parent().parent().attr('id');
			$('#'+divParent + " > label").removeClass('font-rose');
		}	
	});
}	


$("#btnRegister").click(function(event)
{
	clearFields(classElem);
	stateButtons('add', 'form'+classElem);
	showModal();
});

//Funcao CRUD está no ajax.js, está automatizada.
$("#btnAdd_form"+classElem).click(function(event)
{
	CRUD('add', controller, classElem);
});

$("#btnEdit_form"+classElem).click(function(event)
{
	CRUD('edit', controller, classElem);
});

$("#btnDelete_form"+classElem).click(function(event)
{
	messageConfirmation('Deseja excluir este registro?','CRUD("delete", "'+controller+'", "'+classElem+'")');
});

$("#btnCloseModal"+classElem).click(function(event)
{
	if(window.innerWidth > 1200)
	{
		sidenavShow.classList.remove("g-sidenav-hidden"), sidenavShow.classList.add("g-sidenav-pinned"), toggleNavbarMinimize && (toggleNavbarMinimize.click(), toggleNavbarMinimize.setAttribute("checked", "true"));
	}
});

$(document).ready(function()
{
	//Carrega as informações da table
	loadTable();
	checkChoiceValue();
});