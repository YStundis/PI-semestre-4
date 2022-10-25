function stateButtons(action, form)
{
	let state = (action == 'add') ? true : false;

	$("#btnAdd_"+form).prop('disabled', !state);
	$("#btnEdit_"+form).prop('disabled', state);
	$("#btnDelete_"+form).prop('disabled', state);
}