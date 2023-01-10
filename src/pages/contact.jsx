import { useState } from "react";

function Contact () {
  const [isEmailVisible, setIsEmailVisible] =useState(false);

  function getEmailSection() {
    if (isEmailVisible) {
       return <h5>manuelbailey722@gmail.com</h5>;
    }
    else {
    return <label>Click the button below</label>;
    }
  }

  function trueEmail () {
    console.log("it works!!");
   setIsEmailVisible(true);

  }

  function falseEmail () {
    console.log("it works!!");
    setIsEmailVisible(false);
  }
  
    return (
    <div className="contact">
        <h1>Manuel Bailey</h1>

        {getEmailSection()}
        <br />

        <button onClick={trueEmail} className="btn btn-primary" >show email</button>
        <button onClick={falseEmail} className="btn btn-danger">Hide</button>

    </div>
    );
}

export default Contact;