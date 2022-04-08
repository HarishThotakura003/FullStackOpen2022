import {React,useState} from "react";

const StatisticLine = (props) => {
    const {text,value} = props
    return (
        <>
            <tr>
                <td>{text}</td>
                <td>{value}</td>
            </tr>
        </>
    )
}

const Statistics = ({data}) => {
    const [good,neutral,bad,all,average,positive] = data
    if (all!=0){
        return (
            <div>
                <table><tbody>
                <StatisticLine text="good" value={good} />
                <StatisticLine text="neutral" value={neutral} />
                <StatisticLine text="bad" value={bad} />
                <StatisticLine text="all" value={all} />
                <StatisticLine text="average" value={average} />
                <StatisticLine text="positive" value={positive} />
                </tbody></table>
            </div>
        )
        }
    else {
        return(
            <p>No feedback given</p>
        )
    }
}

const Button = (props) => {
    const {onClick,text} = props
    return (
        <>
            <button onClick={onClick}>{text}</button>
        </>
    )
}

const App = () =>{
    const [good,setGood] = useState(0)
    const [neutral,setNeutral] = useState(0)
    const [bad,setBad] = useState(0)

    const all = good+neutral+bad
    const average =(good-bad)/all
    const positive =(good/all)*100

    const setgood = () => setGood(good+1)
    const setneutral = () => setNeutral(neutral+1)
    const setbad = () => setBad(bad+1)

    return(
        <div>
            <h1>give feedback</h1>
            <Button onClick={setgood} text="good" />
            <Button onClick={setneutral} text="neutral" />
            <Button onClick={setbad} text ="bad" />
            <h1>statistics</h1>
            <Statistics data = {[good,neutral,bad,all,average,positive]}/>
            
        </div>
    )
}

export default App