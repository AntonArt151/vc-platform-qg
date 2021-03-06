/// <reference path="../steps.d.ts" />

Feature('Storefront Product Compare');

Scenario('[Positive] Compare two products', async (I, productCompare, modalDialogFragment) => {
    I.amOnPage('');
    
    I.click(productCompare.firstProduct);
    I.waitForClickable(productCompare.addToCompareListButton);
    I.scrollPageToBottom();
    I.click(productCompare.addToCompareListButton);
    I.click(modalDialogFragment.modalDialog.compareList.continueShoppingButton);

    I.click(productCompare.headPhonesInset);
    
    I.click(productCompare.secondProduct);
    I.click(productCompare.addToCompareListButton);
    I.scrollPageToBottom();
    I.click(modalDialogFragment.modalDialog.compareList.goToCompareListButton);

    I.seeElementInDOM(productCompare.compareToolbar);
});