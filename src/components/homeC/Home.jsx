import HeaderNav from '../HeaderNav'
import DanglesText from './DanglesText'
import BabyCardContainer from '../BabyCardContainer'

const Home = () => {
    return (
        <div className='home-div'>
            <HeaderNav title="The Battle for Baby Kingdom"/>
            <DanglesText 
                showText={true}
                text={{l1: "Babies", l2: "Bottles", l3: "Battles" }}/>
            <BabyCardContainer />
        </div>
    )
}

export default Home