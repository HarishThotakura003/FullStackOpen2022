import {React,useState} from "react";

const Statistics = ({data}) => {
    const [good,neutral,bad,all,average,positive] = data
    if (all!=0){
        return (
            <div>
                <p>good {good}</p>
                <p>neutral {neutral}</p>
                <p>bad {neutral}</p>
                <p>all {all}</p>
                <p>average {average}</p>
                <p>positive {positive} %</p>
            </div>
        )
    }
    else {
        return(
            <p>No feedback given</p>
        )
    }
}

const App = () =>{
    const [good,setGood] = useState(0)
    const [neutral,setNeutral] = useState(0)
    const [bad,setBad] = useState(0)
    const all = good+neutral+bad
    const average =(good-bad)/all
    const positive =(good/all)*100

    return(
        <div>
            <h1>give feedback</h1>
            <button onClick={()=>setGood(good+1)}>good</button>
            <button onClick={()=>setNeutral(neutral+1)}>neutral</button>
            <button onClick={()=>setBad(bad+1)}>bad</button>
            <h1>statistics</h1>
            <Statistics data = {[good,neutral,bad,all,average,positive]}/>
            
        </div>
    )
}

export default App