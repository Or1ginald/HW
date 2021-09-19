import React from 'react'
import {AffairType} from "./HW2";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (key:number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix
    return (
        <div>
            Задача {props.affair.name}. Приоритет {props.affair.priority}

            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
