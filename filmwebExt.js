const contextMenuItem = {
    id: "search-on-Filmweb",
    title: "Search on Filmweb",
    contexts: ["selection"]
};
browser.contextMenus.create(contextMenuItem);
browser.contextMenus.onClicked.addListener(function (info) {//TODO nie dziala window.open

    if (info.menuItemId === "search-on-Filmweb") {
        const url = "https://www.filmweb.pl/search?q=" + info.selectionText;

        browser.tabs.create({url});
    }
});
