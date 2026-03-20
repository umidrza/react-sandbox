import Button from './Button'

const Feedback = ({makeFeedback}) => {
    return (
        <div>
            <h2>Give Feedback</h2>
            <Button content={"Good"} onClick={() => makeFeedback("good")}/>
            <Button content={"Neutral"} onClick={() => makeFeedback("neutral")}/>
            <Button content={"Bad"} onClick={() => makeFeedback("bad")}/>
        </div>
    )
}

export default Feedback