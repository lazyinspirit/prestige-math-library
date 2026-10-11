// The native six-step pipeline with the owner's metadata-only pre-gate pass.
// No stages, worker prompts, review obligations or original gates are replaced.
import { statSync } from 'node:fs';
const nativePath = new URL('../tools/autopilot/stages/mathlib.mts', import.meta.url);
const nativeStat = statSync(nativePath);
const { default: native } = await import(`${nativePath.href}?v=${nativeStat.mtimeMs}:${nativeStat.size}`);
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
export const workflowRevision = native.workflowRevision;
export const stagesForRun = (ctx: any) => {
  const run = 'frontier-44-special-representation-examples-28-six-step';
  const path = join(ctx.repo, '.autopilot', run, 'state.json');
  const state = ctx.run === run && existsSync(path) ? JSON.parse(readFileSync(path, 'utf8')) : null;
  return native.stagesForRun(ctx).map((original: any) => {
  // These two authoring phases were genuinely skipped by the owner before
  // independent review. Later cross-batch dependencies cannot require their
  // unused serial authoring planner to run again. Keep all gates and all
  // independent stages intact; item dependencies remain checked normally.
  const inactiveAuthoring = ['1-scaffold', '2-scope-review'].includes(original.id)
    && state?.run === run && state.workflowRevision === workflowRevision
    && state.stages?.[original.id]?.skipped === true;
  const stage = inactiveAuthoring ? { ...original, unitPrerequisites: undefined } : original;
  if (!stage.gates || stage.gatesWaived) return stage;
  return { ...stage, gates: (context: any) => [{
    id: `owner-metadata-recert-${stage.id}`,
    argv: ['node', 'research/frontier-44-special-representation-examples-28-six-step-pre-gate-recertify.mjs', context.run, stage.id],
    liveness: { pattern: 'metadata-recert: (\\d+) subjects', min: 1, unit: 'frontier subjects' },
  }, ...stage.gates(context)] };
  });
};
export const stages = stagesForRun({ repo: process.cwd(), run: 'frontier-44-special-representation-examples-28-six-step' });
export default { ...native, workflowRevision, stages, stagesForRun };
