
function cekSesi() {
  const sesi = JSON.parse(sessionStorage.getItem('sitta_user') || 'null');
  
  if (!sesi) {
    window.location.href = 'index.html';
    return null;
  }
  
  /* Isi UI topbar jika elemennya tersedia di DOM */
  const elNama   = document.getElementById('user-nama');
  const elAvatar = document.getElementById('avatar-initial');
  
  if (elNama)   elNama.textContent   = sesi.nama;
  if (elAvatar) elAvatar.textContent = sesi.nama.charAt(0).toUpperCase();
  
  return sesi;
}

/* ── LOGOUT ── */
function doLogout() {
  if (confirm('Yakin ingin keluar dari SITTA?')) {
    sessionStorage.removeItem('sitta_user');
    window.location.href = 'index.html';
  }
}

/* ── GREETING BERDASARKAN JAM LOKAL ── */
function getGreeting() {
  const jam = new Date().getHours();
  
  if (jam >= 4  && jam < 11) return { sapa: 'Selamat Pagi',  icon: '🌅', waktu: 'Pagi'  };
  if (jam >= 11 && jam < 15) return { sapa: 'Selamat Siang', icon: '☀️', waktu: 'Siang' };
  if (jam >= 15 && jam < 19) return { sapa: 'Selamat Sore',  icon: '🌤', waktu: 'Sore'  };
  
  return { sapa: 'Selamat Malam', icon: '🌙', waktu: 'Malam' };
}

/* ── MODAL HELPER ── */
function openModal(id) {
  const el = document.getElementById(id);
  if (el) el.classList.add('open');
}

function closeModal(id) {
  const el = document.getElementById(id);
  if (el) el.classList.remove('open');
}

/* Tutup modal saat klik area luar (overlay) atau tekan tombol Escape */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.modal-overlay').forEach(el => {
    el.addEventListener('click', function(e) {
      if (e.target === this) this.classList.remove('open');
    });
  });
  
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay.open').forEach(m => m.classList.remove('open'));
    }
  });
});

/* ── FORMAT ANGKA RIBUAN ── */
function formatAngka(n) {
  return parseInt(n || 0).toLocaleString('id-ID');
}

/* ── FORMAT TANGGAL INDONESIA ── */
function formatTanggal(dateStr) {
  const bulan = ['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agu','Sep','Okt','Nov','Des'];
  const d = new Date(dateStr);
  
  if (isNaN(d.getTime())) return dateStr;
  return d.getDate() + ' ' + bulan[d.getMonth()] + ' ' + d.getFullYear();
}

/* ── BADGE STATUS HTML ── */
function badgeStatus(status) {
  const map = {
    selesai:  { cls: 'badge-selesai',  label: 'Selesai'    },
    dikirim:  { cls: 'badge-dikirim',  label: 'Dikirim'    },
    diproses: { cls: 'badge-diproses', label: 'Diproses'   },
    batal:    { cls: 'badge-batal',    label: 'Dibatalkan' }
  };
  
  const s = map[status] || { cls: 'badge-diproses', label: status };
  return `<span class="badge ${s.cls}">${s.label}</span>`;
}

/* ── RENDER NAVBAR ── */
function renderNavbar(activePage) {
  const nav = document.querySelector('.nav-menu');
  if (!nav) return;

  const menus = [
    { key: 'dashboard', label: 'Dashboard',            icon: 'ti-layout-dashboard', href: 'dashboard.html' },
    { key: 'stok',      label: 'Informasi Bahan Ajar', icon: 'ti-books',            href: 'stok.html'      },
    { key: 'tracking',  label: 'Tracking Pengiriman',  icon: 'ti-truck-delivery',   href: 'tracking.html'  }
  ];

  let html = menus.map(m => `
    <a class="nav-item ${activePage === m.key ? 'active' : ''}" href="${m.href}">
      <i class="ti ${m.icon}"></i> <span>${m.label}</span>
    </a>`).join('');

  html += `
  <div class="nav-dropdown">
    <button class="nav-item ${activePage === 'monitoring' || activePage === 'rekap' ? 'active' : ''}" type="button">
      <i class="ti ti-chart-bar"></i> <span>Laporan</span>
      <span class="nav-caret">▾</span>
    </button>
    <div class="nav-dropdown-menu">
      <a class="nav-dropdown-item" href="dashboard.html?section=monitoring">
        <i class="ti ti-progress" style="margin-right:7px;"></i>
        Monitoring Progress DO Bahan Ajar
      </a>
      <a class="nav-dropdown-item" href="dashboard.html?section=rekap">
        <i class="ti ti-table" style="margin-right:7px;"></i>
        Rekap Bahan Ajar
      </a>
    </div>
  </div>`;
  
  html += `
    <a class="nav-item ${activePage === 'histori' ? 'active' : ''}"
       href="dashboard.html?section=histori">
      <i class="ti ti-history"></i> <span>Histori Transaksi Bahan Ajar</span>
    </a>`;

  nav.innerHTML = html;
}


function bukaSectionDariURL() {
  const params  = new URLSearchParams(window.location.search);
  const section = params.get('section');
  
  if (section && typeof showSection === 'function') {
    showSection(section);
  }
}