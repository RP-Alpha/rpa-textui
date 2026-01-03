const textui = document.getElementById('textui');
const content = document.getElementById('textui-content');

window.addEventListener('message', function (event) {
    const data = event.data;

    if (data.action === 'show') {
        showTextUI(data.message, data.type);
    } else if (data.action === 'hide') {
        hideTextUI();
    }
});

function showTextUI(msg, type = 'info') {
    // Basic parsing for [Key] to wrap in <kbd>
    // Example: "Press [E] to interact" -> "Press <kbd>E</kbd> to interact"
    const formattedMsg = msg.replace(/\[(.*?)\]/g, '<kbd>$1</kbd>');

    content.innerHTML = formattedMsg;

    textui.className = ''; // Reset classes
    textui.classList.add(`type-${type}`); // Add type class

    // Determine visibility
    textui.classList.remove('hidden');
}

function hideTextUI() {
    textui.classList.add('hidden');
}
