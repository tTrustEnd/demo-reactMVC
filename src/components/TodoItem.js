import React, { Component } from 'react';
import './TodoItem.css';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import check from '../img/check.png';
import checkcomplete from '../img/checkcomplete.png';
import clear from '../img/clear.png'
class TodoItem extends Component{
 render(props){
   const {item, onClick, onDelete} = this.props;
   var url = check;
   var url1 = clear;
   if(item.isComplete){
      var url = checkcomplete;
   }
   return(
      <div className='TodoItem'>
         <img src={url} height={32} width={32} onClick={onClick} />
         <p className={classNames({'TodoItem-complete':item.isComplete})}>
         {item.title} </p>

         <div className='deletes' >
             <img src={url1} onClick={onDelete} />
             </div>
        
      </div>
   );
   
 };

};
TodoItem.propTypes ={
   item:PropTypes.shape({
      title:PropTypes.string,
      isComplete:PropTypes.bool
   }),
   onClick:PropTypes.func
}

export default TodoItem