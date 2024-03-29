import React, {useState, useEffect, useContext, useRef} from "react";
import Note from "./Note";
import CreateNote from "./CreateNote";
import {Link} from "react-router-dom";
import tsService from "../../Services/TakingSoulsService";
import {AuthContext} from "../../Context/AuthContext";
import {SpinnerDiamond} from 'spinners-react';
import Accordion from 'react-bootstrap/Accordion';
import {CgGhostCharacter} from 'react-icons/cg';
import {IconContext} from "react-icons";
import AuthService from "../../Services/AuthService";

const TakingSouls = function(props) {

  const [array, setArray] = useState([]);
  const [message, setMessage] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const authContext = useContext(AuthContext);

  //this returns and object with property of current:null unil we change it.
  let timer = useRef(null);

  useEffect(() => {
    const controller = new AbortController()
    const signal= controller.signal;
    let mounted=true;
    tsService.getTSNotes(signal).then(data => {
      if(mounted){
        setIsLoaded(true);
        setArray(data.takingSouls)
      }
    });
    return() => {
      mounted=false;
      controller.abort();
      clearTimeout(timer.current)
      //checking if authenticating when we unmount component
      AuthService.isAuthenticated().then(data=>{
        if(!data.isAuthenticated){
          authContext.setIsAuthenticated(false);
          authContext.setUser({username:""});
        }
      })
    };
  }, [authContext]);

  function addJournalEntry(entry) {

    tsService.addTSNote(entry).then(data => {

      if (!data.message.msgError) {

        tsService.getTSNotes().then(getData => {
          setArray(getData.takingSouls);
          setMessage(data.message);
          timer.current = setTimeout(function() {
            setMessage(null);
          }, 2000);
        });

      } else if (data.message.msgBody === "Unauthorized") {

        authContext.setIsAuthenticated(false);
        authContext.setUser({username: ""});

      } else {

        setMessage(data.message);
        timer.current = setTimeout(function() {
          setMessage(null);
        }, 2000);
      }

    });

  };

  function deleteJournalEntry(id) {

    tsService.deleteTSNote(id).then(data => {
      if (!data.message.msgError) {
        tsService.getTSNotes().then(getData => {
          setArray(getData.takingSouls);
          setMessage(data.message);
          timer.current = setTimeout(() => setMessage(null), 2000);
        });
      } else if (data.message.msgBody === "Unauthorized") {
        authContext.setIsAuthenticated(false);
        authContext.setUser({username: ""});
        // props.history.push('/login')
      } else {
        setMessage(data.message);
        timer.current = setTimeout(function() {
          setMessage(null);
        }, 2000);
      }

    });

  };

  return (
    <div className="body-padding">
      <div className="next-prev-challenge-spacing">
        <Link as={Link} to="/Calloused">Previous Challenge</Link>
        <Link className="first-challenge-link" as={Link} to="/ArmoredMind">Next Challenge</Link>
      </div>
      <h1 className="all-title">Taking Souls Challenge</h1>
      <Accordion>
        <Accordion.Header>
          <IconContext.Provider value={{
            className: 'icon'
          }}>
          <CgGhostCharacter size='25px'/>Instructions
        </IconContext.Provider>
      </Accordion.Header>
      <Accordion.Body>
        <p>
          Taking souls means when you outwork or exceed expectation from a person who rivals or undermines you. In a competative setting taking souls is meant to break your component in a way you could see it in their reaction. An example David Goggins like to give is in the movie about a boxer, Rocky. In the movie Rocky 1, Rocky is getting beat sensless by the better opponent Apollo Creed. Appollo is able to knock Rocky down,and everyone is telling Rocky to stay down. When Rocky refuses, Apollo has a reaction of disbelief and it saps his energy. That reaction is what is considered taking ones soul. In a real life setting, you want to pass work expectation that a collegue,teacher,coach or boss, will have to respect you. You want to reach goals that they could never imagine themselves doing.
        </p>
      </Accordion.Body>
    </Accordion>

    <CreateNote addJournalEntry={addJournalEntry} message={message}/> {
      isLoaded
        ? <div className="row">
            {
              array.map(function(arrayItem, index) {
                return <Note key={index} id={arrayItem._id} calendar={arrayItem.date} title={arrayItem.title} paragraph={arrayItem.paragraph} deleteJournalEntry={deleteJournalEntry}/>
              })
            }

          </div>
        : <div className="all-main-containers">
            <SpinnerDiamond size="150px"/>
          </div>
    }

  </div>);
};

export default TakingSouls;
