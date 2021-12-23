import React, { Component, Fragment } from 'react';
import Statictics from 'components/Statictics';
import FeedbackOptions from 'components/FeedbackOptions';
import SectionTitle from './SectionTitle/SectionTitle';
import Notification from './Notification/Notification';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = name => {
    this.setState(state => {
      return { ...state, [name]: state[name] + 1 };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    const result = (good / total) * 100;
    return Math.round(result);
  };

  render() {
    const total = this.countTotalFeedback();
    const positiveTotal = this.countPositiveFeedbackPercentage();
    const { good, neutral, bad } = this.state;

    return (
      <Fragment>
        <SectionTitle title="Please leave yout feeback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </SectionTitle>
        {good === 0 && bad === 0 && neutral === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <SectionTitle title="Statictics">
            <Statictics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positiveTotal={positiveTotal}
            />
          </SectionTitle>
        )}
      </Fragment>
    );
  }
}
