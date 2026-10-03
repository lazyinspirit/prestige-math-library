// Physics-only content policy. Pure functions are shared by planning and gates.
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join, basename } from 'node:path';
import { parseFrontmatter, referenceUrls } from './content-policy-lib.mjs';
import { splitFrontmatter, sectionText } from './facts-block.mjs';

export const PHYSICS_PREFIXES = Object.freeze({ postulate: 'post', 'physics-theorem': 'pthm', experiment: 'exp', 'thought-experiment': 'texp' });
export const PHYSICS_KINDS = new Set(Object.keys(PHYSICS_PREFIXES));
export const PHYSICAL_PROOF_KINDS = new Set(['physics-theorem', 'thought-experiment']);
export const NONPROOF_KINDS = new Set(['postulate', 'experiment']);
export const MATH_PREFIXES = Object.freeze({ definition: 'def', theorem: 'thm', lemma: 'lem', proposition: 'prop', corollary: 'cor', example: 'ex', counterexample: 'cex', 'false-statement': 'fs', remark: 'rem' });
export const PREFIXES = { ...MATH_PREFIXES, ...PHYSICS_PREFIXES };
export const DEPENDENCY_ROLES = new Set(['mathematical-premise', 'physical-assumption', 'physical-result', 'empirical-premise', 'operational-prerequisite', 'formulation-prerequisite']);
export const RELATION_FIELDS = new Set(['supported_by', 'tested_by', 'motivated_by', 'replicates', 'challenges']);
const strings = value => Array.isArray(value) && value.every(v => typeof v === 'string' && v.trim());
const text = value => typeof value === 'string' && value.trim();
const object = value => value && typeof value === 'object' && !Array.isArray(value);

export function readItem(file) {
  const raw = readFileSync(file, 'utf8');
  const { fm, body } = splitFrontmatter(raw);
  return { ...parseFrontmatter(fm), body, raw, file };
}
export function markdownFiles(dir) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir, { withFileTypes: true }).flatMap(e => e.isDirectory() ? markdownFiles(join(dir, e.name)) : e.name.endsWith('.md') ? [join(dir, e.name)] : []);
}

