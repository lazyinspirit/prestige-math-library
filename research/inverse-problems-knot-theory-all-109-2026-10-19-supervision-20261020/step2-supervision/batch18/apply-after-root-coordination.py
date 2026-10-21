# ROOT ONLY: do not run until native writer coordination is complete.
from pathlib import Path
import json
base=Path(__file__).resolve().parent
repo=base.parents[3]
rows=json.loads((base/'owner-disposition-proposal.json').read_text())['entries']
for e in rows:
    if (repo/e['source']).read_bytes()!=(repo/e['preimage']).read_bytes():
        raise SystemExit('Exact supplier preimage changed; rebind instead of overwriting: '+e['source'])
for e in rows:
    (repo/e['source']).write_bytes((repo/e['proposed']).read_bytes())
print('Applied only3 root-reviewed wording/notation repairs; no native controls, hashes, readiness or gates run.')
