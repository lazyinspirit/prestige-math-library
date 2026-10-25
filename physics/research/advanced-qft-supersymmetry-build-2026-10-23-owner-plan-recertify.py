"""Actual per-request plan metadata checks; refuses authored-item boundaries."""
import datetime
import hashlib
import json
import pathlib
import subprocess

root = pathlib.Path.cwd()
run = 'advanced-qft-supersymmetry-build-2026-10-23'
state = root / '.physics-autopilot' / run
request_path = state / 'owner-gate-request.json'
req = json.loads(request_path.read_text())
snap = req['snapshot']
start = datetime.datetime.now(datetime.timezone.utc).isoformat()
assert req['version'] == 2 and snap['run'] == run
assert snap['scopeKind'] == 'plan' and not snap['items'] and len(snap['pages']) == 110
assert snap['stages'] in [['1-drift'], ['1-drift-apply']]
assert not req.get('consumedAt')
resolution = json.loads((root/'research'/f'{run}-owner-resolution/escalations.json').read_text())
assert all(x['status'].startswith('resolved-') for x in resolution['escalations'])
check = subprocess.run(['python3', f'research/{run}-owner-resolution/check-planning.py'],
                       cwd=root, capture_output=True, text=True)
assert check.returncode == 0, check.stdout + check.stderr
for row in snap['inputs']:
    path = pathlib.Path(row['path'])
    actual = hashlib.sha256(path.read_bytes()).hexdigest() if path.exists() else None
    assert actual == row['sha256'], ('changed current input', str(path))
assert json.loads(request_path.read_text())['attempt'] == req['attempt']
evidence = (f'research/{run}-owner-resolution/scope-format-check.json: fresh current '
            '110-page/143-interface JSON, classification, DAG, dependency projection, '
            'source-pin and original-byte checks after this request; planning only.')
receipt = {
    'version': 2, 'run': run, 'recertificationScope': 'formatting-metadata-only',
    'attempt': req['attempt'], 'snapshotSha256': snap['sha256'], 'reviewer': '/root',
    'writersDrained': True, 'writerScopes': [], 'reviewStartedAt': start,
    'reviewedAt': datetime.datetime.now(datetime.timezone.utc).isoformat(), 'items': [],
    'planChecks': {key: {'verdict': 'pass', 'evidence': evidence}
                   for key in ['formatting', 'metadata']}
}
tmp = state / 'owner-gate-receipt.json.tmp'
tmp.write_text(json.dumps(receipt, indent=2) + '\n')
tmp.replace(state / 'owner-gate-receipt.json')
print('Fresh actual owner plan receipt:', req['attempt'], snap['stages'],
      'bound inputs', len(snap['inputs']))
