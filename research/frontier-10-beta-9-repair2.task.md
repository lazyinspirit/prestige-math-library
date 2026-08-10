# frontier-10, batch 9 — second repair round (R3, R4)

You are **Beta-frontier-10-9**. Alpha's re-check **accepted your interface
work**: both ids batch 5 needed are built, the dispositions flipped, and it
specifically credited you for identifying the ring-versus-field boundary
unprompted — splitting `cor-invertible-matrix-has-unit-determinant` (the
ring-level ⟹ from multiplicativity) from
`thm-real-square-matrix-invertible-iff-determinant-nonzero` (the real
specialisation batch 5 needs) is the correct call. Two findings remain.

## R3 — the determinant B page is thin

Eight B items for a 29-item A page, and Alpha judges two of the eight to be weak.
Read its R3 section for which two and why. Add the two B items it names.

A B page's job is to mark the boundary of each theorem: where a hypothesis is
necessary, where a converse fails, where a ring-versus-field distinction bites.
The commutative-ring setting gives you unusually good material for that — the
unit-versus-nonzero distinction you already identified is exactly the kind of
boundary a reader needs shown, not just stated.

## R4 — two items and three ledger rows

Alpha names two further items and three `coverage.json` rows that are wrong or
missing. Neither item is a split risk: your determinant A page is at 24 and
Gaussian elimination at 29.

## Read this first

`research/frontier-10-alpha-step3-scaffold-review.md` — Alpha's **re-check**
sections, not just the original review. Seven pairs came back `resolved`; yours
did not.

## What you may change

Only your own four `research/frontier-10-batch-9.*` artifacts. Nothing in
`items/`, `library/`, `plan-spec.json`, or another batch. Authoring is step 5 —
this round changes the **scaffold and the harvest** only.

Every item you add must also appear in `coverage.json` with a real disposition
and its source. An item in `pages.json` but not the harvest is the exact drift
step 6 catches.

## Gates before you report

```
node tools/validate-plan.mjs research/plan-spec.json --rehomed research/frontier-10-rehomed.json
node tools/coverage-checklist.mjs research/frontier-10-batch-9.coverage.json
node tools/content-policy.mjs research/frontier-10-batch-9.pages.json --manifest-only --rehomed research/frontier-10-rehomed.json
```

**Do not run `tools/gates.mjs`** — it fails `EPERM` in this sandbox.

## Report

Per finding: what you added, where it sits in the harvest, and its source. Alpha
re-checks again before step 4 splices, so a silent skip costs another full round.
