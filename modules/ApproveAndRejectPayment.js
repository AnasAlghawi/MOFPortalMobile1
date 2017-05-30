var paymentOrderReq;


function rejectReasonCheck(){
 
  
  function rejectAlertHandler(alertResponse)
                                {     
                                    if(alertResponse == true){                                       
                                        rejectPaymentOrder();
                                    } 
                                 
 
                                }
    
  var remarkTextBox = paymentOrderDetailsForm.paymentOrderDetailsInputRemarkLabelTextArea.text;
  if(remarkTextBox !== null && remarkTextBox !== " " ){
    
    var basicConf = {message: "هل أنت متأكد من إرجاع الإعتماد",alertType: constants.
                        ALERT_TYPE_CONFIRMATION,alertTitle: "تأكيد الإرجاع",yesLabel:"نعم",
                        noLabel: "لا", alertHandler: rejectAlertHandler};
    
    var pspConf = {}; 
    var infoAlert = kony.ui.Alert(basicConf,pspConf);
    
        rejectPaymentOrder();
    
    
  
    
    
    
  }
  else{
    alert("الرجاء إدخال سبب الرفض");
  }
  
  
  // paymentOrderDetailsForm.paymentOrderDetailsDateLabelText.setVisibility(false);
  
  
}



function approvePaymentOrder(){
  
  var id = getJSONValueByJSONAttributeName("Id");
   request= new kony.net.HttpRequest();
   paymentOrderReq= request;
   request.onReadyStateChange= approvmentResponse;     
   request.open("PUT",url+"PaymentOrderVO/"+id);
   request.setRequestHeader("Content-Type","application/vnd.oracle.adf.resourceitem+json; charset=UTF-8");
  
  var newPaymentOrderStatus = changeStatusApprovment();
  var newRemark = getJSONValueByJSONAttributeName("Remark");
  var newAmount = getJSONValueByJSONAttributeName("Amount");
  var newBeneficaryNum = getJSONValueByJSONAttributeName("BeneficaryCode");
  var newPriority = getJSONValueByJSONAttributeName("Priority");
  var userPriv = kony.store.getItem("userPriv");
  
  if(userPriv == "rev"){
        var currentAmount = paymentOrderDetailsForm.paymentOrderDetailsAmountLabel.text;
        var currentBeneficaryNum = paymentOrderDetailsForm.paymentOrderDetailsBenefNumLabel.text;    
        newAmount = paymentOrderDetailsForm.paymentOrderDetailsAmountInputContTexBox.text;
        newBeneficaryNum = paymentOrderDetailsForm.paymentOrderDetailsBenefNumInputTextBox.text;
    
        if(currentAmount == newAmount && currentBeneficaryNum == newBeneficaryNum ){
            
         update = newValues(newPaymentOrderStatus,newRemark,newAmount,newBeneficaryNum,newPriority);
         request.send(update);
        }
        else{
            alert("المبلغ أو رقم المستفيد غير صحيح");
        }
    
  }
  
  else if(userPriv == "mof"){
     newAmount = getJSONValueByJSONAttributeName("Amount");
     newBeneficaryNum = getJSONValueByJSONAttributeName("BeneficaryCode");
     newPriority = paymentOrderDetailsForm.paymentOrderDetailsProirityInputContlTextbox.text;
     if(newPriority !== null && newPriority !==" " ){
       
       
           update = newValues(newPaymentOrderStatus,newRemark,newAmount,newBeneficaryNum,newPriority);
           request.send(update);  
       //alert('Priority not null');
     }
     else{
         alert("الرجاء إدخال الأولوية");
    }
    
  }
  
  else {
     
    
    
  update = newValues(newPaymentOrderStatus,newRemark,newAmount,newBeneficaryNum,newPriority);
  request.send(update);
  }
  
  
  
  
  

}



function rejectPaymentOrder(){
  
   request= new kony.net.HttpRequest();
   paymentOrderReq= request;
   request.onReadyStateChange=approvmentResponse;     
   request.open("PUT",url+"PaymentOrderVO/8");
   request.setRequestHeader("Content-Type","application/vnd.oracle.adf.resourceitem+json; charset=UTF-8");
 
  var newRemark = paymentOrderDetailsForm.paymentOrderDetailsInputRemarkLabelTextArea.text;
  update = newValues(0,newRemark);
  //alert(update);
  request.send(update);

  
}



function getJSONValueByJSONAttributeName (attributeName){
  
  var jsonObj= JSON.parse(paymentOrderListRequest.responseText);
  var selectedIndex =paymentOrderSegmentForm.paymentOrderSegment.selectedRowIndex;
  var selectedRow = selectedIndex[1];
  var jsonValue = jsonObj['items'][selectedRow][attributeName];
  return jsonValue;
}



