import React, { useState } from "react";
import { Modal } from "./Modal";
import { Table } from "./Table";
import { ModalEdit } from "./ModalEdit";
export default function Products() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalEditOpen, setModalEditOpen] = useState(false); 
  const [rows, setRows] = useState([
    { page: "12345", description: "Deve", status: "https://deve-bot.com/" },
    { page: "12345", description: "MyShop", status: "http://www.ya.ru/services" },
  ]);
  const [rowToEdit, setRowToEdit] = useState(null);

  const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((_, idx) => idx !== targetIndex));
  };

  const handleEditRow = (idx) => {
    setRowToEdit(idx);
    setModalEditOpen(true); 
  };

  const handleSubmit = (newRow) => {
    setRowToEdit(null);
    setRows(rowToEdit === null ? [...rows, newRow] : rows.map((currRow, idx) => (idx !== rowToEdit ? currRow : newRow)));
    setModalEditOpen(false); 
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-faf9f6">
      <button
  className="w-48 h-9 bg-green-500 text-white my-5 relative flex items-center justify-center mr-[750px] mb-[50px] rounded-md"  
  style={{ fontSize: '12px' }}
  onClick={() => setModalOpen(true)}
>
<span className="ml-[-4px] font-roboto text-xl font-bold" >+</span>
  <span className="mx-2">Создать свой магазин</span> 
</button>
      <h1 className="text-2xl mr-[670px] text-gray-800 font-bold" >Управление магазинами</h1>
      <Table rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />
      {modalOpen && (
        <Modal closeModal={() => setModalOpen(false)} onSubmit={handleSubmit} />
      )}
      {modalEditOpen && (
        <ModalEdit closeModal={() => setModalEditOpen(false)} onSubmit={handleSubmit} defaultValue={rowToEdit !== null && rows[rowToEdit]} />
      )}
      
    </div>
  );
}