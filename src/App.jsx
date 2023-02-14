import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import FormUser from './components/FormUser'
import UserCard from './components/UserCard'

function App() {

const [users, setUsers] = useState()
const [updateInfo, setUpdateInfo] = useState()

console.log(updateInfo);

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
  return (
    <div className="app">
      <h1>users</h1>
      <div className="app__form">
        <FormUser 
          createNewUser={createNewUser}
          updateInfo={updateInfo}
          updateUserById={updateUserById}
        />
      </div>
      <div>
        {
          users?.map(user => (
            <UserCard 
              key={user.id}
              user={user}
              deleteUserById={deleteUserById}
              setUpdateInfo={setUpdateInfo}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