function newValues(paymentOrderStatus,remark,amount,beneficaryNum,priority){
    
  var newPaymentOrderStatus = paymentOrderStatus;
  var newRemark = remark;
  var newAmount = amount;
  var newBeneficaryNum = beneficaryNum;
  var newPriority = priority;
  
  
  var id = getJSONValueByJSONAttributeName("Id");
 // var amount = getJSONValueByJSONAttributeName("Amount");
  var beneficaryName = getJSONValueByJSONAttributeName("BeneficaryName");
  var beneficaryNameAr = getJSONValueByJSONAttributeName("BeneficaryNameAr");
  var paymentOrderDateH = getJSONValueByJSONAttributeName("PaymentOrderDateH");
  var paymentOrderNumber = getJSONValueByJSONAttributeName("PaymentOrderNumber");
 // var remark = getJSONValueByJSONAttributeName("Remark");
  var iban = getJSONValueByJSONAttributeName("Iban");
  var amountInWord = getJSONValueByJSONAttributeName("AmountInWord");
 // var beneficaryCode = getJSONValueByJSONAttributeName("BeneficaryCode");
  var currencyName = getJSONValueByJSONAttributeName("CurrencyName");
  var entityName = getJSONValueByJSONAttributeName("EntityName");
  var deptName = getJSONValueByJSONAttributeName("DeptName");
  var sectionName = getJSONValueByJSONAttributeName("SectionName");
  var exchangeOf = getJSONValueByJSONAttributeName("ExchangeOf");
  var paymentMethod = getJSONValueByJSONAttributeName("PaymentMethod");
//   var paymentOrderStatus = json['items'][selectedRow]["PaymentOrderStatus"];
  var paymentOrderYear = getJSONValueByJSONAttributeName("PaymentOrderYear");
 // var priority = getJSONValueByJSONAttributeName("Priority");
  
    
  
//     var jsonObj= JSON.parse(paymentOrderListRequest.responseText);
//   var selectedIndex =paymentOrderSegmentForm.paymentOrderSegment.selectedRowIndex;
//   var selectedRow = selectedIndex[1];
//   var jsonValue = jsonObj['items'][selectedRow];
  
//   jsonValue["PaymentOrderStatus"]=newPaymentOrderStatus;
  
  
  
  var update=
      {
        "Id": id,
        "Amount": newAmount,
        "BeneficaryName": beneficaryName,
        "BeneficaryNameAr":beneficaryNameAr,
        "PaymentOrderDateH": paymentOrderDateH,
        "PaymentOrderNumber":paymentOrderNumber,
        "Remark":newRemark ,
        "Iban": iban,
        "AmountInWord": amountInWord,
        "BeneficaryCode": newBeneficaryNum,
        "CurrencyName": currencyName,
        "EntityName": entityName,
        "DeptName": deptName,
        "SectionName": sectionName,
        "ExchangeOf": exchangeOf,
        "PaymentMethod": paymentMethod,
        "PaymentOrderStatus": newPaymentOrderStatus,
        "PaymentOrderYear": paymentOrderYear,
        "Priority": newPriority,
        "links": [
          {
            "rel": "self",
            "href": url+"PaymentOrderVO/"+id,
            "name": "PaymentOrderVO",
            "kind": "item"
          },
          {
            "rel": "canonical",
            "href": url+"PaymentOrderVO/"+id,
            "name": "PaymentOrderVO",
            "kind": "item"
          }
        ]
      };
    
//    return jsonValue;
      return update;
}




function changeStatusApprovment(){

   var currentPaymentOrderStatus = getJSONValueByJSONAttributeName("PaymentOrderStatus");
   var newPaymentOrderStatus;
   
      switch (currentPaymentOrderStatus) {
              case '1':
               newPaymentOrderStatus = 2;
              break; 
              case '2':
               newPaymentOrderStatus = 3;
              break;
              case '3':
               newPaymentOrderStatus = 4;
              break;
              default: 
                newPaymentOrderStatus = 4;
            }
  return newPaymentOrderStatus; 
}




function approvmentResponse(){
  
   if(paymentOrderReq.readyState == 4){
 		alert(paymentOrderReq.responseText);
        userLogin();
//         paymentOrderDetailsForm.paymentOrderDetailsInputRemarkLabelTextArea.text = null;
  }
}


  











// function selectedID(){

//   var json= JSON.parse(paymentOrderListRequest.responseText);
//   var index =paymentOrderSegmentForm.paymentOrderSegment.selectedRowIndex;
//   var selectedRow = index[1];

//   var id = json['items'][selectedRow]["Id"];
//   return id;

// }


// function selectedStatus(){

//   var json= JSON.parse(paymentOrderListRequest.responseText);
//   var index =paymentOrderSegmentForm.paymentOrderSegment.selectedRowIndex;
//   var selectedRow = index[1];
//   var paymentOrderStatus = json['items'][selectedRow]["PaymentOrderStatus"];
//   return paymentOrderStatus;

// }

// function newValues(paymentOrderStatus){
  
