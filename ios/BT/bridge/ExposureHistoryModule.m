#import <Foundation/Foundation.h>
#import <React/RCTLog.h>
#import <React/RCTBridgeModule.h>
#import "BT-Swift.h"

@interface ExposureHistoryModule: NSObject <RCTBridgeModule>
@end

@implementation ExposureHistoryModule

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(getCurrentExposures: (RCTResponseSenderBlock)callback) {
  callback(@[[[ExposureManager shared] currentExposures]]);
}

RCT_REMAP_METHOD(fetchLastDetectionDate,
                 fetchLastDetectionDateWithResolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
  [[ExposureManager shared] fetchLastDetectionDateWithResolve:resolve reject:reject];
}

@end
