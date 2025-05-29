declare class OtaManager {
    static downloadAndInstall(updateUrl: string): Promise<void>;
    static checkForUpdate(updateUrl: string): Promise<{
        needsUpdate: boolean;
        version?: string;
    }>;
    static getCurrentVersion(): Promise<string>;
}
export default OtaManager;
//# sourceMappingURL=OtaManager.d.ts.map