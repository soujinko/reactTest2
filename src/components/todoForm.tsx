import React, { useState } from 'react';
import { useTodosDispatch } from '../contexts/todoContext';

function TodoForm () {
    const [value, setValue] = useState('')
    const dispatch = useTodosDispatch();
    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch({
            type: 'CREATE',
            text:value
        })
        setValue('')
    }
    return (
        <form onSubmit={onSubmit}>
            <input 
                value={value}
                placeholder='입력해 주세요'
                onChange={e => setValue(e.target.value)}
                type="text" />
            <button >등록</button>
        </form>
    )
}

export default TodoForm;