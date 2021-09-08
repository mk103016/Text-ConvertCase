import React from 'react'

export default function About(props) {
    return (
        <div style={{color: props.mode==='dark'?'white':'black'}}>
            <h2 >About</h2>
            
            This website gives you a way to analyze your text quickly and efficiently. It counts the no. of words and characters. It converts your text into uppercase or lowercase as per your requirment and also removes extra spaces from your text. It also has a DARK MODE to give you the best experience.
            
        </div>
    )
}
