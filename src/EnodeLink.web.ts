import { EventEmitter } from "expo-modules-core";
import { EnodeLinkSDKEventMap } from "./types";

export function listenToResult() {
  console.warn("expo-enode-link-sdk is not supported on web");
}

export function startLink() {
  console.warn("expo-enode-link-sdk is not supported on web");
}

export const enodeLink = new EventEmitter<EnodeLinkSDKEventMap>()