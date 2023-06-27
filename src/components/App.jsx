// import React from 'react';
import { FeedbackContextProvider } from './Feedback/FeedbackContextProvider/FeedbackContextProvider';
import { Feedback } from './Feedback/Feedback';
export const App = () => {
  return (
    <div className="app">
      <Feedback />
    </div>
  );
};
