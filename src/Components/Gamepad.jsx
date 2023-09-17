import { useState } from "react";
import swal from "sweetalert";
const Gamepad = () => {
  const numbers = [1, 2, 3, 4, 5, 6];
  const [isHide, setHide] = useState(false);
  const [totalScore, setTotalScore] = useState(0);
  const [selectedNum, setSelectedNum] = useState(0);
  const [randomDice, setDice] = useState(1);

  const randomNumGenerator = () => {
    if (selectedNum === 0) {
      return swal("Please Select a number between (1-6)");
    } else {
      setSelectedNum(0);
      const randomNum = Math.floor(Math.random() * 6) + 1;
      setDice(randomNum);
      const selectedNumElements = document.querySelectorAll(".slect");
      selectedNumElements.forEach((item) => {
        item.style.background = "white";
        item.style.color = "black";
      });
      console.log(randomNum, selectedNum);
      if (randomNum === selectedNum) {
        swal({
          title: "Good job!",
          text: `${randomNum} Points added to your Score`,
          icon: "success",
        });
        const newTotal = totalScore + randomNum;
        setTotalScore(newTotal);
      } else {
        swal({
          title: "Aww loser!",
          text: `From the score, 1 points have been deducted`,
          icon: "error",
        });
        const newTotal = totalScore - 1;
        setTotalScore(newTotal);
      }
    }
  };

  const selectedNumber = (num) => {
    setSelectedNum(num);
    const indexOfSelectedNum = numbers.indexOf(num);
    const seletedNum = document.querySelectorAll(".slect");
    seletedNum.forEach((item) => {
      item.style.background = "white";
      item.style.color = "black";
      seletedNum[indexOfSelectedNum].style.background = "black";
      seletedNum[indexOfSelectedNum].style.color = "white";
    });
  };
  const resetHandler = () => {
    setTotalScore(0);
  };
  const rulesToggle = () => {
    setHide(!isHide);
  };

  return (
    <div>
      <div className="md:flex justify-around mt-10 md:mt-14 items-center">
        <div className="flex-col font-medium text-center">
          <h1 className="text-7xl">{totalScore}</h1>
          <h1 className="text-2xl">Total Score</h1>
        </div>
        <div className="flex md:mt-0 mt-6 justify-center flex-wrap gap-3">
          {numbers.map((num) => (
            <div
              onClick={() => selectedNumber(num)}
              key={num}
              className="w-[62px] slect ml-3 h-[62px] border-[1px] border-[#000000] cursor-pointer text-2xl text-center"
            >
              <div className="p-4 font-bold">{num}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="md:text-right text-center max-w-screen-xl md:pr-24">
        <h1 className="font-medium text-xl md:mt-0 mt-5 md:text-2xl">
          Your Selected Number is {selectedNum}
        </h1>
      </div>

      <div className="md:w-[250px] w-[170px] mx-auto md:mt-20 md:mb-10 my-10">
        <div className="cursor-pointer" onClick={randomNumGenerator}>
          <img src={`/public/dice_${randomDice}.png`} alt="" />         
        </div>
        <h1 className="text-center font-semibold">Click on Dice to roll</h1>

        <button
          onClick={resetHandler}
          className="py-2 md:py-3 w-full md:mt-6 mt-4 rounded text-base text-white bg-[#000000] hover:bg-white hover:border-[1px] hover:border-[#000000] hover:text-[#000000] hover:font-semibold transition hover:duration-500"
        >
          Reset Score
        </button>

        <button
          onClick={rulesToggle}
          className="py-2 md:py-3 w-full md:mt-6 mt-4 rounded text-base text-white bg-[#000000] hover:bg-white hover:border-[1px] hover:border-[#000000] hover:text-[#000000] hover:font-semibold transition duration-0 hover:duration-500"
        >
          {isHide ? "Hide Rules" : " Show Rules"}
        </button>
      </div>

      {isHide ? (
        <div className="bg-[#FBF1F1] p-6 rounded md:max-w-screen-md max-w-sm mx-5 md:mx-auto">
          <h1 className="font-bold md:text-xl mb-4">How to play dice game</h1>
          <div className="md:text-sm text-xs font-medium space-y-2">
            <p>1. Select any number</p>
            <p>2. Click on dice image</p>
            <p>
              3. After click on dice if selected number is equal to dice number
              you will get same point as dice
            </p>
            <p>4. if you get wrong guess then 1 point will be dedcuted </p>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Gamepad;
