import { useContext, useState, createContext, ReactElement} from 'react'


const contextApi =  createContext(null);

export const useTasks = () => useContext(contextApi)

export default function TaskContextProvider(props) {

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [tasks, setTasks] = useState(tasksData);


    return (
        <contextApi.Provider value={{loading, message, tasks}}>
            {props.children}
        </contextApi.Provider>
    )
}


const tasksData = [
    {
      _id:'455',
      description:'hi can you plise do this work as soon as you can I really want to try do this for tody only mabe tommotor i will be busy',
      title:'you'
    },
    {
      _id:'458',
      description:'hi',
      title:'you'
    },
    {
      _id:'45ds',
      description:'hi',
      title:'you'
    },
  ]