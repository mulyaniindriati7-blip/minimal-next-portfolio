import React from 'react';

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 font-sans px-4 py-10 md:px-20">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Header / Hero */}
        <header className="text-center space-y-4 py-10 border-b border-slate-800">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent animate-pulse">
            Mulyani Indriati
          </h1>
          <p className="text-lg md:text-xl text-slate-400 font-medium">
            Siswa SMK Teknik Komputer dan Jaringan | Organisatoris
          </p>
        </header>

        {/* Tentang Saya */}
        <section className="bg-slate-800/50 p-6 md:p-8 rounded-2xl border border-slate-700/50 shadow-xl backdrop-blur-sm transition-all hover:border-slate-600">
          <h2 className="text-2xl font-bold text-blue-400 mb-4 border-b border-slate-700 pb-2">
            Tentang Saya
          </h2>
          <p className="text-slate-300 leading-relaxed">
            Halo! Saya Mulyani Indriati, seorang siswi SMK jurusan Teknik Komputer dan Jaringan (TKJ). 
            Selain memiliki ketertarikan di bidang teknologi jaringan dan komputer, saya juga aktif dalam 
            keorganisasian sekolah. Saya terbiasa bekerja dalam tim, mengelola administrasi, serta memiliki 
            jiwa kepemimpinan yang kuat.
          </p>
        </section>

        {/* Keahlian */}
        <section className="bg-slate-800/50 p-6 md:p-8 rounded-2xl border border-slate-700/50 shadow-xl backdrop-blur-sm">
          <h2 className="text-2xl font-bold text-blue-400 mb-6 border-b border-slate-700 pb-2">
            Keahlian
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            <div className="p-4 bg-slate-800 rounded-xl border border-slate-700 hover:border-blue-500 transition-all transform hover:-translate-y-1">
              <h3 className="font-semibold text-blue-300 text-lg">Administrasi & Arsip</h3>
              <p className="text-sm text-slate-400 mt-1">Pengelolaan dokumen, pencatatan rapat, dan surat-menyurat.</p>
            </div>

            <div className="p-4 bg-slate-800 rounded-xl border border-slate-700 hover:border-blue-500 transition-all transform hover:-translate-y-1">
              <h3 className="font-semibold text-blue-300 text-lg">Kepemimpinan</h3>
              <p className="text-sm text-slate-400 mt-1">Manajemen tim, komunikasi publik, dan pengambilan keputusan.</p>
            </div>

            <div className="p-4 bg-slate-800 rounded-xl border border-slate-700 hover:border-blue-500 transition-all transform hover:-translate-y-1">
              <h3 className="font-semibold text-blue-300 text-lg">Dasar TKJ</h3>
              <p className="text-sm text-slate-400 mt-1">Pemahaman dasar jaringan komputer dan perakitan hardware.</p>
            </div>

            <div className="p-4 bg-slate-800 rounded-xl border border-slate-700 hover:border-blue-500 transition-all transform hover:-translate-y-1">
              <h3 className="font-semibold text-blue-300 text-lg">Kerja Sama Tim</h3>
              <p className="text-sm text-slate-400 mt-1">Kolaborasi tinggi dan kedisiplinan dari pengalaman ekstrakurikuler.</p>
            </div>

          </div>
        </section>

        {/* Pengalaman Organisasi */}
        <section className="bg-slate-800/50 p-6 md:p-8 rounded-2xl border border-slate-700/50 shadow-xl backdrop-blur-sm">
          <h2 className="text-2xl font-bold text-blue-400 mb-6 border-b border-slate-700 pb-2">
            Pengalaman & Organisasi
          </h2>
          <div className="space-y-6 border-l-2 border-blue-500 pl-4 md:pl-6">
            
            <div className="relative group">
              <span className="text-xs font-semibold px-2,5 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                Calon Wakil Ketua MPK
              </span>
              <h3 className="text-xl font-bold text-slate-100 mt-2">Majelis Perwakilan Kelas (MPK)</h3>
              <p className="text-sm text-slate-400 mt-1">Mengikuti proses seleksi dan pencalonan kepemimpinan untuk mengarahkan serta mengawasi aspirasi siswa di sekolah.</p>
            </div>

            <div className="relative group">
              <span className="text-xs font-semibold px-2,5 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                Sekretaris
              </span>
              <h3 className="text-xl font-bold text-slate-100 mt-2">Majelis Perwakilan Kelas (MPK)</h3>
              <p className="text-sm text-slate-400 mt-1">Bertanggung jawab atas administrasi organisasi, penyusunan notulensi rapat, dan pengelolaan arsip kegiatan.</p>
            </div>

            <div className="relative group">
              <span className="text-xs font-semibold px-2,5 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                Anggota
              </span>
              <h3 className="text-xl font-bold text-slate-100 mt-2">Ekstrakurikuler Drumband</h3>
              <p className="text-sm text-slate-400 mt-1">Melatih kedisiplinan, fokus, serta kerja sama tim dalam menampilkan pertunjukan musik yang harmonis.</p>
            </div>

          </div>
        </section>

        {/* Kontak */}
        <section className="bg-slate-800/50 p-6 md:p-8 rounded-2xl border border-slate-700/50 shadow-xl backdrop-blur-sm">
          <h2 className="text-2xl font-bold text-blue-400 mb-4 border-b border-slate-700 pb-2">
            Kontak
          </h2>
          <p className="text-slate-300">Jika ingin berdiskusi atau terhubung dengan saya:</p>
          <div className="mt-4 space-y-2 text-slate-300">
            <p>📧 <span className="font-medium text-slate-200">Email:</span> mulyaniindriati7@gmail.com</p>
            <p>🏫 <span className="font-medium text-slate-200">Sekolah:</span> SMK Teknik Komputer dan Jaringan</p>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-slate-500 text-sm py-6">
          <p>&copy; 2026 Mulyani Indriati. Dibuat untuk Tugas Portofolio Digital.</p>
        </footer>

      </div>
    </main>
  );
}
