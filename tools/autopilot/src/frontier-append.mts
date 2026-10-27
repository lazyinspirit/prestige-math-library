// Guarded extension of an unclosed Step-1 frontier. This never edits state.
import { existsSync, readFileSync, readdirSync, writeFileSync, mkdirSync, rmSync, copyFileSync, lstatSync, statSync, renameSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';
import { createHash } from 'node:crypto';
import { spawnSync } from 'node:child_process';
import { packBatches, writeManifests, loadPlan, syncManifestsPreservingItems } from '../../plan-manifests.mjs';
import { readNativeAppendReportBase } from '../../drift-owner-resolutions.mjs';
import { MAX_RUN_PAIRS } from './capacity.mjs';
import { loadAppendDriftOwnerResolutions, appendOwnerResolutionPath, loadAppendManifestAuthoringRecovery } from '../../append-drift-owner-resolutions.mjs';
import { scanProcesses } from '../bin/watchdog.mjs';
import type { Stage, Ctx } from './types.mts';

const hash = (data: string | Buffer) => createHash('sha256').update(data).digest('hex');
const safe = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const fail = (s: string): never => { throw new Error(`plan --append: ${s}`); };
const read = (p: string): any => JSON.parse(readFileSync(p, 'utf8'));
const registryPath = (repo: string, run: string) => join(repo, 'research', `${run}-frontier-appends.json`);
const regular = (p: string) => { if (!lstatSync(p).isFile() || lstatSync(p).isSymbolicLink()) fail(`not a regular file: ${p}`); };

export function appendRegistry(repo: string, run: string): any {
  const path = registryPath(repo, run);
  if (!existsSync(path)) return { version: 1, run, appends: [] };
  regular(path);
  const data = read(path);
  if (data.version !== 1 || data.run !== run || !Array.isArray(data.appends)) fail('invalid append registry');
  for (const [index, entry] of data.appends.entries()) {
    if (entry.number !== index + 1 || !Array.isArray(entry.pairs) || !entry.pairs.length
      || entry.pairs.some((id: any) => typeof id !== 'string' || !safe.test(id))) fail('invalid append generation');
    const n = entry.number;
    if (entry.run !== run || entry.report !== `research/${run}-alpha-step1-append-${n}-drift.md`
      || entry.task !== `research/${run}-alpha-step1-append-${n}-drift.task.md`
      || entry.archive !== `research/${run}-frontier-append-${n}`
      || entry.originalReport !== `${entry.archive}/preimages/${run}-alpha-step1-drift.md`
      || !Array.isArray(entry.batches) || entry.batches.some((b: any) => !/^[1-9]\d*$/.test(b))) fail('unsafe append paths or batch identities');
  }
  return data;
}

export function assertNoAppendTransaction(stateDir: string): void {
  if (existsSync(join(stateDir, 'frontier-append.lock'))) fail('an append transaction is active or interrupted; inspect its archived preimages before restarting');
}

function manifests(repo: string, run: string): Array<{ path: string; batch: number; pages: any[]; bytes: Buffer }> {
  const prefix = `${run}-batch-`;
  return readdirSync(join(repo, 'research')).filter(n => n.startsWith(prefix) && n.endsWith('.pages.json')).map(n => {
    const number = n.slice(prefix.length, -'.pages.json'.length);
    if (!/^[1-9]\d*$/.test(number)) fail(`unsafe batch name ${n}`);
    const path = join(repo, 'research', n); regular(path);
    const bytes = readFileSync(path), pages = JSON.parse(bytes.toString());
    if (!Array.isArray(pages) || !pages.length) fail(`empty or malformed existing manifest ${n}`);
    return { path, batch: Number(number), pages, bytes };
  }).sort((a, b) => a.batch - b.batch);
}

function inactive(repo: string, run: string, stateDir: string, scan: typeof scanProcesses): any {
  const path = join(stateDir, 'state.json'); regular(path); const state = read(path);
  if (state.run !== run || state.version !== 1 || state.paused !== true || state.finishedAt) fail('matching unfinished run must be paused');
  if (state.stage !== '1-scaffold' && !/^1-append-(?:drift|apply)-\d+$/.test(state.stage ?? '')) fail('append requires active Step-1 scaffolding or append review');
  for (const id of ['1-drift', '1-drift-apply']) if (!state.stages?.[id]?.doneAt || !state.stages[id].gatesPassedAt) fail(`original ${id} must have completed natively`);
  if (state.stages?.['1-scaffold']?.doneAt || state.stages?.['1-scaffold']?.gatesPassedAt
    || Object.entries<any>(state.stages ?? {}).some(([id, s]) => !id.startsWith('1-') && s.enteredAt)) fail('Step 1 is closed or a later stage has entered');
  if (Object.values<any>(state.dispatches ?? {}).some(d => d.startedAt && !d.endedAt)) fail('a target dispatch is active or unresolved');
  const live = scan({ repo, run, stateDir });
  if (live.controller.length || live.preflight.length || live.writer.length) fail('target controller/preflight/writers must be stopped and drained');
  return state;
}

export function appendFrontier({ repo, run, stateDir, pairs, allowInRunDependencies = false, evidence,
  buildability, scan = scanProcesses, invoke = (args: string[]) => {
    const result = spawnSync(process.execPath, args, { cwd: repo, encoding: 'utf8', maxBuffer: 16 * 1024 * 1024 });
    if (result.status !== 0) fail(`${args[0]} failed: ${result.stderr || result.stdout}`);
  }, now = () => new Date() }: {
  repo: string; run: string; stateDir: string; pairs: string[]; allowInRunDependencies?: boolean;
  evidence: (repo: string, ids: string[]) => any; buildability: (repo: string, ids: string[], options: any) => any[];
  scan?: typeof scanProcesses; invoke?: (args: string[]) => void; now?: () => Date;
}): any {
  if (!safe.test(run) || !pairs.length || pairs.some(id => !safe.test(id)) || new Set(pairs).size !== pairs.length) fail('safe unique run/pair IDs are required');
  assertNoAppendTransaction(stateDir);
  inactive(repo, run, stateDir, scan);
  const old = manifests(repo, run); if (!old.length) fail('no existing frontier manifests');
  if (old.some((m, index) => m.batch !== index + 1)) fail('existing batch numbers must be contiguous for native SYNC');
  const oldPages = old.flatMap(m => m.pages), pageIds = oldPages.map(p => p.id);
  if (new Set(pageIds).size !== pageIds.length || oldPages.some(p => !safe.test(p.id) || !['A', 'B'].includes(p.kind))) fail('existing page identities are invalid or duplicated');
  const priorPairs = oldPages.filter(p => p.kind === 'A').map(p => p.id);
  if (priorPairs.length + pairs.length > MAX_RUN_PAIRS) fail(`combined frontier exceeds ${MAX_RUN_PAIRS} pairs`);
  const plan = loadPlan(repo), by = new Map<string, any>(plan.pages.map((p: any) => [p.id, p]));
  const newPages: string[] = [];
  for (const id of pairs) {
    const a = by.get(id), b = a && by.get(a.companion ?? `${id}-examples`);
    if (!a || a.kind !== 'A' || !b || b.kind !== 'B' || b.companion !== id) fail(`not a complete reciprocal A/B pair: ${id}`);
    newPages.push(a.id, b.id);
  }
  if (new Set(newPages).size !== newPages.length || newPages.some(id => pageIds.includes(id))) fail('new A/B identities must be disjoint from existing frontier');
  const ledgerPath = join(repo, 'research', `${run}-scope-ledger.json`), ledger = read(ledgerPath);
  if (ledger.run !== run || !Array.isArray(ledger.pages)
    || JSON.stringify([...ledger.pages.map((p: any) => p.id)].sort()) !== JSON.stringify([...pageIds].sort())) fail('existing scope ledger and manifests differ');
  const allow = allowInRunDependencies || ledger.allow_in_run_dependencies === true;
  const findings = buildability(repo, [...priorPairs, ...pairs], { allowInRunDependencies: allow });
  if (findings.length) fail(`combined frontier is unbuildable: ${JSON.stringify(findings.slice(0, 8))}`);
  packBatches(repo, [...priorPairs, ...pairs], { cap: 1 }); // reject collapsed pair cycles too
  const groups = packBatches(repo, pairs, { cap: 1 });
  const registry = appendRegistry(repo, run), number = registry.appends.length + 1;
  const archive = join(repo, 'research', `${run}-frontier-append-${number}`);
  if (existsSync(archive)) fail('append archive already exists; reconcile interrupted extension');
  const firstBatch = Math.max(...old.map(m => m.batch)) + 1;
  for (let n = firstBatch; n < firstBatch + groups.length; n++) if (existsSync(join(repo, 'research', `${run}-batch-${n}.pages.json`))) fail('new batch path already exists');
  const oldReport = join(repo, 'research', `${run}-alpha-step1-drift.md`); regular(oldReport);
  const dispatchDir = join(repo, 'research', `${run}-dispatch`);
  if (existsSync(dispatchDir) && readdirSync(dispatchDir).some(n => n.includes(`drift-review-append-${number}.`))) fail('new append label already has dispatch evidence');
  const lock = join(stateDir, 'frontier-append.lock'); mkdirSync(lock);
  writeFileSync(join(lock, 'owner.json'), JSON.stringify({ run, pid: process.pid }) + '\n');
  // All overwritten generated metadata is archived; mathematical/review/ready
  // records, prior manifest bytes and state are never replaced.
  const before = new Map<string, Buffer>();
  const generated = (name: string) => name.startsWith(`${run}-`) && (name.endsWith('.task.md')
    || name.endsWith('-planning-notes.md') || name === `${run}-scope-ledger.json` || name === `${run}-covers.json`
    || name === `${run}-drift-evidence.json` || name === `${run}-alpha-step1-drift.md` || name === `${run}-frontier-appends.json`);
  try {
    inactive(repo, run, stateDir, scan);
    mkdirSync(archive); mkdirSync(join(archive, 'preimages'));
    for (const name of readdirSync(join(repo, 'research')).filter(generated)) {
      const path = join(repo, 'research', name); regular(path); before.set(path, readFileSync(path));
    }
    for (const m of old) before.set(m.path, m.bytes);
    const preimages: any[] = [];
    for (const [path, bytes] of before) {
      const name = path.slice(path.lastIndexOf('/') + 1); writeFileSync(join(archive, 'preimages', name), bytes);
      preimages.push({ path: relative(repo, path), sha256: hash(bytes), archive: relative(repo, join(archive, 'preimages', name)) });
    }
    copyFileSync(join(stateDir, 'state.json'), join(archive, 'state.before.json'));
    const entry = { number, run, at: now().toISOString(), pairs, oldPairs: priorPairs, newPages,
      batches: groups.map((_, n) => String(firstBatch + n)), allowInRunDependencies: allow,
      archive: relative(repo, archive), report: `research/${run}-alpha-step1-append-${number}-drift.md`,
      task: `research/${run}-alpha-step1-append-${number}-drift.task.md`,
      evidence: `research/${run}-append-${number}-drift-evidence.json`,
      originalReport: relative(repo, join(archive, 'preimages', `${run}-alpha-step1-drift.md`)),
      preimages, stateBeforeSha256: hash(readFileSync(join(stateDir, 'state.json'))) };
    writeFileSync(join(archive, 'prepared.json'), JSON.stringify(entry, null, 2) + '\n');
    writeFileSync(join(archive, 'new-pages.json'), JSON.stringify(newPages, null, 2) + '\n');
    writeManifests(repo, run, groups, { startAt: firstBatch });
    invoke(['tools/manifest-integrity.mjs', '--run', run, '--write-ledger', '--force', ...(allow ? ['--allow-in-run-dependencies'] : [])]);
    const coversPath = join(repo, 'research', `${run}-covers.json`), covers = existsSync(coversPath) ? read(coversPath) : {};
    for (const batch of entry.batches) covers[`beta-batch-${batch}`] = [batch];
    writeFileSync(coversPath, JSON.stringify(covers, null, 2) + '\n');
    invoke(['tools/run-tasks.mjs', '--run', run, '--force']);
    // Keep the old drift inputs/report exactly attributable to old receipts.
    for (const suffix of ['alpha-step1-drift.task.md', 'drift-evidence.json', 'alpha-step1-drift.md']) {
      const path = join(repo, 'research', `${run}-${suffix}`); if (before.has(path)) writeFileSync(path, before.get(path)!);
    }
    writeFileSync(join(repo, entry.evidence), JSON.stringify(evidence(repo, pairs), null, 2) + '\n');
    writeFileSync(join(repo, entry.task), [
      `# Native appended-frontier drift review ${number}: ${run}`, '',
      `Review ONLY these newly appended A pages: ${pairs.join(', ')}.`,
      `Read ${entry.evidence}, the complete assigned designs and research/${run}-owner-authoring-direction.md if present.`,
      `Read research/${run}-scope-ledger.json and the appended batch manifests (${entry.batches.join(', ')}); existing reviews remain historical evidence, not a new review.`,
      `Write ${entry.report}, one ### PAGE_ID and one VERDICT line per assigned A page.`,
      'Allowed verdicts: no-drift, drift-applied, drift-reordered, drift-blocked. Apply only authorized plan corrections for these new pages; do not edit existing manifests/content, mint, rescope, or claim proof acceptance.',
      `Run node tools/tsx-run.mjs tools/autopilot/bin/frontier-append.mts check-review --run ${run} --generation ${number}.`,
      `Run node tools/validate-plan.mjs research/plan-spec.json --run ${run} --before-apply; current inventories are retained while intended canonical page metadata is checked before native SYNC.`,
      `Run node tools/validate-plan.mjs research/plan-spec.json --pages-file ${entry.archive}/new-pages.json to check all actual planned new item declarations even before scaffolding.`,
      'Name actual unresolved design/source prerequisites honestly; consult the full authoritative sources needed to assess the supplied designs. The engine owns review materialization.', '',
    ].join('\n'));
    for (const m of old) if (!readFileSync(m.path).equals(m.bytes)) fail(`prior manifest changed: ${m.path}`);
    if (hash(readFileSync(join(stateDir, 'state.json'))) !== entry.stateBeforeSha256) fail('state changed during append');
    registry.appends.push(entry); writeFileSync(registryPath(repo, run), JSON.stringify(registry, null, 2) + '\n');
    writeFileSync(join(archive, 'committed.json'), JSON.stringify({ run, number, newBatches: entry.batches, preservedManifests: old.length, stateUnchanged: true }, null, 2) + '\n');
    return entry;
  } catch (error) {
    for (const [path, bytes] of before) writeFileSync(path, bytes);
    for (const name of readdirSync(join(repo, 'research')).filter(generated)) {
      const path = join(repo, 'research', name); if (!before.has(path)) rmSync(path);
    }
    for (let n = firstBatch; n < firstBatch + groups.length; n++) rmSync(join(repo, 'research', `${run}-batch-${n}.pages.json`), { force: true });
    rmSync(join(repo, 'research', `${run}-append-${number}-drift-evidence.json`), { force: true });
    if (existsSync(archive)) writeFileSync(join(archive, 'failed.json'), JSON.stringify({ run, number, error: String(error), restored: true }, null, 2) + '\n');
    throw error;
  } finally { rmSync(lock, { recursive: true, force: true }); }
}

export function checkAppendReview(repo: string, run: string, number: number): any {
  const entry = appendRegistry(repo, run).appends.find((e: any) => e.number === number);
  if (!entry) fail('unknown append generation');
  if (!entry.newPages?.length || JSON.stringify(read(join(repo, entry.archive, 'new-pages.json'))) !== JSON.stringify(entry.newPages))
    fail('appended planned-page selector differs from the registered nonempty scope');
  const text = readFileSync(join(repo, entry.report), 'utf8');
  const headings = [...text.matchAll(/^###\s+`?([a-z0-9]+(?:-[a-z0-9]+)*)`?\s*$/gm)];
  if (headings.length !== entry.pairs.length || new Set(headings.map(m => m[1])).size !== entry.pairs.length
    || headings.some(m => !entry.pairs.includes(m[1]))) fail('append report must review exactly its assigned A pages once');
  const ownerResolved = loadAppendDriftOwnerResolutions(repo, run, entry, text);
  for (const [n, heading] of headings.entries()) {
    const body = text.slice(heading.index! + heading[0].length, headings[n + 1]?.index ?? text.length);
    const verdicts = [...body.matchAll(/^VERDICT:\s*(no-drift|drift-applied|drift-reordered|drift-blocked)\b/gm)];
    if (verdicts.length !== 1 || /^VERDICT:/gm.test(body.replace(verdicts[0][0], ''))) fail(`invalid/blocked append review for ${heading[1]}`);
    if (verdicts[0][1] === 'drift-blocked' && ownerResolved.get(heading[1]) !== /^VERDICT:.*$/m.exec(body)?.[0])
      fail(`invalid/blocked append review for ${heading[1]}`);
  }
  return entry;
}

function sameItemsAndPageFields(before: Buffer, after: Buffer): boolean {
  const normalize = (bytes: Buffer) => JSON.parse(bytes.toString()).map((page: any) => ({
    ...page, items: [...page.items].sort((a: any, b: any) => a.id.localeCompare(b.id)),
  }));
  return JSON.stringify(normalize(before)) === JSON.stringify(normalize(after));
}

/** Explicit guarded recovery for formatting/order only, never a new baseline. */
export function recoverAppendItemOrder(repo: string, run: string, number: number,
  stateDir: string, scan = scanProcesses): any {
  inactive(repo, run, stateDir, scan);
  const entry = checkAppendReview(repo, run, number), archive = join(repo, entry.archive);
  if (existsSync(join(archive, 'review-applied.json'))) fail('item-order recovery must precede append application');
  const records = [];
  for (const record of entry.preimages.filter((p: any) => p.path.endsWith('.pages.json'))) {
    const before = readFileSync(join(repo, record.archive)), current = readFileSync(join(repo, record.path));
    if (hash(before) !== record.sha256) fail(`archived manifest differs from original preimage: ${record.path}`);
    if (hash(current) === record.sha256) continue;
    if (!sameItemsAndPageFields(before, current)) fail(`recovery would change item objects or page fields: ${record.path}`);
    records.push({ path: record.path, beforeSha256: record.sha256, afterSha256: hash(current) });
  }
  if (!records.length) fail('no item-order metadata change to recover');
  const receipt = { version: 1, run, number, at: new Date().toISOString(),
    action: 'guarded-item-array-order-recovery', records,
    archivedPreimagesPreserved: true, itemObjectsAndPageFieldsUnchanged: true,
    mathematicalRepairOrCounterReset: false };
  writeFileSync(join(archive, 'item-order-recovery.json'), JSON.stringify(receipt, null, 2) + '\n', { flag: 'wx' });
  return receipt;
}

/** Bind an explicitly requested fresh review to its actual native result and
 * output bytes. Initial append reviews keep their original receipt path. */
export function sealAppendReviewRefresh(repo: string, run: string, number: number): any {
  const entry = appendRegistry(repo, run).appends.find((e: any) => e.number === number);
  if (!entry) fail('unknown append generation');
  const pointer = join(repo, entry.archive, 'current-review-refresh.json');
  if (!existsSync(pointer)) return null;
  const request = read(pointer), stage = `1-append-drift-${number}`, unit = `append-${number}`;
  if (request.run !== run || request.stage !== stage || request.unit !== unit
    || !/^[a-zA-Z0-9-]{1,80}$/.test(request.id ?? '')
    || request.label !== `drift-review-append-${number}-refresh-${request.id}`
    || request.task !== `${entry.archive}/refresh-${request.id}.task.md`
    || !Number.isFinite(Date.parse(request.requestedAt))) fail('invalid append refresh request');
  const state = read(request.stateFile);
  const native = state.nativeRefreshes?.find((r: any) => r.id === request.id && r.stage === stage);
  const dispatch = state.dispatches?.[`${stage}:${request.label}`];
  if (state.run !== run || !native || native.run !== run || native.unit !== unit
    || native.requestedAt !== request.requestedAt || native.plan?.label !== request.label
    || native.plan?.role !== 'alpha' || !dispatch || dispatch.role !== 'alpha'
    || !dispatch.covers?.includes(unit)) fail('append refresh lacks engine-started request/dispatch');
  const resultPath = join(request.dispatchDir, `alpha-${request.label}.result.json`);
  if (!existsSync(resultPath)) fail('append refresh result missing');
  const result = read(resultPath), start = Date.parse(result.started_at), end = Date.parse(result.ended_at);
  if (result.run !== run || result.role !== 'alpha' || result.label !== request.label
    || result.ok !== true || result.timed_out === true || result.written_by === 'autopilot'
    || (result.exit_code !== undefined && result.exit_code !== 0)
    || !Array.isArray(result.covers) || result.covers.length !== 1 || result.covers[0] !== unit
    || !Number.isFinite(start) || !Number.isFinite(end) || start < Date.parse(request.requestedAt) || end < start)
    fail('append refresh requires its exact fresh successful native receipt');
  const task = readFileSync(join(repo, request.task));
  if (hash(task) !== request.taskSha256) fail('append refresh task changed');
  const reportPath = join(repo, entry.report);
  if (!existsSync(reportPath) || statSync(reportPath).mtimeMs < Date.parse(request.requestedAt))
    fail('append refresh report was not written after the request');
  const seal = { run, number, id: request.id, label: request.label, requestSha256: hash(readFileSync(pointer)),
    resultSha256: hash(readFileSync(resultPath)), reportSha256: hash(readFileSync(reportPath)), taskSha256: hash(task) };
  const sealPath = join(repo, entry.archive, `refresh-${request.id}.seal.json`);
  if (existsSync(sealPath)) {
    if (JSON.stringify(read(sealPath)) !== JSON.stringify(seal)) fail('sealed append refresh inputs changed');
  } else writeFileSync(sealPath, JSON.stringify(seal, null, 2) + '\n', { flag: 'wx' });
  return seal;
}

function appendReportText(entry: any, base: string, report: string): string {
  return base + `\n\n<!-- native append review ${entry.number}; original preimage retained in ${entry.archive} -->\n` + report;
}

/** Reconstruct exactly the already applied predecessor chain, never a stale
 * preparation-time capture or an unverified current report. */
function predecessorAppendReport(repo: string, run: string, number: number): string {
  const entries = appendRegistry(repo, run).appends;
  const first = entries[0];
  const original = readFileSync(join(repo, first.originalReport), 'utf8');
  const record = first.preimages.find((p: any) => p.archive === first.originalReport && p.path === `research/${run}-alpha-step1-drift.md`);
  if (!record || hash(original) !== record.sha256) fail('first native report capture changed');
  let merged = original;
  for (const entry of entries.filter((e: any) => e.number < number)) {
    const receiptPath = join(repo, entry.archive, 'review-applied.json');
    if (!existsSync(receiptPath)) fail('predecessor append application is missing');
    const receipt = read(receiptPath), report = readFileSync(join(repo, entry.report), 'utf8');
    if (receipt.run !== run || receipt.number !== entry.number || receipt.inventoriesPreserved !== true
      || readNativeAppendReportBase(repo, run, entry, receipt) !== merged
      || receipt.reportSha256 !== hash(report)) fail('predecessor native append report binding changed');
    merged = appendReportText(entry, merged, report);
    if (receipt.mergedReportSha256 !== hash(merged)) fail('predecessor native append merge changed');
  }
  if (entries.some((e: any) => e.number > number && existsSync(join(repo, e.archive, 'review-applied.json'))))
    fail('cannot reapply an append before an already applied later generation');
  return merged;
}

function preserveExact(path: string, raw: string | Buffer): void {
  if (existsSync(path)) { if (!readFileSync(path).equals(Buffer.from(raw))) fail(`archived report evidence changed: ${path}`); }
  else writeFileSync(path, raw, { flag: 'wx' });
}

function appendMergeBinding(repo: string, entry: any, captured: string, base: string): any {
  if (base === captured) return {};
  const path = `${entry.archive}/report-merge-bases/${hash(base)}.md`;
  mkdirSync(join(repo, entry.archive, 'report-merge-bases'), { recursive: true });
  preserveExact(join(repo, path), base);
  return { capturedOriginalReportSha256: hash(captured), mergeBase: { path, sha256: hash(base) } };
}

export function applyAppendReview(repo: string, run: string, number: number): any {
  const entry = checkAppendReview(repo, run, number), archive = join(repo, entry.archive);
  const dir = join(repo, 'research', `${run}-dispatch`);
  const pattern = new RegExp(`^alpha-(?:alpha-)?drift-review-append-${number}\\.result\\.json$`);
  const refreshed = existsSync(join(archive, 'current-review-refresh.json'));
  const refreshSealPath = refreshed ? (() => {
    const request = read(join(archive, 'current-review-refresh.json'));
    if (!/^[a-zA-Z0-9-]{1,80}$/.test(request.id ?? '')) fail('invalid append refresh identity');
    return join(archive, `refresh-${request.id}.seal.json`);
  })() : null;
  if (refreshSealPath && !existsSync(refreshSealPath)) fail('append refresh must be sealed before application');
  const refresh = refreshed ? sealAppendReviewRefresh(repo, run, number) : null;
  const success = refresh || existsSync(dir) && readdirSync(dir).filter(n => pattern.test(n)).some(n => {
    const result = read(join(dir, n));
    return result.run === run && result.role === 'alpha' && result.label === `drift-review-append-${number}`
      && result.ok === true && result.timed_out !== true && (result.exit_code === undefined || result.exit_code === 0) && result.covers?.includes(`append-${number}`)
      && Number.isFinite(Date.parse(result.started_at)) && Date.parse(result.started_at) >= Date.parse(entry.at);
  });
  if (!success) fail('append application requires a fresh successful native append-review receipt');
  const original = readFileSync(join(repo, entry.originalReport), 'utf8');
  const originalRecord = entry.preimages.find((p: any) => p.archive === entry.originalReport
    && p.path === `research/${run}-alpha-step1-drift.md`);
  if (!originalRecord || hash(original) !== originalRecord.sha256)
    fail('archived original drift report differs from its recorded preimage');
  const receiptPath = join(archive, 'review-applied.json');
  const priorApplication = existsSync(receiptPath) ? read(receiptPath) : null;
  const mergeBase = predecessorAppendReport(repo, run, number);
  const actualReport = readFileSync(join(repo, entry.report), 'utf8');
  const expectedMerged = appendReportText(entry, mergeBase, actualReport);
  const currentMerged = readFileSync(join(repo, 'research', `${run}-alpha-step1-drift.md`), 'utf8');
  if (priorApplication) {
    if (priorApplication.originalReportSha256 !== hash(mergeBase) || priorApplication.reportSha256 !== hash(actualReport)
      || priorApplication.mergedReportSha256 !== hash(expectedMerged) || currentMerged !== expectedMerged)
      fail('existing append report needs explicit authenticated rebase-report recovery');
  } else if (currentMerged !== mergeBase) fail('current drift report differs from authenticated predecessor');
  const recoveryPath = join(archive, 'item-order-recovery.json');
  const recovery = existsSync(recoveryPath) ? read(recoveryPath) : null;
  let authoringRecovery: any = null;
  for (const record of entry.preimages.filter((p: any) => p.path.endsWith('.pages.json'))) {
    const expected = priorApplication?.manifests?.find((p: any) => p.path === record.path)?.sha256 ?? record.sha256;
    const current = readFileSync(join(repo, record.path));
    if (hash(current) === expected) continue;
    const recovered = !priorApplication && recovery?.run === run && recovery?.number === number
      && recovery.records?.find((p: any) => p.path === record.path && p.beforeSha256 === record.sha256 && p.afterSha256 === hash(current));
    const before = readFileSync(join(repo, record.archive));
    if (recovered && hash(before) === record.sha256 && sameItemsAndPageFields(before, current)) continue;
    authoringRecovery ??= loadAppendManifestAuthoringRecovery(repo, run, entry);
    if (authoringRecovery?.manifests.get(record.path) !== hash(current))
      fail(`prior manifest changed before append application: ${record.path}`);
  }
  for (const batch of entry.batches) {
    const pages = read(join(repo, 'research', `${run}-batch-${batch}.pages.json`));
    if (pages.some((p: any) => !entry.newPages.includes(p.id))) fail('appended manifest identity changed');
  }
  // Use the existing native SYNC path over the whole frontier. Old page orders
  // may legitimately move; source inventories and durable batch identities may not.
  const paths = readdirSync(join(repo, 'research')).filter(n => new RegExp(`^${run}-batch-[1-9]\\d*\\.pages\\.json$`).test(n))
    .map(n => join(repo, 'research', n));
  const before = new Map(paths.map(p => [p, readFileSync(p)]));
  const inventory = (bytes: Buffer) => JSON.parse(bytes.toString()).map((p: any) => ({ id: p.id, kind: p.kind, items: p.items }));
  try {
    syncManifestsPreservingItems(repo, run);
    for (const [path, bytes] of before) {
      if (JSON.stringify(inventory(bytes)) !== JSON.stringify(inventory(readFileSync(path)))) fail(`SYNC changed an inventory: ${path}`);
    }
  } catch (error) {
    for (const [path, bytes] of before) writeFileSync(path, bytes);
    throw error;
  }
  const report = readFileSync(join(repo, entry.report), 'utf8');
  if (report !== actualReport) fail('append review changed during application');
  const mergeBinding = appendMergeBinding(repo, entry, original, mergeBase);
  writeFileSync(join(repo, 'research', `${run}-alpha-step1-drift.md`), appendReportText(entry, mergeBase, report));
  const receipt = { run, number, reportSha256: hash(report), originalReportSha256: hash(mergeBase), ...mergeBinding, mergedReportSha256: hash(readFileSync(join(repo, 'research', `${run}-alpha-step1-drift.md`))),
    manifests: paths.map(path => ({ path: relative(repo, path), sha256: hash(readFileSync(path)) })), inventoriesPreserved: true,
    ...(refresh ? { refresh } : {}),
    ...(priorApplication?.reportRebase ? { reportRebase: priorApplication.reportRebase } : {}),
    ...(existsSync(join(repo, appendOwnerResolutionPath(entry)))
      ? { ownerResolutionSha256: hash(readFileSync(join(repo, appendOwnerResolutionPath(entry)))) } : {}),
    ...(recovery ? { itemOrderRecoverySha256: hash(readFileSync(recoveryPath)) } : {}),
    ...((authoringRecovery?.sha256 ?? priorApplication?.ownerManifestRecoverySha256)
      ? { ownerManifestRecoverySha256: authoringRecovery?.sha256 ?? priorApplication.ownerManifestRecoverySha256 } : {}) };
  writeFileSync(receiptPath, JSON.stringify(receipt, null, 2) + '\n');
  return receipt;
}

/** Owner-invoked mechanical recovery of an actual legacy stale-base merge.
 * No state/result/gate stamps or inventories are changed. */
export function rebaseAppliedAppendReport(repo: string, run: string, number: number, stateDir: string,
  reason: string, scan = scanProcesses): any {
  if (!reason?.trim()) fail('an explicit owner report-rebase reason is required');
  inactive(repo, run, stateDir, scan);
  const entry = checkAppendReview(repo, run, number), archive = join(repo, entry.archive);
  const receiptPath = join(archive, 'review-applied.json'); regular(receiptPath);
  const oldReceiptRaw = readFileSync(receiptPath), old = JSON.parse(oldReceiptRaw.toString());
  const reportPath = join(repo, 'research', `${run}-alpha-step1-drift.md`), oldReport = readFileSync(reportPath, 'utf8');
  const added = readFileSync(join(repo, entry.report), 'utf8');
  const captured = readNativeAppendReportBase(repo, run, entry, { originalReportSha256: hash(readFileSync(join(repo, entry.originalReport))) });
  const base = predecessorAppendReport(repo, run, number), merged = appendReportText(entry, base, added);
  if (old.reportRebase && old.originalReportSha256 === hash(base) && old.mergedReportSha256 === hash(merged) && oldReport === merged) {
    readNativeAppendReportBase(repo, run, entry, old); return old;
  }
  if (old.run !== run || old.number !== number || old.inventoriesPreserved !== true || old.reportSha256 !== hash(added)
    || old.originalReportSha256 !== hash(captured) || old.mergedReportSha256 !== hash(oldReport)
    || oldReport !== appendReportText(entry, captured, added) || base === captured)
    fail('not an exact legacy captured-base append merge');
  const resultPath = `research/${run}-dispatch/tool-drift-append-apply-${number}.result.json`;
  const resultRaw = readFileSync(join(repo, resultPath)), result = JSON.parse(resultRaw.toString());
  const state = read(join(stateDir, 'state.json')), label = `drift-append-apply-${number}`, stage = `1-append-apply-${number}`;
  const dispatch = state.dispatches?.[`${stage}:${label}`];
  if (result.run !== run || result.role !== 'tool' || result.label !== label || result.ok !== true || result.written_by !== 'autopilot'
    || JSON.stringify(result.covers) !== JSON.stringify([`append-${number}`]) || !Number.isFinite(Date.parse(result.ended_at))
    || dispatch?.role !== 'tool' || dispatch.lastExitOk !== true || !dispatch.endedAt
    || Date.parse(dispatch.startedAt) > Date.parse(result.ended_at) || Date.parse(dispatch.endedAt) < Date.parse(result.ended_at))
    fail('report rebase requires the actual completed native application result');
  const historical = `${entry.archive}/report-rebase-preimages/${hash(oldReceiptRaw)}-${hash(oldReport)}`;
  mkdirSync(join(repo, historical), { recursive: true });
  const priorReceipt = `${historical}/review-applied.json`, priorMergedReport = `${historical}/merged-report.md`;
  preserveExact(join(repo, priorReceipt), oldReceiptRaw); preserveExact(join(repo, priorMergedReport), oldReport);
  const archivedResult = `${historical}/native-application.result.json`; preserveExact(join(repo, archivedResult), resultRaw);
  const mergeBinding = appendMergeBinding(repo, entry, captured, base);
  const successor = { ...old, originalReportSha256: hash(base), ...mergeBinding, mergedReportSha256: hash(merged),
    reportRebase: { at: new Date().toISOString(), reason, action: 'authenticated-predecessor-report-rebase',
      priorReceipt: { path: priorReceipt, sha256: hash(oldReceiptRaw) }, priorMergedReport: { path: priorMergedReport, sha256: hash(oldReport) },
      nativeApplicationResult: { path: archivedResult, sha256: hash(resultRaw) }, nativeApplicationResultOriginalPath: resultPath,
      inventoriesUnchangedByRecovery: true, noNewNativeExecutionOrCoverage: true } };
  const raw = JSON.stringify(successor, null, 2) + '\n';
  inactive(repo, run, stateDir, scan);
  if (!readFileSync(receiptPath).equals(oldReceiptRaw) || readFileSync(reportPath, 'utf8') !== oldReport
    || readFileSync(join(repo, entry.report), 'utf8') !== added || predecessorAppendReport(repo, run, number) !== base
    || !readFileSync(join(repo, resultPath)).equals(resultRaw)) fail('report-rebase input changed before application');
  const reportTmp = reportPath + `.rebase-${process.pid}.tmp`, receiptTmp = receiptPath + `.rebase-${process.pid}.tmp`;
  try {
    writeFileSync(reportTmp, merged, { flag: 'wx' }); writeFileSync(receiptTmp, raw, { flag: 'wx' });
    renameSync(reportTmp, reportPath); renameSync(receiptTmp, receiptPath);
  } catch (error) {
    if (existsSync(reportPath) && readFileSync(reportPath, 'utf8') === merged) writeFileSync(reportPath, oldReport);
    if (existsSync(receiptPath) && readFileSync(receiptPath, 'utf8') === raw) writeFileSync(receiptPath, oldReceiptRaw);
    throw error;
  } finally { rmSync(reportTmp, { force: true }); rmSync(receiptTmp, { force: true }); }
  return successor;
}

/** Insert only after the unchanged completed drift prefix; no state stamp is cleared. */
export function appendStages(stages: Stage[], ctx: Pick<Ctx, 'repo' | 'run'>): Stage[] {
  const entries = appendRegistry(ctx.repo, ctx.run).appends;
  if (!entries.length) return stages;
  const index = stages.findIndex(s => s.id === '1-scaffold'), original = stages.find(s => s.id === '1-drift');
  const applied = stages.findIndex(s => s.id === '1-drift-apply');
  if (index < 0 || !original || applied < 0 || applied >= index
    || stages.slice(applied + 1, index).some(s => s.id !== '1-baseline'))
    fail('unsupported native Step-1 stage table');
  const inserted: Stage[] = entries.flatMap((e: any) => {
    const label = `drift-review-append-${e.number}`, unit = `append-${e.number}`;
    const recertify = () => ({ id: 'append-frontier-metadata-recertify', argv: ['node', 'tools/tsx-run.mjs', 'tools/autopilot/bin/frontier-append.mts', 'recertify', '--run', ctx.run, '--generation', String(e.number)], liveness: { pattern: 'APPEND_RECERT (\\d+) item', min: 1 } });
    return [{ ...original, id: `1-append-drift-${e.number}`, label: `Step 1 — appended frontier drift ${e.number}`,
      units: () => [unit], pattern: new RegExp(`^alpha-(?:alpha-)?${label}(?:-refresh-[a-zA-Z0-9-]{1,80})?\\.result\\.json$`), labelFor: () => label,
      artifacts: () => e.report,
      refreshPlan: (context: any, requestedUnit: string, request: any) => {
        if (requestedUnit !== unit) fail('append refresh unit differs from generation');
        const freshLabel = `${label}-refresh-${request.id}`;
        const task = `${e.archive}/refresh-${request.id}.task.md`;
        const text = readFileSync(join(context.repo, e.task), 'utf8')
          + `\n\nNative append-review refresh ${request.id}: ${request.reason}\n`
          + `This request supersedes the earlier review for this generation only. Write the actual fresh review to ${e.report}. Preserve the previous result and review archives.\n`;
        writeFileSync(join(context.repo, task), text, { flag: 'wx' });
        const frozen = { run: context.run, stage: `1-append-drift-${e.number}`, unit, id: request.id,
          label: freshLabel, requestedAt: request.requestedAt, task, taskSha256: hash(text),
          stateFile: resolve(context.repo, context.config.stateDir, 'state.json'),
          dispatchDir: resolve(context.repo, context.dispatchDir) };
        writeFileSync(join(context.repo, e.archive, `refresh-${request.id}.request.json`), JSON.stringify(frozen, null, 2) + '\n', { flag: 'wx' });
        writeFileSync(join(context.repo, e.archive, 'current-review-refresh.json'), JSON.stringify(frozen, null, 2) + '\n');
        return { role: 'alpha', label: freshLabel, job: 'verification', covers: [unit],
          brief: 'briefs/alpha-drift.md', task: [task], timeout: 7200 };
      },
      plan: (_context: any, pending: string[]) => pending.includes(unit)
        ? [{ role: 'alpha', label, job: 'verification', covers: [unit], brief: 'briefs/alpha-drift.md', task: [e.task], timeout: 7200 }] : [],
      gates: () => [{ id: 'append-refresh-receipt', argv: ['node', 'tools/tsx-run.mjs', 'tools/autopilot/bin/frontier-append.mts', 'seal-refresh', '--run', ctx.run, '--generation', String(e.number)], liveness: { pattern: 'APPEND_REFRESH (\\d+) generation', min: 1 } }, recertify(), { id: `append-review-${e.number}`, argv: ['node', 'tools/tsx-run.mjs', 'tools/autopilot/bin/frontier-append.mts', 'check-review', '--run', ctx.run, '--generation', String(e.number)], liveness: { pattern: 'APPEND_REVIEW (\\d+) page', min: e.pairs.length } },
        { id: 'append-review-plan', argv: ['node', 'tools/validate-plan.mjs', 'research/plan-spec.json', '--pages-file', `${e.archive}/new-pages.json`] },
        { id: 'append-planned-items', argv: ['node', 'tools/validate-plan.mjs', 'research/plan-spec.json', '--pages-file', `${e.archive}/new-pages.json`] }],
    }, { id: `1-append-apply-${e.number}`, label: `materialize appended drift ${e.number}`, units: () => [unit],
      pattern: new RegExp(`^tool-(?:tool-)?drift-append-apply-${e.number}\\.result\\.json$`), concurrency: 1,
      plan: () => [{ role: 'tool', label: `drift-append-apply-${e.number}`, job: 'bookkeeping-mechanical', covers: [unit], argv: ['node', 'tools/tsx-run.mjs', 'tools/autopilot/bin/frontier-append.mts', 'apply', '--run', ctx.run, '--generation', String(e.number)], timeout: 600 }],
      gates: () => [recertify(), { id: 'append-drift-scope', argv: ['node', 'tools/drift-review-check.mjs', '--run', ctx.run] }, { id: 'append-plan', argv: ['node', 'tools/validate-plan.mjs', 'research/plan-spec.json', '--pages-file', `${e.archive}/new-pages.json`] },
        { id: 'append-planned-items', argv: ['node', 'tools/validate-plan.mjs', 'research/plan-spec.json', '--pages-file', `${e.archive}/new-pages.json`] },
        { id: 'append-ledger', argv: ['node', 'tools/manifest-integrity.mjs', '--run', ctx.run] }], onHold: original.onHold,
    }];
  });
  return [...stages.slice(0, index), ...inserted, ...stages.slice(index)];
}
