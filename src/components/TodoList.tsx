import Input from "./Input";
import TodoItem from "./TodoItem";
import Button from "./Button";
import React, { useState } from "react";
interface Props{
    title: string
}
export default function TodoList({title}: Props){
    const [todos, setTodos] = useState<Array<string>>([])
    const [inputValue, setInputValue] = useState<string>('')
    const deleteItem = (id: number) =>{
        setTodos((prevValues) => prevValues.filter((_,index) =>
        {
            return index!== id
        }


            ))
    }
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setInputValue(e.target.value)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(inputValue === ''){
            return
        }
        setTodos((preValue)=>[...preValue,
            inputValue
        ])
        setInputValue('')
    }



    return(
        <div className="mt-8 border-r bg-slate-50 rounded-lg py-4 shadow-lg">
            <div className="mx-10 mt-2">
                <h1 className="text-2xl font-bold">{title}</h1>
                <form onSubmit={handleSubmit} className="flex flex-row w-full gap-3">
                    <Input
                    placeholder="Escribe una tarea"
                    value={inputValue}
                    onChange={handleInputChange}
                    />
                    <Button
                    variant="text"
                    type="submit"
                    >
                    Agregar
                    </Button>
                </form>
                <div className="px-2 py-4 bg-slate-200 rounded mt-2">
                    {todos.length > 0 ? todos.map((todo, index) => (
                        <TodoItem
                            key={index}
                            content={todo}
                            deleteItem={deleteItem}
                            id={index} />
                    )) : <h2 className="text-slate-500"> No has agregado tareas</h2>}
                </div>
            </div>
        </div>
    )
}
