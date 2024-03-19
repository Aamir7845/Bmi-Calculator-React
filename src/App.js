// import React, { useState } from 'react';
// import './App.css'

// const App = () => {


//   let [gender, setGender] = useState('');
//   let [bmii, setBmii] = useState(null);
//   let [body, setBody]  =useState('');



//   const handleGenderChange = (event) => {
//     setGender(event.target.value);
//     console.log(event.target.value);
//   }

//   let age= 0;
//   const fnAge=(e) =>{
//     age = Number(e.target.value);
//     console.log(age);

//   }
//   let height= 0;
//   const fnHeight=(e) =>{
//     height =  Number(e.target.value);
//     console.log(height);
//   }
//   let weight= 0;
//   const fnWeight=(e) =>{
//     weight =  Number(e.target.value);
//     console.log(weight);
//   }
//   const fnSubmit =() =>{
//     console.log(age, height, weight, gender)
//     if(((age == 0) || (height == 0) || (weight == 0)) && !gender){
//       alert("Please mention full details")
//     }
//     else if(height<0 ||  height >304){
//       alert('Invalid Height');
//     }
//     else if(weight<0 || weight > 200){
//       alert('Invalid Weight');
//     }
//     else{
//       countBmi();
//     }
//   }

//   let bmi = 0;
//   const countBmi = () =>{
//     bmi = (weight/((height * height)/10000)).toFixed(2);
//     console.log(bmi);
//     setBmii(bmi);
//     bmiHealth();
    

//   }


//   const bmiHealth =() =>{
//     var result = '';
//     if(bmi<18.5){
//       result = 'Underweight';
//     }else if(18.5<=bmi && bmi<=24.999){
//       result = 'Healthy';
//     }else if(25<=bmi && bmi<=29.9){
//       result = 'Overweight';
//     }else if(30<=bmi && bmi<=34.9){
//       result = 'Obese';
//     }else if(35<=bmi ){
//       result = 'Extremely obese';
//     }
//     console.log(result);
//     setBody(result);
//   }


//   //reset

//   // Reset function to reset all state variables
// // const fnReset = () => {
// //   setGender(''); // Reset gender
// //   setBmii(''); // Reset BMI
// //   setBody(''); // Reset body
// //   age = 0;  // Reset age
// //   height = 0; // Reset height
// //   weight = 0; // Reset weight
// // };


//   return (
//     <div>
//      <h1 className ="text-center text-orange-400 text-4xl">App Component</h1>
//        <div className= "frame">
//           <div>
//             <span>Age:</span>
//             <input type="text" onChange ={fnAge}/>
//             <label htmlFor="male">Male</label>
//             <input 
//               type="radio"
//               id="male"
//               value="male"
//               checked={gender === 'male'}
//               onChange={handleGenderChange}
//             />
//             <label htmlFor="female">Female</label>
      
//             <input 
//               type="radio"
//               id="female"
//               value="female"
//               checked={gender === 'female'}
//               onChange={handleGenderChange}
//             />
//           </div>
//           <div className='measure'>
//             <span>Height(in cm)</span>
//             <input type="text" onChange ={fnHeight}/>
//             <span>Weight (in kg)</span>
//             <input type="text" onChange ={fnWeight}/>
//           </div>
//           <div>
//             <button className='reset' onClick={fnSubmit}>Submit</button>
//           </div>

//           <div>
//             <span>Bmi: </span>
//             <input type="text" value={bmii} readOnly/>
//             <span>Health: </span>
//             <input type="text" value={body} readOnly />
//           </div>
//           <div>
//           {/* <button className='reset' onClick={fnReset}>Reset</button> */}
//        </div>
//        </div>
//     </div>
//   )
// }

// export default App;

import React, { useRef, useState } from 'react';
import './App.css';


const App = () => {

  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [body, setBody] = useState('');

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  };

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };

  const calculateBmi = () => {
    const bmiValue = (weight / ((height * height) / 10000)).toFixed(2);
    setBmi(bmiValue);
    determineBmiHealth(bmiValue);
  };

  const determineBmiHealth = (bmiValue) => {
    if (bmiValue < 18.5) {
      setBody('Underweight');
    } else if (bmiValue >= 18.5 && bmiValue <= 24.999) {
      setBody('Healthy');
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
      setBody('Overweight');
    } else if (bmiValue >= 30 && bmiValue <= 34.9) {
      setBody('Obese');
    } else if (bmiValue >= 35) {
      setBody('Extremely obese');
    }
  };

  const handleSubmit = () => {
    if (!age || !height || !weight || !gender) {
      alert('Please fill in all details');
    } else if (height < 0 || height > 304) {
      alert('Invalid Height');
    } else if (weight < 0 || weight > 200) {
      alert('Invalid Weight');
    } else {
      calculateBmi();
    }
  };

  const handleReset = () => {
    setGender('');
    setAge('');
    setHeight('');
    setWeight('');
    setBmi(null);
    setBody('');
  };

  return (
    <div>
      <div className="frame">
        <div>
          <span>Age:</span>
          <input type="text" value={age} onChange={handleAgeChange} />
          <label htmlFor="male">Male</label>
          <input
            type="radio"
            id="male"
            value="male"
            checked={gender === 'male'}
            onChange={handleGenderChange}
          />
          <label htmlFor="female">Female</label>
          <input
            type="radio"
            id="female"
            value="female"
            checked={gender === 'female'}
            onChange={handleGenderChange}
          />
        </div>
        <div className="measure">
          <span>Height (in cm)</span>
          <input type="text" value={height} onChange={handleHeightChange} />
          <span>Weight (in kg)</span>
          <input type="text" value={weight} onChange={handleWeightChange} />
        </div>
        <div>
          <button className="reset" onClick={handleSubmit}>Submit</button>
          <button className="reset" onClick={handleReset}>Reset</button>
        </div>
        <div>
          <span>BMI: </span>
          <input type="text" value={bmi || ''} readOnly />
          <span>Health: </span>
          <input type="text" value={body} readOnly />
        </div>
      </div>
    </div>
  );
};

export default App;



