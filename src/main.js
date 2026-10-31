import * as slint from "slint-ui";

let ui = slint.loadFile(new URL("..", import.meta.url));
let window = new ui.MainWindow();

await window.run();
