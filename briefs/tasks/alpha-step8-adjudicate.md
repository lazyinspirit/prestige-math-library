# Step 8 — changed-mathematics adjudication, `{{run}}`

Act only on ids in `research/{{run}}-step8-changes.json`. Read their current
rejection rows, item, dependencies, owning manifest, and proof contract; match
each adjudication by exact `(id, model, context_sha256)`.

Append each outcome with the pre-edit guard hash. A nonfatal or false-positive
outcome changes no content. A confirmed fatal licenses one coherent repair, its
ledger row, and only the associated contract, manifest, plan, or impact update;
the engine rejudges that exact changed id against the configured judge set.

If that repair changes an item's `## Statement` or `## Definition`, trace every
direct dependency and reference consumer and check its actual use of the changed
claim. Make only necessary, surgical repairs within this dispatch's authorized
scope; record each affected consumer outside it, with the invalidated use and
minimal needed correction, for downstream impact routing. Continue another hop
only if a necessary consumer repair changes that consumer's own statement or
definition. A citation alone does not justify an edit.

For a contract-detector dispatch, correct the genuine contract/risk defect or
record why the detector is inapplicable. Write
`research/{{run}}-alpha-step8-adjudicate.md` with every tuple, outcome,
evidence, edit, and rejudge target; the mechanical stamp stage writes stamps.
