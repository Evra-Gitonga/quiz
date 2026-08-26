function ResultsScreen({
  userName,
  score,
  total,
  onRestart
}) {

  return (
    <div className="max-w-md mx-auto mt-20 p-8 bg-green-50 rounded-xl text-center shadow-lg border border-green-200">

      <h1 className="text-3xl font-extrabold text-green-700 mb-2">
        Quiz Finished!
      </h1>

      <p className="text-xl text-gray-700 mb-6">
        Nice job,{" "}
        <span className="font-bold">
          {userName}
        </span>{" "}
        - you scored {score}/{total}!
      </p>

      <button
        onClick={onRestart}
        className="bg-green-600 text-white p-3 rounded-lg w-full font-bold hover:bg-green-700 transition"
      >
        Restart Quiz
      </button>

    </div>
  );
}

export default ResultsScreen;