import React, { useState } from "react";
import warningImg from './../components/warning (2).png'

export const Modal = ({ closeModal, onSubmit, defaultValue }) => {
  const [formState, setFormState] = useState(
    defaultValue || {
      page: "",
      description: "",
      status: ""
    }
  );

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formState);
    closeModal();
  };

  return (
    <div
      className="fixed top-0 left-0 z-10 w-full h-full flex items-center justify-center "
      onClick={(e) => {
        if (e.target.className === "modal-container") closeModal();
      }}
    >
      <div className="modal bg-white w-full sm:w-1/2 h-80 p-6">
        <h1 className="flex items-center justify-between text-2xl font-bold mb-4">
          Создать магазин
          <button
            className="px-2 py-1 text-sm border border-black flex items-center justify-center"
            onClick={closeModal}
            style={{ borderRadius: '50%', outline: 'none', width: '24px', height: '24px' }} 
          >
            <span style={{ fontWeight: 'bold' }}>x</span>
          </button>
        </h1>
        <form className="flex flex-col items-start">
          <div className="mb-4 w-full sm:flex items-center">
            <div className="w-full sm:w-1/2 mb-2 sm:mr-2">
              <label htmlFor="description" className="text-sm font-bold mb-1">
                Название
              </label>
              <input
                name="description"
                value={formState.description}
                onChange={handleChange}
                placeholder="Название"
                style={{ fontSize: '12px' }}
                className="w-full h-9 border rounded"
              />
            </div>
            <div className="w-full sm:w-1/2">
              <label htmlFor="status" className="text-sm font-bold mb-1">
                Адрес
              </label>
              <input
                name="status"
                value={formState.status}
                onChange={handleChange}
                placeholder="Адрес"
                style={{ fontSize: '12px' }}
                className="w-full h-9 border rounded"
              />
            </div>
          </div>
          <div className="mb-4 flex items-center">
            <img src={warningImg} alt="" className="mr-2" />
            <p className="text-sm">
              В названии домена разрешены латиница и “-”, запрещается
              использовать словосочетание Work 5. После создания магазина Вы
              сможете прикрутить свой домен (например ivangrozniy.ru).
              Подробнее по ссылке
            </p>
          </div>
        </form>
        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 mt-4">
          <button
            id="btn-otmena"
            className="btn bg-gray-400 text-white w-full sm:w-40 h-9 text-sm rounded-md"
            style={{ fontSize: '14px' }}
            onClick={closeModal}
          >
            Отмена
          </button>
          <button
            type="submit"
            className="btn bg-green-500 text-white w-full sm:w-40 h-9 mt-3 sm:mt-0 text-sm rounded-md"
            style={{ fontSize: '14px' }}
            onClick={handleSubmit}
          >
            Создать
          </button>
        </div>
      </div>
    </div>
  );
};