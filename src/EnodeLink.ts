import { EventSubscription, requireNativeModule } from "expo-modules-core";
import { EnodeLinkSDKModule, ResultCode } from "./types";
import { ON_RESULT_EVENT_NAME } from "./constants";

export const enodeLink =
  requireNativeModule<EnodeLinkSDKModule>("ExpoEnodeLinkSDK");

/**
 * @deprecated Will be removed in favor of using the `EnodeLink` event emitter, together with `useEvent` and `useEventListener`.
 * @param onResult
 * @returns {EventSubscription}
 */
export function listenToResult(
  onResult: (code: ResultCode, errorMessage?: string) => void
): EventSubscription {
  return enodeLink.addListener(ON_RESULT_EVENT_NAME, (event) =>
    onResult(event.code, event.errorMessage)
  );
}

export function startLink(token: string) {
  enodeLink.show(token);
}
