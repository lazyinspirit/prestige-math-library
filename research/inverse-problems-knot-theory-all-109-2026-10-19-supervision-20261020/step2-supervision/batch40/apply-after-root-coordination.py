# ROOT ONLY: generated proposal; not executed by author.
from pathlib import Path
import json
base=Path(__file__).resolve().parent
root=base.parents[3]
paths=json.loads((base/'changed-paths.json').read_text())
for rel in paths:
    assert (root/rel).read_bytes()==(base/'preimages'/rel).read_bytes(), f"Preimage changed: {rel}"
for rel in paths:
    (root/rel).write_bytes((base/'proposed'/rel).read_bytes())
