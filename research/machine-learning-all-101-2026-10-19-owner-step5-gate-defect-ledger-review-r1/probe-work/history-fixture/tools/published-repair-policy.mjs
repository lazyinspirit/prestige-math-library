// Published mathematics may be repaired directly. Its repair is recorded and
// statement changes still propagate to direct consumers. Outside-context
// maintenance remains distinct from a frozen frontier: published items selected
// as native Step-5 subjects owe full adjudication, certification and rejudgment.
import { existsSync, readFileSync } from 'node:fs';
import { join, resolve, relative, isAbsolute } from 'node:path';
import { createHash } from 'node:crypto';
import { spawnSync } from 'node:child_process';
import { itemHashGuard } from './item-hash.mjs';
import { ADOPTION_KIND, authenticateAdoption, hasCommittedPriorPublication } from './published-repair-adoption.mjs';
import { hasPhysicsContextPriorPublication } from './physics-math-context-history.mjs';

const sha = (text) => createHash('sha256').update(text).digest('hex');
const frontmatter = (text) => /^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/.exec(text)?.[1] ?? '';
const field = (text, key) => new RegExp(`^${key}:\\s*["']?([^\\n"']+?)["']?\\s*$`, 'm').exec(frontmatter(text))?.[1];
const hasPriorPublicationAudit = (text) => {
  const block = /^verification:[ \t]*\r?\n((?:[ \t]+[^\n]*\n?)*)/m.exec(frontmatter(text))?.[1] ?? '';
  return /^ {2}audited:[ \t]*\S/m.test(block) || /^ {2}verified:[ \t]*(?:\S|$)/m.test(block);
};

export function isPublishedItem(root, id) {
  const path = join(root, 'items', `${id}.md`);
  if (!existsSync(path)) return false;
  const text = readFileSync(path, 'utf8');
  return field(text, 'status') === 'published';
}

function nonProofPrecheckNotApplicable(check, text, id, before) {
  if (!['definition', 'algorithm', 'remark', 'example'].includes(field(text, 'kind'))
    || field(text, 'kind') !== field(before, 'kind')
    || /^## (?:Proof|Refutation|Counterexample|Verification)\b/m.test(before)
    || /^## (?:Proof|Refutation|Counterexample|Verification)\b/m.test(text)
    || !check.command.includes('--json')) return false;
  try {
    const result = JSON.parse(check.output);
    return result.summary?.files === 1 && result.summary.checked === 0
      && result.summary.failed === 0 && result.results?.length === 1
      && result.results[0].file === `items/${id}.md`
      && result.results[0].item_id === id && result.results[0].status === 'not-applicable';
  } catch { return false; }
}

/** Recorded local correction of an already-published carrier, never an audit
 * or permission for initial publication. All evidence is checked on disk. */
export function recordedPublishedRepair(root, id, text, receiptPath) {
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
    const claims = readResearch(`research/${receipt.run}-step3-published-claims.jsonl`)
      .split(/\r?\n/).filter(Boolean).map((line) => JSON.parse(line));
    const claimsForItem = claims.filter((row) => row.id === id);
    const claim = claimsForItem[0];
    if (claimsForItem.length !== 1 || claim.version !== 1 || claim.run !== receipt.run
      || claim.group !== receipt.group || claim.pre_sha256 !== receipt.pre_sha256
      || !Number.isFinite(Date.parse(claim.claimed_at))) return fail('missing or mismatched pre-edit ownership claim');
    if (claim.claim_kind === ADOPTION_KIND) {
      authenticateAdoption(root, claim, receipt, text);
    } else if (claim.claim_kind !== undefined && claim.claim_kind !== 'pre-edit') {
      return fail('unknown published repair ownership claim kind');
    } else if (claim.adoption_receipt !== undefined || claim.adoption_sha256 !== undefined) {
      return fail('adoption evidence requires its explicit ownership claim kind');
    }
    if (receipt.prior_publication_context !== undefined) {
      // Explicit imported lineage is checked even if an audit or root Git
      // carrier would otherwise suffice. It never extends adoption recovery.
      if (claim.claim_kind === ADOPTION_KIND || !hasPhysicsContextPriorPublication(root, id, before,
        receipt.prior_publication_commit, claim.claimed_at, receipt.run, receipt.prior_publication_context))
        return fail('invalid prior physics mathematics context publication');
    } else if (claim.claim_kind !== ADOPTION_KIND && !hasPriorPublicationAudit(before)
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
        || !check.command.some((arg) => typeof arg === 'string' && arg.endsWith(`/tools/${tool}${tool === 'precheck' ? '.mts' : '.mjs'}`)
          || arg === `tools/${tool}${tool === 'precheck' ? '.mts' : '.mjs'}`)
        || !Number.isFinite(checked) || checked < Date.parse(claim.claimed_at) || checked > recorded
        || typeof check.output !== 'string'
        || !(tool === 'precheck' ? (check.output.includes(`PASS items/${id}.md`) && check.output.includes('0 failing')
            || nonProofPrecheckNotApplicable(check, text, id, before))
          : check.output.includes('OK — 1 file(s)')))
        return fail(`missing current successful local ${tool} check`);
    }
    return { ok: true, receipt: receiptPath, correction: receipt.correction };
  } catch (error) {
    return fail(`unreadable local repair evidence: ${error.message}`);
  }
}

