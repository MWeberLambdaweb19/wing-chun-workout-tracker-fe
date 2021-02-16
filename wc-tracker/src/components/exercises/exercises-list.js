import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  group1,
  group2,
  group3,
  group4,
  group5
} from "../dummyData/dummyData.js";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
}));

function ExercisesList() {
  return (
    <div>
      <div>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
      </div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Group 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {group1.map((item) => (
              <Typography>{item}</Typography>
            ))}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Group 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {group2.map((item) => (
              <Typography>{item}</Typography>
            ))}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Group 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {group3.map((item) => (
              <Typography>{item}</Typography>
            ))}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Group 4</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {group4.map((item) => (
              <Typography>{item}</Typography>
            ))}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Group 5</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {group5.map((item) => (
              <Typography>{item}</Typography>
            ))}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default ExercisesList;
