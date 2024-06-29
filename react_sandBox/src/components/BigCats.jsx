

   // STATES & VARIABLES

export const cats = [
    { id: 1, name: 'Cheetah', latinName: 'Acinonyx jubatus'},
    { id: 2, name: 'Cougar', latinName: 'Puma concolor' },
    { id: 3, name: 'Jaguar', latinName: 'Panthera onca' },
    { id: 4, name: 'Leopard', latinName: 'Panthera pardus' },
    { id: 5, name: 'Lion', latinName: 'Panthera leo'},
    { id: 6, name: 'Snow leopard', latinName: 'Panthera uncia'},
    { id: 7, name: 'Tiger', latinName: 'Panthera tigris'},
   ];
   
   const listOfCats = cats.map(cats => <li>{cats}</li>);

  //  const SingleCat = ({cats.id}) {
  //   return(
  //       <li>
  //           <p>{cats.name}<br>
  //           {cats.latinName}</br>
  //           </p>
  //       </li>
  //   )
  //  }

   function getImageUrl(cats) {
    return (
      'https://i.imgur.com/' +
      cats.imageId +
      's.jpg'
    );
  }
  
   // FUNCTIONS



   // RETURN