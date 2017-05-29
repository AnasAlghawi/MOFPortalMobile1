function slideMenu(widget){

  var right = widget.right;
  var zIndex = 2;

  if(-1 != right.indexOf("%")){
    right = 20 - parseInt(right.substr(0, right.indexOf("%")));
    if(right == 0){
      zIndex = 1;
    }
    moveMenu(widget, right);
  }  
}


function moveMenu(widget, direction){

  widget.animate(
    kony.ui.createAnimation({100:{right: direction + "%"}}),
    {duration: 0.5, fillMode: kony.anim.FILL_MODE_FORWARDS},
    {animationEnd:
     function(){ } 
    } 
  );
}




function swipe(){ 

  paymentOrderDetailsForm.mainPageCont.addGestureRecognizer(constants.GESTURE_TYPE_SWIPE, {fingers: 1}, swipeOpenClose);
}



function swipeOpenClose(widgetRef, gestureInfo){

  if(1 == gestureInfo["swipeDirection"]){    
    moveAnimation(paymentOrderDetailsForm.mainPageCont, 0);
  }
  else{      
    if(2 == gestureInfo["swipeDirection"]){
      moveAnimation1(paymentOrderDetailsForm.mainPageCont, 20);
    }
  }
}