import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Switch from '@mui/material/Switch';
import Collapse from '@mui/material/Collapse';



const label = { inputProps: { 'aria-label': 'Switch demo' } };


export default function AccordionUsage() {
    const [checked, setChecked] = React.useState(true);
  return (
    <Container maxWidth="sm">
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">Tarek</Typography>
        </AccordionSummary>
        <AccordionDetails>
            Is a SharePoint Engineer.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">Mahmoud</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Switch {...label} value={checked} onChange={()=>{setChecked(pre=>!pre)}}defaultChecked/>
        </AccordionDetails>
      </Accordion>
    </div>
    <Collapse in={checked}>
    <div style={{height: "400px", background:"blue" }}>
        <h1>Is a Full-Stack Engineer.</h1>
    </div></Collapse>
    
    </Container>
  );
}