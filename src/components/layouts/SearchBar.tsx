import React from "react";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(() => ({
  position: "relative",
  marginLeft: 0,
  width: "100%",
  height: 40,
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#a1a1aa",
  zIndex: 1,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  border: "1px solid #d4d4d8",
  borderRadius: "10px",
  backgroundColor: "#fff",

  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
  },
  "& .MuiInputBase-input:focus": {
    outline: "1px solid #999",
    borderRadius: "10px",
  },
}));

interface Props {
  setSearchText: (value: string) => void;
}

const SearchBar: React.FC<Props> = ({ setSearchText }) => {
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  return (
    <div className="SearchBar">
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Buscar..."
          inputProps={{ "arial-label": "search" }}
          onChange={handleSearch}
        />
      </Search>
    </div>
  );
};

export default SearchBar;
