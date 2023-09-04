import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {useForm} from 'react-hook-form'

function App() {
 
  const {register, handleSubmit} = useForm()

  const handleSave = (data)=>{
    console.log(data)
  }

  return (
    <>
      <form className='w-screen h-screen flex flex-col items-center justify-center gap-3 ' onSubmit={handleSubmit(handleSave)}>
        <h1 className='text-4xl pb-10 font-semibold'>Formulário</h1>
        <input 
        className='w-96 border border-slate-200  outline-none rounded py-3 px-4'
        type="text"
        placeholder='Digite o seu nome...'
        {...register("name", {required:true})}
        id='name'
         />

        <input 
        className='w-96 border border-slate-200  outline-none rounded py-3 px-4'
        type="text" 
        placeholder='Digite o seu email...'
        {...register("email", {required:true})}
        id="email" />

        <input 
         className='w-96 border border-slate-200  outline-none rounded py-3 px-4'
        type="text" 
        placeholder='Digite o seu email...'
        {...register("email", {required:true})}
        id="email" />

        <input type="submit" className=' w-96 py-2 px-3  bg-slate-700 font-semibold text-white rounded' value="Enviar" />
      </form>
    </>
  )
}

export default App
