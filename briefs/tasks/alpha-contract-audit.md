# Contract-detector adjudication — `{{run}}`

Reproduce the failing candidate findings with `boundary-audit --fail-on-contradicted --fail-on-template`,
`citation-fidelity`, and `gate-liveness` over the run contracts and coverage
files. Read each flagged item and its owning contract row.

Correct a false boundary disposition, unfaithful citation, missing applicable
finite-smoke entry, or missing risk review in the owning batch contract. A
`checked` boundary row cites the step that handles that case; a
`not_applicable` row gives an item-specific mathematical reason. If a candidate
is sound but the detector is inapplicable, record the required specific
`reviewed.upheld` rationale instead of changing the item to silence it.
For every template cluster, review every member one item at a time and either
replace the repeated rationale with item-specific evidence or add the exact
item-specific `reviewed.upheld` record. Do not finish while either boundary
flag still fails.

Merge the batch contracts into `research/{{run}}-proof-contracts.json` and
rerun the failed detector. Write `research/{{run}}-alpha-contract-audit.md`
with each candidate, disposition, evidence, changed record, and remaining
blocker. A confirmed item defect also receives its ledger row.
