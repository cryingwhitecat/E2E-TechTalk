import { browser } from 'protractor';

export class Utils {
  async switchToTab(tabIndex: number): Promise<void> {
    const handles = await browser.driver.getAllWindowHandles();
    return browser.driver.switchTo().window(handles[tabIndex]);
  }

  async closeTab(tabIndex: number): Promise<void> {
    await this.switchToTab(tabIndex);
    await browser.driver.close();
  }
}
