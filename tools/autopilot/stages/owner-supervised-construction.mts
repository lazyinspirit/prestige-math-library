// Explicit run-local opt-in: retain native gates and defer initial artifact checks.
import { stagesForRun as ownerStages, workflowRevision } from './owner-supervised.mts';
export { workflowRevision };
export function stagesForRun(ctx: any) {
  return ownerStages(ctx).map((stage: any) => stage.id === '1-scaffold'
    ? { ...stage, deferConstructionArtifactsUntilDrain: true }
    : stage);
}
