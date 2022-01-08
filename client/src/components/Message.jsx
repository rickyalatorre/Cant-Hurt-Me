import React from "react";
import Alert from "react-bootstrap/Alert";
//Big Picture: We want to be able to grab the message from a post login , post register
//post badhand . Either if its successful or not we want to be able to put the message
//below the attempt.

//we make a message function that basically reads if data.message.msgError is true or false
//and based off that we can make a message design

function Style(props){

  if(props.message.msgError){

    return 'danger';
  }else{

    return 'primary';
  }

}


function Message(props){


  return(
    <Alert variant={Style(props)}>
      <div>{props.message.msgBody}</div>
    </Alert>

  );
}
export default Message;
