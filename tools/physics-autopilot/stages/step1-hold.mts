import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

/** One report for the complete gate battery. Never launches work or waives a gate. */
export function holdStep1({ ctx, stage, failure }: any) {
  const path = `research/${ctx.run}-step1-blockers.json`;
  const failures = [failure, ...(failure.advisory ?? [])]
    .filter(row => !row.stage || row.stage === stage.id)
    .map(({ advisory, ...row }) => row);
  writeFileSync(join(ctx.repo, path), JSON.stringify({
    run: ctx.run, stage: stage.id, at: new Date().toISOString(), failures,
    action: 'Owner or authorized operator: resolve findings, reconcile shared files, then rerun gates. Do not repeat unchanged scaffolds.',
  }, null, 2) + '\n');
  return { owner: { reason: `Step 1 held; resolve ${path}` } };
}
