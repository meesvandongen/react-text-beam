require("./index.css");
var $gXNCa$react = require("react");
var $gXNCa$reactjsxruntime = require("react/jsx-runtime");

function $parcel$exportWildcard(dest, source) {
  Object.keys(source).forEach(function(key) {
    if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function get() {
        return source[key];
      }
    });
  });

  return dest;
}
function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $dfcfddaaf23c5732$exports = {};

$parcel$defineInteropFlag($dfcfddaaf23c5732$exports);

$parcel$export($dfcfddaaf23c5732$exports, "default", () => $dfcfddaaf23c5732$export$2e2bcd8739ae039);



function $dfcfddaaf23c5732$var$TextBeam(props) {
    $gXNCa$react.useEffect(()=>{
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
    return expan(props.children).map((word, index)=>/*#__PURE__*/ $gXNCa$reactjsxruntime.jsxs("span", {
            className: "react-text-beam",
            children: [
                word,
                " "
            ]
        }, index)
    );
}
var $dfcfddaaf23c5732$export$2e2bcd8739ae039 = $dfcfddaaf23c5732$var$TextBeam;


$parcel$exportWildcard(module.exports, $dfcfddaaf23c5732$exports);


//# sourceMappingURL=index.js.map
