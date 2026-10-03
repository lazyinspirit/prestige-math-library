// Published mathematics may be repaired directly. Its repair is recorded and
// statement changes still propagate to direct consumers, but the item itself
// does not enter a repair gate, rejudgment, or adjudication queue.
import { recordedPublishedRepair as originalMathematicalRepair } from '../published-repair-policy.mjs';
import { existsSync, readFileSync } from 'node:fs';
import { join, resolve, relative, isAbsolute } from 'node:path';
import { createHash } from 'node:crypto';
import { itemHashGuard } from './item-hash.mjs';

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
      || field(before, 'proved_here') === 'false' || !hasPriorPublicationAudit(before)
      || sha(before) !== receipt.before_raw_sha256
      || itemHashGuard(before) !== receipt.pre_sha256 || receipt.pre_sha256 === current)
      return fail('pre-edit published carrier does not match the repair');
    const claims = readResearch(`research/${receipt.run}-step5-published-claims.jsonl`)
      .split(/\r?\n/).filter(Boolean).map((line) => JSON.parse(line));
    const claimsForItem = claims.filter((row) => row.id === id);
    const claim = claimsForItem[0];
    if (claimsForItem.length !== 1 || claim.version !== 1 || claim.run !== receipt.run
      || claim.group !== receipt.group || claim.pre_sha256 !== receipt.pre_sha256
      || !Number.isFinite(Date.parse(claim.claimed_at))) return fail('missing or mismatched pre-edit ownership claim');
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
