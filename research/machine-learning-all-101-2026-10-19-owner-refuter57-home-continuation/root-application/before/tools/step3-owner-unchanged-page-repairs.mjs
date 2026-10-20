// A changed defining procedure can repair its unchanged same-batch page summary.
// This grants only the unchanged-carrier exception, never acceptance or coverage.
import { createHash } from 'node:crypto';
import { readFileSync, readdirSync, lstatSync } from 'node:fs';
import { resolve, relative, isAbsolute, join } from 'node:path';
import { split, yaml } from './pathway-lib.mjs';

export const UNCHANGED_PAGE_CAUSAL_POLICY = 'owner-step3-unchanged-page-causal-repair-v1';
export const REQUIRED_REPAIR_EVIDENCE_POLICY = 'step3-owner-repair-evidence-freeze-v1';
const sha = bytes => createHash('sha256').update(bytes).digest('hex');
const canonical = x => Array.isArray(x) ? x.map(canonical) : x && typeof x === 'object'
  ? Object.fromEntries(Object.keys(x).sort().map(k => [k, canonical(x[k])])) : x;
const hash = x => sha(JSON.stringify(canonical(x)) ?? 'undefined');
const equal = (a, b) => hash(a) === hash(b);
const hex = x => typeof x === 'string' && /^[a-f0-9]{64}$/.test(x);
const requireThat = x => { if (!x) throw Error('Invalid unchanged-page causal repair'); };
const unique = xs => Array.isArray(xs) && new Set(xs).size === xs.length;
const once = (text, literal) => typeof literal === 'string' && literal.length > 0
  && text.split(literal).length === 2;
const pageCarrier = ({ item_order: _order, ...value }) => value;
const semanticDecision = value => {
  requireThat(value && typeof value === 'object' && !Array.isArray(value));
  if (Object.hasOwn(value, 'subject_sha256')) requireThat(hex(value.subject_sha256));
  const { subject_sha256: _futureStamp, ...semantic } = value;
  return semantic;
};
const semanticDocument = doc => {
  requireThat(Array.isArray(doc?.decisions));
  return { ...doc, decisions: doc.decisions.map(semanticDecision) };
};

