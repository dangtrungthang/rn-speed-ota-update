"use strict";

import { NativeModules } from 'react-native';
const OtaUpdate = NativeModules.OtaUpdate;
class OtaManager {
  static async downloadAndInstall(updateUrl) {
    try {
      await OtaUpdate.downloadAndInstallUpdate(updateUrl);
    } catch (error) {
      console.error('OTA update failed:', error);
      throw error;
    }
  }
  static async checkForUpdate(updateUrl) {
    return OtaUpdate.checkForUpdate(updateUrl);
  }
  static async getCurrentVersion() {
    return OtaUpdate.getCurrentVersion();
  }
}
export default OtaManager;
//# sourceMappingURL=OtaManager.js.map