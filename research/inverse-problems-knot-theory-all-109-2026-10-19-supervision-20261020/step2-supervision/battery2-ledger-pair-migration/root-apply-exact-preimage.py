# ROOT ONLY; author did not execute.
from pathlib import Path
b=Path(__file__).resolve().parent
r=b.parents[3]
rel="research/inverse-problems-knot-theory-all-109-2026-10-19-batch-91.cross-batch-dependencies.json"
assert (r/rel).read_bytes()==(b/'preimages'/rel).read_bytes(), 'Ledger preimage changed'
(r/rel).write_bytes((b/'proposed'/rel).read_bytes())
