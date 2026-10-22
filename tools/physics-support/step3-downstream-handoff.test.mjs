import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, rmSync, symlinkSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';
const repo = resolve(import.meta.dirname, '../..');
const sha = b => createHash('sha256').update(b).digest('hex');
function fixture() {
  const root = mkdtempSync(join(tmpdir(), 'physics-downstream-'));
  for (const dir of ['research/r-dispatch', 'research/archive', 'items', 'library/test', 'tools']) mkdirSync(join(root, dir), { recursive: true });
  symlinkSync(join(repo, 'tools/physics-support'), join(root, 'tools/physics-support'), 'dir');
  const put = (p, value) => writeFileSync(join(root, p), typeof value === 'string' ? value : JSON.stringify(value));
  const get = p => readFileSync(join(root, p));
  const item = (id, deps) => `---\nid: ${id}\nkind: lemma\ndomain: mathematics\nstatus: draft\ndeps: [${deps}]\n---\n## Statement\nThe vector wall trace is a scalar value.\n`;
  put('items/lem-supplier.md', item('lem-supplier', ''));
  put('items/pthm-consumer.md', item('pthm-consumer', 'lem-supplier'));
  for (const [b, id] of [['1', 'lem-supplier'], ['2', 'pthm-consumer']]) {
    put(`research/r-batch-${b}.pages.json`, [{ id: `page-${b}`, category: 'test', requires: [], items: [{id,kind:'lemma',deps:b==='2'?['lem-supplier']:[]}]  }]);
    put(`library/test/page-${b}.md`, `---\npage: page-${b}\n---\nSummary.\n`);
    put(`research/r-batch-${b}.proof-contracts.json`, { version: 1, scope: [id], contracts: { [id]: {} } });
  }
  put('research/r-alpha-groups.json', [{ label: 'a', covers: ['1'] }, { label: 'b', covers: ['2'] }]);
  const finding = { id: 'pthm-consumer', subject_type: 'in-flight-item', consumer_id: null, observed_source: null,
    location: 'Statement wall trace', defect: 'ill-formed', evidence: 'The vector is identified with a scalar value.', severity: 'nonfatal' };
  const report = { batch: '1', coverage_note: 'Read assigned supplier and actual downstream consumer.', findings: [finding] };
  put('research/r-reader-findings-1.json', report);
  put('research/archive/report.json', get('research/r-reader-findings-1.json').toString());
  const native = { run: 'r', role: 'reader', label: 'reader-1', covers: ['1'], attempt: 1, ok: true, exit_code: 0, timed_out: false, ended_at: '2026-10-23', tail: JSON.stringify(report) };
  put('research/r-dispatch/reader-reader-1.result.json', native); put('research/archive/native.json', JSON.stringify(native));
  put('research/archive/consumer.md', get('items/pthm-consumer.md').toString());
  // Exercise actual private CLI through the workspace tools symlink.
  const attempt = (...args) => spawnSync(process.execPath, [join(root, 'tools/physics-support/step3-scope.mjs'), ...args,
    '--root', root, '--run', 'r'], { cwd: root, env: { ...process.env, PHYSICS_REPO: root }, encoding: 'utf8' });
  const run = (...args) => { const r = attempt(...args); assert.equal(r.status, 0, r.stderr + r.stdout); return r; };
  for (const b of ['1', '2']) for (const label of ['pre', 'post']) run('hash', '--batch', b, '--label', label);
  const inputs = {}, bind = path => { const sha256 = sha(get(path)); inputs[path] = sha256; return { path, sha256 }; };
  const auth = { version: 1, run: 'r', batch: '1', kind: 'downstream-in-run-consumer', authorized_by: '/root',
    reason: 'Root reviewed the genuine downstream observation and authorizes only its exact consumer routing.',
    native_receipt: bind('research/r-dispatch/reader-reader-1.result.json'), native_receipt_archive: bind('research/archive/native.json'),
    original_report: bind('research/archive/report.json'), inputs, findings: [{ finding_index: 1, original_finding: finding, owner_batch: '2',
      owner_pre_snapshot: bind('research/r-step3-hash-2-pre.json'), current_source_observation: bind('research/archive/consumer.md'),
      excerpts: ['The vector wall trace is a scalar value.'], dependency_path: ['pthm-consumer', 'lem-supplier'] }] };
  const save = () => put('research/r-step3-downstream-handoff-1.json', auth); save();
  return { root, put, get, auth, report, native, finding, item, save, run, attempt, clean: () => rmSync(root, { recursive: true, force: true }) };
}

