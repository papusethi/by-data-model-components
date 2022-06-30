import React, { useState } from "react";
import { Button, ButtonGroup, Stack, IconButton } from "@mui/material";
import DehazeIcon from "@mui/icons-material/Dehaze";
import CodeIcon from "@mui/icons-material/Code";
import SaveIcon from "@mui/icons-material/Save";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";
import Definition from "../Definition/Definition";
import { fieldsData } from "../../constants/fieldsData";
import { IFormData } from "../model/IFormData";
import "./formSection.css";

const FormSection: React.FC<{ apiData: object }> = ({ apiData }) => {
  const initialFormData: any = { ...apiData };
  const [formData, setFormData] = useState<IFormData>(initialFormData);

  const handleOnChange = (e: any) => {
    const { name, value, checked } = e.target;
    let newFormData;

    if (name === "autoCreate") {
      newFormData = { ...formData, [name]: checked };
    } else {
      newFormData = { ...formData, [name]: value };
    }

    setFormData(newFormData);
  };

  const handleSave = () => {
    console.log("Saved", formData);
  };

  const handleReset = () => {
    console.log("Resetting form");
    setFormData(initialFormData);
  };

  const handleOnDelete = (opt: any) => {
    const tempTags = formData.tags.filter((item) => item !== opt);
    const updatedFormData = { ...formData, tags: tempTags };
    setFormData(updatedFormData);
  };

  const handleOnAddChip = (opt: any) => {
    if (formData.tags.includes(opt)) {
      alert("This tag already exist.");
    } else {
      const updatedFormData = { ...formData, tags: [...formData.tags, opt] };
      setFormData(updatedFormData);
    }
  };

  return (
    <div className="formSection">
      <div className="formSection__header">
        <h4 className="formSection__title">Details</h4>

        {/* Middle action buttons */}

        <ButtonGroup
          color="secondary"
          aria-label="outlined secondary button group"
          size="small"
        >
          <Button variant="contained" color="primary" aria-label="DehzeIcon">
            <DehazeIcon />
          </Button>
          <Button variant="outlined" color="primary" aria-label="CodeIcon">
            <CodeIcon />
          </Button>
        </ButtonGroup>

        {/* Form action buttons */}

        <Stack direction="row" spacing={1}>
          <Button
            variant="outlined"
            startIcon={<SaveIcon />}
            size="small"
            onClick={handleSave}
          >
            Save
          </Button>
          <Button
            variant="outlined"
            startIcon={<RestartAltIcon />}
            size="small"
            onClick={handleReset}
          >
            Reset
          </Button>

          <Stack direction="row" spacing={0}>
            <IconButton size="small" aria-label="save">
              <SaveIcon />
            </IconButton>

            <IconButton size="small" aria-label="reset">
              <RestartAltIcon />
            </IconButton>

            <IconButton size="small" aria-label="zoom">
              <ZoomOutMapIcon />
            </IconButton>
          </Stack>
        </Stack>
      </div>
      <div className="formSection__body">
        <Definition
          fieldsData={fieldsData}
          formData={formData}
          handleOnChange={handleOnChange}
          handleOnDelete={handleOnDelete}
          handleOnAddChip={handleOnAddChip}
        />
      </div>
    </div>
  );
};

export default FormSection;
