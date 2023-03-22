import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './users.css';

const Users = () => {
  const [genderResult, setGenderResult] = useState({ results: [] });
  const [selectedGender, setSelectedGender] = useState("all");
  

  const fetchData = async () => {
    const url = selectedGender === 'all'
      ? "https://randomuser.me/api/?results=20"
      : `https://randomuser.me/api/?results=20&gender=${selectedGender}`;
    const response = await fetch(url);
    const data = await response.json();
    setGenderResult(data);
  }

  const handleGenderChange = (event) => {
    const genderValue = event.target.value;
    setSelectedGender(genderValue);
  }

  useEffect(() => {
    fetchData();
  }, [selectedGender]);

  return (
    <>
      <Navbar />
      <div className='maincontaineruser'>
        <div className='subcontaineruser'>
          <h1>Users</h1>
          <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
        </div>
        <div className='inputsradi'>
        <label><input type="radio" name='gender' value="all" onChange={handleGenderChange} checked={selectedGender === 'all'} />All</label>
         <label><input type="radio" name='gender' value="male" onChange={handleGenderChange} checked={selectedGender === 'male'} />Male</label>
          <label><input type="radio" name='gender' value="female" onChange={handleGenderChange} checked={selectedGender === 'female'} />Female</label>
        </div>
        <div className='subnavuser'>
          <span>IMAGE</span>
          <span>NAME</span>
          <span>EMAIL</span>
          <span>GENDER</span>
        </div>
        {genderResult.results.map((ele) => (
          <div className='cards' key={ele.login.uuid}>
            <img src={ele.picture.large} alt="pic" ></img>
            <h3>{ele.name.first}&nbsp;&nbsp;{ele.name.last}</h3>
            <h4>{ele.email}</h4>
            <h2>{ele.gender}</h2>
          </div>
        ))}
      </div>
    </>
  )
}

export default Users;

