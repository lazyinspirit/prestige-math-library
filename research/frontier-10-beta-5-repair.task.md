# frontier-10, batch 5 — step-3 repair round

You are **Beta-frontier-10-5**, returning to repair your own scaffold after
Alpha's step-3 breadth-and-depth review.

## Read this first

`research/frontier-10-alpha-step3-scaffold-review.md` — **your sections are
§8 `fubini-and-change-of-variables` (B5)**. Read the whole file's opening and its F1 section too; read your own
sections in full and treat every "add" as required, not advisory.

Your pair is `insufficient` for B5. Batch 9 has now scaffolded the determinant machinery you blocked on, and **all four interfaces you asked for exist under exactly the ids you named** — `def-determinant-of-a-square-matrix`, `thm-determinant-under-elementary-row-operations`, `thm-determinant-multiplicative`, `thm-invertible-matrices-factor-into-elementary-matrices`. No id substitution to reconcile. Read `research/frontier-10-batch-9.pages.json` on disk for their exact titles and kinds, then scaffold the change-of-variables material you correctly refused to fake. Alpha also assigns you two additional determinant interfaces in B5 — pass those to batch 9 via your notes rather than minting them yourself.

## What you may change

Only your own four artifacts:

- `research/frontier-10-batch-5.pages.json`
- `research/frontier-10-batch-5.notes.md`
- `research/frontier-10-batch-5.coverage.json`
- `research/frontier-10-batch-5.proof-contracts.json`

Nothing in `items/`, `library/`, `plan-spec.json`, or another batch. Authoring is
step 5 — this round changes the **scaffold** only.

## Keep the coverage checklist true

Every item you add must appear in `coverage.json` with a real disposition and,
where it came from a source, the source that carries it. An addition that shows
up in `pages.json` but not the harvest is a step-6 failure. If Alpha's finding
names a result none of your sources covered, add the source too — that is itself
the finding.

## The 60-item ceiling still binds

`validate-plan.mjs` errors with `size` above 60 A-page items. If your additions
would cross it, **propose a split in your notes and stop** — do not prune to fit,
and do not split unilaterally.

## Gates before you report

```
node tools/validate-plan.mjs research/plan-spec.json --rehomed research/frontier-10-rehomed.json
node tools/coverage-checklist.mjs research/frontier-10-batch-5.coverage.json
node tools/content-policy.mjs research/frontier-10-batch-5.pages.json --manifest-only --rehomed research/frontier-10-rehomed.json
```

**Do not run `tools/gates.mjs`** — it fails `EPERM` in this sandbox; the scripts
above are the same checks and the orchestrator runs the wrapper.

## Report

Per finding: what you added, where it is in the harvest, and its source. If you
disagree with a finding, say so with evidence rather than silently skipping it —
Alpha re-checks every pair before step 4 splices.
