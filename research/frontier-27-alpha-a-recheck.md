# frontier-27 · Alpha group `a` · Step 3 recheck

Group `a` owns batches `2`, `3`, and `4` in
`research/frontier-27-alpha-groups.json`: LA-22
`conjugate-gradients-minres-and-preconditioning`, MT-15
`density-separability-and-convolution-in-lp`, and FA-1
`normed-and-banach-spaces`.

I re-read the governing task files on Monday, August 31, 2026, then verified
the current bytes in:

- `research/frontier-27-alpha-a-step3-scaffold-review.md`
- `research/frontier-27-batch-2.notes.md` (`## Step-3 fix pass`)
- `research/frontier-27-batch-3.notes.md` (`## Step-3 fix pass`)
- `research/frontier-27-batch-4.notes.md` (`## Step-3 fix pass`)
- `research/frontier-27-batch-2.pages.json`
- `research/frontier-27-batch-3.pages.json`
- `research/frontier-27-batch-4.pages.json`
- `research/frontier-27-batch-2.coverage.json`
- `research/frontier-27-batch-3.coverage.json`
- `research/frontier-27-batch-4.coverage.json`
- `research/plan-spec.json`
- `research/frontier-27-alpha-a-scope-decisions.json`
- `research/frontier-27-alpha-a-step3-verdicts.json`

Checks run on the current bytes:

- `node tools/scope-decisions.mjs refresh --run frontier-27 --group a`
  - result: `scope-decisions: a: 17 decline(s), 0 pending`
- `node tools/scope-decisions.mjs check --run frontier-27 --group a`
  - result: `scope-decisions: 17 current decline(s), 0 error(s)`
- `node tools/coverage-checklist.mjs --require-destination research/frontier-27-batch-2.coverage.json`
  - result: `coverage-checklist: 1 page(s), 34 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/coverage-checklist.mjs --require-destination research/frontier-27-batch-3.coverage.json`
  - result: `coverage-checklist: 1 page(s), 59 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/coverage-checklist.mjs --require-destination research/frontier-27-batch-4.coverage.json`
  - result: `coverage-checklist: 1 page(s), 46 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/content-policy.mjs --manifest-only research/frontier-27-batch-2.pages.json research/frontier-27-batch-3.pages.json research/frontier-27-batch-4.pages.json`
  - result: `content-policy: 106 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/source-fetch-check.mjs --coverage research/frontier-27-batch-2.coverage.json`
  - result: `source-fetch-check: 4/4 source(s) fetch-verified`
- `node tools/source-fetch-check.mjs --coverage research/frontier-27-batch-3.coverage.json`
  - result: `source-fetch-check: 4/4 source(s) fetch-verified`
- `node tools/source-fetch-check.mjs --coverage research/frontier-27-batch-4.coverage.json`
  - result: `source-fetch-check: 4/4 source(s) fetch-verified`
- `node tools/validate-plan.mjs research/plan-spec.json`
  - result: pass; the command ends `OK` and reports only the repository's
    standing `redundant-prereq` advisories plus the usual note that many
    planned pages still carry no item list
- focused manifest-to-carrier audit over the current A-page manifests
  - result: batch `2` carrier coverage `21/21`, batch `3` carrier coverage
    `35/35`, batch `4` carrier coverage `20/20`; all three pages have
    `missing: []`
- focused A-page dependency audit over the current manifests
  - result: `0` foreign `-examples` dependencies from any owned A-page item

No newly pending scope row appeared after refresh, so no additional
scope-decision resolution was required.

## Dispositions

1. Batch `2` carrier-completeness repair: **closed**.
   The accepted repair still stands on current disk. The live A-page manifest
   still carries `21` items in
   `research/frontier-27-batch-2.pages.json`, the current canonical section of
   `research/frontier-27-batch-2.coverage.json` still includes the five
   previously missing carriers named in the stable review, and my current
   manifest-to-carrier audit reports `21/21` covered with `missing: []`.
   `coverage-checklist` passes with `0` errors and `0` warnings, so no further
   scaffold edit is owed.

