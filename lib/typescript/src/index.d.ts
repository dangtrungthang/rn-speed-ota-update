declare const RnSpeedOtaUpdate: {
    downloadUpdate(bundleUrl: string): Promise<string>;
    getCurrentVersion(): Promise<string>;
    applyUpdate(): Promise<boolean>;
};
export default RnSpeedOtaUpdate;
//# sourceMappingURL=index.d.ts.map