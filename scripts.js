window.onload = () => {

    let root = document.documentElement;

    document.getElementById('black').onclick = () => {
        root.style.setProperty('--color-1', '#000000');
        root.style.setProperty('--color-2', '#ffffff');
        root.style.setProperty('--color-3', '#ffffff');
        root.style.setProperty('--color-4', '#ffffff');
        root.style.setProperty('--color-5', '#ffffff');
    };

    document.getElementById('dark').onclick = () => {
        root.style.setProperty('--color-1', '#101000');
        root.style.setProperty('--color-2', '#404040');
        root.style.setProperty('--color-3', '#808080');
        root.style.setProperty('--color-4', '#d8d8d8');
        root.style.setProperty('--color-5', '#ebebeb');
    };

    document.getElementById('light').onclick = () => {
        root.style.setProperty('--color-1', '#ebebeb');
        root.style.setProperty('--color-2', '#d8d8d8');
        root.style.setProperty('--color-3', '#808080');
        root.style.setProperty('--color-4', '#404040');
        root.style.setProperty('--color-5', '#101010');
    };

    document.getElementById('white').onclick = () => {
        root.style.setProperty('--color-1', '#ffffff');
        root.style.setProperty('--color-2', '#000000');
        root.style.setProperty('--color-3', '#000000');
        root.style.setProperty('--color-4', '#000000');
        root.style.setProperty('--color-5', '#000000');
    };

};