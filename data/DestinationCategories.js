import {
  FontAwesome,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";

const DestinationCategories = [
  {
    id: 0,
    name: "All",
    icon: <MaterialCommunityIcons name="beach" size={26} color="black" />,
  },
  {
    id: 1,
    name: "Beach",
    icon: <MaterialCommunityIcons name="beach" size={26} color="black" />,
  },
  {
    id: 2,
    name: "Mountain",
    icon: <MaterialIcons name="terrain" size={27} color="black" />,
  },
  {
    id: 3,
    name: "City",
    icon: <FontAwesome name="building" size={22} color="black" />,
  },
  {
    id: 4,
    name: "Forest",
    icon: <MaterialIcons name="forest" size={24} color="black" />,
  },
  {
    id: 5,
    name: "Desert",
    icon: <MaterialIcons name="wb-sunny" size={24} color="black" />,
  },
];

export default DestinationCategories;
