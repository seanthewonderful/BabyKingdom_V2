import './FlyInText.css'


const FlyInText = ({text}) => {
    return (
        <div className='flyintext'>
            <div className="flyintext-div">
                <div className="flyin1">{text.l1}</div>
                <div className="flyin2">{text.l2}</div>
                <div className="flyin3">{text.l3}</div>
            </div>

        </div>

    )
}

export default FlyInText