/** Close ownership of an untouched published prerequisite. This records no
 * repair, audit or acceptance, and cannot authorize initial publication. */
export function unchangedPublishedClaim(root, run, claim, text) {
  const fail = reason => ({ ok: false, reason });
  const receiptPath = `research/${run}-published-noop-closure.json`;
  try {
    if (!/^[a-zA-Z0-9_-]+$/.test(run) || claim.run !== run || claim.version !== 1
      || !/^[a-z][a-z0-9-]*$/.test(claim.id ?? '')
      || !/^[a-zA-Z0-9_-]+$/.test(claim.group ?? '')
      || !Number.isFinite(Date.parse(claim.claimed_at))) return fail('invalid unchanged ownership claim');
    if (field(text, 'id') !== claim.id || field(text, 'status') !== 'published'
      || field(text, 'proved_here') === 'false' || itemHashGuard(text) !== claim.pre_sha256)
      return fail('ownership claim has changed or is not a published proved item');
    const claimsText = readFileSync(join(root, `research/${run}-step3-published-claims.jsonl`), 'utf8');
    const claims = claimsText.split(/\r?\n/).filter(Boolean).map(JSON.parse);
    const matches = claims.filter(row => row.id === claim.id);
    if (matches.length !== 1 || JSON.stringify(matches[0]) !== JSON.stringify(claim))
      return fail('missing or ambiguous exact unchanged ownership claim');
    const closureText = readFileSync(join(root, `research/${run}-step3-closure.json`), 'utf8');
    const receipt = JSON.parse(readFileSync(join(root, receiptPath), 'utf8'));
    if (receipt.version !== 1 || receipt.kind !== 'unchanged-published-ownership-closure'
      || receipt.run !== run || receipt.authorized_by !== 'owner'
      || receipt.claims_sha256 !== sha(claimsText) || receipt.step3_closure_sha256 !== sha(closureText)
      || !Number.isFinite(Date.parse(receipt.recorded_at))
      || Date.parse(receipt.recorded_at) < Date.parse(claim.claimed_at)
      || !Array.isArray(receipt.claims)) return fail('invalid unchanged ownership closure receipt');
    const rows = receipt.claims.filter(row => row.id === claim.id), row = rows[0];
    if (rows.length !== 1 || row.group !== claim.group || row.pre_sha256 !== claim.pre_sha256
      || row.current_raw_sha256 !== sha(text)) return fail('unchanged ownership closure is stale or ambiguous');
    const commit = row.prior_publication_commit;
    if (!/^(?:[a-f0-9]{40}|[a-f0-9]{64})$/.test(commit ?? '')) return fail('missing prior publication commit');
    const original = spawnSync('git', ['--no-replace-objects', '-C', root, 'show',
      `${commit}:items/${claim.id}.md`], { maxBuffer: 16 * 1024 * 1024 });
    if (original.status !== 0) return fail('unreadable original published carrier');
    const before = original.stdout.toString('utf8');
    if (sha(before) !== row.before_raw_sha256 || itemHashGuard(before) !== claim.pre_sha256
      || field(before, 'id') !== claim.id || field(before, 'status') !== 'published'
      || field(before, 'proved_here') === 'false'
      || !hasCommittedPriorPublication(root, claim.id, before, commit, claim.claimed_at))
      return fail('original committed publication does not authenticate the unchanged claim');
    const closure = spawnSync(process.execPath, ['tools/step3-close.mjs', 'verify', '--run', run, '--root', root],
      { cwd: root, encoding: 'utf8', maxBuffer: 16 * 1024 * 1024 });
    if (closure.status !== 0) return fail('original frozen Step-3 closure is not intact');
    return { ok: true, receipt: receiptPath, receipt_sha256: sha(readFileSync(join(root, receiptPath))) };
  } catch (error) { return fail(`unreadable unchanged ownership evidence: ${error.message}`); }
}
