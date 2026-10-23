import { writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { step1HoldPacket } from '../src/step1-hold-evidence.mjs';

/** One report for the complete gate battery. Never launches work or waives a gate. */
export function holdStep1({ ctx, stage, failure }: any) {
  const path = `research/${ctx.run}-step1-blockers.json`;
  writeFileSync(join(ctx.repo, path), step1HoldPacket(ctx.run, stage.id, new Date().toISOString(), failure));
  return { owner: { reason: `Step 1 held; resolve ${path}` } };
}
