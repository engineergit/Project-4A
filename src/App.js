import React,{useRef,useEffect} from 'react';
import './App.css';
// import useWebAnimations from '@wellyshen/use-web-animations'
function App() {
  const firstBg = useRef(null);
  const secondBg = useRef(null);
  const firstFg = useRef(null);
  const secondForeground = useRef(null);
  const aliceAnimation = useRef(null);
  
  useEffect(() => {
    var sceneryFrames = [
      { transform: 'translateX(100%)' },
      { transform: 'translateX(-100%)' },
    ];

    var sceneryTimingBackground = {
      duration: 36000,
      iterations: Infinity,
    }

    var sceneryTimingForeground = {
      duration: 12000,
      iterations: Infinity,
    };

    const spriteFrames = [
      { transform: "translateY(0)" },
      { transform: "translateY(-100%)" }
    ]

    const firstBgMovement = firstBg.current.animate(sceneryFrames, sceneryTimingBackground);
    firstBgMovement.currentTime = firstBgMovement.effect.getTiming().duration / 2;

    const secondBgMovement = secondBg.current.animate(sceneryFrames, sceneryTimingBackground);

    const firstFgMovement = firstFg.current.animate(sceneryFrames, sceneryTimingForeground);
    firstFgMovement.currentTime = firstFgMovement.effect.getTiming().duration / 2;

    const secondForegroundMovement = secondForeground.current.animate(sceneryFrames, sceneryTimingForeground);

    const aliceAnimationMovement = aliceAnimation.current.animate(spriteFrames, {
      easing: 'steps(7,end)',
      direction: 'reverse',
      duration: 600,
      playbackRate: 1,
      iterations: Infinity,
    });

    var scenes = [firstFgMovement, secondForegroundMovement, firstBgMovement, secondBgMovement];

    const adjustPlaybackRate = () => {
      if(aliceAnimationMovement.playbackRate < .8) {
        scenes.forEach((animation) => {
          animation.playbackRate = aliceAnimationMovement.playbackRate/2*-1;
        })
      } else if(aliceAnimationMovement.playbackRate > 1.2){
        scenes.forEach((animation) => {
          animation.playbackRate = aliceAnimationMovement.playbackRate/2;
        })
      } else {
        scenes.forEach((animation) => {
          animation.playbackRate = 0;
        })
      }
    }
    setInterval(() => {
      if (aliceAnimationMovement.playbackRate > .4) {
        aliceAnimationMovement.playbackRate *= .9;
      }
      adjustPlaybackRate();
    }, 3000)

    const goFaster =  () => {
      aliceAnimationMovement.playbackRate *= 1.1;
      adjustPlaybackRate();
    }

    window.addEventListener("click", goFaster);
  })
  return (
    <div className="wrapper">
      <div className="sky"></div>
        <div className="earth">
        <div id="red-queen_and_alice">
          <img id="red-queen_and_alice_sprite" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen.png 2x" alt="Alice and the Red Queen running to stay in place." ref={aliceAnimation} />
        </div>
        </div>
        <div className="scenery" id="foreground1" ref={firstFg}>
        <img id="palm3" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3.png 2x" alt=" " />
      </div>
      <div className="scenery" id="foreground2" ref={secondForeground}>
        <img id="bush" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush.png 2x" alt=" " />
        <img id="w_rook_upright" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright.png 2x" alt=" " />
      </div>
      <div className="scenery" id="background1" ref={firstBg}>
        <img id="r_pawn_upright" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright.png 2x" alt=" " />
        <img id="w_rook" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook.png 2x" alt=" " />
        <img id="palm1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1.png 2x" alt=" " />
      </div>
      <div className="scenery" id="background2" ref={secondBg}>
        <img id="r_pawn" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn.png 2x" alt=" " />
        <img id="r_knight" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight.png 2x" alt=" " />
        <img id="palm2" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2.png 2x" alt=" " />
      </div>
      </div>
    
  );
}
export default App;