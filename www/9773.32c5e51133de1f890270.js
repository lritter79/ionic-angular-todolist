(self.webpackChunkionic_take_2=self.webpackChunkionic_take_2||[]).push([[9773],{9773:(e,t,a)=>{"use strict";a.r(t),a.d(t,{createSwipeBackGesture:()=>i});var n=a(5392),r=a(4366);a(5901);const i=(e,t,a,i,s)=>{const c=e.ownerDocument.defaultView;return(0,r.createGesture)({el:e,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:e=>e.startX<=50&&t(),onStart:a,onMove:e=>{i(e.deltaX/c.innerWidth)},onEnd:e=>{const t=c.innerWidth,a=e.deltaX/t,r=e.velocityX,i=r>=0&&(r>.2||e.deltaX>t/2),o=(i?1-a:a)*t;let u=0;if(o>5){const e=o/Math.abs(r);u=Math.min(e,540)}s(i,a<=0?.01:(0,n.j)(0,a,.9999),u)}})}}}]);