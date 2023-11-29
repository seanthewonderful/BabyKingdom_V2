import BabyCardContainer from "../BabyCardContainer"
import BabyCard from "../BabyCard"
import HeaderNav from "../HeaderNav"
import DanglesText from "../homeC/DanglesText"
import './Bootcamp.css'
import axios from "axios"
import { useState, useEffect } from "react"

export default function Bootcamp() {

    const [babyCards, setBabyCards] = useState([])

    useEffect(() => {
        axios.get('/thebabies')
        .then((response) => {
            const babyData = response.data
            const cards = babyData.map((baby) => {
                return (
                    <BabyCard 
                        key={baby.id}
                        babyData={baby}
                    />
                )
            })
            setBabyCards(cards)
        })
    }, [])

    const handleCards = (cards) => {
        setBabyCards(cards)
    }

    return (
        <div className="bootcamp-div">
            <HeaderNav title="Fort GoogooGaga Bootcamp" />
            <DanglesText 
                showText={false}
                text={""}
                handleCards={handleCards}
                allCards={babyCards}
            />
            <BabyCardContainer 
                babyCards={babyCards} />
        </div>
    )
}