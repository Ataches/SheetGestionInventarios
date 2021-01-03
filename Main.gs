
function getSheets(sheetType){
  var url = 'https://docs.google.com/spreadsheets/d/19kyzj9wofHmO2vzOzKS8VpWK86MAtW6dX1bISj3MJIE/edit#gid=0'
  var ss = SpreadsheetApp.openByUrl(url);
  
  var sheets = {
    "Productos": ss.getSheetByName('Clientes').getDataRange().getValues(),
    "Clientes": ss.getSheetByName('Productos').getDataRange().getValues()
  } 
  return sheets[sheetType]
}