import React, { Component} from 'react';
import ReactDOM from 'react-dom';

let skiData = {
    total: 50,
    powder: 20,
    backcounty: 10,
    goal: 100
}

const getPercent = decimal => {
    return decimal * 100 + '%'
}

const calcGoalProgress = (total, goal) => {
    return getPercent(total/goal)
}

const SkiDayCounter = ({total, powder,backcounty, goal}) =>{
    return(
    <section>
        <div>
            <p> Total Days: {total}</p>
        </div>
        <div>
            <p> Powder Days: {powder}</p>
        </div>
        <div>
            <p> Backcounty Days: {backcounty}</p>
        </div>
        <div>
            <p> Goal Progress: {calcGoalProgress(total, goal)}</p>
        </div>
    </section>
    )
}

ReactDOM.render(
    <SkiDayCounter 
        total={skiData.total}
        powder={skiData.powder}
        backcounty={skiData.backcounty}
        goal={skiData.goal}/>,
    document.getElementById('root')
)