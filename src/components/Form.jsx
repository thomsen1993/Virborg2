import React from "react";

const Form = ({
  handleSubmit,
  titleFormData,
  authorFormData,
  contentFormData,
  imgFormData,
  handleInputChange,
}) => {
  return (
    <div className="col-span-3 bg-lightGreen/50 rounded-md my-5 p-10">
      <form onSubmit={handleSubmit}>
        {titleFormData && (
          <label htmlFor="title">
            <h3>Titel: </h3>
            <input
              type="text"
              id="title"
              name="title"
              value={titleFormData}
              onChange={handleInputChange}
              className="border p-2 w-full"
            />
          </label>
        )}
        {authorFormData && (
          <label htmlFor="author">
            <h3>Forfatter: </h3>
            <input
              type="text"
              id="author"
              name="author"
              value={authorFormData}
              onChange={handleInputChange}
              className="border p-2 w-full"
            />
          </label>
        )}
        {imgFormData && (
          <label htmlFor="img">
            <input
              type="file"
              name="img"
              id="img"
              onChange={handleInputChange}
              className="my-6"
            />
          </label>
        )}
        <label htmlFor="content" className=" mt-4">
          <h3>Indhold: </h3>
          <textarea
            id="content"
            name="content"
            value={contentFormData}
            onChange={handleInputChange}
            className="border w-full p-2"
          />
        </label>
        <button
          type="submit"
          className="uppercase bg-lightGreen rounded-md hover:bg-darkGreen text-white w-full mt-4 p-2"
        >
          Gem
        </button>
      </form>
    </div>
  );
};

export default Form;
