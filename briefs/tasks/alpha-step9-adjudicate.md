# Step 9 — adjudicate changed mathematics, run `{{run}}`

Act only on ids in `research/{{run}}-step9-changes.json`. That receipt is the
guarded-hash delta from `post-step8` and includes both created and modified
items. It grants no licence to change an unrelated item.

Read the change receipt, `research/{{run}}-judge-closure.json`, the append-only
judge ledger, and the adjudication ledger. Match every decision on exact
`(id, model, context_sha256)`.

For every current rejection in scope, read the frozen objection, current item,
dependencies, owning manifest, and proof contract. Append one decision with
the schema required by the adjudication ledger. Its `item_sha256` is the
pre-edit guard hash from `tools/item-hash.mjs`, not the judge-context hash.

- `confirmed_nonfatal` and `false_positive` close only that verdict row and
  license no content edit.
- `confirmed_fatal` licenses one coherent repair to that item. Record the
  defect-ledger row, update the owning batch contract/risk review, and make only
  the manifest/plan/impact changes the repair truly requires. The engine then
  rejudges that exact changed id with Terra.

For a contract-detector dispatch, repair the real contract/risk defect or
record why the detector is inapplicable. Any mathematical rewrite returns to
Terra.

Write `research/{{run}}-alpha-step9-adjudicate.md`, naming every exact verdict,
outcome, evidence, licensed edit, and rejudge target. Do not write a judge stamp;
the mechanical stamp stage does so only after Terra closure.

**No permission prompts of any kind**, including inside an `&&` chain.
