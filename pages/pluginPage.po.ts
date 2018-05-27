import {browser, element, by, ExpectedConditions} from 'protractor';
import {BasePage} from "./basePage.po";

/**
 * Class representing generic page.
 * Methods/properties for global elements should go here.
 *
 * @export
 * @class BasePage
 */
export class pluginPage extends BasePage {

    getNoEthereumSection() {
        return element(by.css('.no-ethereum-section'));
    }

    acceptButton() {
        return element(by.xpath(".//button[text()='Accept']"));
    }

    termsOfUse() {
        return element(by.linkText("Terms of Use"));
    }

    password() {
        return element(by.id("password-box"));
    }

    confirmPassword() {
        return element(by.id("password-box-confirm"));
    }

    metamaskCreateButton() {
        return element(by.xpath(".//button[text()='Create']"));
    }

    copySafeButton() {
        return element(by.xpath("//button[contains(text(),'copied it somewhere safe')]"));
    }

    accountName() {
        return element(by.name("edit"));
    }

    successText() {
        return element(by.css(".text-success"));
    }

    navigateTo(relativeUrl: string) {
        browser.get(browser.params.baseUrl + relativeUrl);
    }
}
