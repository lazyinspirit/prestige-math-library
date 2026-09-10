import { createHash } from 'node:crypto';
import { existsSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { Executor } from '../src/executor.mts';

/** Ignore reports and timestamps: a no-op repair cannot buy another model call. */
export function repairFingerprint(ctx: any): string {
  const hash = createHash('sha256');
  const files = ['research/plan-spec.json', 'research/defect-ledger.jsonl'];
  for (const dir of ['items', 'library', 'tools', 'briefs']) {
    if (existsSync(join(ctx.repo, dir))) files.push(...readdirSync(join(ctx.repo, dir), { recursive: true, withFileTypes: true })
      .filter((entry) => entry.isFile()).map((entry) => join(entry.parentPath, entry.name)));
  }
  if (existsSync(join(ctx.repo, 'research'))) files.push(...readdirSync(join(ctx.repo, 'research'))
    .filter((name) => name.startsWith(`${ctx.run}-`) && (
      /-batch-\d+\.(pages|proof-contracts|coverage)\.json$/.test(name)
      || /-alpha-[a-z]+-5a-decisions\.json$/.test(name)))
    .map((name) => `research/${name}`));
  for (const file of files.sort()) {
    const path = file.startsWith('/') ? file : join(ctx.repo, file);
    hash.update(file);
    hash.update(existsSync(path) ? readFileSync(path) : '<missing>');
  }
  return hash.digest('hex');
}

/** One writer per group owns all gate findings on its carriers. Unscoped
 * failures use one serial lane, since their write set cannot be proven disjoint. */
export async function repairGateBatch(args: any, deps: any) {
  const { ctx, failure, executor, stage, round } = args;
  let failures = [failure, ...(failure.advisory ?? [])]
    .filter((entry) => !entry.liveItems || entry.liveItems.length);
  // A completed mathematical read may identify a detector defect. Do not
  // spend another content-repair round on that tool's unchanged diagnostics.
  const ledgerPath = join(ctx.repo, 'research', 'defect-ledger.jsonl');
  if (existsSync(ledgerPath)) {
    const gateTools = new Set((stage.gates?.(ctx) ?? [])
      .filter((gate: any) => failures.some((f: any) => gate.id === f.id || gate.id.endsWith(`-${f.id}`)))
      .flatMap((gate: any) => Array.isArray(gate.argv) ? gate.argv.filter((arg: any) => typeof arg === 'string' && arg.startsWith('tools/')) : []));
    const holds = readFileSync(ledgerPath, 'utf8').split(/\r?\n/).filter(Boolean).map(line => JSON.parse(line))
      .filter(row => row.run === ctx.run && row.disposition === 'open' && row.location === 'tool-code' && gateTools.has(row.subject));
    if (holds.length) return { owner: { reason: holds.map(row =>
      `${row.defect_id}: ${row.subject} requires tool-owner repair; ${row.subclass_note ?? row.required_authority ?? 'see defect ledger'}`).join('\n') } };
  }
  const mechanical = failures.filter((entry) => deps.MECHANICAL_REPAIRS[entry.id]);
  if (mechanical.length) {
    const result = await deps.mechanicalRepair({ ctx,
      failure: { ...mechanical[0], advisory: mechanical.slice(1) } });
    if (result.outcome === 'outage') return { outage: { reason: result.reason } };
    if (result.outcome === 'clean') failures = failures.filter((entry) => !mechanical.includes(entry));
    else failures = failures.map((entry) => mechanical.includes(entry)
      ? { ...entry, output: `${entry.output ?? ''}\nMechanical residue: ${result.stderr ?? result.outcome}` } : entry);
  }
  if (!failures.length) return;
  const groups = deps.alphaGroups(ctx);
  const owners = new Map<string, string>();
  const ambiguous = new Set<string>();
  const own = (id: string, group: string) => {
    if (owners.has(id) && owners.get(id) !== group) ambiguous.add(id);
    else owners.set(id, group);
  };
  for (const group of groups) for (const batch of group.covers) {
    const path = join(ctx.repo, 'research', `${ctx.run}-batch-${batch}.pages.json`);
    if (!existsSync(path)) continue;
    for (const page of JSON.parse(readFileSync(path, 'utf8'))) {
      own(page.id, group.label);
      for (const item of page.items ?? []) own(item.id ?? item, group.label);
    }
  }
  const named = failures.flatMap((entry) => entry.liveItems?.filter((id: string) => id !== '*')
    ?? Executor.itemsNamedBy(entry));
  const serial = failures.some((entry) => !Executor.itemsNamedBy(entry).length)
    || named.some((id) => !owners.has(id) || ambiguous.has(id)) || failures.some((entry) => entry.id === 'validate-plan');
  const lanes = serial ? [null] : groups.map((group: any) => group.label)
    .filter((label: string) => named.some((id) => owners.get(id) === label));
  const evidence = `research/${ctx.run}-${stage.id}-gate-batch-${round}.json`;
  writeFileSync(join(ctx.repo, evidence), JSON.stringify({ failures, owners: Object.fromEntries(owners), ambiguous: [...ambiguous] }, null, 2) + '\n');
  for (const group of lanes) {
    const task = `research/${ctx.run}-${stage.id}-gate-batch-${round}-${group ?? 'all'}.task.md`;
    const assigned = [...owners].filter(([, owner]) => group == null || owner === group).map(([id]) => id);
    writeFileSync(join(ctx.repo, task), [
      '# Step 5a gate repair batch', '',
      `Stage: ${stage.id}. Evidence: ${evidence}. Group: ${group ?? 'all (serial writer)'}.`,
      `Write your report to research/${ctx.run}-${stage.id}-gate-review-${round}-${group ?? 'all'}.md. Briefs and task templates are read-only.`,
      `Assigned carriers: ${JSON.stringify(assigned)}.`,
      'Read every failure in the evidence file. Adjudicate all findings on your assigned carriers in one pass.',
      'Exhausted ids are excluded from repair even when mentioned in the diagnostic output.',
      'Do not edit another group, shared merged contracts, tools, or gate implementations.',
      failures.some((entry) => entry.id === 'validate-plan')
        ? 'For plan prerequisite errors, follow briefs/tasks/alpha-step5-edge.md. Only the serial lane may reconcile licensed plan edges; do not weaken or waive a gate.'
        : 'Do not edit the plan; the engine reconciles it mechanically.',
      'For an unowned or detector defect, report its exact cause and required authority; do not repeat a content workaround.',
      'Repair confirmed defects and update their owning batch contracts, manifests, risk reviews and decision records together.',
      'For boundary/citation candidates, read each claim and record item-specific dispositions; never bulk-stamp template rows.',
      'Select applicable finite-smoke checks with assertion evidence when the liveness check finds an empty scope.',
      'At 5a, update authored-content decisions after repairs; include newly authored local definitions and lemmas. Preserve historical review evidence.',
      'At 5a, follow the protocol in briefs/tasks/alpha-step5-gate.md to maintain authored decisions and matching defect-ledger records; do not edit that template. Preserve supplemental decisions in historical scopes.',
      'Run focused checks for changed carriers. The engine runs the complete final battery.', '',
    ].join('\n'));
    executor.start(stage, { role: 'alpha', label: `gate-batch-${round}-${group ?? 'all'}`,
      job: 'adjudication', covers: [], brief: 'briefs/alpha-step5.md', task, timeout: 3600 });
  }
}
