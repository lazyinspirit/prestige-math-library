# ROOT ONLY: exact two named fragments, after coordination and focused FINAL.
from pathlib import Path
import json
base=Path(__file__).resolve().parent
repo=base.parents[3]
e=json.loads((base/'focused-first-disposition.json').read_text())
if (repo/e['source']).read_bytes()!=(repo/e['preimage']).read_bytes():
    raise SystemExit('Published supplier changed; refuse stale two-fragment patch')
(repo/e['source']).write_bytes((repo/e['proposed']).read_bytes())
print('Applied only2 root-reviewed source-title fragment deletions; no hashes/gates/controls.')
