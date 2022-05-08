import {Typography} from '@mui/material';
import {useState} from 'react';
import './NewRole.scss';
import AddBoxIcon from '@mui/icons-material/AddBox';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import {Checkbox} from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import {Card} from '@mui/material';
import {Button} from '@mui/material';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';

const NewRole = () => {
  const privileges = ['Create', 'Read', 'Update', 'Delete'];
  const [open, setOpen] = useState(false);
  return (
    <div className="role">
      <div
        className="header"
        onClick={() => {
          setOpen(!open);
        }}
      >
        {open ? (
          <AddBoxIcon fontSize="large" color="primary" />
        ) : (
          <AddBoxOutlinedIcon fontSize="large" />
        )}
        <Typography variant="h6">New Role</Typography>
      </div>
      <div>
        <Card className="new-role-card">
          <div>
            {open ? (
              <FormControl sx={{m: 2, minWidth: 350}}>
                <TextField label="New Role Name" sx={{bgcolor: 'white'}} />
              </FormControl>
            ) : null}

            <FormGroup className="form-group">
              {open
                ? privileges.map((privilege, index) => {
                    return (
                      <FormControlLabel
                        sx={{m: 1}}
                        control={<Checkbox />}
                        label={privilege}
                        id={index}
                      />
                    );
                  })
                : null}
            </FormGroup>
          </div>
          {open ? (
            <Button
              className="new-role-button"
              color="primary"
              sx={{m: 1}}
              size="large"
              variant="contained"
              onClick={() => {
                console.log('hello');
              }}
            >
              Create Role
            </Button>
          ) : null}
        </Card>
      </div>
    </div>
  );
};
export default NewRole;
