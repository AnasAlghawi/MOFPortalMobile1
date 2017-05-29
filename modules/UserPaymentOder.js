var paymentOrderListRequest;
function paymentOrderRequest(privStatus){

  request= new kony.net.HttpRequest();
  paymentOrderListRequest= request;
  request.open(constants.HTTP_METHOD_GET,url+"/PaymentOrderVO?q=PaymentOrderStatus="+privStatus);
  request.setRequestHeader("Content-Type",CONTENT_TYPE);
  request.onReadyStateChange= paymentOrderListRequestCallBack;
  request.send();
}

function paymentOrderListRequestCallBack(){

  if(paymentOrderListRequest.readyState == 4){

    var segArray=[];
    var segPbject={};
    var json= JSON.parse(paymentOrderListRequest.responseText);

    paymentOrderSegmentForm.paymentOrderSegment.removeAll();

    for(i=0;i<json['items'].length;i++){

      var id= json['items'][i]["BeneficaryNameAr"];
      segObject= {"paymentOrderSegmentLabel":id};
      segArray.push(segObject);
    }

    paymentOrderSegmentForm.paymentOrderSegment.addAll(segArray);
    paymentOrderSegmentForm.show();
  }

}




function paymentOrderSegemnetSelectRow() {

  var json= JSON.parse(paymentOrderListRequest.responseText);
  var index =paymentOrderSegmentForm.paymentOrderSegment.selectedRowIndex;
  var selectedRow = index[1];

  kony.store.setItem("selectedJSONObj", json['items'][selectedRow]);

  paymentOrderDetailsForm.show();

}
