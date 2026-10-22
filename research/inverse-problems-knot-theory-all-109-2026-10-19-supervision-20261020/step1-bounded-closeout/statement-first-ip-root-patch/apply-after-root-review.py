# ROOT ONLY. Unapplied formatting-only patch; guard ALL changed sources first.
from pathlib import Path
import json
base=Path(__file__).resolve().parent
repo=base.parents[3]
rows=[e for e in json.loads((base/'manifest.json').read_text())['entries'] if e['changed']]
for e in rows:
    if (repo/e['source']).read_bytes() != (repo/e['preimage']).read_bytes():
        raise SystemExit('Source changed; refusing stale formatting patch: '+e['source'])
for e in rows:
    (repo/e['source']).write_bytes((repo/e['proposed']).read_bytes())
print('Applied only the '+str(len(rows))+' root-reviewed IP formatting fixes; no hashes/gates/readiness run.')
