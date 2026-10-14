// A reviewed classification alias preserves the original independent findings.
// It grants neither source acceptance nor permission to share unrelated defects.
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { createHash } from 'node:crypto';

export function ownerReviewedFindingAlias(root, run, group, prior, decision, target, hashValue) {
  try {
    if (!/^[a-z0-9-]+$/.test(run)) return false;
    const path = `research/${run}-step3-owner-same-defect-aliases.json`;
    if (!existsSync(join(root, path))) return false;
    const cache = new Map();
    const bytes = relative => {
      if (typeof relative !== 'string' || relative.startsWith('/') || relative.split('/').includes('..')) throw Error('unsafe alias evidence');
      if (!cache.has(relative)) cache.set(relative, readFileSync(join(root, relative)));
      return cache.get(relative);
    };
    const sha = value => createHash('sha256').update(value).digest('hex');
    const raw = bytes(path), receipt = JSON.parse(raw);
    if (receipt.version !== 1 || receipt.run !== run || receipt.reviewed_by !== 'root'
      || sha(raw) !== decision.same_defect_receipt_sha256 || !Array.isArray(receipt.aliases)) return false;
    const entries = receipt.aliases.filter(row => row.group === group
      && row.primary_obligation === prior?.obligation && row.alias_obligation === decision.obligation);
    if (entries.length !== 1) return false;
    const entry = entries[0];
    const { batch: primaryBatch, route: _primaryRoute, ...primary } = prior.target ?? {};
    const { batch: aliasBatch, route: _aliasRoute, ...alias } = target ?? {};
    if (primaryBatch !== aliasBatch || !['reader', 'flagged'].includes(prior.route)
      || !['reader', 'flagged'].includes(decision.route) || prior.verdict !== decision.verdict
      || entry.subject !== primary.id || entry.subject !== alias.id
      || entry.consumer_id !== primary.consumer_id || entry.consumer_id !== alias.consumer_id
      || entry.producer_batch !== primary.producer_batch || entry.producer_batch !== alias.producer_batch
      || entry.primary_defect !== primary.defect || entry.alias_defect !== alias.defect
      || entry.primary_finding_sha256 !== hashValue(primary) || entry.alias_finding_sha256 !== hashValue(alias)) return false;
    const locationAlias = entry.kind === 'location-only-unbound-reader';
    if (locationAlias) {
      if (prior.route !== 'reader' || decision.route !== 'flagged'
        || primary.defect !== alias.defect || primary.severity !== alias.severity
        || primary.location !== entry.primary_location || alias.location !== entry.alias_location
        || primary.location === alias.location || primary.observation_basis !== 'unbound'
        || primary.observed_sha256 !== null || primary.observed_source
        || prior.historical_delta_unknown !== true || typeof prior.owner_resolution !== 'string'
        || prior.owner_resolution.length < 40
        || !/^[a-f0-9]{64}$/.test(alias.observed_sha256 ?? '')
        || !/^[a-f0-9]{64}$/.test(alias.observed_source?.item_sha256 ?? '')) return false;
    } else if (primary.defect === alias.defect
      || !/^[a-f0-9]{64}$/.test(primary.observed_sha256 ?? '') || primary.observed_sha256 !== alias.observed_sha256
      || primary.observed_source?.item_sha256 !== alias.observed_source?.item_sha256
      || !/^[a-f0-9]{64}$/.test(primary.observed_source?.item_sha256 ?? '')) return false;
    const bound = binding => {
      if (!binding?.path?.startsWith(`research/${run}-`) || !/^[a-f0-9]{64}$/.test(binding.sha256 ?? '')
        || receipt.inputs?.[binding.path] !== binding.sha256 || sha(bytes(binding.path)) !== binding.sha256) throw Error('stale alias evidence');
      return bytes(binding.path);
    };
    const owner = JSON.parse(bound(entry.scientific_owner_receipt));
    if (locationAlias) {
      if (owner.run !== run || owner.same_actual_issue !== true
        || owner.existing_canonical_defect_id !== entry.original_defect_id
        || owner.primary?.obligation !== prior.obligation || owner.alias?.obligation !== decision.obligation
        || owner.primary?.finding?.location !== primary.location || owner.alias?.finding?.location !== alias.location
        || owner.primary?.finding?.defect !== primary.defect || owner.alias?.finding?.defect !== alias.defect
        || owner.primary?.observation_basis !== 'unbound' || owner.primary?.observed_sha256 !== null
        || owner.primary?.finding?.observed_source !== null
        || owner.alias?.observed_source_item_sha256 !== alias.observed_source.item_sha256
        || typeof owner.literal_common_fault !== 'string' || owner.literal_common_fault.length < 80) return false;
      const before = entry.reviewed_before_source;
      bound(before);
      if (before.path !== owner.current_source?.before_archive || before.sha256 !== owner.current_source?.before_raw_sha256
        || entry.current_source?.sha256 !== owner.current_source?.final_raw_sha256) return false;
      bound({path: owner.final_scientific_release, sha256: receipt.inputs?.[owner.final_scientific_release]});
      const scopeGuard = entry.frozen_scope_guard;
      if (scopeGuard?.path !== `research/${run}-step3-scope-${primaryBatch}.json`) return false;
      const scope = JSON.parse(bound(scopeGuard));
      if (scope.run !== run || String(scope.batch) !== String(primaryBatch)) return false;
    } else if (owner.run !== run || owner.classification_approved !== true || owner.one_underlying_issue !== true
      || !owner.obligations?.includes(prior.obligation) || !owner.obligations?.includes(decision.obligation)
      || owner.original_labels_preserved?.[prior.obligation] !== primary.defect
      || owner.original_labels_preserved?.[decision.obligation] !== alias.defect
      || typeof owner.rationale !== 'string' || owner.rationale.length < 80
      || owner.canonical_defect_id !== entry.original_defect_id) return false;
    const guards = entry.frozen_file_guards;
    if (!Array.isArray(guards) || guards.length !== 2
      || !guards.some(g => g.path === `research/${run}-reader-findings-${primaryBatch}.json`)
      || !guards.some(g => g.path === `research/${run}-refute-${primaryBatch}.json`)) return false;
    for (const guard of guards) bound(guard);
    const source = entry.current_source;
    if (source?.path !== `items/${entry.subject}.md` || receipt.inputs?.[source.path] !== source.sha256
      || !/^[a-f0-9]{64}$/.test(source.sha256 ?? '') || sha(bytes(source.path)) !== source.sha256
      || (locationAlias ? owner.current_source?.path !== source.path
        : owner.current_source_guard?.sha256 !== source.sha256 || owner.current_source_guard?.path !== source.path)) return false;
    const text = bytes(source.path).toString();
    if (!Array.isArray(entry.reviewed_source_excerpts) || entry.reviewed_source_excerpts.length < 2
      || entry.reviewed_source_excerpts.some(excerpt => typeof excerpt !== 'string' || excerpt.length < 80 || !text.includes(excerpt))) return false;
    return true;
  } catch {
    return false;
  }
}
