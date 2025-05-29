package com.rnspeedotaupdate

import android.content.pm.PackageManager
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.annotations.ReactModule
import java.io.File
import java.io.FileOutputStream
import java.net.HttpURLConnection
import java.net.URL

@ReactModule(name = RnSpeedOtaUpdateModule.NAME)
class RnSpeedOtaUpdateModule(reactContext: ReactApplicationContext) :
  NativeRnSpeedOtaUpdateSpec(reactContext) {

  override fun getName(): String = NAME

  override fun downloadBundle(bundleUrl: String, promise: Promise) {
    try {
      val url = URL(bundleUrl)
      val connection = url.openConnection() as HttpURLConnection
      connection.connect()

      val bundleFile = File(reactApplicationContext.filesDir, "update.bundle")
      val inputStream = connection.inputStream
      val outputStream = FileOutputStream(bundleFile)

      inputStream.use { input ->
        outputStream.use { output ->
          input.copyTo(output)
        }
      }

      promise.resolve(bundleFile.absolutePath)
    } catch (e: Exception) {
      promise.reject("DOWNLOAD_FAILED", "Failed to download bundle", e)
    }
  }

  override fun getCurrentVersion(promise: Promise) {
    try {
      val packageInfo = reactApplicationContext.packageManager
        .getPackageInfo(reactApplicationContext.packageName, 0)
      promise.resolve(packageInfo.versionName)
    } catch (e: PackageManager.NameNotFoundException) {
      promise.reject("VERSION_ERROR", "Could not get app version", e)
    }
  }

  override fun applyUpdate(promise: Promise) {
    // In a real implementation, you would:
    // 1. Verify the downloaded bundle
    // 2. Set a flag to use the new bundle on next app start
    // 3. Optionally reload the app immediately
    promise.resolve(true)
  }

  companion object {
    const val NAME = "RnSpeedOtaUpdate"
  }
}
