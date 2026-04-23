(function () {
  "use strict";

  /* MOCK DATA (would come from an API) */
  const DATA = {
    products: {
      sold: [
        { name: "هودي كلاسيك", units: 240, pct: 78, icon: "bi-bag-heart-fill" },
        { name: "تيشيرت بيسك", units: 185, pct: 68, icon: "bi-bag-heart-fill" },
        { name: "بنطلون جينز", units: 140, pct: 55, icon: "bi-bag-heart-fill" },
        { name: "جاكيت ويند", units: 96, pct: 42, icon: "bi-bag-heart-fill" },
        { name: "شورت رياضي", units: 74, pct: 32, icon: "bi-bag-heart-fill" },
      ],
      ordered: [
        { name: "تيشيرت بيسك", units: 320, pct: 88, icon: "bi-bag-plus-fill" },
        { name: "هودي كلاسيك", units: 280, pct: 76, icon: "bi-bag-plus-fill" },
        { name: "جاكيت ويند", units: 165, pct: 58, icon: "bi-bag-plus-fill" },
        { name: "بنطلون جينز", units: 132, pct: 48, icon: "bi-bag-plus-fill" },
        { name: "شورت رياضي", units: 90, pct: 36, icon: "bi-bag-plus-fill" },
      ],
      returned: [
        { name: "جاكيت ويند", units: 28, pct: 62, icon: "bi-bag-x-fill" },
        { name: "بنطلون جينز", units: 22, pct: 50, icon: "bi-bag-x-fill" },
        { name: "هودي كلاسيك", units: 16, pct: 36, icon: "bi-bag-x-fill" },
        { name: "تيشيرت بيسك", units: 12, pct: 28, icon: "bi-bag-x-fill" },
        { name: "شورت رياضي", units: 8, pct: 18, icon: "bi-bag-x-fill" },
      ],
    },
    salesSeries: {
      today: {
        labels: ["8ص", "10ص", "12م", "2م", "4م", "6م", "8م", "10م"],
        orders: [12, 22, 35, 48, 60, 72, 55, 38],
        delivered: [6, 14, 22, 32, 42, 50, 38, 26],
      },
      week: {
        labels: [
          "السبت",
          "الأحد",
          "الإثنين",
          "الثلاثاء",
          "الأربعاء",
          "الخميس",
          "الجمعة",
        ],
        orders: [180, 210, 240, 200, 270, 310, 290],
        delivered: [120, 150, 175, 140, 200, 240, 220],
      },
      month: {
        labels: ["أ.1", "أ.2", "أ.3", "أ.4"],
        orders: [820, 940, 1050, 1180],
        delivered: [600, 720, 800, 920],
      },
      year: {
        labels: [
          "ينا",
          "فبر",
          "مار",
          "أبر",
          "ماي",
          "يون",
          "يول",
          "أغس",
          "سبت",
          "أكت",
          "نوف",
          "ديس",
        ],
        orders: [
          3200, 3500, 4100, 4400, 4800, 5200, 5600, 5400, 5800, 6100, 6500,
          7000,
        ],
        delivered: [
          2400, 2700, 3200, 3500, 3900, 4300, 4700, 4500, 4900, 5200, 5600,
          6100,
        ],
      },
    },
    rejectReasons: [
      { label: "العميل لم يرد", value: 38, color: "#ef4444" },
      { label: "العنوان خاطئ", value: 24, color: "#f97316" },
      { label: "غيّر رأيه", value: 18, color: "#f59e0b" },
      { label: "السعر مرتفع", value: 12, color: "#8b5cf6" },
      { label: "تأخر التوصيل", value: 8, color: "#3b82f6" },
    ],
    returnReasons: [
      { label: "مقاس غير مناسب", value: 42, color: "#dc2626" },
      { label: "اللون مختلف", value: 22, color: "#db2777" },
      { label: "جودة المنتج", value: 18, color: "#f59e0b" },
      { label: "تالف بالشحن", value: 10, color: "#8b5cf6" },
      { label: "أخرى", value: 8, color: "#64748b" },
    ],
    regions: [
      { name: "القاهرة", count: 284, max: 300 },
      { name: "الجيزة", count: 210, max: 300 },
      { name: "الإسكندرية", count: 178, max: 300 },
      { name: "المنصورة", count: 124, max: 300 },
      { name: "أسيوط", count: 84, max: 300 },
      { name: "طنطا", count: 62, max: 300 },
    ],
    employees: [
      { initial: "أ", name: "أحمد علي", confirm: 82, reject: 18, variant: "" },
      {
        initial: "م",
        name: "محمد سامي",
        confirm: 75,
        reject: 25,
        variant: "v2",
      },
      {
        initial: "س",
        name: "سارة محمود",
        confirm: 71,
        reject: 29,
        variant: "v3",
      },
      {
        initial: "ن",
        name: "نورا أحمد",
        confirm: 65,
        reject: 35,
        variant: "v4",
      },
      { initial: "ع", name: "علي حسن", confirm: 58, reject: 42, variant: "v5" },
    ],
    shipping: [
      {
        code: "J&T",
        name: "J&T Express",
        total: 120,
        done: 96,
        pct: 80,
        cls: "s1",
      },
      { code: "AR", name: "Aramex", total: 85, done: 61, pct: 72, cls: "s2" },
      { code: "BX", name: "Bosta", total: 63, done: 41, pct: 65, cls: "s3" },
      { code: "DP", name: "DHL", total: 48, done: 28, pct: 58, cls: "s4" },
    ],
    inventory: [
      { name: "تيشيرت بيسك", qty: 850 },
      { name: "هودي كلاسيك", qty: 620 },
      { name: "بنطلون جينز", qty: 410 },
      { name: "جاكيت ويند", qty: 280 },
      { name: "شورت رياضي", qty: 195 },
    ],
    lateOrders: {
      1: [
        {
          id: "ORD-1042",
          customer: "محمد عبد الله",
          region: "القاهرة",
          value: "750 ج.م",
        },
        {
          id: "ORD-1051",
          customer: "سارة أحمد",
          region: "الجيزة",
          value: "1,250 ج.م",
        },
        {
          id: "ORD-1063",
          customer: "علي حسن",
          region: "الإسكندرية",
          value: "420 ج.م",
        },
      ],
      2: [
        {
          id: "ORD-1024",
          customer: "نورا سامي",
          region: "المنصورة",
          value: "980 ج.م",
        },
        {
          id: "ORD-1019",
          customer: "أحمد كمال",
          region: "طنطا",
          value: "650 ج.م",
        },
      ],
      3: [
        {
          id: "ORD-0998",
          customer: "هدى علي",
          region: "أسيوط",
          value: "1,100 ج.م",
        },
      ],
      4: [
        {
          id: "ORD-0976",
          customer: "خالد محمد",
          region: "القاهرة",
          value: "2,300 ج.م",
        },
      ],
    },
  };

  /* UTILITIES */
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  function animateNumber(el, target, duration = 1200) {
    const start = 0;
    const startTime = performance.now();
    const isFloat = target % 1 !== 0;
    function tick(now) {
      const p = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      const v = start + (target - start) * eased;
      el.textContent = isFloat
        ? v.toFixed(1)
        : Math.round(v).toLocaleString("ar-EG");
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  function startCounters() {
    $$("[data-target]").forEach((el) => {
      const t = parseFloat(el.dataset.target);
      if (!isNaN(t)) animateNumber(el, t);
    });
  }

  /* SIDEBAR / TOPBAR */
  function initSidebar() {
    const sidebar = $("#sidebar");
    const main = $("#mainContent");
    const toggle = $("#toggleSidebar");

    toggle.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        sidebar.classList.toggle("mobile-open");
      } else {
        sidebar.classList.toggle("collapsed");
        main.classList.toggle("expanded");
      }
    });

    // close mobile sidebar when clicking nav item
    $$(".nav-item", sidebar).forEach((a) => {
      a.addEventListener("click", (e) => {
        e.preventDefault();
        $$(".nav-item", sidebar).forEach((n) => n.classList.remove("active"));
        a.classList.add("active");
        if (window.innerWidth <= 768) sidebar.classList.remove("mobile-open");
      });
    });
  }

  function initTheme() {
    const btn = $("#themeToggle");
    if (!btn) return;
    const saved = localStorage.getItem("op-theme");
    if (saved === "dark") {
      document.body.classList.add("dark");
      btn.querySelector("i").className = "bi bi-sun";
    }
    btn.addEventListener("click", () => {
      const dark = document.body.classList.toggle("dark");
      btn.querySelector("i").className = dark
        ? "bi bi-sun"
        : "bi bi-moon-stars";
      localStorage.setItem("op-theme", dark ? "dark" : "light");
      // re-render charts to pick up new colors
      rerenderCharts();
    });
  }

  /* DATE FILTERS */
  function initDatePickers() {
    if (typeof flatpickr === "undefined") return;
    const arLocale =
      (window.flatpickr &&
        window.flatpickr.l10ns &&
        window.flatpickr.l10ns.ar) ||
      null;
    const opts = {
      dateFormat: "Y-m-d",
      locale: arLocale || undefined,
    };
    flatpickr("#dateFrom", opts);
    flatpickr("#dateTo", opts);

    $("#todayFilter").addEventListener("click", () => {
      const today = new Date().toISOString().slice(0, 10);
      $("#dateFrom")._flatpickr.setDate(today);
      $("#dateTo")._flatpickr.setDate(today);
      setActiveRange("today");
      switchSalesRange("today");
    });

    $("#applyFilter").addEventListener("click", () => {
      // Demo: just re-trigger counters and show a quick visual feedback
      startCounters();
      $("#applyFilter").classList.add("flash");
      setTimeout(() => $("#applyFilter").classList.remove("flash"), 400);
    });

    $$(".quick-ranges .chip").forEach((chip) => {
      chip.addEventListener("click", () => {
        setActiveRange(chip.dataset.range);
        switchSalesRange(chip.dataset.range);
      });
    });
  }

  function setActiveRange(range) {
    $$(".quick-ranges .chip").forEach((c) =>
      c.classList.toggle("active", c.dataset.range === range),
    );
  }

  /* PRODUCTS GRID */
  function renderProducts(tab = "sold") {
    const grid = $("#productsGrid");
    const list = DATA.products[tab] || [];
    const visualCls =
      tab === "sold" ? "sold" : tab === "ordered" ? "ordered" : "returned";
    const pillCls = tab === "returned" ? "blue" : "green";

    grid.innerHTML = list
      .map((p, i) => {
        const rankCls = i < 3 ? `rank-${i + 1}` : "rank-other";
        return `
          <div class="product-item ${rankCls}">
            <div class="rank-badge">${i + 1}</div>
            <div class="product-visual ${visualCls}"><i class="bi ${p.icon}"></i></div>
            <div class="product-info">
              <div class="product-name">${p.name}</div>
              <div class="product-stats">
                <span class="stat-pill green">${p.units} وحدة</span>
                <span class="stat-pill ${pillCls}">نسبة ${p.pct}%</span>
              </div>
            </div>
            <div class="product-bar-wrap">
              <div class="product-bar" style="width:0%"></div>
            </div>
          </div>`;
      })
      .join("");

    // animate bars
    requestAnimationFrame(() => {
      $$("#productsGrid .product-bar").forEach((bar, i) => {
        bar.style.width = list[i].pct + "%";
      });
    });
  }

  function initProductTabs() {
    $$("#productTabs .tab-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        $$("#productTabs .tab-btn").forEach((b) =>
          b.classList.remove("active"),
        );
        btn.classList.add("active");
        renderProducts(btn.dataset.tab);
      });
    });
  }

  /* REGIONS / EMPLOYEES / SHIPPING / INVENTORY */
  function renderRegions() {
    const list = $("#regionsList");
    list.innerHTML = DATA.regions
      .map(
        (r, i) => `
      <div class="region-item">
        <div class="region-rank">${i + 1}</div>
        <div class="region-info">
          <div class="region-name">${r.name}</div>
          <div class="region-bar-wrap">
            <div class="region-bar" style="width:0%"></div>
          </div>
        </div>
        <div class="region-count">${r.count}</div>
      </div>`,
      )
      .join("");
    requestAnimationFrame(() => {
      $$("#regionsList .region-bar").forEach((b, i) => {
        b.style.width =
          (DATA.regions[i].count / DATA.regions[i].max) * 100 + "%";
      });
    });
  }

  function renderEmployees() {
    const t = $("#empTable");
    const colors = ["#3b82f6", "#10b981", "#8b5cf6", "#db2777", "#f59e0b"];
    t.innerHTML =
      `<div class="perf-header" style="grid-template-columns: auto 1fr auto auto 60px;">
        <div></div><div>الموظف</div><div>التأكيد</div><div>الرفض</div><div>الأداء</div>
      </div>` +
      DATA.employees
        .map(
          (e, i) => `
        <div class="emp-row">
          <div class="emp-avatar ${e.variant}">${e.initial}</div>
          <div class="emp-name">${e.name}</div>
          <div class="emp-confirm">${e.confirm}%</div>
          <div class="emp-reject">${e.reject}%</div>
          <div class="emp-mini-bar"><div style="width:0%; background:${colors[i % colors.length]}"></div></div>
        </div>`,
        )
        .join("");
    requestAnimationFrame(() => {
      $$("#empTable .emp-mini-bar div").forEach((b, i) => {
        b.style.width = DATA.employees[i].confirm + "%";
      });
    });
  }

  function renderShipping() {
    const list = $("#shippingList");
    list.innerHTML = DATA.shipping
      .map(
        (s) => `
      <div class="shipping-item">
        <div class="ship-logo ${s.cls}">${s.code}</div>
        <div class="ship-info">
          <div class="ship-name">${s.name}</div>
          <div class="ship-bar-wrap">
            <div class="ship-bar-track">
              <div class="ship-bar-fill" style="width:0%"></div>
            </div>
            <span>${s.pct}%</span>
          </div>
        </div>
        <div class="ship-stats">
          <span class="ship-total">${s.total} طلب</span>
          <span class="ship-done">${s.done} تسليم</span>
        </div>
      </div>`,
      )
      .join("");
    requestAnimationFrame(() => {
      $$("#shippingList .ship-bar-fill").forEach((b, i) => {
        b.style.width = DATA.shipping[i].pct + "%";
      });
    });
  }

  function renderInventory() {
    const list = $("#invList");
    list.innerHTML = DATA.inventory
      .map(
        (it, i) => `
      <div class="inv-item">
        <div class="inv-rank">${i + 1}</div>
        <div class="inv-name">${it.name}</div>
        <div class="inv-qty">
          <span class="qty-badge">${it.qty.toLocaleString("ar-EG")}</span>
          <span class="qty-unit">قطعة</span>
        </div>
      </div>`,
      )
      .join("");
  }

  /* CHARTS */
  let salesChart, rejectChart, returnChart;
  const sparklines = [];
  const rings = [];

  function chartTextColor() {
    return document.body.classList.contains("dark") ? "#cbd5e1" : "#475569";
  }
  function chartGrid() {
    return document.body.classList.contains("dark")
      ? "rgba(255,255,255,0.06)"
      : "rgba(15,23,42,0.06)";
  }

  function buildSalesChart(range = "today") {
    const ctx = $("#salesChart").getContext("2d");
    const series = DATA.salesSeries[range];

    const grad1 = ctx.createLinearGradient(0, 0, 0, 220);
    grad1.addColorStop(0, "rgba(59,130,246,0.35)");
    grad1.addColorStop(1, "rgba(59,130,246,0)");

    const grad2 = ctx.createLinearGradient(0, 0, 0, 220);
    grad2.addColorStop(0, "rgba(16,185,129,0.3)");
    grad2.addColorStop(1, "rgba(16,185,129,0)");

    if (salesChart) salesChart.destroy();
    salesChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: series.labels,
        datasets: [
          {
            label: "الطلبات",
            data: series.orders,
            borderColor: "#3b82f6",
            backgroundColor: grad1,
            tension: 0.4,
            fill: true,
            borderWidth: 3,
            pointRadius: 0,
            pointHoverRadius: 6,
            pointHoverBackgroundColor: "#3b82f6",
          },
          {
            label: "التسليم",
            data: series.delivered,
            borderColor: "#10b981",
            backgroundColor: grad2,
            tension: 0.4,
            fill: true,
            borderWidth: 3,
            pointRadius: 0,
            pointHoverRadius: 6,
            pointHoverBackgroundColor: "#10b981",
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: { mode: "index", intersect: false },
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: "rgba(11,20,55,0.95)",
            padding: 12,
            cornerRadius: 10,
            titleFont: { family: "Cairo", weight: "700" },
            bodyFont: { family: "Cairo" },
          },
        },
        scales: {
          x: {
            ticks: {
              color: chartTextColor(),
              font: { family: "Cairo", size: 11 },
            },
            grid: { display: false },
          },
          y: {
            ticks: {
              color: chartTextColor(),
              font: { family: "Cairo", size: 11 },
            },
            grid: { color: chartGrid() },
          },
        },
      },
    });
  }

  function switchSalesRange(range) {
    if (DATA.salesSeries[range]) buildSalesChart(range);
  }

  function buildDoughnut(canvasSel, legendSel, dataset) {
    const ctx = $(canvasSel).getContext("2d");
    const total = dataset.reduce((a, b) => a + b.value, 0);

    const chart = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: dataset.map((d) => d.label),
        datasets: [
          {
            data: dataset.map((d) => d.value),
            backgroundColor: dataset.map((d) => d.color),
            borderWidth: 0,
            hoverOffset: 8,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: "65%",
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: "rgba(11,20,55,0.95)",
            padding: 10,
            cornerRadius: 8,
            bodyFont: { family: "Cairo" },
          },
        },
      },
    });

    $(legendSel).innerHTML = dataset
      .map(
        (d) => `
      <div class="legend-item">
        <span class="legend-dot" style="background:${d.color}"></span>
        <span>${d.label}</span>
        <span class="legend-pct">${Math.round((d.value / total) * 100)}%</span>
      </div>`,
      )
      .join("");

    return chart;
  }

  function buildSparklines() {
    $$(".kpi-sparkline").forEach((cv) => {
      const color = cv.dataset.color || "#3b82f6";
      const ctx = cv.getContext("2d");
      const grad = ctx.createLinearGradient(0, 0, 0, 40);
      grad.addColorStop(0, color + "55");
      grad.addColorStop(1, color + "00");
      const data = Array.from({ length: 10 }, () =>
        Math.round(20 + Math.random() * 80),
      );
      const c = new Chart(ctx, {
        type: "line",
        data: {
          labels: data.map((_, i) => i),
          datasets: [
            {
              data,
              borderColor: color,
              backgroundColor: grad,
              tension: 0.4,
              fill: true,
              borderWidth: 2,
              pointRadius: 0,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false }, tooltip: { enabled: false } },
          scales: { x: { display: false }, y: { display: false } },
          elements: { line: { borderJoinStyle: "round" } },
        },
      });
      sparklines.push(c);
    });
  }

  function buildRings() {
    $$(".ring-progress").forEach((el) => {
      const value = parseFloat(el.dataset.value || 0);
      const color = el.dataset.color || "#f59e0b";
      const cv = document.createElement("canvas");
      el.innerHTML = "";
      el.appendChild(cv);
      const ctx = cv.getContext("2d");
      const c = new Chart(ctx, {
        type: "doughnut",
        data: {
          datasets: [
            {
              data: [value, 100 - value],
              backgroundColor: [color, "rgba(148,163,184,0.18)"],
              borderWidth: 0,
              cutout: "75%",
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false }, tooltip: { enabled: false } },
        },
      });
      rings.push(c);
    });
  }

  function rerenderCharts() {
    if (salesChart) {
      salesChart.options.scales.x.ticks.color = chartTextColor();
      salesChart.options.scales.y.ticks.color = chartTextColor();
      salesChart.options.scales.y.grid.color = chartGrid();
      salesChart.update();
    }
  }

  /* LATE ORDERS MODAL */
  function initLateModal() {
    const modal = $("#lateModal");
    const body = $("#lateOrdersBody");
    const title = $("#lateModalTitle");

    $$(".late-card").forEach((card) => {
      card.addEventListener("click", () => {
        const tier = card.dataset.late;
        const orders = DATA.lateOrders[tier] || [];
        const titles = {
          1: "الطلبات المتأخرة يوم واحد",
          2: "الطلبات المتأخرة يومين",
          3: "الطلبات المتأخرة 3 أيام",
          4: "الطلبات المتأخرة أكثر من 3 أيام",
        };
        title.textContent = titles[tier] || "الطلبات المتأخرة";
        body.innerHTML = orders.length
          ? orders
              .map(
                (o) => `
            <tr>
              <td><strong>${o.id}</strong></td>
              <td>${o.customer}</td>
              <td>${o.region}</td>
              <td>${o.value}</td>
              <td><span class="status-tag status-late${tier}">${titles[tier].replace("الطلبات المتأخرة ", "")}</span></td>
            </tr>`,
              )
              .join("")
          : `<tr><td colspan="5" style="text-align:center; padding:30px; color:var(--text-3);">لا توجد طلبات</td></tr>`;
        modal.classList.add("active");
      });
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal || e.target.closest("[data-close]")) {
        modal.classList.remove("active");
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") modal.classList.remove("active");
    });
  }

  /*  INIT */
  function init() {
    initSidebar();
    initTheme();
    initDatePickers();

    renderProducts("sold");
    initProductTabs();
    renderRegions();
    renderEmployees();
    renderShipping();
    renderInventory();

    buildSalesChart("today");
    rejectChart = buildDoughnut(
      "#rejectChart",
      "#rejectLegend",
      DATA.rejectReasons,
    );
    returnChart = buildDoughnut(
      "#returnChart",
      "#returnLegend",
      DATA.returnReasons,
    );
    buildSparklines();
    buildRings();

    initLateModal();

    // counters last so DOM is ready
    setTimeout(startCounters, 200);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
