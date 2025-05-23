import {
  require_react
} from "./chunk-O6O4HUXW.js";
import {
  __commonJS
} from "./chunk-LQ2VYIYD.js";

// node_modules/react-responsive/dist/react-responsive.js
var require_react_responsive = __commonJS({
  "node_modules/react-responsive/dist/react-responsive.js"(exports, module) {
    (function webpackUniversalModuleDefinition(root, factory) {
      if (typeof exports === "object" && typeof module === "object")
        module.exports = factory(require_react());
      else if (typeof define === "function" && define.amd)
        define(["react"], factory);
      else if (typeof exports === "object")
        exports["MediaQuery"] = factory(require_react());
      else
        root["MediaQuery"] = factory(root["React"]);
    })(exports, (__WEBPACK_EXTERNAL_MODULE_react__) => {
      return (
        /******/
        (() => {
          var __webpack_modules__ = {
            /***/
            "./node_modules/css-mediaquery/index.js": (
              /*!**********************************************!*\
                !*** ./node_modules/css-mediaquery/index.js ***!
                \**********************************************/
              /***/
              (__unused_webpack_module, exports2) => {
                "use strict";
                exports2.match = matchQuery;
                exports2.parse = parseQuery;
                var RE_MEDIA_QUERY = /(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i, RE_MQ_EXPRESSION = /\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/, RE_MQ_FEATURE = /^(?:(min|max)-)?(.+)/, RE_LENGTH_UNIT = /(em|rem|px|cm|mm|in|pt|pc)?$/, RE_RESOLUTION_UNIT = /(dpi|dpcm|dppx)?$/;
                function matchQuery(mediaQuery, values) {
                  return parseQuery(mediaQuery).some(function(query) {
                    var inverse = query.inverse;
                    var typeMatch = query.type === "all" || values.type === query.type;
                    if (typeMatch && inverse || !(typeMatch || inverse)) {
                      return false;
                    }
                    var expressionsMatch = query.expressions.every(function(expression) {
                      var feature = expression.feature, modifier = expression.modifier, expValue = expression.value, value = values[feature];
                      if (!value) {
                        return false;
                      }
                      switch (feature) {
                        case "orientation":
                        case "scan":
                          return value.toLowerCase() === expValue.toLowerCase();
                        case "width":
                        case "height":
                        case "device-width":
                        case "device-height":
                          expValue = toPx(expValue);
                          value = toPx(value);
                          break;
                        case "resolution":
                          expValue = toDpi(expValue);
                          value = toDpi(value);
                          break;
                        case "aspect-ratio":
                        case "device-aspect-ratio":
                        case /* Deprecated */
                        "device-pixel-ratio":
                          expValue = toDecimal(expValue);
                          value = toDecimal(value);
                          break;
                        case "grid":
                        case "color":
                        case "color-index":
                        case "monochrome":
                          expValue = parseInt(expValue, 10) || 1;
                          value = parseInt(value, 10) || 0;
                          break;
                      }
                      switch (modifier) {
                        case "min":
                          return value >= expValue;
                        case "max":
                          return value <= expValue;
                        default:
                          return value === expValue;
                      }
                    });
                    return expressionsMatch && !inverse || !expressionsMatch && inverse;
                  });
                }
                function parseQuery(mediaQuery) {
                  return mediaQuery.split(",").map(function(query) {
                    query = query.trim();
                    var captures = query.match(RE_MEDIA_QUERY), modifier = captures[1], type = captures[2], expressions = captures[3] || "", parsed = {};
                    parsed.inverse = !!modifier && modifier.toLowerCase() === "not";
                    parsed.type = type ? type.toLowerCase() : "all";
                    expressions = expressions.match(/\([^\)]+\)/g) || [];
                    parsed.expressions = expressions.map(function(expression) {
                      var captures2 = expression.match(RE_MQ_EXPRESSION), feature = captures2[1].toLowerCase().match(RE_MQ_FEATURE);
                      return {
                        modifier: feature[1],
                        feature: feature[2],
                        value: captures2[2]
                      };
                    });
                    return parsed;
                  });
                }
                function toDecimal(ratio) {
                  var decimal = Number(ratio), numbers;
                  if (!decimal) {
                    numbers = ratio.match(/^(\d+)\s*\/\s*(\d+)$/);
                    decimal = numbers[1] / numbers[2];
                  }
                  return decimal;
                }
                function toDpi(resolution) {
                  var value = parseFloat(resolution), units = String(resolution).match(RE_RESOLUTION_UNIT)[1];
                  switch (units) {
                    case "dpcm":
                      return value / 2.54;
                    case "dppx":
                      return value * 96;
                    default:
                      return value;
                  }
                }
                function toPx(length) {
                  var value = parseFloat(length), units = String(length).match(RE_LENGTH_UNIT)[1];
                  switch (units) {
                    case "em":
                      return value * 16;
                    case "rem":
                      return value * 16;
                    case "cm":
                      return value * 96 / 2.54;
                    case "mm":
                      return value * 96 / 2.54 / 10;
                    case "in":
                      return value * 96;
                    case "pt":
                      return value * 72;
                    case "pc":
                      return value * 72 / 12;
                    default:
                      return value;
                  }
                }
              }
            ),
            /***/
            "./node_modules/hyphenate-style-name/index.js": (
              /*!****************************************************!*\
                !*** ./node_modules/hyphenate-style-name/index.js ***!
                \****************************************************/
              /***/
              (__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
                "use strict";
                __webpack_require__2.r(__webpack_exports__2);
                __webpack_require__2.d(__webpack_exports__2, {
                  /* harmony export */
                  "default": () => __WEBPACK_DEFAULT_EXPORT__
                  /* harmony export */
                });
                var uppercasePattern = /[A-Z]/g;
                var msPattern = /^ms-/;
                var cache = {};
                function toHyphenLower(match) {
                  return "-" + match.toLowerCase();
                }
                function hyphenateStyleName(name) {
                  if (cache.hasOwnProperty(name)) {
                    return cache[name];
                  }
                  var hName = name.replace(uppercasePattern, toHyphenLower);
                  return cache[name] = msPattern.test(hName) ? "-" + hName : hName;
                }
                const __WEBPACK_DEFAULT_EXPORT__ = hyphenateStyleName;
              }
            ),
            /***/
            "./node_modules/matchmediaquery/index.js": (
              /*!***********************************************!*\
                !*** ./node_modules/matchmediaquery/index.js ***!
                \***********************************************/
              /***/
              (module2, __unused_webpack_exports, __webpack_require__2) => {
                "use strict";
                var staticMatch = __webpack_require__2(
                  /*! css-mediaquery */
                  "./node_modules/css-mediaquery/index.js"
                ).match;
                var dynamicMatch = typeof window !== "undefined" ? window.matchMedia : null;
                function Mql(query, values, forceStatic) {
                  var self = this;
                  if (dynamicMatch && !forceStatic) {
                    var mql = dynamicMatch.call(window, query);
                    this.matches = mql.matches;
                    this.media = mql.media;
                    mql.addListener(update);
                  } else {
                    this.matches = staticMatch(query, values);
                    this.media = query;
                  }
                  this.addListener = addListener;
                  this.removeListener = removeListener;
                  this.dispose = dispose;
                  function addListener(listener) {
                    if (mql) {
                      mql.addListener(listener);
                    }
                  }
                  function removeListener(listener) {
                    if (mql) {
                      mql.removeListener(listener);
                    }
                  }
                  function update(evt) {
                    self.matches = evt.matches;
                    self.media = evt.media;
                  }
                  function dispose() {
                    if (mql) {
                      mql.removeListener(update);
                    }
                  }
                }
                function matchMedia(query, values, forceStatic) {
                  return new Mql(query, values, forceStatic);
                }
                module2.exports = matchMedia;
              }
            ),
            /***/
            "./node_modules/object-assign/index.js": (
              /*!*********************************************!*\
                !*** ./node_modules/object-assign/index.js ***!
                \*********************************************/
              /***/
              (module2) => {
                "use strict";
                var getOwnPropertySymbols = Object.getOwnPropertySymbols;
                var hasOwnProperty = Object.prototype.hasOwnProperty;
                var propIsEnumerable = Object.prototype.propertyIsEnumerable;
                function toObject(val) {
                  if (val === null || val === void 0) {
                    throw new TypeError("Object.assign cannot be called with null or undefined");
                  }
                  return Object(val);
                }
                function shouldUseNative() {
                  try {
                    if (!Object.assign) {
                      return false;
                    }
                    var test1 = new String("abc");
                    test1[5] = "de";
                    if (Object.getOwnPropertyNames(test1)[0] === "5") {
                      return false;
                    }
                    var test2 = {};
                    for (var i = 0; i < 10; i++) {
                      test2["_" + String.fromCharCode(i)] = i;
                    }
                    var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
                      return test2[n];
                    });
                    if (order2.join("") !== "0123456789") {
                      return false;
                    }
                    var test3 = {};
                    "abcdefghijklmnopqrst".split("").forEach(function(letter) {
                      test3[letter] = letter;
                    });
                    if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
                      return false;
                    }
                    return true;
                  } catch (err) {
                    return false;
                  }
                }
                module2.exports = shouldUseNative() ? Object.assign : function(target, source) {
                  var from;
                  var to = toObject(target);
                  var symbols;
                  for (var s = 1; s < arguments.length; s++) {
                    from = Object(arguments[s]);
                    for (var key in from) {
                      if (hasOwnProperty.call(from, key)) {
                        to[key] = from[key];
                      }
                    }
                    if (getOwnPropertySymbols) {
                      symbols = getOwnPropertySymbols(from);
                      for (var i = 0; i < symbols.length; i++) {
                        if (propIsEnumerable.call(from, symbols[i])) {
                          to[symbols[i]] = from[symbols[i]];
                        }
                      }
                    }
                  }
                  return to;
                };
              }
            ),
            /***/
            "./node_modules/prop-types/checkPropTypes.js": (
              /*!***************************************************!*\
                !*** ./node_modules/prop-types/checkPropTypes.js ***!
                \***************************************************/
              /***/
              (module2, __unused_webpack_exports, __webpack_require__2) => {
                "use strict";
                var printWarning = function() {
                };
                if (true) {
                  var ReactPropTypesSecret = __webpack_require__2(
                    /*! ./lib/ReactPropTypesSecret */
                    "./node_modules/prop-types/lib/ReactPropTypesSecret.js"
                  );
                  var loggedTypeFailures = {};
                  var has = __webpack_require__2(
                    /*! ./lib/has */
                    "./node_modules/prop-types/lib/has.js"
                  );
                  printWarning = function(text) {
                    var message = "Warning: " + text;
                    if (typeof console !== "undefined") {
                      console.error(message);
                    }
                    try {
                      throw new Error(message);
                    } catch (x) {
                    }
                  };
                }
                function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
                  if (true) {
                    for (var typeSpecName in typeSpecs) {
                      if (has(typeSpecs, typeSpecName)) {
                        var error;
                        try {
                          if (typeof typeSpecs[typeSpecName] !== "function") {
                            var err = Error(
                              (componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                            );
                            err.name = "Invariant Violation";
                            throw err;
                          }
                          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
                        } catch (ex) {
                          error = ex;
                        }
                        if (error && !(error instanceof Error)) {
                          printWarning(
                            (componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
                          );
                        }
                        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
                          loggedTypeFailures[error.message] = true;
                          var stack = getStack ? getStack() : "";
                          printWarning(
                            "Failed " + location + " type: " + error.message + (stack != null ? stack : "")
                          );
                        }
                      }
                    }
                  }
                }
                checkPropTypes.resetWarningCache = function() {
                  if (true) {
                    loggedTypeFailures = {};
                  }
                };
                module2.exports = checkPropTypes;
              }
            ),
            /***/
            "./node_modules/prop-types/factoryWithTypeCheckers.js": (
              /*!************************************************************!*\
                !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
                \************************************************************/
              /***/
              (module2, __unused_webpack_exports, __webpack_require__2) => {
                "use strict";
                var ReactIs = __webpack_require__2(
                  /*! react-is */
                  "./node_modules/react-is/index.js"
                );
                var assign = __webpack_require__2(
                  /*! object-assign */
                  "./node_modules/object-assign/index.js"
                );
                var ReactPropTypesSecret = __webpack_require__2(
                  /*! ./lib/ReactPropTypesSecret */
                  "./node_modules/prop-types/lib/ReactPropTypesSecret.js"
                );
                var has = __webpack_require__2(
                  /*! ./lib/has */
                  "./node_modules/prop-types/lib/has.js"
                );
                var checkPropTypes = __webpack_require__2(
                  /*! ./checkPropTypes */
                  "./node_modules/prop-types/checkPropTypes.js"
                );
                var printWarning = function() {
                };
                if (true) {
                  printWarning = function(text) {
                    var message = "Warning: " + text;
                    if (typeof console !== "undefined") {
                      console.error(message);
                    }
                    try {
                      throw new Error(message);
                    } catch (x) {
                    }
                  };
                }
                function emptyFunctionThatReturnsNull() {
                  return null;
                }
                module2.exports = function(isValidElement, throwOnDirectAccess) {
                  var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
                  var FAUX_ITERATOR_SYMBOL = "@@iterator";
                  function getIteratorFn(maybeIterable) {
                    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
                    if (typeof iteratorFn === "function") {
                      return iteratorFn;
                    }
                  }
                  var ANONYMOUS = "<<anonymous>>";
                  var ReactPropTypes = {
                    array: createPrimitiveTypeChecker("array"),
                    bigint: createPrimitiveTypeChecker("bigint"),
                    bool: createPrimitiveTypeChecker("boolean"),
                    func: createPrimitiveTypeChecker("function"),
                    number: createPrimitiveTypeChecker("number"),
                    object: createPrimitiveTypeChecker("object"),
                    string: createPrimitiveTypeChecker("string"),
                    symbol: createPrimitiveTypeChecker("symbol"),
                    any: createAnyTypeChecker(),
                    arrayOf: createArrayOfTypeChecker,
                    element: createElementTypeChecker(),
                    elementType: createElementTypeTypeChecker(),
                    instanceOf: createInstanceTypeChecker,
                    node: createNodeChecker(),
                    objectOf: createObjectOfTypeChecker,
                    oneOf: createEnumTypeChecker,
                    oneOfType: createUnionTypeChecker,
                    shape: createShapeTypeChecker,
                    exact: createStrictShapeTypeChecker
                  };
                  function is(x, y) {
                    if (x === y) {
                      return x !== 0 || 1 / x === 1 / y;
                    } else {
                      return x !== x && y !== y;
                    }
                  }
                  function PropTypeError(message, data) {
                    this.message = message;
                    this.data = data && typeof data === "object" ? data : {};
                    this.stack = "";
                  }
                  PropTypeError.prototype = Error.prototype;
                  function createChainableTypeChecker(validate) {
                    if (true) {
                      var manualPropTypeCallCache = {};
                      var manualPropTypeWarningCount = 0;
                    }
                    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
                      componentName = componentName || ANONYMOUS;
                      propFullName = propFullName || propName;
                      if (secret !== ReactPropTypesSecret) {
                        if (throwOnDirectAccess) {
                          var err = new Error(
                            "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
                          );
                          err.name = "Invariant Violation";
                          throw err;
                        } else if (typeof console !== "undefined") {
                          var cacheKey = componentName + ":" + propName;
                          if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
                          manualPropTypeWarningCount < 3) {
                            printWarning(
                              "You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
                            );
                            manualPropTypeCallCache[cacheKey] = true;
                            manualPropTypeWarningCount++;
                          }
                        }
                      }
                      if (props[propName] == null) {
                        if (isRequired) {
                          if (props[propName] === null) {
                            return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
                          }
                          return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
                        }
                        return null;
                      } else {
                        return validate(props, propName, componentName, location, propFullName);
                      }
                    }
                    var chainedCheckType = checkType.bind(null, false);
                    chainedCheckType.isRequired = checkType.bind(null, true);
                    return chainedCheckType;
                  }
                  function createPrimitiveTypeChecker(expectedType) {
                    function validate(props, propName, componentName, location, propFullName, secret) {
                      var propValue = props[propName];
                      var propType = getPropType(propValue);
                      if (propType !== expectedType) {
                        var preciseType = getPreciseType(propValue);
                        return new PropTypeError(
                          "Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."),
                          { expectedType }
                        );
                      }
                      return null;
                    }
                    return createChainableTypeChecker(validate);
                  }
                  function createAnyTypeChecker() {
                    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
                  }
                  function createArrayOfTypeChecker(typeChecker) {
                    function validate(props, propName, componentName, location, propFullName) {
                      if (typeof typeChecker !== "function") {
                        return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
                      }
                      var propValue = props[propName];
                      if (!Array.isArray(propValue)) {
                        var propType = getPropType(propValue);
                        return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
                      }
                      for (var i = 0; i < propValue.length; i++) {
                        var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
                        if (error instanceof Error) {
                          return error;
                        }
                      }
                      return null;
                    }
                    return createChainableTypeChecker(validate);
                  }
                  function createElementTypeChecker() {
                    function validate(props, propName, componentName, location, propFullName) {
                      var propValue = props[propName];
                      if (!isValidElement(propValue)) {
                        var propType = getPropType(propValue);
                        return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
                      }
                      return null;
                    }
                    return createChainableTypeChecker(validate);
                  }
                  function createElementTypeTypeChecker() {
                    function validate(props, propName, componentName, location, propFullName) {
                      var propValue = props[propName];
                      if (!ReactIs.isValidElementType(propValue)) {
                        var propType = getPropType(propValue);
                        return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
                      }
                      return null;
                    }
                    return createChainableTypeChecker(validate);
                  }
                  function createInstanceTypeChecker(expectedClass) {
                    function validate(props, propName, componentName, location, propFullName) {
                      if (!(props[propName] instanceof expectedClass)) {
                        var expectedClassName = expectedClass.name || ANONYMOUS;
                        var actualClassName = getClassName(props[propName]);
                        return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
                      }
                      return null;
                    }
                    return createChainableTypeChecker(validate);
                  }
                  function createEnumTypeChecker(expectedValues) {
                    if (!Array.isArray(expectedValues)) {
                      if (true) {
                        if (arguments.length > 1) {
                          printWarning(
                            "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
                          );
                        } else {
                          printWarning("Invalid argument supplied to oneOf, expected an array.");
                        }
                      }
                      return emptyFunctionThatReturnsNull;
                    }
                    function validate(props, propName, componentName, location, propFullName) {
                      var propValue = props[propName];
                      for (var i = 0; i < expectedValues.length; i++) {
                        if (is(propValue, expectedValues[i])) {
                          return null;
                        }
                      }
                      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
                        var type = getPreciseType(value);
                        if (type === "symbol") {
                          return String(value);
                        }
                        return value;
                      });
                      return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
                    }
                    return createChainableTypeChecker(validate);
                  }
                  function createObjectOfTypeChecker(typeChecker) {
                    function validate(props, propName, componentName, location, propFullName) {
                      if (typeof typeChecker !== "function") {
                        return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
                      }
                      var propValue = props[propName];
                      var propType = getPropType(propValue);
                      if (propType !== "object") {
                        return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
                      }
                      for (var key in propValue) {
                        if (has(propValue, key)) {
                          var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
                          if (error instanceof Error) {
                            return error;
                          }
                        }
                      }
                      return null;
                    }
                    return createChainableTypeChecker(validate);
                  }
                  function createUnionTypeChecker(arrayOfTypeCheckers) {
                    if (!Array.isArray(arrayOfTypeCheckers)) {
                      true ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : 0;
                      return emptyFunctionThatReturnsNull;
                    }
                    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
                      var checker = arrayOfTypeCheckers[i];
                      if (typeof checker !== "function") {
                        printWarning(
                          "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + "."
                        );
                        return emptyFunctionThatReturnsNull;
                      }
                    }
                    function validate(props, propName, componentName, location, propFullName) {
                      var expectedTypes = [];
                      for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
                        var checker2 = arrayOfTypeCheckers[i2];
                        var checkerResult = checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
                        if (checkerResult == null) {
                          return null;
                        }
                        if (checkerResult.data && has(checkerResult.data, "expectedType")) {
                          expectedTypes.push(checkerResult.data.expectedType);
                        }
                      }
                      var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
                      return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
                    }
                    return createChainableTypeChecker(validate);
                  }
                  function createNodeChecker() {
                    function validate(props, propName, componentName, location, propFullName) {
                      if (!isNode(props[propName])) {
                        return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
                      }
                      return null;
                    }
                    return createChainableTypeChecker(validate);
                  }
                  function invalidValidatorError(componentName, location, propFullName, key, type) {
                    return new PropTypeError(
                      (componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`."
                    );
                  }
                  function createShapeTypeChecker(shapeTypes) {
                    function validate(props, propName, componentName, location, propFullName) {
                      var propValue = props[propName];
                      var propType = getPropType(propValue);
                      if (propType !== "object") {
                        return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
                      }
                      for (var key in shapeTypes) {
                        var checker = shapeTypes[key];
                        if (typeof checker !== "function") {
                          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
                        }
                        var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
                        if (error) {
                          return error;
                        }
                      }
                      return null;
                    }
                    return createChainableTypeChecker(validate);
                  }
                  function createStrictShapeTypeChecker(shapeTypes) {
                    function validate(props, propName, componentName, location, propFullName) {
                      var propValue = props[propName];
                      var propType = getPropType(propValue);
                      if (propType !== "object") {
                        return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
                      }
                      var allKeys = assign({}, props[propName], shapeTypes);
                      for (var key in allKeys) {
                        var checker = shapeTypes[key];
                        if (has(shapeTypes, key) && typeof checker !== "function") {
                          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
                        }
                        if (!checker) {
                          return new PropTypeError(
                            "Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  ")
                          );
                        }
                        var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
                        if (error) {
                          return error;
                        }
                      }
                      return null;
                    }
                    return createChainableTypeChecker(validate);
                  }
                  function isNode(propValue) {
                    switch (typeof propValue) {
                      case "number":
                      case "string":
                      case "undefined":
                        return true;
                      case "boolean":
                        return !propValue;
                      case "object":
                        if (Array.isArray(propValue)) {
                          return propValue.every(isNode);
                        }
                        if (propValue === null || isValidElement(propValue)) {
                          return true;
                        }
                        var iteratorFn = getIteratorFn(propValue);
                        if (iteratorFn) {
                          var iterator = iteratorFn.call(propValue);
                          var step;
                          if (iteratorFn !== propValue.entries) {
                            while (!(step = iterator.next()).done) {
                              if (!isNode(step.value)) {
                                return false;
                              }
                            }
                          } else {
                            while (!(step = iterator.next()).done) {
                              var entry = step.value;
                              if (entry) {
                                if (!isNode(entry[1])) {
                                  return false;
                                }
                              }
                            }
                          }
                        } else {
                          return false;
                        }
                        return true;
                      default:
                        return false;
                    }
                  }
                  function isSymbol(propType, propValue) {
                    if (propType === "symbol") {
                      return true;
                    }
                    if (!propValue) {
                      return false;
                    }
                    if (propValue["@@toStringTag"] === "Symbol") {
                      return true;
                    }
                    if (typeof Symbol === "function" && propValue instanceof Symbol) {
                      return true;
                    }
                    return false;
                  }
                  function getPropType(propValue) {
                    var propType = typeof propValue;
                    if (Array.isArray(propValue)) {
                      return "array";
                    }
                    if (propValue instanceof RegExp) {
                      return "object";
                    }
                    if (isSymbol(propType, propValue)) {
                      return "symbol";
                    }
                    return propType;
                  }
                  function getPreciseType(propValue) {
                    if (typeof propValue === "undefined" || propValue === null) {
                      return "" + propValue;
                    }
                    var propType = getPropType(propValue);
                    if (propType === "object") {
                      if (propValue instanceof Date) {
                        return "date";
                      } else if (propValue instanceof RegExp) {
                        return "regexp";
                      }
                    }
                    return propType;
                  }
                  function getPostfixForTypeWarning(value) {
                    var type = getPreciseType(value);
                    switch (type) {
                      case "array":
                      case "object":
                        return "an " + type;
                      case "boolean":
                      case "date":
                      case "regexp":
                        return "a " + type;
                      default:
                        return type;
                    }
                  }
                  function getClassName(propValue) {
                    if (!propValue.constructor || !propValue.constructor.name) {
                      return ANONYMOUS;
                    }
                    return propValue.constructor.name;
                  }
                  ReactPropTypes.checkPropTypes = checkPropTypes;
                  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
                  ReactPropTypes.PropTypes = ReactPropTypes;
                  return ReactPropTypes;
                };
              }
            ),
            /***/
            "./node_modules/prop-types/index.js": (
              /*!******************************************!*\
                !*** ./node_modules/prop-types/index.js ***!
                \******************************************/
              /***/
              (module2, __unused_webpack_exports, __webpack_require__2) => {
                if (true) {
                  var ReactIs = __webpack_require__2(
                    /*! react-is */
                    "./node_modules/react-is/index.js"
                  );
                  var throwOnDirectAccess = true;
                  module2.exports = __webpack_require__2(
                    /*! ./factoryWithTypeCheckers */
                    "./node_modules/prop-types/factoryWithTypeCheckers.js"
                  )(ReactIs.isElement, throwOnDirectAccess);
                } else {
                }
              }
            ),
            /***/
            "./node_modules/prop-types/lib/ReactPropTypesSecret.js": (
              /*!*************************************************************!*\
                !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
                \*************************************************************/
              /***/
              (module2) => {
                "use strict";
                var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
                module2.exports = ReactPropTypesSecret;
              }
            ),
            /***/
            "./node_modules/prop-types/lib/has.js": (
              /*!********************************************!*\
                !*** ./node_modules/prop-types/lib/has.js ***!
                \********************************************/
              /***/
              (module2) => {
                module2.exports = Function.call.bind(Object.prototype.hasOwnProperty);
              }
            ),
            /***/
            "./node_modules/react-is/cjs/react-is.development.js": (
              /*!***********************************************************!*\
                !*** ./node_modules/react-is/cjs/react-is.development.js ***!
                \***********************************************************/
              /***/
              (__unused_webpack_module, exports2) => {
                "use strict";
                if (true) {
                  (function() {
                    "use strict";
                    var hasSymbol = typeof Symbol === "function" && Symbol.for;
                    var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
                    var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
                    var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
                    var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
                    var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
                    var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
                    var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
                    var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
                    var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
                    var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
                    var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
                    var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
                    var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
                    var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
                    var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
                    var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
                    var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
                    var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
                    function isValidElementType(type) {
                      return typeof type === "string" || typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
                      type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
                    }
                    function typeOf(object) {
                      if (typeof object === "object" && object !== null) {
                        var $$typeof = object.$$typeof;
                        switch ($$typeof) {
                          case REACT_ELEMENT_TYPE:
                            var type = object.type;
                            switch (type) {
                              case REACT_ASYNC_MODE_TYPE:
                              case REACT_CONCURRENT_MODE_TYPE:
                              case REACT_FRAGMENT_TYPE:
                              case REACT_PROFILER_TYPE:
                              case REACT_STRICT_MODE_TYPE:
                              case REACT_SUSPENSE_TYPE:
                                return type;
                              default:
                                var $$typeofType = type && type.$$typeof;
                                switch ($$typeofType) {
                                  case REACT_CONTEXT_TYPE:
                                  case REACT_FORWARD_REF_TYPE:
                                  case REACT_LAZY_TYPE:
                                  case REACT_MEMO_TYPE:
                                  case REACT_PROVIDER_TYPE:
                                    return $$typeofType;
                                  default:
                                    return $$typeof;
                                }
                            }
                          case REACT_PORTAL_TYPE:
                            return $$typeof;
                        }
                      }
                      return void 0;
                    }
                    var AsyncMode = REACT_ASYNC_MODE_TYPE;
                    var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
                    var ContextConsumer = REACT_CONTEXT_TYPE;
                    var ContextProvider = REACT_PROVIDER_TYPE;
                    var Element = REACT_ELEMENT_TYPE;
                    var ForwardRef = REACT_FORWARD_REF_TYPE;
                    var Fragment = REACT_FRAGMENT_TYPE;
                    var Lazy = REACT_LAZY_TYPE;
                    var Memo = REACT_MEMO_TYPE;
                    var Portal = REACT_PORTAL_TYPE;
                    var Profiler = REACT_PROFILER_TYPE;
                    var StrictMode = REACT_STRICT_MODE_TYPE;
                    var Suspense = REACT_SUSPENSE_TYPE;
                    var hasWarnedAboutDeprecatedIsAsyncMode = false;
                    function isAsyncMode(object) {
                      {
                        if (!hasWarnedAboutDeprecatedIsAsyncMode) {
                          hasWarnedAboutDeprecatedIsAsyncMode = true;
                          console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
                        }
                      }
                      return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
                    }
                    function isConcurrentMode(object) {
                      return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
                    }
                    function isContextConsumer(object) {
                      return typeOf(object) === REACT_CONTEXT_TYPE;
                    }
                    function isContextProvider(object) {
                      return typeOf(object) === REACT_PROVIDER_TYPE;
                    }
                    function isElement(object) {
                      return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
                    }
                    function isForwardRef(object) {
                      return typeOf(object) === REACT_FORWARD_REF_TYPE;
                    }
                    function isFragment(object) {
                      return typeOf(object) === REACT_FRAGMENT_TYPE;
                    }
                    function isLazy(object) {
                      return typeOf(object) === REACT_LAZY_TYPE;
                    }
                    function isMemo(object) {
                      return typeOf(object) === REACT_MEMO_TYPE;
                    }
                    function isPortal(object) {
                      return typeOf(object) === REACT_PORTAL_TYPE;
                    }
                    function isProfiler(object) {
                      return typeOf(object) === REACT_PROFILER_TYPE;
                    }
                    function isStrictMode(object) {
                      return typeOf(object) === REACT_STRICT_MODE_TYPE;
                    }
                    function isSuspense(object) {
                      return typeOf(object) === REACT_SUSPENSE_TYPE;
                    }
                    exports2.AsyncMode = AsyncMode;
                    exports2.ConcurrentMode = ConcurrentMode;
                    exports2.ContextConsumer = ContextConsumer;
                    exports2.ContextProvider = ContextProvider;
                    exports2.Element = Element;
                    exports2.ForwardRef = ForwardRef;
                    exports2.Fragment = Fragment;
                    exports2.Lazy = Lazy;
                    exports2.Memo = Memo;
                    exports2.Portal = Portal;
                    exports2.Profiler = Profiler;
                    exports2.StrictMode = StrictMode;
                    exports2.Suspense = Suspense;
                    exports2.isAsyncMode = isAsyncMode;
                    exports2.isConcurrentMode = isConcurrentMode;
                    exports2.isContextConsumer = isContextConsumer;
                    exports2.isContextProvider = isContextProvider;
                    exports2.isElement = isElement;
                    exports2.isForwardRef = isForwardRef;
                    exports2.isFragment = isFragment;
                    exports2.isLazy = isLazy;
                    exports2.isMemo = isMemo;
                    exports2.isPortal = isPortal;
                    exports2.isProfiler = isProfiler;
                    exports2.isStrictMode = isStrictMode;
                    exports2.isSuspense = isSuspense;
                    exports2.isValidElementType = isValidElementType;
                    exports2.typeOf = typeOf;
                  })();
                }
              }
            ),
            /***/
            "./node_modules/react-is/index.js": (
              /*!****************************************!*\
                !*** ./node_modules/react-is/index.js ***!
                \****************************************/
              /***/
              (module2, __unused_webpack_exports, __webpack_require__2) => {
                "use strict";
                if (false) {
                } else {
                  module2.exports = __webpack_require__2(
                    /*! ./cjs/react-is.development.js */
                    "./node_modules/react-is/cjs/react-is.development.js"
                  );
                }
              }
            ),
            /***/
            "./node_modules/shallow-equal/dist/index.esm.js": (
              /*!******************************************************!*\
                !*** ./node_modules/shallow-equal/dist/index.esm.js ***!
                \******************************************************/
              /***/
              (__unused_webpack_module, __webpack_exports__2, __webpack_require__2) => {
                "use strict";
                __webpack_require__2.r(__webpack_exports__2);
                __webpack_require__2.d(__webpack_exports__2, {
                  /* harmony export */
                  "shallowEqualArrays": () => (
                    /* binding */
                    shallowEqualArrays
                  ),
                  /* harmony export */
                  "shallowEqualObjects": () => (
                    /* binding */
                    shallowEqualObjects
                  )
                  /* harmony export */
                });
                function shallowEqualObjects(objA, objB) {
                  if (objA === objB) {
                    return true;
                  }
                  if (!objA || !objB) {
                    return false;
                  }
                  var aKeys = Object.keys(objA);
                  var bKeys = Object.keys(objB);
                  var len = aKeys.length;
                  if (bKeys.length !== len) {
                    return false;
                  }
                  for (var i = 0; i < len; i++) {
                    var key = aKeys[i];
                    if (objA[key] !== objB[key] || !Object.prototype.hasOwnProperty.call(objB, key)) {
                      return false;
                    }
                  }
                  return true;
                }
                function shallowEqualArrays(arrA, arrB) {
                  if (arrA === arrB) {
                    return true;
                  }
                  if (!arrA || !arrB) {
                    return false;
                  }
                  var len = arrA.length;
                  if (arrB.length !== len) {
                    return false;
                  }
                  for (var i = 0; i < len; i++) {
                    if (arrA[i] !== arrB[i]) {
                      return false;
                    }
                  }
                  return true;
                }
              }
            ),
            /***/
            "./src/Component.ts": (
              /*!**************************!*\
                !*** ./src/Component.ts ***!
                \**************************/
              /***/
              function(__unused_webpack_module, exports2, __webpack_require__2) {
                "use strict";
                var __rest = this && this.__rest || function(s, e) {
                  var t = {};
                  for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                      t[p] = s[p];
                  if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                        t[p[i]] = s[p[i]];
                    }
                  return t;
                };
                var __importDefault = this && this.__importDefault || function(mod) {
                  return mod && mod.__esModule ? mod : { "default": mod };
                };
                Object.defineProperty(exports2, "__esModule", { value: true });
                var useMediaQuery_1 = __importDefault(__webpack_require__2(
                  /*! ./useMediaQuery */
                  "./src/useMediaQuery.ts"
                ));
                var MediaQuery = function(_a) {
                  var children = _a.children, device = _a.device, onChange = _a.onChange, settings = __rest(_a, ["children", "device", "onChange"]);
                  var matches = (0, useMediaQuery_1.default)(settings, device, onChange);
                  if (typeof children === "function") {
                    return children(matches);
                  }
                  return matches ? children : null;
                };
                exports2["default"] = MediaQuery;
              }
            ),
            /***/
            "./src/Context.ts": (
              /*!************************!*\
                !*** ./src/Context.ts ***!
                \************************/
              /***/
              (__unused_webpack_module, exports2, __webpack_require__2) => {
                "use strict";
                Object.defineProperty(exports2, "__esModule", { value: true });
                var react_1 = __webpack_require__2(
                  /*! react */
                  "react"
                );
                var Context = (0, react_1.createContext)(void 0);
                exports2["default"] = Context;
              }
            ),
            /***/
            "./src/index.ts": (
              /*!**********************!*\
                !*** ./src/index.ts ***!
                \**********************/
              /***/
              function(__unused_webpack_module, exports2, __webpack_require__2) {
                "use strict";
                var __importDefault = this && this.__importDefault || function(mod) {
                  return mod && mod.__esModule ? mod : { "default": mod };
                };
                Object.defineProperty(exports2, "__esModule", { value: true });
                exports2.Context = exports2.toQuery = exports2.useMediaQuery = exports2["default"] = void 0;
                var useMediaQuery_1 = __importDefault(__webpack_require__2(
                  /*! ./useMediaQuery */
                  "./src/useMediaQuery.ts"
                ));
                exports2.useMediaQuery = useMediaQuery_1.default;
                var Component_1 = __importDefault(__webpack_require__2(
                  /*! ./Component */
                  "./src/Component.ts"
                ));
                exports2["default"] = Component_1.default;
                var toQuery_1 = __importDefault(__webpack_require__2(
                  /*! ./toQuery */
                  "./src/toQuery.ts"
                ));
                exports2.toQuery = toQuery_1.default;
                var Context_1 = __importDefault(__webpack_require__2(
                  /*! ./Context */
                  "./src/Context.ts"
                ));
                exports2.Context = Context_1.default;
              }
            ),
            /***/
            "./src/mediaQuery.ts": (
              /*!***************************!*\
                !*** ./src/mediaQuery.ts ***!
                \***************************/
              /***/
              function(__unused_webpack_module, exports2, __webpack_require__2) {
                "use strict";
                var __assign = this && this.__assign || function() {
                  __assign = Object.assign || function(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                      s = arguments[i];
                      for (var p in s)
                        if (Object.prototype.hasOwnProperty.call(s, p))
                          t[p] = s[p];
                    }
                    return t;
                  };
                  return __assign.apply(this, arguments);
                };
                var __rest = this && this.__rest || function(s, e) {
                  var t = {};
                  for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                      t[p] = s[p];
                  if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                        t[p[i]] = s[p[i]];
                    }
                  return t;
                };
                var __importDefault = this && this.__importDefault || function(mod) {
                  return mod && mod.__esModule ? mod : { "default": mod };
                };
                Object.defineProperty(exports2, "__esModule", { value: true });
                var prop_types_1 = __importDefault(__webpack_require__2(
                  /*! prop-types */
                  "./node_modules/prop-types/index.js"
                ));
                var stringOrNumber = prop_types_1.default.oneOfType([
                  prop_types_1.default.string,
                  prop_types_1.default.number
                ]);
                var types = {
                  all: prop_types_1.default.bool,
                  grid: prop_types_1.default.bool,
                  aural: prop_types_1.default.bool,
                  braille: prop_types_1.default.bool,
                  handheld: prop_types_1.default.bool,
                  print: prop_types_1.default.bool,
                  projection: prop_types_1.default.bool,
                  screen: prop_types_1.default.bool,
                  tty: prop_types_1.default.bool,
                  tv: prop_types_1.default.bool,
                  embossed: prop_types_1.default.bool
                };
                var matchers = {
                  orientation: prop_types_1.default.oneOf([
                    "portrait",
                    "landscape"
                  ]),
                  scan: prop_types_1.default.oneOf([
                    "progressive",
                    "interlace"
                  ]),
                  aspectRatio: prop_types_1.default.string,
                  deviceAspectRatio: prop_types_1.default.string,
                  height: stringOrNumber,
                  deviceHeight: stringOrNumber,
                  width: stringOrNumber,
                  deviceWidth: stringOrNumber,
                  color: prop_types_1.default.bool,
                  colorIndex: prop_types_1.default.bool,
                  monochrome: prop_types_1.default.bool,
                  resolution: stringOrNumber,
                  type: Object.keys(types)
                };
                var type = matchers.type, featureMatchers = __rest(
                  matchers,
                  ["type"]
                );
                var features = __assign({ minAspectRatio: prop_types_1.default.string, maxAspectRatio: prop_types_1.default.string, minDeviceAspectRatio: prop_types_1.default.string, maxDeviceAspectRatio: prop_types_1.default.string, minHeight: stringOrNumber, maxHeight: stringOrNumber, minDeviceHeight: stringOrNumber, maxDeviceHeight: stringOrNumber, minWidth: stringOrNumber, maxWidth: stringOrNumber, minDeviceWidth: stringOrNumber, maxDeviceWidth: stringOrNumber, minColor: prop_types_1.default.number, maxColor: prop_types_1.default.number, minColorIndex: prop_types_1.default.number, maxColorIndex: prop_types_1.default.number, minMonochrome: prop_types_1.default.number, maxMonochrome: prop_types_1.default.number, minResolution: stringOrNumber, maxResolution: stringOrNumber }, featureMatchers);
                var all = __assign(__assign({}, types), features);
                exports2["default"] = {
                  all,
                  types,
                  matchers,
                  features
                };
              }
            ),
            /***/
            "./src/toQuery.ts": (
              /*!************************!*\
                !*** ./src/toQuery.ts ***!
                \************************/
              /***/
              function(__unused_webpack_module, exports2, __webpack_require__2) {
                "use strict";
                var __importDefault = this && this.__importDefault || function(mod) {
                  return mod && mod.__esModule ? mod : { "default": mod };
                };
                Object.defineProperty(exports2, "__esModule", { value: true });
                var hyphenate_style_name_1 = __importDefault(__webpack_require__2(
                  /*! hyphenate-style-name */
                  "./node_modules/hyphenate-style-name/index.js"
                ));
                var mediaQuery_1 = __importDefault(__webpack_require__2(
                  /*! ./mediaQuery */
                  "./src/mediaQuery.ts"
                ));
                var negate = function(cond) {
                  return "not ".concat(cond);
                };
                var keyVal = function(k, v) {
                  var realKey = (0, hyphenate_style_name_1.default)(k);
                  if (typeof v === "number") {
                    v = "".concat(v, "px");
                  }
                  if (v === true) {
                    return realKey;
                  }
                  if (v === false) {
                    return negate(realKey);
                  }
                  return "(".concat(realKey, ": ").concat(v, ")");
                };
                var join = function(conds) {
                  return conds.join(" and ");
                };
                var toQuery = function(obj) {
                  var rules = [];
                  Object.keys(mediaQuery_1.default.all).forEach(function(k) {
                    var v = obj[k];
                    if (v != null) {
                      rules.push(keyVal(k, v));
                    }
                  });
                  return join(rules);
                };
                exports2["default"] = toQuery;
              }
            ),
            /***/
            "./src/useMediaQuery.ts": (
              /*!******************************!*\
                !*** ./src/useMediaQuery.ts ***!
                \******************************/
              /***/
              function(__unused_webpack_module, exports2, __webpack_require__2) {
                "use strict";
                var __importDefault = this && this.__importDefault || function(mod) {
                  return mod && mod.__esModule ? mod : { "default": mod };
                };
                Object.defineProperty(exports2, "__esModule", { value: true });
                var react_1 = __webpack_require__2(
                  /*! react */
                  "react"
                );
                var matchmediaquery_1 = __importDefault(__webpack_require__2(
                  /*! matchmediaquery */
                  "./node_modules/matchmediaquery/index.js"
                ));
                var hyphenate_style_name_1 = __importDefault(__webpack_require__2(
                  /*! hyphenate-style-name */
                  "./node_modules/hyphenate-style-name/index.js"
                ));
                var shallow_equal_1 = __webpack_require__2(
                  /*! shallow-equal */
                  "./node_modules/shallow-equal/dist/index.esm.js"
                );
                var toQuery_1 = __importDefault(__webpack_require__2(
                  /*! ./toQuery */
                  "./src/toQuery.ts"
                ));
                var Context_1 = __importDefault(__webpack_require__2(
                  /*! ./Context */
                  "./src/Context.ts"
                ));
                var makeQuery = function(settings) {
                  return settings.query || (0, toQuery_1.default)(settings);
                };
                var hyphenateKeys = function(obj) {
                  if (!obj)
                    return void 0;
                  var keys = Object.keys(obj);
                  return keys.reduce(function(result, key) {
                    result[(0, hyphenate_style_name_1.default)(key)] = obj[key];
                    return result;
                  }, {});
                };
                var useIsUpdate = function() {
                  var ref = (0, react_1.useRef)(false);
                  (0, react_1.useEffect)(function() {
                    ref.current = true;
                  }, []);
                  return ref.current;
                };
                var useDevice = function(deviceFromProps) {
                  var deviceFromContext = (0, react_1.useContext)(Context_1.default);
                  var getDevice = function() {
                    return hyphenateKeys(deviceFromProps) || hyphenateKeys(deviceFromContext);
                  };
                  var _a = (0, react_1.useState)(getDevice), device = _a[0], setDevice = _a[1];
                  (0, react_1.useEffect)(function() {
                    var newDevice = getDevice();
                    if (!(0, shallow_equal_1.shallowEqualObjects)(device, newDevice)) {
                      setDevice(newDevice);
                    }
                  }, [deviceFromProps, deviceFromContext]);
                  return device;
                };
                var useQuery = function(settings) {
                  var getQuery = function() {
                    return makeQuery(settings);
                  };
                  var _a = (0, react_1.useState)(getQuery), query = _a[0], setQuery = _a[1];
                  (0, react_1.useEffect)(function() {
                    var newQuery = getQuery();
                    if (query !== newQuery) {
                      setQuery(newQuery);
                    }
                  }, [settings]);
                  return query;
                };
                var useMatchMedia = function(query, device) {
                  var getMatchMedia = function() {
                    return (0, matchmediaquery_1.default)(query, device || {}, !!device);
                  };
                  var _a = (0, react_1.useState)(getMatchMedia), mq = _a[0], setMq = _a[1];
                  var isUpdate = useIsUpdate();
                  (0, react_1.useEffect)(function() {
                    if (isUpdate) {
                      var newMq_1 = getMatchMedia();
                      setMq(newMq_1);
                      return function() {
                        if (newMq_1) {
                          newMq_1.dispose();
                        }
                      };
                    }
                  }, [query, device]);
                  return mq;
                };
                var useMatches = function(mediaQuery) {
                  var _a = (0, react_1.useState)(mediaQuery.matches), matches = _a[0], setMatches = _a[1];
                  (0, react_1.useEffect)(function() {
                    var updateMatches = function(ev) {
                      setMatches(ev.matches);
                    };
                    mediaQuery.addListener(updateMatches);
                    setMatches(mediaQuery.matches);
                    return function() {
                      mediaQuery.removeListener(updateMatches);
                    };
                  }, [mediaQuery]);
                  return matches;
                };
                var useMediaQuery = function(settings, device, onChange) {
                  var deviceSettings = useDevice(device);
                  var query = useQuery(settings);
                  if (!query)
                    throw new Error("Invalid or missing MediaQuery!");
                  var mq = useMatchMedia(query, deviceSettings);
                  var matches = useMatches(mq);
                  var isUpdate = useIsUpdate();
                  (0, react_1.useEffect)(function() {
                    if (isUpdate && onChange) {
                      onChange(matches);
                    }
                  }, [matches]);
                  (0, react_1.useEffect)(function() {
                    return function() {
                      if (mq) {
                        mq.dispose();
                      }
                    };
                  }, []);
                  return matches;
                };
                exports2["default"] = useMediaQuery;
              }
            ),
            /***/
            "react": (
              /*!**************************************************************************************!*\
                !*** external {"commonjs":"react","commonjs2":"react","amd":"react","root":"React"} ***!
                \**************************************************************************************/
              /***/
              (module2) => {
                "use strict";
                module2.exports = __WEBPACK_EXTERNAL_MODULE_react__;
              }
            )
            /******/
          };
          var __webpack_module_cache__ = {};
          function __webpack_require__(moduleId) {
            var cachedModule = __webpack_module_cache__[moduleId];
            if (cachedModule !== void 0) {
              return cachedModule.exports;
            }
            var module2 = __webpack_module_cache__[moduleId] = {
              /******/
              // no module.id needed
              /******/
              // no module.loaded needed
              /******/
              exports: {}
              /******/
            };
            __webpack_modules__[moduleId].call(module2.exports, module2, module2.exports, __webpack_require__);
            return module2.exports;
          }
          (() => {
            __webpack_require__.d = (exports2, definition) => {
              for (var key in definition) {
                if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports2, key)) {
                  Object.defineProperty(exports2, key, { enumerable: true, get: definition[key] });
                }
              }
            };
          })();
          (() => {
            __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
          })();
          (() => {
            __webpack_require__.r = (exports2) => {
              if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
                Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
              }
              Object.defineProperty(exports2, "__esModule", { value: true });
            };
          })();
          var __webpack_exports__ = __webpack_require__("./src/index.ts");
          return __webpack_exports__;
        })()
      );
    });
  }
});
export default require_react_responsive();
/*! Bundled license information:

react-responsive/dist/react-responsive.js:
  (*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  *)
  (** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=react-responsive.js.map
