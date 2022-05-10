require("./index.css");
var $9aW0N$reactjsxruntime = require("react/jsx-runtime");
var $9aW0N$react = require("react");

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "TextBeam", function () { return $20d1f80440610c7e$export$365e146f65b3d950; });



function $20d1f80440610c7e$export$365e146f65b3d950(props) {
    $9aW0N$react.useEffect(function() {
        var mouseMoveCallback = function(event) {
            var mouse = {
                x: event.clientX,
                y: event.clientY
            };
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = document.querySelectorAll("span.react-text-beam")[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var span = _step.value;
                    // since Math.hypot is slow.. we do it this ugly way
                    var sx = span.getBoundingClientRect().left + span.getBoundingClientRect().width / 2;
                    var sy = span.getBoundingClientRect().top + document.documentElement.scrollTop + span.getBoundingClientRect().height / 2;
                    var a = mouse.x - sx;
                    var b = mouse.y - sy;
                    var distance = Math.sqrt(a * a + b * b);
                    distance = distance * 2; // lol, i know.
                    var topweight = 800;
                    distance = clamp(distance, 1, topweight);
                    var scale = topweight / document.documentElement.clientWidth * 2;
                    var calcedweight = topweight - Math.trunc(Math.abs(distance * scale));
                    span.style["font-variation-settings"] = "'wght' " + calcedweight;
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                        _iterator.return();
                    }
                } finally{
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        };
        document.addEventListener('mousemove', mouseMoveCallback);
        return function() {
            /* cheers Merlin04 */ document.removeEventListener('mousemove', mouseMoveCallback);
        };
    }, []);
    function expan(text) {
        var words = [];
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = text.split(' ')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var word = _step.value;
                words.push(word);
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
        return words;
    }
    // https://stackoverflow.com/a/11410079
    function clamp(current, min, max) {
        return current <= min ? min : current >= max ? max : current;
    }
    return expan(props.children).map(function(word, index) {
        return /*#__PURE__*/ $9aW0N$reactjsxruntime.jsxs("span", {
            className: "react-text-beam",
            children: [
                word,
                " "
            ]
        }, index);
    });
}


//# sourceMappingURL=index.js.map
