import React, { useState } from 'react';

function MainForm(props) {
  const [marks, setMarks] = useState(["", "", "", "", "","","",""]); // Array to store marks for MSE, ISE Lab, ISE Theory, and ESE
  const [totalMarks, setTotalMarks] = useState(null); // State to display the total marks

  const handleChange = (index, value) => {
    // Update the specific mark in the array
    const updatedMarks = [...marks];
    updatedMarks[index] = value;
    setMarks(updatedMarks);
  };

  const handleClick = () => {
    // Calculate the total using the provided formula
    const mse = parseFloat(marks[0]) || 0;
    const iseLab = parseFloat(marks[1]) || 0;
    const iseTheory = parseFloat(marks[2]) || 0;
    const lese = parseFloat(marks[3]) || 0;
    const ese = parseFloat(marks[4]) || 0;

    const total =
      mse / 2 +
      (iseLab * 20) / 50 +
      (iseTheory * 15) / 20 +
      lese + (ese * 45/100);

    setTotalMarks(total); // Update total marks
  };

  const handleClick2 = () => {
    // Calculate the total using the provided formula
    const mse = parseFloat(marks[5]) || 0;
    const ise = parseFloat(marks[6]) || 0;
    const ese = parseFloat(marks[7]) || 0;

    const total =
      (mse * 20 / 30) + ise + 
    (ese * 60/100);

    setTotalMarks(total); // Update total marks
  };

  return (
    <div className="p-5 bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center text-green-500 my-4">
        {props.head}
      </h1>
      <h2 className="text-1xl font-bold text-center text-red-500 my-2">4 Credits Course: </h2>
      <h3 className="fs-6 text-center fst-italic text-black-500 my-0">Ex: COA, DS, DBMS </h3>
      <form className="mb-5 w-full max-w-sm">
        <input
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 my-1"
          type="text"
          placeholder="Enter MSE (30)"
          onChange={(e) => handleChange(0, e.target.value)} // Update MSE in array
          value={marks[0]}
        />
        <input
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 my-1"
          type="text"
          placeholder="Enter ISE LAB (50)"
          onChange={(e) => handleChange(1, e.target.value)} // Update ISE Lab in array
          value={marks[1]}
        />
        <input
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 my-1"
          type="text"
          placeholder="Enter ISE Theory (20)"
          onChange={(e) => handleChange(2, e.target.value)} // Update ISE Theory in array
          value={marks[2]}
        />
        <input
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 my-1"
          type="text"
          placeholder="Enter LAB ESE (5)"
          onChange={(e) => handleChange(3, e.target.value)} // Update ESE in array
          value={marks[3]}
        />
        <input
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 my-1"
          type="text"
          placeholder="Enter ESE (100)"
          onChange={(e) => handleChange(4, e.target.value)} // Update ESE in array
          value={marks[4]}
        />
      </form>
      <button 
        type="button" 
        className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600"
        onClick={handleClick} // Calculate and display total marks
      >
        Calculate Total
      </button>
      {totalMarks !== null && (
        <h6 className="mt-3 text-lg font-medium text-gray-700 my-5">
          Total: {totalMarks.toFixed(2)} {/* Display total marks rounded to 2 decimals */}
        </h6>
      )}
      <h2 className="text-1xl font-bold text-center text-red-500 my-2">3 Credits Course: </h2>
      <h3 className="fs-6 text-center fst-italic text-black-500 my-0">Ex: DSGT </h3>

<form className="mb-5 w-full max-w-sm">
  <input
    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 my-1"
    type="text"
    placeholder="Enter MSE (30)"
    onChange={(e) => handleChange(5, e.target.value)} // Update MSE in array
    value={marks[5]}
  />
  <input
    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 my-1"
    type="text"
    placeholder="Enter ISE (20)"
    onChange={(e) => handleChange(6, e.target.value)} // Update ISE Lab in array
    value={marks[6]}
  />
  <input
    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 my-1"
    type="text"
    placeholder="Enter ESE (100)"
    onChange={(e) => handleChange(7, e.target.value)} // Update ISE Theory in array
    value={marks[7]}
  />
 
</form>
<button 
  type="button" 
  className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md my-3 hover:bg-green-600"
  onClick={handleClick2} // Calculate and display total marks
>
  Calculate Total
</button>
{totalMarks !== null && (
  <h6 className="mt-3 text-lg  font-medium text-gray-700 my-3">
    Total: {totalMarks.toFixed(2)} {/* Display total marks rounded to 2 decimals */}
  </h6>
)}
<div className="card">
  <h5 className="card-header">Made With ❤️ By Heet Keyur Shah</h5>

</div>
    </div>
  );
}

export default MainForm;
