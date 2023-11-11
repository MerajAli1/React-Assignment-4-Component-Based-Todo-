import { Box, TextField } from '@mui/material'
import React from 'react'

const Input = ({ onChange, value, id, label, variant, placeholder }) => {
    return (
        <Box>
            <TextField
                id={id}
                label={label}
                variant={variant}
                onChange={onChange}
                value={value}
                placeholder={placeholder} />
        </Box>

    )
}

export default Input