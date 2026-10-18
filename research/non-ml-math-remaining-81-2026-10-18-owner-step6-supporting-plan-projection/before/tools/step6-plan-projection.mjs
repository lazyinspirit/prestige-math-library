// Replacement-only commit composition for exactly the selected run's plan rows.
// Scientific prerequisite projections remain independent in step6-scoped-tree.
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const fail = why => { throw Error('shared plan projection: ' + why); };
const same = (a, b) => JSON.stringify(a) === JSON.stringify(b);
const keys = (value, expected) => value && typeof value === 'object' && !Array.isArray(value)
  && same(Object.keys(value).sort(), [...expected].sort());
export const decodePlan = bytes => new TextDecoder('utf-8', { fatal: true, ignoreBOM: true }).decode(bytes);

// Keep exact token spans; JSON.parse alone would lose foreign formatting.
// The recursive scanner accepts precisely JSON syntax and rejects duplicate
// object keys, including escaped spellings of the same key.
export function planDocument(text) {
  let at = 0;
  const ws = () => { while (/[\x20\t\r\n]/.test(text[at] ?? '\0')) at++; };
  const node = () => {
    ws(); const start = at, ch = text[at];
    if (ch === '"') {
      at++;
      while (at < text.length) {
        const next = text[at++];
        if (next === '\\') { at++; continue; }
        if (next === '"') {
          let value; try { value = JSON.parse(text.slice(start, at)); } catch { fail('invalid JSON string'); }
          return { start, end: at, value };
        }
      }
      fail('unterminated JSON string');
    }
    if (ch === '{' || ch === '[') {
      const object = ch === '{', end = object ? '}' : ']'; at++; ws();
      const children = [], value = object ? Object.create(null) : [], names = new Set();
      if (text[at] !== end) while (true) {
        let key;
        if (object) {
          if (text[at] !== '"') fail('object key must be a string');
          const name = node(); key = name.value;
          if (names.has(key)) fail('duplicate object key'); names.add(key);
          ws(); if (text[at++] !== ':') fail('missing object colon');
        }
        const child = node(); children.push({ key, ...child });
        if (object) value[key] = child.value; else value.push(child.value);
        ws(); if (text[at] === end) break;
        if (text[at++] !== ',') fail('missing JSON separator'); ws();
      }
      if (text[at++] !== end) fail('unterminated JSON container');
      return { start, end: at, value, children };
    }
    const token = /^(?:-?(?:0|[1-9][0-9]*)(?:\.[0-9]+)?(?:[eE][+-]?[0-9]+)?|true|false|null)/.exec(text.slice(at));
    if (!token) fail('invalid JSON token'); at += token[0].length;
    return { start, end: at, value: JSON.parse(token[0]) };
  };
  const root = node(); ws(); if (at !== text.length) fail('trailing JSON content');
  if (!root.children || Array.isArray(root.value) || root.value === null) fail('plan root must be an object');
  const pages = root.children.find(row => row.key === 'pages');
  if (!pages || !Array.isArray(pages.value)) fail('plan pages must be an array');
  const ids = new Set(), rows = pages.children.map(row => {
    const value = row.value;
    if (!value || typeof value !== 'object' || Array.isArray(value)
      || typeof value.id !== 'string' || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value.id)
      || !Array.isArray(value.items) || (value.requires !== undefined && !Array.isArray(value.requires)))
      fail('invalid plan page row');
    if (ids.has(value.id)) fail('duplicate plan page id ' + value.id); ids.add(value.id);
    return { ...row, id: value.id, raw: text.slice(row.start, row.end) };
  });
  return { text, root, rows };
}

const ownedRows = (doc, ids) => doc.rows.filter(row => ids.has(row.id)).map(({ id, raw }) => ({ id, raw }));
export function planForeignResidual(text, pageIds) {
  const ids = new Set(pageIds), doc = planDocument(text); let out = '', cursor = 0;
  for (const row of doc.rows) if (ids.has(row.id)) {
    out += text.slice(cursor, row.start) + JSON.stringify({ owned_page: row.id }); cursor = row.end;
  }
  return out + text.slice(cursor);
}

