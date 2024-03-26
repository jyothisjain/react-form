import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Proform from './Form';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import "./App.css"

function Profile({ userDetails }) {
  return (
    <div className="profile">
      <h1>Profile</h1>
      <p>First Name: {userDetails.firstName}</p>
      <p>Last Name: {userDetails.lastName}</p>
      <p>Email: {userDetails.email}</p>
      <p>Favorite Season: {userDetails.favoriteSeason}</p>
      <Link to="/dashboard" className="btn btn-primary">Go to Dashboard</Link>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="container mt-3">
      <h1>Dashboard</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed bibendum magna, a condimentum lorem. Nullam id nulla pellentesque, 
      sodales justo eu, dictum ligula. Aenean gravida vulputate magna sed dictum. Aliquam purus metus, euismod quis eleifend mattis, finibus nec turpis. 
      Donec eros arcu, finibus ac mollis vel, commodo ut augue. Duis consequat nisi in velit gravida, sit amet lobortis dui euismod. Duis sit amet justo 
      eu nisi pretium ultricies. Nullam massa quam, pretium sit amet porttitor eget, commodo ut libero.</p>
    
    <p>Nunc ex mauris, tristique eget auctor et, ornare sed ante. Vestibulum condimentum luctus placerat. 
      Suspendisse semper ex at nulla auctor, ac feugiat urna vehicula. Vestibulum molestie, urna vel dictum aliquet, 
      nunc libero faucibus lorem, non porta nisl velit sit amet leo. Ut hendrerit metus nunc. Morbi in ex et sapien ornare 
      lacinia a vitae leo. Sed maximus dolor feugiat libero pellentesque, fringilla ultricies arcu maximus. Quisque sollicitudin 
      risus nibh. Curabitur varius congue semper. Integer pretium, purus mollis ultricies consectetur, ipsum tortor rhoncus risus, 
      in auctor metus est ac nibh. Mauris tempor mi sagittis, lobortis enim a, condimentum dui. Mauris nec varius lacus. Nam ut massa purus. 
      Proin id finibus sem.</p>

    <p>Cras velit magna, accumsan quis tristique non, elementum sed purus. Quisque tristique libero metus, eu hendrerit leo blandit eget. 
      Ut pharetra arcu ac vehicula facilisis. Proin interdum ultricies ultrices. Maecenas mollis nunc sed diam commodo accumsan. 
      Vestibulum felis dui, pulvinar ut consectetur id, accumsan sed ipsum. Nulla magna tortor, hendrerit semper eleifend vel, facilisis eget eros. 
      Maecenas condimentum pharetra commodo.</p>

    <p>Nullam ut maximus sem, eu feugiat justo. In maximus fermentum augue, gravida hendrerit dui convallis in. Suspendisse ac porttitor velit. 
      Cras at diam sapien. Phasellus lacinia felis at auctor cursus. Aenean id nibh volutpat, aliquet ligula sed, ornare quam. Nam non lorem volutpat, 
      lacinia leo in, cursus leo. Vestibulum aliquet ac velit ut laoreet. Integer finibus, tortor at placerat ultrices, erat neque interdum ipsum, vitae 
      maximus augue ante nec felis. Mauris id luctus mauris.</p>

    <p>Mauris mollis felis eu massa laoreet, vitae facilisis diam auctor. Quisque ac risus interdum lacus molestie ornare nec in ex. Nunc 
      tincidunt ante vel tempor mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget eros non sapien dapibus mollis. 
      Curabitur pharetra suscipit leo, eget rhoncus nisi tempor a. Cras ex tellus, dignissim non felis quis, mattis cursus sapien. 
      Nullam rutrum leo eros. Morbi urna ante, tristique vitae orci consequat, molestie imperdiet diam. Nunc at libero malesuada augue tempor sagittis eu nec est. 
      Mauris ultricies at velit in rutrum.</p>
      <Link to="/" className="btn btn-secondary">Back to Home</Link>
    </div>
  );
}

function App() {
  const [userDetails, setUserDetails] = useState(null);

  const handleFormSubmit = (formData) => {
    setUserDetails(formData);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={userDetails ? <Profile userDetails={userDetails} /> : <Proform onSubmit={handleFormSubmit} />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}
export default App;
