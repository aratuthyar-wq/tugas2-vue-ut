/**
 * data.js — Data Dummy SITTA | Universitas Terbuka
 * Folder: js/data.js
 */

/* ── DATA PENGGUNA ── */
var dataPengguna = [
  {
    id: 1,
    nama: "Rina Wulandari",
    email: "rina@ut.ac.id",
    password: "rina123",
    role: "UPBJJ-UT",
    lokasi: "UPBJJ Jakarta"
  },
  {
    id: 2,
    nama: "Agus Pranoto",
    email: "agus@ut.ac.id",
    password: "agus123",
    role: "UPBJJ-UT",
    lokasi: "UPBJJ Makassar"
  },
  {
    id: 3,
    nama: "Siti Marlina",
    email: "siti@ut.ac.id",
    password: "siti123",
    role: "Puslaba",
    lokasi: "Pusat"
  },
  {
    id: 4,
    nama: "Doni Setiawan",
    email: "doni@ut.ac.id",
    password: "doni123",
    role: "Fakultas",
    lokasi: "FISIP"
  },
  {
    id: 5,
    nama: "Admin SITTA",
    email: "admin@ut.ac.id",
    password: "admin123",
    role: "Administrator",
    lokasi: "Pusat"
  }
];

/* ── DATA BAHAN AJAR ── */
const dataBahanAjar = [
  { kodeLokasi:'OTMP01', kodeBarang:'SKOM4101', namaBarang:'Pengantar Ilmu Komunikasi',     jenisBarang:'BMP', edisi:2, stok:548 },
  { kodeLokasi:'0SBY02', kodeBarang:'EKMA4310', namaBarang:'Kepemimpinan',                  jenisBarang:'BMP', edisi:1, stok:278 },
  { kodeLokasi:'0JKT08', kodeBarang:'STS14206', namaBarang:'Proses Bisnis',                 jenisBarang:'BMP', edisi:4, stok:420 },
  { kodeLokasi:'0MLG01', kodeBarang:'BIOL4211', namaBarang:'Mikrobiologi Dasar',            jenisBarang:'BMP', edisi:2, stok:165 },
  { kodeLokasi:'0JKT01', kodeBarang:'EKMA4216', namaBarang:'Manajemen Keuangan',           jenisBarang:'BMP', edisi:3, stok:392 },
  { kodeLokasi:'0MDN03', kodeBarang:'PAUD4401', namaBarang:'Perkembangan Anak Usia Dini',   jenisBarang:'BMP', edisi:4, stok:204   },
  { kodeLokasi:'0JKT67', kodeBarang:'MSIM4101', namaBarang:'Pengantar Sistem Informasi',   jenisBarang:'BMP', edisi:1, stok:263 },
  { kodeLokasi:'0SBY19', kodeBarang:'MSIM4301', namaBarang:'Analisis & Perancangan Sistem',jenisBarang:'BMP', edisi:2, stok:134 },
  { kodeLokasi:'OTMP34', kodeBarang:'STSI4209', namaBarang:'Pemrograman Berbasis Web ',    jenisBarang:'BMP', edisi:2, stok:310 },
  { kodeLokasi:'0BDG52', kodeBarang:'STSI4102', namaBarang:'Algoritma dan Pemrograman ',   jenisBarang:'BMP', edisi:3, stok:478 },
  { kodeLokasi:'0MDN76', kodeBarang:'STSI4204', namaBarang:'Analisis dan Visualisasi Data ', jenisBarang:'BMP', edisi:2, stok:156 },
  { kodeLokasi:'0JKT29', kodeBarang:'MKDI4203', namaBarang:'Kewirausahaan di Era Digital ',        jenisBarang:'BMP', edisi:1, stok:43  }
];

