import Sidebar from "../components/Sidebar";
const BalasanSuratPage = () => {
  return (
    <main className="grid grid-cols-5 h-screen gap-8 bg-gray-200">
      <Sidebar />
      <div className="content col-start-2 col-end-6 w-97/100">
        <div className="navbar pt-5">
          <h2 className="font-bold text-2xl">Surat Balasan</h2>
        </div>
        <div className="rekap mt-8 bg-white h-4/5 rounded-lg drop-shadow-custom"></div>
      </div>
    </main>
  );
};

export default BalasanSuratPage;
