function startDateTimePicker()
{

	if (document.querySelector('.datetimepicker'))
	{
	  flatpickr('.datetimepicker', {
	    allowInput: true,
	    dateFormat: 'd/m/Y',
	    minDate: '01/01/2016',
	    maxDate: '31/12/2030',
	    locale: {
		    firstDayOfWeek: 0,
		    weekdays: {
		      shorthand: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
		      longhand: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
		    }, 
		    months: {
		      shorthand: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Julho', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
		      longhand: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
		    },
		  }
	  }); // flatpickr
	}
}
