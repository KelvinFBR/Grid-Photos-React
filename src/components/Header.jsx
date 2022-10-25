import { Formik, Form, Field } from "formik";

export const Header = ({ onNewValueSearch }) => {
  const getDataPhotos = ({ search }) => {
    // go top page
    window.scrollTo(0, 0);

    onNewValueSearch(search);
  };

  return (
    <header className="header__container">
      <Formik initialValues={{ search: "" }} onSubmit={getDataPhotos}>
        <Form autoComplete="off">
          <Field name="search" placeholder="Search images" />
        </Form>
      </Formik>
    </header>
  );
};
