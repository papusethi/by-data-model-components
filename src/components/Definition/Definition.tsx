import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import React from "react";
import LabelWithField from "../LabelWithField/LabelWithField";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./definition.css";

const Definition: React.FC<{
  fieldsData: object[];
  formData: object;
  handleOnChange: (e: any) => void;
  handleOnDelete: (opt: any) => void;
  handleOnAddChip: (opt: any) => void;
}> = ({
  fieldsData,
  formData,
  handleOnChange,
  handleOnDelete,
  handleOnAddChip,
}) => {
  return (
    <Accordion sx={{ boxShadow: "none", p: 0, m: 0 }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className="accordian__title">Definition</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {fieldsData &&
          fieldsData.map((field: any, index: number) => {
            return (
              <LabelWithField
                key={index}
                {...field}
                handleOnChange={handleOnChange}
                handleOnDelete={handleOnDelete}
                handleOnAddChip={handleOnAddChip}
                formData={formData}
              />
            );
          })}
      </AccordionDetails>
    </Accordion>
  );
};

export default Definition;
