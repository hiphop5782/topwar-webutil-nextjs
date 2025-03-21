//타이핑 효과를 내는 화면
//- 커스텀 훅인 useInterval을 사용하여 state 변경 처리(setInterval로는 동기 처리가 안됨)                                                                                                      

import { useState, useEffect } from 'react';
import './TypingManager.css';
import useInterval from '@/components/interval/IntervalManager';

const TypingArea = (
    {
        data = ['TypingArea Example'], 
        delay = 0.35,
        cursorDisplay = true,
        flickerDisplay = true,
        applyColor = false,
        listColor = ["#ff4757", "#ff6348", "#ffa502", "#70a1ff", "#1e90ff", "#3742fa", "#2f3542"]
    }
)=>{
    //state
    const [caret, setCaret] = useState(0);
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(1);
    const [text, setText] = useState(data[index]);
    const [result, setResult] = useState('');
    const [colorIndex, setColorIndex] = useState(0);
    const [wait, setWait] = useState(0);
    const [pause, setPause] = useState(false);

    useEffect(()=>setText(data[index]), [index]);

    const playMoment = ()=>{
        if(pause) {
            setWait(wait+1);
        }
        else {
            setCaret(caret+direction);
            setWait(0);
        }
    };

    useEffect(()=>{
        if(wait >= 5) {
            setPause(false);
        }
    }, [wait]);

    useEffect(()=>{
        setResult(text.substring(0, caret));
        if(text.length > 0) {
            if(direction == 1 &&  caret == text.length) {
                setPause(true);
                setDirection(-1);
            }
            else if(direction == -1 && caret == 0) {
                setDirection(1);
            }
        }
    }, [caret]);

    useEffect(()=>{
        if(caret == text.length) {
            setDirection(-1);
        }
        else if(caret == 0) {
            const nextIndex = (index + 1) % data.length;
            setIndex(nextIndex);
        }
    }, [direction]);

    useEffect(()=>{
        setDirection(1);
        if(applyColor) {
            const nextColorIndex = (colorIndex + 1) % listColor.length;
            setColorIndex(nextColorIndex);
        }
    }, [index]);

    //custom interval
    const customInterval = useInterval(()=>playMoment(), delay * 1000);
    useEffect(()=>clearInterval(customInterval));

    if(applyColor) {
        const styleObject = {
            color : listColor[colorIndex]
        }; 
        return (
            <span style={styleObject} className={`typing-area ${cursorDisplay && 'text-cursor'} ${flickerDisplay && 'flicker'}`}>
                {result}
            </span>
        );
    }
    else {
        return (
            <span className={`typing-area ${cursorDisplay && 'text-cursor'} ${flickerDisplay && 'flicker'}`}>
                {result}
            </span>
        );
    }
};

export default TypingArea;