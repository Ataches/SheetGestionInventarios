function newVariableSheet(){
   var validation = setDialogBox();
   if (validation){
     setSheetOnTable('Clientes', 'A1:A30');
     validateVariables();
   }
}
function setDialogBox(){
  var ui = SpreadsheetApp.getUi();
  var result = ui.alert(
    'Atención:',
     'Se creará una nueva factura borrando los datos actuales ¿Desea continuar?',
      ui.ButtonSet.YES_NO);
  if (result == ui.Button.YES)
    return true;  
  return false;
}

function setSheetOnTable(name,range){
  var originSpreadsheet = getSheets(name);
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();

  //se borra todo lo que este antes
  if(sheet.getLastColumn() != 0){
    var clearRange = sheet.getRange(1,1,sheet.getMaxRows(), sheet.getMaxColumns())
    clearRange.clearDataValidations();
    clearRange.clear();
  }
  //se crean algunos estilos para las cabeceras
  var style = SpreadsheetApp.newTextStyle()
    .setBold(true)
    .build();
  //Inserta la data nueva en la hoja
  var destRange= sheet.getRange(range);
      destRange.setWrap(true)
      destRange.setVerticalAlignment("middle");
      destRange.setBackground('#D2F9C8')
      destRange.setHorizontalAlignment("middle")
      destRange.setValues(originSpreadsheet)
  //se pone -1 porque estaba coloreando la ultima columna
  var horizontalHeaderRange = sheet.getRange(9,2,1,sheet.getLastColumn() - 1)
      horizontalHeaderRange.setBackground('#707070')
      horizontalHeaderRange.setTextStyle(style)
  
  var verticalHeaderRange = sheet.getRange(1,1,7,1)
      verticalHeaderRange.setTextStyle(style)
}