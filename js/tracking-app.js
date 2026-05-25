const { createApp } = Vue;

createApp({
  data() {
    return {
      pengirimanList: [
        { kode: "REG", nama: "JNE Reguler (3-5 hari)" },
        { kode: "EXP", nama: "JNE Ekspres (1-2 hari)" }
      ],
      
      paketList: [
        { kode: "PAKET-UT-001", nama: "PAKET IPS Dasar", isi: ["EKMA4116","EKMA4115"], harga: 120000 },
        { kode: "PAKET-UT-002", nama: "PAKET IPA Dasar", isi: ["BIOL4201","FISIP4001"], harga: 140000 }
      ],
      
      // Data Bawaan Sistem
      tracking: {
        "DO2025-0001": {
          nim: "123456789",
          nama: "Rina Wulandari",
          status: "Dalam Perjalanan",
          ekspedisi: "JNE",
          tanggalKirim: "2025-08-25",
          paket: "PAKET-UT-001",
          total: 120000,
          perjalanan: [
            { waktu: "2025-08-25 10:12:20", keterangan: "Penerimaan di Loket: TANGSEL" },
            { waktu: "2025-08-25 14:07:56", keterangan: "Tiba di Hub: JAKSEL" },
            { waktu: "2025-08-26 08:44:01", keterangan: "Diteruskan ke Kantor Tujuan" }
          ]
        }
      },

      formDO: {
        nim: '',
        nama: '',
        ekspedisi: '',
        paket: '',
        tanggalKirim: new Date().toISOString().split('T')[0]
      },
      selectedPaketDetail: null,
      
      searchQuery: '',
      aktifDO: '',
      statusLacak: 'idle',
      hasilLacak: null
    };
  },

  watch: {
    'formDO.paket'(newKode) {
      const found = this.paketList.find(p => p.kode === newKode);
      if (found) {
        this.selectedPaketDetail = found;
      } else {
        this.selectedPaketDetail = null;
      }
    },
    searchQuery(newQuery) {
      if (!newQuery) {
        this.statusLacak = 'idle';
        this.hasilLacak = null;
        this.aktifDO = '';
      }
    }
  },

  methods: {
    cariDO() {
      const query = this.searchQuery.trim().toUpperCase();
      if (!query) {
        alert("Silakan isi nomor DO terlebih dahulu!");
        return;
      }

      if (this.tracking[query]) {
        this.hasilLacak = this.tracking[query];
        this.aktifDO = query; 
        this.statusLacak = 'found';
      } else {
        this.statusLacak = 'notfound';
      }
    },

    tambahDO() {
      if (!this.formDO.nim || !this.formDO.nama || !this.formDO.ekspedisi || !this.formDO.paket) {
        alert("Lengkapi seluruh bidang formulir bertanda bintang (*)");
        return;
      }

      const tahunBerjalan = new Date(this.formDO.tanggalKirim).getFullYear() || 2025;
      const totalDataSaatIni = Object.keys(this.tracking).length;
      const nomorSelanjutnya = totalDataSaatIni + 1;
      const paddingSequence = String(nomorSelanjutnya).padStart(4, '0');
      const nomorDOGenerated = `DO${tahunBerjalan}-${paddingSequence}`;

      // Menyimpan data DO baru dengan simulasi 3 riwayat perjalanan otomatis
      this.tracking[nomorDOGenerated] = {
        nim: this.formDO.nim,
        nama: this.formDO.nama,
        status: "Dalam Perjalanan",
        ekspedisi: this.formDO.ekspedisi, 
        tanggalKirim: this.formDO.tanggalKirim,
        paket: this.formDO.paket,
        total: this.selectedPaketDetail.harga,
        perjalanan: [
          { 
            waktu: this.formDO.tanggalKirim + " 09:00:00", 
            keterangan: "SITTA-OUTGOING: Paket berhasil dibuat dan disiapkan untuk layanan kurir " + this.formDO.ekspedisi 
          },
          { 
            waktu: this.formDO.tanggalKirim + " 13:15:20", 
            keterangan: "Penerimaan di Loket: UT PUSAT" 
          },
          { 
            waktu: this.formDO.tanggalKirim + " 18:45:00", 
            keterangan: "Tiba di Hub Sortir Utama" 
          }
        ]
      };

      this.formDO.nim = '';
      this.formDO.nama = '';
      this.formDO.ekspedisi = '';
      this.formDO.paket = '';
      
      this.searchQuery = nomorDOGenerated; 
      this.cariDO(); 

      alert(`Sukses! Delivery Order ${nomorDOGenerated} berhasil diterbitkan.`);
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
}).mount('#tracking-app');