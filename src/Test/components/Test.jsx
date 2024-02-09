import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchData, filterData, setData, sortData } from '../redux/Action';
import { Container, Table } from 'react-bootstrap';

const Test = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const filteredData = useSelector((state) => state.filteredData)
  const categories = useSelector((state) => state.categories);
  const searchData = useSelector((state) => state.searchData);
  const sortOrder = useSelector((state) => state.sortOrder);
  const [address, setAddress] = useState()
  // const [list, setList] = useState(data)


  useEffect(() => {
    let add = data.map((e) => {
      return e.address
    })
    add = ['All', ...add]
    dispatch(setData(data))
    setAddress(add)
  }, []);

  const handleSearch = (e) => {
    dispatch(searchData(e.target.value));
  };

  const handleFilter = (e) => {
    dispatch(filterData(e.target.value));
  };

  const handleSort = () => {
    const newSortOrder = sortOrder === 'asc' ? 'dsc' : 'asc';
    dispatch(sortData(newSortOrder));
  };

  return (
    <>
      <Container className='mt-5'>
        <h1 className='mb-5 text-center text-info'>Filter, Search, and Sort using Thunk</h1>
        <div className="Header d-flex justify-content-between">
          <h1 className='text-white'>User List</h1>
          <div className='d-flex'>
            <div className="input me-2">
              <input type="text" autoComplete="off" key={'input'} className='text-white' onChange={handleSearch} />
              <label>Name</label>
            </div>
            <div className='Option d-flex align-items-center rounded-4 me-2 text-white p-2'>
              <label>
                Filter by Category:
                <select key={'xyz'} onChange={handleFilter} className='ms-2 rounded-3'>
                  {categories.map(status => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <div className='Option d-flex align-items-center rounded-4 me-2 text-white p-2'>
              <button className='btn px-4 py-6 fs-6' onClick={handleSort}>
                Sort {sortOrder === 'asc' ? <i className="ms-2 fa-regular fa-circle-up"></i> : <i className="ms-2 fa-regular fa-circle-down"></i>}
              </button>
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
              filteredData && filteredData.map((e, i) => {
                return (
                  <tr key={i}>
                    <td>{i + 1}</td>
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
    </>
  );
}

export default Test
