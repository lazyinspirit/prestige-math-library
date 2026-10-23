import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, readdirSync, existsSync, rmSync, symlinkSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { appendFrontier, applyAppendReview, checkAppendReview, appendStages, assertNoAppendTransaction, scanAppendProcesses } from '../src/frontier-append.mts';
import { appendDriftView, appendBaseContext } from '../../physics-support/frontier-append-evidence.mjs';
import { writeBatchDependencyLevels } from '../../physics-support/batch-dependency-levels.mjs';
import { gateReviewSnapshot } from '../src/owner-gate-recertification.mjs';
import { driftOwnerResolutionTemplate, validateDriftOwnerResolutions, driftHash } from '../../physics-support/drift-owner-resolutions.mjs';
import { spawnSync } from 'node:child_process';
import { validateStages } from '../src/spec.mts';
const AT = '2026-10-23T00:00:00.000Z';
function fixture(t: any, newPairCount = 3) {
    const repo = mkdtempSync(join(tmpdir(), 'physics-append-'));
    t.after(() => rmSync(repo, { recursive: true, force: true }));
    const dir = join(repo, 'research'), stateDir = join(repo, '.physics-autopilot', 'demo');
    for (const p of [dir, stateDir, join(dir, 'demo-dispatch'), join(repo, 'items'), join(repo, 'library', 'math')])
        mkdirSync(p, { recursive: true });
    const save = (p: string, data: any) => writeFileSync(join(repo, p), typeof data === 'string' ? data : JSON.stringify(data, null, 2) + '\n');
    const read = (p: string) => readFileSync(join(repo, p));
    const pair = (id: string, order: number, requires: string[] = []) => [{ id, title: id, kind: 'A', category: 'math', library: 'mathematics', companion: id + '-examples', order, requires, items: [] }, { id: id + '-examples', title: id + ' examples', kind: 'B', category: 'math', library: 'mathematics', companion: id, order, requires: [id], items: [] }];
    const oldPages: any[] = [], ledger: any[] = [];
    for (let n = 1; n <= 55; n++) {
        const pp = pair('old-' + n, 100 + n);
        oldPages.push(...pp);
        const manifest = pp.map((p: any, i: number) => ({ ...p, requires: n === 3 && !i ? ['old-2'] : p.requires, items: [{ id: `def-old-${n}-${i}`, kind: 'definition', domain: 'mathematics', title: 'Existing ' + n, statement: 'An unchanged prior declaration.', deps: [] }] }));
        save(`research/demo-batch-${n}.pages.json`, manifest);
        save(`research/demo-beta-${n}.task.md`, 'Original task ' + n);
        ledger.push(...pp.map(p => ({ id: p.id, kind: p.kind, batch: String(n) })));
        if (n !== 3)
            for (let i = 0; i < 2; i++)
                save(`items/def-old-${n}-${i}.md`, `---\nid: def-old-${n}-${i}\nkind: definition\ndomain: mathematics\nstatus: draft\ndeps: []\n---\n\n## Definition\n\nExisting declaration.\n`);
    }
    const oldSpec = { pages: oldPages };
    save('research/prior-plan.json', oldSpec);
    const newIds = Array.from({ length: newPairCount }, (_, i) => 'new-' + String.fromCharCode(97 + i));
    const fresh = newIds.flatMap((id, i) => pair(id, 102 + (i + 1) / (newPairCount + 1), [i ? 'new-a' : 'old-2']));
    for (const [index, p] of (fresh as any[]).entries())
        p.items = Array.from({ length: [5, 2, 3, 1, 6, 1][index] ?? 1 }, (_, i) => ({ id: 'def-' + p.id + '-' + i, kind: 'definition', domain: 'mathematics', title: p.title + ' ' + i, statement: 'A supplied mathematical prerequisite awaiting native authoring.', deps: index === 0 && i === 0 ? ['def-old-2-0'] : [] }));
    save('research/plan-spec.json', { pages: [...oldPages, ...fresh] });
    save('research/demo-scope-ledger.json', { run: 'demo', baseline_commit: 'original-commit', allow_in_run_dependencies: true, pages: ledger });
    save('research/demo-covers.json', { 'beta-batch-1': ['1'], 'historical-reader': ['55'] });
    save('research/demo-dispatch/beta-batch-55.result.json', { run: 'demo', role: 'beta', label: 'batch-55', covers: ['55'], attempt: 1, ok: true });
    save('research/source-dossier.md', 'Actual source-bound design and local proof obligations; not an authored or accepted result.');
    save('research/demo-alpha-step1-drift.md', oldPages.filter(p => p.kind === 'A').map(p => `### ${p.id}\nVERDICT: no-drift\n`).join('\n'));
    const original = { run: 'demo', role: 'alpha', label: 'drift-review', covers: ['drift'], ok: true, attempt: 1 };
    for (const name of ['alpha-drift-review.result.json', 'alpha-drift-review.attempt-1.result.json'])
        save('research/demo-dispatch/' + name, original);
    const stamp = { enteredAt: AT, gatesPassedAt: AT, doneAt: AT, fixRounds: 0 };
    const state = { version: 1, run: 'demo', startedAt: AT, finishedAt: null, paused: true, stage: '1-scaffold', dispatches: {}, stages: { '1-drift': stamp, '1-drift-apply': stamp, '1-scaffold': { enteredAt: AT, doneAt: null, gatesPassedAt: null, fixRounds: 0 } } };
    save('.physics-autopilot/demo/state.json', state);
    const invoke = (args: string[]) => {
        if (args[0].endsWith('manifest-integrity.mjs')) {
            const pages = readdirSync(dir).filter(n => /^demo-batch-\d+\.pages\.json$/.test(n)).flatMap(n => JSON.parse(read('research/' + n).toString()).map((p: any) => ({ id: p.id, kind: p.kind, batch: n.match(/-batch-(\d+)/)![1] })));
            save('research/demo-scope-ledger.json', { run: 'demo', baseline_commit: 'original-commit', allow_in_run_dependencies: true, pages });
        }
        else if (args[0].endsWith('run-tasks.mjs')) {
            for (let n = 1; n <= readdirSync(dir).filter(n => /^demo-batch-\d+\.pages\.json$/.test(n)).length; n++)
                save(`research/demo-beta-${n}.task.md`, 'Generated task ' + n);
        }
        else if (args[0].endsWith('batch-dependency-levels.mjs'))
            writeBatchDependencyLevels(repo, 'demo');
        else
            throw Error('unexpected tool ' + args[0]);
    };
    const options = { repo, run: 'demo', stateDir, pairs: newIds, priorPlan: 'research/prior-plan.json', sourceEvidence: ['research/source-dossier.md'], evidence: () => [{ source: 'actual design' }], buildability: () => [], scan: () => ({ controller: [], preflight: [], writer: [] }), invoke, now: () => new Date(AT) };
    const review = (entry: any) => {
        save(entry.report, entry.pairs.map((id: string) => `### ${id}\n\nThe actual exact source hypotheses and missing local proof obligations were inspected for this new page.\n\nVERDICT: no-drift\n`).join('\n'));
    };
    const native = (entry: any, changes: any = {}) => {
        const number = entry.number, label = `drift-review-append-${number}`;
        const prompt=join(repo,`research/demo-dispatch/alpha-${label}.attempt-1.prompt.md`);
        const r = { run: 'demo', role: 'alpha', label, covers: [`append-${number}`], ok: true, attempt: 1, exit_code: 0, started_at: AT, ended_at: AT, prompt, ...changes };
        for (const n of [`alpha-${label}.result.json`, `alpha-${label}.attempt-1.result.json`]) save('research/demo-dispatch/' + n, r);
        save(`research/demo-dispatch/alpha-${label}.attempt-1.prompt.md`,read(entry.task).toString());
        const current=JSON.parse(read('.physics-autopilot/demo/state.json').toString());
        current.dispatches[`1-append-drift-${number}:${label}`]={stage:`1-append-drift-${number}`,role:'alpha',label:r.label,covers:r.covers,attempts:r.attempt,lastExitOk:true,startedAt:AT,endedAt:AT};
        save('.physics-autopilot/demo/state.json',current);
    };
    return { repo, stateDir, save, read, state, options, invoke, review, native };
}
test('55 -> 58 preserves every old manifest, stale requires, task, source, original review/result and state', t => {
    const f = fixture(t), before = new Map(Array.from({ length: 55 }, (_, i) => { const p = `research/demo-batch-${i + 1}.pages.json`; return [p, f.read(p)]; }));
    const original = f.read('research/demo-alpha-step1-drift.md'), result = f.read('research/demo-dispatch/alpha-drift-review.result.json'), state = f.read('.physics-autopilot/demo/state.json');
    const e = appendFrontier(f.options);
    assert.deepEqual(e.batches, ['56', '57', '58']);
    assert.deepEqual(f.read('.physics-autopilot/demo/state.json'),state);
    for (const [p, b] of before)
        assert.deepEqual(f.read(p), b);
    assert.equal(JSON.parse(f.read('research/demo-scope-ledger.json').toString()).pages.length, 116);
    assert.deepEqual(JSON.parse(f.read('research/demo-covers.json').toString())['historical-reader'], ['55']);
    assert.equal(f.read('research/demo-beta-55.task.md').toString(), 'Original task 55');
    assert.equal(f.read('research/demo-beta-58.task.md').toString(), 'Generated task 58');
    f.review(e);
    assert.throws(() => applyAppendReview(f.repo, 'demo', 1), /ENOENT/);
    f.native(e);
    const afterNativeState=f.read('.physics-autopilot/demo/state.json');
    applyAppendReview(f.repo, 'demo', 1, { invoke: f.invoke });
    for (const [p, b] of before)
        assert.deepEqual(f.read(p), b);
    assert.deepEqual(f.read('research/demo-alpha-step1-drift.md'), original);
    assert.deepEqual(f.read('research/demo-dispatch/alpha-drift-review.result.json'), result);
    assert.deepEqual(f.read('.physics-autopilot/demo/state.json'), afterNativeState);
    const view = appendDriftView(f.repo, 'demo');
    assert.equal([...view.text.matchAll(/^### /gm)].length, 58);
    assert.ok(view.text.includes('separately attributed'));
    assert.equal(appendBaseContext(f.repo, 'demo').frontier.length, 110);
    const graph = JSON.parse(f.read('research/demo-batch-dependency-levels.json').toString());
    assert.equal(graph.batches.length, 58);
    assert.deepEqual(graph.batches.find((r: any) => r.batch === '3').requires, ['2']);
});
test('unpaused, later, closed, unresolved dispatch and live process states fail before append', t => {
    for (const change of [{ paused: false }, { stage: '2-scope-review' }, { finishedAt: AT }, { dispatches: { writer: { startedAt: AT } } }, { stages: { '1-scaffold': { doneAt: AT } } }]) {
        const f = fixture(t);
        f.save('.physics-autopilot/demo/state.json', { ...f.state, ...change });
        assert.throws(() => appendFrontier(f.options));
        assert.equal(existsSync(join(f.repo, 'research/demo-batch-56.pages.json')), false);
    }
    for (const kind of ['controller', 'preflight', 'writer']) {
        const f = fixture(t);
        assert.throws(() => appendFrontier({ ...f.options, scan: () => ({ controller: [], preflight: [], writer: [], [kind]: [123] }) }), /drained/);
    }
});
test('both observed live controller lock names reject preparation even with an empty process scan', t => {
    for (const name of ['.controller.lock', 'controller.lock']) {
        const f = fixture(t);
        f.save('.physics-autopilot/demo/' + name, { pid: process.pid, run: 'demo', started_at: AT });
        assert.throws(() => appendFrontier(f.options), /live controller lock/);
        assert.equal(existsSync(join(f.repo, 'research/demo-batch-56.pages.json')), false);
    }
});
test('a seven-pair first append preserves all 55 old batches and native history through fresh review/application', t => {
    const f = fixture(t, 7);
    const paths = [...Array.from({ length: 55 }, (_, i) => `research/demo-batch-${i + 1}.pages.json`), 'research/demo-beta-55.task.md', 'research/demo-alpha-step1-drift.md', 'research/demo-dispatch/alpha-drift-review.result.json', 'research/demo-dispatch/beta-batch-55.result.json', 'items/def-old-1-0.md'];
    const before = paths.map(path => [path, f.read(path)] as const);
    const e = appendFrontier(f.options);
    assert.deepEqual(e.batches, ['56', '57', '58', '59', '60', '61', '62']);
    assert.equal(JSON.parse(f.read('research/demo-scope-ledger.json').toString()).pages.length, 124);
    assert.equal(f.read('research/demo-beta-62.task.md').toString(), 'Generated task 62');
    const task = f.read(e.task).toString();
    assert.ok(task.includes(`Review ONLY new A pages: ${f.options.pairs.join(', ')}.`));
    assert.ok(task.includes('prerequisite/order corrections to the 14 new canonical plan rows.'));
    assert.ok(task.includes('Preserve all supplied item declarations and their exact scope.'));
    assert.ok(!task.includes('six new canonical plan rows'));
    f.review(e);
    const originalPlan = f.read('research/plan-spec.json');
    const alteredPlan = JSON.parse(originalPlan.toString());
    alteredPlan.pages.find((p: any) => p.id === 'new-g').items[0].statement = 'An unauthorized narrower declaration.';
    f.save('research/plan-spec.json', alteredPlan);
    assert.throws(() => checkAppendReview(f.repo, 'demo', 1), /new declarations changed/);
    f.save('research/plan-spec.json', originalPlan.toString());
    checkAppendReview(f.repo, 'demo', 1);
    f.native(e);
    const state = f.read('.physics-autopilot/demo/state.json');
    applyAppendReview(f.repo, 'demo', 1, { invoke: f.invoke });
    assert.deepEqual(f.read('.physics-autopilot/demo/state.json'), state);
    for (const [path, bytes] of before) assert.deepEqual(f.read(path), bytes);
    assert.equal([...appendDriftView(f.repo, 'demo').text.matchAll(/^### /gm)].length, 62);
    const graph = JSON.parse(f.read('research/demo-batch-dependency-levels.json').toString());
    assert.equal(graph.batches.length, 62);
    assert.deepEqual(graph.batches.find((b: any) => b.batch === '3').requires, ['2']);
});
test('only the exact unbound runtime supervision checkpoint may advance during supplemental review', t => {
    const f = fixture(t), path = 'research/demo-supervision-checkpoint.json';
    f.save(path, { observer: 'before' });
    const e = appendFrontier(f.options);
    assert.ok(!e.protectedResearch.some((r: any) => r.path === path));
    f.save(path, { observer: 'after' });
    f.review(e); checkAppendReview(f.repo, 'demo', 1); f.native(e);
    applyAppendReview(f.repo, 'demo', 1, { invoke: f.invoke });
    assert.equal(JSON.parse(f.read(path).toString()).observer, 'after');
    appendDriftView(f.repo, 'demo');
    const bound = fixture(t); bound.save(path, { actual_source: 'explicitly bound' });
    const be = appendFrontier({ ...bound.options, sourceEvidence: [...bound.options.sourceEvidence, path] });
    assert.ok(be.protectedResearch.some((r: any) => r.path === path));
    bound.save(path, { actual_source: 'changed' }); bound.review(be);
    assert.throws(() => checkAppendReview(bound.repo, 'demo', 1), /changed/);
});
test('duplicate, overlapping, unsafe, wrong-kind and unbuildable new scopes are rejected', t => {
    for (const change of [{ pairs: ['old-1'] }, { pairs: ['new-a', 'new-a'] }, { pairs: ['../bad'] }, { pairs: ['new-a-examples'] }, { buildability: () => [{ page: 'new-a', requires: 'missing' }] }]) {
        const f = fixture(t);
        assert.throws(() => appendFrontier({ ...f.options, ...change }));
        assert.equal(existsSync(join(f.repo, 'research/demo-batch-56.pages.json')), false);
    }
});
test('new source declarations must remain nonempty, structured and disjoint from the original inventory', t => {
    for (const replacement of [[], ['def-unstructured'], [{ id: 'def-old-1-0', kind: 'definition', domain: 'mathematics', statement: 'Duplicate inventory', deps: [] }]]) {
        const f = fixture(t), plan = JSON.parse(f.read('research/plan-spec.json').toString());
        plan.pages.find((p: any) => p.id === 'new-a').items = replacement;
        f.save('research/plan-spec.json', plan);
        assert.throws(() => appendFrontier(f.options), /declaration/);
        assert.equal(existsSync(join(f.repo, 'research/demo-batch-56.pages.json')), false);
    }
});
test('interrupted append lock blocks preparation/start and failed generators roll back generated metadata', t => {
    const f = fixture(t);
    mkdirSync(join(f.stateDir, 'frontier-append.lock'));
    assert.throws(() => assertNoAppendTransaction(f.stateDir), /interrupted/);
    assert.throws(() => appendFrontier(f.options), /interrupted/);
    rmSync(join(f.stateDir, 'frontier-append.lock'), { recursive: true });
    const prior = f.read('research/demo-scope-ledger.json');
    assert.throws(() => appendFrontier({ ...f.options, invoke: () => { throw Error('generator failed'); } }), /generator failed/);
    assert.deepEqual(f.read('research/demo-scope-ledger.json'), prior);
    assert.equal(existsSync(join(f.repo, 'research/demo-batch-56.pages.json')), false);
    assert.ok(existsSync(join(f.repo, 'research/demo-frontier-append-1/failed.json')));
});
test('missing/wrong page reviews, blocked verdict and fake/stale native results cannot apply', t => {
    const f = fixture(t), e = appendFrontier(f.options);
    f.review(e);
    const good = f.read(e.report);
    f.save(e.report, '### new-a\nVERDICT: no-drift\n');
    assert.throws(() => checkAppendReview(f.repo, 'demo', 1), /exactly/);
    f.save(e.report, good.toString().replace('VERDICT: no-drift', 'VERDICT: drift-blocked'));
    assert.throws(() => checkAppendReview(f.repo, 'demo', 1), /blocked/);
    f.save(e.report, good.toString());
    for (const change of [{ attempt: 0 }, { started_at: '2026-10-22T00:00:00Z' }, { covers: ['drift'] }, { written_by: 'autopilot' }, { ok: false }, { exit_code: 1 }]) {
        f.native(e, change);
        assert.throws(() => applyAppendReview(f.repo, 'demo', 1, { invoke: f.invoke }));
    }
});
test('old source/manifest/plan mutations and changed source dossier fail closed without global sync', t => {
    for (const target of ['items/def-old-1-0.md', 'research/demo-batch-3.pages.json', 'research/source-dossier.md', 'research/demo-dispatch/beta-batch-55.result.json']) {
        const f = fixture(t), e = appendFrontier(f.options);
        f.review(e);
        f.native(e);
        f.save(target, 'unauthorized change');
        assert.throws(() => applyAppendReview(f.repo, 'demo', 1, { invoke: f.invoke }));
    }
    const f = fixture(t), e = appendFrontier(f.options);
    f.review(e);
    f.native(e);
    const plan = JSON.parse(f.read('research/plan-spec.json').toString());
    plan.pages[0].requires = ['new-a'];
    f.save('research/plan-spec.json', plan);
    assert.throws(() => applyAppendReview(f.repo, 'demo', 1, { invoke: f.invoke }), /outside/);
});
test('native stages are fresh units and append owner metadata scopes exclude the missing old Singer carrier', t => {
    const f = fixture(t), e = appendFrontier(f.options);
    const original: any = { id: '1-drift', label: 'drift', modelProfile: 'original-luna-max', units: () => ['drift'], pattern: /old/, plan: () => [], gates: () => [{ id: 'old', argv: ['true'] }] };
    const table = appendStages([original, { ...original, id: '1-drift-apply' }, { ...original, id: '1-scaffold' }], { repo: f.repo, run: 'demo', config: { stateDir: f.stateDir } });
    assert.deepEqual(table.map(s => s.id), ['1-drift', '1-drift-apply', '1-append-drift-1', '1-append-apply-1', '1-scaffold']);
    assert.equal(table[2].modelProfile, 'original-luna-max');
    assert.deepEqual(table[2].units({} as any), ['append-1']);
    assert.ok(!(table[2].pattern as RegExp).test('alpha-drift-review.result.json'));
    const ctx: any = { repo: f.repo, run: 'demo', config: { stateDir: f.stateDir }, dispatchDir: join(f.repo, 'research/demo-dispatch') };
    const gates: any = table[2].gates!(ctx);
    const snap = gateReviewSnapshot(ctx, gates, ['1-append-drift-1']);
    assert.equal(snap.items.length, 18);
    assert.ok(snap.items.every((r: any) => r.id.startsWith('def-new-') && r.carrierSha256 === null));
    assert.equal(snap.pages.length, 6);
    assert.equal(validateStages(table, ctx).length, 0);
});
test('old root blocked-section overlay binds its original scope; native composite checks all 58 A pages without rewriting history', t => {
    const f = fixture(t), prior = JSON.parse(f.read('research/prior-plan.json').toString()), current = f.read('research/plan-spec.json');
    f.save('research/plan-spec.json', prior);
    f.save('research/demo-alpha-step1-drift.md', f.read('research/demo-alpha-step1-drift.md').toString().replace('VERDICT: no-drift', 'VERDICT: drift-blocked — exact original missing prerequisite, owner resolution needed.'));
    const receipt = driftOwnerResolutionTemplate(f.repo, 'demo');
    receipt.inputs['research/source-dossier.md'] = driftHash(f.read('research/source-dossier.md'));
    for (const row of receipt.resolutions) Object.assign(row, { decision: 'resolved', reason: 'Root inspected the precise original prerequisite and retained the original scope and conditional inputs.', evidence: ['research/source-dossier.md'] });
    f.save('research/demo-drift-owner-resolutions.json', receipt);
    const baseReceipt = f.read('research/demo-drift-owner-resolutions.json');
    f.save('research/plan-spec.json', current.toString());
    const e = appendFrontier(f.options);
    f.review(e);
    f.native(e);
    applyAppendReview(f.repo, 'demo', 1, { invoke: f.invoke });
    assert.deepEqual(f.read('research/demo-drift-owner-resolutions.json'), baseReceipt);
    assert.ok(validateDriftOwnerResolutions(f.repo, 'demo').resolved.has('old-1'));
    const result = spawnSync(process.execPath, [new URL('../../physics-support/drift-review-check.mjs', import.meta.url).pathname, '--run', 'demo'], { cwd: f.repo, encoding: 'utf8' });
    assert.equal(result.status, 0, result.stderr + result.stdout);
    assert.match(result.stdout, /58 page\(s\) reviewed/);
    const ledger = JSON.parse(f.read('research/demo-scope-ledger.json').toString());
    ledger.pages.pop();
    f.save('research/demo-scope-ledger.json', ledger);
    assert.throws(() => validateDriftOwnerResolutions(f.repo, 'demo'), /ownership/);
});
test('new planned item scope cannot be dropped or rewritten by prerequisite review', t => {
    const f = fixture(t), e = appendFrontier(f.options);
    f.review(e);
    const spec = JSON.parse(f.read('research/plan-spec.json').toString());
    spec.pages.find((p: any) => p.id === 'new-a').items.pop();
    f.save('research/plan-spec.json', spec);
    assert.throws(() => checkAppendReview(f.repo, 'demo', 1), /declarations/);
});
test('archived item bytes, native attempt bytes and registry seals are authenticated', t => {
    for (const target of ['research/demo-frontier-append-1/items/def-old-1-0.md', 'research/demo-dispatch/alpha-drift-review-append-1.attempt-1.result.json', 'research/demo-frontier-append-1/prepared.json', 'research/demo-frontier-append-1/new-pages.json']) {
        const f = fixture(t), e = appendFrontier(f.options);
        f.review(e);
        f.native(e);
        f.save(target, 'tampered');
        assert.throws(() => applyAppendReview(f.repo, 'demo', 1, { invoke: f.invoke }));
    }
});
test('blocked supplemental review requires separate source-bound Root disposition and never enlarges original native coverage', t => {
    const f = fixture(t), e = appendFrontier(f.options);
    f.review(e);
    f.save(e.report, f.read(e.report).toString().replace('VERDICT: no-drift', 'VERDICT: drift-blocked — exact additional source prerequisite needs owner resolution.'));
    f.native(e);
    const text = f.read(e.report).toString(), heads = [...text.matchAll(/^### (.*)$/gm)], end = heads[1].index;
    const report = { path: e.report, sha256: driftHash(f.read(e.report)) }, native = { path: 'research/demo-dispatch/alpha-drift-review-append-1.result.json', sha256: driftHash(f.read('research/demo-dispatch/alpha-drift-review-append-1.result.json')) };
    const owner = { version: 1, run: 'demo', generation: 1, authorizing_owner: '/root', report, native_result: native, inputs: { [report.path]: report.sha256, [native.path]: native.sha256, 'research/source-dossier.md': driftHash(f.read('research/source-dossier.md')) }, resolutions: [{ page: 'new-a', section_sha256: driftHash(text.slice(heads[0].index, end)), decision: 'resolved', reason: 'Root examined the exact prerequisite evidence and the retained complete mathematical scope for this newly reviewed page.', requires: ['old-2'], evidence: ['research/source-dossier.md'] }] };
    f.save('research/demo-append-1-drift-owner-resolutions.json', { ...owner, authorizing_owner: 'outside' });
    assert.throws(() => checkAppendReview(f.repo, 'demo', 1), /authority/);
    f.save('research/demo-append-1-drift-owner-resolutions.json', owner);
    checkAppendReview(f.repo, 'demo', 1);
    applyAppendReview(f.repo, 'demo', 1, { invoke: f.invoke });
    const view = appendDriftView(f.repo, 'demo');
    assert.deepEqual(view.resolved, ['new-a']);
    assert.equal(JSON.parse(f.read('research/demo-dispatch/alpha-drift-review.result.json').toString()).covers[0], 'drift');
    f.save('research/demo-append-1-drift-owner-resolutions.json', { ...owner, resolutions: [] });
    assert.throws(() => appendDriftView(f.repo, 'demo'));
});
function ownerBase(f: any, withCurrent = false, count = 1) {
    const prior = f.read('research/prior-plan.json'), current = f.read('research/plan-spec.json');
    f.save('research/plan-spec.json', prior.toString());
    let remaining = count;
    f.save('research/demo-alpha-step1-drift.md', f.read('research/demo-alpha-step1-drift.md').toString().replace(/VERDICT: no-drift/g, text => remaining-- > 0 ? 'VERDICT: drift-blocked — missing original prerequisite requires owner review.' : text));
    f.save('research/live-current.md', 'An expressly live obligation.');
    const receipt = driftOwnerResolutionTemplate(f.repo, 'demo');
    const evidence = ['research/source-dossier.md', 'research/demo-batch-55.pages.json', 'research/plan-spec.json', 'research/live-current.md'];
    for (const path of evidence)
        receipt.inputs[path] = driftHash(f.read(path));
    for (const row of receipt.resolutions) Object.assign(row, { decision: 'resolved', reason: 'Root freshly reviewed the exact current 55-pair original prerequisites and scientific scope before extension.', evidence: ['research/source-dossier.md'], ...(withCurrent ? { current_inputs: { 'research/plan-spec.json': receipt.inputs['research/plan-spec.json'], 'research/live-current.md': receipt.inputs['research/live-current.md'] } } : {}) });
    f.save('research/demo-drift-owner-resolutions.json', receipt);
    f.save('research/plan-spec.json', current.toString());
    return receipt;
}
test('stale base overlay fails before mutation; live planning obligations need actual distinct Root review', t => {
    const f = fixture(t);
    ownerBase(f);
    f.save('research/source-dossier.md', 'Changed after the claimed old review.');
    assert.throws(() => appendFrontier(f.options), /stale evidence/);
    assert.equal(existsSync(join(f.repo, 'research/demo-batch-56.pages.json')), false);
    const g = fixture(t);
    ownerBase(g, true);
    assert.throws(() => appendFrontier(g.options), /genuine Root/);
    assert.equal(existsSync(join(g.repo, 'research/demo-batch-56.pages.json')), false);
});
test('historical old inputs use authenticated archives after legitimate new authoring; explicit live obligations remain live', t => {
    const f = fixture(t), receipt = ownerBase(f, true);
    const path = 'research/base-disposition-review.json';
    f.save(path, { version: 1, run: 'demo', reviewer: '/root', kind: 'historical-scoped-planning-dispositions', owner_resolution_sha256: driftHash(f.read('research/demo-drift-owner-resolutions.json')), scope_ledger_sha256: driftHash(f.read('research/demo-scope-ledger.json')), prior_plan_sha256: driftHash(f.read('research/prior-plan.json')), pages: receipt.resolutions.map((r: any) => r.page), reason: 'Root explicitly distinguishes the original 55-pair planning scope from later added prerequisite authoring and retains the scientific dispositions.', historical_current_inputs: ['research/plan-spec.json'], evidence: [{ path: 'research/source-dossier.md', sha256: driftHash(f.read('research/source-dossier.md')) }] });
    const e = appendFrontier({ ...f.options, baseDispositionReview: path });
    f.review(e);
    f.native(e);
    applyAppendReview(f.repo, 'demo', 1, { invoke: f.invoke });
    const old = JSON.parse(f.read('research/demo-batch-55.pages.json').toString());
    old[0].items[0].statement = 'Legitimate later authored successor.';
    f.save('research/demo-batch-55.pages.json', old);
    const next = JSON.parse(f.read('research/demo-batch-56.pages.json').toString());
    next[0].items = [{ id: 'def-new-authored', kind: 'definition', deps: [] }];
    f.save('research/demo-batch-56.pages.json', next);
    assert.ok(validateDriftOwnerResolutions(f.repo, 'demo').resolved.has('old-1'));
    f.save('research/live-current.md', 'Changed live obligation.');
    assert.throws(() => validateDriftOwnerResolutions(f.repo, 'demo'), /stale current evidence/);
    f.save('research/live-current.md', 'An expressly live obligation.');
    f.save(e.baseResolution.inputPaths['research/demo-batch-55.pages.json'].path, 'tampered archived historical manifest');
    assert.throws(() => validateDriftOwnerResolutions(f.repo, 'demo'), /changed bound input/);
});
test('process scan distinguishes exact same-run controllers, writers, sessions and other runs', t => {
    const f = fixture(t), proc = join(f.repo, 'proc');
    mkdirSync(proc);
    const add = (pid: number, args: string[], home?: string) => { const p = join(proc, String(pid)); mkdirSync(p); writeFileSync(join(p, 'status'), `Uid:\t${process.getuid()}\nState:\tS\n`); writeFileSync(join(p, 'cmdline'), args.join('\0')); writeFileSync(join(p, 'environ'), home ? 'CODEX_HOME=' + home : ''); symlinkSync(f.repo, join(p, 'cwd')); };
    add(991001, ['node', 'tools/physics-autopilot/bin/autopilot.mts', 'start', '--repo', f.repo, '--run', 'demo', '--state-dir', f.stateDir]);
    add(991002, ['node', 'tools/physics-support/dispatch.mjs', '--run', 'demo']);
    add(991003, ['codex', 'exec'], join(f.stateDir, 'sessions', 'one'));
    add(991004, ['node', 'tools/physics-support/dispatch.mjs', '--run', 'other']);
    const scanned = scanAppendProcesses(f.options, proc);
    assert.deepEqual(scanned.controller, [991001]);
    assert.deepEqual(scanned.writer, [991002, 991003]);
});
test('actual physics stage factory retains Luna-max supplemental profile and full ordinary construction battery', async (t) => {
    const f = fixture(t);
    appendFrontier(f.options);
    const mod = await import('../stages/mathlib.mts');
    const ctx: any = { repo: f.repo, run: 'demo', dispatchDir: join(f.repo, 'research/demo-dispatch'), config: { stateDir: f.stateDir }, doctor: true };
    const table = mod.stagesForRun(ctx);
    assert.equal(table.find((s: any) => s.id === '1-append-drift-1').modelProfile, 'gpt-6-luna-max');
    assert.ok(table.find((s: any) => s.id === '1-scaffold').gates(ctx).some((g: any) => g.id === 'step1-readiness'));
    assert.deepEqual(table.find((s: any) => s.id === '1-scaffold').units(ctx).slice(-3), ['56', '57', '58']);
    assert.ok(!table.find((s: any) => s.id === '1-append-drift-1').gates(ctx).some((g: any) => g.argv.includes('--run') && g.argv.includes('tools/physics-support/physics-check.mjs')));
});
test('doctor checks actual supplemental commands and dynamic task existence', async (t) => {
    const f = fixture(t), e = appendFrontier(f.options);
    symlinkSync(new URL('../../', import.meta.url).pathname, join(f.repo, 'tools'));
    symlinkSync(new URL('../../../physics/briefs/', import.meta.url).pathname, join(f.repo, 'briefs'));
    const gen = spawnSync(process.execPath, [join(f.repo, 'tools/physics-support/run-tasks.mjs'), '--run', 'demo'], { cwd: f.repo, env: { ...process.env, PHYSICS_REPO: f.repo }, encoding: 'utf8' });
    assert.equal(gen.status, 0, gen.stderr);
    const { doctor } = await import('../src/doctor.mts');
    const previous = process.env.PHYSICS_REPO;
    process.env.PHYSICS_REPO = f.repo;
    try {
        const path = new URL('../stages/mathlib.mts', import.meta.url).pathname;
        const good = await doctor({ repo: f.repo, run: 'demo', stagesPath: path, config: { stateDir: f.stateDir } });
        const relevant = good.problems.filter((p: string) => p.includes('1-append-') || p.includes('alpha-step1-append-'));
        assert.deepEqual(relevant, []);
        rmSync(join(f.repo, e.task));
        const bad = await doctor({ repo: f.repo, run: 'demo', stagesPath: path, config: { stateDir: f.stateDir } });
        assert.ok(bad.problems.some((p: string) => p.includes('1-append-drift-1: no brief/task exists')));
    }
    finally {
        if (previous === undefined)
            delete process.env.PHYSICS_REPO;
        else
            process.env.PHYSICS_REPO = previous;
    }
});
test('saved original coverage cannot skip fresh supplemental Alpha or start new Betas first', async (t) => {
    const f = fixture(t);
    appendFrontier(f.options);
    f.save('research/demo-dispatch/tool-drift-apply.result.json', { run: 'demo', role: 'tool', label: 'drift-apply', ok: true, covers: ['all'], attempt: 1 });
    const native = await import('../stages/mathlib.mts'), ctx: any = { repo: f.repo, run: 'demo', dispatchDir: join(f.repo, 'research/demo-dispatch'), config: { stateDir: f.stateDir }, doctor: true };
    const table = native.stagesForRun(ctx).filter((s: any) => s.id !== '1-baseline');
    const { State, statePath } = await import('../src/state.mts'), { Executor } = await import('../src/executor.mts');
    const state = new State(statePath(f.stateDir)).init('demo');
    const executor = new Executor({ config: { ...ctx.config, repo: f.repo, run: 'demo', dispatchDir: ctx.dispatchDir, coversMap: {}, concurrency: 20, globalConcurrency: 20 } as any, stages: table, state, adapter: {} as any, reporter: { notify() { }, write() { } } as any });
    assert.equal(executor.currentStage().stage?.id, '1-append-drift-1');
    assert.equal(state.data.stages['1-drift'].doneAt, AT);
});

test('native-looking receipts without completed engine dispatch or actual prompt cannot apply',t=>{
 for(const mode of ['state','prompt']){
  const f=fixture(t),e=appendFrontier(f.options);f.review(e);f.native(e);
  if(mode==='state'){const state=JSON.parse(f.read('.physics-autopilot/demo/state.json').toString());state.dispatches={};f.save('.physics-autopilot/demo/state.json',state);}
  else f.save('research/demo-dispatch/alpha-drift-review-append-1.attempt-1.prompt.md','');
  assert.throws(()=>applyAppendReview(f.repo,'demo',1,{invoke:f.invoke}),/dispatch|prompt/);
 }
});

function clarifiedFixture(t: any, omitMention = false) {
    const f = fixture(t), targets = Array.from({ length: 9 }, (_, i) => 'foreign-' + i);
    const receipt: any = { version: 1, source_root: join(f.repo, 'originals'), files: [] };
    for (const [i, id] of targets.entries()) {
        const path = `library/math/${id}.md`;
        const body = `---\npage: ${id}\nstatus: published\nlibrary: mathematics\n${i < 4 ? '' : 'order: 0\n'}items: [def-${id}]\nexamples: []\nrequires: []\n---\nPublished prerequisite.\n`;
        f.save(path, body); receipt.files.push({ path, sha256: driftHash(body) });
    }
    f.save('research/math-imports.json', receipt);
    const e = appendFrontier(f.options), plan = JSON.parse(f.read('research/plan-spec.json').toString());
    plan.pages.find((p: any) => p.id === 'new-a').requires.push(...targets);
    f.save('research/plan-spec.json', plan); f.review(e);
    const mentioned = omitMention ? targets.slice(1) : targets;
    f.save(e.report, f.read(e.report).toString().replace('VERDICT: no-drift', `Added existing supplier edges: ${mentioned.map(id => '\`' + id + '\`').join(', ')}.\nVERDICT: drift-applied`));
    f.native(e); applyAppendReview(f.repo, 'demo', 1, { invoke: f.invoke });
    const appliedPath = `${e.archive}/review-applied.json`, manifest = 'research/demo-batch-56.pages.json', archive = 'research/applied-manifest-56.json';
    f.save(archive, f.read(manifest).toString());
    const raw = f.read(e.report).toString(), start = raw.indexOf('### new-a'), end = raw.indexOf('### new-b');
    const path = 'research/demo-append-1-drift-format-clarification.json';
    const clarification: any = { version: 1, run: 'demo', generation: 1, authorizing_owner: '/root', kind: 'supplemental-verdict-format-clarification',
        report: { path: e.report, sha256: driftHash(raw) }, native_result: { path: 'research/demo-dispatch/alpha-drift-review-append-1.result.json', sha256: driftHash(f.read('research/demo-dispatch/alpha-drift-review-append-1.result.json')) },
        applied_receipt: { path: appliedPath, sha256: driftHash(f.read(appliedPath)) }, clarifications: [{ page: 'new-a', verdict: 'drift-applied', section_sha256: driftHash(raw.slice(start, end)),
            reason: 'Root independently checked every explicitly reported added edge; this clarifies bare verdict formatting without altering native observations.', applied_manifest: { path: archive, sha256: driftHash(f.read(archive)) },
            added_edges: targets.map((target, i) => ({ target, order: i < 4 ? null : 0 })) }] };
    f.save(path, clarification);
    const check = () => spawnSync(process.execPath, [new URL('../../physics-support/drift-review-check.mjs', import.meta.url).pathname, '--run', 'demo'], { cwd: f.repo, encoding: 'utf8', env: { ...process.env, PHYSICS_REPO: f.repo } });
    return { ...f, e, targets, path, clarification, manifest, archive, appliedPath, check };
}
test('Root clarification translates nine explicit actual edges only in memory, with authenticated unspecified orders and ordinary checks', t => {
    const f = clarifiedFixture(t);
    const paths = [f.e.report, f.appliedPath, 'research/demo-dispatch/alpha-drift-review-append-1.result.json'];
    const raw = paths.map(p => f.read(p));
    const view = appendDriftView(f.repo, 'demo');
    assert.ok(view.text.includes('Root format clarification:'));
    for (const [i, id] of f.targets.entries()) assert.ok(view.text.includes('`' + id + '` (order ' + (i < 4 ? 'unspecified' : '0') + ')'));
    const check = f.check(); assert.equal(check.status, 0, check.stdout + check.stderr);
    paths.forEach((p, i) => assert.deepEqual(f.read(p), raw[i]));
    const live = JSON.parse(f.read(f.manifest).toString()); live[0].items = [{ id: 'def-native-authored', statement: 'Legitimate later authored inventory.' }]; live[0].requires.push('old-1');
    f.save(f.manifest, live);
    const plan = JSON.parse(f.read('research/plan-spec.json').toString()); plan.pages.find((p: any) => p.id === 'new-a').requires.push('old-1'); f.save('research/plan-spec.json', plan);
    assert.doesNotThrow(() => appendDriftView(f.repo, 'demo'));
});
test('clarification rejects wrong owner, unknown/dropped targets, invented order, stale authority and missing live edges', t => {
    for (const mode of ['owner', 'unknown', 'dropped', 'order', 'known-order', 'report', 'result', 'archive', 'plan-edge', 'manifest-edge', 'pin', 'unpinned', 'draft', 'identity']) {
        const f = clarifiedFixture(t), c = f.clarification;
        if (mode === 'owner') c.authorizing_owner = 'alpha';
        if (mode === 'unknown') c.clarifications[0].added_edges[0].target = 'never-mentioned';
        if (mode === 'dropped') c.clarifications[0].added_edges.pop();
        if (mode === 'order') c.clarifications[0].added_edges[0].order = 0;
        if (mode === 'known-order') c.clarifications[0].added_edges[4].order = null;
        f.save(f.path, c);
        if (mode === 'report') f.save(f.e.report, f.read(f.e.report).toString() + 'Changed native report.');
        if (mode === 'result') f.save('research/demo-dispatch/alpha-drift-review-append-1.result.json', '{}');
        if (mode === 'archive') f.save(f.archive, '[]');
        if (mode === 'plan-edge') { const p = JSON.parse(f.read('research/plan-spec.json').toString()); p.pages.find((p: any) => p.id === 'new-a').requires.pop(); f.save('research/plan-spec.json', p); }
        if (mode === 'manifest-edge') { const p = JSON.parse(f.read(f.manifest).toString()); p[0].requires.pop(); f.save(f.manifest, p); }
        if (mode === 'pin') f.save('library/math/foreign-0.md', 'Changed imported snapshot.');
        if (mode === 'unpinned') { const receipt = JSON.parse(f.read('research/math-imports.json').toString()); receipt.files.shift(); f.save('research/math-imports.json', receipt); }
        if (mode === 'draft' || mode === 'identity') {
            const path = 'library/math/foreign-0.md';
            const body = f.read(path).toString().replace(mode === 'draft' ? 'status: published' : 'page: foreign-0', mode === 'draft' ? 'status: draft' : 'page: different-identity');
            f.save(path, body); const receipt = JSON.parse(f.read('research/math-imports.json').toString()); receipt.files[0].sha256 = driftHash(body); f.save('research/math-imports.json', receipt);
        }
        assert.throws(() => appendDriftView(f.repo, 'demo'), undefined, mode);
    }
    const unmentioned = clarifiedFixture(t, true);
    assert.throws(() => appendDriftView(unmentioned.repo, 'demo'), /unmentioned/);
});

function secondGeneration(t: any, withOwner = true) {
    const f = fixture(t, 7), owner = withOwner ? ownerBase(f, true, 4) : null;
    const baseReview = 'research/base-disposition-review.json';
    if (owner) f.save(baseReview, { version: 1, run: 'demo', reviewer: '/root', kind: 'historical-scoped-planning-dispositions', owner_resolution_sha256: owner ? driftHash(f.read('research/demo-drift-owner-resolutions.json')) : null, scope_ledger_sha256: driftHash(f.read('research/demo-scope-ledger.json')), prior_plan_sha256: driftHash(f.read('research/prior-plan.json')), pages: owner?.resolutions.map((r: any) => r.page) ?? [], reason: 'Root distinguishes exact original 55-pair planning dispositions from the seven new prerequisite subjects; full native authoring remains required.', historical_current_inputs: ['research/plan-spec.json'], evidence: [{ path: 'research/source-dossier.md', sha256: driftHash(f.read('research/source-dossier.md')) }] });
    const first = appendFrontier({ ...f.options, ...(owner ? {baseDispositionReview:baseReview} : {}) });
    f.review(first); f.native(first); applyAppendReview(f.repo, 'demo', 1, { invoke: f.invoke });
    const state = JSON.parse(f.read('.physics-autopilot/demo/state.json').toString());
    for (const kind of ['drift', 'apply']) state.stages[`1-append-${kind}-1`] = { enteredAt: AT, doneAt: AT, gatesPassedAt: AT, fixRounds: 0 };
    state.dispatches['1-append-apply-1:drift-append-apply-1'] = { stage: '1-append-apply-1', role: 'tool', label: 'drift-append-apply-1', covers: ['append-1'], attempts: 1, startedAt: AT, endedAt: AT, lastExitOk: true };
    f.save('.physics-autopilot/demo/state.json', state);
    for (let batch = 1; batch <= 62; batch++) if (!existsSync(join(f.repo, `research/demo-dispatch/beta-batch-${batch}.result.json`))) f.save(`research/demo-dispatch/beta-batch-${batch}.result.json`, { run: 'demo', role: 'beta', label: `batch-${batch}`, covers: [String(batch)], ok: true, attempt: 1 });
    f.save('research/demo-dispatch/tool-drift-append-apply-1.result.json', { run: 'demo', role: 'tool', label: 'drift-append-apply-1', ok: true, covers: ['append-1'], attempt: 1 });
    // Legitimate old and first-supplement authoring BEFORE the next drained boundary.
    f.save('items/def-old-55-0.md', f.read('items/def-old-55-0.md').toString() + '\nCurrent source after legitimate first-generation authoring.\n');
    const old = JSON.parse(f.read('research/demo-batch-55.pages.json').toString()); old[0].items[0].statement = 'A legitimate current repaired old claim.'; f.save('research/demo-batch-55.pages.json', old);
    for (let b = 56; b <= 62; b++) {
        const rows = JSON.parse(f.read(`research/demo-batch-${b}.pages.json`).toString());
        for (const page of rows) { page.items = [{ id: 'def-authored-' + page.id, kind: 'definition', domain: 'mathematics', statement: 'Current independently authored declaration.', deps: [] }]; f.save('items/' + page.items[0].id + '.md', `---\nid: ${page.items[0].id}\nkind: definition\ndomain: mathematics\nstatus: draft\ndeps: []\n---\n## Definition\nCurrent authored prerequisite.\n`); }
        f.save(`research/demo-batch-${b}.pages.json`, rows);
    }
    // Completed processes retain actual deliverables; escalated fixture rows do
    // not pretend that authoring coverage is independent mathematical acceptance.
    for (let batch = 1; batch <= 62; batch++) {
        const rows = JSON.parse(f.read(`research/demo-batch-${batch}.pages.json`).toString());
        f.save(`research/demo-batch-${batch}.coverage.json`, { pages: [] });
        f.save(`research/demo-batch-${batch}.proof-contracts.json`, {});
        for (const page of rows) {
            f.save(`library/math/${page.id}.md`, `---\npage: ${page.id}\nstatus: draft\nitems: ${JSON.stringify(page.items.map((i: any) => i.id))}\n---\n`);
            for (const item of page.items) {
                if (!existsSync(join(f.repo, 'items/' + item.id + '.md'))) f.save('items/' + item.id + '.md', `---\nid: ${item.id}\nkind: definition\ndomain: mathematics\nstatus: draft\ndeps: []\n---\n## Definition\nCurrent authored source.\n`);
                f.save(`research/demo-step1-${item.id}.json`, { version: 1, run: 'demo', item: item.id, decision: 'escalated', owner: false, reason: 'Fixture author process completed; scientific review remains separate.', dependencies: [] });
            }
        }
    }
    const current = JSON.parse(f.read('research/plan-spec.json').toString());
    f.save('research/prior-plan-2.json', current);
    const pairs = Array.from({ length: 5 }, (_, i) => 'analytic-' + i);
    for (const [index, id] of pairs.entries()) for (const kind of ['A', 'B']) current.pages.push({ id: kind === 'A' ? id : id + '-examples', title: id, kind, category: 'math', library: 'mathematics', companion: kind === 'A' ? id + '-examples' : id, order: 102.9 + index / 100, requires: kind === 'A' ? ['new-a'] : [id], items: [{ id: 'def-' + id + (kind === 'B' ? '-example' : ''), kind: 'definition', domain: 'mathematics', statement: 'Exact new analytic declaration awaiting complete native authoring.', deps: [] }] });
    f.save('research/plan-spec.json', current);
    f.save('research/second-source-dossier.md', 'Actual new analytic prerequisite source and scope review; it is not accepted native authoring.');
    const reviewPath = 'research/second-planning-disposition-review.json';
    const priorFrontier = Array.from({ length: 62 }, (_, i) => { const path = `research/demo-batch-${i + 1}.pages.json`; return { path, sha256: driftHash(f.read(path)) }; });
    const review = { version: 1, run: 'demo', generation: 2, prior_frontier_sha256: driftHash(JSON.stringify(priorFrontier)), prior_registry_sha256: driftHash(f.read('research/demo-frontier-appends.json')), reviewer: '/root', kind: 'historical-scoped-planning-dispositions', owner_resolution_sha256: owner ? driftHash(f.read('research/demo-drift-owner-resolutions.json')) : null, scope_ledger_sha256: driftHash(f.read('research/demo-scope-ledger.json')), prior_plan_sha256: driftHash(f.read('research/prior-plan-2.json')), pages: owner?.resolutions.map((r: any) => r.page) ?? [], reason: 'Root reviewed the exact current 62-pair context and five new analytic declarations; original 55 and prior seven Alpha coverage remain separately historical.', historical_current_inputs: ['research/plan-spec.json'], evidence: [{ path: 'research/second-source-dossier.md', sha256: driftHash(f.read('research/second-source-dossier.md')) }] };
    f.save(reviewPath, review);
    return { ...f, first, owner, reviewPath, review2: review, options2: { ...f.options, pairs, priorPlan: 'research/prior-plan-2.json', sourceEvidence: ['research/second-source-dossier.md'], baseDispositionReview: owner ? reviewPath : undefined } };
}
test('62 -> 67 authenticates original four historical dispositions and first seven native reviews while preserving current 62 bytes', async t => {
    const f = secondGeneration(t);
    const paths = [...Array.from({ length: 62 }, (_, i) => `research/demo-batch-${i + 1}.pages.json`), ...Array.from({ length: 62 }, (_, i) => `research/demo-beta-${i + 1}.task.md`), ...readdirSync(join(f.repo, 'items')).map(n => 'items/' + n), ...readdirSync(join(f.repo, 'research/demo-dispatch')).map(n => 'research/demo-dispatch/' + n), f.first.report, f.first.task, `${f.first.archive}/review-applied.json`, 'research/demo-drift-owner-resolutions.json'];
    const before = paths.map(path => [path, f.read(path)] as const), state = f.read('.physics-autopilot/demo/state.json');
    const second = appendFrontier(f.options2);
    assert.deepEqual(second.batches, ['63', '64', '65', '66', '67']);
    assert.equal(second.baseResolution, null, 'original overlay is not rebound to62');
    assert.ok(second.priorReviewInputs.some((r: any) => r.path === f.first.report));
    assert.ok(second.priorReviewInputs.some((r: any) => r.path === 'research/live-current.md'));
    assert.deepEqual(f.read('.physics-autopilot/demo/state.json'), state);
    assert.equal(appendBaseContext(f.repo, 'demo').frontier.length, 110);
    assert.equal(validateDriftOwnerResolutions(f.repo, 'demo').resolved.size, 4);
    assert.ok(f.read(second.task).toString().includes('the 10 new canonical plan rows'));
    f.review(second);
    assert.throws(() => applyAppendReview(f.repo, 'demo', 2, { invoke: f.invoke }), /ENOENT/);
    f.native(second); const nativeState = f.read('.physics-autopilot/demo/state.json');
    applyAppendReview(f.repo, 'demo', 2, { invoke: f.invoke });
    assert.deepEqual(f.read('.physics-autopilot/demo/state.json'), nativeState);
    for (const [path, bytes] of before) assert.deepEqual(f.read(path), bytes, path);
    assert.equal([...appendDriftView(f.repo, 'demo').text.matchAll(/^### /gm)].length, 67);
    const graph = JSON.parse(f.read('research/demo-batch-dependency-levels.json').toString()); assert.equal(graph.batches.length, 67); assert.deepEqual(graph.batches.find((b: any) => b.batch === '3').requires, ['2']);
    const mod = await import('../stages/mathlib.mts'); const ctx: any = { repo: f.repo, run: 'demo', dispatchDir: join(f.repo, 'research/demo-dispatch'), config: { stateDir: f.stateDir }, doctor: true };
    const stages = mod.stagesForRun(ctx); assert.equal(stages.find((s: any) => s.id === '1-append-drift-2').modelProfile, 'gpt-6-luna-max'); assert.deepEqual(stages.find((s: any) => s.id === '1-scaffold').units(ctx).slice(-5), ['63', '64', '65', '66', '67']);
    const { State, statePath } = await import('../src/state.mts'), { Executor } = await import('../src/executor.mts');
    // Remove second fixture-native receipts to inspect real saved prefix selection.
    const secondResult = f.read('research/demo-dispatch/alpha-drift-review-append-2.result.json');
    rmSync(join(f.repo, 'research/demo-dispatch/alpha-drift-review-append-2.result.json'));
    const native = new State(statePath(f.stateDir)).init('demo');
    const executor = new Executor({ config: { ...ctx.config, repo: f.repo, run: 'demo', dispatchDir: ctx.dispatchDir, coversMap: {}, concurrency: 20, globalConcurrency: 20 } as any, stages: stages.filter((s: any) => s.id !== '1-baseline'), state: native, adapter: {} as any, reporter: { notify() {}, write() {} } as any });
    assert.equal(executor.currentStage().stage?.id, '1-append-drift-2');
    const scaffold = stages.find((s: any) => s.id === '1-scaffold');
    const covered = executor.unitsComplete(scaffold);
    assert.equal(covered.size, 62);
    for (let batch = 1; batch <= 62; batch++) assert.ok(covered.has(String(batch)));
    for (let batch = 63; batch <= 67; batch++) assert.ok(!covered.has(String(batch)));
    f.save('research/demo-dispatch/alpha-drift-review-append-2.result.json', secondResult.toString());
    f.save('items/def-old-55-0.md', f.read('items/def-old-55-0.md').toString() + '\nLegitimate later source authoring after second application.\n');
    assert.doesNotThrow(() => appendDriftView(f.repo, 'demo'));
});
test('second generation rejects stale previous evidence, live obligations, incomplete native prefix and missing current Root review', t => {
    for (const mode of ['archive', 'report', 'coverage', 'result', 'applied', 'prompt', 'live', 'stage', 'owner', 'registry', 'frontier', 'review-missing', 'reclassification', 'plan', 'writer', 'controller', 'unpaused', 'later']) {
        const f = secondGeneration(t);
        if (mode === 'archive') f.save(f.first.baseResolution.inputPaths['research/demo-batch-55.pages.json'].path, 'Changed archived bytes');
        if (mode === 'report') f.save(f.first.report, f.read(f.first.report).toString() + 'Changed prior native report.');
        if (mode === 'result') f.save('research/demo-dispatch/alpha-drift-review-append-1.result.json', '{}');
        if (mode === 'coverage') f.save(f.first.report, f.read(f.first.report).toString().split('### new-g')[0]);
        if (mode === 'applied') { const path = `${f.first.archive}/review-applied.json`, row = JSON.parse(f.read(path).toString()); row.reportSha256 = '0'.repeat(64); f.save(path, row); }
        if (mode === 'prompt') f.save('research/demo-dispatch/alpha-drift-review-append-1.attempt-1.prompt.md', 'Changed native prompt.');
        if (mode === 'live') f.save('research/live-current.md', 'Changed expressly live evidence.');
        if (mode === 'stage') { const s = JSON.parse(f.read('.physics-autopilot/demo/state.json').toString()); s.stages['1-append-apply-1'].gatesPassedAt = null; f.save('.physics-autopilot/demo/state.json', s); }
        if (mode === 'owner' || mode === 'registry' || mode === 'frontier') f.save(f.reviewPath, { ...f.review2, ...(mode === 'owner' ? { reviewer: 'alpha' } : mode === 'frontier' ? { prior_frontier_sha256: '0'.repeat(64) } : { prior_registry_sha256: '0'.repeat(64) }) });
        if (mode === 'reclassification') f.save(f.reviewPath, { ...f.review2, historical_current_inputs: [...f.review2.historical_current_inputs, 'research/live-current.md'] });
        if (mode === 'plan') { const plan = JSON.parse(f.read('research/plan-spec.json').toString()); plan.pages[0].requires = ['old-2']; f.save('research/plan-spec.json', plan); }
        if (mode === 'review-missing') delete f.options2.baseDispositionReview;
        if (mode === 'writer') f.options2.scan = () => ({ controller: [], preflight: [], writer: [123] });
        if (mode === 'controller') f.save('.physics-autopilot/demo/.controller.lock', { pid: process.pid });
        if (mode === 'later') f.save('.physics-autopilot/demo/state.json', { ...f.state, stage: '2-scope-review' });
        if (mode === 'unpaused') { const s = JSON.parse(f.read('.physics-autopilot/demo/state.json').toString()); s.paused = false; f.save('.physics-autopilot/demo/state.json', s); }
        assert.throws(() => appendFrontier(f.options2), undefined, mode);
        assert.equal(existsSync(join(f.repo, 'research/demo-batch-63.pages.json')), false);
    }
});
test('second transaction freezes current authored source, manifest and explicit live inputs only through its application', t => {
    for (const target of ['items/def-old-55-0.md', 'items/def-authored-new-a.md', 'research/demo-batch-55.pages.json', 'research/demo-batch-62.pages.json', 'research/live-current.md']) {
        const f = secondGeneration(t), second = appendFrontier(f.options2); f.review(second); f.native(second);
        f.save(target, f.read(target).toString() + '\nUnauthorized concurrent change.\n');
        assert.throws(() => applyAppendReview(f.repo, 'demo', 2, { invoke: f.invoke }), undefined, target);
    }
});

test('a later append without original blocked sections preserves an absent overlay instead of inventing owner coverage', t => {
    const f = secondGeneration(t, false), second = appendFrontier(f.options2);
    assert.ok(second.priorReviewInputs.some((r: any) => r.path === 'research/demo-drift-owner-resolutions.json' && r.sha256 === null));
    f.review(second); f.native(second); applyAppendReview(f.repo, 'demo', 2, { invoke: f.invoke });
    assert.equal([...appendDriftView(f.repo, 'demo').text.matchAll(/^### /gm)].length, 67);
    assert.equal(existsSync(join(f.repo, 'research/demo-drift-owner-resolutions.json')), false);
});