2. Batch `2` retained LA-22 scope boundaries: **closed**.
   The stable review's pushback still matches the live bytes. The current
   coverage still keeps Hestenes-Stiefel `Theorem 5:2` and `Theorem 6:2` as
   `out-of-scope`, and still defers Strang `Jacobi Iterations`, *Templates*
   `3.2 Jacobi Preconditioning`, `3.2.2 Discussion`, and Shewchuk `Figure 36`
   to `conjugate-gradients-minres-and-preconditioning-examples`. The current
   A-page dependency audit finds `0` foreign B-page deps, `source-fetch-check`
   still passes `4/4`, and the plan still contains the exact current
   destination page id for the deferred worked-example material. No scope or
   manifest change is owed.

3. Batch `3` carrier-completeness and dependency repairs: **closed**.
   Both accepted repairs still stand on current disk. The live A-page manifest
   still carries `35` items in
   `research/frontier-27-batch-3.pages.json`, the current coverage still
   includes the fourteen repaired canonical carriers named in the stable
   review, and my current manifest-to-carrier audit reports `35/35` covered
   with `missing: []`. The current A-page dependency audit also finds `0`
   foreign `-examples` dependencies, confirming that the smoothness route no
   longer spends `def-ck-euclidean-maps-and-diffeomorphisms` and that
   `def-mollifier-family-generated-by-a-unit-mass-smooth-bump` no longer
   depends on the foreign B-page item `ex-smooth-compactly-supported-bump`.
   `coverage-checklist` passes with `0` errors and `0` warnings, so no further
   scaffold edit is owed.

4. Batch `3` Lebesgue-point deferment
   `a2fbe72bf7589ef070b8ee68abddb5fa8b5e1bc9153b9346ebe2bd35bdf3b546`:
   **closed**.
   The explicit pushback remains correct on current bytes. Tao's stronger
   convergence-at-Lebesgue-points row is still deferred in
   `research/frontier-27-batch-3.coverage.json`, the MT-15 page contract still
   stops at `L^p` convergence and compact-uniform convergence for continuous
   data, and the current `research/plan-spec.json` still has no exact later
   page id that cleanly absorbs this stronger statement. The existing
   `owner-decision` row in
   `research/frontier-27-alpha-a-scope-decisions.json` remains the right
   disposition.

5. Batch `4` carrier-completeness repair: **closed**.
   The accepted repair still stands on current disk. The live A-page manifest
   still carries `20` items in
   `research/frontier-27-batch-4.pages.json`, the current canonical section of
   `research/frontier-27-batch-4.coverage.json` still includes the nine
   previously missing carriers named in the stable review, and my current
   manifest-to-carrier audit reports `20/20` covered with `missing: []`.
   The current A-page dependency audit finds `0` foreign B-page deps,
   `source-fetch-check` still passes `4/4`, and the retained deferments to
   `bounded-linear-operators-and-quotient-spaces` and
   `finite-dimensional-normed-spaces-and-riesz-lemma` still match the live
   plan boundary. No further scaffold edit is owed.

6. Group `a` scope decisions: **closed**.
   After refresh and check,
   `research/frontier-27-alpha-a-scope-decisions.json` now carries `17`
   current decline rows and `0` pending rows. Sixteen rows still resolve as
   `stands`, and the one MT-15 Lebesgue-point row still resolves as
   `owner-decision`. The deferred destination pages named in the stable review
   still exist on the current plan bytes:
   `conjugate-gradients-minres-and-preconditioning-examples`,
   `the-duality-of-lp-and-lq`,
   `bounded-linear-operators-and-quotient-spaces`, and
   `finite-dimensional-normed-spaces-and-riesz-lemma`. No scope-boundary
   change is owed.

## Outcome

All three owned A pages remain sufficient on the current bytes, and
`research/frontier-27-alpha-a-step3-verdicts.json` already matches that
verified state:

- `conjugate-gradients-minres-and-preconditioning` -> `sufficient`
- `density-separability-and-convolution-in-lp` -> `sufficient`
- `normed-and-banach-spaces` -> `sufficient`

No verdict-byte change was required in this recheck pass.
