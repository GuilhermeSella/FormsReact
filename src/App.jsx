import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {useForm} from 'react-hook-form'
import {z} from "zod"
import {zodResolver} from "@hookform/resolvers/zod"

const schema = z.object({
  name: z.string().nonempty("O campo nome é obrigatório"),
  email: z.string().nonempty("Digite um email válido").email("O Campo email é obrigatório"),
  senha: z.string().nonempty("O campo senha é obrigatório").min(3, "A senha deve ter pelo menos 6 caracteres").max(12, "A senha deve ter no máximo 12 caracteres")
})


function App() {
 
  const {register, handleSubmit, formState:{errors}} = useForm({
    resolver:zodResolver(schema)
  })

  const handleSave = (data)=>{
    console.log(data)
  }

  return (
    <>
      <form className='w-screen h-screen flex flex-col items-center justify-center gap-5 ' onSubmit={handleSubmit(handleSave)}>
        <h1 className='text-4xl pb-10 font-semibold'>Formulário</h1>

        <div className='flex flex-col items-start gap-2'>
          <input 
          className='w-96 border border-slate-200  outline-none rounded py-3 px-4'
          type="text"
          placeholder='Digite o seu nome...'
          {...register("name")}
          id='name'
          />

          {errors.name && <p className='font-semibold text-red-600 text-left'>{errors.name.message}</p>}

         </div>

        <div className='flex flex-col items-start gap-2'>
          <input 
          className='w-96 border border-slate-200  outline-none rounded py-3 px-4'
          type="text" 
          placeholder='Digite o seu email...'
          {...register("email")}
          id="email" />
          {errors.email && <p className='font-semibold text-red-600 text-left'>{errors.email.message}</p>}

        </div>

        <div className='flex flex-col items-start gap-2'>
          <input 
          className='w-96 border border-slate-200  outline-none rounded py-3 px-4'
          type="text" 
          placeholder='Digite uma senha...'
          {...register("senha")}
          id="senha" />
             {errors.senha && <p className='font-semibold text-red-600 text-left'>{errors.senha.message}</p>}
        </div>

        <input type="submit" className=' w-96 py-2 px-3  bg-slate-700 font-semibold text-white rounded' value="Enviar" />
      </form>
    </>
  )
}

export default App
