'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import  {useToast} from '@/hooks/use-toast'
import { useNavigate, useParams } from "react-router-dom";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api"; // Adjust the path as necessary


export default function Lobby() {
  const [gameCode, setGameCode] = useState('')
  const [language, setLanguage] = useState('Python');
  const [isCreatingGame, setIsCreatingGame] = useState(true)
  const name= localStorage.getItem("username");

  const createGameMutation = useMutation(api.games.createGame);
  const joinGameMutation = useMutation(api.games.joinGame); 


  const { player } = useParams();
  const navigate = useNavigate();

  const {toast }= useToast();
  
  const handleCreateGame = async () => {
    try {
        const player1Id = player ?? ''; // Replace with actual player ID
        const newGame = await createGameMutation({ player1Id });
  
        if (newGame && newGame) {
          navigate(`/game/${player1Id}/${newGame}`);
        } else {
            toast({
                title: "Uh oh! Something went wrong.",
                description: "There was a problem with your request.",
              })
        }
      } catch (error) {
        toast({
            title: "Uh oh! Something went wrong.",
            description: "There was a problem with your request.",
          })
      }
  }

  const handleJoinGame = async () => {
    if (gameCode) {
      try {  
        const player2Id = player ?? '';
        const result = await joinGameMutation({
          gameId: gameCode,
          player2Id: player2Id,
        });
  
        if (result) {
          navigate(`/game/${player2Id}/${gameCode}`);
          
        } else {
            toast({
                title: "Uh oh! Something went wrong.",
                description: "There was a problem with your request.",
              })
            
        }
      } catch (error) {
        toast({
            title: "Uh oh! Something went wrong.",
            description: "There was a problem with your request.",
          })
      }
    } else {
        toast({
            title: "Uh oh! Something went wrong.",
            description: "There was a problem with your request.",
          })
    }
    toast({
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
      })
  };



  return (
    <div className="min-h-screen overflow-y-hidden  flex items-center justify-center text-white">

<header className="py-4 px-6 flex justify-between absolute w-screen top-0 items-center bg-vs-light-gray">
        <h1 className="text-2xl font-bold text-[#2babf1]">PowerCode</h1>
        <nav>
          <ul className="flex space-x-4">
            <h2 className="hover:text-vs-blue transition-colors">{name}</h2>
          </ul>
        </nav>
      </header>

      <div className="bg-[#252526] p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6 text-center text-vs-blue">Game Lobby</h1>
        
        <div className="mb-6">
          <Label htmlFor="gameMode" className="text-white">Game Mode</Label>
          <RadioGroup id="gameMode" className="flex mt-2" defaultValue="create" onValueChange={(value) => setIsCreatingGame(value === 'create')}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="create" id="create" className="border-[#3c3c3c] text-[#3c3c3c]" />
              <Label htmlFor="create" className="text-white">Create Game</Label>
            </div>
            <div className="flex items-center space-x-2 ml-4">
              <RadioGroupItem value="join" id="join" className="border-[#3c3c3c] text-[#3c3c3c]" />
              <Label htmlFor="join" className="text-white">Join Game</Label>
            </div>
          </RadioGroup>
        </div>

        {!isCreatingGame && (
          <div className="mb-6">
            <Label htmlFor="gameCode" className="text-white">Game Code</Label>
            <Input 
              id="gameCode"
              placeholder="Enter game code"
              value={gameCode}
              onChange={(e) => setGameCode(e.target.value)}
              className="mt-1 bg-[#1e1e1e] text-white border-[#3c3c3c] focus:border-[#3c3c3c] focus:ring-[#3c3c3c]"
            />
          </div>
        )}

        <div className="mb-6">
          <Label className="text-white">Programming </Label>
          <RadioGroup value={language} onValueChange={(e) => setLanguage(e)} className="flex flex-col space-y-1 mt-2">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="easy" id="easy" className="border-[#3c3c3c] text-[#3c3c3c]" />
              <Label htmlFor="Python" className="text-white">Python</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="medium" id="medium" className="border-[#3c3c3c] text-[#3c3c3c]" />
              <Label htmlFor="C" className="text-white">C</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="hard" id="hard" className="border-[#3c3c3c] text-[#3c3c3c]" />
              <Label htmlFor="Java" className="text-white">Java</Label>
            </div>
          </RadioGroup>
        </div>

        <Button 
          className="w-full bg-[#3c3c3c] hover:bg-[#007acc] text-white transition-colors duration-200"
          onClick={isCreatingGame ? handleCreateGame : handleJoinGame}

        >
          {isCreatingGame ? 'Create Game' : 'Join Game'}
        </Button>
      </div>
    </div>
  )
}

