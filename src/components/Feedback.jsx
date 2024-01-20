export const Feedback = ({ grades, totalFeedback, percentagePositive }) => {
  const reviews = Object.entries(grades);
  return (
    <div>
      {reviews.map(review => (
        <p key={reviews.indexOf(review)}>
          {review[0].charAt(0).toUpperCase() + review[0].slice(1)}: {review[1]}
        </p>
      ))}
      <p>Total: {totalFeedback}</p>
      <p>Positive: {percentagePositive}%</p>
    </div>
  );
};
