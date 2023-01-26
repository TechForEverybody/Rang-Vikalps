import { IconButton, Snackbar } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import React, { useContext } from 'react'
import {colorContext} from '../../App'

function Color(object) {
    let {updateColorsList}=useContext(colorContext)
    const [open, setOpen] = React.useState(false);
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <>
            <div className='ColorContainer' style={{ background: object.color.toLowerCase() }}
                onClick={() => {
                    setOpen(true);
                    navigator.clipboard.writeText(object.color.toLowerCase())
                    updateColorsList(object.color.toLowerCase())
                }}
            >
                <p>
                    {object.color.toLowerCase()}
                </p>
            </div>
            <Snackbar
                open={open}
                autoHideDuration={1000}
                onClose={handleClose}
                message={object.color.toLowerCase() + " Copied"}
                action={(<React.Fragment>
                    <IconButton
                        size="small"
                        aria-label="close"
                        color="inherit"
                        onClick={handleClose}
                    >
                        <CloseIcon fontSize="small" />
                    </IconButton>
                </React.Fragment>)}
            />
        </>
    )
}

export default Color