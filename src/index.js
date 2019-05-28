import React, { Component} from 'react';
import ReactDOM from 'react-dom';

let skiData = {
    total: 50,
    powder: 20,
    backcounty: 10,
    goal: 100
}

class SkiDayCounter extends Component {
    render() {
        const {total, powder, backcounty, goal} = this.props
        return (
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
                    <p> Goal: {goal}</p>
                </div>
            </section>
        )
    }
}

ReactDOM.render(
    <SkiDayCounter 
        total={skiData.total}
        powder={skiData.powder}
        backcounty={skiData.backcounty}
        goal={skiData.goal}/>,
    document.getElementById('root')
)