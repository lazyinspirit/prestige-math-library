// Optional run-local owner boundary; native stages and all their gates remain intact.
import { stagesForRun as nativeStages, workflowRevision } from './mathlib.mts';
import { holdBeforeBattery, consumePermission } from '../../owner-gate-supervision.mjs';

export { workflowRevision };
export function stagesForRun(ctx: any) {
  return nativeStages(ctx).map((source: any) => {
    const stage = { ...source };
    const progress = source.onProgress;
    stage.onProgress = async (args: any) => {
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
