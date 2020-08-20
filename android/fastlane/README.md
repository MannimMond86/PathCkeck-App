fastlane documentation
================
# Installation

Make sure you have the latest version of the Xcode command line tools installed:

```
xcode-select --install
```

Install _fastlane_ using
```
[sudo] gem install fastlane -NV
```
or alternatively using `brew cask install fastlane`

# Available Actions
## Android
### android test
```
fastlane android test
```
Runs Android (Native) unit tests
### android staging
```
fastlane android staging
```
Build a Staging APK and AAB
### android release
```
fastlane android release
```
Build a Release APK and AAB
### android play_store
```
fastlane android play_store
```
Upload to google play store beta track
### android staging_bt
```
fastlane android staging_bt
```
Build a Staging APK and AAB
### android release_bt
```
fastlane android release_bt
```
Build a Release APK and AAB
### android play_store_bt
```
fastlane android play_store_bt
```
Upload to google play store beta track

----

This README.md is auto-generated and will be re-generated every time [fastlane](https://fastlane.tools) is run.
More information about fastlane can be found on [fastlane.tools](https://fastlane.tools).
The documentation of fastlane can be found on [docs.fastlane.tools](https://docs.fastlane.tools).