test('exact downstream observation survives CLI split, refutation, stamping, adjudication and repair', () => {
  const f = fixture(); try {
    const original = f.get('research/r-reader-findings-1.json'); f.run('split', '--batch', '1');
    const scope = JSON.parse(f.get('research/r-step3-scope-1.json'));
    assert.equal(scope.reader_findings[0].subject_type, 'in-flight-item');
    assert.equal(scope.reader_findings[0].consumer_id, null);
    assert.equal(scope.reader_findings[0].downstream_handoff.kind, 'downstream-in-run-consumer');
    assert.ok(scope.refuter_scope.includes('pthm-consumer'));
    const collect = opened => { f.put('research/r-refute-1.json', { batch: '1', opened, not_opened: [], flagged: [{id:f.finding.id, location:f.finding.location, defect:f.finding.defect, evidence:f.finding.evidence, severity:f.finding.severity}], coverage_note: 'Read every routed source.' }); return f.attempt('collect', '--batch', '1'); };
    assert.notEqual(collect(scope.refuter_scope.filter(id => id !== 'pthm-consumer')).status, 0);
    assert.equal(collect(scope.refuter_scope).status, 0);
    const ledger = { defect_id: 'r-downstream', run: 'r', subject: 'pthm-consumer', caught_at_stage: '3a-adjudicate', severity: 'nonfatal', disposition: 'nonfatal-recorded' };
    f.put('research/defect-ledger.jsonl', JSON.stringify(ledger)+'\n');
    const decisions = { version: 1, run: 'r', group: 'a', decisions: [{ obligation: 'reader:1:1', id: 'pthm-consumer', route: 'reader',
      owner_batch: '2', historical_delta_unknown: true, owner_resolution: 'Original reader observed bytes were unbound; independently reviewed the exact Root current-source archive and current consumer.',
      verdict: 'confirmed_nonfatal', repair_confidence: 1, defect_ids: ['r-downstream'], evidence: 'Confirmed exact scalar/vector mismatch in the downstream consumer.' }] };
    f.put('research/r-alpha-a-3a-decisions.json', decisions); f.run('stamp', '--group', 'a');
    assert.match(f.attempt('check', '--phase', 'adjudicate', '--batch', '1').stderr, /decision-missing/);
    decisions.decisions.push({...decisions.decisions[0], obligation:'refuter:1:1', route:'flagged', same_defect_as:'reader:1:1', same_defect_evidence:'Independently observed the same scalar/vector mismatch in the exact same current consumer statement.'});
    f.put('research/r-alpha-a-3a-decisions.json', decisions); f.run('stamp', '--group', 'a');
    f.run('check', '--phase', 'adjudicate', '--batch', '1'); f.run('check', '--phase', 'final', '--batch', '1');
    f.put('research/defect-ledger.jsonl', JSON.stringify({ ...ledger, disposition: 'fixed' })+'\n');
    assert.match(f.attempt('check', '--phase', 'adjudicate', '--batch', '1').stderr, /carrier is unchanged/);
    f.put('items/pthm-consumer.md', f.item('pthm-consumer', 'lem-supplier').replace('a scalar value', 'the specified vector'));
    assert.match(f.attempt('check', '--phase', 'adjudicate', '--batch', '1').stderr, /decision-stale/);
    f.run('stamp', '--group', 'a'); f.run('check', '--phase', 'adjudicate', '--batch', '1'); f.run('check', '--phase', 'final', '--batch', '1');
    assert.deepEqual(f.get('research/r-reader-findings-1.json'), original);
  } finally { f.clean(); }
});

