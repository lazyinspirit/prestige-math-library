// Fresh-run strict owner boundary: native stages and complete batteries remain unchanged.
import { readFileSync, existsSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { randomUUID } from 'node:crypto';
import { holdBeforeBattery, frontierInputs } from '../../tools/owner-gate-supervision.mjs';
const nativeURL = new URL('../../tools/autopilot/stages/owner-supervised.mts', import.meta.url);
const version = new URL(import.meta.url).searchParams.get('v') ?? String(statSync(nativeURL).mtimeMs);
const native = await import(nativeURL.href + '?v=' + encodeURIComponent(version));
export const workflowRevision = native.workflowRevision;
const guarded = new WeakSet<object>();
const read = (path: string) => existsSync(path) ? JSON.parse(readFileSync(path, 'utf8')) : null;

function installBoundaryGuard(executor: any) {
  if (guarded.has(executor)) return;
  // Hot reloads replace this one guard rather than nesting previous copies.
  // The native executor retains all ordinary gate and repair mechanisms.
  const original = Object.getPrototypeOf(executor).runGroupGates;
  if (typeof original !== 'function') throw Error('Native runGroupGates unavailable');
  executor.runGroupGates = async function (statuses: any[], ctx: any, group: any[]) {
    if (ctx.doctor) return original.call(this, statuses, ctx, group);
    // Match the native writer/refresh drain checks before creating a hold.
    if (this.inflight.size || this.liveDispatchLabels().length
      || statuses.some(({ s }) => this.pendingRefreshes(s, ctx).length)) return 'working';
    if (this.state.paused) return 'working';
    const active = group.filter(s => !this.state.data.stages[s.id]?.skipped);
    // CLAUDE §8 and native v3 own Step6's one actual preparation transaction.
    // Preserve the native final gates without a duplicate owner render pass.
    if (active.length && active.every(s => s.id.startsWith('6-')))
      return original.call(this, statuses, ctx, group);
    if (!statuses.some(({ s, st }) => s.gates && !s.gatesWaived && !st.gatesPassed))
      return original.call(this, statuses, ctx, group);
    if (!active.length || !active.every(s => this.stageStatus(s, ctx).unitsDone)) return 'working';

    // Unlike onProgress, this hook runs after a worker finishes in sleep(0).
    holdBeforeBattery({ ctx, executor: this, stage: active[0] });
    if (this.state.paused) return 'working';
    const runtime = ctx.stateDir ?? ctx.config?.stateDir ?? join(ctx.repo, '.autopilot', ctx.run);
    const requestPath = join(runtime, 'owner-gate-request.json');
    const permissionPath = join(runtime, 'owner-gate-permission.json');
    const request = read(requestPath), permit = read(permissionPath);
    const stages = active.map(s => s.id), key = stages.join('+');
    const valid = request?.run === ctx.run && permit?.run === ctx.run
      && request.group === key && permit.group === key && permit.request_id === request.id
      && JSON.stringify(request.stages) === JSON.stringify(stages)
      && !permit.consumed_at && permit.fingerprint === frontierInputs(ctx).fingerprint;
    if (!valid) {
      // The shared helper's old same-group fast path does not bind request ID.
      // Fail closed with a real fresh hold rather than reusing that permission.
      writeFileSync(requestPath, JSON.stringify({
        version: 1, run: ctx.run, id: randomUUID(), group: key, stages,
        at: new Date().toISOString(),
        reason: 'Fresh owner recertification required at actual drained native battery boundary; permission must bind this exact group and request and be unconsumed.',
      }, null, 2) + '\n');
      this.state.paused = true;
      this.state.save();
      this.reporter.notify('paused', `Owner strict pre-gate hold: ${requestPath}`);
      return 'working';
    }
    // Native gate descriptors consume this fresh permission synchronously.
    // Re-entry, even for this same group, must obtain another unconsumed pass.
    return original.call(this, statuses, ctx, group);
  };
  guarded.add(executor);
}

export function stagesForRun(ctx: any) {
  return native.stagesForRun(ctx).map((source: any) => {
    const stage = { ...source }, progress = source.onProgress;
    stage.onProgress = async (args: any) => {
      installBoundaryGuard(args.executor);
      await progress?.(args);
    };
    return stage;
  });
}
