
import { useState } from 'react';
import './App.css';


function App() {

//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");

//   console.log(firstName);
//   console.log(lastName);
//  //note: text fileds always sysnc
  
//   function changeFirstHandler(event) {
//    // console.log(event.target)
//    setFirstName(event.target.value) //new value store(set)
//   }

//   function changeLasttHandler(event) {
//     //console.log(event.target.value)
//     setLastName(event.target.value) //new value store(set)
//   }
//note:when form contain lots od data like firstname,addd,phonenum etc then create object
// for handle multiple state 2 ways i.e create multiple variable or create object

const [formData, setFormdata] = useState( {firstName:"", lastName:"",email:"",commnets:"",isVisible:true,mode:"",favCar:""} );
//console.log(formData.email)
console.log(formData);

function changeHandler(event) {
 const {name,value,checked,type} = event.target
  setFormdata(prevFormData => {
    return {
      ...prevFormData, //old state copy bz jr ekc variable chnage zla input pht and baki tr old state same ahe so use old state
      //[event.target.name ]: event.target.value  ///jis element  mudey triger zly usli value update
      //[] bz access property of form use this systax hey !
     //destructure
      [name]: type ==="checkbox" ? checked : value
    }
  });


}

 function submitHandler(event) {
  //  button click kely to defult behavoir nhi hva tr 
  event.preventDefault();
  //print
  console.log("Finally printing the entireform ka data ")
  console.log(formData)
 }

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input type='text'
        placeholder='first name'
        onChange={changeHandler}
        name='firstName'
        value={formData.firstName}
        />

        <br/>
        <br/>

        <input type='text'
        placeholder='last name'
        onChange={changeHandler}
        name='lastName'
        value={formData.lastName}
        />

        <br/>
        <br/>

       <input type='email'
        placeholder=' enter eamil'
        onChange={changeHandler}
        name='email'
        value={formData.email}
        />

        <br/>
        <br/>
        
        <textarea
         placeholder='entre your comments here'
         onChange={changeHandler}
         name='commnets'
         value={formData.commnets}
        />

        <br/>
        <br/>

        <input
        type="checkbox"
        onChange={changeHandler}
        name="isVisible"
        id='isVisible'
        checked={formData.isVisible}
        />
        <label htmlFor='isVisible'>Am I visble ?</label>


        <br/>
        <br/>

        <fieldset>
          <legend>Mode:</legend>
          <input
          type='radio'
          onChange={changeHandler}
          name='mode'
         value="Online-Mode"
          id="Online-Mode"
          checked={formData.mode === "Online-Mode"}
         />
          <label htmlFor='Online-Mode'>Online Mode</label>

          <input
          type='radio'
         onChange={changeHandler}
         name='mode'
         value="Offline-Mode"
         id="Offline-Mode"
         checked={formData.mode === "Offline-Mode"} //only boolen value so use this
         />
         <label htmlFor='Offline-Mode'>Offline Mode</label>

          
        </fieldset>
        <label htmlFor='favCar'>Tell me your Favourite Car</label>
        <select
        name="favCar"
        id="favCar"
        value={formData.favCar}  
        onChange={changeHandler}
        >
          <option value="scorpio">Scorpio</option>
          <option value="fartuner">fartune</option>
          <option value="Tharr">Thar</option>
          <option value="Legender">Legender</option>
          <option value="Defender">Defender</option>
         
        
        </select>
        {/* <input type='submit'value='submit'/> */}
        <br/>
        <br/>
        <button>submit</button>
        {/* jr sumit name button create kely form mndy mg submit vr click kel form sathi onsubmit type ca event trigger hoto*/}
        



      </form>
    



      



    </div>
  );
}

export default App;
