/* eslint-disable */
const screenshotText = "Onboarding - PersonalPrivacy"

class PersonalPrivacy {
  async tapButton(languageStrings) {
    await element(by.label(languageStrings.label.launch_next)).tap()
  }

  async takeScreenshot() {
    await device.takeScreenshot(screenshotText)
  }

  async isOnScreen(languageStrings) {
    // eslint-disable-next-line jest/no-standalone-expect
    await expect(
      element(by.label(languageStrings.label.launch_screen2_header_bluetooth)),
    ).toBeVisible()
  }
}

export default new PersonalPrivacy()
