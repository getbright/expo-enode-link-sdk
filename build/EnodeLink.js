import { requireNativeModule } from "expo-modules-core";
import { ON_RESULT_EVENT_NAME } from "./constants";
export const enodeLink = requireNativeModule("ExpoEnodeLinkSDK");
/**
 * @deprecated Will be removed in favor of using the `EnodeLink` event emitter, together with `useEvent` and `useEventListener`.
 * @param onResult
 * @returns {EventSubscription}
 */
export function listenToResult(onResult) {
    return enodeLink.addListener(ON_RESULT_EVENT_NAME, (event) => onResult(event.code, event.errorMessage));
}
export function startLink(token) {
    enodeLink.show(token);
}
//# sourceMappingURL=EnodeLink.js.map