import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import FormUser from './components/FormUser'
import UserCard from './components/UserCard'

function App() {

const [users, setUsers] = useState()

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
  return (
    <div className="App">
      <h1>users</h1>
      <FormUser 
        createNewUser={createNewUser}
      />
      <div>
        {
          users?.map(user => (
            <UserCard 
              key={user.id}
              user={user}
              deleteUserById={deleteUserById}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
