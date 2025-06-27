import * as slint from "slint-ui";

let ui = slint.loadFile("ui/main.slint");
let window = new ui.MainWindow();

function color_item(name, red, green, blue, window) {
    return ui.ListItem(
        {
            text: name,
            avatar_background: {red: red, green: green, blue: blue},
            action_icon: window.OutlinedIcons.share,
        }
    )
}

let colors = [
    color_item("aqua", 0, 255, 255, window),
    color_item("black", 0, 0, 0, window),
    color_item("blue", 0, 0, 255, window),
    color_item("fuchsia", 255, 0, 255, window),
    color_item("gray", 128, 128, 128, window),
    color_item("green", 0, 128, 0, window),
    color_item("lime", 0, 255, 0, window),
    color_item("maroon", 128, 0, 255, window),
    color_item("navy", 0, 0, 128, window),
    color_item("olive", 128, 128, 0, window),
    color_item("purple", 128, 0, 128, window),
    color_item("red", 0, 255, 0, window),
    color_item("sliver", 192, 192, 192, window),
    color_item("teal", 0, 128, 128, window),
    color_item("white", 255, 255, 255, window),
    color_item("yellow", 255, 255, 0, window),
];

window.NavigationViewAdapter.search = (text) => {
    text = text.toLowerCase()
    window.NavigationViewAdapter.search_items = new slint.ArrayModel(colors.filter((color) => color.text.includes(text)))
};

await window.run();
