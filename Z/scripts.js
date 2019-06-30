window.onload = () => {

    var linkElement = document.createElement('link');
    linkElement.setAttribute('rel', 'stylesheet');
    linkElement.setAttribute('type', 'text/css');

    var headElement = document.getElementsByTagName('head')[0];

    document.getElementById('black').onclick = () => {
        linkElement.setAttribute('href', '/Z/style.black.css');
        headElement.appendChild(linkElement);
    };

    document.getElementById('dark').onclick = () => {
        linkElement.setAttribute('href', '/Z/style.dark.css');
        headElement.appendChild(linkElement);
    };

    document.getElementById('light').onclick = () => {
        if (headElement.lastChild == linkElement)
            headElement.removeChild(linkElement);
    };

    document.getElementById('white').onclick = () => {
        linkElement.setAttribute('href', '/Z/style.white.css');
        headElement.appendChild(linkElement);
    };

};
