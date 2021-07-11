alert("hi");

chrome.contextMenus.create({
    "title":"share",
    "contexts":["page"],
    "onclick":MyGenericClick
});

chrome.contextMenus.create({
    "title":"share image",
    "contexts":["image"],
    "onclick":MyImageClick
});

function MyImageClick(info,tab){
    console.log("clicked an image",info,tab);
}

function MyGenericClick(info,tab){
    console.log('clicked on page :',info,tab);
}