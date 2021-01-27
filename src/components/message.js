import * as React from 'react'

class Message extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            message: this.props.message,
            messageBot: 'hello, i am a Bot, thanks',
            bot: 'bot'
        }
    }

    shouldComponentUpdate(){
        return true
    }

    render  () {
        return  <div>
                    <div className='wrap'>
                        <p className='author'>{this.state.message?.user}:</p>
                        <p className='author'>{this.state.message?.text}</p>
                    </div>
                    <div className='wrap'>
                        <p className='message'>{this.state.bot}:</p>
                        <p className='message'>{this.state.messageBot}</p>
                    </div>
                </div>
    }
}
export default Message;