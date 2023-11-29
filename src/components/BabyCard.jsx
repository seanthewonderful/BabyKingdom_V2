import { useState } from 'react'
import './BabyCard.css'
import SkillsContainer from './SkillsContainer'

const BabyCard = ({ babyData }) => {

    const [hide, setHide] = useState(true)

    const changeHide = () => {
        setHide(!hide)
    }

    return (
        <div className="baby-card">
            <article className='card'>
                <header>
                    <h4>{babyData.name}</h4>
                </header>
                <img 
                    id='baby-img'
                    src={babyData.imageURL} 
                    alt='image' 
                />
                <footer>
                    <button onClick={changeHide}>Skills</button>
                </footer>
                <div className='skills-container'>
                    {hide && <dl></dl>}
                    {!hide && <SkillsContainer baby={babyData} />}
                </div>
            </article>
        </div>
    )
}

export default BabyCard