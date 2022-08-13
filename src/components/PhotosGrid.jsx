import { useFetchPhotos } from "../hooks/useFetchPhotos";
import { motion } from "framer-motion";

const PhotosGrid = ({ searchValue }) => {
  const { photos, page, setpages, totalPhotos } = useFetchPhotos(searchValue);

  const open = (url) => {
    window.open(url);
  };

  const morePhotos = () => {
    setpages(page + 1);
    console.log("more Photos");
  };

  return (
    <article className="container">
      {/* create cards */}
      {photos.map((photo) => (
        <motion.div
          initial={{ scale: 0.4, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.05, ease: "backIn" }}
          whileHover={{ scale: 1.02 }}
          className="card"
          key={photo.id}
          onClick={() => open(photo.links.html)}
        >
          <div className="img-container">
            <img className="img" src={photo.urls.regular} alt="photos" />
          </div>
          {}
          <p className="description">{photo.description || searchValue}</p>
        </motion.div>
      ))}

      {/* No results */}
      {photos.length <= 0 ? (
        <h2 className="alert">{`No se pudo encontrar resultados de: ${searchValue}`}</h2>
      ) : null}

      {/* see more images */}
      <div className="footer">
        {photos.length > 0 && photos.length < totalPhotos ? (
          <motion.a
            transition={{ duration: 0.15 }}
            whileHover={{ scale: 1.04 }}
            className="See-more"
            onClick={morePhotos}
          >
            See more
          </motion.a>
        ) : null}
        <motion.span className="page">{`${photos.length} / ${totalPhotos}`}</motion.span>
      </div>
    </article>
  );
};

export default PhotosGrid;
