# frontier-26 · Alpha group `c` · Step 3 recheck

Group `c` owns batches `2`, `3`, and `4` in
`research/frontier-26-alpha-groups.json`: LA-20
`krylov-subspaces-arnoldi-and-gmres`, LA-21
`matrix-differentiation-and-first-order-spectral-perturbation`, MT-14
`the-lp-spaces-holder-minkowski-and-riesz-fischer`, and CA-20
`analytic-continuation-and-monodromy`.

I re-read the governing task files on Monday, August 31, 2026, then verified
the current bytes in:

- `research/frontier-26-alpha-c-step3-scaffold-review.md`
- `research/frontier-26-batch-2.notes.md` (`## Step-3 fix pass`)
- `research/frontier-26-batch-3.notes.md` (`## Step-3 fix pass`)
- `research/frontier-26-batch-4.notes.md` (`## Step-3 fix pass`)
- `research/frontier-26-batch-2.pages.json`
- `research/frontier-26-batch-3.pages.json`
- `research/frontier-26-batch-4.pages.json`
- `research/frontier-26-batch-2.coverage.json`
- `research/frontier-26-batch-3.coverage.json`
- `research/frontier-26-batch-4.coverage.json`
- `research/plan-spec.json`
- `research/plan-algebra-track-expansion-v2.md`
- `research/plan-measure-theory-track.md`
- `research/plan-complex-analysis-track.md`
- `research/frontier-26-alpha-c-scope-decisions.json`
- `research/frontier-26-alpha-c-step3-verdicts.json`

Checks run on the current bytes:

- `node tools/scope-decisions.mjs refresh --run frontier-26 --group c`
  - result: `scope-decisions: c: 11 decline(s), 0 pending`
- `node tools/scope-decisions.mjs check --run frontier-26 --group c`
  - result: `scope-decisions: 11 current decline(s), 0 error(s)`
- `node tools/coverage-checklist.mjs --require-destination research/frontier-26-batch-2.coverage.json`
  - result: `coverage-checklist: 2 page(s), 58 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/coverage-checklist.mjs --require-destination research/frontier-26-batch-3.coverage.json`
  - result: `coverage-checklist: 1 page(s), 54 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/coverage-checklist.mjs --require-destination research/frontier-26-batch-4.coverage.json`
  - result: `coverage-checklist: 1 page(s), 40 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/content-policy.mjs --manifest-only research/frontier-26-batch-2.pages.json research/frontier-26-batch-3.pages.json research/frontier-26-batch-4.pages.json`
  - result: `content-policy: 145 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/validate-plan.mjs research/plan-spec.json | tail -n 5`
  - result: pass; ends `OK — declared page order is acyclic and consistent...` and the standing repository-wide note that `727` planned pages still lack item lists
- exact manifest-to-coverage audit over the four owned A-page manifests
  - result: batch `2` LA-20 has `20/20` A-page items carrier-covered
  - result: batch `2` LA-21 has `23/23` A-page items carrier-covered
  - result: batch `3` MT-14 has `33/33` A-page items carrier-covered
  - result: batch `4` CA-20 has `22/22` A-page items carrier-covered

No newly pending scope row appeared after refresh, so no further
scope-decision resolution was required.

## Dispositions

1. Batch `2` finding `B2-1` for LA-20 coverage gaps: **closed**.
   The accepted repair stands on current disk. The LA-20 manifest still
   declares
   `def-grade-and-relative-minimal-polynomial-of-a-start-vector`,
   `prop-krylov-subspace-is-the-polynomial-image-of-the-start-vector`,
   `cor-gmres-minimizes-the-residual-over-the-affine-krylov-space`, and
   `thm-unrestarted-gmres-terminates-in-at-most-the-relative-grade-in-exact-arithmetic`,
   and the current `research/frontier-26-batch-2.coverage.json` now carries
   exact source rows for all four: Saad Set 13's minimal-polynomial notation
   and polynomial-image identity, plus Trefethen-Bau Lecture 35's residual
   minimization clause and exact-arithmetic finite-termination statement. The
   exact manifest-to-coverage audit reports `20/20` covered for
   `krylov-subspaces-arnoldi-and-gmres`, `coverage-checklist` passes with `0`
   errors and `0` warnings, and the current LA-20 design block in
   `research/plan-algebra-track-expansion-v2.md` still requires that same
   Arnoldi/GMRES spine. No further scaffold repair is owed.