// The supplied scope comes from runScope (scope-ledger/physical homes), never
// from readiness's broader transitive prerequisite page set.
export function validatePlanProjection(spec, run, scopePages, working, originalHead, originalIndex, root) {
  if (!keys(spec, ['version', 'kind', 'run', 'path', 'authorized_by', 'authorization', 'original_head',
    'original_index_blob', 'page_ids', 'base_head_owned_rows', 'base_index_owned_rows', 'target_owned_rows', 'evidence'])
    || spec.version !== 1 || spec.kind !== 'plan-page-replacement-projection' || spec.run !== run
    || spec.path !== 'research/plan-spec.json' || spec.authorized_by !== 'owner'
    || typeof spec.authorization !== 'string' || spec.authorization.trim().length < 20
    || !/^[a-f0-9]{40,64}$/.test(spec.original_head ?? '')
    || !/^[a-f0-9]{40,64}$/.test(spec.original_index_blob ?? '')
    || !Array.isArray(spec.page_ids) || !spec.page_ids.length
    || spec.page_ids.some(id => typeof id !== 'string') || new Set(spec.page_ids).size !== spec.page_ids.length
    || !Array.isArray(spec.evidence) || !spec.evidence.length) fail('invalid owner authority');
  const ids = new Set(spec.page_ids), expected = scopePages.map(row => row.id);
  if (new Set(expected).size !== expected.length || !same([...ids].sort(), [...expected].sort()))
    fail('owned page ids differ from exact scope-ledger pages');
  const ledgerPath = `research/${run}-scope-ledger.json`;
  const ledger = JSON.parse(readFileSync(join(root, ledgerPath), 'utf8'));
  const ledgerIds = (ledger.pages ?? []).map(row => row.id);
  if (new Set(ledgerIds).size !== ledgerIds.length || !same([...ledgerIds].sort(), [...ids].sort()))
    fail('scope ledger differs from exact page ids');
  const manifestPaths = readdirSync(join(root, 'research')).filter(name =>
    name.startsWith(`${run}-batch-`) && /^\d+\.pages\.json$/.test(name.slice(`${run}-batch-`.length)))
    .sort().map(name => 'research/' + name);
  const manifests = manifestPaths.flatMap(path => JSON.parse(readFileSync(join(root, path), 'utf8')));
  const manifestIds = manifests.map(row => row.id);
  if (!manifestPaths.length || new Set(manifestIds).size !== manifestIds.length
    || !same([...manifestIds].sort(), [...ids].sort())) fail('manifests differ from exact page ids');
  const evidencePaths = spec.evidence.map(row => row?.path);
  if (new Set(evidencePaths).size !== evidencePaths.length
    || !same([...evidencePaths].sort(), [ledgerPath, ...manifestPaths].sort()))
    fail('authority must bind exactly the current scope ledger and all current manifests');
  for (const name of ['base_head_owned_rows', 'base_index_owned_rows', 'target_owned_rows']) {
    const rows = spec[name];
    if (!Array.isArray(rows) || !same(rows.map(row => row?.id), spec.page_ids)
      || rows.some(row => !keys(row, ['id', 'raw']) || typeof row.raw !== 'string')) fail('invalid ordered authority rows');
    for (const row of rows) {
      const doc = planDocument('{"pages":[' + row.raw + ']}');
      if (doc.rows.length !== 1 || doc.rows[0].id !== row.id || doc.rows[0].raw !== row.raw)
        fail('authority row is not one exact page object');
    }
  }
  const observed = [originalHead, originalIndex, working].map(text => ownedRows(planDocument(text), ids));
  for (const rows of observed) if (!same(rows.map(row => row.id), spec.page_ids))
    fail('owned relative order changed or an owned page is missing');
  if (!same(observed[0], spec.base_head_owned_rows) || !same(observed[1], spec.base_index_owned_rows)
    || !same(observed[2], spec.target_owned_rows)) fail('original/target raw owned rows differ from authority');
  for (const row of planDocument(working).rows.filter(row => ids.has(row.id))) {
    const scope = scopePages.find(page => page.id === row.id), manifest = manifests.find(page => page.id === row.id);
    if (row.value.kind !== scope.kind || row.value.category !== scope.category
      || row.value.kind !== manifest.kind || !same(row.value.items, manifest.items ?? [])
      || !same(row.value.requires ?? [], manifest.requires ?? [])) fail('target differs from current owned manifest/home');
  }
  return { pageIds: [...spec.page_ids] };
}

export function composePlanProjection(base, spec, kind) {
  if (!['head', 'index'].includes(kind)) fail('invalid base kind');
  const ids = new Set(spec.page_ids), doc = planDocument(base), rows = ownedRows(doc, ids);
  if (!same(rows.map(row => row.id), spec.page_ids)) fail('base owned relative order/scope changed');
  const target = spec.target_owned_rows;
  if (same(rows, target)) return { text: base, already_integrated: true, replacements: [] };
  if (!same(rows, spec[kind === 'head' ? 'base_head_owned_rows' : 'base_index_owned_rows']))
    fail('base owned rows are neither authorized original nor target');
  const desired = new Map(target.map(row => [row.id, row.raw]));
  let text = '', cursor = 0; const replacements = [];
  for (const row of doc.rows) if (ids.has(row.id)) {
    text += base.slice(cursor, row.start);
    const raw = desired.get(row.id); replacements.push({ at: text.length, length: raw.length, before: row.raw });
    text += raw; cursor = row.end;
  }
  text += base.slice(cursor);
  let reconstructed = text;
  for (const row of [...replacements].reverse()) reconstructed = reconstructed.slice(0, row.at)
    + row.before + reconstructed.slice(row.at + row.length);
  if (reconstructed !== base) fail('inverse replacement failed exact base reconstruction');
  if (!same(ownedRows(planDocument(text), ids), target)
    || planForeignResidual(text, ids) !== planForeignResidual(base, ids)) fail('foreign bytes or target rows changed');
  return { text, already_integrated: false, replacements };
}
