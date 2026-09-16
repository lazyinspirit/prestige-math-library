import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

/** One owner-readable report for a failed Step 5a or 5b gate battery.
 *  Never launches a repair, review or judge round, and never waives a gate. */
export function holdStep5({ ctx, stage, failure }: any) {
  const path = `research/${ctx.run}-step5-blockers.json`;
  const failures = [failure, ...(failure.advisory ?? [])]
    .filter((row: any) => !row.stage || row.stage === stage.id)
    .map(({ advisory, ...row }: any) => row);
  writeFileSync(join(ctx.repo, path), JSON.stringify({
    run: ctx.run, stage: stage.id, at: new Date().toISOString(), failures,
    action: 'Owner or authorized operator: repair every carrier this gate names on the current tree. '
      + 'For a carrier already decided at 5a, set its group decision to `amended_repair` (or `reverted_change`) '
      + 'and close or append its defect-ledger row with `caught_at_stage: "5a-adjudicate"`. '
      + 'Refresh every certification invalidated by the repair with '
      + '`node tools/auditor-created-items.mjs owner-recertify --run <run> --step 5 --id <id> --evidence <file> --reason <text>`. '
      + 'Then run `autopilot retry`; the same gate must pass before the stage can transition.',
  }, null, 2) + '\n');
  return { owner: { reason: `Step 5 held; resolve ${path}` } };
}
