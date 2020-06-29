import React, { useState } from 'react';

import Icon from "./components/Icon"

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import {Card , CardBody, Container, Row, Col, Button} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css'

import './App.css';

const itemArray = new Array(9).fill("empty")

function App() {

  const [isCross, setIsCross] = useState(false)
  const [winMessage, setWinMessage] = useState("")

  const reloadGame = () => {
    setIsCross(false)
    setWinMessage("")
    itemArray.fill("empty" ,0, 9)
  }

  const checkIsWinner = () => {
         if(itemArray[0] === itemArray[1] &&
            itemArray[0] === itemArray[2] &&
            itemArray[0] !== "empty"){
         setWinMessage(`${itemArray[0]} wins`)
       }
    else if(itemArray[0] === itemArray[4] &&
            itemArray[0] === itemArray[8] &&
            itemArray[0] !== "empty") {
            setWinMessage(`${itemArray[0]} wins`)
       }
    else if(itemArray[0] === itemArray[3] &&
            itemArray[0] === itemArray[6] &&
            itemArray[0] !== "empty"){
                 setWinMessage(`${itemArray[0]} wins`)
               }
    else if(itemArray[1] === itemArray[4] &&
            itemArray[1] === itemArray[7] &&
            itemArray[1] !== "empty"){
                 setWinMessage(`${itemArray[1]} wins`)
                }
    else if(itemArray[2] === itemArray[5] &&
            itemArray[2] === itemArray[8] &&
            itemArray[2] !== "empty"){
               setWinMessage(`${itemArray[2]} wins`)
           }
    else if(itemArray[2] === itemArray[4] &&
            itemArray[2] === itemArray[6] &&
            itemArray[2] !== "empty"){
       setWinMessage(`${itemArray[2]} wins`)
     }
    else if(itemArray[3] === itemArray[4] &&
            itemArray[3] === itemArray[5] &&
            itemArray[3] !== "empty"){
                setWinMessage(`${itemArray[3]} wins`)
                  }
    else if(itemArray[6] === itemArray[7] &&
            itemArray[6] === itemArray[8] &&
            itemArray[6] !== "empty"){
                setWinMessage(`${itemArray[6]} wins`)
                      }
  }

  const changeItem = itemNumber => {
    if(winMessage){
      return toast(winMessage, {type: "success"})
    }
    if(itemArray[itemNumber] === "empty"){
      itemArray[itemNumber] = isCross ? "cross" : "circle" 
      setIsCross(!isCross)
    }
    else{
      return toast("already filled", {type: "error"})
  }

  checkIsWinner();
}


  return (
    <div>
    <Container className="p-5">
    <ToastContainer position="bottom-center" />
    <Row>
    <Col>
    {winMessage ? (
      <div className="md-2 mt-2">
      <h1 className="text-success text-uppercase text-center">
      {winMessage}
      </h1>
        <br/>
      </div> 
    ) : (
      <h1 className="text-center text-info">
      {isCross ? "Cross" : "Circle"} Turns
      </h1>
    )}
    <div className="grid">
    {itemArray.map((item, index) => (
      <Card className="card" onClick={ () => changeItem(index) }>
      <CardBody className="box">
      <Icon name={item} />
      </CardBody>
      </Card>
    ) )}
    </div> <br/>
    <Button 
        color="success"
        block
        onClick={reloadGame}>
        Reload
        </Button>
    </Col>
    </Row>
    </Container> <br/><br/>
    <div className="devel" style={{textAlign:"center"}}>
    Developed by Praveen Yadav with React js <img className="logoimg" src="logo192.png" alt="" />
    </div>
    </div>
  );
}

export default App;
