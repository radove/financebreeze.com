import { createMuiTheme } from '@material-ui/core/styles'

export const Theme = createMuiTheme({
    palette: {
        primary: {
            main: '#f2f6f5',
        },
        secondary: {
            main: '#af0404',
        },
    },
    overrides: {
        MuiDrawer: {
            paper: {
                backgroundColor: '#142033',
            },
        },
        MuiDivider: {
            root: {
                backgroundColor: '#404854',
            },
        },
        MuiListItemIcon: {
            root: {
                color: 'inherit',
                marginRight: 0,
                '& svg': {
                    fontSize: 20,
                },
            },
        },
    },

    typography: {
        fontSize: 14,
        fontFamily: ['"Titillium Web"', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"'].join(','),
    },
})
