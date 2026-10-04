# Classical Statistical Mechanics research scaffold

Start with [prose-scaffold.md](prose-scaffold.md) and
[quantities-and-postulates.md](quantities-and-postulates.md). The canonical
proposed placements are `paired-inventory.json` and
`pathway-and-inventory.md`; `supplier-map.json`, `claim-coverage.json` and
`closure-ledger.json` record exact prerequisites and scope. This is research
design, with complete scoped arguments and local/peer review, not production
acceptance or publication.

The complete proof developments are:

- `workers/foundations/ensemble-proofs.md`: full phase-space/reference measures,
  finite shells, preparations, entropy, responses and equipartition.
- `workers/gibbs-limits/proof-modules.md`: Gibbs specifications, DLR existence,
  unique/coexisting lattice states, pressure and exact continuum supplier scope.
- `full-phase-equivalence.md`: the new interacting **total-energy phase shell**
  and locally selected momentum/position ensemble bridge, with peer-review records
  in `workers/foundations/marked-equivalence-review.md`.
- `workers/dynamics-kinetics/`: Hamiltonian/ergodic, BBGKY/mean-field, actual
  selected collision evolution and finite stochastic-response developments.
- `workers/examples/proofs.md`: full ideal-gas/quadratic/Tonks/Ising models,
  sampling fluctuations and explicit counterexamples.

Run `python3 assemble-and-check.py` here, or its repository-relative path from
the root, to regenerate the inventories, mappings and structural report.
`structural-check.json` is a reproducible local research receipt. Source records
distinguish actual reading, failed retrievals and unconsumed source suggestions;
raw carriers remain locally retained and ignored. `source-findings.md` records
the inherited L26 terminology sign disposition without changing the old dossier.
Mathematical originals/imports, previous dossiers and engines are read-only.
