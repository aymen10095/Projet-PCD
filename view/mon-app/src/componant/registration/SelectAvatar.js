import * as React from 'react';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import av1 from '../../images/avatar/avatar1.jpg';
import av2 from '../../images/avatar/avatar2.jpg';
import av3 from '../../images/avatar/avatar3.jpg';
import av4 from '../../images/avatar/avatar4.jpg';
import av0 from '../../images/avatar/avatar0.jpg';

const emails = [av0,av1,av2,av3,av4];

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value: string) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>choose one</DialogTitle>
      <List sx={{ pt: 0 }}>
        {emails.map((email) => (
          <ListItem button onClick={() => handleListItemClick(email)} key={email}>
            <ListItemAvatar>
              <img src={email} width="200" height="200" ></img>
            </ListItemAvatar>
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}

export default function SelectAvatar({setavatar}) {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState (emails[0]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: File) => {
    setOpen(false);
    setSelectedValue(value);
    setavatar(selectedValue);
  };

  return (
    <div>
      <Typography variant="subtitle1" component="div">
        Selected:<img src={selectedValue} className="registration-image"></img> 
      </Typography>
      <br />
      <Button variant="outlined" onClick={handleClickOpen}>
      choose your avatar
      </Button>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}
