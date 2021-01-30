import * as React from 'react'
import { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


function ChatList2 (){
    const [ChatList2] = useState('I am working from chat list')

    return (
        <>
          <AppBar position="static">
                <Toolbar variant="dense">
                <Typography variant="h6" color="inherit">
                    {ChatList2}
                </Typography>
                </Toolbar>
         </AppBar>
        </>
    )
}

export default ChatList2;