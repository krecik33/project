export const getCategories =()=> [
  {
    id: "DAIRY",
    name: "Nabiał",
  },
  {
    id: "FRUITS",
    name: "Owoce",
  },
  {
    id: "VEGETABLE",
    name: "Warzywa",
  },
  {
    id: "MEAT",
    name: "Mięso",
  },
  {
    id: "FISHES",
    name: "Ryby",
  },
  {
    id: "HONEY",
    name: "Miody",
  },
  {
    id: "WINE_AND_SPIRITS",
    name: "Alkohole",
  },
  {
    id: "COOKED_MEATS",
    name: "Wędliny",
  },
  {
    id: "CEREALS",
    name: "Zboża",
  },
  {
    id: "OTHER",
    name: "Pozostałe",
  },
];
export default function handler(req, res) {
  res.status(200).json(getCategories());
}
