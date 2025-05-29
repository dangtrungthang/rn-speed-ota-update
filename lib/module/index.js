"use strict";

import NativeRnSpeedOtaUpdate from "./NativeRnSpeedOtaUpdate.js";
const RnSpeedOtaUpdate = {
  async downloadUpdate(bundleUrl) {
    if (!NativeRnSpeedOtaUpdate) {
      throw new Error('Native module not available');
    }
    return NativeRnSpeedOtaUpdate.downloadBundle(bundleUrl);
  },
  async getCurrentVersion() {
    if (!NativeRnSpeedOtaUpdate) {
      throw new Error('Native module not available');
    }
    return NativeRnSpeedOtaUpdate.getCurrentVersion();
  },
  async applyUpdate() {
    if (!NativeRnSpeedOtaUpdate) {
      throw new Error('Native module not available');
    }
    return NativeRnSpeedOtaUpdate.applyUpdate();
  }
};
export default RnSpeedOtaUpdate;
//# sourceMappingURL=index.js.map