:root{
  --bg:#f3f4f6;--card:#fff;--text:#111827;--muted:#6b7280;--line:#d1d5db;
  --accent:#111827;--soft:#e5e7eb;--danger:#b91c1c;--ok:#166534
}
*{box-sizing:border-box}
body{margin:0;background:var(--bg);color:var(--text);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Arial,sans-serif;padding-bottom:env(safe-area-inset-bottom)}
button,input,select,textarea{font:inherit}
button{border:0;border-radius:10px;background:var(--accent);color:#fff;font-weight:700;padding:10px 13px}
button.secondary{background:var(--soft);color:var(--text)}
input,select,textarea{width:100%;border:1px solid var(--line);border-radius:10px;background:#fff;padding:10px}
textarea{resize:vertical}
label{font-size:12px;font-weight:700;display:block}
label input,label select{margin-top:5px}
.app-header{position:sticky;top:0;z-index:30;display:flex;align-items:center;gap:10px;background:rgba(255,255,255,.97);backdrop-filter:blur(12px);border-bottom:1px solid var(--line);padding:10px 12px}
.icon-btn{width:40px;height:40px;padding:0;background:var(--soft);color:var(--text);font-size:22px}
.header-title{min-width:0;flex:1}
.header-title h1{margin:0;font-size:18px}
.header-title p{margin:3px 0 0;color:var(--muted);font-size:10px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.progress-mini{display:flex;align-items:center;gap:6px;font-size:10px;font-weight:800}
.progress-track{width:48px;height:6px;border-radius:999px;background:var(--soft);overflow:hidden}
#progressBar{height:100%;width:0;background:var(--accent);transition:width .25s ease}
main{max-width:980px;margin:auto;padding:12px 12px 92px}
.view{display:none}.view.active{display:block}
.catalog-toolbar{display:grid;grid-template-columns:1fr auto;gap:10px;margin-bottom:12px}
.catalog-list{display:grid;gap:10px}
.catalog-card{background:#fff;border:1px solid var(--line);border-radius:14px;padding:14px}
.catalog-card h3{margin:0 0 5px;font-size:15px}
.catalog-meta{font-size:11px;color:var(--muted);line-height:1.5}
.catalog-actions{display:flex;gap:6px;flex-wrap:wrap;margin-top:10px}
.status{display:inline-flex;padding:4px 8px;border-radius:999px;font-size:10px;font-weight:800;background:#f1f5f9;color:#475569}
.section-card{background:#fff;border:1px solid var(--line);border-radius:15px;padding:14px;margin-bottom:12px}
.section-card h2{font-size:16px;margin:0 0 12px}
.section-head{display:flex;align-items:center;justify-content:space-between;gap:10px}
.grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}
.room-card{border:1px solid var(--line);border-radius:13px;padding:12px;margin-top:10px;background:#fafafa}
.room-head{display:flex;justify-content:space-between;gap:8px;align-items:center;flex-wrap:wrap}
.room-actions{display:flex;gap:6px;flex-wrap:wrap}
.room-actions button{font-size:10px;padding:7px 8px}
.element-row{display:grid;grid-template-columns:1.1fr .8fr 1.5fr auto;gap:8px;margin-top:8px}
.photo-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:8px}
.photo-item img{width:100%;height:110px;object-fit:cover;border-radius:9px}
.signature-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
canvas{width:100%;height:160px;border:1px solid var(--line);border-radius:10px;background:#fff;touch-action:none}
.bottom-bar{position:fixed;left:0;right:0;bottom:0;z-index:35;background:rgba(255,255,255,.98);backdrop-filter:blur(12px);border-top:1px solid var(--line);padding:8px 12px calc(8px + env(safe-area-inset-bottom));display:grid;grid-template-columns:1fr auto auto;gap:8px;align-items:center}
#saveState{font-size:10px;color:var(--muted)}
.modal{position:fixed;inset:0;background:rgba(17,24,39,.68);z-index:80;display:none;align-items:center;justify-content:center;padding:14px}
.modal.open{display:flex}
.modal-card{position:relative;width:min(720px,100%);max-height:90vh;overflow:auto;background:#fff;border-radius:17px;padding:17px}
.modal-close{position:absolute;right:12px;top:12px;width:36px;height:36px;padding:0;border-radius:999px;background:var(--soft);color:var(--text);font-size:22px}
.choice-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.choice{background:#fff;color:var(--text);border:1px solid var(--line)}
.choice.active{background:var(--accent);color:#fff}
.wizard-step{display:none}.wizard-step.active{display:block}
.wizard-actions{display:flex;justify-content:space-between;margin-top:16px}
.chips{display:flex;flex-wrap:wrap;gap:7px}
.chip{background:#fff;color:var(--text);border:1px solid var(--line);font-size:11px}
.chip.active{background:var(--accent);color:#fff}
.room-catalog{display:grid;grid-template-columns:repeat(2,1fr);gap:9px}
.room-template{border:1px solid var(--line);border-radius:12px;padding:12px;background:#fff}
.notice{padding:10px;border-radius:10px;background:#f1f5f9;color:var(--muted);font-size:12px;margin-bottom:10px}
.row{display:flex;gap:8px;flex-wrap:wrap}
.hidden{display:none!important}
@media(max-width:620px){
  .grid,.signature-grid{grid-template-columns:1fr}
  .element-row{grid-template-columns:1fr}
  .catalog-toolbar{grid-template-columns:1fr}
  .bottom-bar{grid-template-columns:1fr 1fr}
  #saveState{grid-column:1/-1}
  .room-catalog{grid-template-columns:1fr}
  .photo-grid{grid-template-columns:repeat(2,1fr)}
}
