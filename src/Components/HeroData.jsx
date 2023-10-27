import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { catApiData, deleteCat } from "../Store/Slices/CatSlice";
import ActionButton from "./ActionButton";
import {AiOutlineDownload, AiOutlineEdit, AiOutlineHeart} from 'react-icons/ai'
import {MdDelete} from 'react-icons/md'
import { Link } from "react-router-dom";

function HeroData(props) {
  const { setMudalIsOpen } = props;
  ///
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(catApiData());
  }, []);
  const cats = useSelector((state) => state.cats.cats);
 ///
  const handleDownload = (url) => {
    const link = document.createElement("a");
        link.href = url;
        link.download = "cat_image.jpg";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
  }

  const handleDelete = (id) => {
    dispatch(deleteCat(id))
  }
  const handleLike = async (id) => {
    const obj = cats.find((cat) => cat.id == id)
    console.log(obj)
  }

  return (
    <div className="w-full">
      <button
        onClick={() => setMudalIsOpen(true)}
        className="text-white my-3 md:text-xl bg-purple-800 px-4 md:py-2 py-1 rounded-lg hover:bg-purple-600 transition-colors duration-300 mx-auto block"
      >
        Add New Cat
      </button>
      <div className="max-w-6xl mx-auto gallary">
        {cats.map((cat, index) => (
          <div key={index} className="relative ">
            <div className="group relative ">
              <img
                src={cat.url}
                alt="Cat picture"
                className="w-full pb-2 cursor-pointer"
              />
              <div className="hidden group-hover:flex absolute top-0 left-0 w-full h-full bg-black bg-opacity-80 transition-opacity duration-300 items-center justify-center gallery">
                <ActionButton
                  onClick={() => handleDownload(cat.url)}
                  variant="transition"
                  child={<AiOutlineDownload />}
                />
                <ActionButton
                  onClick={() => handleDelete(cat.id)}
                  variant="red"
                  child={<MdDelete />}
                />
                <ActionButton
                  onClick={() => handleLike(cat.id)}
                  variant="blue"
                  child={<AiOutlineHeart />}
                />
                <Link to={`/preview/${cat.id}`}>
                <ActionButton
                  variant="green"
                  child={<AiOutlineEdit />}
                />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeroData;
