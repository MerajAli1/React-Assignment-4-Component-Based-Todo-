import { Box, Button } from '@mui/material'
import React from 'react'

const AllButtons = ({ onClick, mt, gap, value}) => {
    return (
        <Box mt={mt}>
            <Button gap={gap} variant="contained" color="success" onClick={onClick}>
                {value}
            </Button>
        </Box>
    )
}

export default AllButtons