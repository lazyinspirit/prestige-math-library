# Contract-detector adjudication — `frontier-22`

Reproduce the failing candidate findings with `boundary-audit`,
`citation-fidelity`, and `gate-liveness` over the run contracts and coverage
files. Read each flagged item and its owning contract row.

Correct a false boundary disposition, unfaithful citation, missing applicable
finite-smoke entry, or missing risk review in the owning batch contract. A
`checked` boundary row cites the step that handles that case; a
`not_applicable` row gives an item-specific mathematical reason. If a candidate
is sound but the detector is inapplicable, record the required specific
`reviewed.upheld` rationale instead of changing the item to silence it.

Merge the batch contracts into `research/frontier-22-proof-contracts.json` and
rerun the failed detector. Write `research/frontier-22-alpha-contract-audit.md`
with each candidate, disposition, evidence, changed record, and remaining
blocker. A confirmed item defect also receives its ledger row.
