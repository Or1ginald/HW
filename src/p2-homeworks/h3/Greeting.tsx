import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    isError: boolean
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = ({name, setNameCallback, addUser, isError, totalUsers}) => {
    const inputClass = isError ? s.error : s.someClass

    return (
        <div>
            <input value={name} onChange={setNameCallback} className={inputClass}/>
            {isError ? <span>Не корректное имя пользователя</span> : false}
            <button onClick={addUser}>add</button>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
