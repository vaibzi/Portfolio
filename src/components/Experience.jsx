import * as React from "react";
// import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

// import { BlogIcon, DocIcon, MailIcon, ProfileIcon } from "./Icons"
// import ListItemIcon from "@mui/material/ListItemIcon";

import Navo from '../img/Navo.png';
import Cod from '../img/Codsoft.png';



// Generate Order Data
function createData(id, year, name, post, ) {
  return { id, year, name, post,  };
}


const rows = [
  createData(
    0,
    "Jan 2024",
    <i>
    <img alt="not found" src={Navo} width="25"  
    />     Navodita Infotech 
    </i>,
    "C++ Programming Intern",
    
   
  ),
  createData(
    1,
    "Dec 2023",
    <i>
    <img alt="not found" src={Cod} width="25"  
    />     Codsoft 
    </i>,
  
    "Web Development Intern",
    
  ),
  
];

// function preventDefault(event) {
//   event.preventDefault();
// }

export default function Experience() {
  return (
    <React.Fragment>
      <h1 style={{ color: 'white' }}>Experience</h1>
      <Table size="small" >
        <TableHead >
          <TableRow >
            <TableCell style={{ color: 'grey', fontWeight: 'bolder' }}>Year</TableCell>
            <TableCell style={{ color: 'grey', fontWeight: 'bolder' }} >Organization</TableCell>
            <TableCell style={{ color: 'grey', fontWeight: 'bolder' }} >Role</TableCell>
            </TableRow>
        </TableHead>
        <TableBody >
          {rows.map((row) => (
            <TableRow key={row.id} >
              <TableCell style={{
                   padding: '20px',
                    boxSizing: 'content-box',
                    color : 'white'
                }}>{row.year}</TableCell>

              <TableCell style={{ color: 'white' }}>{row.name}</TableCell>
              <TableCell style={{ color: 'white' }}>{row.post}</TableCell>
              <TableCell style={{ color: 'white' }}>{row.projects}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link> */}
    </React.Fragment>
  );
}
