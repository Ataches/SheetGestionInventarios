function setNameRule(range){
  var ss = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var name = ss.getRange(range);
  var rule = SpreadsheetApp.newDataValidation()
              .requireValueInList(names)
              .setAllowInvalid(false)
              .setHelpText('El valor debe estar dentro de la lista de selección')
              .build();
 name.setDataValidation(rule)
}

function setDateRule(range){
 var ss = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
 var date = ss.getRange(range)
 var rule = SpreadsheetApp.newDataValidation()
              .requireDate()
              .setAllowInvalid(false)
              .setHelpText('Debe ser una fecha valida')
              .build();
  date.setDataValidation(rule)   
}
