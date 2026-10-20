// One explicit owner contextualization of an authentic incidental native alert.
// This does not create a decision, obligation, repair, or native review coverage.
import { readFileSync, readdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { createHash } from 'node:crypto';
import { split, yaml } from './pathway-lib.mjs';
const RUN = 'machine-learning-all-101-2026-10-19';
const DEFECT = 'ml101-b1-3a-published-box-source';
const SUPPLIER = 'thm-lebesgue-measure-of-a-box-of-every-kind';
const CONSUMER = 'ex-singular-line-law-has-smooth-positive-time-density';
const POLICY = 'step3-incidental-published-box-nonfatal-context-v1';
const sha = x => createHash('sha256').update(x).digest('hex');
const canonical = x => Array.isArray(x) ? x.map(canonical) : x && typeof x === 'object'
  ? Object.fromEntries(Object.keys(x).sort().map(k => [k, canonical(x[k])])) : x;
const hash = x => sha(JSON.stringify(canonical(x)));
const need = (condition, message) => { if (!condition) throw new Error(`incidental published context: ${message}`); };
const same = (a, b) => hash(a) === hash(b);
const shape = (value, keys) => value && same(Object.keys(value).sort(), keys.split(' ').sort());
const bounded = value => typeof value === 'string' && value.trim().length >= 80;
function researchRef(root, run, ref, exactPath = null) {
  need(ref && Object.keys(ref).length === 2 && typeof ref.path === 'string'
    && ref.path.startsWith(`research/${run}-`) && /\.(json|md)$/.test(ref.path)
    && !ref.path.includes('..') && /^[a-f0-9]{64}$/.test(ref.sha256)
    && (!exactPath || ref.path === exactPath), 'invalid evidence reference (transcripts excluded)');
  const path = resolve(root, ref.path);
  need(path.startsWith(resolve(root) + '/research/'), 'evidence escapes repository');
  const raw = readFileSync(path, 'utf8');
  need(sha(raw) === ref.sha256, `stale evidence ${ref.path}`);
  return raw;
}
function source(root, run, ref, id, expected) {
  need(shape(ref, 'path sha256 archive') && ref.path === `items/${id}.md` && ref.sha256 === expected, 'not the unchanged reviewed source');
  const text = readFileSync(resolve(root, ref.path), 'utf8');
  need(sha(text) === expected && researchRef(root, run, ref.archive) === text, 'changed source or archive');
  const meta = yaml().parse(split(text).fm);
  need(meta?.id === id, 'source identity mismatch');
  return { text, meta };
}
/** Empty/absent opt-in retains all prior checker behavior. Invalid opt-ins fail
 * closed. Only the one exact existing nonfatal-recorded row can be contextual. */
export function incidentalPublishedNonfatalContexts(root, run, registry, activeRows, groups) {
  const entries = registry?.incidental_published_nonfatal_contexts;
  if (entries === undefined) return new Set();
  need(registry.version === 1 && registry.run === run && Array.isArray(entries), 'invalid registry');
  if (!entries.length) return new Set();
  need(run === RUN && entries.length === 1, 'only the explicit batch-1 case is supported');
  const e = entries[0];
  need(shape(e, 'version policy run defect_id batch supplier_id consumer_id active_row_sha256 supplier consumer native_result native_report native_prompt native_assignment native_report_quote owner_review maintenance dependency_path source_repaired native_execution_coverage_adopted whole_supplier_acceptance') && e.version === 1 && e.policy === POLICY && e.run === run && e.defect_id === DEFECT
    && e.batch === '1' && e.supplier_id === SUPPLIER && e.consumer_id === CONSUMER
    && same(e.dependency_path, [CONSUMER, SUPPLIER])
    && e.source_repaired === false && e.native_execution_coverage_adopted === false
    && e.whole_supplier_acceptance === false, 'unsupported contextualization');
  const rows = activeRows.filter(row => row.defect_id === DEFECT);
  const row = rows[0];
  need(rows.length === 1 && hash(row) === e.active_row_sha256 && e.active_row_sha256 === '91c4ed788a4e81b098118ac78371643318c010c1a6d92d2c163600797b9eaa69'
    && row.run === run && row.subject === SUPPLIER && row.batch === '1'
    && row.class === 'accuracy' && row.subclass === 'citation-misattributed'
    && row.severity === 'nonfatal' && row.location === 'frontmatter'
    && row.disposition === 'nonfatal-recorded' && row.repair_cost === 'none'
    && row.caught_at_stage === '3a-adjudicate' && row.caught_by_role === 'group-alpha', 'not the existing bounded ledger alert');
  const owners = groups.filter(g => g.covers.map(String).includes('1'));
  need(owners.length === 1 && owners[0].label === 'batch-1', 'wrong current native owner');
  const homes = [];
  let inventory = 0;
  for (const name of readdirSync(resolve(root, 'research'))) {
    const match = new RegExp(`^${run}-batch-([1-9]\\d*)\\.pages\\.json$`).exec(name);
    if (!match) continue;
    const doc = JSON.parse(readFileSync(resolve(root, 'research', name), 'utf8'));
    const pages = Array.isArray(doc) ? doc : doc.pages ?? [];
    for (const page of pages) for (const value of page.items ?? []) {
      const id = typeof value === 'string' ? value : value.id;
      inventory++;
      need(id !== SUPPLIER, 'supplier is inside current frontier');
      if (id === CONSUMER) homes.push({ batch: match[1], value });
    }
  }
  need(inventory > 0 && homes.length === 1 && homes[0].batch === '1'
    && Array.isArray(homes[0].value.deps) && homes[0].value.deps.includes(SUPPLIER), 'missing unique owned declared consumer');
  const supplier = source(root, run, e.supplier, SUPPLIER, '7c89e1a8ad41744cff2689732e87aa657fd389b52a5cfa8416f1aa67da92b0a0');
  const consumer = source(root, run, e.consumer, CONSUMER, '2e1c12f296de899b0245c4732ffbfd6c045b5114f25498ce5a095bdf6e13cc0a');
  need(supplier.meta.status === 'published' && consumer.meta.status === 'draft'
    && consumer.meta.pipeline_run === run && consumer.meta.axiom_base === 'Full AC'
    && Array.isArray(consumer.meta.deps) && consumer.meta.deps.includes(SUPPLIER) && consumer.meta.deps.includes('def-countable-choice')
    && Array.isArray(supplier.meta.deps) && supplier.meta.deps.includes('def-countable-choice'), 'published supplier or choice interface mismatch');
  const prefix = `research/${run}-dispatch/alpha-3a-batch-1.attempt-1`;
  const resultRaw = researchRef(root, run, e.native_result, prefix + '.result.json');
  // Fixed original immutable native execution, not a future owner-authored substitute.
  need(sha(resultRaw) === 'e8693601b927248f9b693ab41d9bb098c6755da202729a798ae16a96fe566536', 'not the authentic native attempt');
  const result = JSON.parse(resultRaw);
  need(result.run === run && result.role === 'alpha' && result.label === '3a-batch-1'
    && result.attempt === 1 && result.ok === true && result.exit_code === 0
    && result.process_exit_code === 0 && result.timed_out === false && same(result.covers, ['1'])
    && result.terminal_summary?.task_completed === true && result.terminal_summary.task_aborted === false
    && result.prompt?.endsWith('/' + prefix + '.prompt.md'), 'native execution not successfully complete');
  need(sha(researchRef(root, run, e.native_prompt, prefix + '.prompt.md')) === '6c3d2ba7990bf83690c92d73bd52ba0e566538a15343ae2fca757a546d55d77a', 'not original immutable native prompt');
  const assignment = researchRef(root, run, e.native_assignment, `research/${run}-alpha-batch-1-3a-order.task.md`);
  need(sha(assignment) === 'ed1d1b02572b0534eee0cb75085ccb1a694a62f399050a4cd5798a904d1804d0' && assignment.includes(`batch 1, ${CONSUMER} — risk review`), 'consumer not assigned to native Alpha1');
  const report = researchRef(root, run, e.native_report, `research/${run}-alpha-batch-1-3a.md`);
  need(sha(report) === '209cd84c8b038706b42b904b25a21abe31270d0f075dcba5e150f74d66780603'
    && bounded(e.native_report_quote) && report.includes(e.native_report_quote)
    && e.native_report_quote.includes(SUPPLIER)
    && report.includes(`\`${DEFECT}\` is closed as nonfatal-recorded`)
    && row.evidence?.some(ref => ref.path === e.native_report.path)
    && row.adjudication_ref?.some(ref => ref.path === e.native_report.path), 'missing original incidental native alert');
  const review = JSON.parse(researchRef(root, run, e.owner_review));
  need(shape(review, 'version policy run reviewed_by completed scope supplier_sha256 consumer_sha256 supplier_clause supplier_premise consumer_fact consumer_premise consumer_step use_review maintenance_status source_repaired native_execution_coverage_adopted whole_supplier_acceptance maintenance_quote') && review.version === 1 && review.policy === 'step3-incidental-published-nonfatal-use-review-v1'
    && review.run === run && review.reviewed_by === '/root' && review.completed === true
    && review.supplier_sha256 === e.supplier.sha256 && review.consumer_sha256 === e.consumer.sha256
    && review.source_repaired === false && review.native_execution_coverage_adopted === false
    && review.whole_supplier_acceptance === false && bounded(review.use_review)
    && review.maintenance_status === 'pending bibliographic authentication/correction', 'missing completed bounded root use review');
  need(review.supplier_clause === '$$\\lambda_n(R) \\;=\\; \\prod_{i<n}(b_i-a_i).$$'
    && review.supplier_premise === '**assume the Axiom of Countable Choice**'
    && supplier.text.includes(review.supplier_clause) && supplier.text.includes(review.supplier_premise)
    && review.consumer_fact?.startsWith('[F3] ') && review.consumer_fact.includes(`[[${SUPPLIER}]]`)
    && review.consumer_premise?.startsWith('[A2] Countable Choice')
    && review.consumer_premise.includes('Full AC') && review.consumer_step?.startsWith('1.1 ')
    && review.consumer_step.includes('2/n') && review.consumer_step.includes('[A2, F3, F4, given, algebra]')
    && [review.consumer_fact, review.consumer_premise, review.consumer_step].every(q => consumer.text.includes(q)), 'used clause/premises do not match current source');
  need(shape(e.maintenance, 'path quote_archive') && e.maintenance.path === 'research/published-consumer-supplier-ledger.md', 'wrong maintenance ledger');
  const quote = researchRef(root, run, e.maintenance.quote_archive).trim();
  const maintenance = readFileSync(resolve(root, e.maintenance.path), 'utf8');
  need(quote === review.maintenance_quote && quote.includes(DEFECT) && quote.includes(e.supplier.sha256)
    && quote.includes('pending owner bibliographic maintenance') && quote.includes('nonfatal-recorded, not repaired-source credit')
    && maintenance.split(quote).length === 2, 'published maintenance missing/changed/duplicated');
  return new Set([DEFECT]);
}
