export const Results = ({ result, total }) => {
    return (
        <div className="quiz-container">
            <h3>Results</h3>
            <h3>Overall: {result.score / 25 * 100}%</h3>

            <p>Total Questions: <span>{total}</span></p>
            <p>Total Score: <span>{result.score}</span></p>
            <p>Correct Answers: <span>{result.correctAnswers}</span></p>
            <p>Wrong Answers: <span>{result.wrongAnswers}</span></p>
            <button onClick={() => window.location.reload()}>Restart</button>
        </div>
    )
}