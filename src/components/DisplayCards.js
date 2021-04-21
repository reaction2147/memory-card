import React from "react"
import Characters from "./Characters"
import Card from "./Card"

const DisplayCards = () => {
    return Characters.map((char => {
        return (
            <Card 
            key={char.id}
            name={char.name}
            src={char.src}
            id={char.id}
            />
        )
    }))
}

export default DisplayCards