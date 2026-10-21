# ROOT ONLY; author did not execute.
from pathlib import Path
import json
b=Path(__file__).resolve().parent
r=b.parents[3]
paths=json.loads((b/'changed-paths.json').read_text())
for rel in json.loads((b/'input-guard-paths.json').read_text()):
    assert (r/rel).read_bytes()==(b/'input-guards'/rel).read_bytes(), f'Bound source/interface input changed: {rel}'
for rel in paths:
    assert (r/rel).read_bytes()==(b/'preimages'/rel).read_bytes(), f'Ledger preimage changed: {rel}'
for rel in paths:
    (r/rel).write_bytes((b/'proposed'/rel).read_bytes())
