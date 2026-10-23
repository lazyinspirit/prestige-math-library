// Physics-only immutable append evidence. Original native drift bytes stay intact.
import { existsSync, readFileSync, readdirSync, lstatSync, realpathSync } from 'node:fs';
import { join, resolve, relative, isAbsolute } from 'node:path';
import { createHash } from 'node:crypto';
import { importedPlanPage } from './imported-plan-pages.mjs';
import { markdownFiles } from './physics-content.mjs';
export const appendHash = bytes => createHash('sha256').update(bytes).digest('hex');
const fail = why => { throw Error(`physics frontier append: ${why}`); };
export const appendJSON = path => JSON.parse(readFileSync(path, 'utf8'));
export function appendPath(root, path) {
    if (typeof path !== 'string' || isAbsolute(path) || path.includes('\\') || path.split('/').includes('..') || !path.startsWith('research/'))
        fail('unsafe evidence path');
    const absolute = resolve(root, path);
    if (relative(realpathSync(root), realpathSync(absolute)).startsWith('..') || !lstatSync(absolute).isFile() || lstatSync(absolute).isSymbolicLink())
        fail(`nonregular evidence: ${path}`);
    return absolute;
}
export function appendRegistry(root, run) {
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(run))
        fail('invalid run');
    const path = `research/${run}-frontier-appends.json`;
    if (!existsSync(join(root, path)))
        return { version: 1, run, appends: [] };
    const registry = appendJSON(appendPath(root, path));
    if (registry.version !== 1 || registry.run !== run || !Array.isArray(registry.appends))
        fail('invalid registry');
    const seen = new Set();
    for (const [i, e] of registry.appends.entries()) {
        if (e.number !== i + 1 || e.run !== run || e.archive !== `research/${run}-frontier-append-${e.number}`
            || e.report !== `research/${run}-alpha-step1-append-${e.number}-drift.md`
            || e.task !== `research/${run}-alpha-step1-append-${e.number}-drift.task.md`
            || !Array.isArray(e.pairs) || !e.pairs.length || !Array.isArray(e.batches) || e.batches.length !== e.pairs.length
            || e.pairs.some(id => !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id) || seen.has(id))
            || new Set(e.pairs).size !== e.pairs.length || e.batches.some(id => !/^[1-9]\d*$/.test(id))
            || !Array.isArray(e.newPages) || e.newPages.length !== 2 * e.pairs.length
            || new Set(e.newPages).size !== e.newPages.length)
            fail('invalid append generation');
        e.pairs.forEach(id => seen.add(id));
        const prepared = appendJSON(appendPath(root, `${e.archive}/prepared.json`));
        if (JSON.stringify(prepared) !== JSON.stringify(e))
            fail('registry differs from immutable preparation');
        if (JSON.stringify(appendJSON(appendPath(root, `${e.archive}/new-pages.json`))) !== JSON.stringify(e.newPages))
            fail('changed appended planning selector');
        const committed = appendJSON(appendPath(root, `${e.archive}/committed.json`));
        if (committed.preparedSha256 !== appendHash(readFileSync(appendPath(root, `${e.archive}/prepared.json`))))
            fail('uncommitted preparation');
    }
    return registry;
}
export function boundAppendFile(root, ref) {
    const path = appendPath(root, ref.path);
    if (!/^[a-f0-9]{64}$/.test(ref.sha256) || appendHash(readFileSync(path)) !== ref.sha256)
        fail(`changed bound input: ${ref.path}`);
    return path;
}
export function appendReview(root, run, number, { requireNative = false } = {}) {
    const entry = appendRegistry(root, run).appends.find(e => e.number === number);
    if (!entry)
        fail('unknown append generation');
    for (const ref of entry.fixedInputs)
        boundAppendFile(root, ref);
    const text = readFileSync(appendPath(root, entry.report), 'utf8');
    const heads = [...text.matchAll(/^###\s+`?([a-z0-9]+(?:-[a-z0-9]+)*)`?\s*$/gm)];
    if (heads.length !== entry.pairs.length || new Set(heads.map(h => h[1])).size !== entry.pairs.length
        || heads.some(h => !entry.pairs.includes(h[1])))
        fail('review must cover exactly the new A pages once');
    const blocked = [];
    for (const [i, h] of heads.entries()) {
        const section = text.slice(h.index + h[0].length, heads[i + 1]?.index ?? text.length);
        const verdicts = [...section.matchAll(/^VERDICT:\s*(\S+)(.*)$/gm)];
        if (verdicts.length !== 1 || !['no-drift', 'drift-applied', 'drift-reordered', 'drift-blocked'].includes(verdicts[0][1]))
            fail(`missing, blocked or invalid verdict: ${h[1]}`);
        if (verdicts[0][1] === 'drift-blocked')
            blocked.push({ page: h[1], sha256: appendHash(text.slice(h.index, heads[i + 1]?.index ?? text.length)) });
        if (section.replace(verdicts[0][0], '').trim().length < 40)
            fail(`missing substantive prerequisite review: ${h[1]}`);
    }
    const ownerPath = `research/${run}-append-${number}-drift-owner-resolutions.json`;
    if (blocked.length && !existsSync(join(root, ownerPath)))
        fail('blocked supplemental review requires actual Root resolution');
    if (requireNative || blocked.length) {
        const path = `research/${run}-dispatch/alpha-drift-review-append-${number}.result.json`;
        const result = appendJSON(appendPath(root, path));
        if (result.run !== run || result.role !== 'alpha' || result.label !== `drift-review-append-${number}`
            || result.ok !== true || result.timed_out === true || result.exit_code !== 0 || result.written_by === 'autopilot'
            || !Number.isInteger(result.attempt) || result.attempt < 1 || result.covers?.length !== 1 || result.covers[0] !== `append-${number}`
            || !Number.isFinite(Date.parse(result.started_at)) || Date.parse(result.started_at) < Date.parse(entry.at)
            || !Number.isFinite(Date.parse(result.ended_at)) || Date.parse(result.ended_at) < Date.parse(result.started_at))
            fail('fresh genuine native supplemental Alpha result required');
        if(typeof entry.stateDir!=='string'||entry.stateDir.split('/').includes('..')||isAbsolute(entry.stateDir))fail('invalid native state identity');
        const state=appendJSON(join(root,entry.stateDir,'state.json'));
        const dispatch=state.dispatches?.[`1-append-drift-${number}:drift-review-append-${number}`];
        if(state.run!==run||!dispatch||dispatch.stage!==`1-append-drift-${number}`||dispatch.role!=='alpha'
          ||dispatch.label!==result.label||dispatch.attempts!==result.attempt||dispatch.lastExitOk!==true
          ||dispatch.covers?.length!==1||dispatch.covers[0]!==`append-${number}`
          ||!Number.isFinite(Date.parse(dispatch.startedAt))||!Number.isFinite(Date.parse(dispatch.endedAt))
          ||Date.parse(dispatch.startedAt)>Date.parse(result.started_at)||Date.parse(dispatch.endedAt)<Date.parse(result.ended_at))fail('matching completed native Alpha dispatch required');
        const prompt=`research/${run}-dispatch/alpha-drift-review-append-${number}.attempt-${result.attempt}.prompt.md`;
        if(typeof result.prompt!=='string'||resolve(root,result.prompt)!==resolve(root,prompt)||!readFileSync(appendPath(root,prompt),'utf8').trim())fail('actual native supplemental prompt required');
        const attempt = path.replace('.result.json', `.attempt-${result.attempt}.result.json`);
        if (appendHash(readFileSync(appendPath(root, attempt))) !== appendHash(readFileSync(appendPath(root, path))))
            fail('native attempt/current result differ');
        const native = { path, sha256: appendHash(readFileSync(join(root, path))) };
        const ownerInputs = [], resolved = [];
        if (blocked.length) {
            const owner = appendJSON(appendPath(root, ownerPath));
            if (owner.version !== 1 || owner.run !== run || owner.generation !== number || owner.authorizing_owner !== '/root'
                || owner.report?.path !== entry.report || owner.report?.sha256 !== appendHash(text)
                || owner.native_result?.path !== path || owner.native_result?.sha256 !== native.sha256
                || !Array.isArray(owner.resolutions) || owner.resolutions.length !== blocked.length || !owner.inputs || typeof owner.inputs !== 'object')
                fail('invalid supplemental owner authority');
            for (const [input, sha256] of Object.entries(owner.inputs)) {
                boundAppendFile(root, { path: input, sha256 });
                ownerInputs.push(input);
            }
            for (const ref of [owner.report, owner.native_result])
                if (owner.inputs[ref.path] !== ref.sha256)
                    fail('unbound supplemental owner authority');
            const spec = appendJSON(join(root, 'research/plan-spec.json'));
            for (const row of owner.resolutions) {
                const section = blocked.find(b => b.page === row.page);
                const page = spec.pages.find(p => p.id === row.page);
                if (!section || section.sha256 !== row.section_sha256 || resolved.includes(row.page) || row.decision !== 'resolved'
                    || typeof row.reason !== 'string' || row.reason.trim().length < 40 || !Array.isArray(row.evidence) || !row.evidence.length
                    || row.evidence.some(p => !Object.hasOwn(owner.inputs, p) || [path, entry.report].includes(p))
                    || JSON.stringify(row.requires) !== JSON.stringify(page?.requires ?? []))
                    fail('unresolved or stale supplemental owner disposition');
                resolved.push(row.page);
            }
            ownerInputs.push(ownerPath);
        }
        return { entry, text, native, attempt, prompt, ownerInputs, resolved };
    }
    return { entry, text };
}
// The old blocked-section overlay authenticates its original 55-page frontier
// and plan, while the ordinary current drift check checks the complete extended frontier.
export function appendBaseContext(root, run) {
    const entries = appendRegistry(root, run).appends;
    if (!entries.length)
        return null;
    const first = entries[0];
    const normalize = rows => rows.map(({ id, kind, batch }) => ({ id, kind, batch: String(batch) })).sort((a, b) => a.id.localeCompare(b.id));
    const base = appendJSON(boundAppendFile(root, first.baseLedger));
    const expected = normalize([...base.pages, ...entries.flatMap(e => e.newOwnership)]);
    const ledger = appendJSON(join(root, `research/${run}-scope-ledger.json`));
    const current = readdirSync(join(root, 'research')).filter(n => new RegExp(`^${run}-batch-[1-9]\\d*\\.pages\\.json$`).test(n)).flatMap(n => appendJSON(join(root, 'research', n)).map(p => ({ ...p, batch: n.match(/-batch-(\d+)/)[1] })));
    if (JSON.stringify(normalize(ledger.pages)) !== JSON.stringify(expected) || JSON.stringify(normalize(current)) !== JSON.stringify(expected))
        fail('current append ownership/ledger differs from authenticated extension');
    const inputPaths = {};
    if (first.baseResolution) {
        boundAppendFile(root, first.baseResolution.receipt);
        if (first.baseResolution.review)
            boundAppendFile(root, first.baseResolution.review);
        for (const [input, ref] of Object.entries(first.baseResolution.inputPaths))
            inputPaths[input] = relative(root, boundAppendFile(root, ref));
    }
    return { inputPaths, historicalCurrentInputs: first.baseResolution?.historicalCurrentInputs ?? [], frontier: appendJSON(boundAppendFile(root, first.baseLedger)).pages.map(({ id, kind, batch }) => ({ id, kind, batch: String(batch) })).sort((a, b) => a.id.localeCompare(b.id)),
        specPath: boundAppendFile(root, first.basePlan) };
}
// Resolve only explicitly named drift targets; this never extends authored scope.
export function resolveDriftTarget(root, id, pages) {
    if (pages.has(id)) return { page: pages.get(id), imported: false, inputs: [] };
    const receiptPath = 'research/math-imports.json';
    const receipt = appendJSON(join(root, receiptPath));
    const copies = markdownFiles(join(root, 'library')).filter(p => p.endsWith(`/${id}.md`))
        .map(p => relative(join(root, 'library'), p).split('\\').join('/'));
    const page = importedPlanPage(root, id, receipt, copies);
    if (!page) fail(`unresolved named drift target: ${id}`);
    return { page, imported: true, inputs: [receiptPath, ...copies.map(p => 'library/' + p)] };
}
function clarifiedAppendView(root, run, entry, review, appliedPath) {
    const path = `research/${run}-append-${entry.number}-drift-format-clarification.json`;
    if (!existsSync(join(root, path))) return { text: review.text, inputs: [] };
    const receipt = appendJSON(appendPath(root, path));
    if (receipt.version !== 1 || receipt.run !== run || receipt.generation !== entry.number
        || receipt.authorizing_owner !== '/root' || receipt.kind !== 'supplemental-verdict-format-clarification'
        || receipt.report?.path !== entry.report || receipt.report?.sha256 !== appendHash(review.text)
        || receipt.native_result?.path !== review.native.path || receipt.native_result?.sha256 !== review.native.sha256
        || receipt.applied_receipt?.path !== appliedPath || !Array.isArray(receipt.clarifications) || !receipt.clarifications.length)
        fail('invalid supplemental format clarification authority');
    for (const ref of [receipt.report, receipt.native_result, receipt.applied_receipt]) boundAppendFile(root, ref);
    const applied = appendJSON(join(root, appliedPath));
    const spec = appendJSON(join(root, 'research/plan-spec.json'));
    const pages = new Map(spec.pages.map(p => [p.id, p]));
    const heads = [...review.text.matchAll(/^###\s+`?([a-z0-9]+(?:-[a-z0-9]+)*)`?\s*$/gm)];
    const replacements = [], seen = new Set(), inputs = [path, receipt.applied_receipt.path];
    for (const row of receipt.clarifications) {
        const index = heads.findIndex(h => h[1] === row.page), head = heads[index];
        if (!head || seen.has(row.page) || !entry.pairs.includes(row.page) || row.verdict !== 'drift-applied'
            || typeof row.reason !== 'string' || row.reason.trim().length < 40 || !Array.isArray(row.added_edges) || !row.added_edges.length)
            fail('invalid scoped supplemental format clarification');
        seen.add(row.page);
        const end = heads[index + 1]?.index ?? review.text.length;
        const section = review.text.slice(head.index, end);
        if (row.section_sha256 !== appendHash(section) || !/^VERDICT:[ \t]*drift-applied[ \t]*$/m.test(section))
            fail('clarification requires exact original bare drift-applied section');
        const archived = appendJSON(boundAppendFile(root, row.applied_manifest));
        const ownership = entry.newOwnership.find(p => p.id === row.page);
        const manifestPath = `research/${run}-batch-${ownership?.batch}.pages.json`;
        const recorded = applied.newManifests?.find(p => p.path === manifestPath);
        if (!recorded || row.applied_manifest.sha256 !== recorded.sha256 || !Array.isArray(archived))
            fail('clarification archive is not the actual applied manifest');
        inputs.push(row.applied_manifest.path);
        const atApply = archived.filter(p => p.id === row.page);
        const before = entry.newDeclarations.filter(p => p.id === row.page);
        const live = appendJSON(join(root, manifestPath)).filter(p => p.id === row.page);
        if (atApply.length !== 1 || before.length !== 1 || live.length !== 1) fail('ambiguous clarified page identity');
        const added = (atApply[0].requires ?? []).filter(id => !(before[0].requires ?? []).includes(id));
        const targets = row.added_edges.map(e => e.target);
        if (new Set(targets).size !== targets.length || JSON.stringify([...targets].sort()) !== JSON.stringify([...added].sort()))
            fail('clarification must name exactly the actual applied added edges');
        const detail = row.added_edges.map(edge => {
            if (!section.includes('`' + edge.target + '`')) fail('clarified target is unmentioned in original section');
            const current = pages.get(row.page);
            if (!(current?.requires ?? []).includes(edge.target) || !(live[0].requires ?? []).includes(edge.target))
                fail('clarified added edge missing from current plan/manifest');
            const resolved = resolveDriftTarget(root, edge.target, pages), order = resolved.page.order;
            inputs.push(...resolved.inputs);
            if (edge.order !== (order === undefined && resolved.imported ? null : order)
                || (edge.order !== null && (!Number.isFinite(edge.order) || edge.order < 0 || edge.order >= current.order)))
                fail('clarified order contradicts actual known prerequisite order');
            return '`' + edge.target + '` (order ' + (edge.order === null ? 'unspecified' : edge.order) + ')';
        }).join(', ');
        replacements.push({ start: head.index, end, section: section.replace(/^VERDICT:[ \t]*drift-applied[ \t]*$/m,
            `<!-- Root format clarification: ${path}; raw native section unchanged -->\nVERDICT: drift-applied — ${detail}`) });
    }
    let text = review.text;
    for (const row of replacements.sort((a, b) => b.start - a.start)) text = text.slice(0, row.start) + row.section + text.slice(row.end);
    return { text, inputs };
}
export function appendDriftView(root, run) {
    const path = `research/${run}-alpha-step1-drift.md`;
    let text = readFileSync(join(root, path), 'utf8');
    const inputs = [path], resolved = [];
    for (const entry of appendRegistry(root, run).appends) {
        const appliedPath = `${entry.archive}/review-applied.json`;
        if (!existsSync(join(root, appliedPath)))
            fail(`supplemental review ${entry.number} not applied`);
        const applied = appendJSON(appendPath(root, appliedPath));
        const review = appendReview(root, run, entry.number, { requireNative: true });
        for (const ref of applied.ownerInputs ?? [])
            boundAppendFile(root, ref);
        if (applied.reportSha256 !== appendHash(review.text) || applied.nativeSha256 !== review.native.sha256 || applied.promptSha256 !== appendHash(readFileSync(join(root,review.prompt))))
            fail('applied review currency changed');
        resolved.push(...review.resolved);
        const clarified = clarifiedAppendView(root, run, entry, review, appliedPath);
        text += `\n\n<!-- separately attributed native supplemental review ${entry.number} -->\n${clarified.text}`;
        inputs.push(...clarified.inputs);
        inputs.push(appliedPath, entry.report, review.native.path, review.attempt, review.prompt, `research/${run}-frontier-appends.json`, `${entry.archive}/prepared.json`, `${entry.archive}/committed.json`, ...entry.fixedInputs.map(r => r.path), ...review.ownerInputs, ...Object.values(entry.baseResolution?.inputPaths ?? {}).map(r => r.path));
    }
    return { text, inputs: [...new Set(inputs)], resolved };
}