// No symlinks, traversal, absolute paths or nonregular source/evidence files.
function bytesAt(root, path) {
  requireThat(typeof path === 'string' && !isAbsolute(path) && !path.includes('\\')
    && path.split('/').every(part => part && part !== '.' && part !== '..'));
  const full = resolve(root, path), local = relative(resolve(root), full);
  requireThat(local && !local.startsWith('..') && !isAbsolute(local));
  let cursor = resolve(root);
  for (const part of local.split('/')) {
    cursor = join(cursor, part);
    requireThat(!lstatSync(cursor).isSymbolicLink());
  }
  requireThat(lstatSync(full).isFile());
  return readFileSync(full);
}
function reference(root, run, ref) {
  requireThat(ref && equal(Object.keys(ref).sort(), ['path', 'sha256'])
    && typeof ref.path === 'string' && ref.path.startsWith('research/' + run + '-')
    && hex(ref.sha256));
  const bytes = bytesAt(root, ref.path);
  requireThat(sha(bytes) === ref.sha256);
  return bytes;
}
const parse = bytes => JSON.parse(bytes.toString('utf8'));
function definition(text) {
  const parts = text.split(/^## Definition\s*$/m);
  requireThat(parts.length === 2);
  return parts[1].split(/^## /m)[0];
}
function nativeResult(result, run, batch, role, label) {
  requireThat(result?.run === run && result.role === role && result.label === label
    && result.ok === true && result.exit_code === 0 && result.process_exit_code === 0
    && result.timed_out === false && equal(result.covers?.map(String), [batch])
    && Number.isFinite(Date.parse(result.started_at))
    && Number.isFinite(Date.parse(result.ended_at))
    && Date.parse(result.ended_at) >= Date.parse(result.started_at)
    && result.terminal_summary?.task_completed === true
    && result.terminal_summary.task_aborted === false
    && result.terminal_summary.final_response_present === true);
}
function ownedContext(root, run, batch, page, cause) {
  const pageHomes = [], causeHomes = [];
  for (const name of readdirSync(join(root, 'research'))) {
    const match = name.match(new RegExp('^' + run + '-batch-([1-9]\\d*)\\.pages\\.json$'));
    if (!match) continue;
    const doc = parse(bytesAt(root, 'research/' + name));
    for (const row of Array.isArray(doc) ? doc : doc.pages ?? []) {
      if (row.id === page) pageHomes.push({ batch: match[1], row });
      for (const item of row.items ?? []) if ((typeof item === 'string' ? item : item.id) === cause)
        causeHomes.push({ batch: match[1], page: row.id, item });
    }
  }
  requireThat(pageHomes.length === 1 && causeHomes.length === 1
    && pageHomes[0].batch === batch && causeHomes[0].batch === batch
    && causeHomes[0].page === page);
  const row = pageHomes[0].row;
  requireThat(/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(row.category ?? ''));
  const { items, ...metadata } = row;
  const order = items.map(item => String(typeof item === 'string' ? item : item.id));
  requireThat(unique(order) && order.includes(cause));
  return { pagePath: 'library/' + row.category + '/' + page + '.md',
    metadata, order, causeItem: causeHomes[0].item };
}
function fixedRow(rows, id, subject, run, batch, obligation, decisionsPath) {
  const matches = rows.filter(row => row.defect_id === id);
  requireThat(matches.length === 1);
  const row = matches[0];
  requireThat(row.run === run && String(row.batch) === batch && row.group === 'batch-' + batch
    && row.subject === subject && row.caught_at_stage === '3a-adjudicate'
    && row.caught_by_role === 'group-alpha' && row.severity === 'fatal'
    && row.disposition === 'fixed' && row.repair_confidence === 1
    && row.adjudication_ref?.some(ref => ref.path === decisionsPath && ref.obligation === obligation));
  return row;
}

/**
 * Only call beside the existing priorAppliedRepair unchanged-carrier exception.
 * activeRows and currentCause are the existing validator's active ledger
 * projection and canonical live cause carrier. No other validation is waived.
 */
export function unchangedPageCausalRepair(root, run, decision, target, currentPage,
  entry, { activeRows, currentCause, ownerEvidence } = {}) {
  if (!entry || entry.policy !== UNCHANGED_PAGE_CAUSAL_POLICY || entry.run !== run
    || entry.obligation !== decision?.obligation || entry.id !== decision?.id) return false;
  try {
    requireThat(/^[A-Za-z0-9_-]+$/.test(run) && entry.version === 1
      && entry.owner_identity === '/root' && entry.reviewed === true
      && entry.type === 'procedure-budget-status-summary'
      && typeof entry.reason === 'string' && entry.reason.trim().length >= 80
      && ownerEvidence?.version === 1 && ownerEvidence.run === run
      && ownerEvidence.unchanged_page_causal_repairs?.filter(x => x.obligation === entry.obligation).length === 1
      && ownerEvidence.unchanged_page_causal_repairs.some(x => equal(x, entry)));
    // The separately installed receipt closure policy freezes this canonical
    // document and every refs value. Its marker belongs to the receipt, not
    // ownerEvidence; no invented ownerEvidence marker is required here.
    const batch = String(entry.batch), page = entry.id, cause = entry.cause?.id;
    requireThat(/^[1-9]\d*$/.test(batch) && /^[a-z][a-z0-9-]*$/.test(page)
      && /^alg-[a-z0-9-]+$/.test(cause ?? '') && cause !== page
      && new RegExp('^refuter:' + batch + ':[1-9]\\d*$').test(entry.obligation)
      && new RegExp('^refuter:' + batch + ':[1-9]\\d*$').test(entry.cause.obligation)
      && entry.cause.obligation !== entry.obligation && target?.route === 'flagged'
      && !target.direct && !target.added && !target.stabilized
      && decision.verdict === 'confirmed_fatal' && decision.repair_confidence === 1
      && equal(decision.defect_ids, [entry.defect_id])
      && entry.defect_id !== entry.cause.defect_id && Array.isArray(activeRows));
    const names = ['scope', 'post_snapshot', 'post_manifest', 'page_source', 'cause_before',
      'cause_after', 'refuter_report', 'refuter_result', 'alpha_result', 'alpha_prompt',
      'alpha_report', 'alpha_decisions', 'ledger_rows'];
    requireThat(entry.refs && equal(Object.keys(entry.refs).sort(), names.sort()));
    const refs = Object.fromEntries(names.map(name => [name, reference(root, run, entry.refs[name])]));
    const scopePath = 'research/' + run + '-step3-scope-' + batch + '.json';
    const postPath = 'research/' + run + '-step3-hash-' + batch + '-post.json';
    const manifestPath = 'research/' + run + '-batch-' + batch + '.pages.json';
    const decisionsPath = 'research/' + run + '-alpha-batch-' + batch + '-3a-decisions.json';
    const reportPath = 'research/' + run + '-alpha-batch-' + batch + '-3a.md';
    const scope = parse(refs.scope), liveScope = parse(bytesAt(root, scopePath)), post = parse(refs.post_snapshot);
    requireThat(scope.version === 2 && scope.run === run && String(scope.batch) === batch
      && liveScope.version === 2 && liveScope.run === run && String(liveScope.batch) === batch
      && post.version === 2 && post.run === run && String(post.batch) === batch && post.label === 'post'
      && equal(parse(bytesAt(root, postPath)), post)
      && unique(scope.refuter_scope) && unique(scope.manifest_post) && unique(scope.page_manifest_post)
      && scope.refuter_scope.includes(page) && scope.refuter_scope.includes(cause)
      && scope.page_manifest_post.includes(page) && !scope.manifest_post.includes(page)
      && scope.manifest_pre.includes(cause) && scope.manifest_post.includes(cause)
      && post.manifest.includes(cause) && post.page_manifest.includes(page));
    const found = scope.refuter_findings.filter(x => x.obligation === entry.obligation);
    const caused = scope.refuter_findings.filter(x => x.obligation === entry.cause.obligation);
    requireThat(found.length === 1 && caused.length === 1
      && equal(liveScope.refuter_findings, scope.refuter_findings));
    const finding = found[0], causeFinding = caused[0], { route: _route, ...actualTarget } = target;
    requireThat(equal(actualTarget, finding) && finding.id === page && causeFinding.id === cause
      && finding.severity === 'fatal' && causeFinding.severity === 'fatal'
      && !Object.hasOwn(finding, 'subject_type') && !Object.hasOwn(causeFinding, 'subject_type')
      && hex(entry.target_sha256) && hash(target) === entry.target_sha256);
    const nativeRefute = parse(refs.refuter_report), refuterResult = parse(refs.refuter_result);
    nativeResult(refuterResult, run, batch, 'refuter', 'refute-' + batch);
    requireThat(Number.isSafeInteger(refuterResult.attempt) && refuterResult.attempt >= 1);
    const refuterPrefix = 'research/' + run + '-dispatch/refuter-refute-' + batch;
    requireThat(bytesAt(root, refuterPrefix + '.result.json').equals(refs.refuter_result)
      && bytesAt(root, refuterPrefix + '.attempt-' + refuterResult.attempt + '.result.json')
        .equals(refs.refuter_result));
    requireThat(String(nativeRefute.batch) === batch && nativeRefute.not_opened?.length === 0);
    requireThat(equal(parse(bytesAt(root, 'research/' + run + '-refute-' + batch + '.json')), nativeRefute));
    requireThat(equal(parse(refuterResult.tail), nativeRefute));
    for (const row of [finding, causeFinding]) {
      const index = Number(row.obligation.split(':')[2]) - 1;
      const { obligation: _obligation, observed_sha256: _observed, ...original } = row;
      requireThat(equal(nativeRefute.flagged?.[index], original));
    }
    const oldPage = post.page_hashes?.[page], oldCause = post.hashes?.[cause];
    requireThat(oldPage && oldCause && hex(oldPage.file_sha256) && hex(oldPage.manifest_sha256)
      && ['item_sha256', 'contract_sha256', 'manifest_sha256'].every(k => hex(oldCause[k]))
      && finding.observed_sha256 === hash(pageCarrier(oldPage))
      && causeFinding.observed_sha256 === hash(oldCause)
      && hash(currentPage) === finding.observed_sha256);
    const context = ownedContext(root, run, batch, page, cause);
    const manifest = parse(refs.post_manifest), manifestPages = Array.isArray(manifest) ? manifest : manifest.pages;
    const oldManifestPages = manifestPages.filter(row => row.id === page);
    requireThat(oldManifestPages.length === 1);
    const { items: oldItems, ...oldMetadata } = oldManifestPages[0];
    const oldCauseItems = oldItems.filter(x => (typeof x === 'string' ? x : x.id) === cause);
    requireThat(oldCauseItems.length === 1);
    const oldCauseItem = typeof oldCauseItems[0] === 'string' ? { id: cause } : oldCauseItems[0];
    requireThat(hash(oldMetadata) === oldPage.manifest_sha256
      && hash({ ...oldCauseItem, __step4_page_id: page }) === oldCause.manifest_sha256
      && equal(oldItems.map(x => String(typeof x === 'string' ? x : x.id)), oldPage.item_order)
      && hash(context.metadata) === oldPage.manifest_sha256 && equal(context.order, oldPage.item_order)
      && entry.current_path === context.pagePath
      && entry.cause.current_path === 'items/' + cause + '.md');
    const pageBytes = bytesAt(root, context.pagePath), causeBytes = bytesAt(root, entry.cause.current_path);
    requireThat(pageBytes.equals(refs.page_source) && sha(pageBytes) === oldPage.file_sha256
      && sha(pageBytes) === entry.current_raw_sha256
      && sha(refs.cause_before) === oldCause.item_sha256
      && refs.cause_after.equals(causeBytes) && sha(causeBytes) === entry.cause.current_raw_sha256
      && !refs.cause_before.equals(causeBytes));
    const oldFM = yaml().parse(split(refs.cause_before.toString('utf8')).fm);
    const current = split(causeBytes.toString('utf8')), fm = yaml().parse(current.fm);
    const pageFM = yaml().parse(split(pageBytes.toString('utf8')).fm);
    requireThat(oldFM.id === cause && oldFM.kind === 'algorithm' && oldFM.status === 'draft'
      && oldFM.pipeline_run === run && fm.id === cause && fm.kind === 'algorithm'
      && fm.status === 'draft' && fm.pipeline_run === run && pageFM.page === page
      && pageFM.status === 'draft' && equal(pageFM.items?.map(String), context.order));
    const item = typeof context.causeItem === 'string' ? { id: cause } : context.causeItem;
    const contract = parse(bytesAt(root, 'research/' + run + '-batch-' + batch + '.proof-contracts.json'));
    const causeCarrier = { item_sha256: sha(causeBytes),
      contract_sha256: hash(contract.contracts?.[cause] ?? null),
      manifest_sha256: hash({ ...item, __step4_page_id: page }) };
    requireThat(equal(currentCause, causeCarrier) && hex(entry.cause.current_carrier_sha256)
      && hash(causeCarrier) === entry.cause.current_carrier_sha256
      && hash(causeCarrier) !== causeFinding.observed_sha256);
    const archivedDecisions = parse(refs.alpha_decisions), currentDecisions = parse(bytesAt(root, decisionsPath));
    requireThat(archivedDecisions.version === 1 && archivedDecisions.run === run
      && archivedDecisions.group === 'batch-' + batch
      && equal(semanticDocument(currentDecisions), semanticDocument(archivedDecisions)));
    const getDecision = obligation => {
      const matches = currentDecisions.decisions.filter(x => x.obligation === obligation);
      requireThat(matches.length === 1); return matches[0];
    };
    const pageDecision = getDecision(entry.obligation), causeDecision = getDecision(entry.cause.obligation);
    requireThat(equal(semanticDecision(pageDecision), semanticDecision(decision))
      && causeDecision.id === cause && causeDecision.route === 'flagged'
      && causeDecision.verdict === 'confirmed_fatal' && causeDecision.repair_confidence === 1
      && equal(causeDecision.defect_ids, [entry.cause.defect_id])
      && hex(entry.cause.target_sha256)
      && hash({ ...causeFinding, route: 'flagged' }) === entry.cause.target_sha256
      && hash(semanticDecision(pageDecision)) === entry.decision_sha256
      && hash(semanticDecision(causeDecision)) === entry.cause.decision_sha256);
    const pageRow = fixedRow(activeRows, entry.defect_id, page, run, batch, entry.obligation, decisionsPath);
    const causeRow = fixedRow(activeRows, entry.cause.defect_id, cause, run, batch, entry.cause.obligation, decisionsPath);
    requireThat(hex(entry.ledger_row_sha256) && hash(pageRow) === entry.ledger_row_sha256
      && hex(entry.cause.ledger_row_sha256) && hash(causeRow) === entry.cause.ledger_row_sha256);
    const archivedRows = parse(refs.ledger_rows);
    requireThat(Array.isArray(archivedRows) && archivedRows.length === 2
      && archivedRows.some(row => equal(row, pageRow)) && archivedRows.some(row => equal(row, causeRow)));
    const alphaResult = parse(refs.alpha_result);
    nativeResult(alphaResult, run, batch, 'alpha', '3a-batch-' + batch);
    requireThat(Number.isSafeInteger(alphaResult.attempt) && alphaResult.attempt >= 1);
    const prefix = 'research/' + run + '-dispatch/alpha-3a-batch-' + batch;
    requireThat(bytesAt(root, prefix + '.result.json').equals(refs.alpha_result)
      && bytesAt(root, prefix + '.attempt-' + alphaResult.attempt + '.result.json').equals(refs.alpha_result)
      && bytesAt(root, prefix + '.attempt-' + alphaResult.attempt + '.prompt.md').equals(refs.alpha_prompt)
      && alphaResult.prompt === resolve(root, prefix + '.attempt-' + alphaResult.attempt + '.prompt.md')
      && bytesAt(root, reportPath).equals(refs.alpha_report)
      && typeof alphaResult.tail === 'string'
      && alphaResult.tail.includes(reportPath) && alphaResult.tail.includes(decisionsPath));
    const relation = entry.relation;
    requireThat(relation?.kind === 'budget-status-summary' && relation.status === 'budget-exhausted'
      && once(pageBytes.toString('utf8'), relation.page_literal)
      && relation.page_literal.includes(relation.status)
      && once(definition(refs.cause_before.toString('utf8')), relation.before_literal)
      && once(definition(causeBytes.toString('utf8')), relation.after_literal)
      && relation.before_literal !== relation.after_literal
      && !definition(causeBytes.toString('utf8')).includes(relation.before_literal)
      && relation.after_literal.includes('budget-exhausted')
      && relation.after_literal.includes('take precedence')
      && typeof relation.complete_last_call_literal === 'string'
      && relation.after_literal.includes(relation.complete_last_call_literal)
      && relation.complete_last_call_literal.includes('completed certificate')
      && relation.complete_last_call_literal.includes('last call')
      && typeof relation.consumer_causal_literal === 'string'
      && relation.consumer_causal_literal.length >= 40
      && pageDecision.evidence.includes(relation.consumer_causal_literal)
      && relation.consumer_causal_literal.includes('unchanged')
      && typeof relation.report_literal === 'string' && relation.report_literal.length >= 80
      && refs.alpha_report.toString('utf8').includes(relation.report_literal)
      && relation.report_literal.includes(page) && relation.report_literal.includes('no page edit')
      && typeof relation.cause_review_literal === 'string' && relation.cause_review_literal.length >= 40
      && causeDecision.evidence.includes(relation.cause_review_literal));
    return true;
  } catch { return false; }
}
