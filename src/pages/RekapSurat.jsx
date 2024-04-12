import Sidebar from "../components/Sidebar";
import { useState } from "react";
import FormatDate from "../utils/Date";
import { FaFile, FaFolder, FaSearch } from "react-icons/fa";
import { data } from "../utils/DataRekapSurat";
import { CiFolderOff } from "react-icons/ci";
import { HiFolder } from "react-icons/hi";

const RekapSuratPage = () => {
  const [kategori, setKategori] = useState("Kategori Surat");
  const [tanggal, setTanggal] = useState(FormatDate());
  const Handlerkategori = (e) => {
    setKategori(e.target.value);
  };
  const HandlerTanggal = (e) => {
    setTanggal(e.target.value);
  };
  return (
    <main className="grid grid-cols-5 h-screen gap-8 bg-gray-200">
      {console.log("tanggal :", tanggal)}
      <Sidebar />
      <div className="content col-start-2 col-end-6 w-97/100">
        <div className="navbar pt-5">
          <h2 className="font-bold text-2xl">Rekap Surat</h2>
        </div>
        <div className="rekap mt-8 bg-white h-5/6 rounded-xl drop-shadow-custom p-6 font-sans">
          <div className="search grid grid-flow-col grid-cols-8 gap-8">
            <div className="left col-start-1 col-end-8 grid grid-cols-2 gap-4">
              <div className="kategori">
                <select
                  id="month"
                  onChange={Handlerkategori}
                  className="font-semibold outline-none rounded-lg w-full outline-2 py-2 pl-2 outline-gray-500 text-gray-500 outline-offset-0 text-sm p-1"
                >
                  <option className="font-semibold" value="Kategori Surat">
                    Kategori Surat
                  </option>
                  <option className="font-semibold" value="penting">
                    Penting
                  </option>
                  <option className="font-semibold" value="biasa">
                    Biasa
                  </option>
                  <option className="font-semibold" value="tidak penting">
                    Tidak Penting
                  </option>
                </select>
              </div>
              <div className="tanggal">
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={tanggal}
                  className="font-semibold outline-none rounded-md w-full outline-2 py-2 outline-gray-500 text-gray-500 outline-offset-0 text-sm p-1"
                  onChange={HandlerTanggal}
                />
              </div>
            </div>
            <div className="right bg-secondary rounded-lg text-white grid justify-center content-center">
              <div className="grid grid-flow-col w-10/12 gap-2 items-center">
                <FaSearch size="1rem" />
                <p>Cari</p>
              </div>
            </div>
          </div>
          <div className="tabel mt-7">
            <table className="table-fixed w-full text-center">
              <thead className="text-white font-semibold bg-secondary">
                <tr>
                  <th className="py-2 text-sm">No</th>
                  <th className="py-2 text-sm">Pengirim</th>
                  <th className="py-2 text-sm">Keterangan</th>
                  <th className="py-2 text-sm">Tanggal</th>
                  <th className="py-2 text-sm">Status</th>
                  <th className="py-2 text-sm">Draft</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr
                    key={index}
                    className={`${
                      (index + 1) % 2 == 0 ? "bg-gray-200" : null
                    } `}
                  >
                    <td className="py-3 text-sm">{index + 1}</td>
                    <td className="py-3 text-sm">{item.pengirim}</td>
                    <td className="py-3 text-sm">{item.keterangan}</td>
                    <td className="py-3 text-sm">{item.tanggal}</td>
                    <td className="py-3 text-sm">{item.status}</td>
                    <td className="py-3 text-sm grid justify-items-center">
                      <FaFile className="text-gray-500"/>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RekapSuratPage;
