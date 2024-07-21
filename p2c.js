Hooks.on("renderImagePopout", (html) => {

    // Create a new button element
    const img2ChatBtn = document.createElement("a");

    // Set the class and icon for the button
    img2ChatBtn.className = "send-img2chat";
    img2ChatBtn.innerHTML = '<i class="fa-solid fa-share-from-square"></i> img2Chat';

    // Add an event listener to handle button clicks
    img2ChatBtn.addEventListener("click", () => {

        let dialogContent = `<img style="border:none;" src="${html.object}" >`;

        ChatMessage.create({
            content: dialogContent,
        });
    });

    // Find the existing element with class "window-title"
    const img2ChatBtnAfterEnd = document.querySelector('.image-popout .window-header .window-title');
    // Insert img2ChatBtn after the windowTitleElement
    img2ChatBtnAfterEnd.insertAdjacentElement('afterend', img2ChatBtn);

});