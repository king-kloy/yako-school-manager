const remote = require('electron').remote;

var minimize = document.getElementById('minimize');
var maximize = document.getElementById('maximize');
var close = document.getElementById('close');

// minimize application
minimize.addEventListener('click', () => {
    remote.BrowserWindow.getFocusedWindow().minimize();
});

// maximize application
maximize.addEventListener('click', () => {
    remote.BrowserWindow.getFocusedWindow().maximize();
});

// close the application
close.addEventListener('click', () => {
    remote.getCurrentWindow().close();
});