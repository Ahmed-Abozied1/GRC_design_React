import React from "react";
import Artical from "../../components/artical/Artical";
import "./blog.css";
import { blog1, blog2, blog3, blog4, blog5 } from "./imports";
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
          <Artical
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            date="Sep 26,2023"
            imgUrl={blog1}
          />
        </div>
        <div className="gpt3__blog__container_groupB">
          <Artical
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            date="Sep 26,2023"
            imgUrl={blog2}
          />
          <Artical
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            date="Sep 26,2023"
            imgUrl={blog3}
          />
          <Artical
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            date="Sep 26,2023"
            imgUrl={blog4}
          />
          <Artical
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            date="Sep 26,2023"
            imgUrl={blog5}
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
