// Run-local owner holds around the unchanged compact native workflow.
import { statSync } from 'node:fs';
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
  return stages.map((source: any) => {
    // Step 6 owns its metadata/render preparation and final transaction.
    if (source.id.startsWith('6-')) return source;
    const stage = { ...source };
    // Live authors invalidate readiness inputs; check the complete current
    // artifacts only after native coverage is complete and writers drain.
    if (stage.id === '1-scaffold') stage.deferConstructionArtifactsUntilDrain = true;
    stage.onProgress = async (args: any) => {
      holdBeforeBattery(args);
      if (args.executor.state.paused) return;
      await source.onProgress?.(args);
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
