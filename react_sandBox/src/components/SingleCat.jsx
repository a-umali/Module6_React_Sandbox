import { BigCats } from "./BigCats";

export const SingleCat = ({ catsData }) => {
    return(
      <>
        <li>
          <div>
            <h3>{catsData.name}</h3>
              <p>{catsData.latinName}
            </p>
            </div>
        </li>
        </>
    );
   };