import { CirclePlus, CircleMinus } from "lucide-react"


export default function Card({score, increaseScore, decreaseScore, teamName, winner}){
    const isWinner = winner === teamName;

    return (
        <div className="md:w-1/3 w-full bg-slate-200 h-auto border-2 border-pink-600 border-solid rounded-lg shadow-lg">
            <h2 className="text-center text-pink-700 font-bold text-3xl border-2 border-pink-600 py-[10px]">
                {teamName} {isWinner? "🏆" : ""}
            </h2>

            <p className="md:text-8xl text-5xl py-7 text-center text-pink-700 ">{score}</p>

            {winner ? null :
                (<div className="flex justify-around text-pink-700 pt-[8px] pb-3">
                    <CircleMinus 
                        size={55}
                        onClick={decreaseScore}
                    />
                    <CirclePlus 
                        size={55} 
                        onClick={increaseScore}
                    />
                </div>)
            }
        </div>
    )
}