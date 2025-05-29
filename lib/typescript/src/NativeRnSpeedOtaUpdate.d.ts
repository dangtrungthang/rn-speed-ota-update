import type { TurboModule } from 'react-native';
export interface Spec extends TurboModule {
    downloadBundle(bundleUrl: string): Promise<string>;
    getCurrentVersion(): Promise<string>;
    applyUpdate(): Promise<boolean>;
}
declare const _default: Spec | null;
export default _default;
//# sourceMappingURL=NativeRnSpeedOtaUpdate.d.ts.map