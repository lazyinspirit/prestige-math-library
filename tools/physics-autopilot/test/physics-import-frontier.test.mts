import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, rmSync, chmodSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { spawnSync } from 'node:child_process';
const physicsCheck = new URL('../../physics-support/physics-check.mjs', import.meta.url).pathname;
import { importMathematics, verifyMathematicsImports } from '../../physics-support/physics-imports.mjs';
function fixture(t: any) {
 const dir = mkdtempSync(join(tmpdir(), 'physics-import-scope-'));
 t.after(() => rmSync(dir, { recursive: true, force: true }));
 const root = join(dir, 'physics'), source = join(dir, 'math');
 for (const base of [root, source]) for (const path of ['items', 'library/math', 'research']) mkdirSync(join(base, path), { recursive: true });
 const item = (id: string, deps: string[] = [], aliases: string[] = []) => `---\nid: ${id}\nkind: theorem\nstatus: published\ndeps: ${JSON.stringify(deps)}\naliases: ${JSON.stringify(aliases)}\n---\n## Statement\nPinned claim.\n`;
 writeFileSync(join(source, 'items/thm-supplier.md'), item('thm-supplier', ['thm-deep'], ['supplier-alias']));
 writeFileSync(join(source, 'items/thm-deep.md'), item('thm-deep'));
 writeFileSync(join(source, 'items/thm-unrelated.md'), item('thm-unrelated'));
 writeFileSync(join(source, 'library/math/supplier.md'), '---\npage: supplier\nstatus: published\nitems: [thm-supplier, thm-deep]\n---\n');
 writeFileSync(join(source, 'library/math/unrelated.md'), '---\npage: unrelated\nstatus: published\nitems: [thm-unrelated]\n---\n');
 writeFileSync(join(source, 'research/b-leaf-legacy-allowlist.json'), JSON.stringify({ version: 1, edges: [] }));
 importMathematics(root, source);
 const pages: any[] = [{ id: 'selected', category: 'math', kind: 'A', order: 2, library: 'mathematics', requires: [], items: [{ id: 'thm-local', kind: 'theorem', domain: 'mathematics', deps: ['supplier-alias'], dependency_roles: { 'supplier-alias': 'mathematical-premise' } }] }];
 const save = () => {
  writeFileSync(join(root, 'research/run-test-batch-1.pages.json'), JSON.stringify(pages));
  writeFileSync(join(root, 'research/plan-spec.json'), JSON.stringify({ pages: [{ ...pages[0], items: [] }] }));
 };
 save();
 const native = () => spawnSync(process.execPath, [physicsCheck, '--root', root, '--run', 'run-test', '--plan', 'research/plan-spec.json', '--json'], { cwd: root, encoding: 'utf8' });
 return { root, source, item, pages, save, native, verify: () => verifyMathematicsImports(root, { run: 'run-test', planning: true }) };
}
test('unrelated changed originals are excluded; standalone verification and every snapshot stay strict', t => {
 const f = fixture(t); assert.ok(f.verify());
 const path = 'items/thm-unrelated.md';
 writeFileSync(join(f.source, path), f.item('thm-unrelated') + 'Unrelated edit.\n');
 assert.ok(f.verify()); assert.throws(() => verifyMathematicsImports(f.root), /import changed/);
 chmodSync(join(f.root, path), 0o644); writeFileSync(join(f.root, path), f.item('thm-unrelated') + 'Local alteration.\n'); assert.throws(f.verify, /import changed/);
});
test('alias-resolved transitive supplier raw drift, withdrawals and missing originals hold', t => {
 const f = fixture(t), path = join(f.source, 'items/thm-deep.md'), original = readFileSync(path, 'utf8');
 writeFileSync(path, original + 'Changed proof.\n'); assert.throws(f.verify, /import changed/);
 writeFileSync(path, original.replace('status: published', 'status: draft')); assert.throws(f.verify, /import changed|withdrawn/);
 rmSync(path); assert.throws(f.verify, /identity.*unknown|missing/);
});
test('actual authored supplier edges survive omission from the current scaffold', t => {
 const f = fixture(t); f.pages[0].items[0].deps = []; f.save();
 writeFileSync(join(f.root, 'items/thm-local.md'), f.item('thm-local', ['thm-supplier']).replace('status: published', 'status: draft').replace('kind: theorem', 'kind: theorem\ndomain: mathematics'));
 writeFileSync(join(f.source, 'items/thm-deep.md'), f.item('thm-deep') + 'Relevant edit.\n'); assert.throws(f.verify, /import changed/);
});
test('new originals cannot ambiguate or steal a used supplier alias or move its home', t => {
 const f = fixture(t), path = join(f.source, 'items/thm-new.md');
 writeFileSync(path, f.item('thm-new', [], ['supplier-alias'])); assert.throws(f.verify, /identity.*ambiguous/); rmSync(path);
 writeFileSync(join(f.source, 'items/supplier-alias.md'), f.item('supplier-alias')); assert.throws(f.verify, /identity changed/); rmSync(join(f.source, 'items/supplier-alias.md'));
 writeFileSync(join(f.source, 'library/math/new-home.md'), '---\npage: new-home\nstatus: published\nitems: [thm-supplier]\n---\n'); assert.throws(f.verify, /source home changed/);
});
test('planning permits nonempty pages with empty items; invalid or unknown scopes never pass', t => {
 const f = fixture(t); f.pages[0].items = []; f.save();
 writeFileSync(join(f.source, 'items/thm-unrelated.md'), f.item('thm-unrelated') + 'Unrelated edit.\n'); assert.ok(f.verify());
 assert.throws(() => verifyMathematicsImports(f.root, { run: 'run-test' }), /Invalid or empty current page/);
 f.pages[0].items = [{ id: 'thm-local', kind: 'theorem', deps: ['thm-absent'] }]; f.save(); assert.throws(f.verify, /identity.*unknown/);
 writeFileSync(join(f.root, 'research/run-test-batch-1.pages.json'), '[]'); assert.throws(f.verify, /Empty or invalid manifest/);
});
test('relevant page originals and whole-source physical classification remain guarded', t => {
 const f = fixture(t), path = join(f.source, 'library/math/supplier.md'), original = readFileSync(path, 'utf8');
 writeFileSync(path, original + 'Changed prerequisite page.\n'); assert.throws(f.verify, /import changed/); writeFileSync(path, original);
 writeFileSync(join(f.source, 'items/post-illicit.md'), '---\nid: post-illicit\nkind: postulate\ndomain: physics\nstatus: draft\n---\n'); assert.throws(f.verify, /physical item in mathematics source/);
});
test('definition discharges retain actual suppliers and relevant page identities cannot become ambiguous', t => {
 const f = fixture(t); f.pages[0].items[0].deps = []; f.pages[0].items[0].justified_by = []; f.save();
 writeFileSync(join(f.root, 'items/thm-local.md'), f.item('thm-local').replace('kind: theorem', 'kind: theorem\ndomain: mathematics\njustified_by: [thm-supplier]'));
 writeFileSync(join(f.source, 'items/thm-deep.md'), f.item('thm-deep') + 'Changed relevant discharge.\n'); assert.throws(f.verify, /import changed/);
 writeFileSync(join(f.source, 'items/thm-deep.md'), f.item('thm-deep'));
 writeFileSync(join(f.source, 'library/math/duplicate-page.md'), '---\npage: supplier\nstatus: published\nitems: []\n---\n'); assert.throws(f.verify, /source page identity changed/);
});
test('unknown authored or page context and invalid explicit runs cannot fall back to whole imports', t => {
 const f = fixture(t);
 assert.throws(() => verifyMathematicsImports(f.root, { run: '' }), /invalid current import frontier/);
 assert.throws(() => verifyMathematicsImports(f.root, { run: 'run-test' }), /missing current item/);
 f.pages[0].requires = ['unknown-page']; f.save(); assert.throws(f.verify, /unknown prerequisite page/);
});

