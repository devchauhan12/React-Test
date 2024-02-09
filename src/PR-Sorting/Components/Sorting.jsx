import React, { useState } from 'react'
import { Container, Table } from 'react-bootstrap'
import '../Assets/Sorting.css'

const Sorting = () => {
  const data = [
    { id: 1, name: 'Dev Joshi', email: 'dev@gmail.com', address: 'Surat', status: 'Active' },
    { id: 2, name: 'Neel Patel', email: 'neel@gmail.com', address: 'Mumbai', status: 'Away' },
    { id: 3, name: 'Om Prakash Jat', email: 'om@gmail.com', address: 'Delhi', status: 'Not Active' },
  ]
  const categories = ['All', 'Active', 'Away', 'Not Active'];
  const [list, setList] = useState(data)
  const handleSearch = (e) => {
    let name = e.target.value
    let search = data
      .filter(item =>
        item.name.toLowerCase().includes(name.toLowerCase( ))
      )
    setList(search)
  }

  const handleFilter = (e) => {
    let name = e.target.value
    let search = data
      .filter((item) => {
        name === 'All' ? true : item.status === name
      })
    setList(search)
  }

  return (
    <Container className='mt-5'>
      <div className="Header d-flex justify-content-between">
        <h1 className='text-white'>User List</h1>
        <div className='d-flex'>
          <div>
            <label>
              Filter by Category:
              <select key={'xyz'} onChange={handleFilter}>
                {categories.map(status => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className="input me-2">
            <input type="text" autoComplete="off" key={'input'} className='text-white' onChange={handleSearch} />
            <label>Name</label>
          </div>
        </div>
      </div>
      <Table striped bordered hover className='mt-3'>
        <thead>
          <tr>
            <th>#ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {
            list && list.map((e, i) => {
              return (
                <tr key={i}>
                  <td>{e.id}</td>
                  <td>{e.name}</td>
                  <td>{e.email}</td>
                  <td>{e.address}</td>
                  <td style={{ color: e.status === 'Active' ? 'green' : e.status === 'Away' ? '#FFB534' : 'red' }} >{e.status}</td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>

    </Container >
  )
}

export default Sorting