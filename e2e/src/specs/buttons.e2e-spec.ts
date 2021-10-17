import { browser, logging } from 'protractor';
import { AppPage } from '../pageObjects/app.po';
import { Utils } from '../shared/utils';

describe('Buttons', () => {
  let page: AppPage;
  let utils: Utils;
  beforeAll(async () => {
    page = new AppPage();
    utils = new Utils();
    await page.navigateTo();
  });

  it('should open new component tip', async () => {
    await page.openNewComponentTooltip();
    expect(await page.getTerminalText()).toBe('ng generate component xyz');
  });

  it('should open material tooltip', async () => {
    await page.openMaterialTooltip();
    expect(await page.getTerminalText()).toBe('ng add @angular/material');
  });

  it('should open pwa tooltip', async () => {
    await page.openPwaTooltip();
    expect(await page.getTerminalText()).toBe('ng add @angular/pwa');
  });

  it('should open dependencies tooltip', async () => {
    await page.openDependencyTooltip();
    expect(await page.getTerminalText()).toBe('ng add _____');
  });

  it('should open tests tooltip', async () => {
    await page.openTestsTooltip();
    expect(await page.getTerminalText()).toBe('ng test');
  });

  it('should open prod build tooltip', async () => {
    await page.openProdTooltip();
    expect(await page.getTerminalText()).toBe('ng build --prod');
  });

  afterEach(async () => {
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry)
    );
  });
});
