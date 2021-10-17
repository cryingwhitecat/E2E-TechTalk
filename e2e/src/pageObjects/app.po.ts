import { browser, by, element } from 'protractor';

export class AppPage {
  private terminal = element(by.id('terminal'));

  private learnAngularLink = element(by.id('learn-angular-link'));
  private docsLink = element(by.id('cli-docs-link'));
  private blogLink = element(by.id('blog-link'));

  private newComponentButton = element(by.id('new-component-btn'));
  private materialButton = element(by.id('angular-material-btn'));
  private pwaButton = element(by.id('pwa-btn'));
  private dependencyButton = element(by.id('dependency-btn'));
  private testsButton = element(by.id('tests-btn'));
  private buildProdButton = element(by.id('build-prod-btn'));

  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl);
  }

  async getTitleText(): Promise<string> {
    return element(by.css('app-root .content span')).getText();
  }

  async getTerminalText(): Promise<string> {
    return this.terminal.getText();
  }

  async openNewComponentTooltip(): Promise<void> {
    return this.newComponentButton.click();
  }

  async openMaterialTooltip(): Promise<void> {
    return this.materialButton.click();
  }

  async openPwaTooltip(): Promise<void> {
    return this.pwaButton.click();
  }

  async openDependencyTooltip(): Promise<void> {
    return this.dependencyButton.click();
  }

  async openTestsTooltip(): Promise<void> {
    return this.testsButton.click();
  }

  async openProdTooltip(): Promise<void> {
    return this.buildProdButton.click();
  }

  async goLearnAngular(): Promise<void> {
    return this.learnAngularLink.click();
  }

  async goReadTheDocs(): Promise<void> {
    return this.docsLink.click();
  }

  async goReadTheBlog(): Promise<void> {
    return this.blogLink.click();
  }

  async goToSignup(): Promise<void>{
    return;
  }

}
