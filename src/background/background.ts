chrome.runtime.onMessage.addListener(({ action, itemInfos }, sender, sendResponse) => {
  function saveItemToDatabase(itemDetails, loginInfos) {
    fetch("https://cs-invest-2.vercel.app/api/item/create", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({
        userId: loginInfos.id,
        sellTax: loginInfos.sellTax,
        name: itemDetails.itemName,
        buyPrice: itemDetails.itemValue
      })
    })
      .then(() => sendResponse({ message: "Items salvos no CsInvest com sucesso!" }))
      .catch(() => sendResponse({ message: "Falha ao salvar items no CsInvest" }));
  }

  if (action === 'saveItem') {
    chrome.storage.local.get('login', (result) => {
      const loginInfos = result.login;

      if (!loginInfos) {
        sendResponse({ message: "Falha com login do CsInvest." });
        return;
      }

      if (!itemInfos) {
        sendResponse({ message: "Nenhum item encontrado." });
        return;
      }

      itemInfos.forEach((item) => {
        saveItemToDatabase(item, loginInfos);
      });
    });

    // Retorna true para indicar que a resposta será enviada de forma assíncrona
    return true;
  }
});
