import React, {useState} from 'react'
import './Card.css'

/* функциональный компонент */
function Card() {

    const [list, setList] = useState([]);
    const [input, setInput] = useState("");

    const addTodo = (todo) => {
        const newTodo = {
            id: Math.random(),
            todo: todo
        };

        // add tech to the list
        setList([...list, newTodo]);


        // clear input box
        setInput("");
    }

    const deleteTodo = (id) => {
        const newList = list.filter((todo) => todo.id !== id);

        setList(newList);
    }


    return (
        <div className='Card'>
            <div className='upper-container'>
                <div className='image-container'>
                    <img src='https://thumbs.dreamstime.com/b/young-happy-man-thumbs-up-sign-casuals-isolated-white-background-38152994.jpg' alt='' height="100px" width="100px"></img>
                </div>
            </div>

            <div className='lower-container'>
                <h3>John Bradley</h3>
                <h4>React Developer</h4>
                <p>Best worker in da world</p>
                <p>Investigated technology:</p>
                <div>
                    <h1>Investigated technology</h1>
                    <ul>
                        {list.map((todo) => (
                            <li key={todo.id}>
                                {todo.todo}
                                <button onClick={() => deleteTodo(todo.id)}>x</button>
                            </li>
                        ))}
                    </ul>
                    <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
                    <button onClick={() => addTodo(input)}>Add tech</button>
                </div>
            </div>
        </div>
    )
}

export default Card