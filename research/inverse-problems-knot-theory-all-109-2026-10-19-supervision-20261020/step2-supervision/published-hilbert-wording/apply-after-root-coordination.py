# ROOT ONLY: apply after coordination, preimage guard and focused review.
from pathlib import Path
import json
base=Path(__file__).resolve().parent
repo=base.parents[3]
e=json.loads((base/'focused-first-disposition.json').read_text())
if (repo/e['source']).read_bytes()!=(repo/e['preimage']).read_bytes():
    raise SystemExit('Published supplier changed; refuse stale wording patch')
(repo/e['source']).write_bytes((repo/e['proposed']).read_bytes())
print('Applied only the root-reviewed Hilbert completeness wording repair; no hashes/gates/readiness.')
