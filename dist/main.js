"use strict";
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = _object_without_properties_loose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = function(target, all) {
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = function(to, from, except, desc) {
    if (from && typeof from === "object" || typeof from === "function") {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            var _loop = function() {
                var key = _step.value;
                if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
                    get: function() {
                        return from[key];
                    },
                    enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                });
            };
            for(var _iterator = __getOwnPropNames(from)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
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
    }
    return to;
};
var __toCommonJS = function(mod) {
    return __copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
};
// src/main.ts
var main_exports = {};
__export(main_exports, {
    Link: function() {
        return Link;
    },
    ScrollPoint: function() {
        return ScrollPoint;
    },
    ScrollTopContextProvider: function() {
        return ScrollTopContextProvider;
    },
    useScrollTo: function() {
        return useScrollTo;
    }
});
module.exports = __toCommonJS(main_exports);
// src/hooks/useScrollTo.ts
var import_react2 = require("react");
// src/contexts/ScrollTop.context.tsx
var import_react = require("react");
var import_jsx_runtime = require("react/jsx-runtime");
var ScrollTopContext = (0, import_react.createContext)(null);
var ScrollTopContextProvider = function(param) {
    var children = param.children, options = param.options;
    var _ref = _sliced_to_array((0, import_react.useState)(null), 2), elementsRefs = _ref[0], setElementsRefs = _ref[1];
    var _ref1 = _sliced_to_array((0, import_react.useState)(null), 2), current = _ref1[0], setCurrent = _ref1[1];
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollTopContext.Provider, {
        value: {
            elementsRefs: elementsRefs,
            setElementsRefs: setElementsRefs,
            current: current,
            setCurrent: setCurrent,
            options: options
        },
        children: children
    });
};
// src/hooks/useScrollTo.ts
var useScrollTo = function(tag) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
        behavior: "smooth",
        offsetX: 0,
        offsetY: 0
    };
    var _ref = (0, import_react2.useContext)(ScrollTopContext), current = _ref.current, elementsRefs = _ref.elementsRefs, contextOptions = _ref.options;
    var scroll = (0, import_react2.useCallback)(function() {
        var offsetX = options.offsetX, offsetY = options.offsetY, defaultOptions = _object_without_properties(options, [
            "offsetX",
            "offsetY"
        ]);
        if (elementsRefs) {
            var _element_current, _element;
            var element = elementsRefs[tag];
            if (offsetX || offsetY) {
                window.scrollTo({
                    left: offsetX || 0,
                    top: offsetY || 0,
                    behavior: defaultOptions.behavior || "smooth"
                });
            }
            (_element = element) === null || _element === void 0 ? void 0 : (_element_current = _element.current) === null || _element_current === void 0 ? void 0 : _element_current.scrollIntoView(contextOptions || defaultOptions);
        }
    }, [
        options,
        elementsRefs,
        tag,
        contextOptions
    ]);
    return {
        scroll: scroll,
        current: current
    };
};
// src/components/Link.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var Link = function(param) {
    var children = param.children, elementTag = param.elementTag, _param_isHasRouted = param.isHasRouted, isHasRouted = _param_isHasRouted === void 0 ? false : _param_isHasRouted;
    var scroll = useScrollTo(elementTag).scroll;
    return isHasRouted ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("a", {
        href: "#".concat(elementTag)
    }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", {
        onClick: scroll,
        children: children
    });
};
// src/components/ScrollPoint.tsx
var import_react3 = require("react");
var import_jsx_runtime3 = require("react/jsx-runtime");
var ScrollPoint = function(_param) {
    var children = _param.children, tag = _param.tag, rest = _object_without_properties(_param, [
        "children",
        "tag"
    ]);
    var setElementsRefs = (0, import_react3.useContext)(ScrollTopContext).setElementsRefs;
    var ref = (0, import_react3.useRef)(null);
    (0, import_react3.useEffect)(function() {
        setElementsRefs(function(prev) {
            return _object_spread_props(_object_spread({}, prev), _define_property({}, tag, ref));
        });
    }, [
        setElementsRefs,
        ref,
        tag
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("section", _object_spread_props(_object_spread({
        id: tag,
        ref: ref
    }, rest), {
        children: children
    }));
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    Link: Link,
    ScrollPoint: ScrollPoint,
    ScrollTopContextProvider: ScrollTopContextProvider,
    useScrollTo: useScrollTo
});
//# sourceMappingURL=main.js.map