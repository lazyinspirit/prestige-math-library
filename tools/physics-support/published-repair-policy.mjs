// Published local physics carriers may receive recorded surgical corrections.
// This evidence grants no audit or initial-publication authority; public
// interface changes retain their ordinary consumer-review obligations.
import { recordedPublishedRepair as originalMathematicalRepair } from '../published-repair-policy.mjs';
import { existsSync, readFileSync } from 'node:fs';
import { join, resolve, relative, isAbsolute } from 'node:path';
import { createHash } from 'node:crypto';
import { spawnSync } from 'node:child_process';
import { itemHashGuard } from './item-hash.mjs';

const sha = (text) => createHash('sha256').update(text).digest('hex');
const frontmatter = (text) => /^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/.exec(text)?.[1] ?? '';
const field = (text, key) => new RegExp(`^${key}:\\s*["']?([^\\n"']+?)["']?\\s*$`, 'm').exec(frontmatter(text))?.[1];
const hasPriorPublicationAudit = (text) => {
  const block = /^verification:[ \t]*\r?\n((?:[ \t]+[^\n]*\n?)*)/m.exec(frontmatter(text))?.[1] ?? '';
  return /^ {2}audited:[ \t]*\S/m.test(block) || /^ {2}verified:[ \t]*(?:\S|$)/m.test(block);
};

// A legacy publication is authenticated by exact committed bytes, not by a
// retrospectively invented audit. Resolve the workspace prefix: physics may be
// nested in a repository or in a linked worktree.
function hasCommittedPriorPublication(root, id, before, commit, claimedAt) {
  if (!/^(?:[a-f0-9]{40}|[a-f0-9]{64})$/.test(commit ?? '')
    || !/^[a-zA-Z0-9_-]+$/.test(id)) return false;
  const git = args => spawnSync('git', ['--no-replace-objects', '-C', root, ...args],
    { maxBuffer: 16 * 1024 * 1024 });
  const metadata = git(['show', '--no-patch', '--format=%H%n%ct', commit]);
  if (metadata.status !== 0) return false;
  const [object, timestamp, ...extra] = metadata.stdout.toString('utf8').trim().split('\n');
  if (object !== commit || extra.length || !/^\d+$/.test(timestamp)
    || Number(timestamp) * 1000 > Date.parse(claimedAt)) return false;
  if (git(['merge-base', '--is-ancestor', commit, 'HEAD']).status !== 0) return false;
  const prefix = git(['rev-parse', '--show-prefix']);
  if (prefix.status !== 0) return false;
  const carrier = git(['show', `${commit}:${prefix.stdout.toString('utf8').replace(/\r?\n$/, '')}items/${id}.md`]);
  return carrier.status === 0 && carrier.stdout.equals(Buffer.from(before, 'utf8'));
}

export function isPublishedItem(root, id) {
  const path = join(root, 'items', `${id}.md`);
  if (!existsSync(path)) return false;
  const text = readFileSync(path, 'utf8');
  return field(text, 'status') === 'published';
}

/** Recorded local correction of an already-published carrier, never an audit
 * or permission for initial publication. All evidence is checked on disk. */