/* ── DATA DELIVERY ORDER / TRACKING ── */
var dataTracking = [
  {
    noDO: '2023001234',
    namaPenerima: 'Agus Pranoto',
    alamat: 'Margahayu Raya No. 88, Cimahi, Jawa Barat',
    kodepos: '15159',
    ekspedisi: 'Pos Indonesia',
    tanggalKirim: '25 Agustus 2025',
    jenisPaket: 'Reguler',
    totalPembayaran: 'Rp 180.000',
    isiPaket: ['Pemrograman Berbasis Web (STSI4209)', 'Analisis & Perancangan Sistem (MSIM4301)'],
    statusTerkini: 'Terkirim',
    perjalanan: [
      { tanggal:'26/08/2025', waktu:'20:00:00', kode:'IP3', keterangan:'Selesai Antar. Penerima: Agus Pranoto]' },
      { tanggal:'26/08/2025', waktu:'15:06:12', kode:'IP1', keterangan:'Proses antar ke Cimahi' },
      { tanggal:'26/08/2025', waktu:'12:15:33', kode:'TP1', keterangan:'Tiba di Hub: Kota BANDUNG' },
      { tanggal:'25/08/2025', waktu:'16:30:10', kode:'TP4', keterangan:'Diteruskan ke Kantor Kota Bandung' },
      { tanggal:'25/08/2025', waktu:'14:07:56', kode:'CR1', keterangan:'Tiba di Hub: TANGERANG SELATAN' },
      { tanggal:'25/08/2025', waktu:'10:12:20', kode:'MNF', keterangan:'Penerimaan di Loket: TANGERANG SELATAN. Pengirim: Universitas Terbuka' }
    ]
  },
  {
    noDO: '2023005678',
    namaPenerima: 'Rina Wulandari',
    alamat: 'Jl. Mawar No. 10, Bekasi Timur, Bekasi',
    kodepos: '17114',
    ekspedisi: 'JNE Express',
    tanggalKirim: '28 Agustus 2025',
    jenisPaket: 'Reguler',
    totalPembayaran: 'Rp 120.000',
    isiPaket: ['Kepemimpinan (EKMA4310)', 'Proses Bisnis (STS14206)'],
    statusTerkini: 'Dalam Pengiriman',
    perjalanan: [
      { tanggal:'25/08/2025', waktu:'10:12:20', kode:'TP1', keterangan:'Penerimaan di Loket: TANGERANG SELATAN. Pengirim: Universitas Terbuka' },
      { tanggal:'25/08/2025', waktu:'10:12:20', kode:'TP4', keterangan:'Tiba di Hub: TANGERANG SELATAN' },
      { tanggal:'25/08/2025', waktu:'10:12:20', kode:'CR1', keterangan:'Penerimaan di Loket: TANGERANG SELATAN. Pengirim: Universitas Terbuka' },    
    ]
  }


];

/* ── DATA HISTORI TRANSAKSI ── */
const dataHistoriTransaksi = [
  { id:'TRX-2025-001', tanggal:'28 Agustus 2025', nim:'054591306', nama:'Rina Wulandari',    paket:'EKMA4310, STS14206', jumlah:2, status:'dikirim', noDO:'2023005678' },
  { id:'TRX-2025-002', tanggal:'28 Agustus 2025', nim:'05452104', nama:'Agus Pranoto',      paket:'STSI4209, MSIM4301', jumlah:2, status:'selesai', noDO:'2023001234' },
  { id:'TRX-2025-098', tanggal:'10 September 2025', nim:'05458432', nama:'Siti Marlina',      paket:'PAUD4401',           jumlah:1, status:'selesai', noDO:'2023004879' },
  { id:'TRX-2025-071', tanggal:'20 November 2025', nim:'05459131', nama:'Doni Setiawan',      paket:'SKOM4101, EKMA4310', jumlah:2, status:'selesai', noDO:'2023007101' },
  { id:'TRX-2025-060', tanggal:'10 Oktober 2025', nim:'05459536', nama:'Ratu Thyar Amalia ',  paket:'STSI4102',           jumlah:1, status:'batal',   noDO:'2023006001' }
];

/* ── DATA MONITORING PROGRESS DO ── */
const dataMonitoringDO = [
  { noDO:'2023005678'         , upbjj:'Jakarta',  jumlahModul:2, statusPacking:'Selesai', statusKirim:'Terkirim',        progress:100 },
  { noDO:'2023001234'         , upbjj:'Makassar',  jumlahModul:2, statusPacking:'Selesai', statusKirim:'Dalam Pengiriman', progress:65  },
  { noDO:'2023004879'         , upbjj:'Tangerang',  jumlahModul:1, statusPacking:'Selesai', statusKirim:'Terkirim',        progress:100 },
  { noDO:'2023007101'         , upbjj:'Tangerang',  jumlahModul:2, statusPacking:'Selesai', statusKirim:'Terkirim',        progress:100 },
  { noDO:'2023006001'         , upbjj:'Jakarta', jumlahModul:1, statusPacking:'Batal',   statusKirim:'Dibatalkan',      progress:0   }
];

/* ── DATA REKAP BAHAN AJAR ── */
const dataRekapBahanAjar = [
  { periode:'Jul 2025', totalDO:18, totalModul:42, terkirim:15, proses:3, batal:0 },
  { periode:'Jun 2025', totalDO:24, totalModul:58, terkirim:22, proses:0, batal:2 },
  { periode:'Agt 2025', totalDO:20, totalModul:47, terkirim:19, proses:0, batal:1 },
  { periode:'Sept 2025', totalDO:31, totalModul:75, terkirim:28, proses:0, batal:3 }
];
