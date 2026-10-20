// Evidence-bound owner routing for unchanged native Step-4 published alerts.
// This supplies no review coverage and never edits a digest or a verdict.
import { readFileSync } from 'node:fs';
import { resolve, relative, isAbsolute } from 'node:path';
import { createHash } from 'node:crypto';
import { isDeepStrictEqual } from 'node:util';
import { parseCodexOutput } from './codex-output-schema.mjs';
import { isPublishedItem, recordedPublishedRepair } from './published-repair-policy.mjs';

const sha = bytes => createHash('sha256').update(bytes).digest('hex');
export function publishedAlertRoute({ root, run, batch, group, digestPath, digest, alertIndex, frontierIds }) {
  const fail = message => { throw Error(message); };
  const research = path => {
    if (typeof path !== 'string' || !path.startsWith('research/') || path.includes('\\')) fail('invalid research evidence path');
    const absolute = resolve(root, path), rel = relative(resolve(root, 'research'), absolute);
    if (!rel || rel.startsWith('..') || isAbsolute(rel)) fail('evidence path escapes research');
    return readFileSync(absolute, 'utf8');
  };
  const bound = reference => {
    const bytes = research(reference?.path);
    if (!/^[a-f0-9]{64}$/.test(reference?.sha256 ?? '') || sha(bytes) !== reference.sha256) fail('stale bound evidence');
    return bytes;
  };
  try {
    const receiptPath = `research/${run}-step4-published-alert-routes.json`;
    const receipt = JSON.parse(research(receiptPath));
    if (receipt.version !== 1 || receipt.kind !== 'owner-routed-step4-published-alerts'
      || receipt.run !== run || receipt.authorized_by !== 'owner' || !Array.isArray(receipt.routes)) fail('invalid published-alert route receipt');
    const alert = digest.alerts?.[alertIndex];
    if (!alert || !/^[a-z][a-z0-9-]*$/.test(alert.item ?? '') || !isPublishedItem(root, alert.item) || frontierIds.has(alert.item)) fail('alert is not an outside published supplier');
    const routes = receipt.routes.filter(row => row.source_batch === String(batch)
      && row.source_group === String(group) && row.alert_index === alertIndex);
    if (routes.length !== 1) fail('missing or duplicate exact published-alert route');
    const route = routes[0];
    if (route.digest_path !== digestPath || sha(research(digestPath)) !== route.digest_sha256
      || !isDeepStrictEqual(route.alert, alert) || route.disposition !== 'repaired-published-supplier'
      || typeof route.reason !== 'string' || route.reason.trim().length < 80) fail('route does not bind the unchanged digest and exact alert');
    if (!/\.attempt-[1-9]\d*(?:\.replay-[1-9]\d*)?\.result\.json$/.test(route.native_result?.path ?? '')) fail('native result must name immutable attempt evidence');
    const native = JSON.parse(bound(route.native_result));
    if (native.run !== run || native.role !== 'alpha-batch-read' || native.label !== String(batch)
      || native.ok !== true || native.exit_code !== 0 || native.timed_out !== false
      || !isDeepStrictEqual(native.covers, [String(batch)])) fail('not a successful native batch reader result');
    if (route.native_output?.path !== route.native_result.path.replace(/\.result\.json$/, '.last-message.json')) fail('native output does not belong to the bound attempt');
    const original = parseCodexOutput(bound(route.native_output));
    if (!isDeepStrictEqual(original, digest)
      || research(digestPath) !== JSON.stringify(original, null, 2) + '\n') fail('digest differs from the actual native structured output');
    const repair = JSON.parse(bound(route.repair_receipt));
    const current = readFileSync(resolve(root, 'items', `${alert.item}.md`), 'utf8');
    const fm = /^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/.exec(current)?.[1] ?? '';
    const marker = /^ {2}repair:\s*(?:"([^"\n]+)"|'([^'\n]+)'|([^\s'"\n]+))\s*$/m.exec(fm)?.slice(1).find(Boolean);
    if (marker !== route.repair_receipt.path || repair.run !== run || repair.id !== alert.item) fail('repair receipt does not match the current published carrier');
    const valid = recordedPublishedRepair(root, alert.item, current, marker);
    if (!valid.ok) fail(`published repair is not policy-valid: ${valid.reason}`);
    if (!bound(route.owner_evidence).trim()) fail('empty focused owner disposition evidence');
    return { ok: true, route: { source_batch: String(batch), source_group: String(group),
      digest_path: digestPath, digest_sha256: route.digest_sha256, alert_index: alertIndex,
      alert, disposition: route.disposition, receipt: receiptPath, repair_receipt: marker,
      owner_evidence: route.owner_evidence, reason: route.reason } };
  } catch (error) { return { ok: false, reason: error.message }; }
}