export function recordedPublishedRepair(root, id, text, receiptPath) {
  const importsPath = join(root, 'research/math-imports.json');
  if (existsSync(importsPath)) {
    const imports = JSON.parse(readFileSync(importsPath, 'utf8'));
    if (imports.files.some(file => file.path === `items/${id}.md`)) return originalMathematicalRepair(imports.source_root, id, text, receiptPath);
  }
  const fail = (reason) => ({ ok: false, reason });
  if (!receiptPath) return fail('no local repair receipt');
  const readResearch = (path) => {
    if (typeof path !== 'string' || !path.startsWith('research/') || path.includes('\\'))
      throw new Error('evidence must be a repository research path');
    const absolute = resolve(root, path);
    const rel = relative(resolve(root, 'research'), absolute);
    if (!rel || rel.startsWith('..') || isAbsolute(rel)) throw new Error('evidence path escapes research');
    return readFileSync(absolute, 'utf8');
  };
  try {
    if (field(text, 'id') !== id || field(text, 'status') !== 'published'
      || field(text, 'proved_here') === 'false') return fail('current carrier is not a published proved item');
    const receipt = JSON.parse(readResearch(receiptPath));
    if (receipt.version !== 1 || receipt.kind !== 'recorded-local-published-repair' || receipt.id !== id
      || !/^[a-zA-Z0-9_-]+$/.test(receipt.run ?? '') || !/^[a-zA-Z0-9_-]+$/.test(receipt.group ?? '')
      || typeof receipt.correction !== 'string' || !receipt.correction.trim()) return fail('invalid local repair receipt');
    const current = itemHashGuard(text);
    if (receipt.content_sha256 !== current) return fail('local repair receipt is stale');
    const before = readResearch(receipt.before_file);
    if (field(before, 'id') !== id || field(before, 'status') !== 'published'
      || field(before, 'proved_here') === 'false'
      || sha(before) !== receipt.before_raw_sha256
      || itemHashGuard(before) !== receipt.pre_sha256 || receipt.pre_sha256 === current)
      return fail('pre-edit published carrier does not match the repair');
    const namespace = receipt.ownership_namespace ?? 'step3';
    if (!['step3', 'owner-maintenance'].includes(namespace)) return fail('invalid ownership namespace');
    const claimsPath = `research/${receipt.run}-${namespace === 'step3' ? 'step3' : 'owner-maintenance'}-published-claims.jsonl`;
    if ((receipt.ownership_claims_file !== undefined && receipt.ownership_claims_file !== claimsPath)
      || (namespace === 'owner-maintenance' && receipt.ownership_claims_file !== claimsPath))
      return fail('ownership ledger path does not match its namespace');
    const claimsText = readResearch(claimsPath);
    if ((namespace === 'owner-maintenance' || receipt.ownership_claims_sha256 !== undefined)
      && receipt.ownership_claims_sha256 !== sha(claimsText)) return fail('ownership ledger hash is stale');
    const otherPath = `research/${receipt.run}-${namespace === 'step3' ? 'owner-maintenance' : 'step3'}-published-claims.jsonl`;
    if (existsSync(resolve(root, otherPath)) && readResearch(otherPath).split(/\r?\n/).filter(Boolean)
      .some(line => JSON.parse(line).id === id)) return fail('mixed ownership namespaces');
    const claims = claimsText
      .split(/\r?\n/).filter(Boolean).map((line) => JSON.parse(line));
    const claimsForItem = claims.filter((row) => row.id === id);
    const claim = claimsForItem[0];
    if (claimsForItem.length !== 1 || claim.version !== 1 || claim.run !== receipt.run
      || (claim.ownership_namespace ?? 'step3') !== namespace
      || (namespace === 'owner-maintenance' && claim.ownership_claims_file !== claimsPath)
      || claim.group !== receipt.group || claim.pre_sha256 !== receipt.pre_sha256
      || !Number.isFinite(Date.parse(claim.claimed_at))) return fail('missing or mismatched pre-edit ownership claim');
    if (!hasPriorPublicationAudit(before)
      && !hasCommittedPriorPublication(root, id, before, receipt.prior_publication_commit, claim.claimed_at))
      return fail('pre-edit carrier lacks an audit or authenticated prior publication');
    if (!/^[a-zA-Z0-9:_-]+$/.test(receipt.ledger_marker ?? '')) return fail('invalid ledger marker');
    const ledger = readResearch('research/published-consumer-supplier-ledger.md');
    const start = `<!-- local-published-repair:${receipt.ledger_marker}:begin -->`;
    const end = `<!-- local-published-repair:${receipt.ledger_marker}:end -->`;
    if (ledger.split(start).length !== 2 || ledger.split(end).length !== 2) return fail('missing or ambiguous canonical ledger evidence');
    const evidence = ledger.split(start)[1].split(end)[0];
    if (sha(evidence) !== receipt.ledger_sha256 || !evidence.includes(id)
      || !evidence.includes(current)) return fail('canonical ledger evidence does not match the current repair');
    const recorded = Date.parse(receipt.recorded_at);
    if (!Number.isFinite(recorded)) return fail('repair recording date is missing');
    for (const tool of ['precheck', 'rendercheck']) {
      const check = receipt.local_checks?.[tool];
      const checked = Date.parse(check?.checked_at);
      if (check?.exit_code !== 0 || check?.content_sha256 !== current
        || !Array.isArray(check.command) || !check.command.includes(`items/${id}.md`)
        || !check.command.some((arg) => typeof arg === 'string' && arg.endsWith(`/tools/physics-support/${tool}${tool === 'precheck' ? '.mts' : '.mjs'}`)
          || arg === `tools/physics-support/${tool}${tool === 'precheck' ? '.mts' : '.mjs'}`)
        || !Number.isFinite(checked) || checked < Date.parse(claim.claimed_at) || checked > recorded
        || typeof check.output !== 'string'
        || !(tool === 'precheck' ? check.output.includes(`PASS items/${id}.md`) && check.output.includes('0 failing')
          : check.output.includes('OK — 1 file(s)')))
        return fail(`missing current successful local ${tool} check`);
    }
    return { ok: true, receipt: receiptPath, correction: receipt.correction };
  } catch (error) {
    return fail(`unreadable local repair evidence: ${error.message}`);
  }
}
