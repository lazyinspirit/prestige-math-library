# frontier-23 · Alpha group `d` · Step 3 recheck

Checks run on Friday, August 28, 2026, against the current bytes:

- `node tools/scope-decisions.mjs refresh --run frontier-23 --group d` -> `scope-decisions: d: 25 decline(s), 0 pending`
- `node tools/scope-decisions.mjs check --run frontier-23 --group d` -> `scope-decisions: 25 current decline(s), 0 error(s)`
- `node tools/coverage-checklist.mjs research/frontier-23-batch-8.coverage.json research/frontier-23-batch-10.coverage.json --require-destination` -> `coverage-checklist: 2 page(s), 99 harvested result(s), 0 error(s), 1 warning(s)` with the standing `coverage-low-yield` warning on `formal-languages-encodings-and-decision-problems` (`20/55` included)
- `node tools/content-policy.mjs --manifest-only research/frontier-23-batch-8.pages.json research/frontier-23-batch-10.pages.json` -> `content-policy: 80 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/validate-plan.mjs research/plan-spec.json` -> pass; ends `OK — declared page order is acyclic and consistent...` and emits only the repository's standing `redundant-prereq` advisories

## Dispositions

1. `exactness-and-the-member-calculus` / `B8-1`: **closed**.
   The batch-8 `Step-3 fix pass` is accurate on the current bytes. `research/frontier-23-batch-8.pages.json` now gives the A page exactly the three backward prerequisites required by the live MA-10 design at `research/plan-category-theory-track.md:2068-2071`: `abelian-categories`, `subobject-lattices-generators-and-the-grothendieck-axioms`, and `free-modules-and-exact-sequences`. The old drift to the B page `subobject-lattices-generators-and-the-grothendieck-axioms-examples` is gone, and the full plan check still closes cleanly apart from standing out-of-group `redundant-prereq` advisories. No further manifest repair is owed on this finding.

2. `exactness-and-the-member-calculus` / `B8-2`: **closed**.
   The batch-8 repair note is also accurate on the current bytes. The current manifest no longer carries the forbidden published B-page dependency edges Alpha flagged: `cex-hom-is-not-exact` now depends only on `thm-hom-is-left-exact-in-each-variable` and `thm-abelian-groups-form-an-abelian-category`, while `cex-a-non-split-short-exact-sequence-of-abelian-groups` now depends only on the local split-sequence items plus `thm-abelian-groups-form-an-abelian-category`. A direct scan of `research/frontier-23-batch-8.pages.json` finds no remaining dependency on `cex-contravariant-hom-need-not-be-right-exact` or `cex-nonsplit-short-exact-sequence-of-integers-mod-two`, and `node tools/validate-plan.mjs research/plan-spec.json` still ends with no B-page-dependency failure. This finding is closed.

3. `formal-languages-encodings-and-decision-problems` / finding `none issued`: **closed**.
   The batch-10 `Step-3 fix pass` pushback is accurate on the current bytes. `research/frontier-23-alpha-d-step3-scaffold-review.md` still issues no `B10-*` finding id, `research/frontier-23-batch-10.pages.json` still carries the repaired local false statement `fs-every-effective-encoding-is-prefix-free` together with `cex-an-effective-encoding-need-not-be-prefix-free`, and the current coverage file keeps the two rerouted decline rows on their corrected destinations: Arora-Barak `Theorem 2.19` now defers to `p-np-conp-and-polynomial-reductions` without overclaiming verbatim later coverage, and Sipser's `A TM has three possible outcomes for each input` now defers to `turing-machines-configurations-and-computation`. The standing `coverage-low-yield` warning remains the same reviewed, destination-complete warning rather than a new scaffold defect. This pair remains sufficient with no Step-3 content change owed.

4. Group `d` scope decisions: **closed**.
   After the refresh surfaced two changed batch-10 rows as `pending`, the current owner evidence now closes both as `owner-decision` in `research/frontier-23-alpha-d-scope-decisions.json`: one for Arora-Barak `Theorem 2.19`, because the live TC-20 page at `research/plan-computability-theory-track.md:878-890` names only `def-search-version-of-an-np-relation` and the SAT-specific theorem, and one for Sipser's TM-outcomes row, because the exact current home is TC-9 at `research/plan-computability-theory-track.md:479-487`. The refreshed receipt now stands at `23` `stands` rows and `2` `owner-decision` rows, and `check` reports `0` errors.

## Outcome

The current-byte Step-3 verdicts for group `d` remain:

- `exactness-and-the-member-calculus` -> `sufficient`
- `formal-languages-encodings-and-decision-problems` -> `sufficient`

`research/frontier-23-alpha-d-step3-verdicts.json` already matches this verified state on current disk.
