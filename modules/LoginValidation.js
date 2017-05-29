

var loginPass;
var userLoginRequest;


const CONTENT_TYPE = "application/vnd.oracle.adf.resourceitem+json" ;
const ipAddress = "192.168.8.103";
const url = "http://"+ipAddress+":7101/MOFMobile-RESTWebService-context-root/rest/v1/"
function userLogin(){

  if (loginForm.userNameTextBox.text !==null ){

    if(loginForm.paaswordTextBox.text !==null){


      loginUser = loginForm.userNameTextBox.text;
      loginPass = loginForm.paaswordTextBox.text;
      request= new kony.net.HttpRequest();
      userLoginRequest= request;
      var userNameParam= loginForm.userNameTextBox.text;
      var paaswordParam= loginForm.paaswordTextBox.text;
      request.open(constants.HTTP_METHOD_GET,url+"/UsersVO?q=Username="+userNameParam+";Password="+paaswordParam);
      request.setRequestHeader("Content-Type",CONTENT_TYPE);
      request.onReadyStateChange= userLoginCallBack;
      request.send();
      //alert("anas");


    }
    else{
      alert("Enter  Password Please.");
    }

  }
  else{
    alert("Enter Name And Password Please.");
  }
}



////////////////////////////////

function userLoginCallBack(){

  if(userLoginRequest.readyState == 4 && userLoginRequest.status == 200 ){

    var json= JSON.parse(userLoginRequest.responseText);

    if(json['items'].length>0){
      var i= 0;
      var name= json['items'][i]['Username'];
      var password	= json['items'][i]['Password'];
      var priv = json['items'][i]['Priv'];


      userLoginPriv(priv);

    }
    else{
      alert("Username or Password Wrong");

    }
  }
}

//////////////////////////////////////////////////////////////

function userLoginPriv(priv){
  //var gg = 'approver2';
  var privStatus;
  switch (priv) {
    case 'approver1':
      privStatus = 2;
      break; 
    case 'approver2':
      privStatus = 3;
      break;
    case 'mof':
      privStatus = 4;
      break;
    default: 
      privStatus = 1;
  }

  paymentOrderRequest(privStatus);

}












