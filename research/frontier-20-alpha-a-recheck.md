# frontier-20 — Alpha group `a` — Step 3 recheck

Group `a` covers batches `1` and `2`. I re-read
`research/frontier-20-alpha-a-step3-scaffold-review.md`, both batches'
`## Step-3 fix pass` sections, the current
`research/frontier-20-batch-{1,2}.pages.json` manifests, the current
`research/frontier-20-batch-{1,2}.coverage.json` ledgers, and the live
measure-theory entries in `research/plan-spec.json` and
`research/plan-measure-theory-track.md`. The verdicts below are from the current
bytes, not from the earlier review prose.

- **B1-1 — confirmed.** In `research/frontier-20-batch-1.pages.json`,
  `rem-zero-times-infinity-convention-for-pointwise-products` now depends only on
  `def-extended-reals`; the prior load-bearing dependency on the published
  `ai-generated` counterexample `cex-zero-times-infinity-indeterminate` is gone.
  The MT-7 scaffold remains coverage-backed and passes the current manifest-only
  policy check, so the earlier alpha finding is closed on disk.

Batch `2` recorded no numbered finding id in its fix pass, and that is still
accurate on the current bytes. Its only reported change was the notes-only tense
repair: `research/frontier-20-batch-2.notes.md` now correctly states that batch
`1` has nonempty item arrays (`22`, `9`, `28`, `12`) on its four owned pages.
The current manifest and coverage still support the same mathematical closure:
Bass Corollary 8.3 remains `deferred` in
`research/frontier-20-batch-2.coverage.json`, the same row is recorded as
`stands` in `research/frontier-20-alpha-a-scope-decisions.json`, and
`research/plan-spec.json` still places
`the-lebesgue-and-riemann-integrals-compared` immediately after MT-8 as the live
destination page.

## Pair verdicts

- `lebesgue-stieltjes-measures-and-distribution-functions` — **ready for splice**.
- `measurable-functions-and-simple-approximation` — **ready for splice**.
- `the-lebesgue-integral-and-the-convergence-theorems` — **ready for splice**.

## Checks run on Wednesday, August 26, 2026

- `node tools/scope-decisions.mjs refresh --run frontier-20 --group a` —
  `scope-decisions: a: 2 decline(s), 0 pending`.
- `node tools/scope-decisions.mjs check --run frontier-20 --group a` —
  `scope-decisions: 2 current decline(s), 0 error(s)`.
- `node tools/coverage-checklist.mjs research/frontier-20-batch-1.coverage.json research/frontier-20-batch-2.coverage.json`
  — `3 page(s), 104 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/content-policy.mjs --manifest-only research/frontier-20-batch-1.pages.json research/frontier-20-batch-2.pages.json`
  — `130 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/validate-plan.mjs research/plan-spec.json` — passed; only the
  existing repository-wide `redundant-prereq` advisories remain.

No group-`a` Step-3 finding remains open.
