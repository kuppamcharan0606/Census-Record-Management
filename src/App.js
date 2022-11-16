import './App.css';

function App() {
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
 <input type="text" className="form-control" placeholder="Enter Family Head name"/>
 <br></br><br></br>
 <label>Phone no:</label>
 <br></br>
 <input type="text" className="form-control" placeholder="Enter Phone number"/>
 <br></br><br></br>
 <label>Address:</label>
 <br></br>
 <input type="text" className="form-control" placeholder="Enter address"/>
 <br></br><br></br>
 <label>No of Family Members:</label>
 <br></br>
 <input type="text" className="form-control" placeholder="Enter no of family members"/>
 <br></br><br></br>
 <label>No of vechiles owned:</label>
 <br></br>
 <input type="text" className="form-control" placeholder="Enter no of vechiles owned"/>
 <br></br><br></br>
 <label>Annual Income:</label>
 <br></br>
 <input type="text" className="form-control" placeholder="Enter annual income"/>
 <br></br><br></br>
 <label>City:</label>
 <br></br>
 <input type="text" className="form-control" placeholder="Enter City"/>
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
 <input type="number" className="form-control" placeholder="Enter Zipcode"/>
 <br></br><br></br>
 <label>Have your own property:</label>
 <br></br>
 <input type="text" className="form-control" placeholder=""/>
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
}

export default App;
