


function initPaymentOrderDetailsForm(){
  
 var userPriv = kony.store.getItem("userPriv");
  
  
  alert(userPriv);
  
  
  if ( userPriv === "rev" ){
    paymentOrderDetailsForm.paymentOrderDetailsBenefNumInputCont.setVisibility(true);
    paymentOrderDetailsForm.paymentOrderDetailsBenefNumCont.setVisibility(false);
    paymentOrderDetailsForm.paymentOrderDetailsAmountInputCont.setVisibility(true);
    paymentOrderDetailsForm.paymentOrderDetailsAmountCont.setVisibility(false);
    paymentOrderDetailsForm.paymentOrderDetailsProirityCont.setVisibility(true);
    paymentOrderDetailsForm.paymentOrderDetailsProirityInputCont.setVisibility(false);
    
  }else  if ( userPriv === "approver1" ){
    paymentOrderDetailsForm.paymentOrderDetailsBenefNumInputCont.setVisibility(false);
    paymentOrderDetailsForm.paymentOrderDetailsBenefNumCont.setVisibility(true);
    paymentOrderDetailsForm.paymentOrderDetailsAmountInputCont.setVisibility(false);
    paymentOrderDetailsForm.paymentOrderDetailsAmountCont.setVisibility(true);
    paymentOrderDetailsForm.paymentOrderDetailsProirityCont.setVisibility(true);
    paymentOrderDetailsForm.paymentOrderDetailsProirityInputCont.setVisibility(false);
    
  }else  if ( userPriv === "approver2" ){
      paymentOrderDetailsForm.paymentOrderDetailsBenefNumInputCont.setVisibility(false);
    paymentOrderDetailsForm.paymentOrderDetailsBenefNumCont.setVisibility(true);
    paymentOrderDetailsForm.paymentOrderDetailsAmountInputCont.setVisibility(false);
    paymentOrderDetailsForm.paymentOrderDetailsAmountCont.setVisibility(true);
    paymentOrderDetailsForm.paymentOrderDetailsProirityCont.setVisibility(true);
    paymentOrderDetailsForm.paymentOrderDetailsProirityInputCont.setVisibility(false);

    
  }else  if ( userPriv === "mof" ){
    paymentOrderDetailsForm.paymentOrderDetailsBenefNumInputCont.setVisibility(false);
    paymentOrderDetailsForm.paymentOrderDetailsBenefNumCont.setVisibility(true);
    paymentOrderDetailsForm.paymentOrderDetailsAmountInputCont.setVisibility(false);
    paymentOrderDetailsForm.paymentOrderDetailsAmountCont.setVisibility(true);
    paymentOrderDetailsForm.paymentOrderDetailsProirityCont.setVisibility(false);
    paymentOrderDetailsForm.paymentOrderDetailsProirityInputCont.setVisibility(true);

    
  }


  var selectedJSONObj =  kony.store.getItem("selectedJSONObj");
 
  paymentOrderDetailsForm.paymentOrderDetailsHeaderLabel.text = selectedJSONObj['BeneficaryName'];
  paymentOrderDetailsForm.paymentOrderDetailsDateLabel.text = selectedJSONObj['PaymentOrderDateH'];
  paymentOrderDetailsForm.paymentOrderDetailsYearlabel.text = selectedJSONObj['PaymentOrderYear'];
  paymentOrderDetailsForm.paymentOrderDetailsPaymentMethodlLabel.text = selectedJSONObj['PaymentMethod'];
  paymentOrderDetailsForm.paymentOrderDetailsBenefNameLabel.text = selectedJSONObj['BeneficaryName'];
  paymentOrderDetailsForm.paymentOrderDetailsBenefName1Label.text = selectedJSONObj['BeneficaryNameAr'];
  paymentOrderDetailsForm.paymentOrderDetailsIBANLabel.text = selectedJSONObj['Iban'];
  paymentOrderDetailsForm.paymentOrderDetailsCurrencyLabel.text = selectedJSONObj['CurrencyName'];
  paymentOrderDetailsForm.paymentOrderDetailsBenefNumLabel.text = selectedJSONObj['BeneficaryCode'];
  paymentOrderDetailsForm.paymentOrderDetailsAmountLabel.text = selectedJSONObj['Amount'];
  paymentOrderDetailsForm.paymentOrderDetailsAmountWordLabel.text = selectedJSONObj['AmountInWord'];
  paymentOrderDetailsForm.paymentOrderDetailsEntityNameLabel.text = selectedJSONObj['EntityName'];
  paymentOrderDetailsForm.paymentOrderDetailsDeptNameLabel.text = selectedJSONObj['DeptName'];
  paymentOrderDetailsForm.paymentOrderDetailsSectionNameLabel.text = selectedJSONObj['SectionName'];
  paymentOrderDetailsForm.paymentOrderDetailsPaymentOrderNumLabel.text = selectedJSONObj['PaymentOrderNumber'];
  paymentOrderDetailsForm.paymentOrderDetailsProirityLabel.text = selectedJSONObj['Priority'];
  paymentOrderDetailsForm.paymentOrderDetailsRemarkLabel.text = selectedJSONObj['Remark'];
  
   paymentOrderDetailsForm.paymentOrderDetailsInputRemarkLabelTextArea.text = null;
   paymentOrderDetailsForm.paymentOrderDetailsAmountInputContTexBox.text = null;
   paymentOrderDetailsForm.paymentOrderDetailsBenefNumInputTextBox.text = null;
   paymentOrderDetailsForm.paymentOrderDetailsProirityInputContlTextbox = null;
  

}

