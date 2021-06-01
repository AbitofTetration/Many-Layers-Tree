// ************ Themes ************
const themes = {
	1: "aqua",
  2: "gameboy",
  3: "ruby",
  4: "brighter"
};
const theme_names = {
	aqua: "Aqua",
  gameboy: "Game Boy",
  ruby: "Ruby",
  brighter: "White"
};
function changeTheme() {
	colors_theme = colors[player.theme || "default"];
	document.body.style.setProperty('--background', colors_theme.background);
	document.body.style.setProperty('--background_tooltip', colors_theme.tooltip);
	document.body.style.setProperty('--color', colors_theme[3]);
	document.body.style.setProperty('--points', colors_theme[1]);
	document.body.style.setProperty("--locked", colors_theme[2]);
}
function getThemeName() {
	return player.theme ? theme_names[player.theme] : "Default";
}
function beginThemeSwitch(theme) {
  switch(theme) {
    case null: 
		  player.theme = themes[1];
      break;
    case "aqua": 
		  player.theme = themes[2];
      break;
    case "gameboy": 
		  player.theme = themes[3];
      break;
    case "ruby": 
		  player.theme = themes[4];
      break;
    case "brighter": 
		  player.theme = null;
      break;
  }
}
function switchTheme() {
	beginThemeSwitch(player.theme)
	changeTheme();
	resizeCanvas();
}