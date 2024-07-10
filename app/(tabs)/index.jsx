import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/Header";

import CategoryBtn from "../../components/CategoryBtn";
import SearchBar from "../../components/SearchBar";
import Listing from "../../components/Listing";
import TopTravelGroupsListing from "../../components/TopTravelGroupsListing";

const Index = () => {
  return (
    <SafeAreaView>
      <Header />
      <SearchBar />
      <CategoryBtn />
      <Listing />
      <TopTravelGroupsListing />
    </SafeAreaView>
  );
};

export default Index;
