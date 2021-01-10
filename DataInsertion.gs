function dataInsertion(){
  var validation = setDialogBoxInsert();
  if (validation){
    validateData();
    var ss = SpreadsheetApp.getActiveSheet();
    var currentTable = ss.getName(); 
    var range = tableData[currentTable][1] //TableData.gs
    insertIntoTable(range, tableData[currentTable], currentTable)
  }
}

var tableData = {
'Registrar factura':[
 {
    fields: [
       {name:'FechaModificacion' , type:'TIMESTAMP'}
    ]
  }
  ],
  'Datos':[
 {
    fields: [
       {name:'FechaModificacion' , type:'TIMESTAMP'}
    ]
  }
  ]
}  

function setDialogBoxInsert(){
  var ui = SpreadsheetApp.getUi();
  var result = ui.alert(
    'Atención:',
    'Si continuas se insertaran todos los datos ¿Desea continuar?',
    ui.ButtonSet.YES_NO);
  
  if (result == ui.Button.YES)
    return true;
  return false;  
}


function insertIntoTable(range, tableName, tableId) {
    var sheets = SpreadsheetApp.getActive().getSheets()
    for (ssItem in sheets){
      if(ssItem == tableId)
        ss = ssItem
    }
    ss = sheets[0]
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