import Card from "./components/Card/Card";
import { useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import './App.css'

function App() {
   const [scoreA, setScoreA] = useState(0);
    const [scoreB, setScoreB] = useState(0);
    const [winner, setWinner] = useState(null);

    const MAX_SCORE = 10;

    useEffect(() => {
        if(scoreA < MAX_SCORE && scoreB < MAX_SCORE){
            return;
        }
        if(scoreA == MAX_SCORE){
            setWinner("Team A")
            toast.success("Team A wins!");
        }
        if(scoreB == MAX_SCORE){
            setWinner("Team B")
            toast.success("Team B wins!");
        }
    }, [scoreA, scoreB]);

    return(
        <div className="bg-pink-300 min-h-screen p-5">
            <h1 className="text-center md:text-5xl text-3xl md:py-10 py-4 border-2 border-pink-600 border-solid rounded-lg text-pink-700 bg-slate-200 font-bold font-monospace">SCORE BOARD</h1>

            <div className="md:mt-[40px] mt-[25px] flex md:flex-row flex-col gap-5 md:gap-0 justify-around">
                <Card 
                    score={scoreA} 
                    teamName="Team A" 
                    increaseScore={()=>{
                        setScoreA(scoreA+1)
                    }}
                    decreaseScore={()=>{setScoreA(scoreA-1)}}
                    winner={winner}
                />
                <Card 
                    score={scoreB} 
                    teamName="Team B" 
                    increaseScore={()=>{setScoreB(scoreB+1)}}
                    decreaseScore={()=>{setScoreB(scoreB-1)}}
                    winner={winner}
                />
            </div>
            
            {winner ? (<p className="text-pink-700 text-center text-3xl mt-5">Winner Team is <b className=" mx-4">{winner}🏆🏆🏆</b>. Click reset to start again</p>) : null}

            <button 
                className="py-3 px-20 bg-pink-600 text-white text-xl md:text-2xl rounded-lg font-bold m-auto block md:mt-10 mt-5 shadow-lg hover:bg-pink-800 cursor-pointer" 
                onClick={()=>{
                    setScoreA(0);
                    setScoreB(0);
                    setWinner(null);
                }}
            >
                Reset
            </button>
            <Toaster/>
        </div>
    )
}

export default App
