import Typography from "typography";
import typographyTheme from "typography-theme-lincoln";
import theme from "./theme";

typographyTheme.overrideThemeStyles = (_funcs, _options) => ({
    "h2": {
        color: theme.colors.primary,
    },
    "h3": {
        color: theme.colors.secondary,
    },
});

const typography = new Typography(typographyTheme);

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
export const options = typography.options;