for (const defect of ['missing-authority','wrong-owner','duplicate-owner','unreachable','reversed-edge','changed-report','changed-native','forged-tail','changed-archive','changed-current','symlink','unbound-extra','wrong-baseline','missing-gate-input']) {
  test(`downstream handoff rejects ${defect}`, () => { const f = fixture(); try {
    if (defect === 'missing-authority') f.auth.authorized_by = 'reader';
    if (defect === 'wrong-owner') f.auth.findings[0].owner_batch = '3';
    if (defect === 'duplicate-owner') f.put('research/r-batch-3.pages.json', [{ id: 'extra', category: 'test', items: ['pthm-consumer'] }]);
    if (defect === 'unreachable') f.put('items/pthm-consumer.md', f.item('pthm-consumer', ''));
    if (defect === 'reversed-edge') f.auth.findings[0].dependency_path.reverse();
    if (defect === 'changed-report') f.put('research/r-reader-findings-1.json', { ...f.report, coverage_note: 'changed' });
    if (defect === 'changed-native') f.put('research/r-dispatch/reader-reader-1.result.json', { ...f.native, attempt: 0 });
    if (defect === 'forged-tail') { const native = { ...f.native, tail: '{}' }; for (const p of ['research/r-dispatch/reader-reader-1.result.json','research/archive/native.json']) { f.put(p, native); f.auth.inputs[p] = sha(f.get(p)); } f.auth.native_receipt.sha256 = f.auth.inputs[f.auth.native_receipt.path]; f.auth.native_receipt_archive.sha256 = f.auth.inputs[f.auth.native_receipt_archive.path]; }
    if (defect === 'changed-archive') f.put('research/archive/consumer.md', 'altered');
    if (defect === 'changed-current') f.put('items/pthm-consumer.md', f.item('pthm-consumer', 'lem-supplier')+'\nChanged.');
    if (defect === 'symlink') { rmSync(join(f.root,'research/archive/consumer.md')); symlinkSync(join(f.root,'items/pthm-consumer.md'), join(f.root,'research/archive/consumer.md')); }
    if (defect === 'unbound-extra') {
      f.report.findings.push({...f.finding, location:'Second finding'});
      for (const p of ['research/r-reader-findings-1.json', 'research/archive/report.json']) f.put(p,f.report);
      f.auth.original_report.sha256 = sha(f.get(f.auth.original_report.path)); f.auth.inputs[f.auth.original_report.path] = f.auth.original_report.sha256;
      const native = {...f.native, tail:JSON.stringify(f.report)};
      for (const binding of [f.auth.native_receipt,f.auth.native_receipt_archive]) {f.put(binding.path,native); binding.sha256=sha(f.get(binding.path)); f.auth.inputs[binding.path]=binding.sha256;}
    }
    if (defect === 'wrong-baseline') f.auth.findings[0].owner_pre_snapshot.path = 'research/r-step3-hash-1-pre.json';
    if (defect === 'missing-gate-input') delete f.auth.inputs['research/archive/consumer.md'];
    f.save(); assert.notEqual(f.attempt('split', '--batch', '1').status, 0);
  } finally { f.clean(); } });
}

test('ordinary owner snapshot binds the authority and every archived observation input', async () => {
  const { gateReviewSnapshot } = await import('../physics-autopilot/src/owner-gate-recertification.mjs');
  const f = fixture(); try {
    const snapshot = () => gateReviewSnapshot({repo:f.root, run:'r', config:{}},
      [{id:'step3', argv:['node','tools/physics-support/step3-scope.mjs','check','--run','r']}], ['3a-adjudicate']);
    const before = snapshot();
    const inputs = new Map(before.inputs.map(row => [row.path, row.sha256]));
    assert.ok(inputs.has(join(f.root,'research/r-step3-downstream-handoff-1.json')));
    for (const path of Object.keys(f.auth.inputs)) assert.ok(inputs.has(join(f.root,path)), path);
    f.put('research/archive/consumer.md', f.get('research/archive/consumer.md').toString()+'\n');
    assert.notEqual(snapshot().sha256, before.sha256);
  } finally { f.clean(); }
});