test('original policy changes are scoped to reached permissions, while the local policy stays pinned', t => {
 const f = fixture(t), path = join(f.source, 'research/b-leaf-legacy-allowlist.json');
 writeFileSync(path, JSON.stringify({ version: 1, edges: [{ source: 'thm-unrelated', target: 'thm-deep', reason: 'Outside consumer permission' }] }));
 assert.ok(f.verify());
 writeFileSync(path, JSON.stringify({ version: 1, edges: [{ source: 'thm-supplier', target: 'thm-deep', reason: 'Changed required edge permission' }] }));
 assert.throws(f.verify, /import changed/);
});
test('pinned suppliers may mention unimported original context without acquiring it as a prerequisite', t => {
 const f = fixture(t), path = join(f.source, 'items/thm-supplier.md');
 writeFileSync(join(f.source, 'items/thm-unpublished.md'), f.item('thm-unpublished', [], ['unpublished-alias']).replace('status: published', 'status: draft'));
 writeFileSync(path, f.item('thm-supplier', ['thm-deep'], ['supplier-alias']).replace('kind: theorem', 'kind: theorem\nforward_refs: [unpublished-alias]\nexternal_refs: [thm-unpublished]') + '\n## Remarks\nContext [[thm-unpublished]].\n');
 importMathematics(f.root, f.source);
 assert.ok(f.verify());
 const native = f.native(); assert.equal(native.status, 0, native.stdout + native.stderr);
 assert.equal(existsSync(join(f.root, 'items/thm-unpublished.md')), false, 'original context must remain unimported');
 writeFileSync(join(f.source, 'items/thm-unpublished.md'), f.item('thm-unpublished', [], ['unpublished-alias']).replace('status: published', 'status: draft') + 'Changed orientation only.\n');
 assert.ok(f.verify());
 writeFileSync(path, f.item('thm-supplier', ['thm-unpublished'], ['supplier-alias'])); importMathematics(f.root, f.source);
 assert.throws(f.verify, /identity.*unknown/); assert.notEqual(f.native().status, 0);
});
test('supplier-only nonlogical mentions exclude unrelated original drift, but owned references retain direct obligations', t => {
 const f = fixture(t), path = join(f.source, 'items/thm-supplier.md');
 writeFileSync(path, f.item('thm-supplier', ['thm-deep'], ['supplier-alias']).replace('kind: theorem', 'kind: theorem\nforward_refs: [thm-unrelated]\nexternal_refs: [thm-unrelated]') + '\n## Remarks\nOrientation [[thm-unrelated]].\n');
 importMathematics(f.root, f.source);
 writeFileSync(join(f.source, 'items/thm-unrelated.md'), f.item('thm-unrelated') + 'Unrelated orientation update.\n'); assert.ok(f.verify());
 const native = f.native(); assert.equal(native.status, 0, native.stdout + native.stderr);
 f.pages[0].items[0].forward_refs = ['thm-unrelated']; f.save(); assert.throws(f.verify, /import changed/);
 f.pages[0].items[0].forward_refs = ['thm-unknown-context']; f.save(); assert.throws(f.verify, /identity.*unknown/);
});
test('owned reference-only imports do not recursively acquire unrelated proof suppliers', t => {
 const f = fixture(t), path = join(f.source, 'items/thm-unrelated.md');
 writeFileSync(path, f.item('thm-unrelated', ['thm-deep'])); importMathematics(f.root, f.source);
 f.pages[0].items[0].deps = []; f.pages[0].items[0].external_refs = ['thm-unrelated']; f.save();
 writeFileSync(join(f.source, 'items/thm-deep.md'), f.item('thm-deep') + 'Outside reference-only proof cone.\n'); assert.ok(f.verify());
 writeFileSync(path, f.item('thm-unrelated', ['thm-deep']) + 'Changed directly cited claim.\n'); assert.throws(f.verify, /import changed/);
});

