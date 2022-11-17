import './App.css';
import React, { Component } from 'react';
import axios from 'axios';
import { ConfigurationOptions } from 'aws-sdk';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      familyhead:' ',
      phone:'',
      address:'',
      nooffamily:'',
      noofvechiles:'',
      annualincome:'',
      city:'',
      state:'',
      zip:'',
      property:''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async  handleChange(event) {
    const inputValue = event.target.value;
    const stateField = event.target.name;
    this.setState({
      ...this.state,[stateField]: inputValue
    });
    console.log(this.state);
  }
  async handleSubmit(event) {
    event.preventDefault();
    const { familyhead,phone,address,nooffamily,noofvechiles,annualincome,city,state,zip,property } = this.state;
    await axios.post(
      'https://98r55tdglf.execute-api.us-east-1.amazonaws.com/default/Crazy',
      { key1:`${familyhead}, ${phone},${address},${nooffamily},${noofvechiles},${annualincome},${city},${state},${zip},${property}`}
    );
    console.log("yo");
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
 <label>Family Head Name:</label>
 <br></br>
 <input type="text" name="familyhead" placeholder="Enter Family Head name"  onChange={this.handleChange}   value={this.state.familyhead}/>
 <br></br><br></br>
 <label>Phone no:</label>
 <br></br>
 <input type="text" name="phone" placeholder="Enter Phone number" onChange={this.handleChange} value={this.state.phone} />
 <br></br><br></br>
 <label>Address:</label>
 <br></br>
 <input type="text" name="address" placeholder="Enter address"onChange={this.handleChange} value={this.state.address}/>
 <br></br><br></br>
 <label>No of Family Members:</label>
 <br></br>
 <input type="number" name="nooffamily" placeholder="Enter no of family members"onChange={this.handleChange} value={this.state.nooffamily}/>
 <br></br><br></br>
 <label>No of vechiles owned:</label>
 <br></br>
 <input type="text" name="noofvechiles" placeholder="Enter no of vechiles owned"onChange={this.handleChange} value={this.state.noofvechiles}/>
 <br></br><br></br>
 <label>Annual Income:</label>
 <br></br>
 <input type="text" name="annualincome" placeholder="Enter annual income" onChange={this.handleChange} value={this.state.annualincome}/>
 <br></br><br></br>
 <label>City:</label>
 <br></br>
 <input type="text" name="city" placeholder="Enter City"onChange={this.handleChange} value={this.state.city}/>
 <br></br><br></br>
 <label>State:</label>
 <br></br>
 <select name="state">
 <option value="Tamilnadu">Tamilnadu</option>
<option value="Telangana">Telangana</option>
<option value="AndraPradesh">AndraPradesh</option>
<option value="Karnataka">Karnataka</option>
<option value="UttarPradesh">UttarPradesh</option>
<option value="Kerala">Kerala</option>
 </select>
 <br></br><br></br>
 <label>Zip:</label>
 <br></br>
 <input type="number" name="zip" placeholder="Enter Zipcode"onChange={this.handleChange} value={this.state.zip}/>
 <br></br><br></br>
 <label>Have your own property:</label>
 <br></br>
 <input type="text" name="property" placeholder="Enter the property"onChange={this.handleChange} value={this.state.property}/>
 <br></br><br></br>
 </div><br></br>
 <div className="d-flex justify-content-center">
 <button type="submit" className="d-flex justify-content-center btn btn-primary btn-block">Submit</button>
 </div>
        </form>
      </div>
    );
  }
}

/*function App() {
 
  return (
    <>
    <div className="container-fluid row d-flex">
      <div className="col-md-12 justify-content-center">
        <h2 className="padtop d-flex justify-content-center">
         CENSUS REGISTRATION FORM
        </h2>
 </div>
 <div className="col-md-4"></div>
 <div className="col-md-4 line1"></div>
 <div className="col-md-4"></div>
 <div className="col-md-3"></div>
 <div className="col-md-6">
 <form>
 <div className="form-group">
 <label>Family Head Name:</label>
 <br></br>
 <input type="text" onChange={this.handleChange}value={this.state.familyhead} className="form-control" placeholder="Enter Family Head name"/>
 <br></br><br></br>
 <label>Phone no:</label>
 <br></br>
 <input type="text" onChange={this.handleChange}value={this.state.phone}className="form-control" placeholder="Enter Phone number"/>
 <br></br><br></br>
 <label>Address:</label>
 <br></br>
 <input type="text" onChange={this.handleChange} value={this.state.address} className="form-control" placeholder="Enter address"/>
 <br></br><br></br>
 <label>No of Family Members:</label>
 <br></br>
 <input type="text" onChange={this.handleChange} value={this.state.nooffamily} className="form-control" placeholder="Enter no of family members"/>
 <br></br><br></br>
 <label>No of vechiles owned:</label>
 <br></br>
 <input type="text" onChange={this.handleChange} value={this.state.noofvechiles} className="form-control" placeholder="Enter no of vechiles owned"/>
 <br></br><br></br>
 <label>Annual Income:</label>
 <br></br>
 <input type="text" onChange={this.handleChange} value={this.state.annualincome} className="form-control" placeholder="Enter annual income"/>
 <br></br><br></br>
 <label>City:</label>
 <br></br>
 <input type="text" onChange={this.handleChange} value={this.state.city} className="form-control" placeholder="Enter City"/>
 <br></br><br></br>
 <label>State:</label>
 <br></br>
 <select>
 <option value="Tamilnadu">Tamilnadu</option>
  <option value="Telangana">Telangana</option>
  <option value="AndraPradesh">AndraPradesh</option>
  <option value="Karnataka">Karnataka</option>
  <option value="UttarPradesh">UttarPradesh</option>
  <option value="Kerala">Kerala</option>
 </select>
 <br></br><br></br>
 <label>Zip:</label>
 <br></br>
 <input type="number" onChange={this.handleChange} value={this.state.zip} className="form-control" placeholder="Enter Zipcode"/>
 <br></br><br></br>
 <label>Have your own property:</label>
 <br></br>
 <input type="text" className="form-control" placeholder=""onChange={this.handleChange} value={this.state.property}/>
 <br></br><br></br>
 </div><br></br>
 <div className="d-flex justify-content-center">
 <button type="submit" className="d-flex justify-content-center btn btn-primary btn-block">Submit</button>
 </div>
 </form>
 </div>
 </div>
    </>
  );
}*/

/*
<option value="Tamilnadu">Tamilnadu</option>
<option value="Telangana">Telangana</option>
<option value="AndraPradesh">AndraPradesh</option>
<option value="Karnataka">Karnataka</option>
<option value="UttarPradesh">UttarPradesh</option>
<option value="Kerala">Kerala</option> */