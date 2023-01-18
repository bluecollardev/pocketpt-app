module.exports = {
  expo: {
    name: "pocketpt",
    slug: "pocketpt",
    scheme: "pocketpt",
    version: "0.2.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "dark",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#212121"
    },
    updates: {
      fallbackToCacheTimeout: 0
    },
    assetBundlePatterns: [
      "**/*"
    ],
    ios: {
      supportsTablet: true,
      bundleIdentifier: "oi.afehrpt.pocketpt",
      infoPlist: {
        NSLocationWhenInUseUsageDescription: "This app does not need location data.",
        NSPhotoLibraryAddUsageDescription: "MediaShare is an application designed to share videos and other content that someone creates with other application users. To get data to share it needs to be uploaded from the Photo Library.",
        NSPhotoLibraryUsageDescription: "MediaShare is an application designed to share videos and other content that someone creates with other application users. To get data to share it needs to be uploaded from the Photo Library."
      },
      associatedDomains: [
        "applinks:e2f2-2403-6200-8821-f4c-591d-4df4-ba3c-233a.ap.ngrok.io"
      ]
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#212121"
      },
      package: "oi.afehrpt.pocketpt",
      intentFilters: [
        {
          action: "VIEW",
          data: [
            {
              scheme: "https",
              host: "pocketpt.afehrpt.com"
            }
          ],
          category: [
            "BROWSABLE",
            "DEFAULT"
          ]
        }
      ]
    },
    web: {
      favicon: "./assets/favicon.png"
    },
    extra: {
      eas: {
        projectId: "f7fcfd84-8bcf-4669-8527-5dd95972716d"
      },
      apiServer: process.env.API_SERVER,
      awsUrl: process.env.AWS_URL || 'https://mediashare0079445c24114369af875159b71aee1c04439-dev.s3.us-west-2.amazonaws.com/public/',
    }
  }
}
