import './index.css';
import { useEffect } from 'react';
function TextBeam(props) {
    useEffect(() => {
        const mouseMoveCallback = (event) => {
            let mouse = { x: event.clientX, y: event.clientY };
            for (let span of document.querySelectorAll("span.react-text-beam")) {
                // since Math.hypot is slow.. we do it this ugly way
                let sx = span.getBoundingClientRect().left + (span.getBoundingClientRect().width / 2);
                let sy = span.getBoundingClientRect().top + document.documentElement.scrollTop + (span.getBoundingClientRect().height / 2);
                let a = mouse.x - sx;
                let b = mouse.y - sy;
                let distance = Math.sqrt(a * a + b * b);
                distance = distance * 2; // lol, i know.

                let topweight = 800;
                distance = clamp(distance, 1, topweight);

                let scale = topweight / document.documentElement.clientWidth * 2;
                let calcedweight = topweight - Math.trunc(Math.abs(distance * scale));

                span.style["font-variation-settings"] = "'wght' " + calcedweight;
            }
        }
        document.addEventListener('mousemove', mouseMoveCallback);
        return () => {
            /* cheers Merlin04 */
            document.removeEventListener('mousemove', mouseMoveCallback);
        };
    }, []);
    function expan(text) {
        let words = [];
        for (let word of text.split(' ')) {
            words.push(word);
        }
        return words;
    }
    // https://stackoverflow.com/a/11410079
    function clamp(current, min, max) {
        return current <= min ? min : current >= max ? max : current;
    }
    return (
        expan(props.children).map((word, index) =>
            <span key={index} className="react-text-beam">{word} </span>
        )
    );
}
export default TextBeam;