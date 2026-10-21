# ROOT ONLY: guarded proposal, not executed by author.
from pathlib import Path
import json
b=Path(__file__).resolve().parent
root=b.parents[3]
paths=json.loads((b/'changed-paths.json').read_text())
for rel in paths:
    assert (root/rel).read_bytes()==(b/'preimages'/rel).read_bytes(), f'Supplier preimage changed: {rel}'
for rel in paths:
    (root/rel).write_bytes((b/'proposed'/rel).read_bytes())
