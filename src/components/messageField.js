import * as React from 'react'
import Message from './message';
import '../App.css';

class MessageField extends React.Component{

    state = {
        text: '',
        messages: []
    }


    change = (e) => {
        this.setState({text : e.target.value})
    }

    save = (e) => {
        this.state.messages.push({text: this.state.text, user: "me"})
        e.preventDefault()
        this.setState({text : ""})
    }

    shouldComponentUpdate (nextState){
        if (this.state.text !== nextState.text){
            return true
        } 
        return false
    }
    
    render  () {
        return <div>
                    {
                        this.state.messages.map((message, i) => 
                            <Message key={i} message={message}></Message>
                        )
                    }
                    <form onSubmit={this.save}>
                        <input type="text" name="name" value={this.state.text} onChange={this.change}/>
                        <input className='bot-message'type="submit" value="отправить"/>
                    </form>
                </div>
            }
}
export default MessageField;  