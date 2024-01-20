import { useState, useEffect } from 'react';
import { Description } from './Description';
import { Options } from './Options';
import { Feedback } from './Feedback';
import { Notification } from './Notification';

const getInitialFeedbacks = () => {
  const savedFeedbacks = window.localStorage.getItem('total-feedbacks');
  if (savedFeedbacks) {
    return JSON.parse(savedFeedbacks);
  }

  return { good: 0, neutral: 0, bad: 0 };
};

function App() {
  const [feedbacks, setFeedbacks] = useState(getInitialFeedbacks);

  useEffect(() => {
    window.localStorage.setItem('total-feedbacks', JSON.stringify(feedbacks));
  });

  const addFeedback = feedbackType => {
    setFeedbacks({
      ...feedbacks,
      [feedbackType]: feedbacks[feedbackType] + 1,
    });
  };
  const onReset = () => {
    setFeedbacks({ good: 0, neutral: 0, bad: 0 });
  };

  let totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;
  let percentagePositive = Math.round(((feedbacks.good + feedbacks.neutral) / totalFeedback) * 100);
  return (
    <div>
      <Description />
      <Options
        grades={feedbacks}
        onUpdate={addFeedback}
        onReset={onReset}
        totalFeedback={totalFeedback}
      />
      {totalFeedback ? (
        <Feedback
          grades={feedbacks}
          totalFeedback={totalFeedback}
          percentagePositive={percentagePositive}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;
