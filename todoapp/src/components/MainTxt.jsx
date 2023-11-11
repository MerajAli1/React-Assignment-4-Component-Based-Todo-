import { Typography } from '@mui/material'
import React from 'react'

const MainTxt = ({ value, variant, textAlign, fontWeight, mt, mb }) => {
    return (
        <Typography
            value={value}
            variant={variant}
            mt={mt}
            mb={mb}
            textAlign={textAlign}
            fontWeight={fontWeight}
        >{value}</Typography>
    )
}

export default MainTxt