function StartScreen({ totQuestions }) {
  return (
    <div className="start">
      <h2>Welcome To React Quiz</h2>
      <h3>{totQuestions} Question to test your React Mastery</h3>
      <button className="btn btn-ui">Let's Start</button>
    </div>
  );
}

export default StartScreen;
