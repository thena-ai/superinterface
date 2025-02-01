"use strict";
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = function(target, all) {
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = function(to, from, except, desc) {
    if (from && (typeof from === "undefined" ? "undefined" : _type_of(from)) === "object" || typeof from === "function") {
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
var __toESM = function(mod, isNodeMode, target) {
    return target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(// If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
        value: mod,
        enumerable: true
    }) : target, mod);
};
var __toCommonJS = function(mod) {
    return __copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
};
// src/server.ts
var server_exports = {};
__export(server_exports, {
    createMessageResponse: function() {
        return createMessageResponse;
    },
    extendMessage: function() {
        return extendMessage;
    },
    messagesResponse: function() {
        return messagesResponse;
    }
});
module.exports = __toCommonJS(server_exports);
// src/lib/runSteps/serializeRunStep.ts
var import_radash = require("radash");
var serializeRunStep = function(_ref) {
    var runStep = _ref.runStep;
    return (0, import_radash.pick)(runStep, [
        "id",
        "run_id",
        "step_details",
        "completed_at",
        "cancelled_at",
        "failed_at",
        "status"
    ]);
};
// src/lib/messages/serializeMessage.ts
var serializeMessage = function(_ref) {
    var _message$runSteps;
    var message = _ref.message;
    return {
        id: message.id,
        role: message.role,
        created_at: message.created_at,
        content: message.content,
        run_id: message.run_id,
        assistant_id: message.assistant_id,
        thread_id: message.thread_id,
        attachments: message.attachments,
        metadata: message.metadata,
        runSteps: ((_message$runSteps = message.runSteps) !== null && _message$runSteps !== void 0 ? _message$runSteps : []).map(function(runStep) {
            return serializeRunStep({
                runStep: runStep
            });
        }),
        status: message.status
    };
};
// src/lib/messages/messagesResponse/data/messages/index.ts
var import_p_map = __toESM(require("p-map"), 1);
// src/lib/runSteps/getRunSteps/index.ts
function asyncGeneratorStep(n, t, e, r, o, a, c) {
    try {
        var i = n[a](c), u = i.value;
    } catch (n2) {
        return void e(n2);
    }
    i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
    return function() {
        var t = this, e = arguments;
        return new Promise(function(r, o) {
            var a = n.apply(t, e);
            function _next(n2) {
                asyncGeneratorStep(a, r, o, _next, _throw, "next", n2);
            }
            function _throw(n2) {
                asyncGeneratorStep(a, r, o, _next, _throw, "throw", n2);
            }
            _next(void 0);
        });
    };
}
var getRunSteps = /* @__PURE__ */ function() {
    var _ref2 = _asyncToGenerator(function(_ref) {
        var threadId, runId, client, runStepsResponse;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    threadId = _ref.threadId, runId = _ref.runId, client = _ref.client;
                    return [
                        4,
                        client.beta.threads.runs.steps.list(threadId, runId)
                    ];
                case 1:
                    runStepsResponse = _state.sent();
                    return [
                        2,
                        runStepsResponse.data
                    ];
            }
        });
    });
    return function getRunSteps2(_x) {
        return _ref2.apply(this, arguments);
    };
}();
// src/lib/messages/extendMessage.ts
function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r2) {
            return Object.getOwnPropertyDescriptor(e, r2).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
            _defineProperty(e, r2, t[r2]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
            Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
        });
    }
    return e;
}
function _defineProperty(e, r, t) {
    return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: true,
        configurable: true,
        writable: true
    }) : e[r] = t, e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == (typeof i === "undefined" ? "undefined" : _type_of(i)) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != (typeof t === "undefined" ? "undefined" : _type_of(t)) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != (typeof i === "undefined" ? "undefined" : _type_of(i))) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
