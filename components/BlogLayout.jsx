import React from "react";
import { Header } from ".";

const BlogLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default BlogLayout;
