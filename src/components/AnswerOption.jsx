function AnswerOption({
  option,
  status,
  isDisabled,
  onClick
}) {

  let baseStyle =
    "w-full p-3 border rounded-lg text-left transition font-medium ";

  if (status === "correct") {

    baseStyle +=
      "bg-green-500 border-green-600 text-white";

  } else if (status === "incorrect") {

    baseStyle +=
      "bg-red-500 border-red-600 text-white";

  } else {

    baseStyle +=
      "bg-white border-gray-200 text-gray-800 hover:bg-blue-50";

  }

  return (
    <button
      disabled={isDisabled}
      onClick={onClick}
      className={baseStyle}
    >
      {option}
    </button>
  );
}

export default AnswerOption;