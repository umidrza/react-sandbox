import StatisticLine from './StatisticLine'

const Statistics = ({counts}) => {
    const {good, neutral, bad} = counts;
    const sum = good + neutral + bad;

    if (sum === 0){
        return (
            <div>
                <h2>Statistics</h2>
                <p>No feedback given</p>
            </div>
        )
    }

    const average = (good - bad) / sum;
    const positive = good * 100 / sum;

    return (
        <div>
            <h2>Statistics</h2>
            <table>
                <tbody>
                    <StatisticLine text={"Good"} value={good}/>
                    <StatisticLine text={"Neutral"} value={neutral}/>
                    <StatisticLine text={"Bad"} value={bad}/>
                    <StatisticLine text={"All"} value={sum}/>
                    <StatisticLine text={"Average"} value={average}/>
                    <StatisticLine text={"Positive"} value={positive} symbol={"%"}/>
                </tbody>
            </table>
        </div>
    )
}

export default Statistics