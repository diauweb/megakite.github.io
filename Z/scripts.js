window.onload = () => {

    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';

    document.getElementById('black').onclick = () => {
        link.href = './Z/style.black.css';
        document.head.appendChild(link);
    };

    document.getElementById('dark').onclick = () => {
        link.href = './Z/style.dark.css';
        document.head.appendChild(link);
    };

    document.getElementById('light').onclick = () => {
        if (document.head.children.length > 4)
            document.head.removeChild(link);
    };

    document.getElementById('white').onclick = () => {
        link.href = './Z/style.white.css';
        document.head.appendChild(link);
    };

};
