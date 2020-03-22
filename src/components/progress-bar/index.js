import * as React from "react";
import './index.css';

class ProgressBar extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            fillFrom: 0,
            fillTo: 50,
            fillTime: 5000,
            progressWidth: 0
        };

        // let {fillFrom, fillTo, fillTime} = this.state;
        // if (fillTime) {
        //
        // } else if (fillTo) {
        //
        // }
        this.fillProgress(0, 50, 5000);
    }

    fillProgress(from, to, time) {
        let increment = to / time * 1000;
        let tick = //time / to * 10;
        const interval = setInterval(() => {
            if (this.state.progressWidth >= to) {
                clearInterval(interval)
            } else {
                this.setState({
                    progressWidth: this.state.progressWidth + increment
                });
            }
        }, tick);
    }

    render() {
        const style = {
            width: this.state.progressWidth + '%'
        };
        return (
            <div className={'progress-bar'}>
                <div className={'progress'} style={style}>
                </div>
            </div>
        )
    }


}

export default ProgressBar