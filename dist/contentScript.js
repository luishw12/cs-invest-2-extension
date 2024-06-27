/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************************************!*\
  !*** ./src/contentScript/contentScript.ts ***!
  \********************************************/
window.onload = () => {
  const interval = setInterval(() => {
    const checkoutBtn = document.querySelector('a.button.is-success.is-large');

    if (checkoutBtn) {
      checkoutBtn.addEventListener('click', () => {
        const itemDetails = getItemDetails();
        chrome.runtime.sendMessage({ action: 'saveItem', itemInfos: itemDetails }, response => {
          alert(response.message)
        });
      });

      clearInterval(interval);
    }
  }, 1000);
}

function getItemDetails() {
  const itemContainers = document.querySelectorAll('.column.is-2-fullhd.is-3-widescreen.is-4-desktop.is-6-tablet.is-12-mobile');
  const itemsDetails = [];

  itemContainers.forEach(itemContainer => {
    const itemNameElement = itemContainer.querySelector('.title.is-size-7.has-text-white-bis');
    const itemName = itemNameElement ? itemNameElement.textContent.trim() : 'Nome do item não encontrado';

    const itemValueElement = itemContainer.querySelector('.title.is-size-6.has-text-white-bis.has-text-centered > span:last-child');
    const itemValue = itemValueElement
      ? parseFloat(itemValueElement.textContent.trim().replace('R$', '').replace('.', '').replace(',', '.'))
      : 'Valor do item não encontrado';

    itemsDetails.push({
      itemName,
      itemValue
    });
  });

  return itemsDetails;
}

/******/ })()
;
//# sourceMappingURL=contentScript.js.map