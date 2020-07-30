import React, { Fragment, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";


const Add = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: ''
    })

    const handleSubmit = form => {
        fetch('http://localhost:4000/', {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(form)
        }).then(res => res)
    }

    return(
        <Fragment>
        <div className="container py-5">
          <h1>ADD</h1>
          <Link to="/">Return</Link>
          {JSON.stringify(form)}
            <form onSubmit={(e) => e.preventDefault()}>
            <Table striped bordered hover variant="dark" className="mt-5">
                <tbody>
                <tr>
                    <td className="w-25">Name</td>
                    <td>
                        <input value={form.name} onChange={(e)=> setForm({...form, name: e.target.value})}  type="text" className="form-control"></input>
                    </td>
                </tr>
                <tr>
                    <td>E-mail</td>
                    <td>
                        <input value={form.email} onChange={(e)=> setForm({...form, email: e.target.value})}  type="text" className="form-control"></input>
                    </td>
                </tr>
                <tr>
                    <td>Phone</td>
                    <td>
                        <input value={form.phone} onChange={(e)=> setForm({...form, phone: e.target.value})} type="text" className="form-control"></input>
                    </td>
                </tr>
                </tbody>
            </Table>
            <Button onClick={()=> handleSubmit(form)} type="submit" variant="success">ADD</Button>
            <Button className="ml-2" variant="danger">Cancel</Button>
          </form>
        </div>
    </Fragment>
    )
}

export default Add;