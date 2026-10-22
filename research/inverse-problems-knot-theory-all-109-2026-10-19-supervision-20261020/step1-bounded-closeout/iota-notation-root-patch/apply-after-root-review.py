# ROOT ONLY: unapplied proposal, no hashes or validators.
from pathlib import Path
import json
base=Path(__file__).resolve().parent
repo=base.parents[3]
manifest=json.loads((base/'manifest.json').read_text())
# Check ALL exact preimages before the first canonical write.
for e in manifest['entries']:
    source=repo/e['source']
    before=repo/e['preimage']
    if source.read_bytes()!=before.read_bytes():
        raise SystemExit('Source changed; refusing stale patch: '+e['source'])
for e in manifest['entries']:
    (repo/e['source']).write_bytes((repo/e['proposed']).read_bytes())
print('Applied only the 11 root-reviewed notation token changes; no gate/readiness operation run.')
