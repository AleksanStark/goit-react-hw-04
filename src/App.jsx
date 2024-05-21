import { useState, useEffect } from "react";

import getPhotos from "helpers/photos-api";
import {
  Loader,
  SearchBar,
  ImageGallery,
  ErrorMessage,
  LoadMoreBtn,
} from "./components";

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (!inputValue) return;
    async function fetchPhotos() {
      try {
        setLoader(true);
        setError(false);
        const data = await getPhotos(inputValue, page);

        setPhotos((prevPhotos) => [...prevPhotos, ...data]);
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    }

    fetchPhotos();
  }, [inputValue, page]);

  const handleChangeInputValue = (newValue) => {
    setPhotos([]);
    setPage(1);
    setInputValue(newValue);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div>
      <SearchBar onSearch={handleChangeInputValue} />
      {error && <ErrorMessage />}
      {loader && <Loader />}
      <ImageGallery listPhoto={photos} />
      {photos.length > 0 && <LoadMoreBtn onLoad={handleLoadMore} />}
    </div>
  );
};
export default App;
