import Loader from "@/components/shared/Loader";
import GridPostList from "./GridPostList";
import { Models } from "appwrite";

export type SearchResultProps = {
  isSearchFetching: boolean;
  searchedPosts: Models.Document[];
};

export const SearchResults = ({ isSearchFetching, searchedPosts }: SearchResultProps) => {
  if (isSearchFetching) {
    return <Loader />;
  } else if (searchedPosts && searchedPosts.documents.length > 0) {
    return <GridPostList posts={searchedPosts.documents} />;
  } else {
    return (
      <p className="w-full mt-10 text-center text-light-4">No results found</p>
    );
  }
};