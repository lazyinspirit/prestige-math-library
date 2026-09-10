// A new run imports existing reviewed work through a verified checkpoint.
// No prior author/reviewer dispatches or historical gate timestamps are invented.
import canonical, { authoredContentGates } from './mathlib.mts';
const verify = (ctx: any) => ['node', 'tools/autopilot/bin/migrate-checkpoint.mjs', 'verify', '--run', ctx.run];
const first = canonical.stages.findIndex(stage => stage.id === '5a-baseline');
if (first < 0) throw new Error('canonical post-review continuation is missing');
const adjudicate = canonical.stages.find(stage => stage.id === '5a-adjudicate')!;
const joinGates = (ctx: any) => [
  ...authoredContentGates(ctx).map(gate => ({ ...gate, id: `import-author-${gate.id}` })),
  ...adjudicate.gates!(ctx).map(gate => ({ ...gate, id: `import-review-${gate.id}` })),
];
export const workflowRevision = canonical.workflowRevision;
export const stages = [{
    id: '5a-import',
    label: 'verify owner-authorized historical review checkpoints',
    units: () => ['all'],
    pattern: /^tool-merge-verify\.result\.json$/,
    artifacts: (ctx: any) => `research/${ctx.run}-checkpoint-import.json`,
    concurrency: 1,
    plan: (ctx: any) => [{ role: 'tool', label: 'merge-verify', job: 'bookkeeping-mechanical', covers: ['all'], argv: verify(ctx) }],
    gates: (ctx: any) => [{ id: 'merge-import-integrity', argv: verify(ctx),
      liveness: { pattern: 'checkpoint-import: (\\d+) items verified', min: 1, unit: 'imported items' } }],
  }, {
    id: '5a-import-join',
    label: 'full frontier gates and owned repairs after verified import',
    units: () => ['all'],
    pattern: /^tool-import-scope\.result\.json$/,
    concurrency: 1,
    modelProfile: adjudicate.modelProfile,
    plan: (ctx: any) => [{ role: 'tool', label: 'import-scope', job: 'bookkeeping-mechanical', covers: ['all'],
      argv: ['node', 'tools/step5-scope.mjs', 'check', '--run', ctx.run, '--phase', 'adjudicate'] }],
    gates: joinGates,
    batchRepairs: true,
    repairFingerprint: adjudicate.repairFingerprint,
    perItemFixBudget: adjudicate.perItemFixBudget,
    onGateFailure: async (args: any) => {
      const normalize = (failure: any) => ({ ...failure,
        id: failure.id.replace(/^import-(?:author|review)-/, ''),
        advisory: undefined });
      const failure = normalize(args.failure);
      failure.advisory = (args.failure.advisory ?? []).map(normalize);
      return adjudicate.onGateFailure!({ ...args, failure });
    },
  }, ...canonical.stages.slice(first)];
export const { batches, alphaGroups } = canonical;
export default { stages, batches, alphaGroups, workflowRevision };
