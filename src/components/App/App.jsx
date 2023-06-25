// import FeedbackOptions from "components/FeedbackOptions";
// import Notification from "components/Notification";
// import Section from "components/Section";
// import Statistics from "components/Statistics";
import {Component} from "react";

export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleClickGood = () => {
    this.setState((prevState) => {
      return {good: prevState.good + 1}
});
  
  };

  handleClickNeutral = () => {
    this.setState((prevState) => {
      return {neutral: prevState.neutral + 1}
    });
  };

  handleClickBad = () => {
    this.setState((prevState) => {
      return {bad: prevState.bad + 1}
    });
  };

  countTotalFeedback() {
    const {good, neutral, bad} = this.state;
    const total = good + neutral + bad;
  return total;
  }

  countPositiveFeedbackPercentage(){
    const {good, neutral, bad} = this.state;
    const positiveFeedbackPercentage = Math.round((good * 100) / (good + neutral + bad));
    return positiveFeedbackPercentage;
  };

 render () {
  const {good, neutral, bad} = this.state;
  return (
  <>
    <p>Please leave feedback</p>
      <ul>
        <li><button type='button' onClick={this.handleClickGood}>Good</button></li>
        <li><button type='button' onClick={this.handleClickNeutral}>Neutral</button></li>
        <li><button type='button' onClick={this.handleClickBad}>Bad</button></li>
      </ul>
    <p>Statistics</p>
      <ul>
        <li>Good:{good}</li>
        <li>Neutral:{neutral}</li>
        <li>Bad:{bad}</li>
      </ul>
    <p>Total:{this.countTotalFeedback()}</p>
    <p>Positive feedback:{this.countPositiveFeedbackPercentage()}%</p>
    </>
  );
}
  
};

