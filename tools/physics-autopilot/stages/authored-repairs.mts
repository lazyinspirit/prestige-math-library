// Shared repair fingerprint. Step 5's gate-triggered repair wave was deleted in
// the 5a rebuild: a failing 5a/5b gate is an owner hold, so only the stages that
// still own a repair loop (7-adjudicate and legacy paths) use this.
import { createHash } from 'node:crypto';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

/** Ignore reports and timestamps: a no-op repair cannot buy another model call. */
export function repairFingerprint(ctx: any): string {
  const hash = createHash('sha256');
  const files = ['research/plan-spec.json', 'research/defect-ledger.jsonl'];
  for (const dir of ['items', 'library', 'tools/physics-support', 'briefs']) {
    if (existsSync(join(ctx.repo, dir))) files.push(...readdirSync(join(ctx.repo, dir), { recursive: true, withFileTypes: true })
      .filter((entry) => entry.isFile()).map((entry) => join(entry.parentPath, entry.name)));
  }
  if (existsSync(join(ctx.repo, 'research'))) files.push(...readdirSync(join(ctx.repo, 'research'))
    .filter((name) => name.startsWith(`${ctx.run}-`) && (
      /-batch-\d+\.(pages|proof-contracts|coverage)\.json$/.test(name)
      || /-alpha-(?:[a-z]+|batch-[1-9]\d*)-5a-decisions\.json$/.test(name)))
    .map((name) => `research/${name}`));
  for (const file of files.sort()) {
    const path = file.startsWith('/') ? file : join(ctx.repo, file);
    hash.update(file);
    hash.update(existsSync(path) ? readFileSync(path) : '<missing>');
  }
  return hash.digest('hex');
}
