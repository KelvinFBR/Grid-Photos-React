import { useEffect, useState } from "react";
import { getPhotos } from "../helpers/fetchPhotos";

export const useFetchPhotos = (valueSearch, pageSearch = 1) => {
  const [photos, setPhotos] = useState([]);
  const [page, setpages] = useState(pageSearch);
  const [totalPhotos, setTotalPhotos] = useState(0);

  const getData = async () => {
    const { dataResults, totalPhotos } = await getPhotos(
      valueSearch,
      pageSearch
    );
    setPhotos(dataResults || []);
    setTotalPhotos(totalPhotos);
  };

  const morePhotos = async () => {
    const { dataResults, totalPhotos } = await getPhotos(valueSearch, page);
    setPhotos([...photos, ...dataResults]);
    setTotalPhotos(totalPhotos);
  };

  useEffect(() => {
    getData();
    setpages(pageSearch);

    return () => {};
  }, [valueSearch]);

  //* paginaciones
  useEffect(() => {
    //* solo ejecuta al hacer peticion a la segunda pagina
    if (page <= 1) return;
    morePhotos();

    return () => {};
  }, [page]);

  return { photos, setPhotos, page, totalPhotos, setpages };
};
