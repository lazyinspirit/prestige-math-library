import { createHash } from 'node:crypto';
import { existsSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// Source recovery logs and check timestamps are evidence, not repaired content.
function semantic(value: any): any {
  if (Array.isArray(value)) return value.map(semantic);
  if (!value || typeof value !== 'object') return value;
  return Object.fromEntries(Object.entries(value)
    .filter(([key]) => !['checks', 'recovery_attempts', 'attempts', 'searches',
      'search_summary', 'at', 'date', 'reviewed_at', 'generated_at'].includes(key)
      && !key.startsWith('historical_'))
    .map(([key, entry]) => [key, semantic(entry)]));
}

/** Shared designs and actual supplier text count; repair reports alone do not. */
export function scaffoldRepairFingerprint(ctx: any): string {
  const hash = createHash('sha256');
  const research = join(ctx.repo, 'research');
  const names = existsSync(research) ? readdirSync(research) : [];
  for (const name of names.filter(name => name === 'plan-spec.json'
    || /^plan-.*\.md$/.test(name) || name === 'phase-2-build-manifest.md'
    || (name.startsWith(`${ctx.run}-batch-`) && /\.(pages|coverage)\.json$/.test(name))).sort()) {
    const body = readFileSync(join(research, name), 'utf8');
    hash.update(name);
    if (name.endsWith('.json')) {
      try { hash.update(JSON.stringify(semantic(JSON.parse(body)))); }
      catch { hash.update(body); } // Malformed JSON is a changed, failing input.
    } else hash.update(body);
  }
  for (const dir of ['items', 'library']) {
    const root = join(ctx.repo, dir);
    if (!existsSync(root)) continue;
    const files = readdirSync(root, { recursive: true, withFileTypes: true })
      .filter(entry => entry.isFile()).map(entry => join(entry.parentPath, entry.name)).sort();
    for (const file of files) hash.update(file).update(readFileSync(file));
  }
  return hash.digest('hex');
}

/** The Step-1 barrier is drained before this hook. One writer may therefore
 * reconcile local scaffolds and their shared prerequisite designs together.
 * All live failures travel in one packet; exhausted subjects remain holds.
 */
export function dispatchScaffoldRepairs({ ctx, executor, stage, round, failure }: any): boolean {
  const failures = [failure, ...(failure?.advisory ?? [])]
    .filter(entry => (!entry.stage || entry.stage === stage.id)
      && (!entry.liveItems || entry.liveItems.length));
  if (!failures.length) return false;
  const root = join(ctx.repo, 'research');
  const files = existsSync(root) ? readdirSync(root)
    .filter(name => name.startsWith(`${ctx.run}-batch-`) && /-batch-\d+\.pages\.json$/.test(name)).sort() : [];
  if (!files.length) return false;
  const batches = files.map(name => name.match(/-batch-(\d+)\.pages\.json$/)![1]);
  const packet = `research/${ctx.run}-scaffold-repair-${round}.json`;
  const task = `research/${ctx.run}-scaffold-repair-${round}.task.md`;
  writeFileSync(join(ctx.repo, packet), JSON.stringify({
    run: ctx.run, stage: stage.id, round, batches,
    manifests: files.map(name => `research/${name}`),
    scope_ledger: `research/${ctx.run}-scope-ledger.json`,
    failures: failures.map(({ advisory: _nested, ...entry }) => entry),
    exhausted: [failure, ...(failure?.advisory ?? [])]
      .filter(entry => !entry.stage || entry.stage === stage.id)
      .filter(entry => entry.exhaustedItems?.length)
      .map(entry => ({ gate: entry.id, items: entry.exhaustedItems })),
  }, null, 2) + '\n');
  writeFileSync(join(ctx.repo, task), [
    '# Step 1: scaffold and prerequisite reconciliation', '',
    `Read the complete repair packet at ${packet}.`,
    'Follow briefs/beta-scaffold-reconcile.md. This is the sole shared writer at the drained Step-1 barrier.',
    `Record each finding and its outcome in research/${ctx.run}-scaffold-repair-${round}.notes.md.`,
    'Process one finding at a time. Do not stop after the first unresolved source; address the other live findings.', '',
  ].join('\n'));
  executor.start(stage, {
    role: 'beta', label: `scaffold-reconcile-${round}`, job: 'scaffolding',
    covers: batches, brief: 'briefs/beta-scaffold-reconcile.md', task, timeout: 14400,
  });
  return true;
}
