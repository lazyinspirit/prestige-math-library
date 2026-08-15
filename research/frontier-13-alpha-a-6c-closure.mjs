// THE STANDING CHECK: every dep resolves to a home page inside the pair's
// declared requires closure. Not "is the dep published".
import fs from 'node:fs';
import path from 'node:path';
const spec = JSON.parse(fs.readFileSync('research/plan-spec.json','utf8'));
const pages = spec.pages || spec;
const byId = new Map();
for (const p of (Array.isArray(pages)?pages:Object.values(pages))) byId.set(p.id ?? p.slug, p);

// home page of every published item
const home = new Map();
for (const p of byId.values()) for (const it of (p.items||[])) home.set(typeof it==='string'?it:it.id, p.id ?? p.slug);

// run scope
const scoped = new Map(); // id -> {page, batch, kind}
const runPages = new Map();
for (const b of [1,2,3,4,5,6,7]) {
  for (const p of JSON.parse(fs.readFileSync(`research/frontier-13-batch-${b}.pages.json`,'utf8'))) {
    runPages.set(p.id, {batch:b, kind:p.kind});
    for (const it of p.items||[]) { scoped.set(it.id, {page:p.id, batch:b, pageKind:p.kind}); home.set(it.id, p.id); }
  }
}
// pair = A page + its -examples companion
function pairOf(page){ return page.endsWith('-examples') ? page.slice(0,-9) : page; }

// transitive requires closure of a page
function closure(pageId){
  const seen = new Set(); const st=[pageId];
  while(st.length){ const c=st.pop(); if(seen.has(c))continue; seen.add(c);
    const p = byId.get(c); if(!p) continue;
    for (const r of (p.requires||[])) st.push(r);
  }
  return seen;
}
const closureCache = new Map();
function clo(p){ if(!closureCache.has(p)) closureCache.set(p, closure(p)); return closureCache.get(p); }

let out_of_closure=0, cross_pair=0, b_leaf=0, unresolved=0, deps=0, dup=0;
const probs=[];
const seenIds = new Set();
for (const [id, meta] of scoped) {
  if (seenIds.has(id)) { dup++; probs.push(`duplicate id ${id}`); } seenIds.add(id);
  const f = `items/${id}.md`;
  if (!fs.existsSync(f)) { probs.push(`MISSING FILE ${id}`); continue; }
  const t = fs.readFileSync(f,'utf8');
  const fm = t.match(/^---\n([\s\S]*?)\n---\n/)?.[1] ?? '';
  const dm = fm.match(/^deps:\s*(\[[^\]]*\]|\n(?:\s*-\s*.*\n?)*)/m);
  let dl=[];
  if (dm) {
    if (dm[1].trim().startsWith('[')) dl = dm[1].replace(/[\[\]]/g,'').split(',').map(s=>s.trim()).filter(Boolean);
    else dl = [...dm[1].matchAll(/-\s*(\S+)/g)].map(m=>m[1]);
  }
  const myPair = pairOf(meta.page);
  for (const d of dl) {
    deps++;
    if (scoped.has(d)) {
      const dm2 = scoped.get(d);
      if (pairOf(dm2.page) !== myPair) { cross_pair++; probs.push(`CROSS-PAIR ${id} (${meta.page}) -> ${d} (${dm2.page})`); }
      else if (dm2.pageKind === 'B' && meta.pageKind !== 'B') { b_leaf++; probs.push(`B-LEAF ${id} -> ${d}`); }
      else if (dm2.pageKind === 'B' && meta.pageKind === 'B' && dm2.page !== meta.page) { b_leaf++; probs.push(`B-LEAF ${id} -> ${d}`); }
    } else {
      const h = home.get(d);
      if (!h) { unresolved++; probs.push(`UNRESOLVED ${id} -> ${d}`); continue; }
      if (!clo(myPair).has(h)) { out_of_closure++; probs.push(`OUT-OF-CLOSURE ${id} (${meta.page}) -> ${d} homed on ${h}`); }
    }
  }
}
console.log(`items ${scoped.size}  deps ${deps}`);
console.log(`out_of_closure ${out_of_closure}  cross_pair ${cross_pair}  b_leaf ${b_leaf}  unresolved ${unresolved}  duplicate_ids ${dup}`);
if (probs.length) console.log('\n'+probs.slice(0,60).join('\n'));
