// Explicit owner disposition of unchanged outside-context presentation alerts.
// No repair, mathematical acceptance, in-run ownership or native coverage is created.
import { existsSync, readFileSync, readdirSync, lstatSync } from 'node:fs';
import { resolve, relative, isAbsolute } from 'node:path';
import { createHash } from 'node:crypto';
import { isDeepStrictEqual } from 'node:util';
import { parseCodexOutput } from './codex-output-schema.mjs';
import { itemHashGuard } from './item-hash.mjs';
import { split, yaml } from './pathway-lib.mjs';

export const OUTSIDE_CONTEXT_ALERT_KIND = 'owner-routed-step4-outside-context-alerts';
const categories = new Set(['statement-first-outside-frontier', 'legacy-context-formatting']);
const sha = bytes => createHash('sha256').update(bytes).digest('hex');
const need = (value, message) => { if (!value) throw Error(message); };
const date = value => typeof value === 'string' && Number.isFinite(Date.parse(value));
function readResearch(root, path) {
  need(typeof path === 'string' && path.startsWith('research/') && !path.includes('\\')
    && !path.split('/').some(part => !part || part === '.' || part === '..'), 'invalid research evidence path');
  return readSafe(root, path);
}
function readSafe(root, path) {
  const absolute = resolve(root, path), rel = relative(resolve(root), absolute);
  need(rel && !rel.startsWith('..') && !isAbsolute(rel), 'evidence path escapes repository');
  let part = resolve(root);
  for (const name of rel.split('/')) {
    part = resolve(part, name);
    need(!lstatSync(part).isSymbolicLink(), 'symlink evidence is not permitted');
  }
  need(lstatSync(absolute).isFile(), 'evidence must be a regular file');
  return readFileSync(absolute, 'utf8');
}
function bound(root, reference) {
  const text = readResearch(root, reference?.path);
  need(/^[a-f0-9]{64}$/.test(reference?.sha256 ?? '') && sha(text) === reference.sha256, 'stale bound evidence');
  return text;
}

/** Shared authentication only. Throws on invalid evidence; grants no disposition. */
export function authenticateNativeAlertEvidence({ root, run, batch, group, digestPath, digest, alertIndex, route }) {
  need(/^[A-Za-z0-9_-]+$/.test(run ?? '') && /^[1-9]\d*$/.test(String(batch)), 'invalid run or batch');
  need(route?.source_batch === String(batch) && route.source_group === String(group)
    && route.alert_index === alertIndex && Number.isSafeInteger(alertIndex) && alertIndex >= 0, 'wrong exact alert coordinates');
  const alert = digest?.alerts?.[alertIndex];
  need(alert && typeof alert.item === 'string' && typeof alert.finding === 'string' && alert.finding.trim(), 'missing exact alert');
  need(digestPath === `research/${run}-batch-${batch}-step5-context.json`
    && route.digest_path === digestPath && isDeepStrictEqual(route.alert, alert), 'wrong digest or alert');
  const digestText = readResearch(root, digestPath);
  need(sha(digestText) === route.digest_sha256 && digest.group === String(group)
    && isDeepStrictEqual(digest.batches, [String(batch)]), 'stale digest or group');
  const prefix = `research/${run}-dispatch/alpha-batch-read-${batch}`;
  need(typeof route.native_result?.path === 'string'
    && route.native_result.path.startsWith(prefix + '.attempt-')
    && /^\.attempt-[1-9]\d*(?:\.replay-[1-9]\d*)?\.result\.json$/.test(route.native_result.path.slice(prefix.length)), 'native result must name exact immutable reader attempt');
  const native = JSON.parse(bound(root, route.native_result));
  need(native.run === run && native.role === 'alpha-batch-read' && native.label === String(batch)
    && isDeepStrictEqual(native.covers, [String(batch)]) && native.ok === true
    && native.exit_code === 0 && native.timed_out === false
    && native.terminal_summary?.task_completed === true && native.terminal_summary?.task_aborted === false
    && native.terminal_summary?.final_response_present === true
    && date(native.started_at) && date(native.ended_at) && Date.parse(native.started_at) <= Date.parse(native.ended_at), 'not a completed successful native batch reader');
  need(route.native_output?.path === route.native_result.path.replace(/\.result\.json$/, '.last-message.json'), 'native output does not belong to reader attempt');
  const original = parseCodexOutput(bound(root, route.native_output));
  need(isDeepStrictEqual(original, digest) && digestText === JSON.stringify(original, null, 2) + '\n', 'digest differs from original native structured output');
  return { alert, native };
}

