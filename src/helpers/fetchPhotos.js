export const getPhotos = async (value, page) => {
  try {
    const cleanValue = value.trim();

    if (cleanValue.length > 0) {
      const resp = await fetch(
        `https://api.unsplash.com/search/photos/?per_page=20&page=${page}&query=${cleanValue}`,
        {
          headers: {
            Authorization:
              "Client-ID 45mg65mxKNhWdhdWs57AfdMTWEZQDkql1r0Dn2eYuEQ",
          },
        }
      );

      const data = await resp.json();

      return { dataResults: data.results, totalPhotos: data.total };
    }

    throw new Error("Campo vacio");
  } catch (error) {
    console.warn(error);
  }
};