test('unrelated malformed descriptive YAML stays outside scoped original loading; bare verification stays strict', t => {
 const f = fixture(t);
 const malformed = f.item('thm-new').replace('status: published', 'status: draft\nlocator: "unfinished \\gamma source"');
 writeFileSync(join(f.source, 'items/thm-new.md'), malformed);
 assert.ok(f.verify());
 const native = f.native(); assert.equal(native.status, 0, native.stdout + native.stderr);
 assert.throws(() => verifyMathematicsImports(f.root), /escape/);
 // Source identity collisions remain visible even when the unrelated prose is invalid.
 writeFileSync(join(f.source, 'items/thm-new.md'), malformed.replace('aliases: []', 'aliases: [supplier-alias]'));
 assert.throws(f.verify, /identity.*ambiguous/);
 writeFileSync(join(f.source, 'items/thm-new.md'), malformed.replace('kind: theorem', 'kind: postulate\ndomain: physics'));
 assert.throws(f.verify, /physical item in mathematics source/);
});

test('malformed required originals and identity metadata never disappear from the closure', t => {
 const f = fixture(t), path = join(f.source, 'items/thm-deep.md');
 writeFileSync(path, f.item('thm-deep').replace('kind: theorem', 'kind: theorem\nlocator: "bad \\gamma"'));
 assert.throws(f.verify, /import changed|escape/);
 writeFileSync(path, f.item('thm-deep').replace('deps: []', 'deps: []\ndeps: [thm-unknown]'));
 assert.throws(f.verify, /import changed|unique/);
 writeFileSync(path, f.item('thm-deep'));
 const other = join(f.source, 'items/thm-new.md');
 for (const fragment of ['aliases: "bad \\gamma"', 'aliases: []\naliases: [supplier-alias]', 'id: thm-new\nid: thm-supplier']) {
  writeFileSync(other, f.item('thm-new').replace(fragment.startsWith('id:') ? 'id: thm-new' : 'aliases: []', fragment));
  assert.throws(f.verify);
 }
});

test('imported nonlogical alias indexes isolate unrelated prose but strictly read the actual target', t => {
 const f = fixture(t), path = join(f.source, 'items/thm-supplier.md');
 writeFileSync(join(f.source, 'items/thm-context.md'), f.item('thm-context', [], ['context-alias']).replace('status: published', 'status: draft'));
 writeFileSync(path, f.item('thm-supplier', ['thm-deep'], ['supplier-alias']).replace('kind: theorem', 'kind: theorem\nexternal_refs: [context-alias]'));
 importMathematics(f.root, f.source);
 writeFileSync(join(f.source, 'items/thm-new.md'), f.item('thm-new').replace('kind: theorem', 'kind: theorem\nlocator: "bad \\gamma"'));
 const native = f.native(); assert.equal(native.status, 0, native.stdout + native.stderr);
 writeFileSync(join(f.source, 'items/thm-context.md'), f.item('thm-context', [], ['context-alias']).replace('kind: theorem', 'kind: theorem\nlocator: "bad \\gamma"'));
 const invalidTarget = f.native(); assert.notEqual(invalidTarget.status, 0); assert.match(invalidTarget.stderr, /escape/);
});
