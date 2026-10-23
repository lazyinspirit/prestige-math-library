// Explicit owner dispositions supplement immutable native drift observations.
import { existsSync, readFileSync, readdirSync, realpathSync } from 'node:fs';
import { resolve, join, relative, isAbsolute } from 'node:path';
import { createHash } from 'node:crypto';
import { pathToFileURL } from 'node:url';
import { appendBaseContext } from './frontier-append-evidence.mjs';

export const driftHash = bytes => createHash('sha256').update(bytes).digest('hex');
const readJSON = file => JSON.parse(readFileSync(file, 'utf8'));
const fail = message => { throw Error(`drift-owner-resolution: ${message}`); };
export const driftResolutionPath = run => `research/${run}-drift-owner-resolutions.json`;
export function driftReportSections(text) {
  const headings = [...text.matchAll(/^###\s+`?([a-z0-9][a-z0-9-]*)`?\s*$/gm)];
  return headings.map((heading, index) => {
    const raw = text.slice(heading.index, headings[index + 1]?.index ?? text.length);
    const verdicts = [...raw.matchAll(/^VERDICT:\s*([a-z-]+)\b[ —-]*(.*)$/gm)];
    return { page: heading[1], sha256: driftHash(raw), verdicts: verdicts.map(row => row[1]) };
  });
}
function frontier(root, run) {
  const ledger = readJSON(join(root, `research/${run}-scope-ledger.json`));
  if (ledger.run !== run || !Array.isArray(ledger.pages) || !ledger.pages.length) fail('invalid scope ledger');
  const normalize = rows => rows.map(({ id, kind, batch }) => ({ id, kind, batch: String(batch) })).sort((a, b) => a.id.localeCompare(b.id));
  const owed = normalize(ledger.pages);
  if (owed.some(row => !['A', 'B'].includes(row.kind) || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(row.id ?? '') || !/^\d+$/.test(row.batch)) || new Set(owed.map(row => row.id)).size !== owed.length) fail('invalid frontier identity');
  const manifests = readdirSync(join(root, 'research')).filter(name => new RegExp(`^${run}-batch-\\d+\\.pages\\.json$`).test(name));
  const current = normalize(manifests.flatMap(name => {
    const rows = readJSON(join(root, 'research', name));
    if (!Array.isArray(rows) || !rows.length) fail(`invalid manifest ${name}`);
    return rows.map(row => ({ ...row, batch: name.match(/-batch-(\d+)\.pages\.json$/)[1] }));
  }));
  if (JSON.stringify(current) !== JSON.stringify(owed)) fail('current manifests differ from owed frontier');
  return owed;
}
function safePath(root, path) {
  if (typeof path !== 'string' || isAbsolute(path) || path.includes('\\') || path.split('/').includes('..') || !/^(research|items|library)\//.test(path)) fail(`invalid evidence path ${path}`);
  const absolute = resolve(root, path);
  if (!existsSync(absolute) || relative(realpathSync(root), realpathSync(absolute)).startsWith('..')) fail(`missing or outside evidence ${path}`);
  return absolute;
}
function nativeResult(root, run, reference) {
  const match = new RegExp(`^research/${run}-dispatch/alpha-drift-review\\.attempt-(\\d+)\\.result\\.json$`).exec(reference.path ?? '');
  if (!match) fail('native_result must name an immutable drift attempt result');
  const row = readJSON(safePath(root, reference.path));
  if (row.run !== run || row.ok !== true || row.role !== 'alpha' || row.label !== 'drift-review' || row.attempt !== Number(match[1]) || !Array.isArray(row.covers) || row.covers.length !== 1 || row.covers[0] !== 'drift') fail('native result does not cover this successful drift review');
  const current = `research/${run}-dispatch/alpha-drift-review.result.json`;
  if (driftHash(readFileSync(safePath(root, current))) !== reference.sha256) fail('current native result differs from bound attempt');
  return current;
}
export function driftOwnerResolutionTemplate(root, run) {
  if (!/^[a-zA-Z0-9_-]+$/.test(run ?? '')) fail('invalid run');
  const reportPath = `research/${run}-alpha-step1-drift.md`;
  const resultPath = `research/${run}-dispatch/alpha-drift-review.result.json`;
  const result = readJSON(safePath(root, resultPath));
  const attemptPath = `research/${run}-dispatch/alpha-drift-review.attempt-${result.attempt}.result.json`;
  const report = { path: reportPath, sha256: driftHash(readFileSync(safePath(root, reportPath))) };
  const native_result = { path: attemptPath, sha256: driftHash(readFileSync(safePath(root, attemptPath))) };
  nativeResult(root, run, native_result);
  const spec = readJSON(join(root, 'research/plan-spec.json'));
  return { version: 1, run, authorizing_owner: '/root', report, native_result, frontier: frontier(root, run),
    plan_sha256: driftHash(readFileSync(join(root, 'research/plan-spec.json'))),
    inputs: { [report.path]: report.sha256, [native_result.path]: native_result.sha256, [resultPath]: native_result.sha256 },
    resolutions: driftReportSections(readFileSync(join(root, reportPath), 'utf8')).filter(row => row.verdicts.includes('drift-blocked')).map(row => ({
      page: row.page, section_sha256: row.sha256, decision: 'pending', reason: '', evidence: [],
      requires: spec.pages.find(page => page.id === row.page)?.requires ?? [],
    })) };
}
function checkOwnerResolutions(root, run, historical) {
  if (!/^[a-zA-Z0-9_-]+$/.test(run ?? '')) fail('invalid run');
  const path = driftResolutionPath(run);
  if (!existsSync(join(root, path))) return { resolved: new Set(), inputs: [path] };
  const receipt = readJSON(join(root, path));
  if (receipt.version !== 1 || receipt.run !== run || receipt.authorizing_owner !== '/root') fail('invalid owner or run');
  const owed = historical?.frontier ?? frontier(root, run);
  if (JSON.stringify(receipt.frontier) !== JSON.stringify(owed)) fail('scope changed since owner resolution');
  const specPath = historical?.specPath ?? join(root, 'research/plan-spec.json');
  if (driftHash(readFileSync(specPath)) !== receipt.plan_sha256) fail('stale canonical plan');
  const reportPath = `research/${run}-alpha-step1-drift.md`;
  if (receipt.report?.path !== reportPath) fail('wrong native report');
  if (!receipt.inputs || typeof receipt.inputs !== 'object' || Array.isArray(receipt.inputs)) fail('missing evidence inputs');
  const inputs = [path];
  for (const [input, sha256] of Object.entries(receipt.inputs)) {
    const actual = historical?.inputPaths?.[input] ?? input;
    if (!/^[a-f0-9]{64}$/.test(sha256) || driftHash(readFileSync(safePath(root, actual))) !== sha256) fail(`stale evidence ${input}`);
    inputs.push(actual);
  }
  for (const reference of [receipt.report, receipt.native_result]) if (!reference || receipt.inputs[reference.path] !== reference.sha256) fail('unbound native report/result');
  const currentResult = nativeResult(root, run, receipt.native_result);
  if (receipt.inputs[currentResult] !== receipt.native_result.sha256) fail('unbound current native result');
  const sections = driftReportSections(readFileSync(join(root, reportPath), 'utf8'));
  const spec = readJSON(specPath), resolved = new Set();
  if (!Array.isArray(receipt.resolutions) || !receipt.resolutions.length) fail('empty resolutions');
  for (const row of receipt.resolutions) {
    if (!row || typeof row !== 'object' || Array.isArray(row)) fail('invalid resolution row');
    if (resolved.has(row.page)) fail(`duplicate resolution ${row.page}`);
    const matches = sections.filter(section => section.page === row.page);
    if (!owed.some(page => page.kind === 'A' && page.id === row.page) || matches.length !== 1 || matches[0].verdicts.length !== 1 || matches[0].verdicts[0] !== 'drift-blocked') fail(`unknown or nonblocked subject ${row.page}`);
    if (matches[0].sha256 !== row.section_sha256) fail(`stale blocked section ${row.page}`);
    if (row.decision !== 'resolved' || typeof row.reason !== 'string' || row.reason.trim().length < 30 || !Array.isArray(row.evidence) || !row.evidence.length || new Set(row.evidence).size !== row.evidence.length || row.evidence.some(input => !Object.hasOwn(receipt.inputs, input) || [reportPath, receipt.native_result.path, currentResult].includes(input))) fail(`missing substantive owner disposition ${row.page}`);
    // Historical evidence may bind authentic earlier bytes. Only this explicit
    // current obligation map imposes additional live evidence requirements.
    if (row.current_inputs !== undefined) {
      if (!row.current_inputs || typeof row.current_inputs !== 'object' || Array.isArray(row.current_inputs)) fail(`invalid current inputs ${row.page}`);
      for (const [input, sha256] of Object.entries(row.current_inputs)) {
        if (!/^[a-f0-9]{64}$/.test(sha256) || receipt.inputs[input] !== sha256) fail(`unbound current evidence ${input}`);
        if (!historical?.historicalCurrentInputs?.includes(input)) {
          const live = historical?.preparing && input === 'research/plan-spec.json' ? historical.inputPaths[input] : input;
          if (driftHash(readFileSync(safePath(root,live))) !== sha256) fail(`stale current evidence ${input}`);
          inputs.push(live);
        }
      }
    }
    const pages = spec.pages.filter(page => page.id === row.page);
    if (pages.length !== 1 || pages[0].kind !== 'A' || !Array.isArray(row.requires) || JSON.stringify(row.requires) !== JSON.stringify(pages[0].requires ?? [])) fail(`changed resolved prerequisites ${row.page}`);
    for (const id of row.requires) {
      const suppliers = spec.pages.filter(page => page.id === id);
      if (suppliers.length !== 1 || (id !== (pages[0].companion ?? `${row.page}-examples`) && !(Number(suppliers[0].order) < Number(pages[0].order)))) fail(`missing or forward resolved prerequisite ${row.page} -> ${id}`);
    }
    resolved.add(row.page);
  }
  return { resolved, inputs };
}
export function validateDriftOwnerResolutions(root, run) {
  return checkOwnerResolutions(root,run,appendBaseContext(root,run));
}
// Prepare must validate actual current old-frontier evidence, never archive a stale overlay.
// The sole projection is the explicitly archived prior plan; its only delta is the new rows.
export function validateDriftOwnerResolutionsBeforeAppend(root,run,priorPlan,newPages) {
  const specPath=safePath(root,priorPlan),prior=readJSON(specPath),current=readJSON(join(root,'research/plan-spec.json'));
  if(JSON.stringify(prior)!==JSON.stringify({...current,pages:current.pages.filter(p=>!newPages.includes(p.id))}))fail('unrelated append plan change');
  return checkOwnerResolutions(root,run,{frontier:frontier(root,run),specPath,preparing:true,inputPaths:{'research/plan-spec.json':priorPlan}});
}
if (process.argv[1] && import.meta.url === pathToFileURL(realpathSync(resolve(process.argv[1]))).href) {
  try {
    const args = process.argv.slice(2), run = args[args.indexOf('--run') + 1];
    if (args[0] !== 'template') fail('usage: drift-owner-resolutions.mjs template --run RUN');
    console.log(JSON.stringify(driftOwnerResolutionTemplate(process.cwd(), run), null, 2));
  } catch (error) { console.error(error.message); process.exitCode = 1; }
}
