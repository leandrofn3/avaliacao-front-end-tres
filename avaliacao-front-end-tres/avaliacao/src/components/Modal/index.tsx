import React from "react";
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material'
import { Recado, User } from "../Form";

interface ModalProps {
    open: boolean;
    handleClose: () => void;
    indice: number;
    user: User;
    setUser: React.Dispatch<React.SetStateAction<User | null>>
}

export default function ModalHome({ open, handleClose, indice, user }: ModalProps) {


    const handleConfirm = () => {

        const temp = [...user.recados]

        temp.splice(indice, 1)
        setUser({ ...user, recados: temp })
        handleClose()

    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {`Tem certeza que deseja excluir o recado ID ${indice}?`}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Ao excluir o recado esta ação poderá ser desfeita.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleConfirm}>Confirmo</Button>
                <Button onClick={handleClose} autoFocus>
                    Cancelar
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export { ModalHome }
function setUser(arg0: { recados: Recado[]; name: string; email: string; password: string; }) {
    throw new Error("Function not implemented.");
}

