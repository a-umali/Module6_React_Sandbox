
   // STATES & VARIABLES

const BigCats = () => {

const cats = [
    { id: 1, name: 'Cheetah', latinName: 'Acinonyx jubatus'},
    { id: 2, name: 'Cougar', latinName: 'Puma concolor' },
    { id: 3, name: 'Jaguar', latinName: 'Panthera onca' },
    { id: 4, name: 'Leopard', latinName: 'Panthera pardus' },
    { id: 5, name: 'Lion', latinName: 'Panthera leo'},
    { id: 6, name: 'Snow leopard', latinName: 'Panthera uncia'},
    { id: 7, name: 'Tiger', latinName: 'Panthera tigris'},
   ];
   
   console.log("filtered data", filteredCats);
   console.log("original data", cats);

   const listOfCats = () => {
    return cats.map((cat) => <SingleCat catData={cat} />);
   };
   
   

   const SingleCat = ({ catData }) => {
    return(
      <>
        <li>
          <div>
            <h3>{cats.name}</h3>
              <p>{cats.latinName}
            </p>
            </div>
        </li>
        </>
    );
   };
  };

  //  function getImageUrl(cats) {
  //   return (
  //     'https://i.imgur.com/' +
  //     cats.imageId +
  //     's.jpg'
  //   );
  // };


  export { BigCats, SingleCat};
