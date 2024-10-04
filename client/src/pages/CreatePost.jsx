import React, { useState } from "react";
import { preview } from "../assets";
import { FormField, Loader } from "../components";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    prompt: "",
    photo: "",
  });
  const [generatingImage, setGeneratingImage] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = () => {};

  return (
    <section className="max-w-7xl mx-auto">
      <div className="text-center">
        <h1 className="font-extrabold text-[35px]">Community Showcase</h1>
        <p className="mt-3 text-gray-400 text-[18px] max-w-[700px] mx-auto">
          Browse through a collection of imaginative and visually stunning
          images generated by DALL-E AI
        </p>
      </div>
      <form className="mt-16 max-w-3xl " onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5"></div>

        <FormField
          labelName="Your Name"
          type="text"
          name="name"
          placeholder="Ram Bahadur"
          value={form?.name}
          handleChange={handleChange}
        />
        <FormField
          labelName="Prompt"
          type="text"
          name="prompt"
          placeholder="A Gen-z guy "
          value={form?.prompt}
          handleChange={handleChange}
          promp
        />
      </form>
    </section>
  );
};

export default CreatePost;
