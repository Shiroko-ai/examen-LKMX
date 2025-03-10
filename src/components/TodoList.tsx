import Input from "./Input";
import TodoItem from "./TodoItem";
import Button from "./Button";
import React, { useRef, useState } from "react";
interface Props{
    title: string
}

interface Todo{
    value: string
    id: number
}

export default function TodoList({title}: Props){
    const [todos, setTodos] = useState<Array<Todo>>([])
    const [inputValue, setInputValue] = useState<string>('')
    const id = useRef(0)
    const deleteItem = (id: number) =>{
        setTodos((prevValues) => prevValues.filter((todo) =>
        {
            return todo.id !== id
        }


            ))
    }
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        if(e.target.value.startsWith(' ')){
            return
        }
        setInputValue(e.target.value)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(inputValue === ''){
            return
        }
        id.current++
        setTodos((preValue)=>[...preValue,
            {
                id: id.current,
                value: inputValue
            }
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
                    {todos.length > 0 ? todos.map((todo) => (
                        <TodoItem
                            key={todo.id}
                            content={todo.value}
                            deleteItem={deleteItem}
                            id={todo.id}
                            />
                    )) : <h2 className="text-slate-500"> No has agregado tareas</h2>}
                </div>
            </div>
        </div>
    )
}
