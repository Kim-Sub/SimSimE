import React, { useState, useEffect } from "react"
import styled from "styled-components"


// 스타일드 컴포넌트
const StyledTodoList = styled.div`
   font-family: 'Ysabeau SC', sans-serif;
   width: 100%; margin: 0px auto; padding: 20px;
   border-radius: 20px; box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;

   h1 {text-align: center; font-family: 'Ysabeau SC', sans-serif;  }
   div {
      display: flex;
      textarea {
         width: 90%; padding: 10px; border: 1px solid #ccc; border-radius: 5px; margin-right: 10px;
         height: auto;  overflow-x: hidden; overflow-y: scroll;
      }
      .Nosie-button, .Nosie-button:after {
     position: relative; width: 10%; height: auto;
     border: 0; border-radius: 5px; cursor: pointer;
     font-size: 20px; color: #fff; letter-spacing: 3px;
     background: linear-gradient(45deg, transparent 5%, #FF013C 5%);
     box-shadow: 6px 0px 0px #00E6F6;
     outline: transparent; user-select: none; touch-action: manipulation;
   }

   .Nosie-button:after {
     --slice-0: inset(50% 50% 50% 50%);
     --slice-1: inset(80% -6px 0 0);
     --slice-2: inset(50% -6px 30% 0);
     --slice-3: inset(10% -6px 85% 0);
     --slice-4: inset(40% -6px 43% 0);
     --slice-5: inset(80% -6px 5% 0);
   
     content: 'SEND MESSAGE';
     display: block; position: absolute; top: 0; left: 0; right: 0; bottom: 0;
     background: linear-gradient(45deg, transparent 3%, #00E6F6 3%, #00E6F6 5%, #FF013C 5%);
     text-shadow: -3px -3px 0px #F8F005, 3px 3px 0px #00E6F6;
     clip-path: var(--slice-0);
   }

   .Nosie-button:hover:after {
     animation: 1s glitch; animation-timing-function: steps(2, end);
   }

   @keyframes glitch {
     0% {
       clip-path: var(--slice-1);
       transform: translate(-20px, -10px);
     }
     10% {
       clip-path: var(--slice-3);
       transform: translate(10px, 10px);
     }
     20% {
       clip-path: var(--slice-1);
       transform: translate(-10px, 10px);
     }
     30% {
       clip-path: var(--slice-3);
       transform: translate(0px, 5px);
     }
     40% {
       clip-path: var(--slice-2);
       transform: translate(-5px, 0px);
     }
     50% {
       clip-path: var(--slice-3);
       transform: translate(5px, 0px);
     }
     60% {
       clip-path: var(--slice-4);
       transform: translate(5px, 10px);
     }
     70% {
       clip-path: var(--slice-2);
       transform: translate(-10px, 10px);
     }
     80% {
       clip-path: var(--slice-5);
       transform: translate(20px, -10px);
     }
     90% {
       clip-path: var(--slice-1);
       transform: translate(-10px, 0px);
     }
     100% {
       clip-path: var(--slice-1);
       transform: translate(0);
     }
   }

   @media (min-width: 768px) {
     .Nosie-button, .Nosie-button:after {
       width: 200px;
       height: 86px;
       line-height: 88px;
     }
   }
      }
   ul {
      display: flex; flex-direction: column-reverse;
      li {
         display: flex;
         align-items: center; justify-content: space-between;
         border: 1px solid #ccc; border-radius: 5px; margin-top: 5px; padding: 5px 10px;
         span {width: 95%;}
         button {
         width: 5%; padding: 10px 15px; background-color: #54635cde; color: #fff;
         border: none; border-radius: 5px; cursor: pointer;
         }
      }
   }
`

function TodoList() {
   const [tasks, setTasks] = useState([]);
   const [newTask, setNewTask] = useState('');
   const [completedTasks, setCompletedTasks] = useState([]);
   const [passwordPrompted, setPasswordPrompted] = useState(false);
 
   useEffect(() => {
     const savedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
     setTasks(savedTasks);
   }, []);
 
   useEffect(() => {
     localStorage.setItem('tasks', JSON.stringify(tasks));
   }, [tasks]);
 
   useEffect(() => {
     const savedCompletedTasks = JSON.parse(localStorage.getItem('completedTasks') || '[]');
     setCompletedTasks(savedCompletedTasks);
   }, []);
 
   useEffect(() => {
     localStorage.setItem('completedTasks', JSON.stringify(completedTasks));
   }, [completedTasks]);
 

   const addTask = () => {
     if (newTask.trim() === '') return;
     setTasks([...tasks, newTask]);
     setNewTask('');
   };
 
   const promptPasswordAndComplete = (index) => {
     if (!passwordPrompted) {
       const password = prompt('게시물 삭제 비밀번호를 입력하세요:');
       if (password !== '5005') {
         alert('잘못된 비밀번호입니다. 권한이 없습니다.');
         return;
       }
       setPasswordPrompted(true);
     }
 
     const updatedTasks = [...tasks];
     const completedTask = updatedTasks.splice(index, 1)[0];
     setTasks(updatedTasks);
 
     setCompletedTasks([...completedTasks, completedTask]);
   };
 
   const handleKeyPress = (event) => {
     if (event.key === 'Enter') {
       addTask();
     }
   };
 
   return (
     <StyledTodoList id="TodoList">
       <h1>Rolling paper</h1>

       <div>
       <textarea placeholder="메세지를 입력해주세요" value={newTask}
         onChange={(e) => setNewTask(e.target.value)}
         onKeyDown={handleKeyPress} 
         />
         <button onClick={addTask} className="Nosie-button">업로드</button>
       </div>
 
       <ul>
         {tasks.map((task, index) => (
           <li key={index}>
             <span>{task}</span>
             <button onClick={() => promptPasswordAndComplete(index)}>확인완료</button>
           </li>
         ))}
       </ul>
     </StyledTodoList>
   );
 }
 
 export default TodoList;