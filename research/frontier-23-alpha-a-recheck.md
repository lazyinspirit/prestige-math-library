# frontier-23 · Alpha group `a` · Step 3 recheck

Checks run against the current bytes:

- `node tools/scope-decisions.mjs refresh --run frontier-23 --group a` -> `scope-decisions: a: 21 decline(s), 0 pending`
- `node tools/scope-decisions.mjs check --run frontier-23 --group a` -> `scope-decisions: 21 current decline(s), 0 error(s)`
- `node tools/coverage-checklist.mjs research/frontier-23-batch-1.coverage.json research/frontier-23-batch-3.coverage.json research/frontier-23-batch-4.coverage.json --require-destination` -> `coverage-checklist: 4 page(s), 187 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/source-fetch-check.mjs --coverage research/frontier-23-batch-1.coverage.json` -> `source-fetch-check: 10/10 source(s) fetch-verified`
- `node tools/source-fetch-check.mjs --coverage research/frontier-23-batch-3.coverage.json` -> `source-fetch-check: 3/3 source(s) fetch-verified`
- `node tools/source-fetch-check.mjs --coverage research/frontier-23-batch-4.coverage.json` -> `source-fetch-check: 3/3 source(s) fetch-verified`
- `node tools/content-policy.mjs --manifest-only research/frontier-23-batch-1.pages.json research/frontier-23-batch-3.pages.json research/frontier-23-batch-4.pages.json` -> `content-policy: 136 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/validate-plan.mjs research/plan-spec.json` -> pass; ends `OK — declared page order is acyclic and consistent...` and emits only the repository's standing out-of-group `redundant-prereq` advisories

## Dispositions

1. `decision-problems-for-finitely-presented-groups` / `A1-1`: **closed**.
   The batch-1 `Step-3 fix pass` is accurate on the current bytes. `research/frontier-23-batch-1.pages.json` now inserts the same-page cited carrier `rem-finitely-generated-abelian-groups-admit-invariant-factor-normal-form`, rewires `thm-word-problem-for-finitely-generated-abelian-groups` away from the later `cor-fundamental-theorem-of-finitely-generated-abelian-groups-from-pid-modules` dependency, and replaces the old cited-only undecidability placeholders with schema-legal `rem-` boundary items. `research/frontier-23-batch-1.coverage.json` now backs those new boundary items from the Jeffries and MacTutor rows alongside the existing Miller stack, and the full plan check closes with no forward-reference or B-page-dependency failure. No Step-3 scaffold blocker remains on GT-7.

2. `graphs-of-groups-and-bass-serre-theory` / finding `none issued`: **closed**.
   The batch-1 pushback is accurate on the current bytes. `research/frontier-23-alpha-a-step3-scaffold-review.md` still issues no GT-15 finding, `research/frontier-23-batch-1.pages.json` still carries the same Bass-Serre A/B route for this pair, and the current coverage and plan checks reveal no new mismatch. The only live owner-level scope row on this pair remains Meier's Property FA section; it is not a missing authoring prerequisite. This pair remains sufficient.

3. `integral-extensions-and-going-up` / `A3-1`: **closed**.
   The batch-3 `Step-3 fix pass` is accurate in substance, and the pushback on the cusp-specific wording is correct on the current bytes. `research/frontier-23-batch-3.pages.json` now ends the B page with `ex-going-down-needs-normality`, while `research/frontier-23-batch-3.coverage.json` backs that item from Hochster and removes the former cusp-normalization computation from the live companion-page route. The current CA-6 scaffold now has the missing source-backed counterexample showing that the normality hypothesis in going down is load-bearing, and the refreshed scope receipt resolves the remaining Altman normalization/product rows as current `stands` rather than missing coverage. No Step-3 scaffold blocker remains on CA-6.

4. `characters-and-the-orthogonality-relations` / `A4-1`: **closed**.
   The batch-4 `Step-3 fix pass` is accurate on the current bytes. `research/frontier-23-batch-4.pages.json` now adds the four local bridge examples `ex-the-irreducible-complex-characters-of-a-finite-cyclic-group-are-the-n-powers-of-a-primitive-nth-root`, `ex-s-three-has-three-irreducible-complex-characters-of-degrees-one-one-and-two`, `ex-a-four-has-a-normal-klein-four-subgroup-and-four-conjugacy-classes`, and `ex-s-four-has-five-conjugacy-classes-of-sizes-one-six-three-eight-and-six`, then rewires the table examples to those local witnesses. A direct scan of the current batch-4 manifest no longer finds the foreign `-examples` targets Alpha flagged, the coverage file now harvest-backs the four new local witnesses, and `validate-plan` ends cleanly with no B-page-dependency failure. No Step-3 scaffold blocker remains on RT-3.

5. Group `a` scope decisions: **closed**.
   After refresh and check, all `21` current decline rows are resolved in `research/frontier-23-alpha-a-scope-decisions.json`: `18` `stands` rows and `3` `owner-decision` rows. The owner-level rows remain the abelian-Markov-property refinement on GT-7, Meier's Property FA section on GT-15, and the RT-3 center-reading theorem from Meynet-Moscrop Appendix A.3. No pending row remains for group `a`.

## Outcome

The current-byte Step-3 verdicts for group `a` are now:

- `decision-problems-for-finitely-presented-groups` -> `sufficient`
- `graphs-of-groups-and-bass-serre-theory` -> `sufficient`
- `integral-extensions-and-going-up` -> `sufficient`
- `characters-and-the-orthogonality-relations` -> `sufficient`

`research/frontier-23-alpha-a-step3-verdicts.json` is updated to match this verified state.
