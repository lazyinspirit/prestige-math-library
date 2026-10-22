// Physics-owned composition with an executable symlink-safe editorial gate.
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, relative } from 'node:path';
import { createHash } from 'node:crypto';
import { readStatementPolicy, statementDirections } from '../../statement-first-policy.mjs';
import type { Ctx, Plan, Stage } from './types.mts';

function decoratePlan(ctx: Ctx, plan: Plan): Plan {
  if (plan.role === 'tool' || plan.argv || !plan.brief) return plan;
  const source = (Array.isArray(plan.brief) ? plan.brief : [plan.brief]).find(path => existsSync(join(ctx.repo, path)));
  if (!source) return plan;
  const body = readFileSync(join(ctx.repo, source), 'utf8') + '\n' + statementDirections;
  const hash = createHash('sha256').update(body).digest('hex');
  const path = join(ctx.repo, 'research', `${ctx.run}-statement-first-briefs`, `${hash}.md`);
  if (!(ctx as any).doctor) {
    mkdirSync(join(path, '..'), {recursive: true});
    if (!existsSync(path)) writeFileSync(path, body, {flag: 'wx'});
  }
  return {...plan, brief: (ctx as any).doctor ? plan.brief : relative(ctx.repo, path)};
}
function hookArgs(args: any) {
  const executor = new Proxy(args.executor, {get(target, key) {
    if (key === 'start') return (stage: Stage, plan: Plan, ...rest: any[]) => target.start(stage, decoratePlan(args.ctx, plan), ...rest);
    const value = Reflect.get(target, key, target);
    return typeof value === 'function' ? value.bind(target) : value;
  }});
  return {...args, executor};
}
export function statementFirstStages(ctx: Ctx, native: Stage[], domain: 'physics'): Stage[] {
  if (!readStatementPolicy(ctx.repo, ctx.run, domain)) throw Error('Statement-first revision requires a fresh planned policy');
  return native.map(source => {
    const stage = {...source};
    if (source.plan) stage.plan = (context, pending, slots) => source.plan!(context, pending, slots).map(plan => decoratePlan(context, plan));
    if (source.refreshPlan) stage.refreshPlan = (context, unit, request) => decoratePlan(context, source.refreshPlan!(context, unit, request));
    if (source.onProgress) stage.onProgress = args => source.onProgress!(hookArgs(args));
    if (source.onGateFailure) stage.onGateFailure = args => source.onGateFailure!(hookArgs(args));
    // Append at existing authored-content joins only; no new stage, no repeated
    // pre-author checks and no change to the final report/commit transaction.
    if (source.gates && !['1-drift', '1-drift-apply', '1-baseline'].includes(source.id)
      && !/^1-append-(?:drift|apply)-/.test(source.id))
      stage.gates = context => [...source.gates!(context), {
        id: 'statement-first', argv: ['node', 'tools/physics-support/statement-first-check.mjs', '--run', context.run, '--domain', domain],
        liveness: {pattern: 'statement-first: (\\d+) item', min: 1, unit: 'frontier items'},
      }];
    return stage;
  });
}
