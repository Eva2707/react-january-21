import * as React from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useState } from 'react';

    function Message(props){

        const [messageBot] = useState('hello, i am a Bot, thanks', 'bot')
        
        return ( <div>
                    <Card className={'card'}>
                        <CardActionArea>
                            <CardContent>
                                <Typography>
                                <span className={'user'}>{props.message.user}</span>
                                <span className={'user-message'}>{props.message.text}</span>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <Card className={'card'}>
                        <CardActionArea>
                            <CardContent>
                            <Typography>
                                {messageBot}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>)}
export default Message;