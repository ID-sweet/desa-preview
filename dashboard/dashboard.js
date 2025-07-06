// User dropdown toggle
const userDropdown = document.querySelector('.user-dropdown');
const userDropdownToggle = document.getElementById('user-dropdown-toggle');
const userDropdownMenu = document.getElementById('user-dropdown-menu');

function toggleUserDropdown() {
  userDropdown.classList.toggle('active');
}

userDropdownToggle.addEventListener('click', function(e) {
  e.stopPropagation();
  toggleUserDropdown();
});

// Tutup dropdown jika klik di luar
document.addEventListener('click', function(e) {
  if (!userDropdown.contains(e.target)) {
    userDropdown.classList.remove('active');
  }
});

// Sidebar hamburger toggle
const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebar-toggle');

function toggleSidebar() {
  if (window.innerWidth <= 700) {
    // Mobile: buka/tutup sidebar
    sidebar.classList.toggle('open');
    sidebarToggle.classList.toggle('active');
  } else {
    // Desktop: collapse/expand sidebar
    sidebar.classList.toggle('collapsed');
    sidebarToggle.classList.toggle('active');
  }
  
  // Ganti ikon hamburger
  if (sidebarToggle.classList.contains('active')) {
    sidebarToggle.innerHTML = '<i class="fas fa-times"></i>';
  } else {
    sidebarToggle.innerHTML = '<i class="fas fa-bars"></i>';
  }
}

sidebarToggle.addEventListener('click', toggleSidebar);

// Expand/collapse sidebar menu (3 tingkatan)
document.querySelectorAll('.sidebar-link.has-sub').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const group = this.parentElement;
    group.classList.toggle('open');
    // Tutup submenu lain di level yang sama
    Array.from(group.parentElement.children).forEach(sibling => {
      if (sibling !== group && sibling.classList.contains('sidebar-group')) {
        sibling.classList.remove('open');
      }
    });
  });
});

// Tutup sidebar jika klik di luar (mobile)
document.querySelector('.sidebar-overlay').addEventListener('click', function() {
  if (window.innerWidth <= 900) {
    sidebar.classList.remove('open');
    sidebarToggle.classList.remove('active');
    sidebarToggle.innerHTML = '<i class="fas fa-bars"></i>';
  }
});

// Responsive: reset sidebar/hamburger saat resize
window.addEventListener('resize', function() {
  if (window.innerWidth > 700) {
    // Desktop: hapus class 'open' (mobile), pertahankan 'collapsed' jika ada
    sidebar.classList.remove('open');
    sidebarToggle.classList.remove('active');
    sidebarToggle.innerHTML = '<i class="fas fa-bars"></i>';
  } else {
    // Mobile: hapus class 'collapsed' (desktop)
    sidebar.classList.remove('collapsed');
    sidebarToggle.classList.remove('active');
    sidebarToggle.innerHTML = '<i class="fas fa-bars"></i>';
  }
});

// Highlight active sidebar link
const links = document.querySelectorAll('.sidebar-link');
links.forEach(link => {
  link.addEventListener('click', function() {
    links.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});

// Initialize DataTables
$(document).ready(function() {
  $('#dashboardTable').DataTable({
    responsive: true,
    dom: 'Bfrtip',
    buttons: [
      {
        extend: 'copy',
        text: '<i class="fas fa-copy"></i> Salin',
        className: 'btn btn-secondary'
      },
      {
        extend: 'csv',
        text: '<i class="fas fa-file-csv"></i> CSV',
        className: 'btn btn-secondary'
      },
      {
        extend: 'excel',
        text: '<i class="fas fa-file-excel"></i> Excel',
        className: 'btn btn-secondary'
      },
      {
        extend: 'pdf',
        text: '<i class="fas fa-file-pdf"></i> PDF',
        className: 'btn btn-secondary'
      },
      {
        extend: 'print',
        text: '<i class="fas fa-print"></i> Cetak',
        className: 'btn btn-secondary'
      }
    ],
    language: {
      url: '//cdn.datatables.net/plug-ins/1.13.7/i18n/id.json'
    },
    pageLength: 5,
    lengthMenu: [[5, 10, 25, 50, -1], [5, 10, 25, 50, "Semua"]],
    order: [[0, 'desc']],
    columnDefs: [
      {
        targets: 0,
        width: '50px'
      },
      {
        targets: 4,
        orderable: true,
        searchable: true
      }
    ]
  });
}); 