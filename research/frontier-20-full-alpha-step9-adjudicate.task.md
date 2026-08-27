# Step 9 — changed-mathematics adjudication, `frontier-20-full`

Act only on ids in `research/frontier-20-full-step9-changes.json`. Read their current
rejection rows, item, dependencies, owning manifest, and proof contract; match
each adjudication by exact `(id, model, context_sha256)`.

Append each outcome with the pre-edit guard hash. A nonfatal or false-positive
outcome changes no content. A confirmed fatal licenses one coherent repair, its
ledger row, and only the associated contract, manifest, plan, or impact update;
the engine rejudges that exact changed id against the configured judge set.

For a contract-detector dispatch, correct the genuine contract/risk defect or
record why the detector is inapplicable. Write
`research/frontier-20-full-alpha-step9-adjudicate.md` with every tuple, outcome,
evidence, edit, and rejudge target; the mechanical stamp stage writes stamps.
