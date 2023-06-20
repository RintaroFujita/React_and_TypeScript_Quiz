import React, { useState } from "react";

type Quiz = {
  question: string;
  options: string[];
  answer: number;
};

const quizData: Quiz[] = [
  {
    question: "ドラゴンボールZで、悟空が最初に戦った宇宙の戦士は誰でしょうか？",
    options: ["ベジータ", "ピッコロ", "フリーザ", "セル"],
    answer: 0,
  },
  {
    question: "ドラゴンボールZで、悟飯が超サイヤ人になったきっかけとなったキャラクターは誰でしょうか？",
    options: [ "ベジータ", "クリリン", "トランクス", "ピッコロ"],
    answer: 3,
  },
  {
    question: "ドラゴンボールZで、セルゲームでの悟飯の父親として知られるキャラクターは誰でしょうか？",
    options: [ "ピッコロ", "クリリン", "ベジータ", "悟天"],
    answer: 0,
  },
  {
    question: "ドラゴンボールZで、フリーザが初めて変身した形態はどれでしょうか？",
    options: ["第2形態", "最終形態", "第1形態", "最初の形態"],
    answer: 2,
  },
  {
    question: "ドラゴンボールZで、トランクスが初めて登場したときの形態はどれでしょうか？",
    options: ["超サイヤ人2", "超サイヤ人", "未来人", "フュージョン"],
    answer: 2,
  },
  {
    question: "ドラゴンボールZで、ベジータが初めて超サイヤ人になったのはどのバトルでしょうか？",
    options: ["フリーザ戦", "セル戦", "ブウ戦", "人造人間戦"],
    answer: 0,
  },
  {
    question: "ドラゴンボールZで、悟空が初めて超サイヤ人になったのはどのバトルでしょうか？",
    options: ["フリーザ戦", "セル戦", "ブウ戦", "ラディッツ戦"],
    answer: 3,
  },
  {
    question: "ドラゴンボールZで、ベジータの息子であるトランクスが所属している集団は何でしょうか？",
    options: ["ジャネンバ軍", "フリーザ軍", "ブウ軍", "タイムパトロール"],
    answer: 3,
  },
  {
    question: "ドラゴンボールZで、ブウが最初に現れた形態はどれでしょうか？",
    options: ["超ブウ", "悪ブウ", "純粋ブウ", "肥満ブウ"],
    answer: 3,
  },
  {
    question: "ドラゴンボールZで、フリーザの父親の名前は何でしょうか？",
    options: [ "キングコール", "ベジータ", "パーネル", "クウラ"],
    answer: 0,
  },
  {
    question: "ドラゴンボールZで、セルが最初に登場した形態はどれでしょうか？",
    options: ["パーフェクトセル", "セミパーフェクトセル", "完全体セル", "不完全体セル"],
    answer: 3,
  },
];

const QuizApp: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (answerIndex: number) => {
    if (answerIndex === quizData[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="quiz-app">
      {showScore ? (
        <div className="score-section">
          あなたの点数は {score}/{quizData.length}点です!
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              Question {currentQuestion + 1}/{quizData.length}
            </div>
            <div className="question-text">
              {quizData[currentQuestion].question}
            </div>
          </div>
          <div className="answer-section">
            {quizData[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className="answer-button"
                onClick={() => handleAnswerOptionClick(index)}
              >
                {option}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default QuizApp;
