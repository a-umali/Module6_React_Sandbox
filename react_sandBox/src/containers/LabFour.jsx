import { BigCats, SingleCat } from "../components/BigCats"


export const LabFour= () => {

//    SORT

const catSorter = () => {[...BigCats].sort()

}

//    FILTER

const catFilter = () => {[...BigCats].filter()

}

    
    return (
        <>
        <div>
        <BigCats />
        <SingleCat />
        </div>
        </>
    );
};