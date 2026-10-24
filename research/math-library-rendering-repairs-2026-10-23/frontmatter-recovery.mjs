import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const sha = value => crypto.createHash('sha256').update(value).digest('hex');

// This comparison never replaces the authentic malformed pre-edit archive.
export function beforeMetadataWithApprovedRecovery(root, dir, run, entry, before, parse) {
  try { return { metadata: parse(before), recovery: null }; }
  catch (originalError) {
    const approvalPath = `${dir}/frontmatter-recoveries/${entry.id}.json`;
    if (!fs.existsSync(approvalPath)) throw originalError;
    const approvalRaw = fs.readFileSync(approvalPath, 'utf8');
    const approval = JSON.parse(approvalRaw);
    if (approval.version !== 1 || approval.kind !== 'bounded-published-frontmatter-syntax-recovery'
      || approval.approved !== true || approval.approved_by !== '/root'
      || approval.id !== entry.id || approval.run !== run || approval.group !== entry.group
      || approval.source !== entry.source || approval.before_raw_sha256 !== sha(before))
      throw Error('Unapproved malformed-frontmatter recovery');
    const envelope = before.match(/^---\n([\s\S]*?)\n---\n/);
    let target, replacement;
    if (approval.operation === 'drop-only-dangling-judge-block-after-proof-strategy'
      || approval.operation === 'drop-only-dangling-judge-block-after-axiom-use') {
      const block = approval.exact_removed_block;
      if (typeof block !== 'string' || !block.startsWith('  judge:\n')
        || sha(block) !== approval.removed_block_sha256)
        throw Error('Malformed judge block does not match its approval');
      const scalar = approval.operation === 'drop-only-dangling-judge-block-after-proof-strategy'
        ? 'proof_strategy: direct' : approval.exact_scalar_line;
      if (typeof scalar !== 'string'
        || (approval.operation.endsWith('after-axiom-use') && !/^axiom_use: "[^"\r\n]*"$/.test(scalar)))
        throw Error('Unapproved axiom-use scalar recovery');
      target = `${scalar}\n${block}`;
      replacement = `${scalar}\n`;
    } else if (approval.operation === 'normalize-concatenated-directverification-empty') {
      target = 'verification: {}\nproof_strategy: directverification: {}';
      replacement = 'verification: {}\nproof_strategy: direct';
      if (approval.exact_before_fragment !== target || approval.exact_after_fragment !== replacement)
        throw Error('Concatenated metadata recovery does not match its approval');
    } else throw Error('Unsupported frontmatter recovery operation');
    if (!envelope || envelope[1].split(target).length !== 2)
      throw Error('Malformed-frontmatter recovery does not match the exact header');
    const recovered = before.replace(target, replacement);
    const comparisonPath = path.resolve(root, approval.comparison_only_source);
    const allowed = path.resolve(root, dir, 'frontmatter-recoveries', 'comparison-only') + path.sep;
    if (!comparisonPath.startsWith(allowed)
      || sha(recovered) !== approval.comparison_raw_sha256
      || fs.readFileSync(comparisonPath, 'utf8') !== recovered)
      throw Error('Malformed-frontmatter comparison evidence mismatch');
    const metadata = parse(recovered);
    if (metadata.id !== entry.id || metadata.status !== 'published'
      || metadata.proof_strategy !== 'direct')
      throw Error('Recovery changes identity, publication status or proof strategy');
    return { metadata, recovery: { approval, approvalPath, approvalRaw } };
  }
}
