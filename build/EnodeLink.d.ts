import { EventSubscription } from "expo-modules-core";
import { EnodeLinkSDKModule, ResultCode } from "./types";
export declare const enodeLink: EnodeLinkSDKModule;
/**
 * @deprecated Will be removed in favor of using the `EnodeLink` event emitter, together with `useEvent` and `useEventListener`.
 * @param onResult
 * @returns {EventSubscription}
 */
export declare function listenToResult(onResult: (code: ResultCode, errorMessage?: string) => void): EventSubscription;
export declare function startLink(token: string): void;
//# sourceMappingURL=EnodeLink.d.ts.map