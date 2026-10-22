import datetime, hashlib, json, pathlib, subprocess

run = 'physics-non-fluid-129-2026-10-21-r2'
state_dir = pathlib.Path('.physics-autopilot') / run
state = json.loads((state_dir / 'state.json').read_text())
assert not (state_dir / 'controller.lock').exists()
assert all(row.get('endedAt') for row in state['dispatches'].values())
out = pathlib.Path('research') / (run + '-owner-step3-root-adoption/canonical-plan')
out.mkdir(exist_ok=False)
plan = pathlib.Path('research/plan-spec.json')
before = plan.read_bytes()
(out / 'plan-spec.before.json').write_bytes(before)
for n in range(1, 130):
    old = pathlib.Path('research') / (run + '-splice-' + str(n) + '.json')
    if old.exists():
        (out / old.name).write_bytes(old.read_bytes())
commands = []
with (out / 'actual-splice.log').open('w') as log:
    for n in range(1, 130):
        args = ['node', 'tools/physics-support/splice-plan.mjs', '--run', run,
                '--batch', str(n), '--update', '--fail-on-refusal']
        result = subprocess.run(args, capture_output=True, text=True)
        log.write(result.stdout + result.stderr)
        log.flush()
        commands.append({'argv': args, 'exit_code': result.returncode})
        if result.returncode:
            raise RuntimeError('Native mechanical splice refused batch ' + str(n))
sha = lambda b: hashlib.sha256(b).hexdigest()
(out / 'receipt.json').write_text(json.dumps({
    'at': datetime.datetime.now(datetime.timezone.utc).isoformat(), 'run': run,
    'pairs': 129, 'pages': 258, 'items': 854,
    'before_sha256': sha(before), 'after_sha256': sha(plan.read_bytes()),
    'commands': commands, 'source_edits': False, 'gate_attempt': False,
    'qualification': 'Native mechanical transcription only; scientific resolutions and gate acceptance remain separate.'
}, indent=2) + '\n')
print('129 exact native batch splices complete; original canonical plan and receipts preserved')
