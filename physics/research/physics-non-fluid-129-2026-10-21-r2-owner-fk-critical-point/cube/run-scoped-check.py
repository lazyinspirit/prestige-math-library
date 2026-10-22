import datetime
import json
from pathlib import Path
import subprocess
import sys

files = [
    'items/lem-csm-frontier-finite-box-cube-max-fiber-influence.md',
    'items/lem-csm-frontier-fk-influence-threshold.md',
]
commands = {
    'precheck': ['node', 'tools/tsx-run.mjs', 'tools/physics-support/precheck.mts', *files, '--json'],
    'proof-layout': ['node', 'tools/physics-support/proof-layout.mjs', *files],
    'rendercheck': ['node', 'tools/physics-support/rendercheck.mjs', *files],
}
name = sys.argv[1]
command = commands[name]
started = datetime.datetime.now(datetime.timezone.utc).isoformat()
result = subprocess.run(command, capture_output=True, text=True)
record = {
    'command': command,
    'started_at': started,
    'completed_at': datetime.datetime.now(datetime.timezone.utc).isoformat(),
    'exit_code': result.returncode,
    'stdout': result.stdout,
    'stderr': result.stderr,
    'scope': files,
    'meaning': 'Actual focused mechanical check; no independent proof acceptance or native transition.',
}
target = Path(__file__).parent / f'integration-final-{name}.json'
target.write_text(json.dumps(record, indent=2) + '\n')
print(json.dumps({'log': str(target), **record}, indent=2))
sys.exit(result.returncode)
