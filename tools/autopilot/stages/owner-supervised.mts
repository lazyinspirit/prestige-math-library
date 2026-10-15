// Optional run-local owner boundary; native stages and all their gates remain intact.
import { statSync } from 'node:fs';
const nativeURL = new URL('./mathlib.mts', import.meta.url);
const reloadVersion = new URL(import.meta.url).searchParams.get('v')
  ?? String(statSync(nativeURL).mtimeMs);
const { stagesForRun: nativeStages, workflowRevision } = await import(
  nativeURL.href + '?v=' + encodeURIComponent(reloadVersion)
);
import { holdBeforeBattery, consumePermission } from '../../owner-gate-supervision.mjs';

export { workflowRevision };
export function stagesForRun(ctx: any) {
  return nativeStages(ctx).map((source: any) => {
    // Step 6 has one native preparation/validation transaction; repeated owner
    // recertification pauses around its bookkeeping stages would duplicate it.
    if (source.id.startsWith('6-')) return source;
    const stage = { ...source };
    const progress = source.onProgress;
    stage.onProgress = async (args: any) => {
      holdBeforeBattery(args);
      if (args.executor.state.paused) return;
      await progress?.(args);
      holdBeforeBattery(args);
    };
    if (source.gates) stage.gates = (context: any) => {
      if (!context.doctor) consumePermission(context);
      return source.gates(context);
    };
    return stage;
  });
}
