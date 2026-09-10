// A new run imports existing reviewed work through a verified checkpoint.
// No prior author/reviewer dispatches or historical gate timestamps are invented.
import canonical from './mathlib.mts';
const verify = (ctx: any) => ['node', 'tools/autopilot/bin/merge-runs.mjs', 'verify', '--run', ctx.run];
const first = canonical.stages.findIndex(stage => stage.id === '6b-baseline');
if (first < 0) throw new Error('canonical post-6B continuation is missing');
export default {
  ...canonical,
  stages: [{
    id: '6b-import',
    label: 'verify owner-authorized imported 6B checkpoints',
    units: () => ['all'],
    pattern: /^tool-merge-verify\.result\.json$/,
    artifacts: (ctx: any) => `research/${ctx.run}-merge-import.json`,
    concurrency: 1,
    plan: (ctx: any) => [{ role: 'tool', label: 'merge-verify', job: 'bookkeeping-mechanical', covers: ['all'], argv: verify(ctx) }],
    gates: (ctx: any) => [{ id: 'merge-import-integrity', argv: verify(ctx),
      liveness: { pattern: 'merge-import: (\\d+) items verified', min: 1, unit: 'imported items' } },
      ...['5-author', '6b-adjudicate'].flatMap(id => {
        const stage = canonical.stages.find(stage => stage.id === id)!;
        return stage.gates!(ctx).map(gate => ({ ...gate, id: `import-${id}-${gate.id}` }));
      })],
  }, ...canonical.stages.slice(first)],
};
