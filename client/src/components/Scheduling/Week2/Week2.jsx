import React,{useState,useEffect,useContext} from "react";
import Day from "../Week1/Day";
import ScheduleService from '../../../Services/ScheduleService';
import {AuthContext} from '../../../Context/AuthContext';
import AuthService from '../../../Services/AuthService';

function Week2(props){

const [color,setColor]=useState("")
//we have to press edit button before we can change update to true
const[update,setUpdate]=useState(false);
//This array is used to grab _id from all models,from the backend
const [array,setArray]=useState([]);
const [isLoaded,setIsLoaded]=useState(false);

// const authContext= useContext(AuthContext);
const {setIsAuthenticated,setUser}=useContext(AuthContext)

//functions allow us to choose the background color of block

function red(){
  setColor("red")
}

function blue(){
  setColor("blue")
}

function green(){
  setColor("green");
}

function grey(){
  setColor("grey")
}

function yellow(){
  setColor("yellow")
}

function black(){
  setColor(" #433d3c")
}

function orange(){
  setColor("orange");
}
function purple(){
  setColor("purple");
}
function torquoise(){
  setColor("#40E0D0");
}
//All our day models are based on skeleton object
let skeleton={

    block1:[{backgroundColor:""},0],
    block2:[{backgroundColor:""},0],
    block3:[{backgroundColor:""},0],
    block4:[{backgroundColor:""},0],
    block5:[{backgroundColor:""},0],
    block6:[{backgroundColor:""},0],
    block7:[{backgroundColor:""},0],
    block8:[{backgroundColor:""},0],
    block9:[{backgroundColor:""},0],
    block10:[{backgroundColor:""},0],
    block11:[{backgroundColor:""},0],
    block12:[{backgroundColor:""},0],
    block13:[{backgroundColor:""},0],
    block14:[{backgroundColor:""},0],
    block15:[{backgroundColor:""},0],
    block16:[{backgroundColor:""},0],
    block17:[{backgroundColor:""},0],
    block18:[{backgroundColor:""},0],
    block19:[{backgroundColor:""},0],
    block20:[{backgroundColor:""},0],
    block21:[{backgroundColor:""},0],
    block22:[{backgroundColor:""},0],
    block23:[{backgroundColor:""},0],
    block24:[{backgroundColor:""},0],
    block25:[{backgroundColor:""},0],
    block26:[{backgroundColor:""},0],
    block27:[{backgroundColor:""},0],
    block28:[{backgroundColor:""},0],
    block29:[{backgroundColor:""},0],
    block30:[{backgroundColor:""},0],
    block31:[{backgroundColor:""},0],
    block32:[{backgroundColor:""},0],
    block33:[{backgroundColor:""},0],
    block34:[{backgroundColor:""},0],
    block35:[{backgroundColor:""},0],
    block36:[{backgroundColor:""},0],
    block37:[{backgroundColor:""},0],
    block38:[{backgroundColor:""},0],
    block39:[{backgroundColor:""},0],
    block40:[{backgroundColor:""},0],
    block41:[{backgroundColor:""},0],
    block42:[{backgroundColor:""},0],
    block43:[{backgroundColor:""},0],
    block44:[{backgroundColor:""},0],
    block45:[{backgroundColor:""},0],
    block46:[{backgroundColor:""},0],
    block47:[{backgroundColor:""},0],
    block48:[{backgroundColor:""},0],
    block49:[{backgroundColor:""},0],
    block50:[{backgroundColor:""},0],
    block51:[{backgroundColor:""},0],
    block52:[{backgroundColor:""},0],
    block53:[{backgroundColor:""},0],
    block54:[{backgroundColor:""},0],
    block55:[{backgroundColor:""},0],
    block56:[{backgroundColor:""},0],
    block57:[{backgroundColor:""},0],
    block58:[{backgroundColor:""},0],
    block59:[{backgroundColor:""},0],
    block60:[{backgroundColor:""},0],
    block61:[{backgroundColor:""},0],
    block62:[{backgroundColor:""},0],
    block63:[{backgroundColor:""},0],
    block64:[{backgroundColor:""},0],
    block65:[{backgroundColor:""},0],
    block66:[{backgroundColor:""},0],
    block67:[{backgroundColor:""},0],
    block68:[{backgroundColor:""},0],
    block69:[{backgroundColor:""},0],
    block70:[{backgroundColor:""},0],
    block71:[{backgroundColor:""},0],
    block72:[{backgroundColor:""},0],
    block73:[{backgroundColor:""},0],
    block74:[{backgroundColor:""},0],
    block75:[{backgroundColor:""},0],
    block76:[{backgroundColor:""},0],
    block77:[{backgroundColor:""},0],
    block78:[{backgroundColor:""},0],
    block79:[{backgroundColor:""},0],
    block80:[{backgroundColor:""},0],
    block81:[{backgroundColor:""},0],
    block82:[{backgroundColor:""},0],
    block83:[{backgroundColor:""},0],
    block84:[{backgroundColor:""},0],
    block85:[{backgroundColor:""},0],
    block86:[{backgroundColor:""},0],
    block87:[{backgroundColor:""},0],
    block88:[{backgroundColor:""},0],
    block89:[{backgroundColor:""},0],
    block90:[{backgroundColor:""},0],
    block91:[{backgroundColor:""},0],
    block92:[{backgroundColor:""},0],
    block93:[{backgroundColor:""},0],
    block94:[{backgroundColor:""},0],
    block95:[{backgroundColor:""},0],
    block96:[{backgroundColor:""},0]
}
//I create every day to be an object like skeleton
  const[evolve,setEvolve]=useState(skeleton);

  const[tuesObj,setTuesObj]=useState(skeleton);

  const[wedObj,setWedObj]=useState(skeleton);

  const[thursObj,setThursObj]=useState(skeleton);

  const[friObj,setFriObj]=useState(skeleton);

  const[satObj,setSatObj]=useState(skeleton);

  const[sunObj,setSunObj]=useState(skeleton);

  //Will hold our id when we click on edit button

  const [idHolder,setIdHolder]=useState(null);

  function authCheck(){
    console.log('running authCheck, week2');
    AuthService.isAuthenticated().then(data=>{
      if(!data.isAuthenticated){
        console.log('authCheck is reading, not authenticated, week 2')
        setIsAuthenticated(false);
        setUser({username:""});
      }
    })
  }
  //Brings our data when page loads for the first time
  useEffect(()=>{
    const controller = new AbortController();
    const signal = controller.signal;
    let mounted=true;
      ScheduleService.getSchedule(signal).then(data=>{
        if (mounted){
          setIsLoaded(true);
          setArray(data.message.documents);
          setEvolve(data.message.documents[7]);
          setTuesObj(data.message.documents[8]);
          setWedObj(data.message.documents[9]);
          setThursObj(data.message.documents[10]);
          setFriObj(data.message.documents[11]);
          setSatObj(data.message.documents[12]);
          setSunObj(data.message.documents[13]);
      }
      })

    return ()=>{
      mounted=false;
      controller.abort();
      // AuthService.isAuthenticated().then(data=>{
      //   if(!data.isAuthenticated){
      //     console.log('authCheck, week 2, is reading, not authenticated')
      //     setIsAuthenticated(false);
      //     setUser({username:""});
      //   }
      // })
    }
  },[])//setIsAuthenticated, setUser

  //Styles our edit,and save button
  const [saveButtonStyle,setSaveButtonStyle]=useState('btn btn-light');
  const [editButtonStyle,setEditButtonStyle]=useState('btn btn-info');
  //The week2Obj holds the functions that tell the day object,what blocks
  //are going to be the color chosen. We set that day object with its new colors
let week2Obj={

  mon: function (event){
    if (update){
      const name=event.target.getAttribute('name');
      let tempObject=[{backgroundColor:color},0];
      if(tempObject[0].backgroundColor==="red"){
        tempObject=[{backgroundColor:color},1]
      }else{
        tempObject=[{backgroundColor:color},0]
      }
      setEvolve(function(prev){
        //Once we change the day object, we focus
        //on the save button to let us know we are ready to save
        setSaveButtonStyle('btn btn-info');
        setEditButtonStyle('btn btn-light');
        return{
          ...prev,
        [name]: tempObject
        }
      })
    }else{
      console.log('have not clicked on edit yet')
    }

  },
  tues:function (event){
    if (update){
    const name=event.target.getAttribute('name');
    let tempObject=[{backgroundColor:color},0];
    if(tempObject[0].backgroundColor==="red"){
      tempObject=[{backgroundColor:color},1]
    }else{
      tempObject=[{backgroundColor:color},0]
    }
    setTuesObj(function(prev){
      setSaveButtonStyle('btn btn-info');
      setEditButtonStyle('btn btn-light');
      return{
        ...prev,
      [name]: tempObject
      }
    })
  }
  },
  wed:function (event){
    if (update){
    const name=event.target.getAttribute('name');
    let tempObject=[{backgroundColor:color},0];
    if(tempObject[0].backgroundColor==="red"){
      tempObject=[{backgroundColor:color},1]
    }else{
      tempObject=[{backgroundColor:color},0]
    }
    setWedObj(function(prev){
      setSaveButtonStyle('btn btn-info');
      setEditButtonStyle('btn btn-light');
      return{
        ...prev,
      [name]: tempObject
      }
    })
  }
  },
  thurs:function (event){
    if(update){
    const name=event.target.getAttribute('name');
    let tempObject=[{backgroundColor:color},0];
    if(tempObject[0].backgroundColor==="red"){
      tempObject=[{backgroundColor:color},1]
    }else{
      tempObject=[{backgroundColor:color},0]
    }
    setThursObj(function(prev){
      setSaveButtonStyle('btn btn-info');
      setEditButtonStyle('btn btn-light');
      return{
        ...prev,
      [name]: tempObject
      }
    });
  };
  },
  fri:function (event){
    if(update){
    const name=event.target.getAttribute('name');
    let tempObject=[{backgroundColor:color},0];
    if(tempObject[0].backgroundColor==="red"){
      tempObject=[{backgroundColor:color},1]
    }else{
      tempObject=[{backgroundColor:color},0]
    }
    setFriObj(function(prev){
      setSaveButtonStyle('btn btn-info');
      setEditButtonStyle('btn btn-light');
      return{
        ...prev,
      [name]: tempObject
      }
    });
  };
  },
  sat:function (event){
    if(update){
    const name=event.target.getAttribute('name');
    let tempObject=[{backgroundColor:color},0];
    if(tempObject[0].backgroundColor==="red"){
      tempObject=[{backgroundColor:color},1]
    }else{
      tempObject=[{backgroundColor:color},0]
    }
    setSatObj(function(prev){
      setSaveButtonStyle('btn btn-info');
      setEditButtonStyle('btn btn-light');
      return{
        ...prev,
      [name]: tempObject
      }
    });
  };
  },
  sun:function (event){
    if(update){
    const name=event.target.getAttribute('name');
    let tempObject=[{backgroundColor:color},0];
    if(tempObject[0].backgroundColor==="red"){
      tempObject=[{backgroundColor:color},1]
    }else{
      tempObject=[{backgroundColor:color},0]
    }
    setSunObj(function(prev){
      setSaveButtonStyle('btn btn-info');
      setEditButtonStyle('btn btn-light');
      return{
        ...prev,
      [name]: tempObject
      }
    })
  };
}
};

//below are our day counters that will add 1
//evertime we have a red block.Inside Day component we will
//multiply it by 15 to get us our minutes being unproductive
  let monCount=0;

Object.values(evolve).forEach(val=>{
  if(val[1] === 1){
    monCount= monCount+val[1];
  }
});

    let tuesCount=0;
    Object.values(tuesObj).forEach(val=>{
      if(val[1] === 1){
        tuesCount= tuesCount+val[1];
      }
});

//problem is cannot set undefined or null to object
let wedCount=0;
Object.values(wedObj).forEach(val=>{
  if(val[1] === 1){
    wedCount= wedCount+val[1];
  }
});
let thursCount=0;
Object.values(thursObj).forEach(val=>{
  if(val[1] === 1){
    thursCount= thursCount+val[1];
  }
});
let friCount=0;
Object.values(friObj).forEach(val=>{
  if(val[1] === 1){
    friCount= friCount+val[1];
  }
});
let satCount=0;
Object.values(satObj).forEach(val=>{
  if(val[1] === 1){
    satCount= satCount+val[1];
  }
});
let sunCount=0;
Object.values(sunObj).forEach(val=>{
  if(val[1] === 1){
    sunCount= sunCount+val[1];
  }
});


// const stepContainer={
//   display:"block",
//   width: "50%",
//   margin:"0 auto 0 auto",
//   padding: "15px 0",
//   // backgroundColor:"pink"
// }


const [backColorDay,setBackColorDay]=useState({backgroundColor:'lightcyan'});
//In order to get the current _id we loop through dayInfo.
const dayInfo=[
{index:7,day:"Monday"},{index:8,day:"Tuesday"},{index:9,day:"Wednesday"},
{index:10,day:"Thursday"},{index:11,day:"Friday"},{index:12,day:"Saturday"},
{index:13,day:"Sunday"}
];
//Clicking edit button allows us to color the blocks
function editClick(nameDay){
authCheck();
  dayInfo.forEach((item)=>{
    if(nameDay===item.day){
      setIdHolder(array[item.index]._id);
    }
  })

  setUpdate(true);
  setBackColorDay({backgroundColor:'white'});

}


//Save button will get id from edit button and the day object
//and send to the backend to update our original day model
function saveClick(id,body){

  if(update){
    ScheduleService.updateDay(id,body).then(data=>{
      if(!data.message.msgError){
        ScheduleService.getSchedule().then(newData=>{
          setArray(newData.message.documents);
          setEvolve(newData.message.documents[7]);
          setTuesObj(newData.message.documents[8]);
          setWedObj(newData.message.documents[9]);
          setThursObj(newData.message.documents[10]);
          setFriObj(newData.message.documents[11]);
          setSatObj(newData.message.documents[12]);
          setSunObj(newData.message.documents[13]);
        })
        setSaveButtonStyle('btn btn-light');
        setEditButtonStyle('btn btn-info');
      }
      else if(data.message.msgBody === "Unauthorized"){
        setUser({username: ""});
        setIsAuthenticated(false);
      }
    })
      setBackColorDay({backgroundColor:'lightcyan'});
      setUpdate(false);

  }
  else{
    console.log('need to click update first');
  }
}

//When we click slide we want to make sure we get previous colors,if object was
//changed but not saved. We also want to turn off the ability to change the object
//unless we click edit again.
function slide(){
  if(update){
ScheduleService.getSchedule().then(data=>{
  if(!data.message.msgError){
  setArray(data.message.documents);
  setEvolve(data.message.documents[7]);
  setTuesObj(data.message.documents[8]);
  setWedObj(data.message.documents[9]);
  setThursObj(data.message.documents[10]);
  setFriObj(data.message.documents[11]);
  setSatObj(data.message.documents[12]);
  setSunObj(data.message.documents[13]);
}
else if(data.message.msgBody === "Unauthorized"){
  setUser({username: ""});
  setIsAuthenticated(false);
}
})
setSaveButtonStyle('btn btn-light');
setEditButtonStyle('btn btn-info');
  setUpdate(false);
  setBackColorDay({backgroundColor:'lightcyan'});

  }

}


  return(
    <div className="week-padding">

      <h1 className="week-title">{props.weekName}</h1>

      <div className="buttons-container">
        <button onClick={blue} type="button" className="btn btn-primary">Work</button>
        <button onClick={red} type="button" className="btn btn-danger">Unproductive</button>
        <button onClick={green} type="button" className="btn btn-success">Studying</button>
        <button  onClick={grey} type="button" className="btn btn-secondary">exercise</button>
        <button  onClick={yellow} style={{backgroundColor:"yellow"}} type="button" className="btn">Family/Friends Time</button>
        <button  onClick={black} type="button" className="btn btn-dark">Sleep</button>
        <button  onClick={orange} style={{backgroundColor:"orange"}} type="button" className="btn">Eating</button>
        <button  onClick={purple} style={{backgroundColor:"purple",color:"white"}} type="button" className="btn">Commuting</button>
        <button onClick={torquoise} style={{backgroundColor:'#40E0D0',color:'white'}} type="button" className="btn">Prepare</button>

      </div>


      <div id="week2" className="carousel slide" data-bs-ride="carousel" data-bs-interval="false">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Day
              week="2"
              dayName={isLoaded?"Monday":"Loading..."}
              evolve={evolve}
              ourFunction={week2Obj.mon}
              count={monCount}
              update={setUpdate}
              editClick={editClick}
              backgroundColor={backColorDay}
              saveClick={saveClick}
              id={idHolder}
              saveButtonStyle={saveButtonStyle}
              editButtonStyle={editButtonStyle}
              classAnimation={isLoaded?"td":"schedule-loader"}
              slide={slide}
            />
          </div>


          <div className="carousel-item ">
            <Day
              week="2"
              dayName={isLoaded?"Tuesday":"Loading..."}
              evolve={tuesObj}
              ourFunction={week2Obj.tues}
              count={tuesCount}
              update={setUpdate}
              editClick={editClick}
              backgroundColor={backColorDay}
              saveClick={saveClick}
              id={idHolder}
              saveButtonStyle={saveButtonStyle}
              editButtonStyle={editButtonStyle}
              classAnimation={isLoaded?"td":"schedule-loader"}
              slide={slide}
            />
          </div>


          <div className="carousel-item ">
            <Day
              week="2"
              dayName={isLoaded?"Wednesday":"Loading..."}
              evolve={wedObj}
              ourFunction={week2Obj.wed}
              count={wedCount}
              update={setUpdate}
              editClick={editClick}
              backgroundColor={backColorDay}
              saveClick={saveClick}
              id={idHolder}
              saveButtonStyle={saveButtonStyle}
              editButtonStyle={editButtonStyle}
              classAnimation={isLoaded?"td":"schedule-loader"}
              slide={slide}
            />
          </div>


          <div className="carousel-item ">
            <Day
              week="2"
              dayName={isLoaded?"Thursday":"Loading..."}
              evolve={thursObj}
              ourFunction={week2Obj.thurs}
              count={thursCount}
              update={setUpdate}
              editClick={editClick}
              backgroundColor={backColorDay}
              saveClick={saveClick}
              id={idHolder}
              saveButtonStyle={saveButtonStyle}
              editButtonStyle={editButtonStyle}
              classAnimation={isLoaded?"td":"schedule-loader"}
              slide={slide}
            />
          </div>


          <div className="carousel-item ">
            <Day
              week="2"
              dayName={isLoaded?"Friday":"Loading..."}
              evolve={friObj}
              ourFunction={week2Obj.fri}
              count={friCount}
              update={setUpdate}
              editClick={editClick}
              backgroundColor={backColorDay}
              saveClick={saveClick}
              id={idHolder}
              saveButtonStyle={saveButtonStyle}
              editButtonStyle={editButtonStyle}
              classAnimation={isLoaded?"td":"schedule-loader"}
              slide={slide}
            />
          </div>


          <div className="carousel-item ">
            <Day
              week="2"
              dayName={isLoaded?"Saturday":"Loading..."}
              evolve={satObj}
              ourFunction={week2Obj.sat}
              count={satCount}
              update={setUpdate}
              editClick={editClick}
              backgroundColor={backColorDay}
              saveClick={saveClick}
              id={idHolder}
              saveButtonStyle={saveButtonStyle}
              editButtonStyle={editButtonStyle}
              classAnimation={isLoaded?"td":"schedule-loader"}
              slide={slide}
            />
          </div>


          <div className="carousel-item ">
            <Day
              week="2"
              dayName={isLoaded?"Sunday":"Loading..."}
              evolve={sunObj}
              ourFunction={week2Obj.sun}
              count={sunCount}
              update={setUpdate}
              editClick={editClick}
              backgroundColor={backColorDay}
              saveClick={saveClick}
              id={idHolder}
              saveButtonStyle={saveButtonStyle}
              editButtonStyle={editButtonStyle}
              classAnimation={isLoaded?"td":"schedule-loader"}
              slide={slide}
            />
          </div>
        </div>

        {/*
          <a onClick={slide} className="carousel-control-prev" href="#week2" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
          </a>

          <a onClick={slide} className="carousel-control-next" href="#week2" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a> */}


      </div>
      </div>

      );
      }

      export default Week2;
