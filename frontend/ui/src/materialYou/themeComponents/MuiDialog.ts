import { Theme } from '@mui/material'
import { Components } from '@mui/material/styles'

export const MuiDialog: Components<Theme>['MuiDialog'] = {
  styleOverrides: {
    paper: {
      borderRadius: 24,
    },
  },
}
