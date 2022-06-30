import {
  Checkbox,
  Chip,
  FormControl,
  IconButton,
  Input,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import "./labelWithField.css";

const options = ["Development", "Production"];

const AddButton: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <IconButton sx={{ mr: -1 }} onClick={onClick}>
    <AddIcon />
  </IconButton>
);

const LabelWithField: React.FC<{
  fieldName: string;
  label: string;
  type: string;
  placeholder?: string;
  handleOnChange: (e: any) => void;
  handleOnDelete: (opt: any) => void;
  handleOnAddChip: (opt: any) => void;
  formData: any;
}> = ({
  fieldName,
  label,
  type,
  placeholder,
  handleOnChange,
  handleOnDelete,
  handleOnAddChip,
  formData,
}) => {
  /*** Code Starts From This Point ***/

  const [tagInput, setTagInput] = useState("");

  const renderSwitch = (fieldType: string) => {
    switch (fieldType) {
      case "typography":
        return (
          <Typography className="labelWithField__typography">
            {formData[fieldName]}
          </Typography>
        );

      case "text":
        return (
          <Input
            name={fieldName}
            value={formData[fieldName]}
            placeholder={placeholder}
            sx={{ mt: "6px", mb: "6px", minWidth: "100%" }}
            className="labelWithField__textField"
            onChange={handleOnChange}
            // fullWidth={true}
          />
        );

      case "checkbox":
        return (
          <Checkbox
            name={fieldName}
            checked={formData[fieldName]}
            sx={{ pt: "6px", pb: "6px", ml: -1.5 }}
            onChange={handleOnChange}
          />
        );

      case "select":
        return (
          <FormControl
            variant="standard"
            sx={{ pt: "6px", pb: "6px", m: 0, minWidth: "100%" }}
          >
            <Select
              name={fieldName}
              className="labelWithField__textField"
              onChange={handleOnChange}
              defaultValue=""
            >
              {options &&
                options.map((option, index) => (
                  <MenuItem key={option + index} value={option}>
                    {option}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        );

      case "tag":
        return (
          <>
            <Input
              placeholder={placeholder}
              sx={{ mb: "12px", minWidth: "100%" }}
              className="labelWithField__textField"
              value={tagInput}
              onChange={(e: any) => {
                setTagInput(e.target.value);
              }}
              endAdornment={
                <AddButton
                  onClick={() => {
                    handleOnAddChip(tagInput);
                    setTagInput("");
                  }}
                />
              }
            />

            {formData.tags && (
              <Stack direction="row" spacing={1}>
                {formData.tags.map((option: any, index: number) => (
                  <Chip
                    key={option + index}
                    label={option}
                    // onClick={handleClick}
                    onDelete={() => {
                      handleOnDelete(option);
                    }}
                    size="small"
                  />
                ))}
              </Stack>
            )}
          </>
        );

      default:
        return "Please check your type!";
    }
  };

  return (
    <div className="labelWithField">
      <Typography className="labelWithField__left">{label}</Typography>
      <div className="labelWithField__right">{renderSwitch(type)}</div>
    </div>
  );
};

export default LabelWithField;
