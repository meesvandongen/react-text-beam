import "./index.css";
import {jsxs as $jQy0o$jsxs} from "react/jsx-runtime";
import {useEffect as $jQy0o$useEffect} from "react";




function $4ea93abba43a83c8$export$365e146f65b3d950(props) {
    $jQy0o$useEffect(()=>{
        const mouseMoveCallback = (event)=>{
            let mouse = {
                x: event.clientX,
                y: event.clientY
            };
            for (let span of document.querySelectorAll("span.react-text-beam")){
                // since Math.hypot is slow.. we do it this ugly way
                let sx = span.getBoundingClientRect().left + span.getBoundingClientRect().width / 2;
                let sy = span.getBoundingClientRect().top + document.documentElement.scrollTop + span.getBoundingClientRect().height / 2;
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
        };
        document.addEventListener('mousemove', mouseMoveCallback);
        return ()=>{
            /* cheers Merlin04 */ document.removeEventListener('mousemove', mouseMoveCallback);
        };
    }, []);
    function expan(text) {
        let words = [];
        for (let word of text.split(' '))words.push(word);
        return words;
    }
    // https://stackoverflow.com/a/11410079
    function clamp(current, min, max) {
        return current <= min ? min : current >= max ? max : current;
    }
    return expan(props.children).map((word, index)=>/*#__PURE__*/ $jQy0o$jsxs("span", {
            className: "react-text-beam",
            children: [
                word,
                " "
            ]
        }, index)
    );
}


export {$4ea93abba43a83c8$export$365e146f65b3d950 as TextBeam};
//# sourceMappingURL=module.js.map
