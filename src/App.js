
import TaskItem from './components/TaskItem';
import './App.css';



function App() {

  const items = [
  {
    id: "i1",
    title : "Blockchain Course",
    priority : 9,
    date : new Date(2021, 2, 19),
  },
  {
    id: "i2",
    title : "Javascript Course",
    priority : 8,
    date : new Date(2021, 2, 19),
  },
  {
    id: "i3",
    title : "Truffle Course",
    priority : 7,
    date : new Date(2021, 2, 19),
  },
  {
    id: "i4",
    title : "Ganache Course",
    priority : 6,
    date : new Date(2021, 2, 19),
  },
  {
    id: "i5",
    title : "React Course",
    priority : 5,
    date : new Date(2021, 2, 19),
  },
  
  ];


  const obj = {
    date: new Date(2021, 29, 4),
    title : "Solidity Course",
    priority: 5,
  }
  return (
    <div className="App">
     <TaskItem 
      date = {items[0].date}
      title = {items[0].title}
      priority = {items[0].priority}
      ></TaskItem>
      <TaskItem 
      date = {items[1].date}
      title = {items[1].title}
      priority = {items[1].priority}
      ></TaskItem>
      <TaskItem 
      date = {items[2].date}
      title = {items[2].title}
      priority = {items[2].priority}
      ></TaskItem>
      <TaskItem 
      date = {items[3].date}
      title = {items[3].title}
      priority = {items[3].priority}
      ></TaskItem>
      <TaskItem 
      date = {items[4].date}
      title = {items[4].title}
      priority = {items[4].priority}
      ></TaskItem>
     
    </div>
  );
}

export default App;
