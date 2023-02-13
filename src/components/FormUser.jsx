import React from 'react'
import { useForm } from 'react-hook-form';

const FormUser = ( { createNewUser}) => {
    const { reset, register, handleSubmit} = useForm()
    const submit = data => {
        createNewUser(data) 
    }
  return (
    <form onSubmit={handleSubmit(submit)}>
      <div>
        <label htmlFor="email">Email</label>
        <input {...register('email')} type="email" id="email"/>
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input {...register('password')} type="password" id="password"/>
      </div>
      <div>
        <label htmlFor="firstName">First name</label>
        <input {...register('first_name')} type="text" id="firstName"/>
      </div>
      <div>
        <label htmlFor="lastName">Last name</label>
        <input {...register('last_name')} type="text" id="lastName"/>
      </div>
      <div>
        <label htmlFor="birthday">Birthday</label>
        <input {...register('birthday')} type="date" id="birthday"/>
      </div>
      <button>Create</button>
    </form>
  );
}

export default FormUser