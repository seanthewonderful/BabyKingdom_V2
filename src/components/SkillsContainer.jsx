

const SkillsContainer = ({ baby }) => {

    const { action1, action2, action3 } = baby

    return (
        <dl>
            <dt 
                id={`action${action1.class}`}
                className="action1"
            >
                Action 1: 
            </dt>
            <dd>{action1.name}</dd>

            <dt 
                id={`action${action2.class}`}
                className="action2"
            >
                Action 2: 
            </dt>
            <dd>{action2.name}</dd>
            
            <dt 
                id={`action${action3.class}`}
                className="action3"
            >
                Action 3: 
            </dt>
            <dd>{action3.name}</dd>
        </dl>
    )
}

export default SkillsContainer