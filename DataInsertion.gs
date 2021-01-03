function dataInsertion(){
  var validation = setDialogBoxInsert();
  if (validation){
    var ss = SpreadsheetApp.getActiveSheet();
    var currentTable = ss.getName(); 
    var range = tableData[currentTable][1] //TableData.gs
    insertIntoTable(range, tableData[currentTable][2], currentTable, ss)
  }
}

function setDialogBoxInsert(){
  var ui = SpreadsheetApp.getUi();
  var result = ui.alert(
    'Atención:',
    'Si continuas se insertaran todos los datos que se encuentren dentro de la hoja de calculo en la plataforma Alto Maipo ¿Quieres seguir?',
    ui.ButtonSet.YES_NO);
  
  if (result == ui.Button.YES)
    return true;
  return false;  
}


function insertIntoTable(range, tableName, tableId, ss) {
    //Se preparan los nuevos valores pra ser insertados
    var data = ss.getSheetValues(10, 2, ss.getLastRow() - 9, range)
    var csv = "";
    
    var dateNow = Utilities.formatDate(new Date(), "GMT-5:00", "yyyy-MM-dd HH:mm:ss");
    var cont_1 = 0;
    for (items in data) {
        var cont_2 = 0;
        for (item in items) {
            if((typeof item) == 'object')
              var item = Utilities.formatDate(item, "GMT-5:00", "yyyy-MM-dd HH:mm:ss");     
            
            if(cont_2 == items.length - 1)
              csv += item + ',' + dateNow + '\n'
            else
              csv += item + ','
            cont_2 += 1;          
        }
        cont_1 += 1;
    }
}