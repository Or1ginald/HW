import React from 'react'
import m from "./Message.module.css"


type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={m.wrap}>
            <div className={m.avatarPositioning}>
                <img src={props.avatar} alt="" className={m.pic}/>
                <div className={m.bubble}>
                    <div className={m.bubbleContent}>
                        <div className={m.name}>{props.name}</div>
                        <div className={m.message}>{props.message}</div>
                    </div>
                    <div className={m.time}>{props.time}</div>
                </div>
            </div>
        </div>
    )
}

export default Message
