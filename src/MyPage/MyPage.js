import React, { useEffect, useRef } from 'react'
import { Button } from 'semantic-ui-react'
import Typed from 'typed.js'
// import Phaser from 'phaser';

import './MyPage.css'

// const config = {
//     type: Phaser.AUTO,
//     width: 800,
//     height: 600,
//     physics: {
//         default: 'arcade',
//         arcade: {
//             gravity: { y: 200 }
//         }
//     },
//     scene: {
//         preload: preload,
//         create: create
//     }
// };

// const game = new Phaser.Game(config);

// function preload ()
// {
//     this.load.setBaseURL('http://labs.phaser.io');

//     this.load.image('sky', 'assets/skies/space3.png');
//     this.load.image('logo', 'assets/sprites/phaser3-logo.png');
//     this.load.image('red', 'assets/particles/red.png');
// }

// function create ()
// {
//     this.add.image(400, 300, 'sky');

//     var particles = this.add.particles('red');

//     var emitter = particles.createEmitter({
//         speed: 100,
//         scale: { start: 1, end: 0 },
//         blendMode: 'ADD'
//     });

//     var logo = this.physics.add.image(400, 100, 'logo');

//     logo.setVelocity(100, 200);
//     logo.setBounce(1, 1);
//     logo.setCollideWorldBounds(true);

//     emitter.startFollow(logo);
// }

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