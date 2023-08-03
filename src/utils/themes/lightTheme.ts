import {createTheme} from "@mui/material";

export const lightTheme = createTheme({
    components: {
        MuiPagination: {
            styleOverrides: {
                ul: {
                    justifyContent: 'center'
                }
            }
        }

    }
})