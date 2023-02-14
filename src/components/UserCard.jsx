import React from 'react'

const UserCard = ( { user, deleteUserById, setUpdateInfo, handleOpen }) => {

    const handleDelete = () => {
        deleteUserById(user.id)
    }

    const handleUpdate = () => {
        setUpdateInfo(user)
        handleOpen()
    }
  return (
    <article className='userCard'>
        <h2>{`${user.first_name} ${user.last_name}`}</h2>
        <ul>
            <li><span><b>Email: </b></span>{user.email}</li>
            <li><span><b>Birthday: </b></span>{user.birthday}</li>
        </ul>
        <div className='userCard-btn'>
            <button className='userCard-btn-item' onClick={handleDelete}>Delete</button>
            <button className='userCard-btn-item' onClick={handleUpdate}>Update</button>
        </div>
    </article>
  )
}

export default UserCard