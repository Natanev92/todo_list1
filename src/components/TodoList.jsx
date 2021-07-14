import React, {useState} from 'react';
import styles from './TodoList.module.css';

const TodoList = _props => {
    const [todos, setTodos] = useState([]);//set useState to an empty array
//set up, state allows us to track our input values
//set todos as an empty array
    const addItem = (event) => { 
        event.preventDefault();// prevents default form behavior from reloading 
        const temp1 = todos.slice();// created temp1 to store temp data?
        temp1.push({//allows us to add a todo to our temp1 array
            description: event.target.item.value,
            isChecked: false 
// once add button is cliked on the form, isChecked changes to true 
//then pushinng the value to the empty array 
        });

        setTodos(temp1);//allows input to the temp 1 array through
        event.target.item.value = ""// targeting the event item in the form value 
        alert("success")//?how can i check it did this Successfully?
    }//function that allows us to set an empty array to accept a todo through event,
    //?how do get the newest inouts in ascending order?

    const changeCheck = (index) => {
        const temp1 = todos.slice();
        temp1[index].isChecked = !temp1[index].isChecked;
        setTodos(temp1);// this allows to check the box without
        // affecting the other todos
        console.log("success")
    }

    const handleDelete = (index) => {
        const temp1 = todos.slice();
        temp1.splice(index, 1);//allows us to splice at specifc index
        setTodos(temp1);//handles the delete function by first slicing the array
    }//then splicing the selected index
    
    return (//form data, with text box and submit button
        <>
            <form onSubmit={addItem} className={styles.form}>
                <input type="text" name="item" id="item" placeholder="Enter a todos"/>
                <button>Add</button> 
            </form>
            <div className={styles.list}>
                <h1>Your Todo List</h1>
                <table cellSpacing="0">
                    <tbody>
                        {
                            todos.map((todos, index) =>
                                <tr key={index} className={todos.isChecked ? styles.checked : styles.unchecked}>
                                    <td><input type="checkbox" checked={todos.isChecked} onChange={() => changeCheck(index)}/></td>
                                    <td>{todos.description}</td>
                                    <td><button onClick={() => handleDelete(index)}>Delete</button></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </>// when cliked, style.checked allows us to cross out todos at the specific index
            // used todos.map as callback with todos and index as perameters
            // handleDelete function allows us to delete a todos at given index
    );
}

export default TodoList;