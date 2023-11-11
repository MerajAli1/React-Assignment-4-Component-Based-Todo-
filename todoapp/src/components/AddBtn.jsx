import React from 'react'
import { Box, Button } from '@mui/material'
const AddBtn = ({ onClick, mt }) => {
    return (
        <Box mt={mt}>
            <Button className="btn-add" onClick={onClick} variant="contained" color="success">
                Add
            </Button>
        </Box>
    )
}

export default AddBtn