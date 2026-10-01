// freebuff-static-lab probe script — no framework, ES module.
const $ = (id) => document.getElementById(id);

$("host").textContent = location.host || "local file";
$("dom-check").textContent = "OK " + new Date().toISOString().slice(11, 19);

async function ping() {
  const out = $("ping-out");
  try {
    const res = await fetch("./api/health.json", { cache: "no-store" });
    const data = await res.json();
    $("api-check").textContent = res.ok ? `OK (${data.status})` : `HTTP ${res.status}`;
    $("sha").textContent = data.sha || "local";
    out.textContent = JSON.stringify(data, null, 2);
  } catch (err) {
    $("api-check").textContent = "FAIL";
    out.textContent = String(err);
  }
}

$("ping").addEventListener("click", ping);
$("break-it").addEventListener("click", () => {
  $("ping-out").textContent = "Freebuff: edit app.js, run npm test, push — Pages redeploys.";
});
ping();
