import React from "react";
import Artical from "../../components/artical/Artical";
import "./blog.css";
import {blog1,blog2,blog3,blog4,blog5} from "./imports"
const Blog = () => {
  return (
    <div className="gpt3__blog section__padding">
      <div className="gpt3__blog__heading">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog__container">
        <div className="gpt3__blog__container_groupA">
          <Artical  imgUrl={blog1}/>
        </div>
        <div className="gpt3__blog__container_groupB">
        <Artical/>
        <Artical/>
        <Artical/>
        <Artical/>
        </div>
      </div>
    </div>
  );
};

export default Blog;
