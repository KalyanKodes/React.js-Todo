import React from "react";





export default function App(){
    
    
    let [todos , setTodos] = React.useState([
        {
            id : 1,
            todo:"Learn React"
        },
        {
            id : 2,
            todo:"Learn Logical Thinking"
        }
    ])



    let idIncrementer = todos.length + 1;
    function updateTodos(){
        let inputBox = document.getElementById('input');
        setTodos([...todos , { id:idIncrementer , todo:inputBox.value}]);
        inputBox.value = "";
        inputBox.focus();
    }


    function removeTodo(id){
        let updatedList = todos.filter((todo)=>{
            return todo.id !== id
        })
        setTodos(updatedList)
    }

    let test = todos.map((to)=>{
        return (
            <div className="todoListBox" key={to.id}>
                <p>{to.todo} </p>
                <i className="fa-solid fa-xmark" id={to.id} onClick={()=>removeTodo(to.id)} style={{cursor: "pointer"}}></i>
            </div>
        );
    })

    return (
        <React.Fragment>
            <h1>Todo App using React</h1>


            <div className="inputBox">
                <input type="text" id="input" />
                <button onClick={()=>{
                        updateTodos()
                }}>Add Todo</button>
            </div>

            <small>There is a small bug! Try to fix😊</small>
            {test}
        </React.Fragment>
    )
}