2. Batch `2` finding `B2-2` for LA-21 coverage gaps: **closed**.
   The accepted repair stands on current disk. The LA-21 manifest still
   declares the matrix-differential bundle
   (`prop-matrix-differentials-obey-sum-product-and-adjoint-rules`,
   `prop-differentials-of-trace-and-frobenius-linear-functionals`,
   `prop-gradient-of-a-quadratic-matrix-form`) and the simple-eigendata spine
   (`def-compatible-left-and-right-eigenvectors-for-a-simple-eigenvalue`,
   `prop-simple-eigenvalues-admit-left-right-normalization`,
   `def-condition-number-of-a-simple-eigenvalue`,
   `prop-simple-spectral-projector-is-scale-invariant`). The current
   `research/frontier-26-batch-2.coverage.json` carries exact Edelman-Johnson
   and Bindel rows for the first six items, and it now carries an expanded
   canonical row for
   `prop-simple-spectral-projector-is-scale-invariant` that states the precise
   invariance content of the harvested projector formula
   `$P=xy^*/(y^*x)$`. That pushback is acceptable on current bytes because the
   scaffold gap was carrier coverage, not a demand for a separately titled
   source theorem, and the current canonical row is exact enough for the
   manifest claim the plan requires. The exact manifest-to-coverage audit
   reports `23/23` covered for
   `matrix-differentiation-and-first-order-spectral-perturbation`, and the
   current LA-21 design block still matches that route. No further scaffold
   repair is owed.

3. Batch `3` finding `B3-1` for MT-14 under-harvested coverage: **closed**.
   The accepted repair stands on current disk. The MT-14 manifest still
   carries the equality-case, vector-space/null-kernel, Lyapunov,
   `p -> infinity`, parallelogram-law, and `0 < p < 1` reverse-inequality
   items Alpha flagged, and the current
   `research/frontier-26-batch-3.coverage.json` now assigns carriers across the
   harvested Axler, Hunter, and Wheeden-Zygmund stack plus the expanded
   canonical list for the intended local agreement seams and synthesis bridges.
   In particular, the live coverage now names
   `thm-lyapunov-interpolation-inequality-for-l-p-norms`,
   `thm-l-p-norms-converge-to-the-essential-supremum-for-essentially-bounded-l-r-functions`,
   and `thm-parallelogram-law-in-l-two`, which the current MT-14 design block
   still calls out as downstream suppliers. The exact manifest-to-coverage
   audit reports `33/33` covered for
   `the-lp-spaces-holder-minkowski-and-riesz-fischer`, and
   `coverage-checklist` passes with `0` errors and `0` warnings. No further
   scaffold repair is owed.

4. Batch `4` finding `B4-1` for the missing function-element carrier:
   **closed**.
   The accepted repair stands on current disk. The CA-20 manifest still opens
   with `def-function-element-and-direct-analytic-continuation`, and the
   current `research/frontier-26-batch-4.coverage.json` now contains the exact
   Ahlfors row `the function-element and direct analytic continuation setup at
   the end of §1.3 and start of §1.4` for that item. The exact
   manifest-to-coverage audit reports `22/22` covered for
   `analytic-continuation-and-monodromy`, and the current CA-20 design block in
   `research/plan-complex-analysis-track.md` still requires that opening
   continuation carrier. No further scaffold repair is owed.

5. Batch `4` finding `B4-2` for the missing CA-7/CA-17 agreement seam:
   **closed**.
   The accepted repair stands on current disk. The current
   `research/frontier-26-batch-4.pages.json` now inserts
   `rem-monodromy-corollary-agrees-with-the-earlier-simply-connected-logarithm-theorems`
   immediately after
   `cor-single-valued-continuation-on-simply-connected-domains`, and the
   current `research/frontier-26-batch-4.coverage.json` carries its canonical
   carrier stating that the simply connected monodromy corollary gives a second
   proof of the earlier logarithm theorem and matches the CA-17 packaging. That
   is exactly the seam the current CA-20 design block requires. No further
   scaffold repair is owed.

6. Group `c` scope decisions: **closed**.
   After refresh and check, `research/frontier-26-alpha-c-scope-decisions.json`
   still carries `11` current decline rows and `0` pending rows, all resolved
   as `stands`. That matches the current bytes: LA-20 still stops before FOM
   and truncation variants, LA-21 still stays on first-order simple-spectrum
   perturbation, MT-14 still defers the density/separability package and keeps
   the later Wheeden-Zygmund naming trap out of scope, and CA-20 still stops
   before level-curve preliminaries, branch-point classification, and
   algebraic-function branching examples.

## Outcome

All four owned A pages are sufficient on the current bytes, so
`research/frontier-26-alpha-c-step3-verdicts.json` must be updated to match
that verified state:

- `krylov-subspaces-arnoldi-and-gmres` -> `sufficient`
- `matrix-differentiation-and-first-order-spectral-perturbation` -> `sufficient`
- `the-lp-spaces-holder-minkowski-and-riesz-fischer` -> `sufficient`
- `analytic-continuation-and-monodromy` -> `sufficient`
