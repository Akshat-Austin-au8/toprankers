import React from 'react';
import './App.css';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
function App() {
  const columnDefs= [
    { headerName: "Id", field: "id" },
    { headerName: "Name", field: "name" },
    { headerName: "Email", field: "email" },
    {headerName: "D.O.B.",field:"dob"},
    {headerName: "Gender",field:"gender"},
    {headerName: "Country",field:"country"},
    {headerName: "City",field:"city"},
    ]
  const rowData= [{ id: "1", name: "Akshat", email: "akshataustin4321@gmail.com", dob: "22-08-1996", gender: "male", country: "India", city: "roorkee" }]

  return (
    <div className="App">
      <h1 align="center">React-App</h1>
      <div className="ag-theme-alpine" style={ {height: '200px'} }>
        <AgGridReact
            columnDefs={columnDefs}
            rowData={rowData}
            defaultColDef={{flex:1}}>
        </AgGridReact>
      </div>
    </div>
  );
}

export default App;
