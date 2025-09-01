// CONFIG — edit these numbers manually when you update
const CONFIG = {
  SOCIAL_LINK: "https://www.youtube.com/@Francisco_Monroy?sub_confirmation=1",
  START_DATE:  "2025-08-23",   // YYYY-MM-DD
  DURATION_DAYS: 365,
  MRR_CURRENT: 27,
  MRR_TARGET: 3000,
  TOTAL_REVENUE: 139,
  SAVINGS_LEFT: 15000 + 2249.23,
  TOTAL_DEBT: 88881.43,
  MONTHLY_EXPENSES: 1200
};

// Helpers
const $ = (id)=>document.getElementById(id);
const money = (n)=> `$${Number(n).toLocaleString()}`;

// Social
const social = document.getElementById("socialLink");
if (social) social.href = CONFIG.SOCIAL_LINK;

// Countdown
const start = new Date(CONFIG.START_DATE + "T00:00:00");
const end   = new Date(start.getTime() + CONFIG.DURATION_DAYS*24*60*60*1000);
const now   = new Date();
const days  = Math.max(0, Math.ceil((end - now) / (1000*60*60*24)));
$("daysLeft").textContent = days.toLocaleString();
$("startLabel").textContent = "Start: " + start.toLocaleDateString();
$("endLabel").textContent   = "End: "   + end.toLocaleDateString();

// Metrics
const ratio = Math.min(1, Math.max(0, CONFIG.MRR_CURRENT / CONFIG.MRR_TARGET));
document.getElementById("mrrBar").style.width = (ratio*100).toFixed(1) + "%";
document.querySelector(".progress").setAttribute("aria-valuenow", String(CONFIG.MRR_CURRENT));

document.getElementById("mrrValue").textContent      = `${money(CONFIG.MRR_CURRENT)} / ${money(CONFIG.MRR_TARGET)} MRR`;
document.getElementById("revenueValue").textContent  = money(CONFIG.TOTAL_REVENUE);
document.getElementById("savingsValue").textContent  = money(CONFIG.SAVINGS_LEFT);
document.getElementById("debtValue").textContent     = money(CONFIG.TOTAL_DEBT);
document.getElementById("expensesValue").textContent = money(CONFIG.MONTHLY_EXPENSES);

// Last updated (local time)
const stamp = new Date();
document.getElementById("lastUpdated").textContent = stamp.toLocaleString();
