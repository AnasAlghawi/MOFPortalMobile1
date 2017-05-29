


function initPaymentOrderDetailsForm(){


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


}

