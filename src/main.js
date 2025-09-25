import * as slint from "slint-ui";
import * as path from "node:path";
import { fileURLToPath } from "node:url";

let ui = slint.loadFile("ui/main.slint", {
    libraryPaths: {
        "material": path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "material-1.0", "material.slint")
    }
});
let window = new ui.MainWindow();

await window.run();
