// Pure mapping helpers for owner-authorized post-6B run imports.
// Source verdicts remain attributed to their original runs and are never
// represented as new model executions.
export function buildMapping(sources) {
  const pages = new Set(), items = new Set(), mappings = [], groups = [];
  let batchNumber = 0, groupNumber = 0;
  for (const source of sources) {
    const batchMap = {}, groupMap = {};
    for (const batch of source.batches) {
      const to = String(++batchNumber);
      batchMap[String(batch.batch)] = to;
      for (const page of batch.pages) {
        if (pages.has(page.id)) throw new Error(`Duplicate page ${page.id}`);
        pages.add(page.id);
        for (const item of page.items) {
          if (items.has(item.id)) throw new Error(`Duplicate item ${item.id}`);
          items.add(item.id);
        }
      }
    }
    const covered = new Set();
    for (const group of source.groups) {
      const label = String.fromCharCode(97 + groupNumber++);
      groupMap[group.label] = label;
      const covers = group.covers.map(String).map(batch => {
        if (!batchMap[batch] || covered.has(batch)) throw new Error(`Invalid group coverage ${source.run}/${batch}`);
        covered.add(batch);
        return batchMap[batch];
      });
      if (!covers.length || covers.length > 3) throw new Error('Groups must cover one to three batches');
      groups.push({ label, covers, rationale: `Imported from ${source.run} group ${group.label}; unchanged source review retained.` });
    }
    if (covered.size !== source.batches.length) throw new Error(`Incomplete group coverage ${source.run}`);
    mappings.push({ run: source.run, batchMap, groupMap });
  }
  if (groupNumber > 9 || pages.size / 2 > 27) throw new Error('Merged scope exceeds engine capacity');
  return { mappings, groups, pageCount: pages.size, itemCount: items.size, batchCount: batchNumber };
}

export function remapObligation(value, batchMap) {
  return value.replace(/\b(reader|refuter|post-reader|post-refuter|authored|authored-page):(\d+):/g,
    (all, role, batch) => batchMap[batch] ? `${role}:${batchMap[batch]}:` : all);
}

export function remapJson(value, mapping, target, defectMap = {}, key = '') {
  if (Array.isArray(value)) return value.map(v => remapJson(v, mapping, target, defectMap, key));
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([k, v]) =>
      [k, remapJson(v, mapping, target, defectMap, k)]));
  }
  if (typeof value === 'number' && ['batch', 'consumer_batch', 'supplier_batch', 'covers', 'batches'].includes(key))
    return mapping.batchMap[String(value)] ? Number(mapping.batchMap[String(value)]) : value;
  if (typeof value !== 'string') return value;
  if (key === 'run' && value === mapping.run) return target;
  if (['batch', 'consumer_batch', 'supplier_batch', 'covers', 'batches'].includes(key))
    return mapping.batchMap[value] ?? value;
  if (['group', 'repair_owner_group', 'consumer_group', 'supplier_group'].includes(key))
    return mapping.groupMap[value] ?? value;
  if (['defect_id', 'defect_ids'].includes(key)) return defectMap[value] ?? value;
  if (['obligation', 'step6_obligation'].includes(key)) {
    if (value.startsWith('gate:') && defectMap[value.slice(5)]) return `gate:${defectMap[value.slice(5)]}`;
    return remapObligation(value, mapping.batchMap);
  }
  // Human evidence, source locations, mathematical strings and hashes are
  // preserved byte-for-byte. In particular, never rewrite arbitrary '1' or 'a'.
  return value;
}

export function compositeBaseline(primary, overlays) {
  const result = structuredClone(primary);
  result.label = 'pre-author';
  result.imported_baseline = true;
  result.origins = [{ run: overlays[0]?.primaryRun, at: primary.at }];
  for (const { run, snapshot, ids } of overlays) {
    result.origins.push({ run, at: snapshot.at, ids: [...ids] });
    for (const id of ids) {
      if (Object.hasOwn(snapshot.hashes, id)) result.hashes[id] = snapshot.hashes[id];
      else delete result.hashes[id];
      if (result.surfaces) {
        if (Object.hasOwn(snapshot.surfaces ?? {}, id)) result.surfaces[id] = structuredClone(snapshot.surfaces[id]);
        else delete result.surfaces[id];
      }
    }
  }
  return result;
}
