import React,{useState,useEffect} from "react";
import {Animated} from "react-animated-css";



let color= {

  paddingBottom:"40px"
}

function Image(props){

const [visible,setVisible]=useState(true);

  return(
    <>
      <div  className="col-lg-4" style={color} >
      <Animated
        animationIn="fadeIn"
        animationOut="bounceOut"
        animationInDuration={1000}
        animationOutDuration={1000}
        isVisible={visible}
      >


          <div >

            <img  style={{width: "320px",height:"240px"}} alt="" src={props.arrayItem} />

          </div>


          <i  className="fas fa-trash-alt delete-bottom-right" style={{marginTop:'10px'}} onClick={
            ()=>{
              setVisible(false);
              setTimeout(()=>{setVisible(true);},1000);

              props.deleteImage(props.id);
            }}/>


        </Animated>
      </div>
    </>
  );
}
export default Image;
