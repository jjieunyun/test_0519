import React, { Component } from 'react';

class MemoComponent extends Component {
    state = {
        todoList : [
        { id : 1 , text : 'running', isActive: true},
            { id : 2 , text : 'coding', isActive: true},
        ],
        title : ['T','O','D','O',' ',' ','L','I','S','T'],
    }

    inputRef = React.createRef();

    //⭐Todo추가
    handleAddTodo = (event) => {
        event.preventDefault()
            const todoList = this.state.todoList.map(todo => todo);
            const text = this.inputRef.current.value;
            const newTodo = {id : Date.now(), text : text, isActive : true };
            const updateTodo = [...todoList , newTodo]

            this.setState({todoList : updateTodo})
            this.inputRef.current.value = '';
    }

    //⭐Todo삭제
    handleDeleteTodo = (payload) => {
        const id = payload;
        const todoList = this.state.todoList.filter(todo => {
            return todo.id !== id
        })
        this.setState({ todoList })
        
    }

    handleCheckTodo = (payload) => {
        const id = payload;
        this.state.todoList.find(todo => {
            if(todo.id === id) {

                todo.isActive = !todo.isActive
            }
            return console.log(todo.isActive);
        })
        const todoList = this.state.todoList.map(todo => {
            return todo
        });
        this.setState({ todoList })


        // const id = payload;
        // const changeTodo = this.state.todoList.find(todo => {
        //     return todo.id === id
        // })
        // changeTodo.isActive = !changeTodo.isActive

        // // const text = this.state.todoList[id-1].text;
        // // const isActive = !this.state.todoList[id-1].isActive;
        // const todoList = this.state.todoList.filter(todo => {
        //     return todo.id !== id
        // });
        
        

        
    }

    render() {
        return (
            <div>
                <h1 >{this.state.title.map((item,index) => {
                    return <span className='title' key={index}>{item}</span>
                })}</h1>
                <br/><br/>
                <form onSubmit={this.handleAddTodo}>
                    <input
                        type="text"
                        ref={this.inputRef}
                        placeholder='Add your Todo!!'
                    />
                    <button>Add</button>
                </form>

                <ul>
                    {this.state.todoList.map(todo => {
                        return (
                            <div className='todoList' key={todo.id}>
                                    <div onClick={()=> this.handleCheckTodo(todo.id)} 
                                    className={ todo.isActive ? 'todo-checkbox' : 'todo-checkbox-full' }
                                    />
                                <li className={ todo.isActive ? 'todoList-text-before' : 'todoList-text-after' }>{todo.text}</li>
                                <button className='todoList-deleteButton'
                                        onClick={()=>this.handleDeleteTodo(todo.id)}
                                    >x</button>
                            </div>)
                        })
                    }
                </ul>
                
            </div>
        );
    }
}

export default MemoComponent;