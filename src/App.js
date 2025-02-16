import { useState } from 'react';
import './App.css';

function App() {

  const [formdata,setformdata] = useState({Firstname:"",lastname:"",email:"",country:"",street:"",city:"",state:"",pincode:"",isvisible:false,candidate:false,offer:false})
  
  function changehandler(event){
    const {name,type,value,checked} = event.target;
    setformdata(prevFormData => {
      return {
        ...prevFormData,
        [name] : type=== "checkbox" ? checked:value
      }
    }
  )}
  function submithandler(event){
    event.preventDefault()
    console.log(formdata)
    setformdata({
      Firstname: "",
      lastname: "",
      email: "",
      country: "",
      street: "",
      city: "",
      state: "",
      pincode: "",
      isvisible: false,
      candidate: false,
      offer: false,
      mode: "" 
    });
  }
  return (
    <div className="App">
     <fieldset>
      <legend>Form Data</legend>
      <form action="" onSubmit={submithandler}>
      <input 
      type="text"
      name='Firstname'
      placeholder='Enter your first name'
      onChange={changehandler}
      value={formdata.Firstname} />

      <br />
      <br />
      <input 
      type="text"
      name='lastname'
      placeholder='Enter your last name'
      onChange={changehandler}
      value={formdata.lastname} />
      
      <br /><br />
      <input 
      type="email"
      name='email'
      placeholder='Enter your email id'
      onChange={changehandler}
      value={formdata.email} />

      <br /><br />
      <select name="country" onChange={changehandler} value={formdata.country}>
        <option value="india">india</option>
        <option value="USA">USA</option>
        <option value="CANADA">CANADA</option>
        <option value="UK">UK</option>
      </select>

      <br /><br />
      <textarea name="street" id="" onChange={changehandler} value={formdata.street}></textarea>

<br /><br />
      <input 
      type="text"
      name='city'
      placeholder='Enter your city'
      onChange={changehandler}
      value={formdata.city} />

<br /><br />
      <input 
      type="text"
      name='state'
      placeholder='Enter your state'
      onChange={changehandler}
      value={formdata.state} />

<br /><br />
      <input 
      type="number"
      name='pincode'
      placeholder='Enter your pincode'
      onChange={changehandler}
      value={formdata.pincode} />

      <br /><br />
      <input type="checkbox"name='isvisible' id='visible' onChange={changehandler} checked={formdata.isvisible}/>
      <label htmlFor="visible">comment</label>

      <br /><br />
      <input type="checkbox"name='candidate' id='candidate' onChange={changehandler} checked={formdata.iscandidate}/>
      <label htmlFor="candidate">candidate</label>

      <br /><br />
      <input type="checkbox"name='offer' id='offer' onChange={changehandler} checked={formdata.offer}/>
      <label htmlFor="offeer">offer</label>

      <br /><br />
      <input type="radio" name='mode' id='online' onChange={changehandler} value="online" checked={formdata.mode === "online"}/>
    <label htmlFor="online">online mode</label>
      <br /><br />
      <input type="radio" name='mode' id='ofline' onChange={changehandler} value="ofline" checked={formdata.mode === "ofline"}/>
      <label htmlFor="ofline">ofline mode</label>
      <br /><br />
      <button>Submit</button>
      </form>
     </fieldset>
    </div>
  );

}

export default App;
