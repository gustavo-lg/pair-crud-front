import React, { Fragment, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from "react-router-dom";



const Home = () => {

  const [contacts, setContacts] = useState([])
  
  useEffect(() => {
      fetch('http://localhost:4000')
          .then(res => res.json())
          .then(res => setContacts(res.contacts))
  }, [])

  return(
    <Fragment>
        <div className="container py-5">
          <h1>CONTACTS</h1>
          <Link to="/add">Create contact</Link>
          <Table striped bordered hover variant="dark" className="mt-5">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th className="w-25">Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) =>{
                return ( 
                  <tr key={contact._id}>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                    <td>{contact.phone}</td>
                    <td>

                    </td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
        </div>
    </Fragment>
    
  )
}

export default Home;
