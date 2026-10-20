#!/usr/bin/env python3
"""Root-only integration helper. Default verifies; --apply installs frozen bytes.
The root orchestrator must first stop the paused, drained controller normally.
This helper performs no engine control, recertification, gate or resume operation.
"""
import argparse
import hashlib
import json
import os
from pathlib import Path

parser = argparse.ArgumentParser()
parser.add_argument('--repo', type=Path, required=True)
parser.add_argument('--controller-pid', type=int, required=True)
parser.add_argument('--apply', action='store_true')
args = parser.parse_args()
repo = args.repo.resolve()
packet = Path(__file__).resolve().parent
run = 'machine-learning-all-101-2026-10-19'
state = json.loads((repo / '.autopilot' / run / 'state.json').read_text())
assert state.get('run') == run and state.get('paused') is True, 'Exact run must remain paused'
try:
    os.kill(args.controller_pid, 0)
except ProcessLookupError:
    pass
else:
    raise SystemExit('Original controller still exists; normal stop and confirmed exit required')
# Refuse installation over any surviving native Node process for this exact run.
# The root must also inspect its own process evidence for non-Node wrappers.
for proc in Path('/proc').iterdir():
    if not proc.name.isdigit():
        continue
    try:
        argv = (proc / 'cmdline').read_bytes().split(b'\0')
    except (FileNotFoundError, PermissionError, ProcessLookupError):
        continue
    if argv and Path(os.fsdecode(argv[0])).name in ('node', 'nodejs') and any(run.encode() in word for word in argv):
        raise SystemExit(f'Native run process still exists: pid {proc.name}')
inventory = json.loads((packet / 'inventory.json').read_text())['files']
sha = lambda data: hashlib.sha256(data).hexdigest()
# Validate every preimage and frozen candidate before writing any target.
for row in inventory:
    target, candidate = repo / row['path'], packet / 'candidate' / row['path']
    assert sha(candidate.read_bytes()) == row['after_sha256'], f'Candidate changed: {row["path"]}'
    current = sha(target.read_bytes()) if target.exists() else None
    assert current == row['before_sha256'], f'Live preimage changed: {row["path"]}'
if args.apply:
    for row in inventory:
        target = repo / row['path']
        target.parent.mkdir(parents=True, exist_ok=True)
        target.write_bytes((packet / 'candidate' / row['path']).read_bytes())
    for row in inventory:
        assert sha((repo / row['path']).read_bytes()) == row['after_sha256']
    print('Installed exactly six frozen files. Run remains paused; root owns commit/restart/resume.')
else:
    print('All guards passed; rerun with --apply to install exactly six frozen files.')
