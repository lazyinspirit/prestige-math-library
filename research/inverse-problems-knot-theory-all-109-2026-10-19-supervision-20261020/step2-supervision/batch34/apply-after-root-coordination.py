# ROOT ONLY: exact one-file procedure/proof separation after focused FINAL.
from pathlib import Path
import json
base=Path(__file__).resolve().parent
repo=base.parents[3]
e=json.loads((base/'focused-first-disposition.json').read_text())
if (repo/e['source']).read_bytes()!=(repo/e['preimage']).read_bytes():
    raise SystemExit('Algorithm changed; refuse stale policy patch')
(repo/e['source']).write_bytes((repo/e['proposed']).read_bytes())
print('Applied only the root-reviewed procedure/proof separation; original proof archive retained.')
