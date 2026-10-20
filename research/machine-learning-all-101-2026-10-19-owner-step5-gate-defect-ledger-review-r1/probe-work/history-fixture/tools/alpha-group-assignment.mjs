// Metadata-only Step 2. Bounded category packing; no item/load/edge search.
import { existsSync, readFileSync, readdirSync, writeFileSync, renameSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { createHash } from 'node:crypto';

export function alphabeticLabel(index) {
  if (!Number.isInteger(index) || index < 0) throw Error('Invalid group label index');
  let label = '';
  do { label = String.fromCharCode(97 + index % 26) + label; index = Math.floor(index / 26) - 1; } while (index >= 0);
  return label;
}
const compare = (a, b) => a < b ? -1 : a > b ? 1 : 0;
const byBatch = (a, b) => Number(a.id) - Number(b.id);
const categoriesOf = batches => {
  const categories = new Map();
  for (const batch of batches) for (const category of batch.categories) {
    if (!categories.has(category)) categories.set(category, []);
    categories.get(category).push(batch.id);
  }
  return categories;
};
export function loadAssignmentBatches(repo, run, maxRunBatches) {
  if (!/^[a-zA-Z0-9_-]+$/.test(run ?? '')) throw Error('Invalid assignment run');
  const names = readdirSync(join(repo, 'research')).filter(name => new RegExp(`^${run}-batch-[1-9]\\d*\\.pages\\.json$`).test(name));
  if (!names.length) throw Error(`No current batch manifests for ${run}`);
  if (names.length > maxRunBatches) throw Error(`Run has ${names.length} batches; capacity is ${maxRunBatches}`);
  return names.map(name => {
    const pages = JSON.parse(readFileSync(join(repo, 'research', name), 'utf8'));
    if (!Array.isArray(pages) || !pages.length) throw Error(`Invalid or empty manifest ${name}`);
    if (pages.some(page => typeof page?.category !== 'string' || !page.category.trim())) throw Error(`Missing batch category in ${name}`);
    return { id: name.match(/-batch-([1-9]\d*)\.pages\.json$/)[1],
      categories: [...new Set(pages.map(page => page.category))].sort(compare) };
  }).sort(byBatch);
}
export function validateAssignment(groups, batches, { maxGroups, maxBatches }) {
  const errors = [], warnings = [], seen = new Map(), labels = new Set();
  const batchMap = new Map(batches.map(batch => [batch.id, batch]));
  if (!Array.isArray(groups) || !groups.length) return { errors: ['alpha-groups-shape: expected a nonempty array of {label, covers, rationale}'], warnings };
  for (const group of groups) {
    if (!group || typeof group.label !== 'string' || !/^[a-z]+$/.test(group.label)) {
      errors.push('alpha-groups-shape: every group needs a lowercase alphabetic label'); continue;
    }
    if (labels.has(group.label)) errors.push(`alpha-groups-duplicate-label: duplicate ${group.label}`);
    labels.add(group.label);
    if (!Array.isArray(group.covers) || !group.covers.length) {
      errors.push(`alpha-groups-shape: group ${group.label} needs nonempty covers`); continue;
    }
    if (typeof group.rationale !== 'string' || group.rationale.trim().length < 20)
      errors.push(`alpha-groups-rationale: group ${group.label} needs a concrete grouping reason`);
    if (group.covers.length > maxBatches) errors.push(`alpha-groups-oversize: group ${group.label} exceeds ${maxBatches} batches`);
    const categories = new Set();
    for (const id of group.covers.map(String)) {
      if (!batchMap.has(id)) { errors.push(`alpha-groups-unknown-batch: ${id}`); continue; }
      if (seen.has(id)) errors.push(`alpha-groups-duplicate: batch ${id} occurs more than once`);
      seen.set(id, group.label);
      for (const category of batchMap.get(id).categories) categories.add(category);
    }
    if (categories.size > 1) warnings.push(`alpha-groups-mixed-category: group ${group.label} spans ${[...categories].sort(compare).join(' + ')}`);
  }
  if (groups.length > maxGroups) errors.push(`alpha-groups-too-many: ${groups.length} groups exceeds cap ${maxGroups}`);
  for (const id of batchMap.keys()) if (!seen.has(id)) errors.push(`alpha-groups-uncovered: batch ${id}`);
  for (const [category, ids] of categoriesOf(batches)) {
    if (ids.length <= maxBatches && new Set(ids.map(id => seen.get(id)).filter(Boolean)).size > 1)
      errors.push(`alpha-groups-category-split: ${category} fits in one group but is split`);
  }
  return { errors, warnings };
}
export function generateAssignment(batches, limits) {
  const { maxGroups, maxBatches } = limits;
  // Small categories are indivisible. Union also handles batches with several
  // category labels without splitting any category which fits in one group.
  const parent = new Map(batches.map(batch => [batch.id, batch.id]));
  const find = id => parent.get(id) === id ? id : find(parent.get(id));
  for (const ids of categoriesOf(batches).values()) if (ids.length <= maxBatches)
    for (const id of ids) parent.set(find(id), find(ids[0]));
  const components = new Map();
  for (const batch of batches) {
    const root = find(batch.id);
    if (!components.has(root)) components.set(root, []);
    components.get(root).push(batch);
  }
  const atoms = [...components.values()].map(rows => rows.sort(byBatch));
  if (atoms.some(rows => rows.length > maxBatches)) throw Error('Category cohesion requires more batches in one group than the per-group cap');
  const atomKey = rows => [...new Set(rows.flatMap(row => row.categories))].sort(compare).join(',');
  atoms.sort((a, b) => compare(atomKey(a), atomKey(b)) || byBatch(a[0], b[0]));
  const packed = [], singles = atoms.filter(rows => rows.length === 1);
  let nextSingle = 0;
  for (const rows of atoms.filter(rows => rows.length > 1)) {
    const group = [...rows];
    while (group.length < maxBatches && nextSingle < singles.length) group.push(...singles[nextSingle++]);
    packed.push(group);
  }
  while (nextSingle < singles.length) {
    const rows = singles.slice(nextSingle, nextSingle + maxBatches).flat();
    nextSingle += maxBatches; packed.push(rows);
  }
  if (packed.length > maxGroups) throw Error(`Category cohesion needs ${packed.length} groups; capacity is ${maxGroups}. Adjust batch/category metadata or the authorized capacity.`);
  packed.sort((a, b) => compare(atomKey(a), atomKey(b)) || byBatch(a[0], b[0]));
  const groups = packed.map((rows, index) => ({ label: alphabeticLabel(index),
    covers: rows.map(row => row.id).sort((a, b) => Number(a) - Number(b)),
    rationale: `Stable category grouping for ${atomKey(rows)}; ${rows.length} existing batch(es), with category-sized blocks kept together.` }));
  const checked = validateAssignment(groups, batches, limits);
  if (checked.errors.length) throw Error(checked.errors.join('\n'));
  return groups;
}

/** Shared native CLI; wrappers supply their own engine's capacity constants. */
export function assignmentCLI({ repo = process.cwd(), argv = process.argv.slice(2), maxRunBatches, maxGroups, maxBatches }) {
  const option = name => { const index = argv.indexOf(`--${name}`); return index < 0 ? undefined : argv[index + 1]; };
  const run = option('run');
  const limits = { maxGroups: Number(option('max-groups') ?? maxGroups), maxBatches: Number(option('max-batches') ?? maxBatches) };
  try {
    if (!Number.isInteger(limits.maxGroups) || limits.maxGroups < 1 || limits.maxGroups > maxGroups
      || !Number.isInteger(limits.maxBatches) || limits.maxBatches < 1 || limits.maxBatches > maxBatches)
      throw Error(`Limits must be positive integers within ${maxGroups} groups and ${maxBatches} batches per group`);
    const batches = loadAssignmentBatches(repo, run, maxRunBatches);
    if (argv.includes('--facts')) {
      console.log(JSON.stringify({ run, max_groups: limits.maxGroups, max_batches_per_group: limits.maxBatches,
        batches: batches.map(batch => ({ batch: batch.id, categories: batch.categories })) }, null, 2));
      return 0;
    }
    const path = join(repo, 'research', `${run}-alpha-groups.json`);
    let groups, reused = false, priorBytes;
    if (existsSync(path)) {
      priorBytes = readFileSync(path); // Read failures must never discard prior history.
      try { const raw = JSON.parse(priorBytes.toString('utf8')); groups = Array.isArray(raw) ? raw : raw?.groups; }
      catch { /* generation may replace a malformed assignment, never a valid one */ }
      reused = validateAssignment(groups, batches, limits).errors.length === 0;
    }
    if (argv.includes('--generate') && !reused) {
      groups = generateAssignment(batches, limits);
      if (priorBytes) {
        if (!readFileSync(path).equals(priorBytes)) throw Error('Assignment changed during generation; drain its writers before retrying');
        const directory = join(repo, 'research', `${run}-alpha-groups-history`);
        const history = join(directory, `${createHash('sha256').update(priorBytes).digest('hex')}.json`);
        mkdirSync(directory, { recursive: true });
        if (existsSync(history)) {
          if (!readFileSync(history).equals(priorBytes)) throw Error('Assignment history hash conflict; preserve existing history');
        } else {
          const temporaryHistory = `${history}.${process.pid}.tmp`;
          writeFileSync(temporaryHistory, priorBytes); renameSync(temporaryHistory, history);
        }
      }
      const temporary = `${path}.${process.pid}.tmp`;
      writeFileSync(temporary, `${JSON.stringify(groups, null, 2)}\n`); renameSync(temporary, path);
    }
    const { errors, warnings } = validateAssignment(groups, batches, limits);
    const summary = { run, groups: Array.isArray(groups) ? groups.length : 0, batches: batches.length, errors: errors.length, warnings: warnings.length,
      ...(argv.includes('--generate') ? { reused } : {}) };
    if (argv.includes('--json')) console.log(JSON.stringify({ summary, errors, warnings }, null, 2));
    else {
      console.log(`alpha-groups: ${summary.groups} group(s) over ${summary.batches} batch(es)${reused && argv.includes('--generate') ? ' (existing assignment preserved)' : ''}`);
      for (const warning of warnings) console.warn(`WARN ${warning}`);
      for (const error of errors) console.error(`ERROR ${error}`);
    }
    return errors.length ? 1 : 0;
  } catch (error) { console.error(`alpha-groups: ${error.message}`); return 1; }
}
