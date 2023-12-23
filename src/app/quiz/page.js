"use client" 

import { useState } from "react";
import { quiz } from "../data";

const QuizPage = () => {
    const [ activeQuestion, setActiveQuestion ] = useState(0)
    const [ selectedAnswer, setSelectedAnswer ] = useState("")
    const [ checked, setChecked ] = useState(false)
    const [ selectedAnswerIndex, setSelectedAnswerIndex ] = useState(null)
    const [ showResult, setShowResult ] = useState(false)
    const [ result, setResult ] = useState({ 
        score: 0,
        correctAnswers: 0,
        wrongAnswers: 0
    })
    const { questions } = quiz;
    const { question, answers, correctAnswer } = questions[activeQuestion]

    function onAnswerSelected(answer, index) {
        setChecked(true)
        setSelectedAnswerIndex(index)
        if (answer === correctAnswer) {
            setSelectedAnswer(true);
            // console.log("true");
        } else {
            setSelectedAnswer(false)
            // console.log("false");
        }
    }

    // Calculate score and inc to next q
    function nextQuestion() {
        // setSelectedAnswer(null);
        setSelectedAnswerIndex(null);
        
        setResult((prev) =>
            selectedAnswer ? {
                ...prev, 
                score: prev.score + 5,
                correctAnswers: prev.correctAnswers + 1
            } : {
                ...prev, 
                wrongAnswers: prev.wrongAnswers + 1
            }
        )
        if (activeQuestion !== questions.length - 1) {
            setActiveQuestion(prev => prev + 1)
        } else {
            setActiveQuestion(0)
            setShowResult(true)
        }
        setChecked(false)
    }
    return (
        <div className="container">
            <h1>Quiz Page</h1>  
            <div>
                <h2>Question: {activeQuestion + 1}/<span>{questions.length}</span></h2>
            </div>
            <div>
                {
                    !showResult ? (
                        <div className="quiz-container">
                            <h3>{question}</h3>
                            <ul>
                                {answers.map((answer, i) => (
                                        <li 
                                            className={selectedAnswerIndex === i ? 'li-selected' : 'li-hover'} 
                                            onClick={() => onAnswerSelected(answer, i)}
                                            key={i}>
                                                <span>{answer}</span>
                                        </li>
                                    )
                                )}
                            </ul>
                            {
                                checked ? (
                                    <button onClick={nextQuestion} className="btn">
                                        {activeQuestion === questions.length - 1 ? "Finish" : "Next" }
                                    </button>
                                ) : (
                                    <button disabled onClick={nextQuestion} className="btn-disabled">
                                        {activeQuestion === questions.length - 1 ? "Finish" : "Next" }
                                    </button>
                                )
                            }
                        </div>
                    ) : (
                        <div className="quiz-container">
                            <h3>Results</h3>
                            <h3>Overall: {result.score / 25 * 100}%</h3>

                            <p>Total Questions: <span>{questions.length}</span></p>
                            <p>Total Score: <span>{result.score}</span></p>
                            <p>Correct Answers: <span>{result.correctAnswers}</span></p>
                            <p>Wrong Answers: <span>{result.wrongAnswers}</span></p>
                            <button onClick={() => window.location.reload()}>Restart</button>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default QuizPage;