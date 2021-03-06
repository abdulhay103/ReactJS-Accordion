import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>Header Notification displayer</h3>

        <section className="info">
          {questions.map((question) => {
            // console.log(question);
            return <SingleQuestion key={question.id} {...question} />;
          })}
          <p>A part of CandyCrab@2021</p>
        </section>
      </div>
    </main>
  );
}

export default App;
