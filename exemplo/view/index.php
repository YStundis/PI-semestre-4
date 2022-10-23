<div class="container-fluid">
	<div class="card mt-3">
		<div class="card-header p-3 pt-2">
			<div class="icon icon-lg icon-shape bg-gradient-dark shadow text-center border-radius-xl mt-n4 me-3 float-start">
                <i class="material-icons opacity-10">  home  </i>
            </div>
            <h4 class="mb-0 mt-2">Titulo</h4>
        </div>
		<div class="mx-4">
			<div class="col-md-12 d-flex flex-row-reverse">
				<button type="button" id="btnRegister" class="btn btn-icon btn-3 btn-info">
					<span class="btn-inner--icon"><i class="material-icons"> layers </i></span>
					<span class="btn-inner--text"> Cadastrar </span>
				</button>
			</div>

			<!-- Data Table -->
			<div class="table-responsive">
        <table class="table table-flush data-table" id="tableClasseElemento">
          <thead class="thead-light">
            <tr>
              <th width="50px" style="text-align: center !important;">Ação</th>
              <th>Item_1</th>
              <th>Item_2</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>

      <!-- Modal -->
      <div class="modal fade" id="modalClasseElemento" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"  role="dialog" aria-labelledby="cadastroModulo" aria-hidden="true">
        <div class="modal-dialog modal-lg" >
          <div class="modal-content">
            <div class="modal-header mb-2">
              <div class="icon icon-lg icon-shape bg-gradient-dark shadow text-center border-radius-xl mt-n5 me-3 float-start">
                      <i class="material-icons opacity-10"> home </i>
                  </div>
                  <h4 class="mb-0 mt-2 mt-n1">Cadastro de Titulo</h4>
              <button id="btnCloseModalClasseElemento" type="button" class="btn-close bg-gray-900" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form id="formClasseElemento" autocomplete="off">
                <div id="divItem_1" class="col-md-8 mx-3 mb-3 ClasseElemento">
                  <label class="mt-1 form-label ClasseElemento">Item_1  <span class="font-rose">*</span></label>
                  <select id="selItem_1" name="selItem_1" class="form-control ClasseElemento field-required">
                    <option value="">Selecione</option>
<?php
                    foreach ($itens as $item)
                    {
?>
                      <option value="<?php echo $item['ID']?>"><?php echo $item['OptionCMB']?></option>
<?php
                    }
?>
                  </select>
                </div>

                <div class="col-md-8 mx-3">
                  <div id="divItem_2" class="input-group input-group-static mb-4 ClasseElemento">
                    <label class="form-label">Item_2  <span class="font-rose">*</span></label>
                    <input id="txtItem_2" name="txtItem_2" type="text" class="form-control ClasseElemento text-uppercase field-required" maxlength="50">
                  </div>
                </div>

                <div class="col-md-8 mx-3">
                  <div id="divItem_3" class="input-group input-group-static mb-4 ClasseElemento">
                    <label class="form-label">Item_3</label>
                    <input id="txtItem_3" name="txtItem_3" type="text" class="form-control ClasseElemento text-uppercase" maxlength="70">
                  </div>
                </div>

                <div id="divItem_4" class="form-check mx-3">
                <input id="chkItem_4" name="chkItem_4" class="form-check-input ClasseElemento" type="checkbox" value="">
                <label class="form-check-label" for="swtItem_4">Item_4</label>
              </div>

              </form>
            </div>

            <div class="modal-footer justify-content-between">   
              <div class="col-md-3">
              </div>             
              <div class="col-md-6" style="text-align: right">
                <button id="btnAdd_formClasseElemento" type="button" class="btn btn-info">Inserir</button>
                <button id="btnEdit_formClasseElemento" type="button" class="btn btn-info">Alterar</button>
                <button id="btnDelete_formClasseElemento" type="button" class="btn btn-danger">Deletar</button>
              </div>                  
            </div>
          </div>
        </div>
      </div>
      <!-- Fim Modal -->
		</div>
	</div>
</div>

<script type='text/javascript' src="<?php echo base_url('includes/assets/js/plugins/datatables.js') ?>"></script>
<script type='text/javascript' src="<?php echo base_url('includes/assets/js/plugins/choices.min.js') ?>"></script>
<script type='text/javascript' src="<?php echo base_url('includes/js/ajax.js') ?>"></script>
<script type='text/javascript' src="<?php echo base_url('includes/js/paginas/exemplo.js') ?>"></script>