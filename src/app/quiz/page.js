"use client" 

import { useState } from "react";
import { quiz } from "./data";
import { Results } from "@/componets/Results";

const QuizPage = () => {
    // State
    const [ currentQuestion, setCurrentQuestion ] = useState(0)
    const [ selectedAnswer, setSelectedAnswer ] = useState("")
    const [ btnChecked, setBtnChecked ] = useState(false)
    const [ selectedAnswerIndex, setSelectedAnswerIndex ] = useState(null)
    const [ showResult, setShowResult ] = useState(false)
    const [ result, setResult ] = useState({ 
        score: 0,
        correctAnswers: 0,
        wrongAnswers: 0
    })
    
    // Data
    const { questions } = quiz;
    const { question, answers, correctAnswer } = questions[currentQuestion]


    // Display
    const btnText = currentQuestion === questions.length - 1 ? "Finish" : "Next"

    function onAnswerSelected(answer, index) {
        setBtnChecked(true)
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
        if (currentQuestion !== questions.length - 1) {
            setCurrentQuestion(prev => prev + 1)
        } else {
            setCurrentQuestion(0)
            setShowResult(true)
        }
        setBtnChecked(false)
    }
    return (
        <div className="container">
            <h1>Quiz Page</h1>  
            <div>
                <h2>Question: {currentQuestion + 1}/<span>{questions.length}</span></h2>
            </div>
            <div>
                {
                    !showResult ? (
                        <div className="quiz-container">
                            <h3>{question}</h3>
                            <ul>
                                {answers.map((answer, i) => (
                                        <li 
                                            className={selectedAnswerIndex === i ? 'selected' : ''} 
                                            onClick={() => onAnswerSelected(answer, i)}
                                            key={i}>
                                                <span>{answer}</span>
                                        </li>
                                    )
                                )}
                            </ul>
                            <button onClick={nextQuestion} className="btn" disabled={!btnChecked}>{btnText}</button>
                        </div>
                    ) : (
                        <Results result={result} total={questions.length} />
                    )
                }
            </div>
        </div>
    )
}

export default QuizPage;