// //   var paymentOrderStatus = paymentOrderStatus();
//   var id = selectedID();
//   var approverStatuse = paymentOrderStatus;
//    var json= JSON.parse(paymentOrderListRequest.responseText);
//   var index =paymentOrderSegmentForm.paymentOrderSegment.selectedRowIndex;
//   var selectedRow = index[1];
//   var jsonObect = json['items'][selectedRow];

//   var amount = jsonObect["Amount"];
//   var beneficaryName = jsonObect["BeneficaryName"];
//   var beneficaryNameAr = jsonObect["BeneficaryNameAr"];
//   var paymentOrderDateH = jsonObect["PaymentOrderDateH"];
//   var paymentOrderNumber = jsonObect["PaymentOrderNumber"];
//   var remark = jsonObect["Remark"];
//   var iban = jsonObect["Iban"];
//   var amountInWord = jsonObect["AmountInWord"];
//   var beneficaryCode = jsonObect["BeneficaryCode"];
//   var currencyName = jsonObect["CurrencyName"];
//   var entityName = jsonObect["EntityName"];
//   var deptName = jsonObect["DeptName"];
//   var sectionName = jsonObect["SectionName"];
//   var exchangeOf = jsonObect["ExchangeOf"];
//   var paymentMethod = jsonObect["PaymentMethod"];
// //   var paymentOrderStatus = json['items'][selectedRow]["PaymentOrderStatus"];
//   var paymentOrderYear = jsonObect["PaymentOrderYear"];
//   var priority = jsonObect["Priority"];
  
    
  
//   var update=
//       {
//         "Id": id,
//         "Amount": amount,
//         "BeneficaryName": beneficaryName,
//         "BeneficaryNameAr":beneficaryNameAr,
//         "PaymentOrderDateH": paymentOrderDateH,
//         "PaymentOrderNumber":paymentOrderNumber,
//         "Remark":remark ,
//         "Iban": iban,
//         "AmountInWord": amountInWord,
//         "BeneficaryCode": beneficaryCode,
//         "CurrencyName": currencyName,
//         "EntityName": entityName,
//         "DeptName": deptName,
//         "SectionName": sectionName,
//         "ExchangeOf": exchangeOf,
//         "PaymentMethod": paymentMethod,
//         "PaymentOrderStatus": paymentOrderStatus,
//         "PaymentOrderYear": paymentOrderYear,
//         "Priority": priority,
//         "links": [
//           {
//             "rel": "self",
//             "href": url+"PaymentOrderVO/"+id,
//             "name": "PaymentOrderVO",
//             "kind": "item"
//           },
//           {
//             "rel": "canonical",
//             "href": url+"PaymentOrderVO/"+id,
//             "name": "PaymentOrderVO",
//             "kind": "item"
//           }
//         ]
//       };
  
  
//    return update;
// }




// function changeStatusApprovment(){
// var approveLevel = selectedStatus();
  
//    var newvalue;
//    switch (approveLevel) {
//      case 'approver1':
//        newvalue = 2+1;
//        break; 
//      case 'approver2':
//        newvalue = 3+1;
//        break;
//      case 'mof':
//        newvalue = 4;
//        break;
//      default: 
//        newvalue = 1+1;
//    }
  
//   approve(newvalue);
  
// }


// function approve(newValue){
  
//   newValue = newValue; 
//   var id = selectedID();
//   var update = newValues(newValue);
  
     

//    req1 = request;
  
//    request= new kony.net.HttpRequest(); 
//    request.open(constants.HTTP_METHOD_PUT,url+"PaymentOrderVO/"+id);
//    request.setRequestHeader("Content-Type",CONTENT_TYPE);
//    request.onReadyStateChange=selectedIDCallBack;
//    var json= JSON.parse(update);
//    request.send(json);
  
  
  
// }






// // function selectedIDCallBack(){
  
   
// //    if(req1.readyState == 4){
// // 		alert(req1.responseText);
// //      alert("anas");
// //   }
  
// // }
// function selectedID(){

//   var json= JSON.parse(paymentOrderListRequest.responseText);
//   var index =paymentOrderSegmentForm.paymentOrderSegment.selectedRowIndex;
//   var selectedRow = index[1];

//   var id = json['items'][selectedRow]["Id"];
//   return id;

// }


// function selectedStatus(){

//   var json= JSON.parse(paymentOrderListRequest.responseText);
//   var index =paymentOrderSegmentForm.paymentOrderSegment.selectedRowIndex;
//   var selectedRow = index[1];
//   var paymentOrderStatus = json['items'][selectedRow]["PaymentOrderStatus"];
//   return paymentOrderStatus;

// }




// function getJSONValueByJSONAttributeName (attributeName){
  
//   var jsonObj= JSON.parse(paymentOrderListRequest.responseText);
//   var selectedIndex =paymentOrderSegmentForm.paymentOrderSegment.selectedRowIndex;
//   var selectedRow = index[1];
//   var paymentOrderStatus = jsonObj['items'][selectedRow][attributeName];
//   return paymentOrderStatus;
// }


