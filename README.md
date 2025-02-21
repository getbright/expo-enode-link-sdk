# expo-enode-link-sdk

An Expo Module integration for Enode's Link SDK

## Android

The Enode SDK requires Android SDK version 34+ and the minimum SDK 24+. It is required to add this to your app's `app.json` under `plugins`.

```json
"plugins": [
  [
    "expo-build-properties",
    {
      "android": {
        "minSdkVersion": 24,
        "compileSdkVersion": 34,
        "targetSdkVersion": 34,
        "buildToolsVersion": "34.0.0"
      }
    }
  ],
  // your other plugins, if any
]
```

If not already installed, you'll also need to install `expo-build-properties`

```
npx expo install expo-build-properties
```

### App theme

Enode's link sdk uses the MaterialComponents android app theme, `expo-enode-link-sdk` provides an expo plugin for setting the android app theme. Add the following to your `app.json`

```json
"plugins": [
    [
        "@getbright/expo-enode-link-sdk", "Theme.MaterialComponents.DayNight.NoActionBar"
    ]
]
```

## IOS

The enode SDK uses bluetooth and therefore you need to add this in your app's `app.json` under `ios`.

```json
"ios": {
  "infoPlist": {
    "NSBluetoothAlwaysUsageDescription": "Our app requires Bluetooth to connect with energy devices, enabling efficient device management and enhanced user experience."
  },
  // your other ios configuration, if any
}
```

Additionally the Enode SDK requires iOS deployment target 14+. It is required to add this to your app's `app.json` under `plugins`.

```json
"plugins": [
  [
    "expo-build-properties",
    {
      "ios": {
        "deploymentTarget": "14.0"
      }
    }
  ],
  // your other plugins, if any
]
```

This is the same plugin used in the Android config and not a seperate one. The final config of this plugin should look something like this:

```json
"plugins": [
      [
        "expo-build-properties",
        {
          "android": {
            "minSdkVersion": 24,
            "compileSdkVersion": 34,
            "targetSdkVersion": 34,
            "buildToolsVersion": "34.0.0"
          },
          "ios": {
            "deploymentTarget": "14.0"
          }
        }
      ]
    ]
```

## Usage

Install the package

```
npx expo install expo-enode-link-sdk
```

Import the package

```ts
import { EnodeLink, startLink } from "@getbright/expo-enode-link-sdk";
```

Listen to the result events by:

```tsx
import { useEventListener } from 'expo';
import { EnodeLink } from '@getbright/expo-enode-link-sdk';

function FooComponent() {
  useEventListener(EnodeLink, 'OnResult', ({ code, errorMessage }) => {
    // Handle result
  });
}
```

Launch/Show the Enode Link UI

```ts
import { startLink } from '@getbright/expo-enode-link-sdk';
startLink("<YOUR_TOKEN_HERE>");
```

## Local usage

In this repo run

`yarn link`

This will register the package in your local yarn registry. Then in your project run `yarn link @getbright/expo-enode-link-sdk` to link the package to your project.