// Structural evidence only. Step 3 independently judges the mathematics.
const text = (s) => typeof s === 'string' && s.trim().length > 0;
const url = (s) => { try { return ['http:', 'https:'].includes(new URL(s).protocol); } catch { return false; } };

export function sourceResolutionErrors(source) {
  const r = source?.source_resolution;
  if (!r) return [];
  const errors = [];
  if (!url(source.url)) errors.push('missing original source URL');
  if (r.status !== 'dropped') errors.push('owner escalation or unresolved source');
  if (!['step-1-scaffolder', 'owner'].includes(r.decided_by) || r.confidence !== 'certain') {
    errors.push('requires a fully confident scaffolder or owner decision; otherwise escalate to owner');
  }
  if (!text(r.reason) || !text(r.search_summary)) errors.push('missing retrieval failure and search evidence');
  if (!Array.isArray(r.attempts) || r.attempts.length < 6
      || r.attempts.some((a) => !url(a?.url) || !text(a?.outcome) || !text(a?.at))) {
    errors.push('record the initial failure and five recovery retries, with URL, time and outcome');
  }
  if (!Array.isArray(r.searches) || !r.searches.length
      || r.searches.some((s) => !text(s?.query) || !text(s?.outcome))) {
    errors.push('missing autonomous web-search record');
  }
  const alternatives = r.alternatives;
  if (!Array.isArray(alternatives)) errors.push('missing alternative proof records');
  for (const h of source.contents ?? []) {
    if (!['included', 'inline'].includes(h.disposition)) continue;
    const a = Array.isArray(alternatives) ? alternatives.find((a) => a?.item === h.item) : null;
    if (!a || !text(a.argument) || !Array.isArray(a.deps) || !a.deps.every(text)) {
      errors.push(`missing alternative argument and dependencies for ${h.item ?? h.name}`);
    }
  }
  return errors;
}

export function sourceDropped(source) {
  return source?.source_resolution?.status === 'dropped'
    && sourceResolutionErrors(source).length === 0;
}
