import {Typography} from '@mui/material';
import {useState} from 'react';
import './Role.scss';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import {Checkbox} from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import {Card} from '@mui/material';
import { Button } from '@mui/material';

const Role = (props) => {
  const [open, setOpen] = useState(false);
  console.log(open);
  const privileges = ['Create', 'Read', 'Update', 'Delete'];
  return (
    <div className="role">
      <div
        className="header"
        onClick={() => {
          setOpen(!open);
        }}
      >
        {open ? (
          <ArrowDropDownIcon fontSize="large" />
        ) : (
          <ArrowRightIcon fontSize="large" />
        )}
        <Typography variant="h6">{props.name}</Typography>
      </div>
      <div>
      <Card className="privilege-card" >
          <FormGroup className='form-group' >
            {open
              ? privileges.map((privilege, index) => {
                  return (
                    <FormControlLabel
                     sx={{m:1}}
                      control={<Checkbox  />}
                      label={privilege}
                      id={index}
                    />
                  );
                })
                
              : null}
            {/* <Button
              className="button"
              color="primary"
              size="large"
              variant="contained"
              onClick={() => {
                console.log('hello');
              }}
            >
             Update
            </Button> */}
          </FormGroup>
 
        </Card>
      </div>
    </div>
  );
};

export default Role;
