function getCustomerData(){
  customer_data = customer_sheet.getRange(2,2,customer_sheet.getLastRow(),customer_sheet.getLastColumn()).getValues(); 
}
