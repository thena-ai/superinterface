"use strict";
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
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
                var key2 = _step.value;
                if (!__hasOwnProp.call(to, key2) && key2 !== except) __defProp(to, key2, {
                    get: function() {
                        return from[key2];
                    },
                    enumerable: !(desc = __getOwnPropDesc(from, key2)) || desc.enumerable
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
// src/utils.ts
var utils_exports = {};
__export(utils_exports, {
    enqueueJson: function() {
        return enqueueJson;
    },
    isOptimistic: function() {
        return isOptimistic;
    },
    optimisticId: function() {
        return optimisticId;
    },
    serializeMessage: function() {
        return serializeMessage;
    },
    threadIdStorageKey: function() {
        return key;
    }
});
module.exports = __toCommonJS(utils_exports);
// src/lib/optimistic/optimisticId.ts
var import_radash = require("radash");
var optimisticId = function() {
    return "-".concat((0, import_radash.uid)(24));
};
// src/lib/optimistic/isOptimistic.ts
var import_lodash = __toESM(require("lodash"), 1);
var isOptimistic = function(_ref) {
    var id = _ref.id;
    return import_lodash.default.startsWith(id, "-");
};
// src/lib/runSteps/serializeRunStep.ts
var import_radash2 = require("radash");
var serializeRunStep = function(_ref) {
    var runStep = _ref.runStep;
    return (0, import_radash2.pick)(runStep, [
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
// src/lib/threadIdStorage/key.ts
var key = function(_ref) {
    var assistantId = _ref.assistantId;
    return "superinterface-".concat(assistantId, "-threadId");
};
// src/lib/streams/enqueueJson.ts
var enqueueJson = function(_ref) {
    var controller = _ref.controller, value = _ref.value;
    return controller.enqueue(new TextEncoder().encode(JSON.stringify(value)));
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    enqueueJson: enqueueJson,
    isOptimistic: isOptimistic,
    optimisticId: optimisticId,
    serializeMessage: serializeMessage,
    threadIdStorageKey: threadIdStorageKey
});
//# sourceMappingURL=utils.cjs.map