import { useState } from "react"
import axios from "axios"
import BabyCard from "../BabyCard"

const BootcampForm = ({ handleCards, allCards }) => {

    const [name, setName] = useState("")
    const [imgUrl, setImgUrl] = useState("")
    const [action1, setAction1] = useState("")
    const [action2, setAction2] = useState("")
    const [action3, setAction3] = useState("")

    const addBaby = async (e) => {
        e.preventDefault()

        const {data} = await axios.post('/addbaby', {
            name,
            imgUrl,
            action1,
            action2,
            action3
        })

        const newCard = <BabyCard 
                            key={data.id}
                            babyData={data} 
                        />

        let cards = [newCard, ...allCards]

        handleCards(cards)
    }

    console.log(allCards)
    return (
        <form 
            className="bootcamp-form"
            onSubmit={addBaby}
        >
            <label htmlFor="name">Baby Battler Name</label>
            <input 
                name="name" 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="imgUrl">Baby's Image URL</label>
            <input 
                name="imgUrl" 
                type="text" 
                value={imgUrl} 
                onChange={(e) => setImgUrl(e.target.value)}
            />
            <label htmlFor="action1">Baby's Action #1</label>
            <input 
                name="action1" 
                type="text" 
                value={action1} 
                onChange={(e) => setAction1(e.target.value)}
            />
            <label htmlFor="action2">Baby's Action #2</label>
            <input 
                name="action2" 
                type="text" 
                value={action2} 
                onChange={(e) => setAction2(e.target.value)}
            />
            <label htmlFor="action3">Baby's Action #3</label>
            <input 
                name="action3" 
                type="text" 
                value={action3} 
                onChange={(e) => setAction3(e.target.value)}
            />
            <br></br>
            <input type="submit" value={"Train Baby"}></input>
        </form>
    )
}

export default BootcampForm