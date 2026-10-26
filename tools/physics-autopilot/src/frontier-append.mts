// Physics-only append transaction and real supplemental Alpha stages. Never writes state.json.
import { existsSync, readFileSync, readdirSync, writeFileSync, mkdirSync, rmSync, lstatSync, readlinkSync, realpathSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';
import { packBatches, writeManifests, loadPlan } from '../../physics-support/plan-manifests.mjs';
import { appendRegistry, appendReview, appendHash as hash, appendJSON as read, appendPath, boundAppendFile } from '../../physics-support/frontier-append-evidence.mjs';
import { validateDriftOwnerResolutionsBeforeAppend } from '../../physics-support/drift-owner-resolutions.mjs';
import { authenticateAppendHold } from './step1-hold-evidence.mjs';
import { MAX_RUN_PAIRS } from './capacity.mjs';
import { unknownStep1DispatchRetired } from './unknown-step1-dispatch.mts';
import { acquireControllerLock } from './controller-lock.mts';
import { PBW_PATH, pbwRoleRepairPath, pbwRepairBytes, preparePbwRoleAuthorization, authenticatePbwRoleSuccessor } from './append-pbw-role-repair.mjs';
import type { Stage } from './types.mts';
export { appendRegistry };
const fail = (why: string): never => { throw Error(`physics plan --append: ${why}`); };
const safe = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const bytes = (p: string) => readFileSync(p);
const regular = (p: string) => { if (!lstatSync(p).isFile() || lstatSync(p).isSymbolicLink())
    fail(`not regular: ${p}`); };
const alive = (pid: number) => { try {
    process.kill(pid, 0);
    return true;
}
catch (e: any) {
    return e.code === 'EPERM';
} };
export function assertNoAppendTransaction(stateDir: string) {
    if (existsSync(join(stateDir, 'frontier-append.lock')))
        fail('active/interrupted append transaction; inspect archive before restart');
}
export function scanAppendProcesses({ repo, run, stateDir }: any, proc = '/proc') {
    const found: any = { controller: [], preflight: [], writer: [] };
    for (const pid of readdirSync(proc).filter(n => /^\d+$/.test(n) && Number(n) !== process.pid)) {
        try {
            const dir = join(proc, pid), status = readFileSync(join(dir, 'status'), 'utf8');
            if (Number(/^Uid:\s+(\d+)/m.exec(status)?.[1]) !== process.getuid() || /^State:\s+Z/m.test(status))
                continue;
            const args = readFileSync(join(dir, 'cmdline'), 'utf8').split('\0').filter(Boolean);
            if (!/^(?:node|nodejs|codex|claude)$/.test(args[0]?.split('/').pop()))
                continue;
            const cwd = readlinkSync(join(dir, 'cwd'));
            const option = (key: string) => { const i = args.indexOf('--' + key); return i < 0 ? null : args[i + 1]; };
            if (option('run') === run && args.some(a => a.endsWith('physics-autopilot/bin/autopilot.mts'))) {
                const kind = args.includes('start') ? 'controller' : args.includes('doctor') ? 'preflight' : null;
                if (kind && (option('repo') ? realpathSync(resolve(cwd, option('repo')!)) === repo : cwd === repo))
                    found[kind].push(Number(pid));
            }
            else if (cwd === repo) {
                const env = /^(?:codex|claude)$/.test(args[0]?.split('/').pop()) ? readFileSync(join(dir, 'environ'), 'utf8') : '';
                const home = env.split('\0').find(v => v.startsWith('CODEX_HOME='))?.slice(11);
                if (option('run') === run || args.some(a => a.startsWith(`research/${run}-`) || a.startsWith(join(repo, 'research', run + '-')))
                    || (home && resolve(home).startsWith(join(repo, '.physics-autopilot', run) + '/')) || args.includes(stateDir))
                    found.writer.push(Number(pid));
            }
        }
        catch (e: any) {
            if (!['ENOENT', 'ESRCH'].includes(e.code))
                fail('process scan unavailable');
        }
    }
    return found;
}
function inactive(repo: string, run: string, stateDir: string, scan: any, expectedStage = '1-scaffold', ownController = false) {
    if (!resolve(stateDir).startsWith(resolve(repo) + '/'))
        fail('state directory must be inside physics workspace');
    regular(join(stateDir, 'state.json'));
    const state = read(join(stateDir, 'state.json'));
    if (state.run !== run || state.version !== 1 || !state.paused || state.finishedAt || state.stage !== expectedStage)
        fail('exact unfinished paused Step 1 required');
    for (const id of ['1-drift', '1-drift-apply'])
        if (!state.stages?.[id]?.doneAt || !state.stages[id].gatesPassedAt)
            fail('original native drift prefix incomplete');
    if (state.stages?.['1-scaffold']?.doneAt || state.stages?.['1-scaffold']?.gatesPassedAt
        || Object.entries<any>(state.stages ?? {}).some(([id, s]) => !id.startsWith('1-') && (s.enteredAt || s.doneAt)))
        fail('Step 1 closed or later stage entered');
    if (Object.entries<any>(state.dispatches ?? {}).some(([key, d]) => d.startedAt && !d.endedAt && !unknownStep1DispatchRetired(repo, run, stateDir, key, d)))
        fail('dispatches not drained');
    // Guard both observed native lock names; do not rely on process scanning alone.
    for (const name of ['.controller.lock', 'controller.lock']) {
        if (existsSync(join(stateDir, name))) {
            const lock = read(join(stateDir, name));
            if (name === 'controller.lock' && ownController && lock.pid === process.pid) continue;
            if (lock.pid && alive(lock.pid))
                fail(`live controller lock: ${name}`);
        }
    }
    const live = scan({ repo, run, stateDir });
    if (live.controller.length || live.preflight.length || live.writer.length)
        fail('controller/preflight/writers must be stopped and drained');
    return state;
}
function manifestFiles(repo: string, run: string) {
    return readdirSync(join(repo, 'research')).filter(n => new RegExp(`^${run}-batch-[1-9]\\d*\\.pages\\.json$`).test(n))
        .sort((a, b) => Number(a.match(/-batch-(\d+)/)![1]) - Number(b.match(/-batch-(\d+)/)![1]));
}
function noOldPlanChanges(root: string, entry: any) {
    const before = read(boundAppendFile(root, entry.basePlan)), current = loadPlan(root);
    for (const row of entry.newDeclarations ?? []) {
        const matches = current.pages.filter((p: any) => p.id === row.id);
        const strip = ({ order, requires, ...rest }: any) => rest;
        if (matches.length !== 1 || JSON.stringify(strip(row)) !== JSON.stringify(strip(matches[0])))
            fail('new declarations changed beyond prerequisite/order corrections');
    }
    const filtered = { ...current, pages: current.pages.filter((p: any) => !entry.newPages.includes(p.id)) };
    if (JSON.stringify(before) !== JSON.stringify(filtered))
        fail('canonical plan changed outside appended pages; no global sync is authorized');
}
function oldManifestsUnchanged(root: string, entry: any) {
    const roleSuccessor = entry.number === 1 && existsSync(join(root, pbwRoleRepairPath(entry.run)))
        ? authenticatePbwRoleSuccessor(root, entry, { path: PBW_PATH, sha256: entry.protectedItems.find((r: any) => r.path === PBW_PATH)?.sha256 }) : false;
    for (const ref of [...entry.protectedItems ?? [], ...entry.protectedResearch ?? [], ...entry.protectedNative ?? [], ...entry.priorReviewInputs ?? []]) {
        if (ref.sha256 === null) {
            if (existsSync(join(root,ref.path))) fail(`previously absent review input appeared: ${ref.path}`);
            continue;
        }
        if (ref.archive)
            boundAppendFile(root, ref.archive);
        if (hash(bytes(join(root, ref.path))) !== ref.sha256) {
            if (ref.path === `research/${entry.run}-step1-blockers.json`) authenticateAppendHold(root, entry, ref);
            else if (!(roleSuccessor && ref.path === PBW_PATH && authenticatePbwRoleSuccessor(root, entry, ref))) fail(`prior item changed: ${ref.path}`);
        }
    }
    for (const row of entry.oldManifests) {
        boundAppendFile(root, row.archive);
        if (hash(bytes(join(root, row.path))) !== row.sha256)
            fail(`prior manifest changed: ${row.path}`);
    }
}
const invokeDefault = (repo: string) => (args: string[]) => {
    const r = spawnSync(process.execPath, args, { cwd: repo, encoding: 'utf8', maxBuffer: 32 * 1024 * 1024, env: { ...process.env, PHYSICS_REPO: repo } });
    if (r.status !== 0)
        fail(`${args[0]}: ${r.stderr || r.stdout}`);
};
export function appendFrontier({ repo, run, stateDir, pairs, priorPlan, sourceEvidence, baseDispositionReview, evidence, buildability, scan = scanAppendProcesses, invoke = invokeDefault(repo), now = () => new Date() }: any) {
    repo = realpathSync(repo);
    stateDir = realpathSync(stateDir);
    if (!safe.test(run) || !Array.isArray(pairs) || !pairs.length || pairs.some((p: string) => !safe.test(p)) || new Set(pairs).size !== pairs.length)
        fail('safe unique explicit pairs required');
    assertNoAppendTransaction(stateDir);
    const initialState = inactive(repo, run, stateDir, scan);
    const names = manifestFiles(repo, run), old = names.map(n => ({ path: `research/${n}`, bytes: bytes(join(repo, 'research', n)), pages: read(join(repo, 'research', n)) }));
    if (!old.length || names.some((n, i) => !n.endsWith(`-batch-${i + 1}.pages.json`)) || old.some(m => !Array.isArray(m.pages) || m.pages.length !== 2))
        fail('contiguous existing one-pair manifests required');
    const priorPairs = old.flatMap(m => m.pages.filter((p: any) => p.kind === 'A').map((p: any) => p.id));
    const oldIds = old.flatMap(m => m.pages.map((p: any) => p.id));
    if (priorPairs.length !== old.length || new Set(oldIds).size !== oldIds.length || priorPairs.length + pairs.length > MAX_RUN_PAIRS)
        fail('invalid existing identities or pair cap');
    const registry = appendRegistry(repo, run), number = registry.appends.length + 1;
    if (registry.appends.some((e: any) => !existsSync(join(repo, e.archive, 'review-applied.json'))))
        fail('prior supplemental review not applied');
    for (const e of registry.appends) for (const kind of ['drift','apply']) {
        const stage = initialState.stages?.[`1-append-${kind}-${e.number}`];
        if (!stage?.doneAt || !stage.gatesPassedAt) fail('prior supplemental native stages not closed');
    }
    const spec = loadPlan(repo), by = new Map(spec.pages.map((p: any) => [p.id, p])), newPages: string[] = [];
    for (const id of pairs) {
        const a: any = by.get(id), b: any = a && by.get(a.companion);
        if (spec.pages.filter((p: any) => p.id === id).length !== 1 || !a || a.kind !== 'A' || !b || b.kind !== 'B' || b.companion !== id || a.library !== 'mathematics' || b.library !== a.library || a.category !== b.category)
            fail(`invalid new reciprocal mathematical pair: ${id}`);
        newPages.push(a.id, b.id);
    }
    if (new Set(newPages).size !== newPages.length || newPages.some(p => oldIds.includes(p)))
        fail('append identities overlap');
    const declaredIds=new Set<string>();
    const oldItems=new Set(old.flatMap(m=>m.pages.flatMap((p:any)=>(p.items??[]).map((i:any)=>typeof i==='string'?i:i.id))));
    for(const page of spec.pages.filter((p:any)=>newPages.includes(p.id))){
        if(!Array.isArray(page.items)||!page.items.length)fail('nonempty new planned item declarations required');
        for(const item of page.items){
            if(!item||typeof item.id!=='string'||!safe.test(item.id)||!item.kind||item.domain!=='mathematics'
              ||typeof item.statement!=='string'||!item.statement.trim()||!Array.isArray(item.deps)
              ||item.deps.some((id:any)=>typeof id!=='string'||!safe.test(id))||declaredIds.has(item.id)||oldItems.has(item.id))fail('malformed or overlapping new planned declaration');
            declaredIds.add(item.id);
        }
    }

    const priorPlanPath = appendPath(repo, priorPlan), priorSpec = read(priorPlanPath);
    if (JSON.stringify(priorSpec) !== JSON.stringify({ ...spec, pages: spec.pages.filter((p: any) => !newPages.includes(p.id)) }))
        fail('prior plan projection mismatch');
    if (!Array.isArray(sourceEvidence) || !sourceEvidence.length)
        fail('actual source/design evidence required');
    sourceEvidence.forEach((p: string) => appendPath(repo, p));
    const ledgerPath = `research/${run}-scope-ledger.json`;
    regular(join(repo, ledgerPath));
    regular(join(repo, `research/${run}-covers.json`));
    const ledger = read(join(repo, ledgerPath));
    const identity = (rows: any[]) => rows.map(({ id, kind, batch }: any) => ({ id, kind, batch: String(batch) })).sort((a, b) => a.id.localeCompare(b.id));
    if (ledger.run !== run || JSON.stringify(identity(ledger.pages)) !== JSON.stringify(identity(old.flatMap((m, i) => m.pages.map((p: any) => ({ ...p, batch: i + 1 }))))))
        fail('scope ledger differs from current ownership');
    const priorReview: any = validateDriftOwnerResolutionsBeforeAppend(repo, run, priorPlan, newPages);
    const ownerRel = `research/${run}-drift-owner-resolutions.json`;
    const baseOwner = existsSync(join(repo, ownerRel)) ? read(join(repo, ownerRel)) : null;
    const currentKeys = [...new Set(baseOwner?.resolutions.flatMap((r: any) => Object.keys(r.current_inputs ?? {})) ?? [])];
    const inheritedHistorical: string[] = registry.appends[0]?.baseResolution?.historicalCurrentInputs ?? [];
    let historicalCurrentInputs: string[] = [...inheritedHistorical];
    if (registry.appends.length && baseOwner && !baseDispositionReview)
        fail('fresh Root planning-disposition review of the current prior frontier required');
    const dispositionEvidence: any[] = [];
    const boundEvidencePaths = new Set<string>([...sourceEvidence, ...(baseDispositionReview ? [baseDispositionReview] : []), ...Object.keys(baseOwner?.inputs ?? {}), ...currentKeys]);
    if (baseDispositionReview) {
        const review = read(appendPath(repo, baseDispositionReview));
        if (!baseOwner || review.version !== 1 || review.run !== run || review.reviewer !== '/root' || review.kind !== 'historical-scoped-planning-dispositions'
            || review.owner_resolution_sha256 !== hash(bytes(join(repo, ownerRel))) || review.scope_ledger_sha256 !== hash(bytes(join(repo, ledgerPath)))
            || review.prior_plan_sha256 !== hash(bytes(priorPlanPath)) || typeof review.reason !== 'string' || review.reason.trim().length < 40
            || JSON.stringify([...(review.pages ?? [])].sort()) !== JSON.stringify(baseOwner.resolutions.map((r: any) => r.page).sort())
            || !Array.isArray(review.historical_current_inputs) || review.historical_current_inputs.some((p: string) => !p.startsWith('research/') || p === 'research/math-imports.json' || p.includes('-original-maintenance') || !currentKeys.includes(p))
            || !Array.isArray(review.evidence) || !review.evidence.length)
            fail('invalid actual Root planning-disposition review');
        if (registry.appends.length && (review.generation !== number
            || review.prior_frontier_sha256 !== hash(JSON.stringify(old.map(m => ({path:m.path,sha256:hash(m.bytes)}))))
            || review.prior_registry_sha256 !== hash(bytes(join(repo, `research/${run}-frontier-appends.json`)))
            || review.historical_current_inputs.some((p: string) => !inheritedHistorical.includes(p))))
            fail('current generation planning review must bind prior registry without reclassifying old live obligations');
        for (const ref of review.evidence) {
            boundAppendFile(repo, ref);
            dispositionEvidence.push(ref);
            boundEvidencePaths.add(ref.path);
        }
        historicalCurrentInputs = [...new Set([...inheritedHistorical, ...review.historical_current_inputs])];
    }
    if (currentKeys.includes('research/plan-spec.json') && !historicalCurrentInputs.includes('research/plan-spec.json'))
        fail('live plan obligation needs genuine Root historical planning-disposition review before extension');
    const findings = buildability(repo, [...priorPairs, ...pairs], { allowInRunDependencies: ledger.allow_in_run_dependencies === true }).filter((f: any) => newPages.includes(f.page));
    if (findings.length)
        fail(`new scope unbuildable: ${JSON.stringify(findings)}`);
    const groups = packBatches(repo, pairs, { cap: 1 }), first = old.length + 1, archive = `research/${run}-frontier-append-${number}`;
    if (existsSync(join(repo, archive)))
        fail('existing append archive; reconcile interrupted preparation');
    const report = `research/${run}-alpha-step1-drift.md`, result = `research/${run}-dispatch/alpha-drift-review.result.json`;
    const native = read(appendPath(repo, result));
    if (native.ok !== true || native.role !== 'alpha' || native.label !== 'drift-review' || native.run !== run || !Number.isInteger(native.attempt) || native.attempt < 1)
        fail('genuine original Alpha result required');
    const attempt = result.replace('.result.json', `.attempt-${native.attempt}.result.json`);
    if (hash(bytes(appendPath(repo, attempt))) !== hash(bytes(join(repo, result))))
        fail('original attempt differs');
    for (const n of readdirSync(join(repo, 'research')).filter(n => n.startsWith(run + '-')))
        if (lstatSync(join(repo, 'research', n)).isSymbolicLink())
            fail('symlinked run metadata');
    const lock = join(stateDir, 'frontier-append.lock');
    mkdirSync(lock);
    const before = new Map<string, Buffer>();
    const originalNames = readdirSync(join(repo, 'research')).filter(n => n.startsWith(run + '-') && lstatSync(join(repo, 'research', n)).isFile());
    try {
        inactive(repo, run, stateDir, scan);
        mkdirSync(join(repo, archive, 'preimages'), { recursive: true });
        for (const n of originalNames)
            before.set(`research/${n}`, bytes(join(repo, 'research', n)));
        const stateHash = hash(bytes(join(stateDir, 'state.json')));
        for (const [path, data] of before)
            writeFileSync(join(repo, archive, 'preimages', path.split('/').pop()!), data);
        writeFileSync(join(repo, archive, 'state.before.json'), bytes(join(stateDir, 'state.json')));
        const reference = (path: string) => ({ path, sha256: hash(bytes(join(repo, path))) });
        const archived = (path: string) => reference(`${archive}/preimages/${path.split('/').pop()}`);
        const basePlan = `${archive}/prior-plan.json`;
        writeFileSync(join(repo, basePlan), bytes(priorPlanPath));
        const oldManifests = old.map(m => ({ path: m.path, sha256: hash(m.bytes), archive: archived(m.path) }));
        const derivedNames = new Set([`${run}-scope-ledger.json`, `${run}-covers.json`, `${run}-alpha-groups.json`, `${run}-batch-dependency-levels.json`, `${run}-planning-notes.md`, `${run}-frontier-appends.json`]);
        // Only this exact read-only runtime observer may advance while Alpha reviews.
        // An explicitly bound source/owner input remains immutable even at this name.
        const observerPath = `research/${run}-supervision-checkpoint.json`;
        const protectedResearch = [...before].filter(([path]) => !derivedNames.has(path.split('/').pop()!) && (path !== observerPath || boundEvidencePaths.has(path))).map(([path, data]) => ({ path, sha256: hash(data), archive: archived(path) }));
        const dispatch = join(repo, 'research', `${run}-dispatch`);
        mkdirSync(join(repo, archive, 'dispatch'));
        const protectedNative = readdirSync(dispatch).filter(n => lstatSync(join(dispatch, n)).isFile()).map(n => { const path = `research/${run}-dispatch/${n}`, copy = `${archive}/dispatch/${n}`; writeFileSync(join(repo, copy), bytes(join(repo, path))); return { ...reference(path), archive: reference(copy) }; });
        const protectedItems = old.flatMap(m => m.pages.flatMap((p: any) => (p.items ?? []).map((i: any) => `items/${typeof i === 'string' ? i : i.id}.md`))).filter(path => existsSync(join(repo, path))).map(reference);
        mkdirSync(join(repo, archive, 'items'));
        for (const ref of protectedItems as any[]) {
            const copy = `${archive}/items/${ref.path.split('/').pop()}`;
            writeFileSync(join(repo, copy), bytes(join(repo, ref.path)));
            ref.archive = reference(copy);
        }
        const ownerPath = `research/${run}-drift-owner-resolutions.json`;
        if (!registry.appends.length && existsSync(join(repo, ownerPath)) && read(join(repo, ownerPath)).plan_sha256 !== hash(bytes(priorPlanPath)))
            fail('prior plan must authenticate original blocked-section owner resolution');
        let baseResolution = null;
        if (baseOwner && !registry.appends.length) {
            mkdirSync(join(repo, archive, 'owner-inputs'));
            const inputPaths: any = {};
            for (const [input, expected] of Object.entries(baseOwner.inputs)) {
                if (!/^(research|items|library)\//.test(input) || input.split('/').includes('..'))
                    fail('unsafe original owner evidence');
                const source = input === 'research/plan-spec.json' ? priorPlanPath : join(repo, input);
                regular(source);
                if (hash(bytes(source)) !== expected)
                    fail('stale original owner input during capture');
                const copy = `${archive}/owner-inputs/${expected}-${input.split('/').pop()}`;
                writeFileSync(join(repo, copy), bytes(source));
                inputPaths[input] = reference(copy);
            }
            baseResolution = { receipt: archived(ownerPath), inputPaths, historicalCurrentInputs, review: baseDispositionReview ? reference(baseDispositionReview) : null };
        }
        // Freeze actual prior review inputs only for this transaction; archive
        // their authenticated bytes without relabelling old reviews as new scope.
        const priorReviewInputs: any[] = [];
        if (priorReview.priorInputs?.length) {
            mkdirSync(join(repo, archive, 'prior-review-inputs'));
            for (const path of priorReview.priorInputs) {
                if (path === `research/${run}-frontier-appends.json`) continue;
                if (!/^(research|items|library)\//.test(path) || path.split('/').includes('..')) fail('unsafe prior review input');
                if (!existsSync(join(repo,path))) { priorReviewInputs.push({path,sha256:null}); continue; }
                if (realpathSync(join(repo,path)) !== resolve(repo,path)) fail('unsafe prior review input');
                regular(join(repo,path));
                const ref = reference(path), copy = `${archive}/prior-review-inputs/${ref.sha256}-${path.split('/').pop()}`;
                writeFileSync(join(repo,copy),bytes(join(repo,path)));
                priorReviewInputs.push({...ref,archive:reference(copy)});
            }
        }
        const fixedInputs = [reference(report), reference(result), reference(attempt), reference(basePlan), archived(ledgerPath), ...priorReviewInputs.filter(ref => ref.archive).map(ref => ref.archive), ...sourceEvidence.map(reference), ...dispositionEvidence, ...(baseDispositionReview ? [reference(baseDispositionReview)] : []), ...(existsSync(join(repo, ownerPath)) ? [reference(ownerPath)] : [])];
        const newOwnership = groups.flatMap((group: any, i: number) => group.flatMap((id: string) => [id, (by.get(id) as any).companion].map(page => ({ id: page, kind: page === id ? 'A' : 'B', batch: String(first + i) }))));
        const entry: any = { number, run, newOwnership, stateDir: relative(repo, stateDir), at: now().toISOString(), archive, pairs, newPages, batches: groups.map((_: any, i: number) => String(first + i)),
            priorPairs, oldManifests, baseResolution, priorReviewInputs, priorViewSha256: priorReview.priorViewSha256 ?? null, protectedItems, protectedResearch, protectedNative, newDeclarations: spec.pages.filter((p: any) => newPages.includes(p.id)), basePlan: reference(basePlan), baseLedger: archived(ledgerPath), fixedInputs,
            report: `research/${run}-alpha-step1-append-${number}-drift.md`, task: `research/${run}-alpha-step1-append-${number}-drift.task.md`,
            evidence: `research/${run}-append-${number}-drift-evidence.json`, stateBeforeSha256: stateHash };
        writeFileSync(join(repo, archive, 'prepared.json'), JSON.stringify(entry, null, 2) + '\n');
        writeFileSync(join(repo, archive, 'new-pages.json'), JSON.stringify(newPages, null, 2) + '\n');
        writeManifests(repo, run, groups, { startAt: first });
        invoke(['tools/physics-support/manifest-integrity.mjs', '--run', run, '--write-ledger', '--force', ...(ledger.allow_in_run_dependencies ? ['--allow-in-run-dependencies'] : [])]);
        const coversPath = `research/${run}-covers.json`, covers = read(join(repo, coversPath));
        for (const b of entry.batches)
            covers[`beta-batch-${b}`] = [b];
        writeFileSync(join(repo, coversPath), JSON.stringify(covers, null, 2) + '\n');
        invoke(['tools/physics-support/run-tasks.mjs', '--run', run]);
        // Preserve every task already quoted by native history; only new tasks are created.
        for (const [path, data] of before)
            if (path.endsWith('.task.md'))
                writeFileSync(join(repo, path), data);
        invoke(['tools/physics-support/batch-dependency-levels.mjs', 'write', '--run', run]);
        writeFileSync(join(repo, entry.evidence), JSON.stringify({ sourceEvidence, drift: evidence(repo, pairs) }, null, 2) + '\n');
        writeFileSync(join(repo, entry.task), [
            `# Supplemental native prerequisite review ${number}: ${run}`,
            `Follow briefs/alpha-drift.md. Review ONLY new A pages: ${pairs.join(', ')}.`,
            `Read ${entry.evidence}, ${sourceEvidence.join(', ')}, and research/${run}-owner-authoring-direction.md if present.`,
            `Read the exact new canonical item declarations and all source hypotheses. Review prerequisites, not proof acceptance.`,
            `Write ${entry.report}: exactly one ### PAGE_ID section with substantive evidence and one VERDICT: no-drift, drift-applied, drift-reordered or drift-blocked per assigned A page.`,
            `For drift-applied, name every added edge ON THE VERDICT LINE as target-page-id (order N). Use (order unspecified) only for authenticated published imports with no stored order. For drift-reordered, name each page (order OLD -> NEW) on that same line. Other non-no-drift verdicts also require substantive same-line detail.`,
            `Write only that report and prerequisite/order corrections to the ${newPages.length} new canonical plan rows. Preserve all supplied item declarations and their exact scope. Never edit original reports/results, prior manifests, source carriers, receipts or existing page metadata. No mint, rescope or scope narrowing.`,
            `Run node tools/tsx-run.mjs tools/physics-autopilot/bin/frontier-append.mts check-review --run ${run} --generation ${number}.`,
            `Run node tools/physics-support/validate-plan.mjs research/plan-spec.json --pages-file ${archive}/new-pages.json.`,
            `The engine applies only new batch metadata. All new pages/items still need full ordinary native authoring, reviews and gates.`, ''
        ].join('\n'));
        oldManifestsUnchanged(repo, entry);
        for (const ref of fixedInputs)
            boundAppendFile(repo, ref);
        if (hash(bytes(join(stateDir, 'state.json'))) !== stateHash)
            fail('state mutated during preparation');
        registry.appends.push(entry);
        writeFileSync(join(repo, `research/${run}-frontier-appends.json`), JSON.stringify(registry, null, 2) + '\n');
        writeFileSync(join(repo, archive, 'committed.json'), JSON.stringify({ preparedSha256: hash(bytes(join(repo, archive, 'prepared.json'))), stateUnchanged: true }, null, 2) + '\n');
        return entry;
    }
    catch (error) {
        for (const [path, data] of before)
            writeFileSync(join(repo, path), data);
        for (const n of readdirSync(join(repo, 'research')).filter(n => n.startsWith(run + '-') && lstatSync(join(repo, 'research', n)).isFile()))
            if (!originalNames.includes(n))
                rmSync(join(repo, 'research', n));
        if (existsSync(join(repo, archive)))
            writeFileSync(join(repo, archive, 'failed.json'), JSON.stringify({ run, number, error: String(error), restored: true }) + '\n');
        throw error;
    }
    finally {
        rmSync(lock, { recursive: true, force: true });
    }
}
/** Authorize only the computed original PBW dependency-role successor; never edit sources. */
export function authorizeAppendPbwRoleRepair({ repo, run, stateDir, requestPath, inspect = false, scan = scanAppendProcesses }: any) {
    repo = realpathSync(repo);
    if (realpathSync(stateDir) !== resolve(stateDir)) fail('symlinked state directory');
    const entry = appendRegistry(repo, run).appends.find((e: any) => e.number === 1);
    if (!entry || resolve(repo, entry.stateDir) !== resolve(stateDir)) fail('exact original append state identity required');
    const output = join(repo, pbwRoleRepairPath(run));
    if (existsSync(output) || existsSync(output + '.sha256')) fail('existing/interrupted PBW role authorization; inspect immutable evidence');
    const observe = (owned = false) => {
        assertNoAppendTransaction(stateDir);
        inactive(repo, run, stateDir, scan, '1-append-drift-1', owned);
        if (existsSync(join(repo, entry.archive, 'review-applied.json'))) fail('supplemental review already applied');
        if (existsSync(join(stateDir, 'step6-packaging-recovery.lock'))) fail('unresolved native recovery transaction');
        oldManifestsUnchanged(repo, entry);
        noOldPlanChanges(repo, entry);
        appendReview(repo, run, 1, { requireNative: true });
        const rawRequest = pbwRepairBytes(repo, requestPath), stateRaw = pbwRepairBytes(repo, join(entry.stateDir, 'state.json')).toString('utf8');
        const eventsRaw = pbwRepairBytes(repo, join(entry.stateDir, 'events.jsonl')).toString('utf8');
        const authorization = preparePbwRoleAuthorization(repo, entry, JSON.parse(rawRequest.toString('utf8')), stateRaw, eventsRaw);
        return { request: hash(rawRequest), state: hash(stateRaw), events: hash(eventsRaw), authorization };
    };
    const before = observe();
    if (inspect) return before.authorization;
    const release = acquireControllerLock(stateDir, run);
    try {
        const after = observe(true);
        if (before.request !== after.request || before.state !== after.state || before.events !== after.events) fail('role authorization inputs changed while acquiring lock');
        const raw = JSON.stringify(after.authorization, null, 2) + '\n';
        writeFileSync(output + '.sha256', hash(raw) + '\n', { flag: 'wx', mode: 0o444 });
        writeFileSync(output, raw, { flag: 'wx', mode: 0o444 });
        return after.authorization;
    } finally { release(); }
}

export function checkAppendReview(repo: string, run: string, number: number) { const e = appendReview(repo, run, number).entry; noOldPlanChanges(repo, e); oldManifestsUnchanged(repo, e); return e; }
export function applyAppendReview(repo: string, run: string, number: number, { invoke = invokeDefault(repo) }: any = {}) {
    const { entry, text, native, prompt, ownerInputs } = appendReview(repo, run, number, { requireNative: true });
    const applied = join(repo, entry.archive, 'review-applied.json');
    if (existsSync(applied)) {
        const prior = read(applied);
        if (prior.reportSha256 !== hash(text) || prior.nativeSha256 !== native.sha256)
            fail('applied review differs');
        return prior;
    }
    oldManifestsUnchanged(repo, entry);
    noOldPlanChanges(repo, entry);
    const spec = loadPlan(repo), by = new Map(spec.pages.map((p: any) => [p.id, p]));
    const before = new Map<string, Buffer>();
    try {
        for (const b of entry.batches) {
            const path = join(repo, 'research', `${run}-batch-${b}.pages.json`);
            before.set(path, bytes(path));
            const rows = read(path);
            if (rows.length !== 2 || rows.some((p: any) => !entry.newPages.includes(p.id) || p.items?.length))
                fail('new manifests must remain exact unscaffolded pairs');
            const next = rows.map((p: any) => { const q: any = by.get(p.id); if (!q || q.kind !== p.kind || q.companion !== p.companion || q.category !== p.category || q.library !== p.library)
                fail('new identity changed'); return { ...p, title: q.title, order: q.order, requires: q.requires, items: [] }; });
            writeFileSync(path, JSON.stringify(next, null, 2) + '\n');
        }
        oldManifestsUnchanged(repo, entry);
        const graph = join(repo, 'research', `${run}-batch-dependency-levels.json`);
        if (existsSync(graph))
            before.set(graph, bytes(graph));
        invoke(['tools/physics-support/batch-dependency-levels.mjs', 'write', '--run', run]);
        const receipt = { version: 1, run, number, reportSha256: hash(text), nativeSha256: native.sha256, promptSha256: hash(bytes(join(repo,prompt))), ownerInputs: ownerInputs.map(path => ({ path, sha256: hash(bytes(join(repo, path))) })), oldManifestsPreserved: true, newManifests: [...before.keys()].filter(path => path.endsWith('.pages.json')).map(path => ({ path: relative(repo, path), sha256: hash(bytes(path)) })) };
        writeFileSync(applied, JSON.stringify(receipt, null, 2) + '\n', { flag: 'wx' });
        return receipt;
    }
    catch (e) {
        for (const [p, b] of before)
            writeFileSync(p, b);
        throw e;
    }
}
export function appendStages(stages: Stage[], ctx: any): Stage[] {
    const entries = appendRegistry(ctx.repo, ctx.run).appends;
    if (!entries.length)
        return stages;
    const index = stages.findIndex(s => s.id === '1-scaffold'), original = stages.find(s => s.id === '1-drift');
    if (index < 0 || !original)
        fail('unsupported stage table');
    const inserted: Stage[] = entries.flatMap((e: any) => {
        const unit = `append-${e.number}`, label = `drift-review-append-${e.number}`, selector = `${e.archive}/new-pages.json`;
        const ownerReviewItems = loadPlan(ctx.repo).pages.filter((p: any) => e.newPages.includes(p.id)).flatMap((p: any) => (p.items ?? []).map((i: any) => i.id));
        const check = (id: string, args: string[]) => ({ id, argv: ['node', ...args], ownerReviewItems });
        const planning = () => [
            check('append-planned-physics', ['tools/physics-support/physics-check.mjs', '--plan', 'research/plan-spec.json', '--pages-file', selector, '--maintenance-run', ctx.run]),
            check('append-planned-topology', ['tools/physics-support/validate-plan.mjs', 'research/plan-spec.json', '--pages-file', selector])
        ];
        return [{ ...original, id: `1-append-drift-${e.number}`, label: `Supplemental prerequisite drift ${e.number}`, units: () => [unit],
                pattern: new RegExp(`^alpha-${label}\\.result\\.json$`), labelFor: () => label, artifacts: () => e.report,
                plan: () => [{ role: 'alpha', label, job: 'verification', covers: [unit], brief: 'briefs/alpha-drift.md', task: [e.task], timeout: 7200 }],
                gates: () => [check('append-review', ['tools/tsx-run.mjs', 'tools/physics-autopilot/bin/frontier-append.mts', 'check-review', '--run', ctx.run, '--generation', String(e.number)]), ...planning()] },
            { id: `1-append-apply-${e.number}`, label: `Apply supplemental drift ${e.number}`, units: () => [unit], concurrency: 1,
                pattern: new RegExp(`^tool-drift-append-apply-${e.number}\\.result\\.json$`), artifacts: () => `${e.archive}/review-applied.json`,
                plan: () => [{ role: 'tool', label: `drift-append-apply-${e.number}`, job: 'bookkeeping-mechanical', covers: [unit], argv: ['node', 'tools/tsx-run.mjs', 'tools/physics-autopilot/bin/frontier-append.mts', 'apply', '--run', ctx.run, '--generation', String(e.number), '--state-dir', ctx.config?.stateDir ?? join(ctx.repo, '.physics-autopilot', ctx.run)], timeout: 600 }],
                gates: () => [...planning(), check('append-ledger', ['tools/physics-support/manifest-integrity.mjs', '--run', ctx.run]), check('append-drift-current-view', ['tools/physics-support/drift-review-check.mjs', '--run', ctx.run]), check('append-levels', ['tools/physics-support/batch-dependency-levels.mjs', 'check', '--run', ctx.run])], onHold: original.onHold }];
    });
    return [...stages.slice(0, index), ...inserted, ...stages.slice(index)];
}
