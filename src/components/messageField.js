import * as React from 'react'
import Message from './message';
import '../App.css';

class MessageField extends React.Component{

    state = {
        text: '',
        message: '',
        user: 'me'
    }

     messages = [];


    change = (e) => {
        this.setState({text : e.target.value})
    }

    save = (e) => {
        this.messages.push({text: this.state.text, user: "me"})
        this.setState({message: this.state.text})
        e.preventDefault()
        this.setState({text : ""})
    }

    render  () {
        return <div>
                    {
                        this.messages.map((message, i) => 
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