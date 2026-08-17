#!/usr/bin/env node
// 6c edge inventory — lead Alpha, run frontier-15. Read-only analysis.
import fs from 'node:fs';

const spec = JSON.parse(fs.readFileSync('research/plan-spec.json', 'utf8'));
const pages = spec.pages;
const byPageId = new Map(pages.map(p => [p.id, p]));
const orderOf = new Map(pages.map(p => [p.id, p.order]));

// batch -> page ids
const batchOf = new Map();
const runPages = [];
for (let i = 1; i <= 7; i++) {
  const b = JSON.parse(fs.readFileSync(`research/frontier-15-batch-${i}.pages.json`, 'utf8'));
  const ps = b.pages || b;
  for (const p of ps) { batchOf.set(p.id, String(i)); runPages.push(p.id); }
}

// item -> page. Ground truth = every library page file on disk; spec is the fallback.
const itemPage = new Map();
const pageStatus = new Map();
const pageFile = new Map();
for (const cat of fs.readdirSync('library')) {
  const dir = `library/${cat}`;
  if (!fs.statSync(dir).isDirectory()) continue;
  for (const fn of fs.readdirSync(dir)) {
    if (!fn.endsWith('.md')) continue;
    const t = fs.readFileSync(`${dir}/${fn}`, 'utf8');
    const pid = (t.match(/^page:\s*(\S+)/m) || [])[1] || fn.replace(/\.md$/, '');
    pageStatus.set(pid, (t.match(/^status:\s*(\S+)/m) || [])[1] || 'unknown');
    pageFile.set(pid, `${dir}/${fn}`);
    for (const key of ['items', 'examples']) {
      const m = t.match(new RegExp(`^${key}:\\s*\\[([\\s\\S]*?)\\]`, 'm'))
        || t.match(new RegExp(`^${key}:\\s*\\n((?:\\s+-\\s.*\\n)+)`, 'm'));
      if (!m) continue;
      for (const raw of m[1].split(/\n|,/)) {
        const id = raw.replace(/^\s*-\s*/, '').trim().replace(/^["']|["']$/g, '');
        if (id && !itemPage.has(id)) itemPage.set(id, pid);
      }
    }
  }
}
for (const p of pages) {
  if (!pageStatus.has(p.id)) pageStatus.set(p.id, 'no-page-file');
  for (const it of (p.items || [])) if (!itemPage.has(it.id)) itemPage.set(it.id, p.id);
}

function parseFrontmatter(txt) {
  const m = txt.match(/^---\n([\s\S]*?)\n---\n/);
  if (!m) return {};
  const y = m[1];
  const out = {};
  for (const key of ['deps', 'forward_refs', 'external_refs', 'justified_by', 'aliases']) {
    const re = new RegExp(`^${key}:\\s*\\[([\\s\\S]*?)\\]`, 'm');
    const mm = y.match(re);
    if (mm) out[key] = mm[1].split(',').map(s => s.trim()).filter(Boolean);
    else {
      const re2 = new RegExp(`^${key}:\\s*\\n((?:\\s+-\\s.*\\n)+)`, 'm');
      const m2 = y.match(re2);
      out[key] = m2 ? m2[1].split('\n').map(s => s.replace(/^\s*-\s*/, '').trim()).filter(Boolean) : [];
    }
  }
  out.kind = (y.match(/^kind:\s*(\S+)/m) || [])[1];
  out.status = (y.match(/^status:\s*(\S+)/m) || [])[1];
  out.proved_here = /^proved_here:\s*false/m.test(y) ? false : true;
  out.title = (y.match(/^title:\s*(.*)$/m) || [])[1];
  out.prov_stmt = (y.match(/^\s{2}statement:\s*(\S+)/m) || [])[1];
  out.prov_proof = (y.match(/^\s{2}proof:\s*(\S+)/m) || [])[1];
  return out;
}

const kindCache = new Map();
function targetInfo(id) {
  if (kindCache.has(id)) return kindCache.get(id);
  const f = `items/${id}.md`;
  const info = fs.existsSync(f) ? parseFrontmatter(fs.readFileSync(f, 'utf8')) : null;
  kindCache.set(id, info);
  return info;
}

const edges = [];
const runItems = [];
for (const pid of runPages) {
  const p = byPageId.get(pid);
  const reqClosure = new Set();
  const stack = [...(p.requires || [])];
  while (stack.length) {
    const r = stack.pop();
    if (reqClosure.has(r)) continue;
    reqClosure.add(r);
    const rp = byPageId.get(r);
    if (rp) stack.push(...(rp.requires || []));
  }
  for (const it of (p.items || [])) {
    const f = `items/${it.id}.md`;
    if (!fs.existsSync(f)) { edges.push({ src: it.id, srcPage: pid, cls: 'ITEM-FILE-MISSING' }); continue; }
    const fm = parseFrontmatter(fs.readFileSync(f, 'utf8'));
    runItems.push({ id: it.id, page: pid, batch: batchOf.get(pid), ...fm });
    const rel = [
      ...fm.deps.map(d => ['dep', d]),
      ...fm.forward_refs.map(d => ['forward_ref', d]),
      ...fm.justified_by.map(d => ['justified_by', d]),
    ];
    for (const [rtype, tgt] of rel) {
      const ti = targetInfo(tgt);
      const tp = itemPage.get(tgt) || null;
      let cls;
      if (!ti) cls = 'TARGET-FILE-ABSENT';
      else if (!tp) cls = 'TARGET-ON-NO-PAGE';
      else if (tp === pid) cls = 'same-page';
      else if (batchOf.get(tp) === batchOf.get(pid)) cls = 'same-batch-other-page';
      else if (runPages.includes(tp)) cls = 'CROSS-BATCH-IN-RUN';
      else cls = 'CROSS-LEVEL';
      edges.push({
        src: it.id, srcPage: pid, srcBatch: batchOf.get(pid), rtype, tgt, tgtPage: tp,
        tgtStatus: ti ? ti.status : null, tgtKind: ti ? ti.kind : null,
        tgtProv: ti ? ti.prov_stmt : null, tgtProvedHere: ti ? ti.proved_here : null,
        pageStatus: tp ? pageStatus.get(tp) : null,
        declared: tp === pid || reqClosure.has(tp),
        tgtOrder: tp ? orderOf.get(tp) : null, srcOrder: orderOf.get(pid), cls,
      });
    }
  }
}

fs.writeFileSync('research/frontier-15-6c-edges.json', JSON.stringify({ edges, runItems }, null, 1));

const counts = {};
for (const e of edges) counts[e.cls] = (counts[e.cls] || 0) + 1;
console.log('run pages:', runPages.length, '| run items:', runItems.length, '| edges:', edges.length);
console.log(counts);

const bad = (label, filt) => {
  const rows = edges.filter(filt);
  console.log(`\n--- ${label} (${rows.length}) ---`);
  for (const e of rows) console.log(`  ${e.src} --${e.rtype}--> ${e.tgt} [page=${e.tgtPage} status=${e.tgtStatus} pageStatus=${e.pageStatus} kind=${e.tgtKind}]`);
};

bad('TARGET FILE ABSENT', e => e.cls === 'TARGET-FILE-ABSENT');
bad('TARGET ON NO PAGE', e => e.cls === 'TARGET-ON-NO-PAGE');
bad('CROSS-BATCH IN RUN', e => e.cls === 'CROSS-BATCH-IN-RUN');
bad('UNDECLARED page (dep target page not in requires closure)', e => !e.declared && e.rtype === 'dep' && e.tgtPage);
bad('TARGET NOT PUBLISHED but off-run', e => e.cls === 'CROSS-LEVEL' && e.tgtStatus !== 'published');
bad('TARGET PAGE NOT PUBLISHED (cross-level)', e => e.cls === 'CROSS-LEVEL' && e.pageStatus !== 'published');
bad('PLAN-ORDER VIOLATION (target page order >= source page order)', e => e.cls === 'CROSS-LEVEL' && e.tgtOrder != null && e.srcOrder != null && e.tgtOrder >= e.srcOrder);
bad('AI-GENERATED statement as dep target', e => e.rtype === 'dep' && e.tgtProv === 'ai-generated');
bad('proved_here:false dep target', e => e.rtype === 'dep' && e.tgtProvedHere === false);
bad('forward refs', e => e.rtype === 'forward_ref');

console.log('\n--- distinct cross-level targets by kind ---');
const byKind = {};
const seen = new Set();
for (const e of edges.filter(e => e.cls === 'CROSS-LEVEL')) {
  if (seen.has(e.tgt)) continue; seen.add(e.tgt);
  byKind[e.tgtKind] = (byKind[e.tgtKind] || 0) + 1;
}
console.log(byKind, '| total distinct:', seen.size);
