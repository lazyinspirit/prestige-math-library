// Root may classify independent frozen findings as one actual repaired defect.
// This grants no historical source equality, native coverage, or source acceptance.
import {createHash} from 'node:crypto';
export const digest = bytes => createHash('sha256').update(bytes).digest('hex');
const canonical = x => Array.isArray(x) ? x.map(canonical) : x && typeof x === 'object'
  ? Object.fromEntries(Object.keys(x).sort().map(k => [k, canonical(x[k])])) : x;
export const hashObject = x => digest(JSON.stringify(canonical(x)) ?? 'undefined');
export function decisionCore(decision) {
  const {root_shared_finding_receipt_sha256: _receipt, subject_sha256: _stamp, ...core} = decision;
  return core;
}
export function rootSharedFinding({run, prior, decision, target, canonicalRow, currentCarrier,
  readBytes, hashValue = hashObject}) {
  try {
    const need = ok => {if (!ok) throw Error('invalid root shared finding');};
    const path = `research/${run}-step3-root-shared-findings.json`;
    const raw = readBytes(path), receipt = JSON.parse(raw);
    need(receipt.version === 1 && receipt.run === run && receipt.reviewed_by === 'root'
      && receipt.kind === 'root-adjudicated-shared-findings'
      && digest(raw) === decision.root_shared_finding_receipt_sha256);
    const bind = guard => {
      need(guard && typeof guard.path === 'string' && guard.path.startsWith(`research/${run}-`)
        && !guard.path.split('/').includes('..') && /^[a-f0-9]{64}$/.test(guard.sha256 ?? '')
        && receipt.inputs?.[guard.path] === guard.sha256);
      const bytes = readBytes(guard.path); need(digest(bytes) === guard.sha256); return bytes;
    };
    const entries = receipt.findings?.filter(e => e.canonical_defect_id === canonicalRow?.defect_id
      && e.participants?.some(p => p.obligation === prior?.obligation)
      && e.participants?.some(p => p.obligation === decision.obligation));
    need(entries?.length === 1); const e = entries[0];
    need(e.one_actual_defect === true && typeof e.rationale === 'string' && e.rationale.trim().length >= 100
      && canonicalRow.run === run && canonicalRow.subject === e.subject
      && canonicalRow.caught_at_stage === '3a-adjudicate'
      && canonicalRow.disposition === 'fixed' && canonicalRow.repair_confidence === 1
      && ['fatal', 'nonfatal'].includes(e.final_severity) && canonicalRow.severity === e.final_severity
      && e.canonical_row_sha256 === hashValue(canonicalRow)
      && prior.id === e.subject && decision.id === e.subject
      && prior.verdict === decision.verdict
      && decision.verdict === `confirmed_${e.final_severity}`
      && ['reader', 'flagged'].includes(prior.route) && ['reader', 'flagged'].includes(decision.route));
    need(Array.isArray(e.participants) && e.participants.length >= 2
      && new Set(e.participants.map(p => p.obligation)).size === e.participants.length);
    const refs = [];
    for (const p of e.participants) {
      const match = /^(reader|refuter):([1-9]\d*):([1-9]\d*)$/.exec(p.obligation);
      need(match && String(p.batch) === match[2] && p.route === (match[1] === 'reader' ? 'reader' : 'flagged')
        && p.decision_path === `research/${run}-alpha-batch-${p.batch}-3a-decisions.json`
        && p.scope_guard?.path === `research/${run}-step3-scope-${p.batch}.json`);
      const scope = JSON.parse(bind(p.scope_guard));
      need(scope.run === run && String(scope.batch) === String(p.batch));
      const frozen = (p.route === 'reader' ? scope.reader_findings : scope.refuter_findings)
        ?.filter(f => f.obligation === p.obligation);
      need(frozen?.length === 1 && frozen[0].id === e.subject
        && hashValue(frozen[0]) === p.frozen_finding_sha256);
      // Both original reports remain byte-bound; differing/unbound observations
      // are retained as-is, never filled in by this receipt.
      for (const [name, key] of [['reader-findings', 'reader_report_sha256'], ['refute', 'refuter_report_sha256']]) {
        const g = p.report_guards?.find(g => g.path === `research/${run}-${name}-${p.batch}.json`);
        need(g && g.sha256 === scope[key]); bind(g);
      }
      need(p.report_guards.length === 2);
      const file = JSON.parse(readBytes(p.decision_path));
      const decisions = file.decisions?.filter(d => d.obligation === p.obligation);
      need(decisions?.length === 1); const d = decisions[0];
      need(d.id === e.subject && d.route === p.route && d.verdict === decision.verdict
        && d.defect_ids?.length === 1 && d.defect_ids[0] === canonicalRow.defect_id
        && d.repair_confidence === 1 && hashValue(decisionCore(d)) === p.decision_core_sha256);
      const original = frozen[0];
      const unknownLimit = d.historical_delta_unknown === true
        && typeof d.owner_resolution === 'string' && d.owner_resolution.trim().length >= 40;
      for (const key of ['observed_source', 'observed_sha256', 'observation_basis',
        'producer_carrier_at_split', 'producer_pre_snapshot', 'producer_post_snapshot', 'dependency_path']) {
        if (Object.hasOwn(original, key)) {
          if (Object.hasOwn(d, key)) need(hashValue(d[key]) === hashValue(original[key]));
        } else if (Object.hasOwn(d, key) && d[key] !== undefined) {
          // Legacy decisions may record an explicitly limited owner trace;
          // absence in the frozen report never becomes observed source bytes.
          if (key === 'observed_source' || key === 'observed_sha256') need(d[key] === null && unknownLimit);
          else if (key === 'observation_basis') need(d[key] === 'unbound' && unknownLimit);
          else if (key === 'dependency_path') need(Array.isArray(d[key]) && unknownLimit);
          else need(false);
        }
      }
      if (original.observation_basis === 'unbound') need(unknownLimit);
      if (p.obligation === decision.obligation) {
        const {batch: _batch, route: _route, ...actual} = target ?? {};
        need(hashValue(actual) === hashValue(frozen[0])
          && hashValue(decisionCore(decision)) === p.decision_core_sha256);
      }
      if (p.obligation === prior.obligation) {
        const {batch: _batch, route: _route, ...actual} = prior.target ?? {};
        need(hashValue(actual) === hashValue(frozen[0]) && prior.route === d.route && prior.verdict === d.verdict);
      }
      refs.push({path: p.decision_path, obligation: p.obligation});
    }
    const sortRefs = xs => xs.map(x => ({path: x.path, obligation: x.obligation}))
      .sort((a, b) => `${a.path}:${a.obligation}`.localeCompare(`${b.path}:${b.obligation}`));
    need(hashValue(sortRefs(refs)) === hashValue(sortRefs(canonicalRow.adjudication_ref ?? [])));
    need(Array.isArray(e.scientific_evidence) && e.scientific_evidence.length >= 2
      && new Set(e.scientific_evidence.map(g => g.path)).size === e.scientific_evidence.length);
    for (const guard of e.scientific_evidence) {
      need(!e.participants.some(p => [p.decision_path, p.scope_guard.path, ...p.report_guards.map(g => g.path)].includes(guard.path)));
      need(bind(guard).length > 0);
    }
    need(currentCarrier && e.current_carrier_sha256 === hashValue(currentCarrier)
      && e.current_source?.path === `items/${e.subject}.md`
      && e.current_source.sha256 === currentCarrier.item_sha256
      && receipt.inputs?.[e.current_source.path] === e.current_source.sha256);
    const source = readBytes(e.current_source.path);
    need(digest(source) === e.current_source.sha256);
    need(Array.isArray(e.reviewed_source_excerpts) && e.reviewed_source_excerpts.length >= 2
      && e.reviewed_source_excerpts.length <= 12
      && new Set(e.reviewed_source_excerpts).size === e.reviewed_source_excerpts.length
      && e.reviewed_source_excerpts.every(x => typeof x === 'string' && x.length >= 80
        && x.length <= 4000 && source.toString().includes(x)));
    return true;
  } catch {return false;}
}
