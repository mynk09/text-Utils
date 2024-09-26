import React, { useState } from 'react';
import './Accordion.css'; // Optional for styling

const Accordion = () => {

    const [myStyle, setMyStyle] =useState({
        color: 'black',
        backgroundColor: 'white'
    })

    const [btnTxt, setBtnTxt] = useState("Enable dark mode")

    const toggleStyle=() => {

        if(myStyle.color =='white'){
            setMyStyle({
                color: 'black',
                backgroundColor: 'white',

            })
            setBtnTxt("Enable dark mode")
        }
        else{
            setMyStyle({
                color: 'white',
                backgroundColor: 'black',
                border:'0.5px solid white'

            })
            setBtnTxt("Enable light mode")

        }



    }

//   let myStyle= {
//     color: 'White',
//     backgroundColor: 'black',
//     border: '10px'
//   }

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionData = [
    {
      title: "Our Mission",
      content: "We aim to deliver the best services and products to our customers, ensuring quality and reliability."
    },
    {
      title: "Our Vision",
      content: "To be a leading company in the industry, recognized for innovation and customer satisfaction."
    },
    {
      title: "Our Values",
      content: "Integrity, Excellence, Teamwork, and Customer-Centricity are the core values we uphold."
    }
  ];

  return (
    <div className='container' style={myStyle}>
        <h1>About TextUtil</h1>
    <div className="accordion" style={myStyle}>
      {accordionData.map((item, index) => (
        <div key={index} className="accordion-item" style={myStyle}>
          <div 
            className="accordion-title" 
            onClick={() => toggleAccordion(index)}
            style={myStyle}
          >
            <h3>{item.title}</h3>
            <span>{activeIndex === index ? '-' : '+'}</span>
          </div>
          {activeIndex === index && (
            <div className="accordion-content" style={myStyle}>
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
    <button className= "btn btn-primary my-3" onClick={toggleStyle}>{btnTxt}</button>
    </div>
  );
};

export default Accordion;
