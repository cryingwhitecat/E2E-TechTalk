import { browser, logging } from 'protractor';
import { AppPage } from '../pageObjects/app.po';
import { Utils } from '../shared/utils';

describe('Links', () => {
  let page: AppPage;
  let utils: Utils;
  beforeAll(async () => {
    page = new AppPage();
    utils = new Utils();
    await page.navigateTo();
  });

  it('should go learn angular', async () => {
    await page.goLearnAngular();
    await utils.switchToTab(1);
    expect(await browser.getCurrentUrl()).toBe("https://angular.io/tutorial");
  });

  it('should go read the docs', async () => {
    await page.goReadTheDocs();
    await utils.switchToTab(1);
    expect(await browser.getCurrentUrl()).toBe("https://angular.io/cli");
  });

  afterEach(async () => {
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
    await utils.closeTab(1);
    await utils.switchToTab(0);
  });
});