// Reparse every current run manifest: never trust a caller-provided exclusion set.
function currentFrontier(root, run) {
  const names = readdirSync(resolve(root, 'research')).filter(name =>
    name.startsWith(`${run}-batch-`) && /^[1-9]\d*\.pages\.json$/.test(name.slice(`${run}-batch-`.length)));
  need(names.length > 0, 'no current run manifests');
  const ids = new Set();
  for (const name of names) {
    const pages = JSON.parse(readResearch(root, `research/${name}`));
    need(Array.isArray(pages) && pages.length > 0, 'empty or malformed current manifest');
    for (const page of pages) {
      need(Array.isArray(page.items) && page.items.length > 0, 'empty current page inventory');
      for (const row of page.items) {
        const id = typeof row === 'string' ? row : row?.id;
        need(typeof id === 'string' && /^[a-z]+-[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*$/.test(id) && !ids.has(id), 'invalid or duplicate current frontier item');
        ids.add(id);
      }
    }
  }
  return ids;
}

/** An absent/no-match opt-in is unavailable; a matched invalid opt-in fails closed. */
export function outsideContextAlertRoute(args) {
  const { root, run, batch, group, digestPath, digest, alertIndex } = args;
  try {
    need(/^[A-Za-z0-9_-]+$/.test(run ?? ''), 'invalid run');
    const receiptPath = `research/${run}-step4-outside-context-alert-routes.json`;
    if (!existsSync(resolve(root, receiptPath))) return { ok: false, unavailable: true, reason: 'no outside-context presentation opt-in' };
    const receipt = JSON.parse(readResearch(root, receiptPath));
    need(receipt.version === 1 && receipt.kind === OUTSIDE_CONTEXT_ALERT_KIND && receipt.run === run
      && receipt.authorized_by === 'owner' && receipt.owner_identity === '/root'
      && date(receipt.recorded_at) && Array.isArray(receipt.routes), 'invalid explicit owner receipt');
    const matches = receipt.routes.filter(row => row.source_batch === String(batch)
      && row.source_group === String(group) && row.alert_index === alertIndex);
    if (!matches.length) return { ok: false, unavailable: true, reason: 'no matching outside-context presentation route' };
    need(matches.length === 1, 'duplicate exact outside-context route');
    const route = matches[0];
    need(route.disposition === 'unchanged-outside-scope-presentation' && categories.has(route.category)
      && typeof route.reason === 'string' && route.reason.trim().length >= 80, 'unknown presentation disposition or category');
    const { alert, native } = authenticateNativeAlertEvidence({ ...args, route });
    need(alert.severity === 'presentation', 'only presentation severity is eligible');
    need(/^[a-z][a-z0-9-]*$/.test(alert.item), 'invalid outside source ID');
    need(!currentFrontier(root, run).has(alert.item), 'source belongs to current authored frontier');
    const sourcePath = `items/${alert.item}.md`, source = readSafe(root, sourcePath);
    const meta = yaml().parse(split(source).fm);
    need(meta?.id === alert.item && ['draft', 'published'].includes(meta.status), 'source is not an exact draft/published context item');
    const before = bound(root, route.before_file);
    need(before === source && /^[a-f0-9]{64}$/.test(route.source_raw_sha256 ?? '')
      && sha(source) === route.source_raw_sha256 && route.before_file.sha256 === route.source_raw_sha256
      && itemHashGuard(source) === route.source_guard, 'outside source capture changed');
    need(route.statement_first_policy?.path === `research/${run}-statement-first.json`, 'wrong statement-first policy path');
    const policy = JSON.parse(bound(root, route.statement_first_policy));
    need(policy.version === 1 && policy.run === run && policy.domain === 'math'
      && policy.standard === 'statement-first-v1'
      && (policy.page_layout === undefined || policy.page_layout === 'compact-v1'), 'invalid current statement-first policy');
    const review = JSON.parse(bound(root, route.owner_evidence));
    need(review.version === 1 && review.kind === 'focused-owner-outside-context-presentation-review'
      && review.run === run && review.owner_identity === '/root'
      && review.review_result === 'outside-authored-scope-no-action' && review.category === route.category
      && review.source_batch === String(batch) && review.source_group === String(group)
      && review.alert_index === alertIndex && review.digest_sha256 === route.digest_sha256
      && isDeepStrictEqual(review.alert, alert) && review.source_id === alert.item
      && review.source_status === meta.status && review.source_raw_sha256 === route.source_raw_sha256
      && review.source_guard === route.source_guard
      && review.source_boundary === 'current-owner-capture-not-native-observed-bytes'
      && review.no_math_defect === true && review.source_changed === false
      && review.mathematical_acceptance === false && review.audit_coverage_adopted === false
      && review.native_coverage_adopted === false && typeof review.evidence === 'string'
      && review.evidence.trim().length >= 80, 'missing exact focused owner presentation review');
    need(date(route.source_captured_at) && date(review.reviewed_at)
      && Date.parse(native.ended_at) <= Date.parse(route.source_captured_at)
      && Date.parse(route.source_captured_at) <= Date.parse(review.reviewed_at)
      && Date.parse(review.reviewed_at) <= Date.parse(receipt.recorded_at), 'invalid owner capture/review chronology');
    return { ok: true, route: { source_batch: String(batch), source_group: String(group),
      digest_path: digestPath, digest_sha256: route.digest_sha256, alert_index: alertIndex, alert,
      disposition: route.disposition, category: route.category, scope: 'outside-authored-frontier-context-only',
      receipt: receiptPath, before_file: route.before_file, source_raw_sha256: route.source_raw_sha256,
      source_guard: route.source_guard, owner_evidence: route.owner_evidence,
      statement_first_policy: route.statement_first_policy, reason: route.reason } };
  } catch (error) { return { ok: false, reason: error.message }; }
}
