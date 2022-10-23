function ajaxDados(data,path,dataTypes,type,async)
{
	var Type       = (type != undefined) ? type : 'POST';
	var DataTypes  = (dataTypes != undefined) ? dataTypes : 'JSON';
	var Async = (async != undefined) ? async : false;	
	var responseAjax;

	$.ajax
	({
		type: Type,
		dataType: DataTypes,
		url: raizSite + path,
		async: Async,
		data: data 
		,
		success: function(reponse)
		{
			if(typeof(reponse) == "boolean")
			{
				if(reponse)
				{
					responseAjax = reponse;
				}
				else
				{
					message('Erro ao carregar os dados!', 'Atençao', 'error', true);
				}
			}
			else
			{
				responseAjax = reponse;
			}
		}
	});

	return responseAjax;
}


function CRUD(action, controller, classElem)
{
	let success = true;

	if(action != "delete")
	{
		const emptyFields = checkRequired();
		if(emptyFields)
		{
			success = false;
			message('Preencha todos os campos obrigatórios!','Atenção','warning',true);
		}
	}

	if(success)
	{
		if(action == 'delete')
		{
			loadData(ID);
		}
		
		var dadosFormulario = new FormData();
		var formulario_serializado = $('form').serialize();
		dadosFormulario.append("data", formulario_serializado);
		dadosFormulario.append("method", action);
		dadosFormulario.append("ID_Ajax", ID);

		$.ajax
		({
			type: 'POST',
			dataType: 'JSON',
			processData: false,
			contentType: false,
			url: raizSite + '/'+controller+'/ajaxCRUD',
			data: dadosFormulario,
			success: function(retorno)
			{
				if(retorno)
				{
					if(action != "delete")
					{
						if(action == 'add') 
						{
							clearFields(classElem);

							ID = retorno;
							loadData(retorno);
							stateButtons('edit', 'form'+classElem);

							message('Dados salvos com sucesso!');
							loadTable();

						}
						else
						{
							ID = retorno;
							loadData(retorno);

							message('Dados salvos com sucesso!');
							loadTable();
						}
					}
					else
					{
						clearFields(classElem);

						ID = 0;
						$("#modal"+classElem).modal('hide');
						stateButtons('add', 'form'+classElem);
						loadTable();
					}
					
				}
				else
				{
					message('Erro ao salvar os dados!','Atenção','error',true);
				}
			}
		});
	}
}