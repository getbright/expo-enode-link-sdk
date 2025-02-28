require 'json'

package = JSON.parse(File.read(File.join(__dir__, '..', 'package.json')))

Pod::Spec.new do |s|
  s.name           = 'ExpoEnodeLinkSDK'
  s.version        = package['version']
  s.summary        = package['description']
  s.description    = package['description']
  s.license        = package['license']
  s.author         = package['author']
  s.homepage       = package['homepage']
  s.platform       = :ios, '13.4'
  s.swift_version  = '5.4'
  s.source         = { git: 'https://github.com/getbright/expo-enode-link-sdk' }
  s.static_framework = true

  s.dependency 'ExpoModulesCore'

  s.source_files = "**/*.{h,c,m,swift}"
  s.exclude_files = ["Frameworks/*.xcframework/**/*.h"]
  s.preserve_paths = [
    "Frameworks/*.xcframework",
    "**/*.h",
    "Frameworks/*.xcframework/**/*.h"
  ]
  s.vendored_frameworks='Frameworks/LinkKit.xcframework'

  # Swift/Objective-C compatibility
  s.pod_target_xcconfig = {
    'DEFINES_MODULE' => 'YES',
    'SWIFT_COMPILATION_MODE' => 'wholemodule'
  }
end