function asyncGeneratorStep2(n, t, e, r, o, a, c) {
    try {
        var i = n[a](c), u = i.value;
    } catch (n2) {
        return void e(n2);
    }
    i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator2(n) {
    return function() {
        var t = this, e = arguments;
        return new Promise(function(r, o) {
            var a = n.apply(t, e);
            function _next(n2) {
                asyncGeneratorStep2(a, r, o, _next, _throw, "next", n2);
            }
            function _throw(n2) {
                asyncGeneratorStep2(a, r, o, _next, _throw, "throw", n2);
            }
            _next(void 0);
        });
    };
}
var extendMessage = /* @__PURE__ */ function() {
    var _ref2 = _asyncToGenerator2(function(_ref) {
        var message, client, _tmp, _tmp1;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    message = _ref.message, client = _ref.client;
                    if (!message.run_id) {
                        return [
                            2,
                            _objectSpread(_objectSpread({}, message), {}, {
                                runSteps: []
                            })
                        ];
                    }
                    _tmp = [
                        _objectSpread({}, message),
                        {}
                    ];
                    _tmp1 = {};
                    return [
                        4,
                        getRunSteps({
                            threadId: message.thread_id,
                            runId: message.run_id,
                            client: client
                        })
                    ];
                case 1:
                    return [
                        2,
                        _objectSpread.apply(void 0, _tmp.concat([
                            (_tmp1.runSteps = _state.sent(), _tmp1)
                        ]))
                    ];
            }
        });
    });
    return function extendMessage2(_x) {
        return _ref2.apply(this, arguments);
    };
}();
// src/lib/messages/messagesResponse/data/messages/runMessages/index.ts
var import_dayjs = __toESM(require("dayjs"), 1);
// src/lib/messages/messagesResponse/data/messages/runMessages/getLatestRun.ts
function asyncGeneratorStep3(n, t, e, r, o, a, c) {
    try {
        var i = n[a](c), u = i.value;
    } catch (n2) {
        return void e(n2);
    }
    i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator3(n) {
    return function() {
        var t = this, e = arguments;
        return new Promise(function(r, o) {
            var a = n.apply(t, e);
            function _next(n2) {
                asyncGeneratorStep3(a, r, o, _next, _throw, "next", n2);
            }
            function _throw(n2) {
                asyncGeneratorStep3(a, r, o, _next, _throw, "throw", n2);
            }
            _next(void 0);
        });
    };
}
var getLatestRun = /* @__PURE__ */ function() {
    var _ref2 = _asyncToGenerator3(function(_ref) {
        var threadId, client, runsResponse;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    threadId = _ref.threadId, client = _ref.client;
                    return [
                        4,
                        client.beta.threads.runs.list(threadId, {
                            limit: 1
                        })
                    ];
                case 1:
                    runsResponse = _state.sent();
                    return [
                        2,
                        runsResponse.data[0]
                    ];
            }
        });
    });
    return function getLatestRun2(_x) {
        return _ref2.apply(this, arguments);
    };
}();
// src/lib/optimistic/optimisticId.ts
var import_radash2 = require("radash");
var optimisticId = function() {
    return "-".concat((0, import_radash2.uid)(24));
};
// src/lib/messages/messagesResponse/data/messages/runMessages/index.ts
function asyncGeneratorStep4(n, t, e, r, o, a, c) {
    try {
        var i = n[a](c), u = i.value;
    } catch (n2) {
        return void e(n2);
    }
    i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator4(n) {
    return function() {
        var t = this, e = arguments;
        return new Promise(function(r, o) {
            var a = n.apply(t, e);
            function _next(n2) {
                asyncGeneratorStep4(a, r, o, _next, _throw, "next", n2);
            }
            function _throw(n2) {
                asyncGeneratorStep4(a, r, o, _next, _throw, "throw", n2);
            }
            _next(void 0);
        });
    };
}
var progressStatuses = [
    "queued",
    "in_progress",
    "requires_action",
    "cancelling"
];
var runMessages = /* @__PURE__ */ function() {
    var _ref2 = _asyncToGenerator4(function(_ref) {
        var result, threadId, client, latestRun, messageFromLatestRun;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    result = _ref.result, threadId = _ref.threadId, client = _ref.client;
                    return [
                        4,
                        getLatestRun({
                            threadId: threadId,
                            client: client
                        })
                    ];
                case 1:
                    latestRun = _state.sent();
                    if (!latestRun) {
                        return [
                            2,
                            []
                        ];
                    }
                    messageFromLatestRun = result.find(function(m) {
                        return m.run_id === latestRun.id;
                    });
                    if (messageFromLatestRun) {
                        return [
                            2,
                            []
                        ];
                    }
                    if (!progressStatuses.includes(latestRun.status)) {
                        return [
                            2,
                            []
                        ];
                    }
                    return [
                        4,
                        extendMessage({
                            message: {
                                id: optimisticId(),
                                role: "assistant",
                                created_at: (0, import_dayjs.default)().unix(),
                                object: "thread.message",
                                incomplete_details: null,
                                completed_at: (0, import_dayjs.default)().unix(),
                                incomplete_at: null,
                                status: "completed",
                                content: [],
                                run_id: latestRun.id,
                                assistant_id: latestRun.assistant_id,
                                thread_id: latestRun.thread_id,
                                attachments: [],
                                metadata: {}
                            },
                            client: client
                        })
                    ];
                case 2:
                    return [
                        2,
                        [
                            _state.sent()
                        ]
                    ];
            }
        });
    });
    return function runMessages2(_x) {
        return _ref2.apply(this, arguments);
    };
}();
// src/lib/messages/messagesResponse/data/messages/index.ts
function asyncGeneratorStep5(n, t, e, r, o, a, c) {
    try {
        var i = n[a](c), u = i.value;
    } catch (n2) {
        return void e(n2);
    }
    i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator5(n) {
    return function() {
        var t = this, e = arguments;
        return new Promise(function(r, o) {
            var a = n.apply(t, e);
            function _next(n2) {
                asyncGeneratorStep5(a, r, o, _next, _throw, "next", n2);
            }
            function _throw(n2) {
                asyncGeneratorStep5(a, r, o, _next, _throw, "throw", n2);
            }
            _next(void 0);
        });
    };
}
var messages = /* @__PURE__ */ function() {
    var _ref2 = _asyncToGenerator5(function(_ref) {
        var messagesResponse2, pageParam, threadId, client, result;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    messagesResponse2 = _ref.messagesResponse, pageParam = _ref.pageParam, threadId = _ref.threadId, client = _ref.client;
                    return [
                        4,
                        (0, import_p_map.default)(messagesResponse2.data, function(message) {
                            return extendMessage({
                                client: client,
                                message: message
                            });
                        })
                    ];
                case 1:
                    result = _state.sent();
                    if (pageParam) {
                        return [
                            2,
                            result
                        ];
                    }
                    return [
                        4,
                        runMessages({
                            result: result,
                            threadId: threadId,
                            client: client
                        })
                    ];
                case 2:
                    return [
                        2,
                        _to_consumable_array.apply(void 0, [
                            _state.sent()
                        ]).concat(_to_consumable_array(result))
                    ];
            }
        });
    });
    return function messages2(_x) {
        return _ref2.apply(this, arguments);
    };
}();
// src/lib/messages/messagesResponse/data/index.ts
function asyncGeneratorStep6(n, t, e, r, o, a, c) {
    try {
        var i = n[a](c), u = i.value;
    } catch (n2) {
        return void e(n2);
    }
    i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator6(n) {
    return function() {
        var t = this, e = arguments;
        return new Promise(function(r, o) {
            var a = n.apply(t, e);
            function _next(n2) {
                asyncGeneratorStep6(a, r, o, _next, _throw, "next", n2);
            }
            function _throw(n2) {
                asyncGeneratorStep6(a, r, o, _next, _throw, "throw", n2);
            }
            _next(void 0);
        });
    };
}
var data = /* @__PURE__ */ function() {
    var _ref2 = _asyncToGenerator6(function(_ref) {
        var messagesResponse2, pageParam, threadId, client;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    messagesResponse2 = _ref.messagesResponse, pageParam = _ref.pageParam, threadId = _ref.threadId, client = _ref.client;
                    return [
                        4,
                        messages({
                            messagesResponse: messagesResponse2,
                            pageParam: pageParam,
                            threadId: threadId,
                            client: client
                        })
                    ];
                case 1:
                    return [
                        2,
                        _state.sent().map(function(message) {
                            return serializeMessage({
                                message: message
                            });
                        })
                    ];
            }
        });
    });
    return function data2(_x) {
        return _ref2.apply(this, arguments);
    };
}();
// src/lib/messages/messagesResponse/limit.ts
var limit = 10;
// src/lib/messages/messagesResponse/hasNextPage.ts
var hasNextPage = function(_ref) {
    var messagesResponse2 = _ref.messagesResponse;
    if (messagesResponse2.data.length < limit) return false;
    return messagesResponse2.hasNextPage();
};
// src/lib/messages/messagesResponse/index.ts
function ownKeys2(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        r && (o = o.filter(function(r2) {
            return Object.getOwnPropertyDescriptor(e, r2).enumerable;
        })), t.push.apply(t, o);
    }
    return t;
}
function _objectSpread2(e) {
    for(var r = 1; r < arguments.length; r++){
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2 ? ownKeys2(Object(t), true).forEach(function(r2) {
            _defineProperty2(e, r2, t[r2]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys2(Object(t)).forEach(function(r2) {
            Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
        });
    }
    return e;
}
function _defineProperty2(e, r, t) {
    return (r = _toPropertyKey2(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: true,
        configurable: true,
        writable: true
    }) : e[r] = t, e;
}
function _toPropertyKey2(t) {
    var i = _toPrimitive2(t, "string");
    return "symbol" == (typeof i === "undefined" ? "undefined" : _type_of(i)) ? i : i + "";
}
function _toPrimitive2(t, r) {
    if ("object" != (typeof t === "undefined" ? "undefined" : _type_of(t)) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != (typeof i === "undefined" ? "undefined" : _type_of(i))) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
function asyncGeneratorStep7(n, t, e, r, o, a, c) {
    try {
        var i = n[a](c), u = i.value;
    } catch (n2) {
        return void e(n2);
    }
    i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator7(n) {
    return function() {
        var t = this, e = arguments;
        return new Promise(function(r, o) {
            var a = n.apply(t, e);
            function _next(n2) {
                asyncGeneratorStep7(a, r, o, _next, _throw, "next", n2);
            }
            function _throw(n2) {
                asyncGeneratorStep7(a, r, o, _next, _throw, "throw", n2);
            }
            _next(void 0);
        });
    };
}
var messagesResponse = /* @__PURE__ */ function() {
    var _ref2 = _asyncToGenerator7(function(_ref) {
        var client, threadId, pageParam, messagesResponse2, _tmp;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    client = _ref.client, threadId = _ref.threadId, pageParam = _ref.pageParam;
                    return [
                        4,
                        client.beta.threads.messages.list(threadId, _objectSpread2(_objectSpread2({}, pageParam ? {
                            after: pageParam
                        } : {}), {}, {
                            limit: limit
                        }))
                    ];
                case 1:
                    messagesResponse2 = _state.sent();
                    _tmp = {};
                    return [
                        4,
                        data({
                            client: client,
                            messagesResponse: messagesResponse2,
                            pageParam: pageParam,
                            threadId: threadId
                        })
                    ];
                case 2:
                    return [
                        2,
                        (_tmp.data = _state.sent(), _tmp.hasNextPage = hasNextPage({
                            messagesResponse: messagesResponse2
                        }), _tmp.// @ts-ignore-next-line
                        lastId = messagesResponse2.body.last_id, _tmp)
                    ];
            }
        });
    });
    return function messagesResponse2(_x) {
        return _ref2.apply(this, arguments);
    };
}();
// src/lib/runs/serializeRun.ts
var import_radash3 = require("radash");
var serializeRun = function(_ref) {
    var run = _ref.run;
    return (0, import_radash3.pick)(run, [
        "id",
        "thread_id",
        "assistant_id",
        "created_at"
    ]);
};
// src/lib/streams/enqueueJson.ts
var enqueueJson = function(_ref) {
    var controller = _ref.controller, value = _ref.value;
    return controller.enqueue(new TextEncoder().encode(JSON.stringify(value)));
};
// src/lib/messages/createMessageResponse/actionsStream.ts
var import_p_map2 = __toESM(require("p-map"), 1);
function asyncGeneratorStep8(n, t, e, r, o, a, c) {
    try {
        var i = n[a](c), u = i.value;
    } catch (n2) {
        return void e(n2);
    }
    i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator8(n) {
    return function() {
        var t = this, e = arguments;
        return new Promise(function(r, o) {
            var a = n.apply(t, e);
            function _next(n2) {
                asyncGeneratorStep8(a, r, o, _next, _throw, "next", n2);
            }
            function _throw(n2) {
                asyncGeneratorStep8(a, r, o, _next, _throw, "throw", n2);
            }
            _next(void 0);
        });
    };
}
var actionsStream = /* @__PURE__ */ function() {
    var _ref2 = _asyncToGenerator8(function(_ref) {
        var client, run, handleToolCall, controller, toolCalls, _, _1, _tmp, _tmp1;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    client = _ref.client, run = _ref.run, handleToolCall = _ref.handleToolCall, controller = _ref.controller;
                    if (!run.required_action) {
                        throw new Error("Run does not have a required action");
                    }
                    toolCalls = run.required_action.submit_tool_outputs.tool_calls;
                    _1 = (_ = client.beta.threads.runs).submitToolOutputsStream;
                    _tmp = [
                        run.thread_id,
                        run.id
                    ];
                    _tmp1 = {};
                    return [
                        4,
                        (0, import_p_map2.default)(toolCalls, function(toolCall) {
                            return handleToolCall({
                                toolCall: toolCall,
                                run: run,
                                controller: controller
                            });
                        })
                    ];
                case 1:
                    return [
                        2,
                        _1.apply(_, _tmp.concat([
                            (_tmp1.tool_outputs = _state.sent(), _tmp1)
                        ]))
                    ];
            }
        });
    });
    return function actionsStream2(_x) {
        return _ref2.apply(this, arguments);
    };
}();
// src/lib/messages/createMessageResponse/handleStream.ts
function asyncGeneratorStep9(n, t, e, r, o, a, c) {
    try {
        var i = n[a](c), u = i.value;
    } catch (n2) {
        return void e(n2);
    }
    i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator9(n) {
    return function() {
        var t = this, e = arguments;
        return new Promise(function(r, o) {
            var a = n.apply(t, e);
            function _next(n2) {
                asyncGeneratorStep9(a, r, o, _next, _throw, "next", n2);
            }
            function _throw(n2) {
                asyncGeneratorStep9(a, r, o, _next, _throw, "throw", n2);
            }
            _next(void 0);
        });
    };
}
function _asyncIterator(r) {
    var n, t, o, e = 2;
    for("undefined" != typeof Symbol && (t = Symbol.asyncIterator, o = Symbol.iterator); e--;){
        if (t && null != (n = r[t])) return n.call(r);
        if (o && null != (n = r[o])) return new AsyncFromSyncIterator(n.call(r));
        t = "@@asyncIterator", o = "@@iterator";
    }
    throw new TypeError("Object is not async iterable");
}
function AsyncFromSyncIterator(r) {
    function AsyncFromSyncIteratorContinuation(r2) {
        if (Object(r2) !== r2) return Promise.reject(new TypeError(r2 + " is not an object."));
        var n = r2.done;
        return Promise.resolve(r2.value).then(function(r3) {
            return {
                value: r3,
                done: n
            };
        });
    }
    return AsyncFromSyncIterator = function AsyncFromSyncIterator2(r2) {
        this.s = r2, this.n = r2.next;
    }, AsyncFromSyncIterator.prototype = {
        s: null,
        n: null,
        next: function next() {
            return AsyncFromSyncIteratorContinuation(this.n.apply(this.s, arguments));
        },
        return: function _return(r2) {
            var n = this.s.return;
            return void 0 === n ? Promise.resolve({
                value: r2,
                done: true
            }) : AsyncFromSyncIteratorContinuation(n.apply(this.s, arguments));
        },
        throw: function _throw(r2) {
            var n = this.s.return;
            return void 0 === n ? Promise.reject(r2) : AsyncFromSyncIteratorContinuation(n.apply(this.s, arguments));
        }
    }, new AsyncFromSyncIterator(r);
}
var _handleStream = /* @__PURE__ */ function() {
    var _ref2 = _asyncToGenerator9(function(_ref) {
        var client, stream, controller, handleToolCall, onEvent, _iteratorAbruptCompletion, _didIteratorError, _iteratorError, _iterator, _step, value, _tmp, err;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    client = _ref.client, stream = _ref.stream, controller = _ref.controller, handleToolCall = _ref.handleToolCall, onEvent = _ref.onEvent;
                    _iteratorAbruptCompletion = false;
                    _didIteratorError = false;
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        14,
                        15,
                        20
                    ]);
                    _iterator = _asyncIterator(stream);
                    _state.label = 2;
                case 2:
                    return [
                        4,
                        _iterator.next()
                    ];
                case 3:
                    if (!(_iteratorAbruptCompletion = !(_step = _state.sent()).done)) return [
                        3,
                        13
                    ];
                    value = _step.value;
                    onEvent({
                        controller: controller,
                        event: value.event,
                        data: value.data
                    });
                    if (![
                        "thread.message.created",
                        "thread.message.completed"
                    ].includes(value.event)) return [
                        3,
                        4
                    ];
                    enqueueJson({
                        controller: controller,
                        value: {
                            event: value.event,
                            data: serializeMessage({
                                message: value.data
                            })
                        }
                    });
                    return [
                        3,
                        12
                    ];
                case 4:
                    if (![
                        "thread.message.delta",
                        "thread.run.step.delta"
                    ].includes(value.event)) return [
                        3,
                        5
                    ];
                    enqueueJson({
                        controller: controller,
                        value: value
                    });
                    return [
                        3,
                        12
                    ];
                case 5:
                    if (!(value.event === "thread.run.created")) return [
                        3,
                        6
                    ];
                    enqueueJson({
                        controller: controller,
                        value: {
                            event: value.event,
                            data: serializeRun({
                                run: value.data
                            })
                        }
                    });
                    return [
                        3,
                        12
                    ];
                case 6:
                    if (!(value.event === "thread.run.failed")) return [
                        3,
                        7
                    ];
                    enqueueJson({
                        controller: controller,
                        value: {
                            event: value.event,
                            data: serializeRun({
                                run: value.data
                            })
                        }
                    });
                    return [
                        3,
                        12
                    ];
                case 7:
                    if (![
                        "thread.run.step.created",
                        "thread.run.step.completed"
                    ].includes(value.event)) return [
                        3,
                        8
                    ];
                    enqueueJson({
                        controller: controller,
                        value: {
                            event: value.event,
                            data: serializeRunStep({
                                runStep: value.data
                            })
                        }
                    });
                    return [
                        3,
                        12
                    ];
                case 8:
                    if (!(value.event === "thread.run.requires_action")) return [
                        3,
                        11
                    ];
                    enqueueJson({
                        controller: controller,
                        value: value
                    });
                    _tmp = {
                        client: client
                    };
                    return [
                        4,
                        actionsStream({
                            client: client,
                            run: value.data,
                            handleToolCall: handleToolCall,
                            controller: controller
                        })
                    ];
                case 9:
                    return [
                        4,
                        _handleStream.apply(void 0, [
                            (_tmp.stream = _state.sent(), _tmp.controller = controller, _tmp.handleToolCall = handleToolCall, _tmp.onEvent = onEvent, _tmp)
                        ])
                    ];
                case 10:
                    _state.sent();
                    return [
                        3,
                        12
                    ];
                case 11:
                    console.dir({
                        value: value
                    }, {
                        depth: null
                    });
                    _state.label = 12;
                case 12:
                    _iteratorAbruptCompletion = false;
                    return [
                        3,
                        2
                    ];
                case 13:
                    return [
                        3,
                        20
                    ];
                case 14:
                    err = _state.sent();
                    _didIteratorError = true;
                    _iteratorError = err;
                    return [
                        3,
                        20
                    ];
                case 15:
                    _state.trys.push([
                        15,
                        ,
                        18,
                        19
                    ]);
                    if (!(_iteratorAbruptCompletion && _iterator.return != null)) return [
                        3,
                        17
                    ];
                    return [
                        4,
                        _iterator.return()
                    ];
                case 16:
                    _state.sent();
                    _state.label = 17;
                case 17:
                    return [
                        3,
                        19
                    ];
                case 18:
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                    return [
                        7
                    ];
                case 19:
                    return [
                        7
                    ];
                case 20:
                    return [
                        2
                    ];
            }
        });
    });
    return function handleStream(_x) {
        return _ref2.apply(this, arguments);
    };
}();
// src/lib/messages/createMessageResponse/index.ts
function asyncGeneratorStep10(n, t, e, r, o, a, c) {
    try {
        var i = n[a](c), u = i.value;
    } catch (n2) {
        return void e(n2);
    }
    i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator10(n) {
    return function() {
        var t = this, e = arguments;
        return new Promise(function(r, o) {
            var a = n.apply(t, e);
            function _next(n2) {
                asyncGeneratorStep10(a, r, o, _next, _throw, "next", n2);
            }
            function _throw(n2) {
                asyncGeneratorStep10(a, r, o, _next, _throw, "throw", n2);
            }
            _next(void 0);
        });
    };
}
var createMessageResponse = function(_ref) {
    var client = _ref.client, createRunStream = _ref.createRunStream, handleToolCall = _ref.handleToolCall, _ref_onStart = _ref.onStart, onStart = _ref_onStart === void 0 ? function() {} : _ref_onStart, _ref_onError = _ref.onError, onError = _ref_onError === void 0 ? function() {} : _ref_onError, _ref_onClose = _ref.onClose, onClose = _ref_onClose === void 0 ? function() {} : _ref_onClose, _ref_onEvent = _ref.onEvent, onEvent = _ref_onEvent === void 0 ? function() {} : _ref_onEvent;
    return new ReadableStream({
        start: function start(controller) {
            return _asyncToGenerator10(function() {
                var error;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            onStart({
                                controller: controller
                            });
                            _state.label = 1;
                        case 1:
                            _state.trys.push([
                                1,
                                3,
                                ,
                                4
                            ]);
                            return [
                                4,
                                _handleStream({
                                    client: client,
                                    stream: createRunStream,
                                    controller: controller,
                                    handleToolCall: handleToolCall,
                                    onEvent: onEvent
                                })
                            ];
                        case 2:
                            _state.sent();
                            return [
                                3,
                                4
                            ];
                        case 3:
                            error = _state.sent();
                            onError({
                                error: error,
                                controller: controller
                            });
                            controller.error(error);
                            return [
                                3,
                                4
                            ];
                        case 4:
                            onClose({
                                controller: controller
                            });
                            controller.close();
                            return [
                                2
                            ];
                    }
                });
            })();
        }
    });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    createMessageResponse: createMessageResponse,
    extendMessage: extendMessage,
    messagesResponse: messagesResponse
});
//# sourceMappingURL=server.cjs.map