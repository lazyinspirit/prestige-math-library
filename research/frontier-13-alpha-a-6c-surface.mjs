#!/usr/bin/env node
// frontier-13 step 6c — build the run's citation surface.
//
// For every item scoped by this run, parse the Facts & Assumptions section into
// [F#]/[A#]/[L#] facts, resolve each fact's [[wikilinks]] to item ids, mark each
// cited id as in-run or published, and record which numbered proof steps cite the
// fact. A fact cited by at least one numbered step is LOAD-BEARING.
//
// Output: research/frontier-13-alpha-a-6c-surface.json
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const ITEMS = path.join(ROOT, 'items');

const batches = [1, 2, 3, 4, 5, 6, 7];
const pageOf = new Map();   // item id -> {page, kind, batch}
const scoped = new Set();

for (const b of batches) {
  const pages = JSON.parse(fs.readFileSync(`research/frontier-13-batch-${b}.pages.json`, 'utf8'));
  for (const p of pages) {
    for (const it of p.items || []) {
      pageOf.set(it.id, { page: p.id, pageKind: p.kind, batch: b });
      scoped.add(it.id);
    }
  }
}

// ---- published corpus: every item file not scoped by this run -------------
const allItemFiles = fs.readdirSync(ITEMS).filter((f) => f.endsWith('.md'));
const onDisk = new Set(allItemFiles.map((f) => f.replace(/\.md$/, '')));

function readItem(id) {
  const f = path.join(ITEMS, `${id}.md`);
  if (!fs.existsSync(f)) return null;
  return fs.readFileSync(f, 'utf8');
}

function frontmatter(text) {
  const m = text.match(/^---\n([\s\S]*?)\n---\n/);
  return m ? m[1] : '';
}

function section(text, name) {
  const re = new RegExp(`^## ${name}\\s*$`, 'm');
  const m = text.match(re);
  if (!m) return '';
  const start = m.index + m[0].length;
  const rest = text.slice(start);
  const nxt = rest.match(/^## /m);
  return nxt ? rest.slice(0, nxt.index) : rest;
}

const FACT_RE = /^\s*\[([FAL]\d+)\]\s*(.*)$/;

const surface = [];
let parseWarn = [];

for (const id of scoped) {
  const text = readItem(id);
  if (!text) { parseWarn.push(`MISSING FILE ${id}`); continue; }
  const fm = frontmatter(text);
  const statusM = fm.match(/^status:\s*(\S+)/m);
  const facts = section(text, 'Facts & Assumptions');
  const proof = section(text, 'Proof') || section(text, 'Verification') || section(text, 'Refutation') || section(text, 'Construction');

  // parse facts: a fact may wrap onto continuation lines until a blank line
  const factMap = new Map();
  const lines = facts.split(/\r?\n/);
  let cur = null;
  for (const ln of lines) {
    const m = ln.match(FACT_RE);
    if (m) {
      cur = { label: m[1], text: m[2] };
      factMap.set(m[1], cur);
    } else if (cur && ln.trim() !== '') {
      cur.text += ' ' + ln.trim();
    } else {
      cur = null;
    }
  }

  // parse numbered steps and their bracketed input tags
  const stepUses = new Map();  // label -> [step ids]
  for (const ln of proof.split(/\r?\n/)) {
    const sm = ln.match(/^(\d+\.\d+)\s+(.+)$/);
    if (!sm) continue;
    const stepId = sm[1];
    // input tag is the LAST bracketed group on the line
    const tags = [...sm[2].matchAll(/\[([^\[\]]*)\]/g)].map((t) => t[1]);
    const tag = tags.length ? tags[tags.length - 1] : '';
    for (const tok of tag.split(/[,;]/)) {
      const t = tok.trim();
      const lm = t.match(/^([FAL]\d+)$/);
      if (lm) {
        if (!stepUses.has(lm[1])) stepUses.set(lm[1], []);
        stepUses.get(lm[1]).push(stepId);
      }
    }
  }

  for (const [label, fact] of factMap) {
    const links = [...fact.text.matchAll(/\[\[([^\]]+)\]\]/g)].map((m) => m[1].split('|')[0].trim());
    const uses = stepUses.get(label) || [];
    for (const cited of links) {
      surface.push({
        item: id,
        page: pageOf.get(id).page,
        pageKind: pageOf.get(id).pageKind,
        batch: pageOf.get(id).batch,
        label,
        restatement: fact.text.replace(/\s*\(\[\[[^\)]*\)\s*$/, '').trim(),
        cited,
        citedClass: scoped.has(cited) ? 'in-run' : (onDisk.has(cited) ? 'published' : 'MISSING'),
        loadBearing: uses.length > 0,
        usedAtSteps: uses,
      });
    }
    if (links.length === 0) {
      surface.push({
        item: id, page: pageOf.get(id).page, pageKind: pageOf.get(id).pageKind,
        batch: pageOf.get(id).batch, label,
        restatement: fact.text.trim(), cited: null, citedClass: 'none',
        loadBearing: uses.length > 0, usedAtSteps: uses,
      });
    }
  }
}

const pub = surface.filter((s) => s.citedClass === 'published');
const pubLB = pub.filter((s) => s.loadBearing);
const inrun = surface.filter((s) => s.citedClass === 'in-run');
const missing = surface.filter((s) => s.citedClass === 'MISSING');

console.log(`scoped items:                 ${scoped.size}`);
console.log(`fact->citation edges:         ${surface.length}`);
console.log(`  cited item is PUBLISHED:    ${pub.length}   (load-bearing ${pubLB.length})`);
console.log(`  cited item is IN-RUN:       ${inrun.length}  (load-bearing ${inrun.filter(s=>s.loadBearing).length})`);
console.log(`  cited id NOT ON DISK:       ${missing.length}`);
console.log(`  fact with no wikilink:      ${surface.filter(s=>s.citedClass==='none').length}`);
console.log(`distinct published targets:   ${new Set(pubLB.map(s=>s.cited)).size}`);
if (missing.length) {
  console.log('\nMISSING TARGETS:');
  for (const m of missing) console.log(`  ${m.item} ${m.label} -> ${m.cited}`);
}
if (parseWarn.length) console.log('\nWARN:\n' + parseWarn.join('\n'));

fs.writeFileSync('research/frontier-13-alpha-a-6c-surface.json', JSON.stringify(surface, null, 1));
console.log('\nwrote research/frontier-13-alpha-a-6c-surface.json');
