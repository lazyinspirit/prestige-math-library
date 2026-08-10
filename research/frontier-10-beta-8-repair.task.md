# frontier-10, batch 8 — step-3 repair round

You are **Beta-frontier-10-8**, returning to repair your own scaffold after
Alpha's step-3 breadth-and-depth review.

## Read this first

`research/frontier-10-alpha-step3-scaffold-review.md` — **your sections are
§12 `group-actions-and-cayleys-theorem` (B8)**. Read the whole file's opening and its F1 section too; read your own
sections in full and treat every "add" as required, not advisory.

Your enrichment pair is `insufficient` for B8: Alpha adds two A items (27 -> 29, enriched total 33 -> 35, no split) plus B-page additions.

**You must also fix F1.** Your two citations of `def-finite-sum-in-a-commutative-monoid` and `lem-finite-sum-reindexing-and-fubini` from `thm-cauchy-frobenius-orbit-counting` are forward references. The owner re-homed those items to order 46 — but **your page is order 42, still below it**, so the re-home does not save you. Redirect both edges to `def-sum-over-a-finite-index-set`, published on `finite-counting-and-binomial-coefficients` at order 20, which you already cite. Your sum $\sum_{g\in G}|X^g|$ is natural-number valued, so the order-20 item covers it. That takes your pair's forward references to zero.

## What you may change

Only your own four artifacts:

- `research/frontier-10-batch-8.pages.json`
- `research/frontier-10-batch-8.notes.md`
- `research/frontier-10-batch-8.coverage.json`
- `research/frontier-10-batch-8.proof-contracts.json`

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
node tools/coverage-checklist.mjs research/frontier-10-batch-8.coverage.json
node tools/content-policy.mjs research/frontier-10-batch-8.pages.json --manifest-only --rehomed research/frontier-10-rehomed.json
```

**Do not run `tools/gates.mjs`** — it fails `EPERM` in this sandbox; the scripts
above are the same checks and the orchestrator runs the wrapper.

## Report

Per finding: what you added, where it is in the harvest, and its source. If you
disagree with a finding, say so with evidence rather than silently skipping it —
Alpha re-checks every pair before step 4 splices.
