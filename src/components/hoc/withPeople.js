import React from "react";

const withPeople = WrappedComponent => {
  return class extends React.Component {
    render() {
      const listOfPeople = [
        {
          name: "Cherry Malone"
        },
        {
          name: "Leola Goodman"
        },
        {
          name: "Burt Britt"
        },
        {
          name: "Renee Higgins"
        },
        {
          name: "English Good"
        },
        {
          name: "Alissa Martin"
        },
        {
          name: "Burton Holman"
        },
        {
          name: "Abigail French"
        },
        {
          name: "Kemp Neal"
        },
        {
          name: "Pacheco Knox"
        },
        {
          name: "Huffman West"
        },
        {
          name: "Porter Freeman"
        },
        {
          name: "Sanders Sharp"
        },
        {
          name: "Tammy Sanford"
        },
        {
          name: "Charlotte Avila"
        },
        {
          name: "Rosie Richardson"
        },
        {
          name: "Daisy Watson"
        },
        {
          name: "Elnora Acosta"
        },
        {
          name: "Kennedy Phelps"
        },
        {
          name: "Beck Fuentes"
        },
        {
          name: "Parrish Rosa"
        },
        {
          name: "Andrea Banks"
        },
        {
          name: "Woodard Finley"
        },
        {
          name: "Callie Clemons"
        },
        {
          name: "Charmaine Patterson"
        },
        {
          name: "Hester Pierce"
        },
        {
          name: "Lindsey Beach"
        },
        {
          name: "Terri Wilkerson"
        },
        {
          name: "Terrie Coffey"
        },
        {
          name: "Louella Floyd"
        },
        {
          name: "Regina Mcdonald"
        },
        {
          name: "Jarvis Sargent"
        },
        {
          name: "Joyce Hampton"
        },
        {
          name: "Dorothea Knapp"
        },
        {
          name: "Lea Love"
        },
        {
          name: "Freda Mcfadden"
        },
        {
          name: "Lula Hodge"
        },
        {
          name: "Benson Walls"
        },
        {
          name: "Kathrine Daniels"
        },
        {
          name: "Sara Hines"
        },
        {
          name: "Sellers Anderson"
        },
        {
          name: "Zelma Meyers"
        },
        {
          name: "Carole Johnson"
        },
        {
          name: "Hale Rodgers"
        },
        {
          name: "Hendricks Saunders"
        },
        {
          name: "Angelique Sanders"
        },
        {
          name: "Robin Burch"
        },
        {
          name: "Britt Adkins"
        },
        {
          name: "Juana Gray"
        },
        {
          name: "Edith Hughes"
        },
        {
          name: "Small Sosa"
        },
        {
          name: "Brandie Perry"
        },
        {
          name: "Mary Snider"
        },
        {
          name: "Merle Tillman"
        },
        {
          name: "Morton Bird"
        },
        {
          name: "Latonya Wallace"
        },
        {
          name: "Rhea Ray"
        },
        {
          name: "Sharron Rodriquez"
        },
        {
          name: "Lawson Hogan"
        },
        {
          name: "Rochelle Pittman"
        },
        {
          name: "Nadia Golden"
        },
        {
          name: "Joanne Rose"
        },
        {
          name: "Marcia Whitney"
        },
        {
          name: "Krista Mendoza"
        },
        {
          name: "Nancy Owen"
        },
        {
          name: "Christian Davidson"
        },
        {
          name: "Coleman Berry"
        },
        {
          name: "Spencer Bishop"
        },
        {
          name: "Mccoy Graham"
        },
        {
          name: "Salazar Franks"
        },
        {
          name: "Greta Summers"
        },
        {
          name: "Mercado Ballard"
        },
        {
          name: "Flora Rasmussen"
        },
        {
          name: "Daniels Clayton"
        },
        {
          name: "Sonya Herring"
        },
        {
          name: "Rosetta Hendrix"
        },
        {
          name: "Earlene Benton"
        },
        {
          name: "Mara Christensen"
        },
        {
          name: "Ashley Nguyen"
        },
        {
          name: "Beryl Sampson"
        },
        {
          name: "Reid Henry"
        },
        {
          name: "Donaldson Carson"
        },
        {
          name: "Lindsay Morton"
        },
        {
          name: "Joseph Carrillo"
        },
        {
          name: "Bernadine Rowland"
        },
        {
          name: "Underwood Bond"
        },
        {
          name: "Brigitte Carter"
        },
        {
          name: "Harriet Norris"
        },
        {
          name: "Parker Hernandez"
        },
        {
          name: "Cornelia Jimenez"
        },
        {
          name: "Cherry Hamilton"
        },
        {
          name: "Helga Ramsey"
        },
        {
          name: "Patton Weiss"
        },
        {
          name: "Nelson Wise"
        },
        {
          name: "Katy Schwartz"
        },
        {
          name: "Lesa Carpenter"
        },
        {
          name: "Merritt Oneill"
        },
        {
          name: "Noreen Little"
        },
        {
          name: "Lancaster Walsh"
        },
        {
          name: "Evangeline Woodward"
        }
      ];
      return <WrappedComponent {...this.props} people={listOfPeople} />;
    }
  };
};

export default withPeople;
