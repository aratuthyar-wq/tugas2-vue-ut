const { createApp } = Vue;

createApp({
  data() {
    return {
      upbjjList: ["Jakarta", "Surabaya", "Makassar", "Padang", "Denpasar", "Malang", "Medan", "Bandung"],
      kategoriList: ["MK Wajib", "MK Pilihan", "Praktikum", "Problem-Based"],
      
      stokData: [
        {
          kode: "EKMA4116",
          judul: "Pengantar Manajemen",
          kategori: "MK Wajib",
          upbjj: "Jakarta",
          lokasiRak: "R1-A3",
          harga: 65000,
          qty: 28,
          safety: 20,
          catatanHTML: "<em>Edisi 2024</em>"
        },
        {
          kode: "EKMA4115",
          judul: "Pengantar Akuntansi",
          kategori: "MK Wajib",
          upbjj: "Jakarta",
          lokasiRak: "R1-A4",
          harga: 60000,
          qty: 7,
          safety: 15,
          catatanHTML: "<strong>Cover baru</strong>"
        },
        {
          kode: "BIOL4201",
          judul: "Biologi Umum",
          kategori: "Praktikum",
          upbjj: "Surabaya",
          lokasiRak: "R3-B2",
          harga: 80000,
          qty: 12,
          safety: 10,
          catatanHTML: "Butuh <u>pendingin</u>"
        },
        {
          kode: "FISIP4001",
          judul: "Dasar Sosiologi",
          kategori: "MK Pilihan",
          upbjj: "Makassar",
          lokasiRak: "R2-C1",
          harga: 55000,
          qty: 0,
          safety: 8,
          catatanHTML: "Stok habis"
        },
        {
          kode: "STSI4102",
          judul: "Statistika Dasar",
          kategori: "MK Wajib",
          upbjj: "Denpasar",
          lokasiRak: "R4-A1",
          harga: 75000,
          qty: 0,
          safety: 15,
          catatanHTML: "Stok <b>Habis</b>"
        },
        {
          kode: "SKOM4101",
          judul: "Pengantar Ilmu Komunikasi",
          kategori: "MK Wajib",
          upbjj: "Jakarta",
          lokasiRak: "R3-A1",
          harga: 55000,
          qty: 548,
          safety: 50,
          catatanHTML: "<em>Edisi 2</em>"
        },
        {
          kode: "EKMA4310",
          judul: "Kepemimpinan",
          kategori: "MK Wajib",
          upbjj: "Surabaya",
          lokasiRak: "R2-B3",
          harga: 65000,
          qty: 278,
          safety: 30,
          catatanHTML: "<em>Edisi 1</em>"
        },
        {
          kode: "BIOL4211",
          judul: "Mikrobiologi Dasar",
          kategori: "Praktikum",
          upbjj: "Malang",
          lokasiRak: "R1-C2",
          harga: 85000,
          qty: 165,
          safety: 20,
          catatanHTML: "<em>Edisi 2</em>"
        },
        {
          kode: "EKMA4216",
          judul: "Manajemen Keuangan",
          kategori: "MK Wajib",
          upbjj: "Jakarta",
          lokasiRak: "R2-A1",
          harga: 60000,
          qty: 392,
          safety: 40,
          catatanHTML: "<em>Edisi 3</em>"
        },
        {
          kode: "PAUD4401",
          judul: "Perkembangan Anak Usia Dini",
          kategori: "MK Wajib",
          upbjj: "Medan",
          lokasiRak: "R3-C3",
          harga: 55000,
          qty: 204,
          safety: 25,
          catatanHTML: "<em>Edisi 4</em>"
        },
        
        // --- DATA INI DISEMBUNYIKAN UNTUK SIMULASI TAMBAH MATKUL ---
        {
          kode: "MSIM4101",
          judul: "Pengantar Sistem Informasi",
          kategori: "MK Wajib",
          upbjj: "Jakarta",
          lokasiRak: "R2-C2",
          harga: 65000,
          qty: 263,
          safety: 30,
          catatanHTML: "<em>Edisi 1</em>",
          hidden: true
        },
        // -------------------------------------------------------------
        
        {
          kode: "MSIM4301",
          judul: "Analisis & Perancangan Sistem",
          kategori: "MK Wajib",
          upbjj: "Surabaya",
          lokasiRak: "R2-A2",
          harga: 70000,
          qty: 134,
          safety: 15,
          catatanHTML: "<em>Edisi 2</em>"
        },
        {
          kode: "STSI4209",
          judul: "Pemrograman Berbasis Web",
          kategori: "Praktikum",
          upbjj: "Jakarta",
          lokasiRak: "R3-B1",
          harga: 75000,
          qty: 310,
          safety: 35,
          catatanHTML: "<em>Edisi 2</em>"
        },
        {
          kode: "STSI4102",
          judul: "Algoritma dan Pemrograman",
          kategori: "MK Wajib",
          upbjj: "Bandung",
          lokasiRak: "R3-C4",
          harga: 80000,
          qty: 478,
          safety: 50,
          catatanHTML: "<em>Edisi 3</em>"
        },
        {
          kode: "STSI4204",
          judul: "Analisis dan Visualisasi Data",
          kategori: "Praktikum",
          upbjj: "Medan",
          lokasiRak: "R3-D1",
          harga: 75000,
          qty: 156,
          safety: 20,
          catatanHTML: "<em>Edisi 2</em>"
        },
        {
          kode: "MKDI4203",
          judul: "Kewirausahaan di Era Digital",
          kategori: "MK Pilihan",
          upbjj: "Jakarta",
          lokasiRak: "R4-B2",
          harga: 60000,
          qty: 43,
          safety: 10,
          catatanHTML: "<em>Edisi 1</em>"
        }
      ],
      searchQuery: '',
      filterUtDaerah: '',
      filterKategori: '',
      filterStatusReorder: false,
      sortBy: 'judul',
      sortAsc: true,
      
      
      formBaru: { kode: '', judul: '', kategori: '', upbjj: '', lokasiRak: '', harga: '', qty: '', safety: '', catatanHTML: '' },
      errorForm: '',
      editingIndex: null,
      editingData: null
    };
  },
  computed: {
    filteredStok() {
      let result = this.stokData.filter(i => i.hidden !== true);

      // Filter Pencarian Teks
      if (this.searchQuery) {
        const q = this.searchQuery.toLowerCase();
        result = result.filter(item => 
          item.judul.toLowerCase().includes(q) || item.kode.toLowerCase().includes(q)
        );
      }

      if (this.filterUtDaerah) result = result.filter(i => i.upbjj === this.filterUtDaerah);
      if (this.filterUtDaerah && this.filterKategori) result = result.filter(i => i.kategori === this.filterKategori);
      if (this.filterStatusReorder) result = result.filter(i => i.qty === 0 || i.qty < i.safety);

      result.sort((a, b) => {
        let modifier = this.sortAsc ? 1 : -1;
        if (this.sortBy === 'judul') return a.judul.localeCompare(b.judul) * modifier;
        if (this.sortBy === 'stock') return (a.qty - b.qty) * modifier;
        if (this.sortBy === 'harga') return (a.harga - b.harga) * modifier;
        return 0;
      });

      return result;
    }
  },
  watch: {
    // Watcher 1: Mereset kategori jika UT-Daerah diganti (Dependent Options)
    filterUtDaerah() {
      this.filterKategori = ''; 
    },
    
    // Watcher 2: Memantau form input harga agar tidak bisa diisi angka minus
    'formBaru.harga'(newVal) {
      if (newVal < 0) {
        this.formBaru.harga = 0;
      }
    }
  },
  methods: {
    toggleSort(field) {
      if (this.sortBy === field) {
        this.sortAsc = !this.sortAsc;
      } else {
        this.sortBy = field;
        this.sortAsc = true;
      }
    },
    getSortIcon(field) {
      if (this.sortBy !== field) return 'ti-arrows-sort';
      return this.sortAsc ? 'ti-arrow-up' : 'ti-arrow-down';
    },
    resetFilter() {
      this.searchQuery = '';
      this.filterUtDaerah = '';
      this.filterKategori = '';
      this.filterStatusReorder = false;
      this.sortBy = 'judul';
      this.sortAsc = true;
    },
    tambahStok() {
      // Validasi penambahan pengecekan form harga
      if (!this.formBaru.kode || !this.formBaru.judul || !this.formBaru.kategori || !this.formBaru.upbjj || !this.formBaru.lokasiRak || !this.formBaru.harga) {
        this.errorForm = "Seluruh field bertanda (*) termasuk Harga wajib dilengkapi!";
        return;
      }

      const dataLama = this.stokData.find(i => i.kode === this.formBaru.kode);

      if (dataLama) {
        dataLama.hidden = false;
        dataLama.judul = this.formBaru.judul;
        dataLama.kategori = this.formBaru.kategori;
        dataLama.upbjj = this.formBaru.upbjj;
        dataLama.lokasiRak = this.formBaru.lokasiRak.toUpperCase();
        dataLama.qty = parseInt(this.formBaru.qty) || 0;
        dataLama.safety = parseInt(this.formBaru.safety) || 0;
        dataLama.harga = parseInt(this.formBaru.harga) || 0;
        dataLama.catatanHTML = this.formBaru.catatanHTML || '-';
      } else {
        this.stokData.push({ 
          kode: this.formBaru.kode.toUpperCase(), 
          judul: this.formBaru.judul, 
          kategori: this.formBaru.kategori, 
          upbjj: this.formBaru.upbjj, 
          lokasiRak: this.formBaru.lokasiRak.toUpperCase(),
          qty: parseInt(this.formBaru.qty) || 0, 
          safety: parseInt(this.formBaru.safety) || 0,
          harga: parseInt(this.formBaru.harga) || 0, 
          catatanHTML: this.formBaru.catatanHTML || '<em>Baru ditambahkan</em>'
        });
      }

      this.resetForm();
      alert("Sukses! Data bahan ajar berhasil disimpan.");
    },
    resetForm() {
      // Mengosongkan form harga kembali saat direfresh
      this.formBaru = { kode: '', judul: '', kategori: '', upbjj: '', lokasiRak: '', harga: '', qty: '', safety: '', catatanHTML: '' };
      this.errorForm = '';
    },
    mulaiEdit(index, item) {
      this.editingIndex = index;
      this.editingData = { ...item };
    },
    simpanEdit() {
      if (this.editingIndex === null || !this.editingData) return;

      const itemAsli = this.filteredStok[this.editingIndex];
      const realIndex = this.stokData.findIndex(i => i.kode === itemAsli.kode);
      
      if (realIndex !== -1) {
        this.stokData[realIndex] = { ...this.editingData };
        this.stokData[realIndex].qty = parseInt(this.editingData.qty) || 0;
        this.stokData[realIndex].safety = parseInt(this.editingData.safety) || 0;
        this.stokData[realIndex].harga = parseInt(this.editingData.harga) || 0;
        this.stokData[realIndex].lokasiRak = this.editingData.lokasiRak ? this.editingData.lokasiRak.toUpperCase() : '';
      }
      
      this.editingIndex = null;
      this.editingData = null;
      alert("Data bahan ajar berhasil diperbarui!");
    },
    batalEdit() {
      this.editingIndex = null;
      this.editingData = null;
    },
    hapusStok(kodeItem) {
      const konfirmasi = confirm(`Apakah Anda yakin ingin menghapus bahan ajar dengan kode ${kodeItem}?`);
      
      if (konfirmasi) {
        const indexAsli = this.stokData.findIndex(i => i.kode === kodeItem);
        
        if (indexAsli !== -1) {
          this.stokData.splice(indexAsli, 1);
          alert("Data berhasil dihapus!");
        }
      }
    },
    doLogout() {
      if (typeof doLogout === 'function') {
        doLogout();
      } else {
        sessionStorage.removeItem('sitta_user');
        window.location.href = 'index.html';
      }
    }
  }
}).mount('#stok-app');