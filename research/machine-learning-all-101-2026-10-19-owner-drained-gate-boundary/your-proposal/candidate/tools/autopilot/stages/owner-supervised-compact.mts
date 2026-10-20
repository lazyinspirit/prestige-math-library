// Run-local owner holds around the unchanged compact native workflow.
import { statSync, existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { holdBeforeBattery, consumePermission } from '../../owner-gate-supervision.mjs';
const nativeURL = new URL('./mathlib.compact.mts', import.meta.url);
const reloadVersion = new URL(import.meta.url).searchParams.get('v')
  ?? String(statSync(nativeURL).mtimeMs);
const { stagesForRun: nativeStages, workflowRevision } = await import(
  nativeURL.href + '?v=' + encodeURIComponent(reloadVersion)
);
export { workflowRevision };
export function stagesForRun(ctx: any) {
  return ownerSupervisedCompactStages(nativeStages(ctx));
}
export function ownerSupervisedCompactStages(stages: any[]) {
  const stageIds = new Set(stages.filter(s => !s.id.startsWith('6-')).map(s => s.id));
  const ownerEligible = (ctx: any, stageId: string, unit: string) => {
    const dir = ctx.stateDir ?? ctx.config?.stateDir;
    if (!dir) return true;
    const path = join(dir, 'owner-unit-holds.json');
    if (!existsSync(path)) return true;
    const doc = JSON.parse(readFileSync(path, 'utf8'));
    const exact = (v: any, keys: string[]) => v && typeof v === 'object' && !Array.isArray(v)
      && Object.keys(v).length === keys.length && keys.every(k => Object.hasOwn(v, k));
    const names = (v: any) => Array.isArray(v) && v.length > 0
      && v.every(x => typeof x === 'string' && /^[A-Za-z0-9][A-Za-z0-9._-]*$/.test(x))
      && new Set(v).size === v.length;
    if (!exact(doc, ['version', 'run', 'authorized_by', 'owner_identity', 'holds'])
      || doc.version !== 1 || doc.run !== ctx.run || doc.authorized_by !== 'owner'
      || doc.owner_identity !== '/root' || !Array.isArray(doc.holds)
      || doc.holds.some((h: any) => !exact(h, ['stages', 'units']) || !names(h.stages)
        || !names(h.units) || h.stages.some((id: string) => !stageIds.has(id))))
      throw Error('Invalid owner-unit-holds.json authority or exact stage/unit selectors');
    for (const h of doc.holds) for (const id of h.stages) {
      const units = stages.find(s => s.id === id)?.units?.(ctx);
      if (!Array.isArray(units) || h.units.some((u: string) => !units.includes(u)))
        throw Error('Invalid owner-unit-holds.json unit outside selected native stage membership');
    }
    return !doc.holds.some((h: any) => h.stages.includes(stageId) && h.units.includes(unit));
  };
  return stages.map((source: any) => {
    // Step 6 owns its metadata/render preparation and final transaction.
    if (source.id.startsWith('6-')) return source;
    const stage = { ...source };
    stage.unitEligible = (context: any, unit: string) =>
      source.unitEligible?.(context, unit) !== false && ownerEligible(context, source.id, unit);
    // Live authors invalidate readiness inputs; check the complete current
    // artifacts only after native coverage is complete and writers drain.
    if (stage.id === '1-scaffold') stage.deferConstructionArtifactsUntilDrain = true;
    stage.onProgress = async (args: any) => {
      holdBeforeBattery(args);
      if (args.executor.state.paused) return;
      await source.onProgress?.(args);
      holdBeforeBattery(args);
    };
    stage.beforeGates = async (args: any) => {
      holdBeforeBattery(args);
      if (args.executor.state.paused) return;
      await source.beforeGates?.(args);
      holdBeforeBattery(args);
    };
    if (source.gates) stage.gates = (context: any) => {
      if (!context.doctor) consumePermission(context);
      return source.gates(context);
    };
    return stage;
  });
}
export default { stagesForRun, workflowRevision };
