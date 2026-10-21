# ROOT ONLY: guarded proposal; not executed by author.
from pathlib import Path
base=Path(__file__).resolve().parent
root=base.parents[3]
rel="items/lem-kneser-haken-finiteness-for-incompressible-tori.md"
assert (root/rel).read_bytes()==(base/'preimages'/rel).read_bytes(), 'Canonical preimage changed'
(root/rel).write_bytes((base/'proposed'/rel).read_bytes())
