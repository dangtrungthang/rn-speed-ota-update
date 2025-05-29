import { NativeModules, Platform } from 'react-native';

interface OtaUpdateInterface {
  downloadAndInstallUpdate(updateUrl: string): Promise<void>;
  checkForUpdate(updateUrl: string): Promise<{ needsUpdate: boolean; version?: string }>;
  getCurrentVersion(): Promise<string>;
}

const OtaUpdate: OtaUpdateInterface = NativeModules.OtaUpdate;

class OtaManager {
  static async downloadAndInstall(updateUrl: string): Promise<void> {
    try {
      await OtaUpdate.downloadAndInstallUpdate(updateUrl);
    } catch (error) {
      console.error('OTA update failed:', error);
      throw error;
    }
  }

  static async checkForUpdate(updateUrl: string): Promise<{ needsUpdate: boolean; version?: string }> {
    return OtaUpdate.checkForUpdate(updateUrl);
  }

  static async getCurrentVersion(): Promise<string> {
    return OtaUpdate.getCurrentVersion();
  }
}

export default OtaManager;