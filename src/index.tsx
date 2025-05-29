import NativeRnSpeedOtaUpdate from './NativeRnSpeedOtaUpdate';

const RnSpeedOtaUpdate = {
  async downloadUpdate(bundleUrl: string): Promise<string> {
    if (!NativeRnSpeedOtaUpdate) {
      throw new Error('Native module not available');
    }
    return NativeRnSpeedOtaUpdate.downloadBundle(bundleUrl);
  },

  async getCurrentVersion(): Promise<string> {
    if (!NativeRnSpeedOtaUpdate) {
      throw new Error('Native module not available');
    }
    return NativeRnSpeedOtaUpdate.getCurrentVersion();
  },

  async applyUpdate(): Promise<boolean> {
    if (!NativeRnSpeedOtaUpdate) {
      throw new Error('Native module not available');
    }
    return NativeRnSpeedOtaUpdate.applyUpdate();
  },
};

export default RnSpeedOtaUpdate;