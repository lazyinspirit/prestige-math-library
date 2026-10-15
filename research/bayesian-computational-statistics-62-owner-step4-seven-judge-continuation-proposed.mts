// PROPOSAL ONLY. No top-level dispatch. Root must explicitly install and authorize.
// Installed in the existing run-local stages module, before its owner pre-gate
// onProgress wrapper, this starts one native tracked full-frontier currency-filtered repair lane.
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { itemHashJudge } from '../tools/item-hash.mjs';
const RUN = 'bayesian-computational-statistics-62';
const LABEL = 'owner-judge-closure-gate1-seven';
const IDS = [
  'alg-synthetic-likelihood-monte-carlo-estimation',
  'cex-pointwise-bootstrap-ar1-variance-mismatch',
  'ex-gaussian-synthetic-likelihood-for-bernoulli-summary-law',
  'ex-nonunique-binding-function-target',
  'lem-two-simulation-summary-covariance-is-singular-in-two-dimensions',
  'rem-finite-simulation-synthetic-likelihood-is-a-random-approximation',
  'thm-indirect-inference-target-exists-with-lexicographic-tie-break',
];
const sorted = (x: string[]) => [...new Set(x)].sort();
const same = (a: string[], b: string[]) => JSON.stringify(sorted(a)) === JSON.stringify(sorted(b));
export function installSevenJudgeContinuation(stage: any) {
  if (stage.id !== '4-judge') return stage;
  const progress = stage.onProgress;
  return { ...stage, onProgress: async (args: any) => {
    const { ctx, executor } = args;
    if (ctx.doctor || ctx.run !== RUN) return progress?.(args);
    const runtime = ctx.stateDir ?? ctx.config?.stateDir ?? join(ctx.repo, '.autopilot', RUN);
    const authorityPath = join(runtime, 'owner-step4-seven-judge-authorization.json');
    if (!existsSync(authorityPath)) return progress?.(args);
    const authority = JSON.parse(readFileSync(authorityPath, 'utf8'));
    if (authority.version !== 1 || authority.run !== RUN || authority.stage !== '4-judge'
      || authority.label !== LABEL || authority.authorized_by !== '/root'
      || authority.basis !== 'actual-step4-full-battery-judge-coverage-failure'
      || !same(authority.items ?? [], IDS)) throw Error('Invalid exact seven-judge owner authority');
    const dispatchKey = `${stage.id}:${LABEL}`;
    // One attempt only: a failed/unknown execution returns to owner disposition;
    // it is never silently relaunched or made into original unit coverage.
    if (executor.state.data.dispatches[dispatchKey]) {
      if (executor.inflight.has(dispatchKey)) return;
      return progress?.(args);
    }
    if (executor.inflight.size || executor.liveDispatchLabels().length) return;
    if (executor.currentStage().stage?.id !== '4-judge') throw Error('Continuation stage changed');
    const failurePath = `research/${RUN}-owner-step4-gate1-native-blockers.json`;
    if (authority.failure_path !== failurePath) throw Error('Unexpected failure authority path');
    const failure = JSON.parse(readFileSync(join(ctx.repo, failurePath), 'utf8'));
    const closure = failure.failures?.find((f: any) => f.id === 'judge-closure' && f.code === 1);
    const failedIds = [...String(closure?.output ?? '').matchAll(/ERROR judge-coverage-missing \[([^\]]+)\]/g)].map(m => m[1]);
    if (failure.run !== RUN || failure.at !== '2026-10-15T16:35:59.001Z'
      || !same(failedIds, IDS)) throw Error('Actual full-battery seven-item failure guard changed');
    if (authority.final_root_integration_complete !== true
      || authority.published_repairs_reviewed_by !== '/root'
      || !Array.isArray(authority.published_repair_receipts) || authority.published_repair_receipts.length < 2
      || authority.published_repair_receipts.some((p: any) => typeof p !== 'string' || !p.startsWith('research/') || !existsSync(join(ctx.repo, p))))
      throw Error('Final published-supplier repair receipts/root integration not authorized');
    const manifests = Array.from({ length: 62 }, (_, k) => `research/${RUN}-batch-${k + 1}.pages.json`);
    const manifestIds = new Set<string>();
    for (let b = 1; b <= 62; b++) for (const page of JSON.parse(readFileSync(
      join(ctx.repo, `research/${RUN}-batch-${b}.pages.json`), 'utf8')))
      for (const item of page.items) manifestIds.add(item.id);
    if (manifestIds.size !== 809 || IDS.some(id => !manifestIds.has(id))) throw Error('Frozen frontier selection changed');
    const cache = JSON.parse(readFileSync(join(ctx.repo, `research/${RUN}-judge-context-hashes.json`), 'utf8'));
    const ledgerPath = join(ctx.repo, `research/${RUN}-judge.jsonl`);
    const rows = readFileSync(ledgerPath, 'utf8').split('\n').filter(Boolean).map(line => JSON.parse(line));
    for (const id of IDS) {
      const cached = cache.rows?.find((row: any) => row.id === id);
      const text = readFileSync(join(ctx.repo, 'items', `${id}.md`), 'utf8');
      if (!cached || itemHashJudge(text) !== cached.item) throw Error(`Source/cache guard changed: ${id}`);
      if (rows.some(row => row.id === id && row.model === 'gpt-6-luna' && typeof row.keep === 'boolean'
        && (row.item_sha256 === cached.item || row.context_sha256 === cached.context)))
        throw Error(`Missing judgment already supplied; owner must reconcile before continuation: ${id}`);
    }
    const started = executor.start(stage, {
      role: 'tool', label: LABEL, job: 'judgement', covers: [], timeout: 43200,
      argv: ['node', 'tools/judge-sweep.mjs', '--run', RUN, '--lineup', 'luna', '--effort', 'max',
        '--ledger', `research/${RUN}-judge.jsonl`, '--cost', `research/${RUN}-judge-cost.jsonl`,
        '--manifests', manifests.join(',')],
    });
    if (!started) throw Error('Native executor refused exact seven-judge repair plan');
    // Do not enter pre-gate owner hold until this tracked native lane drains.
  }};
}
