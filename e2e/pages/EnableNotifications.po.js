class EnableNotifications {
  async tapButton(languageStrings) {
    await element(by.label(languageStrings.label.launch_enable_notif)).tap()
  }

  async takeScreenshot() {
    await device.takeScreenshot("Enable Notifications Page")
  }

  async takeMenuScreenshot() {
    await device.takeScreenshot("Notifications Permissions Dialog")
  }

  async isOnScreen(languageStrings) {
    // eslint-disable-next-line jest/no-standalone-expect
    await expect(
      element(by.text(languageStrings.onboarding.notification_header)),
    ).toBeVisible()
    // eslint-disable-next-line jest/no-standalone-expect
    await expect(
      element(by.text(languageStrings.onboarding.notification_subheader)),
    ).toBeVisible()
  }
}

export default new EnableNotifications()
