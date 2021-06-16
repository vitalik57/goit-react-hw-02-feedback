import React, { Component } from "react";
import Section from "../../section/Section";
import Buttons from "./Buttons";
import Notification from "./Notification";
import Spans from "./Spans";

class Feedbacke extends Component {
  state = { good: 0, neutral: 0, bad: 0 };
  // onClick={countGoodFeedback()}
  buttonGood = () => {
    this.setState(e => {
      return {
        good: e.good + 1
      };
    });
  };
  buttonBad = () => {
    this.setState(e => {
      return {
        bad: e.bad + 1
      };
    });
  };
  buttonneutral = () => {
    this.setState(e => {
      return {
        neutral: e.neutral + 1
      };
    });
  };
  totalFeedbak = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  goodProcen = () => {
    return this.state.good * 100;
  };
  positiveFeedback = () => {
    return (this.goodProcen() / this.totalFeedbak()).toFixed(2);
  };

  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          {" "}
          <Buttons buttonGood={this.buttonGood} buttonneutral={this.buttonneutral} buttonBad={this.buttonBad} />
        </Section>

        <div>
          {this.totalFeedbak() ? (
            <Section title="Statistics">
              <Spans
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                positiveFeedback={this.positiveFeedback}
                totalFeedbak={this.totalFeedbak}
              />
            </Section>
          ) : (
            <Notification message="No feedback given" />
          )}
        </div>
      </div>
    );
  }
}

export default Feedbacke;
