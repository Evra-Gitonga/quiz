import AnswerOption from "./AnswerOption";

function Question({ data, selectedAnswer, onSelect }) {

  return (
    <div>

      <h2 className="text-xl font-bold text-gray-800 mb-4">
        {data.question}
      </h2>

      <div className="space-y-3">

        {data.options.map((option, index) => {

          let status = "default";

          if (selectedAnswer !== null) {

            if (option === data.correctAnswer) {
              status = "correct";

            } else if (option === selectedAnswer) {
              status = "incorrect";
            }

          }

          return (
            <AnswerOption
              key={index}
              option={option}
              status={status}
              isDisabled={selectedAnswer !== null}
              onClick={() => onSelect(option)}
            />
          );

        })}

      </div>

    </div>
  );
}

export default Question;