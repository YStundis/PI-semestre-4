function message(message, title, type, confirmation = false)
{
	let Icon;
	let TitleMessage;
	let Parameters;

	TitleMessage = (title === undefined || title == null) ? 'Sucesso!' : title;

	switch(type)
	{
		case 'warning' : Icon = 'warning'; break;
		case 'error'   : Icon = 'error'; break;
		case 'info'   : Icon = 'info'; break;
		default: Icon = 'success';
	}

	Parameters = {
					position: 'center',
					icon: Icon,
					title: TitleMessage,
					text: message,
					showConfirmButton: false,
					timer: 1500,
					timerProgressBar: true
				}

	if (confirmation)
	{
		Parameters.showConfirmButton = true;
		delete Parameters.timer;
	}

	Swal.fire(Parameters);
}

function messageConfirmation(ask, func)
{
	const swalWithBootstrapButtons = Swal.mixin({
		customClass: {
			confirmButton: 'swal2-confirm btn bg-gradient-success',
			cancelButton: 'swal2-cancel btn bg-gradient-danger'
		},
		buttonsStyling: false
	})

	swalWithBootstrapButtons.fire({
		title: 'Atenção!',
		text: ask,
		icon: 'warning',
		showCancelButton: true,
		confirmButtonText: 'Sim, eu quero!',
		cancelButtonText: 'Não, cancelar!',
		reverseButtons: true
		}).then((result) => {
			if (result.isConfirmed)
			{
				//executa a funcao passada com oparametro;
				eval(func);

				swalWithBootstrapButtons.fire(
				  'Sucesso!',
				  'Ação realizada com sucesso!',
				  'success'
				)
			}
			else if(result.dismiss === Swal.DismissReason.cancel)
			{
				swalWithBootstrapButtons.fire(
				  'Cancelado',
				  'Ação cancelada com sucesso!',
				  'error'
				)
			}
	})
}