import {ChatEngine} from 'react-chat-engine';
import LoginForm from './components/LoginForm'
import ChatFeed from './components/ChatFeed';
import './App.css'

const App =()=>{
    if (!localStorage.getItem('username')) return <LoginForm/>
    return (
        <ChatEngine
        height='100vh' 
        projectID='e78b179c-71fb-421d-9b09-3929b19b4cd6'
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps)=> 
            <ChatFeed{...chatAppProps }  />
            
        }
        
        />
        
    );
}

export default App;