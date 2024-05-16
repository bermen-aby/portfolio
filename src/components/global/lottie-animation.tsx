// import { useEffect } from 'react';
// import lottie, { AnimationItem } from 'lottie-web';
// import gsap from 'gsap';

// interface LottieAnimationProps {
//   path: string;
// }

// const LottieAnimation: React.FC<LottieAnimationProps> = ({ path }) => {
//   useEffect(() => {
//     let animation: AnimationItem | null = null;

//     const playhead = { frame: 0 };
//     const target = '.animation';
//     const speeds: Record<string, string> = {
//       slow: '+=2000',
//       medium: '+=1000',
//       fast: '+=500',
//     };
//     const st = {
//       trigger: '.trigger',
//       end: speeds['medium'] || '+=1000',
//       scrub: 1,
//       markers: false,
//     };

//     animation = lottie.loadAnimation({
//       container: target,
//       renderer: 'svg',
//       loop: false,
//       autoplay: false,
//       path: path,
//       rendererSettings: { preserveAspectRatio: 'xMidYMid slice' },
//     });

//     const createTween = () => {
//       const animationTween = gsap.to(playhead, {
//         frame: animation!.totalFrames - 1,
//         ease: 'none',
//         onUpdate: () => animation!.goToAndStop(playhead.frame, true),
//         scrollTrigger: st,
//       });
//       return () => {
//         animation?.destroy && animation.destroy();
//       };
//     };

//     animation?.addEventListener('DOMLoaded', () => {
//       const ctx = gsap.context && gsap.context();
//       ctx && ctx.add ? ctx.add(createTween) : createTween();
//     });

//     return () => {
//       animation?.destroy && animation.destroy();
//     };
//   }, [path]);

//   return <div className="animation" />;
// };

// export default LottieAnimation;