export function validatePhysicsContent({ items, pages = [], importedIds = new Set(), requireBodies = true }) {
  const errors = [];
  const error = (code, id, message) => errors.push({ code, id, message });
  const byId = new Map();
  const aliases = new Map();
  for (const item of items) {
    if (!text(item.id) || byId.has(item.id)) error('item-id', item.id, 'missing or duplicate item id');
    byId.set(item.id, item);
    for (const alias of item.aliases ?? []) {
      if (aliases.has(alias)) error('alias-duplicate', item.id, `duplicate alias ${alias}`);
      aliases.set(alias, item.id);
    }
  }
  for (const alias of aliases.keys()) if (byId.has(alias) && !(importedIds.has(alias) && importedIds.has(aliases.get(alias)))) error('alias-id-collision', alias, 'alias collides with an item id');
  const resolve = id => byId.get(id) ?? byId.get(aliases.get(id));
  const domain = item => item.domain ?? (importedIds.has(item.id) ? 'mathematics' : undefined);
  const empirical = new Map();
  for (const item of items) {
    const d = domain(item);
    if (!['mathematics', 'physics'].includes(d)) error('domain-required', item.id, 'domain must be mathematics or physics; only recorded imports may omit it');
    if (!PREFIXES[item.kind] || !item.id?.startsWith(`${PREFIXES[item.kind]}-`)) error('kind-prefix', item.id, `invalid kind or prefix: ${item.kind}`);
    if (PHYSICS_KINDS.has(item.kind) && d !== 'physics') error('physical-kind-domain', item.id, `${item.kind} requires domain: physics`);
    if (['theorem', 'lemma', 'proposition', 'corollary'].includes(item.kind) && d !== 'mathematics') error('mathematical-kind-domain', item.id, 'use physics-theorem or thought-experiment for physical conclusions');
    for (const field of ['deps', 'justified_by', 'forward_refs', 'external_refs']) {
      if (item[field] !== undefined && !strings(item[field])) { error('edge-shape', item.id, `${field} must be an array of ids`); continue; }
      for (const id of item[field] ?? []) {
        const supplier = resolve(id);
        if (!supplier) { error('edge-unresolved', item.id, `${field}: ${id}`); continue; }
        if (d === 'mathematics' && domain(supplier) === 'physics' && ['deps', 'justified_by', 'forward_refs'].includes(field)) error('math-physics-dependency', item.id, `${field} may not use physical supplier ${id}`);
      }
    }
    const roles = item.dependency_roles ?? {};
    if (!object(roles)) error('dependency-roles-shape', item.id, 'dependency_roles must be a mapping');
    for (const id of Object.keys(roles)) if (!(item.deps ?? []).includes(id)) error('dependency-role-extra', item.id, `${id} is not in deps`);
    for (const id of item.deps ?? []) {
      const supplier = resolve(id); if (!supplier) continue;
      const role = roles[id];
      if (!importedIds.has(item.id) && !DEPENDENCY_ROLES.has(role)) error('dependency-role-required', item.id, `declare dependency_roles.${id}`);
      if (!role) continue;
      if (d === 'mathematics' && role !== 'mathematical-premise') error('mathematical-role', item.id, 'mathematical deps must be mathematical-premise');
      if (role === 'mathematical-premise' && domain(supplier) !== 'mathematics') error('role-supplier', item.id, `${id} is not mathematical`);
      if (role === 'physical-assumption' && supplier.kind !== 'postulate') error('role-supplier', item.id, `${id} is not a postulate`);
      if (role === 'physical-result' && !PHYSICAL_PROOF_KINDS.has(supplier.kind)) error('role-supplier', item.id, `${id} is not an established physical result`);
      if (role === 'empirical-premise' && supplier.kind !== 'experiment') error('role-supplier', item.id, `${id} is not an experiment`);
      if (NONPROOF_KINDS.has(item.kind) && ['physical-assumption', 'physical-result', 'empirical-premise'].includes(role)) error('nonproof-derivation', item.id, 'use operational/formulation prerequisites; do not derive a postulate or observed outcome');
      if (role === 'empirical-premise') {
        if (!empirical.has(item.id)) empirical.set(item.id, new Set());
        empirical.get(item.id).add(supplier.id);
      }
    }
    if (item.relations !== undefined && !object(item.relations)) error('relations-shape', item.id, 'relations must be a mapping');
    for (const [field, ids] of Object.entries(item.relations ?? {})) {
      if (d === 'mathematics' && field !== 'motivated_by') error('mathematical-evidence', item.id, 'physical evidence cannot establish mathematical validity; use motivation links for context');
      if (!RELATION_FIELDS.has(field) || !strings(ids)) { error('relation-shape', item.id, `invalid relation ${field}`); continue; }
      for (const id of ids) {
        const supplier = resolve(id);
        if (!supplier) error('relation-unresolved', item.id, `${field}: ${id}`);
        else if (field !== 'motivated_by' && supplier.kind !== 'experiment') error('relation-supplier', item.id, `${field} must name experiments`);
        if (field === 'replicates' && item.kind !== 'experiment') error('relation-consumer', item.id, 'only an experiment replicates an experiment');
      }
    }
    if (!requireBodies || importedIds.has(item.id)) continue;
    if (d === 'physics' && !text(item.physical_scope)) error('physical-scope', item.id, 'state physical_scope explicitly');
    if (PHYSICS_KINDS.has(item.kind)) {
      if (!referenceUrls(item).some(url => /^https?:\/\//.test(url))) error('physics-source', item.id, 'physical items require an HTTP(S) source reference');
      if (!['literature-derived', 'ai-altered'].includes(item.provenance?.statement)) error('physics-provenance', item.id, 'physical statements must be source-backed');
    }
    if (NONPROOF_KINDS.has(item.kind)) {
      if (item.provenance?.proof !== 'not-applicable') error('nonproof-provenance', item.id, 'postulates and experiments require provenance.proof: not-applicable');
      if (/^## (Proof|Refutation|Verification|Counterexample)\s*$/m.test(item.body)) error('nonproof-proof', item.id, 'do not fabricate a proof of a postulate or observation');
      if (item.proved_here === false) error('nonproof-proved-here', item.id, 'nonproof kinds are not recorded unproved remarks');
      if (item.status === 'published' && !['date', 'scope', 'by'].every(field => text(item.verification?.sources_checked?.[field]))) error('physics-publication', item.id, 'publication requires structured verification.sources_checked');
    }
    if (item.kind === 'postulate' && !sectionText(item.body, 'Postulate').trim()) error('postulate-section', item.id, 'require ## Postulate');
    if (item.kind === 'experiment') {
      for (const heading of ['Setup', 'Procedure', 'Observations', 'Uncertainty', 'Interpretation']) if (!sectionText(item.body, heading).trim()) error('experiment-section', item.id, `require ## ${heading}`);
      for (const field of ['observation', 'uncertainty', 'conditions', 'source_url']) if (!text(item.empirical_result?.[field])) error('empirical-result', item.id, `require empirical_result.${field}`);
      if (item.empirical_result?.source_url && !referenceUrls(item).includes(item.empirical_result.source_url)) error('empirical-source', item.id, 'empirical_result.source_url must match a source reference');
    }
    if (PHYSICAL_PROOF_KINDS.has(item.kind)) {
      if (!sectionText(item.body, 'Statement').trim() || !sectionText(item.body, 'Proof').trim() || !text(item.proof_strategy)) error('physical-proof', item.id, 'require Statement, Proof, and proof_strategy');
      if (['not-applicable', 'not-supplied', undefined].includes(item.provenance?.proof)) error('physical-proof-provenance', item.id, 'physical conclusions require proof provenance');
      if (item.proved_here === false) error('physical-proof-omitted', item.id, 'physics theorem and thought experiment must have complete arguments');
      if (item.status === 'published' && !item.verification?.audited && !object(item.verification?.verified)) error('physical-publication', item.id, 'publication requires proof audit');
    }
  }
  // Prerequisites are acyclic; relations are intentionally excluded.
  const active = new Set(), done = new Set();
  function visit(item, path = []) {
    if (active.has(item.id)) { error('item-cycle', item.id, [...path, item.id].join(' -> ')); return; }
    if (done.has(item.id)) return;
    active.add(item.id);
    for (const id of item.deps ?? []) { const supplier = resolve(id); if (supplier) visit(supplier, [...path, item.id]); }
    active.delete(item.id); done.add(item.id);
  }
  for (const item of items) visit(item);
  // Carry empirical qualifications through established-result chains.
  function empiricalClosure(item, seen = new Set()) {
    if (seen.has(item.id)) return new Set(); seen.add(item.id);
    const result = new Set(empirical.get(item.id) ?? []);
    for (const id of item.deps ?? []) if (item.dependency_roles?.[id] === 'physical-result') {
      const supplier = resolve(id); if (supplier) for (const e of empiricalClosure(supplier, seen)) result.add(e);
    }
    return result;
  }
  for (const item of items) if (requireBodies && PHYSICAL_PROOF_KINDS.has(item.kind)) {
    const rows = item.empirical_premises ?? [];
    if (!Array.isArray(rows)) { error('empirical-premises-shape', item.id, 'empirical_premises must be an array'); continue; }
    const needed = empiricalClosure(item);
    for (const id of needed) {
      const row = rows.find(r => resolve(r.experiment)?.id === id);
      if (!row || !['conditions', 'uncertainty', 'use'].every(f => text(row[f]))) error('empirical-qualification', item.id, `qualify empirical premise ${id}, including inherited premises`);
    }
    for (const row of rows) if (!needed.has(resolve(row.experiment)?.id)) error('empirical-premise-extra', item.id, 'empirical_premises must correspond to actual empirical dependencies');
  }
  for (const page of pages) {
    const library = page.library;
    if (!['mathematics', 'physics'].includes(library)) error('page-library', page.id ?? page.page, 'page/category requires library: mathematics or physics');
    for (const id of [...(page.items ?? []), ...(page.examples ?? [])].map(v => typeof v === 'string' ? v : v.id)) {
      const item = resolve(id);
      if (!item) error('page-item-missing', page.id ?? page.page, `missing ${id}`);
      else if (library === 'mathematics' && domain(item) !== 'mathematics') error('math-page-physics', page.id ?? page.page, `physical item ${id} cannot appear in mathematics`);
    }
  }
  return errors;
}

export function loadPhysicsRepository(root, plan = null) {
  const imports = existsSync(join(root, 'research/math-imports.json')) ? JSON.parse(readFileSync(join(root, 'research/math-imports.json'), 'utf8')) : { files: [] };
  const importedIds = new Set(imports.files.filter(f => f.path.startsWith('items/')).map(f => basename(f.path, '.md')));
  const items = markdownFiles(join(root, 'items')).map(readItem);
  const pages = markdownFiles(join(root, 'library')).filter(f => !basename(f).startsWith('_')).map(file => {
    const row = readItem(file);
    const categoryFile = join(root, 'library', file.slice(join(root, 'library').length + 1).split('/')[0], '_category.md');
    const imported = imports.files.some(f => join(root, f.path) === file);
    const library = imported ? 'mathematics' : existsSync(categoryFile) ? readItem(categoryFile).library : undefined;
    if (row.library && library && row.library !== library) throw Error(`page/category library mismatch: ${file}`);
    return { ...row, library: row.library ?? library };
  });
  if (plan) {
    for (const page of plan.pages ?? []) {
      const categoryFile = join(root, 'library', page.category ?? '', '_category.md');
      if (existsSync(categoryFile)) {
        const categoryLibrary = readItem(categoryFile).library;
        if (categoryLibrary && page.library && categoryLibrary !== page.library) throw Error(`planned page/category library mismatch: ${page.id}`);
      }
      pages.push({ ...page, library: page.library ?? (page.kind === 'P' ? pages.find(p => p.page === page.id)?.library : undefined) });
      for (const item of page.items ?? []) {
        const existing = items.find(i => i.id === item.id);
        if (!existing) items.push(item);
        else if (item.domain && existing.domain && item.domain !== existing.domain) throw Error(`planned/authored domain mismatch: ${item.id}`);
      }
    }
  }
  return { items, pages, importedIds };
}
