import React from "react";

const FormField = ({
  LabelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  prompts,
  handlePrompts,
}) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-900"
        >
          {LabelName}
        </label>
        {prompts && (
          <button
            type="button"
            onClick={handlePrompts}
            className="font-semibold text-xs bg-white py-1 px-2 rounded-[5px] text-black"
          >
            {" "}
            Surprise Me
          </button>
        )}
      </div>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        className="bg-gray-50 border border-gray-300 text-sm text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none block w-full p-3"
      ></input>
    </div>
  );
};

export default FormField;
