import React, { useState } from "react";
import { useTodosDispatch } from "../contexts/TodosContext";

function TodoForm(){

    const [value, setValue] = useState('');
    const dispatch = useTodosDispatch();

    const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch({
            type: 'CREATE',
            text: value
        });
        setValue('');
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                value={value}
                placeholder='todo input'
                onChange={e => setValue(e.target.value)}
            />
            <button>Apply</button>
        </form>
    );
}

export default TodoForm;