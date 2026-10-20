// pathway-lib.mjs — shared reading of `library/<category>/_pathway.md`, the
// course pathway a category page renders.
//
// The GATE (pathcheck.mjs) and the MAINTAINER (pathway-sync.mjs) both need the
// same three facts: which pages exist, which page rests on which, and what the
// pathway file says. They read them from here so the thing that places a page
// and the thing that checks the placement cannot drift apart.

import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join, basename } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import { yamlCandidates } from './paths.mjs';

export const REPO = join(fileURLToPath(new URL('.', import.meta.url)), '..');

const require_ = createRequire(import.meta.url);
let YAML = null;
for (const cand of yamlCandidates()) {
  try { YAML = require_(cand); break; } catch { /* next candidate */ }
}
/** The renderer's own YAML parser, as rendercheck uses it. */
export function yaml() {
  if (!YAML) throw new Error('no yaml module found (the app repo supplies it, same as rendercheck)');
  return YAML;
}

export function split(src) {
  const m = src.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  return m ? { fm: m[1], body: m[2] } : { fm: '', body: src };
}

const strList = (v) => (Array.isArray(v) ? v.filter((x) => typeof x === 'string') : []);

/** Items and pages from DISK, the way depcheck reads them: this is about the
 *  library that exists, not the plan for it. */
export function loadCorpus() {
  const Y = yaml();
  const items = new Map();
  const aliasTo = new Map();
  for (const f of readdirSync(join(REPO, 'items')).filter((f) => f.endsWith('.md'))) {
    const { fm } = split(readFileSync(join(REPO, 'items', f), 'utf8'));
    let y = {};
    try { y = Y.parse(fm) ?? {}; } catch { continue; }
    const id = typeof y.id === 'string' ? y.id : basename(f, '.md');
    items.set(id, { id, status: y.status === 'published' ? 'published' : 'draft', deps: strList(y.deps) });
    for (const a of strList(y.aliases)) aliasTo.set(a, id);
  }
  const resolve = (x) => (items.has(x) ? x : aliasTo.get(x));

  const pages = [];
  (function walk(dir, cat) {
    for (const e of readdirSync(dir, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name))) {
      const fp = join(dir, e.name);
      if (e.isDirectory()) { walk(fp, [...cat, e.name]); continue; }
      if (!e.name.endsWith('.md') || e.name.startsWith('_')) continue;
      const { fm } = split(readFileSync(fp, 'utf8'));
      let y = {};
      try { y = Y.parse(fm) ?? {}; } catch { continue; }
      pages.push({
        page: typeof y.page === 'string' ? y.page : basename(e.name, '.md'),
        status: y.status === 'published' ? 'published' : 'draft',
        cat,
        items: strList(y.items),
        examples: strList(y.examples),
      });
    }
  })(join(REPO, 'library'), []);

  const byPage = new Map(pages.map((p) => [p.page, p]));
  // An item's home is the FIRST page listing it, depcheck's own convention.
  const homeOf = new Map();
  for (const p of pages) for (const id of [...p.items, ...p.examples]) {
    const r = resolve(id);
    if (r && !homeOf.has(r)) homeOf.set(r, p.page);
  }
  /** A `-examples` page belongs to the A page it is named after. */
  const mainOf = (slug) => {
    const m = String(slug).match(/^(.*)-examples$/);
    return m && byPage.has(m[1]) ? m[1] : slug;
  };

  /**
   * The pages `slug` rests on, at A-page granularity: page P rests on page Q
   * when an item of P depends, TRANSITIVELY, on an item homed on Q. This is the
   * same walk `pageGraph` runs in the app, so the "after Part n" a reader sees
   * and the order enforced here are one relation.
   */
  const restsOn = (slug) => {
    const p = byPage.get(slug);
    if (!p) return new Set();
    const own = new Set([...p.items, ...p.examples]);
    const seen = new Set();
    const out = new Set();
    const queue = [...own];
    while (queue.length) {
      const r = resolve(queue.shift());
      if (!r || seen.has(r)) continue;
      seen.add(r);
      const home = own.has(r) ? slug : homeOf.get(r);
      if (home && home !== slug) out.add(mainOf(home));
      queue.push(...items.get(r).deps);
    }
    out.delete(mainOf(slug));
    return out;
  };

  /** Longest prerequisite chain inside the category, the level the site shows. */
  const levelsIn = (cat) => {
    const inCat = pages.filter((p) => p.cat[0] === cat).map((p) => mainOf(p.page));
    const set = new Set(inCat.filter((s) => byPage.has(s)));
    const memo = new Map();
    const active = new Set();
    const depth = (s) => {
      if (memo.has(s)) return memo.get(s);
      if (active.has(s)) return 0;
      active.add(s);
      const ps = [...restsOn(s)].filter((d) => set.has(d));
      const v = ps.length ? Math.max(...ps.map(depth)) + 1 : 0;
      active.delete(s);
      memo.set(s, v);
      return v;
    };
    const out = new Map();
    for (const s of set) out.set(s, depth(s));
    return out;
  };

  return { items, pages, byPage, homeOf, resolve, mainOf, restsOn, levelsIn };
}

export const pathwayPath = (cat) => join(REPO, 'library', cat, '_pathway.md');

export const categories = () =>
  readdirSync(join(REPO, 'library'), { withFileTypes: true })
    .filter((e) => e.isDirectory())
    .map((e) => e.name);

/** The parts and briefs of one category, or null when it has no pathway file. */
export function readPathway(cat) {
  const file = pathwayPath(cat);
  if (!existsSync(file)) return null;
  const raw = readFileSync(file, 'utf8');
  const { fm, body } = split(raw);
  let y = null;
  try { y = yaml().parse(fm); } catch (e) { return { file, raw, error: e.message, parts: [], briefs: new Map() }; }
  const parts = (Array.isArray(y?.parts) ? y.parts : []).map((p, i) => ({
    part: typeof p?.part === 'string' ? p.part : `#${i + 1}`,
    title: typeof p?.title === 'string' ? p.title : '',
    pages: strList(p?.pages),
  }));
  // `## <part-slug>` sections, keyed on the slug so a title can change without
  // orphaning its prose.
  const briefs = new Map();
  const chunks = body.split(/^##[ \t]+(\S+)[ \t]*$/m);
  for (let i = 1; i < chunks.length; i += 2) briefs.set(chunks[i].trim(), chunks[i + 1].trim());
  return { file, raw, error: null, status: y?.status === 'published' ? 'published' : 'draft', parts, briefs };
}
