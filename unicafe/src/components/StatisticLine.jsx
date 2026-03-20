
const StatisticLine = ({text, value, symbol}) => {
    return (
        <tr>
            <td>{text}</td>
            <td>{value} {symbol && ` ${symbol}`}</td>
        </tr>
    )
}

export default StatisticLine