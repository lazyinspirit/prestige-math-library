"""Root current-input checks on exactly the integrated supplier inventory."""
from pathlib import Path
from concurrent.futures import ThreadPoolExecutor, as_completed
import json, subprocess, datetime, re, hashlib
run = 'machine-learning-all-101-2026-10-19'
base = Path('research') / (run + '-owner-step4-published-alert-repair')
app = base / 'application'
plan = json.loads((app / 'plan.json').read_text())
out = app / 'checks'
out.mkdir(exist_ok=True)
def now(): return datetime.datetime.now(datetime.timezone.utc).isoformat()
def execute(command, content):
    started = now()
    result = subprocess.run(command, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True)
    return dict(command=command, started_at=started, checked_at=now(), exit_code=result.returncode,
                output=result.stdout, content_sha256=content)
def check(row):
    source = Path(row['source'])
    raw = source.read_bytes()
    assert hashlib.sha256(raw).hexdigest() == row['final_raw_sha256'], row['id']
    proof = bool(re.search(r'^## (Proof|Refutation|Verification|Counterexample)\s*$', raw.decode(), re.M))
    command = ['node', 'tools/tsx-run.mjs', 'tools/precheck.mts']
    if not proof: command.append('--json')
    command.append(row['source'])
    record = dict(id=row['id'], precheck=execute(command, row['candidate_content_sha256']))
    record['rendercheck'] = execute(['node', 'tools/rendercheck.mjs', row['source']], row['candidate_content_sha256'])
    assert hashlib.sha256(source.read_bytes()).hexdigest() == row['final_raw_sha256'], row['id']
    (out / (row['id'] + '.json')).write_text(json.dumps(record, indent=2) + '\n')
    return record
results = []
with ThreadPoolExecutor(max_workers=8) as pool:
    futures = [pool.submit(check, row) for row in plan['rows']]
    for future in as_completed(futures): results.append(future.result())
layout = execute(['node', 'tools/proof-layout.mjs'] + [r['source'] for r in plan['rows']], None)
(app / 'proof-layout.json').write_text(json.dumps(layout, indent=2) + '\n')
failed = [dict(id=r['id'], tool=t, exit_code=r[t]['exit_code'], output=r[t]['output'])
          for r in results for t in ['precheck', 'rendercheck'] if r[t]['exit_code'] != 0]
summary = dict(version=1, run=run, checked_at=now(), subjects=len(results),
               failed=failed, proof_layout_exit_code=layout['exit_code'])
(app / 'check-summary.json').write_text(json.dumps(summary, indent=2) + '\n')
print(json.dumps(dict(subjects=len(results), failed=failed, proof_layout_exit_code=layout['exit_code'])))
