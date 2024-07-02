import { useState } from "react";
import { BigCats } from "../components/BigCats";
import { AddCatsForm } from "../components/AddCatsForm"; // Assuming AddCatsForm is exported from its respective file
import { cats } from "../data/catsData";

export const LabFive = () => {
  const [catData, setCatData] = useState(cats);

  const addCatToList = (newCatData) => {
    if (newCatData.name && newCatData.catLatinName) {
      setCatData([...catData, { name: newCatData.name, catLatinName: newCatData.catLatinName }]);
    }
  };

  return (
    <div style={{ marginTop: "20px", marginLeft: "auto", marginRight: "auto" }}>
      <AddCatsForm data={catData} addCatToList={addCatToList} />
      <BigCats />
    </div>
  );
};