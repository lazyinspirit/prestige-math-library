// An unresolved 5a decision is an owner hold, never an automatic repair retry.
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { createHash } from 'node:crypto';
import { split, yaml } from './pathway-lib.mjs';
import { itemHashGuard } from './item-hash.mjs';
import { step5Adjudicators } from './step5-adjudicators.mjs';

const sha256 = value => createHash('sha256').update(value).digest('hex');
const canonical = value => Array.isArray(value) ? value.map(canonical)
  : value && typeof value === 'object'
    ? Object.fromEntries(Object.keys(value).sort().map(key => [key, canonical(value[key])])) : value;
const hashValue = value => sha256(JSON.stringify(canonical(value)) ?? 'undefined');
const meaningful = value => typeof value === 'string' && value.trim().length >= 80;

/** An outside supplier remains a maintenance finding. Only its exact owned
 * use can be accepted, on current mathematical bytes and explicit premises.
 * Shared by the owner hold, stamp, and routing gate; no outside-item bypass. */
export function externalContextReceipt(root, run, decision, target = null, group = null) {
  const reject = error => ({ valid: false, error });
  try {
    if (!/^[a-z0-9-]+$/.test(run)) return reject('invalid run');
    const dir = join(root, 'research'), manifests = new Map();
    for (const name of readdirSync(dir)) {
      if (!name.startsWith(`${run}-batch-`) || !name.endsWith('.pages.json')) continue;
      const batch = name.slice(`${run}-batch-`.length, -'.pages.json'.length);
      if (!/^\d+$/.test(batch)) continue;
      const doc = JSON.parse(readFileSync(join(dir, name), 'utf8'));
      const pages = Array.isArray(doc) ? doc : doc.pages ?? [];
      manifests.set(batch, pages.flatMap(page => (page.items ?? [])
        .map(item => typeof item === 'string' ? item : item?.id).filter(Boolean)));
    }
    const inventory = new Set([...manifests.values()].flat());
    const match = /^reader:([1-9]\d*):([1-9]\d*)$/.exec(decision?.obligation ?? '');
    if (!inventory.size || !match || decision.verdict !== 'context_accepted'
      || decision.route !== 'reader' || decision.repair_confidence !== 1
      || !Array.isArray(decision.defect_ids) || decision.defect_ids.length
      || inventory.has(decision.id)) return reject('not an outside published reader context disposition');
    const batch = match[1], scope = JSON.parse(readFileSync(join(dir, `${run}-step5-scope-${batch}.json`), 'utf8'));
    const findings = (scope.reader_findings ?? []).filter(row => row.obligation === decision.obligation);
    const finding = findings[0];
    if (scope.version !== 2 || scope.run !== run || String(scope.batch) !== batch
      || findings.length !== 1 || finding?.subject_type !== 'published-dependency'
      || finding.id !== decision.id || finding.consumer_id !== decision.consumer_id
      || !manifests.get(batch)?.includes(finding.consumer_id)
      || !(scope.manifest_post ?? []).includes(finding.consumer_id)) return reject('missing exact owned published consumer binding');
    if (target) {
      const { route: _route, batch: _batch, ...original } = target;
      if (hashValue(original) !== hashValue(finding)) return reject('context target differs from the original finding');
    }
    const receiptPath = `research/${run}-step5-owner-external-context.json`;
    const raw = readFileSync(join(root, receiptPath), 'utf8'), receipt = JSON.parse(raw);
    if (receipt.version !== 1 || receipt.run !== run || receipt.reviewed_by !== 'root'
      || !Array.isArray(receipt.contexts) || sha256(raw) !== decision.context_receipt_sha256) {
      return reject('missing current root context receipt hash');
    }
    const entries = receipt.contexts.filter(row => row.obligation === decision.obligation);
    const entry = entries[0];
    const assignments = JSON.parse(readFileSync(join(dir, `${run}-alpha-groups.json`), 'utf8'));
    const assignmentRows = (Array.isArray(assignments) ? assignments : assignments.groups ?? [])
      .map(row => ({ label: String(row.label), covers: (row.covers ?? []).map(String) }));
    const owners = step5Adjudicators(root, run, assignmentRows).filter(row => row.covers.includes(batch));
    const ownerGroup = group ?? entry?.group;
    if (owners.length !== 1 || owners[0].label !== ownerGroup
      || ![scope.group, `batch-${batch}`].includes(ownerGroup)) return reject('wrong current decision owner');
    const decisionPath = `research/${run}-alpha-${ownerGroup}-5a-decisions.json`;
    const ownerDoc = JSON.parse(readFileSync(join(root, decisionPath), 'utf8'));
    const ownedDecisions = (ownerDoc.decisions ?? []).filter(row => row.obligation === decision.obligation);
    if (ownerDoc.version !== 1 || ownerDoc.run !== run || ownerDoc.group !== ownerGroup
      || ownedDecisions.length !== 1 || ownedDecisions[0].id !== decision.id
      || ownedDecisions[0].consumer_id !== decision.consumer_id
      || ownedDecisions[0].verdict !== decision.verdict
      || ownedDecisions[0].context_receipt_sha256 !== decision.context_receipt_sha256) {
      return reject('context does not belong to the exact current decision path');
    }
    if (entries.length !== 1 || entry.group !== ownerGroup || entry.supplier_id !== finding.id
      || entry.consumer_id !== finding.consumer_id || entry.finding_sha256 !== hashValue(finding)) {
      return reject('receipt does not retain the exact original finding');
    }
    const texts = new Map(), Y = yaml();
    const item = id => {
      if (!/^[a-z][a-z0-9-]*$/.test(id)) throw new Error('invalid item id');
      if (!texts.has(id)) texts.set(id, readFileSync(join(root, 'items', `${id}.md`), 'utf8'));
      const text = texts.get(id);
      return { text, meta: Y.parse(split(text).fm) ?? {} };
    };
    const supplier = item(finding.id), consumer = item(finding.consumer_id);
    if (supplier.meta.status !== 'published' || entry.supplier_math_sha256 !== itemHashGuard(supplier.text)
      || entry.consumer_math_sha256 !== itemHashGuard(consumer.text)) return reject('supplier or consumer mathematics changed');
    const queue = [finding.consumer_id], seen = new Set();
    let reached = false;
    while (queue.length) {
      const id = queue.shift();
      if (seen.has(id)) continue;
      seen.add(id);
      if (id === finding.id) { reached = true; break; }
      const meta = item(id).meta;
      const deps = [...(Array.isArray(meta.deps) ? meta.deps : []),
        ...(Array.isArray(meta.justified_by) ? meta.justified_by : [])];
      for (const dep of deps.filter(value => typeof value === 'string')) {
        if (inventory.has(dep) || item(dep).meta.status === 'published') queue.push(dep);
      }
    }
    if (!reached) return reject('consumer no longer reaches the published supplier');
    if (typeof entry.used_clause !== 'string' || !entry.used_clause.trim()
      || !supplier.text.includes(entry.used_clause)
      || !Array.isArray(entry.premise_quotes) || !entry.premise_quotes.length
      || !entry.premise_quotes.every(quote => typeof quote === 'string' && quote.trim() && consumer.text.includes(quote))) {
      return reject('used clause or explicit consumer premises are not literal current source quotes');
    }
    const review = entry.review;
    if (review?.completed !== true || review.confidence !== 1
      || review.verdict !== 'sound_under_explicit_consumer_premises'
      || review.prerequisites !== 'supplied' || !meaningful(review.evidence)
      || !Array.isArray(review.evidence_refs) || !review.evidence_refs.length) return reject('used clause review is incomplete');
    const referenceHashes = [];
    for (const ref of review.evidence_refs) {
      if (!/^research\/[a-zA-Z0-9._/-]+$/.test(ref?.path ?? '') || ref.path.includes('..')
        || sha256(readFileSync(join(root, ref.path))) !== ref.sha256) return reject('review evidence changed');
      referenceHashes.push({ path: ref.path, sha256: ref.sha256 });
    }
    const maintenance = entry.maintenance;
    if (maintenance?.path !== 'research/published-consumer-supplier-ledger.md'
      || maintenance.disposition !== 'open' || !meaningful(maintenance.quote)
      || !readFileSync(join(root, maintenance.path), 'utf8').includes(maintenance.quote)) {
      return reject('outside maintenance finding is not retained');
    }
    const ledgerRows = readFileSync(join(dir, 'defect-ledger.jsonl'), 'utf8').split(/\r?\n/).filter(Boolean).map(line => JSON.parse(line));
    const retained = ledgerRows.filter(row => row.defect_id === maintenance.defect_id);
    const ledgerRow = retained[0];
    if (retained.length !== 1 || ledgerRow.run !== run || ledgerRow.subject !== finding.id
      || ledgerRow.caught_at_stage !== '5a-adjudicate' || !['open', 'deferred'].includes(ledgerRow.disposition)
      || !(ledgerRow.adjudication_ref ?? []).some(ref => ref.path === decisionPath
        && ref.obligation === finding.obligation)) return reject('original outside defect row is not retained open/deferred');
    return { valid: true, defect_id: maintenance.defect_id, seal: {
      receipt_path: receiptPath, receipt_sha256: sha256(raw), finding_sha256: hashValue(finding),
      decision_path: decisionPath, decision_group: ownerGroup, assignment_group: scope.group,
      supplier_math_sha256: entry.supplier_math_sha256, consumer_math_sha256: entry.consumer_math_sha256,
      review_evidence: referenceHashes, maintenance_path: maintenance.path,
      maintenance_quote_sha256: sha256(maintenance.quote), ledger_row_sha256: hashValue(ledgerRow),
    } };
  } catch (cause) { return reject(`context receipt unavailable: ${cause.message}`); }
}

export function step5Escalations(root, run) {
  const dir = join(root, 'research');
  if (!existsSync(dir)) return [];
  const holds = [];
  for (const name of readdirSync(dir)) {
    if (!name.startsWith(`${run}-alpha-`) || !name.endsWith('-5a-decisions.json')) continue;
    let doc;
    try { doc = JSON.parse(readFileSync(join(dir, name), 'utf8')); }
    catch { continue; } // The routing validator owns malformed JSON.
    for (const row of Array.isArray(doc.decisions) ? doc.decisions : []) {
      if (row?.verdict === 'context_accepted') {
        const context = externalContextReceipt(root, run, row, null, doc.group);
        if (!context.valid || hashValue(row.context_evidence) !== hashValue(context.seal)) holds.push(`${name}: ${row.obligation} — ${context.error ?? 'context evidence is not sealed'}`);
        continue;
      }
      if (row?.verdict === 'escalated'
        || (row?.repair_confidence !== undefined && row.repair_confidence !== 1)) {
        holds.push(`${name}: ${row.obligation ?? row.id ?? 'unnamed item'} — ${row.evidence || 'repair confidence is below 100%'}`);
      }
    }
  }
  return holds;
}
