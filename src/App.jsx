import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import FormUser from './components/FormUser'
import UserCard from './components/UserCard'

function App() {

const [users, setUsers] = useState()
const [updateInfo, setUpdateInfo] = useState()
const [isOpen, setIsOpen] = useState(false)

const getAllUsers = () => {
  const url = 'https://users-crud.academlo.tech/users/'
  axios.get(url)
    .then(res => setUsers(res.data))
    .catch(error => console.log(error))
}

useEffect(() => {
  getAllUsers()
}, [])

const createNewUser = data => {
  const url = 'https://users-crud.academlo.tech/users/'
  axios.post(url, data)
    .then(res => {
      console.log(res.data)
      getAllUsers()
    })
    .catch(error => console.log(error))
}

const deleteUserById = id => {
  const url = `https://users-crud.academlo.tech/users/${id}/`
  axios.delete(url)
     .then(res => {
      console.log(res.data)
      getAllUsers()
    })
     .catch(error => console.log(error))
}

const updateUserById = (id, data) => {
  const url = `https://users-crud.academlo.tech/users/${id}/`
  axios.put(url, data)
    .then(res => {
      console.log(res.data)
      getAllUsers()
      setUpdateInfo()
    })
    .catch(error => console.log(error))
}

const handleOpen = () => setIsOpen(true)
const handleClose = () => setIsOpen(false)

  return (
    <div className="app">
      <h1>USERS</h1>
      <button onClick={handleOpen} className="app__btn-form">+ CREATE NEW USER</button>
      <div className={`app__form ${isOpen && 'app__form-visible'}`} >
        <FormUser 
          createNewUser={createNewUser}
          updateInfo={updateInfo}
          updateUserById={updateUserById}
          handleClose={handleClose}
          setUpdateInfo={setUpdateInfo}
        />
      </div>
      <br />
      <div className='app__users'>
        {
          users?.map(user => (
            <UserCard 
              key={user.id}
              user={user}
              deleteUserById={deleteUserById}
              setUpdateInfo={setUpdateInfo}
              handleOpen={handleOpen}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
