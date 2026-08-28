# frontier-22 · Alpha group `d` · Step 3 recheck

Checks run on Friday, August 28, 2026, against the current bytes:

- `node tools/scope-decisions.mjs refresh --run frontier-22 --group d` -> `scope-decisions: d: 13 decline(s), 0 pending`
- `node tools/scope-decisions.mjs check --run frontier-22 --group d` -> `scope-decisions: 13 current decline(s), 0 error(s)`
- `node tools/coverage-checklist.mjs research/frontier-22-batch-6.coverage.json research/frontier-22-batch-7.coverage.json` -> `coverage-checklist: 3 page(s), 87 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/content-policy.mjs --manifest-only research/frontier-22-batch-6.pages.json research/frontier-22-batch-7.pages.json` -> `content-policy: 99 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/validate-plan.mjs research/plan-spec.json` -> pass; ends `OK — declared page order is acyclic and consistent...` and reports only the standing repository-wide `redundant-prereq` advisories, including the already-noted direct-edge redundancies on `normal-families-and-montels-theorem` and `holomorphic-inverse-and-weierstrass-preparation`

## Dispositions

1. `the-riemann-sphere-and-mobius-transformations` / finding `none issued`: **closed**.
   The review's `sufficient` verdict still matches the current bytes. `research/frontier-22-alpha-d-step3-scaffold-review.md` still marks CA-11 sufficient, `research/frontier-22-batch-6.pages.json` still carries the same 22-item A route and 12-item B companion, and the live scope receipt still refreshes and checks with the same CA-11 deferments and owner decisions standing in `research/frontier-22-alpha-d-scope-decisions.json`. The current coverage still records the CA-12 deferrals to `conformal-mapping-branches-and-the-schwarz-lemma`, so no manifest or coverage repair is owed on this pair.

2. `normal-families-and-montels-theorem` / finding `B6-1`: **closed**.
   The batch-6 `Step-3 fix pass` is accurate on current bytes. `research/frontier-22-batch-6.notes.md` records `B6-1` as accepted with no further edit needed, `research/frontier-22-batch-6.pages.json` still lists `ascoli-arzela` in the page-level `requires`, and the current item route still cites `cor-ascoli-arzela-for-compact-metric-domains` in both `thm-montel-theorem-for-holomorphic-functions` and `thm-chordal-arzela-ascoli-criterion-for-meromorphic-families`. `library/topology/ascoli-arzela.md` still homes that published corollary, so the manifest now closes honestly on disk and no blocker remains for CA-15.

3. `holomorphic-inverse-and-weierstrass-preparation` / finding `none issued`: **closed**.
   The batch-7 `Step-3 fix pass` pushback is accurate on current bytes. `research/frontier-22-alpha-d-step3-scaffold-review.md` still contains no `B7-*` row, `research/frontier-22-batch-7.pages.json` still carries the manifest-only closure edges `the-field-of-fractions-and-localisation` and `constant-rank-submersions-and-regular-level-sets`, and the current scope receipt still refreshes and checks with `0` pending rows. The current coverage remains intact and the plan check still ends cleanly apart from standing `redundant-prereq` advisories, so SC-3 remains sufficient with no further scaffold change owed in Step 3.

## Outcome

The current-byte Step-3 verdicts for group `d` remain:

- `the-riemann-sphere-and-mobius-transformations` -> `sufficient`
- `normal-families-and-montels-theorem` -> `sufficient`
- `holomorphic-inverse-and-weierstrass-preparation` -> `sufficient`

`research/frontier-22-alpha-d-step3-verdicts.json` already matches this verified state, so no byte change was required there.
