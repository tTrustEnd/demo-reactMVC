
import React, { Component } from 'react'
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Input } from 'reactstrap'

import TodoItem from './components/TodoItem'
import task from './img/task.png'
import checkcomplete from './img/checkcomplete.png'


class App extends Component{
constructor(){
  super();
  this.state = {
    setValue:[],
    todoItems:[],
    count:0,
    countComplete:0
   
  }
  this.inputElement = React.createRef();
  // this.inputElement.current.focus()( phải cho cào trong ComponentDidMount() )
  this.onKeyUp = this.onKeyUp.bind(this);
  this.onChange = this.onChange.bind(this);
  this.completeAll = this.completeAll.bind(this)
  this.oncompleteAll = this.oncompleteAll.bind(this)
 
}



onClick(item){
return (event)=>{
  const {todoItems, countComplete} = this.state;
  const isComplete = item.isComplete;
  const index = todoItems.indexOf(item);
  this.setState({
   
    todoItems:[
      ...todoItems.slice(0, index),
      { ...item,
      isComplete: !isComplete,
        },
      ...todoItems.slice(index+1)
    ]
 
  })
}
}

onKeyUp(event){
const {todoItems, count} = this.state;
  if(event.keyCode===13){

   let text = event.target.value; 
  // if(!text){return text.trim()}
  if(!text.trim()){return}
   else{
   this.setState({
   count:todoItems.length+1,
    setValue:[],
    todoItems:[
      {title:text, isComplete:false}, ...todoItems
    ],
   })
  
  }
}
}
onChange(event){
  const {todoItems, setValue} = this.state;
  this.setState({
    setValue:event.target.value
  })
}

onDelete(item){
  return(event)=>{
    const {todoItems, setValue,count} = this.state;
    const index = todoItems.indexOf(item);
    this.setState({
      count:todoItems.length-1,
      todoItems:[
        ...todoItems.slice(0, index),
        //ko có gì ở đây hết
        ...todoItems.slice(index+1)
      ]
    })
  }
}

oncompleteAll(item){
  
  const {todoItems} = this.state;
  
  for(let i = 0; i < todoItems.length; i++){
    todoItems[i].isComplete=true
   
     this.setState({
       todoItems:[ 
         ...todoItems
       ]
     })
     
   }
  

  
}

completeAll(item){
  console.log('completeAll')
  const {todoItems} = this.state;
  
  for(let i = 0; i < todoItems.length; i++){
   todoItems[i].isComplete= !todoItems[i].isComplete
   
     this.setState({
       todoItems:[ 
         ...todoItems
       ]
     })
   }
}

  render(){
    console.log('render')
  
    const {todoItems, setValue, count,countComplete} = this.state;
    if(todoItems){
      var url = task;
      var url1 =checkcomplete;
    return(
      <div className='App'>
        {/* <input type="text" ref={this.inputElement} ></input> */}
        <div className='Header'>
      <img src={url} onClick={this.completeAll} />
        <img src={url1} onClick={this.oncompleteAll} />
        <Input  type="text" placeholder='Add a new item'  onKeyUp={this.onKeyUp} 
        value={setValue} 
        onChange={this.onChange}
        
        />
        </div>

        { todoItems && todoItems.map((item, index)=>
         <TodoItem key={index} item={item} onClick={this.onClick(item)} onDelete={this.onDelete(item)} />
        )}
          <div className='NumberOfItems'>Number of items: {count} </div>
          <div className='ItemComplete'>ItemComplete: {countComplete}</div>
      </div>
    
    );
  };
}
 


componentWillUnmount(){
  console.log("will")
}
shouldComponentUpdate(){
  return true
}
};


export default App