import type { NativeModule } from "expo-modules-core/build/ts-declarations/NativeModule";
import type { ON_RESULT_EVENT_NAME } from "./constants";
export type ResultCode = "success" | "missingLinkToken" | "malformedLinkToken" | "dismissedViaDismissFunction" | "cancelledByUser" | "backendError" | "earlyExitRequestedFromFrontend" | "permissionError" | "unknownError";
export type OnResultEvent = {
    code: ResultCode;
    errorMessage?: string;
};
export type EnodeLinkSDKEventMap = {
    [ON_RESULT_EVENT_NAME]: (event: OnResultEvent) => void;
};
export type EnodeLinkSDKModule = NativeModule<EnodeLinkSDKEventMap>;
//# sourceMappingURL=types.d.ts.map