import * as React from 'react'

class Message extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            messageBot: 'hello, i am a Bot, thanks',
            bot: 'bot'
        }
    }
    render  () {
        return  <div>
                    <div className='wrap'>
                        <p className='author'>{this.props.message?.user}:</p>
                        <p className='author'>{this.props.message?.text}</p>
                    </div>
                    <div className='wrap'>
                        <p className='message'>{this.state.bot}:</p>
                        <p className='message'>{this.state.messageBot}</p>
                    </div>
                </div>
    }
}
export default Message;