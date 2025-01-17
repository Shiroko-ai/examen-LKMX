import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import IconDisk from '../assets/icon-disk.svg';
import IconTrash from '../assets/icon-trash.svg';
import IconPen from '../assets/icon-pen.svg';
export interface Props {
    content: string
    deleteItem: (id: number) => void
    id: number
}


export default function TodoItem({ content, deleteItem, id }: Props) {
    const [isEditing, setIsEditing] = useState<boolean>(false)
    const [value, setValue] = useState<string>(content)
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsEditing(false)
    }

    if (isEditing) {
        return (
            <form onSubmit={handleSubmit} className="flex flex-row gap-4 mb-4">
                <Input value={value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setValue(e.target.value)
                }} className="w-98" />
                <Button
                    variant="icon"
                    type="submit"
                >
                    <img src={IconDisk} />
                </Button>
            </form>
        )
    }
    else {
        return (
            <div className="flex flex-row mb-4 gap-4">
                <h2 className="w-96 flex-1 items-center justify-self-center self-center text-ellipsis overflow-auto">{value}</h2>
                <Button
                    variant="icon"
                    type="button"
                    onClick={() => { setIsEditing(true) }}
                >
                    <img src={IconPen} />
                </Button>
                <Button
                    variant="icon"
                    type="button"
                    onClick={() => { deleteItem(id) }}
                >
                    <img src={IconTrash} />
                </Button>
            </div>
        )
    }
}
