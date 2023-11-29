import BootcampForm from '../bootcamp/BootcampForm'
import './DanglesText.css'
import FlyInText from './FlyInText'

const DanglesText = ({showText, text, handleCards, allCards}) => {

    return (
        <div>
            {showText && <FlyInText text={text} />}
            <div className='dangles'>
                <img 
                    id='dangles1'
                    src='/public/images/danglers.png' 
                    />
                <img 
                    id='dangles2'
                    src='/public/images/danglers.png' 
                    />
            </div>
            {!showText && <BootcampForm 
                            handleCards={handleCards}
                            allCards={allCards} />}
        </div>
    )
}

export default DanglesText