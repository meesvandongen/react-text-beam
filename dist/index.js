require("./index.css");
var $k52p8$reactjsxruntime = require("react/jsx-runtime");
var $k52p8$react = require("react");

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
var $20d1f80440610c7e$exports = {};

$parcel$defineInteropFlag($20d1f80440610c7e$exports);

$parcel$export($20d1f80440610c7e$exports, "default", function () { return $20d1f80440610c7e$export$2e2bcd8739ae039; });



function $20d1f80440610c7e$var$TextBeam(props) {
    $k52p8$react.useEffect(function() {
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
        return /*#__PURE__*/ $k52p8$reactjsxruntime.jsxs("span", {
            className: "react-text-beam",
            children: [
                word,
                " "
            ]
        }, index);
    });
}
var $20d1f80440610c7e$export$2e2bcd8739ae039 = $20d1f80440610c7e$var$TextBeam;


$parcel$exportWildcard(module.exports, $20d1f80440610c7e$exports);


//# sourceMappingURL=index.js.map
