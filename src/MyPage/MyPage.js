import React, { useEffect, useRef } from 'react'
import { Button } from 'semantic-ui-react'
import Typed from 'typed.js'

import './MyPage.css'

const MyPage = React.memo(() => {
    let typed;
    const typedEl = useRef(null)

    useEffect(() => {
        if(typedEl.current) {
            // eslint-disable-next-line
            typed = new Typed("#typedDemo", {
                startDelay: 1000,
                typeSpeed: 70,
                backSpeed: 30,
                backDelay: 70,
                loop: true,
                showCursor: true,
                cursorChar: '_',
                strings:[
                'This page is under construction... ^500',
                'But you can always enjoy ^500',
                '<strong>This animation</strong> ^1000'
                ]
            });
        }
    },[typedEl]);
    
    return(
        <div className="myPageWrapper">
            <span id="typedDemo" className="typedDemo" ref={typedEl}></span>
            <section>
                <Button compact onClick={() => typed.toggle()}>Toggle Animation</Button>
            </section>
        </div>
    )
});

export default MyPage;