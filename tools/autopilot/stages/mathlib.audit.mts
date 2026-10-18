// Reuse the actual native Steps 2–6. No forked copy of their review engines,
// gates, zero-defect threshold, repair routes, counters or closeout transaction.
import { existsSync, mkdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { join, relative } from 'node:path';
import { createHash } from 'node:crypto';
import { AUDIT_REVISION, auditDirections } from '../src/audit-policy.mts';
import { MODEL_PROFILE_NAMES, MODEL_PROFILES, MODELS } from '../../models.mjs';
import type { Ctx, Plan, Stage } from '../src/types.mts';

const nativeURL = new URL('./owner-supervised.mts', import.meta.url);
const reloadVersion = new URL(import.meta.url).searchParams.get('v') ?? String(statSync(nativeURL).mtimeMs);
const native = await import(nativeURL.href + '?v=' + encodeURIComponent(reloadVersion));
const { batches } = await import(new URL('./mathlib.mts', import.meta.url).href + '?v=' + encodeURIComponent(reloadVersion));
export const workflowRevision = AUDIT_REVISION;
const auditArgv = (ctx: Ctx, command: string) => ['node', 'tools/tsx-run.mjs', 'tools/autopilot/bin/audit.mts', command, '--run', ctx.run];
const originGate = (ctx: Ctx) => ({ id: 'audit-published-status', argv: auditArgv(ctx, 'check-origin'),
  liveness: { pattern: 'audit-origin: (\\d+) page', min: 1, unit: 'published audit pages' } });
const editorialGate = (ctx: Ctx) => ({ id: 'audit-editorial', argv: auditArgv(ctx, 'check-editorial'),
  liveness: { pattern: 'audit-editorial: (\\d+) page', min: 1, unit: 'audit pages' } });
export const auditProfile = (profile: string | undefined) => profile && MODEL_PROFILES[profile]?.model === MODELS.sol61.id
  ? MODEL_PROFILE_NAMES.sol61Medium : profile;
function mediumStage(source: Stage): Stage {
  return { ...source, label: source.label.replaceAll('Sol 6.1 high', 'Sol 6.1 medium'), modelProfile: typeof source.modelProfile === 'function'
    ? plan => auditProfile((source.modelProfile as (plan: Plan) => string | undefined)(plan))
    : auditProfile(source.modelProfile) };
}

// Decorate briefs rather than replacing native tasks, identity, result schema,
// model, session continuity or writer scopes. Content-addressed briefs do not
// change underneath a live dispatch or on a quiet controller reload.
function auditPlan(ctx: Ctx, plan: Plan): Plan {
  if (plan.role === 'tool' || plan.argv || !plan.brief) return plan;
  const candidates = Array.isArray(plan.brief) ? plan.brief : [plan.brief];
  const source = candidates.find(path => existsSync(join(ctx.repo, path)));
  if (!source) return plan; // Native doctor/executor reports the missing brief.
  const original = readFileSync(join(ctx.repo, source), 'utf8');
  const directions = auditDirections.replaceAll('research/RUN-audit', `research/${ctx.run}-audit`);
  const body = original + '\n' + directions;
  const hash = createHash('sha256').update(body).digest('hex');
  const file = join(ctx.repo, 'research', `${ctx.run}-audit`, 'briefs', `${hash}.md`);
  if (!(ctx as any).doctor) {
    mkdirSync(join(file, '..'), { recursive: true });
    if (!existsSync(file)) writeFileSync(file, body, { flag: 'wx' });
  }
  return { ...plan, profile: auditProfile(plan.profile), brief: (ctx as any).doctor ? plan.brief : relative(ctx.repo, file) };
}
function hookArgs(args: any) {
  const executor = new Proxy(args.executor, {
    get(target, key) {
      if (key === 'start') return (stage: Stage, plan: Plan, ...rest: any[]) =>
        target.start(mediumStage(stage), auditPlan(args.ctx, plan), ...rest);
      const value = Reflect.get(target, key, target);
      return typeof value === 'function' ? value.bind(target) : value;
    },
  });
  return { ...args, executor };
}

export function stagesForRun(ctx: Ctx): Stage[] {
  const all = native.stagesForRun(ctx);
  const first = all.findIndex((stage: Stage) => stage.id === '2-scope-review');
  if (first < 0) throw Error('Native Step 2 is missing; audit cannot select an approximate continuation');
  const suffix = all.slice(first).map((source: Stage): Stage => {
    const stage = mediumStage(source);
    if (source.plan) stage.plan = (context, pending, slots) =>
      source.plan!(context, pending, slots).map(plan => auditPlan(context, plan));
    if (source.onProgress) stage.onProgress = args => source.onProgress!(hookArgs(args));
    if (source.onGateFailure) stage.onGateFailure = args => source.onGateFailure!(hookArgs(args));
    if (source.gates) stage.gates = context => [
      ...source.gates!(context), originGate(context), editorialGate(context),
    ];
    return stage;
  });
  return [{
    id: 'audit-prepare', label: 'prepare published audit presentation and archive-bound baseline',
    units: () => ['all'], pattern: /^tool-audit-prepare\.result\.json$/,
    artifacts: context => `research/${context.run}-audit/preparation.json`, concurrency: 1,
    plan: context => [{ role: 'tool', label: 'audit-prepare', job: 'bookkeeping-mechanical', covers: ['all'], argv: auditArgv(context, 'prepare') }],
    gates: context => [originGate(context)],
  }, {
    id: 'audit-evidence', label: 'read existing pairs and prepare genuine source/contract metadata',
    modelProfile: MODEL_PROFILE_NAMES.lunaMax, units: batches,
    pattern: /^beta-audit-evidence-\d+\.result\.json$/, concurrency: 30,
    artifacts: (context, unit) => ['coverage', 'proof-contracts', 'cross-batch-dependencies'].map(suffix =>
      `research/${context.run}-batch-${unit}.${suffix}.json`),
    plan: (context, pending) => pending.map(unit => {
      const task = `research/${context.run}-audit/evidence-${unit}.task.md`;
      if (!(context as any).doctor) {
        const body = `# Published audit evidence intake\n\nRun: ${context.run}\nBatch: ${unit}\n\n`
          + `Read research/${context.run}-batch-${unit}.pages.json and research/${context.run}-audit/origin.json.\n`
          + `Write only research/${context.run}-batch-${unit}.coverage.json, research/${context.run}-batch-${unit}.proof-contracts.json and research/${context.run}-batch-${unit}.cross-batch-dependencies.json.\n`
          + 'Read the schema and substantive requirements in briefs/published-audit-evidence.md and the checker sources it names. Do not edit source content or invent proof acceptance.\n';
        if (!existsSync(join(context.repo, task))) writeFileSync(join(context.repo, task), body, { flag: 'wx' });
      }
      return { role: 'beta', label: `audit-evidence-${unit}`, job: 'audit', covers: [unit],
        brief: 'briefs/published-audit-evidence.md', task: (context as any).doctor ? 'briefs/published-audit-evidence.md' : task, timeout: 21600 };
    }),
    // Legacy defects belong in the real Step-2 review/repair loop. Its original
    // full coverage/source/strict-contract battery remains the acceptance join;
    // intake must not demand that a defective old proof is already certified.
    gates: context => [originGate(context), { id: 'audit-manifest-deps',
      argv: ['node', 'tools/manifest-deps.mjs', ...batches(context).map((unit: string) =>
        `research/${context.run}-batch-${unit}.pages.json`)],
      liveness: { pattern: 'manifest-deps: (\\d+) item', min: 1, unit: 'audit items' } }],
  }, ...suffix];
}
export default { stagesForRun, workflowRevision };
