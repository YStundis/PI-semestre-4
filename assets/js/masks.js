function onlyNumber(evt)
{          
	var tecla = evt.which;

	if((tecla > 47 && tecla < 58))
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
}

//CPF
if($(".cpf").length > 0)
{
	$('.cpf').mask("999.999.999-99");
}

//Telefone Fixo
if($(".phone").length > 0)
{
	$('.phone').mask("(99)9999-9999");
}