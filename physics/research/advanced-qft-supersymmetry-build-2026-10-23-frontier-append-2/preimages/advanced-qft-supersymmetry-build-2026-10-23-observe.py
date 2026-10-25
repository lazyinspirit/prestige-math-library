"""Read-only progress observation. Never dispatches or changes workflow state."""
import collections
import datetime
import json
import pathlib
import re

r = pathlib.Path.cwd()
run = 'advanced-qft-supersymmetry-build-2026-10-23'
state_dir = r / '.physics-autopilot' / run
state = json.loads((state_dir / 'state.json').read_text())
active = {}
for line in (state_dir / 'events.jsonl').read_text().splitlines():
    try:
        event = json.loads(line)
    except ValueError:
        continue
    if event.get('type') == 'dispatch' and event.get('stage') == '1-scaffold' and event.get('role') == 'beta':
        active[event['label']] = event['at']
    elif event.get('type') == 'dispatch-ok' and event.get('key', '').startswith('1-scaffold:'):
        active.pop(event['key'].split(':', 1)[1], None)
results = []
for p in (r / 'research' / (run + '-dispatch')).glob('beta-batch-*.result.json'):
    if not re.fullmatch(r'beta-batch-\d+(?:-refresh-[A-Za-z0-9-]+)?\.result\.json', p.name):
        continue
    try:
        result = json.loads(p.read_text())
    except ValueError:
        continue
    # Adopted processes can finish without a local dispatch-ok event after reload.
    # Native status remains authoritative for live-process capacity.
    active.pop(result.get('label'), None)
    results.append({'file': p.name, 'ok': result.get('ok'), 'tail': result.get('tail', '')[-2200:]})
decisions, holds = collections.Counter(), []
for p in (r / 'research').glob(run + '-step1-*.json'):
    try:
        row = json.loads(p.read_text())
    except ValueError:
        continue
    decision = row.get('decision')
    if not isinstance(decision, str):
        continue
    decisions[decision] += 1
    if decision == 'escalated':
        holds.append({'file': p.name, 'item': row.get('item'), 'reason': row.get('reason')})
inventory = json.loads((r / 'research/advanced-qft-supersymmetry-2026-10-23/scaffold/proposed-inventory.json').read_text())
present = sum((r / 'items' / (x['id'] + '.md')).exists() for x in inventory['items'])
print(json.dumps({'at': datetime.datetime.now(datetime.timezone.utc).isoformat(),
                  'stage': state['stage'], 'active': list(active), 'results': results,
                  'planned_carriers_present': present, 'readiness_record_decisions': dict(decisions),
                  'author_escalations': holds, 'engine_blockers': state.get('blockers', [])}, ensure_ascii=False))
