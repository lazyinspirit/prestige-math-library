# Boundary-row cleanup — batches <batches>

Run `phase-2-remaining-27`. The Step-3 gate `boundary-audit`
(`node tools/boundary-audit.mjs research/phase-2-remaining-27-proof-contracts.json
--fail-on-contradicted --fail-on-template --json`) fails: 122 template clusters
(2,426 rows) and 114 contradicted candidates across the run's contracts. A
`not_applicable` (or `checked`) row whose reason is reused across items is not a
disposition.

## Your scope

Contract files `research/phase-2-remaining-27-batch-<b>.proof-contracts.json` for
the batches listed above. Each file is `{version, scope, contracts}` where
`contracts` maps item id to `{citations, derivations, routine_steps,
boundaries}`; every boundary row is `{case, status, reason}` (some carry
`reviewed` / `template_review`).

## What to do

1. List your flagged rows:
   `node tools/boundary-audit.mjs research/phase-2-remaining-27-batch-<b>.proof-contracts.json [more files] --json`
   → take the entries whose item id is in your batches, from both `templates`
   and `contradicted`.
2. For each flagged row, read the item file `items/<id>.md` (statement, facts,
   proof) and the axis named by `case`. Then:
   - If the disposition is TRUE, rewrite `reason` so it states the item-specific
     fact that excludes (or handles) that boundary — name the exact hypothesis,
     step number or definition that does the work. No sentence may be reused
     between items.
   - If the disposition is WRONG (the boundary does arise and the proof does not
     handle it), set `status` to the true value and record the gap; if the proof
     genuinely misses a case, stop and report that item — do not edit the proof.
   - If a row is genuinely correct but truly case-generic, add
     `template_review: {reviewed_by: "<your label>", reason: "<why this item's
     text makes the template disposition true>"}` with an item-specific reason.
3. Iterate until `node tools/boundary-audit.mjs <your batch contract files>
   --fail-on-contradicted --fail-on-template` exits zero for your batches.
4. Keep the JSON valid; do not reorder or delete other items' rows, citations,
   derivations or routine steps.

## Rules

- Edit only the `boundaries` rows of the contract files for your batches. Do not
  touch item files, manifests, coverage, the merged run-level contract file, or
  other batches' contract files (sibling agents own those).
- Mathematical integrity: `not_applicable` is a mathematical claim about the
  item. Read the proof; if the axis does arise, say so.
- Report to `research/phase-2-remaining-27-boundary-cleanup-<batches>-report.md`
  with flagged rows fixed, rows whose status changed, items whose proofs need a
  real boundary case, and the final audit output for your batches.
