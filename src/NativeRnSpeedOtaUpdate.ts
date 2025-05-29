import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
  downloadBundle(bundleUrl: string): Promise<string>;
  getCurrentVersion(): Promise<string>;
  applyUpdate(): Promise<boolean>;
}

export default TurboModuleRegistry.get<Spec>(
  'RnSpeedOtaUpdate',
) as Spec | null;