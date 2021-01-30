import * as React from 'react'
import Message from './message';
import '../App.css';
import Button from '@material-ui/core/Button';
import { FormGroup } from '@material-ui/core';

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
                    <FormGroup onSubmit={this.save}>
                        <input type="text" name="name" value={this.state.text} onChange={this.change} placeholder={"Введите сообщение"}/>
                            <Button
                                className={'btn'}
                                variant="contained"
                                color="primary"
                                onClick={this.save}
                                type={'submit'}
                            >Send
                            </Button>
                    </FormGroup>
                </div>
            }
}
export default MessageField; 