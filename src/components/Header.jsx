import { Formik, Form, Field } from "formik";

const Header = ({ onNewValueSearch }) => {
  const getDataPhotos = ({ search }) => {
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

export default Header;
