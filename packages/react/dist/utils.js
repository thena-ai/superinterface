// src/lib/optimistic/optimisticId.ts
import { uid } from "radash";
var optimisticId = function() {
    return "-".concat(uid(24));
};
// src/lib/optimistic/isOptimistic.ts
import _ from "lodash";
var isOptimistic = function(_ref) {
    var id = _ref.id;
    return _.startsWith(id, "-");
};
// src/lib/runSteps/serializeRunStep.ts
import { pick } from "radash";
var serializeRunStep = function(_ref) {
    var runStep = _ref.runStep;
    return pick(runStep, [
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
export { enqueueJson, isOptimistic, optimisticId, serializeMessage, key as threadIdStorageKey };
//# sourceMappingURL=utils.js.map