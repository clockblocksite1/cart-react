import React from "react";
import pencilImg from './../components/карандаш 1 (2).png';
import cencelImg from './../components/cansel (1).png';

export const Table = ({ rows, deleteRow, editRow }) => {
  return (
    <div className="m-12 overflow-x-auto">
      <table className="bg-white w-full sm:w-1/2 p-8 mb-[250px]">
        <thead>
          <tr>
            <th className="p-8">№</th>
            <th className="w-1/2 p-8">Название</th>
            <th className="p-8 relative" style={{ paddingRight: '8rem' }}> 
              Адрес
            </th>
            <th className="p-8 w-1/2" style={{ paddingLeft: '12rem' }}></th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={idx} className="border-b border-gray-300">
              <td className="p-8">{row.page}</td>
              <td className="mb-20 p-8">{row.description}</td>
              <td className="p-8 relative" style={{ paddingLeft: '7rem', paddingRight: '5rem' }}> 
                <span
                  className={`px-2 py-1 rounded ${
                    row.status === "draft" ? "bg-gray-500 text-white" : ""
                  }`}
                >
                  {row.status.charAt(0).toUpperCase() + row.status.slice(1)}
                </span>
              </td>
              <td className="p-4">
                <span className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2">
                  <button
                    id="btn-sumbit"
                    onClick={() => editRow(idx)}
                    className="flex items-center justify-center w-full sm:w-36 h-9 bg-green-500 text-white text-sm rounded-md"
                    style={{ fontSize: '12px' }}
                  >
                    <img src={pencilImg} alt="" className="mr-3 ml-[-3px]" />
                    Редактировать
                  </button>

                  <button
                    className="flex items-center justify-center w-full sm:w-36 h-9 bg-gray-400 text-white text-sm rounded-md mt-2 sm:mt-0"
                    style={{ fontSize: '12px' }}
                    onClick={() => deleteRow(idx)}
                  >
                    <img src={cencelImg} alt="" className="mr-3 ml-[-3px]" />
                    Удалить
                  </button>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}