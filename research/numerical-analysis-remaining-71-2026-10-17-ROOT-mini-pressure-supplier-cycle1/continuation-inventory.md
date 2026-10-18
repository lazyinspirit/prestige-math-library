# Proposed additions for one future native batch-41 continuation

This is research packaging within the same first owner cycle. It changes no current manifest or canonical carrier and supplies no readiness, hash, validator or native coverage claim. The original instantaneous pressure obligations remain unchanged and unresolved.

Both proposed items belong to the existing A page `energy-stable-incompressible-navier-stokes-discretization`, category `numerical-pdes-and-spatial-discretization`. No new pair or B-page inventory is requested.

| Order | ID | Kind | Proposed source dependency level | Placement |
|---|---|---|---|---|
| 1 | `lem-na-solenoidal-evolution-integrated-pressure-recovery` | lemma | 11 | After the existing velocity subsequential-limit theorem, before the smooth pressure-primitive result. |
| 2 | `thm-na-mini-be-smooth-integrated-pressure-error` | theorem | 11 | After the existing smooth velocity-error theorem; may follow addition 1. |

The combined reconstruction lemma includes discrete primitive convergence and therefore consumes the existing velocity convergence theorem. It must **not** be inserted as a supplier of that unchanged theorem or placed logically before it. The earlier note’s continuous-reconstruction-before-convergence suggestion applies only to a separated continuous-only lemma; that split is unnecessary here. The two additions are mutually independent in the dependency DAG. Existing suppliers precede both; their maximum currently declared in-run supplier level is 10. Root owns actual level/manifest reconciliation after the live author drains.

## Inventory row: lem-na-solenoidal-evolution-integrated-pressure-recovery

- `id`: `lem-na-solenoidal-evolution-integrated-pressure-recovery`
- `kind`: `lemma`
- `title`: "Integrated pressure recovery and MINI pressure-primitive convergence"
- `strategy`: `direct`
- `source`: `proposed-items/lem-na-solenoidal-evolution-integrated-pressure-recovery.md`
- `deps` (exact proposed array):

```yaml
deps: [def-na-solenoidal-energy-weak-ns-velocity, def-na-stokes-zero-mean-pressure-and-velocity-spaces, def-na-evolutionary-skew-convective-form, lem-na-evolutionary-skew-convective-form-bound, thm-na-bounded-lipschitz-domain-divergence-right-inverse, lem-na-zero-mean-of-zero-boundary-divergence, lem-na-continuous-pressure-recovery-from-solenoidal-residual, thm-na-mini-navier-stokes-be-subsequential-limit, def-na-mini-navier-stokes-backward-euler-scheme, thm-na-mini-be-step-existence-energy, thm-na-mini-element-fortin-stability, lem-na-mini-fortin-l2-approximation, lem-pe12-bochner-lp-mollification, lem-parabolic-weak-compactness-separable-bochner-hilbert, lem-l-two-with-the-integral-pairing-is-a-hilbert-space, thm-rational-box-step-functions-form-a-countable-dense-subset-of-l-p-of-rn, thm-riesz-representation-for-hilbert-space, thm-orthogonal-decomposition-by-a-closed-subspace, thm-poincare-inequality-for-w-one-p-zero, cor-sobolev-inequality-for-w-one-p-zero, thm-holder-inequality-for-integrals, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, thm-bochner-integrability-criterion, lem-bochner-integral-norm-inequality, thm-bounded-linear-maps-commute-with-bochner-integration, cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives, thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions, thm-locally-integrable-functions-embed-in-distributions, def-distributional-derivative, def-axiom-of-choice, lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]
```

## Inventory row: thm-na-mini-be-smooth-integrated-pressure-error

- `id`: `thm-na-mini-be-smooth-integrated-pressure-error`
- `kind`: `theorem`
- `title`: "First-order smooth pressure-primitive error for backward Euler MINI"
- `strategy`: `direct`
- `source`: `proposed-items/thm-na-mini-be-smooth-integrated-pressure-error.md`
- `deps` (exact proposed array):

```yaml
deps: [thm-na-mini-be-smooth-velocity-error, def-na-mini-navier-stokes-backward-euler-scheme, def-na-evolutionary-incompressible-ns-weak-solution, def-na-stokes-zero-mean-pressure-and-velocity-spaces, thm-na-mini-element-fortin-stability, lem-na-scott-zhang-boundary-preserving-p1-interpolant, def-na-mini-element-p1-bubble-p1-spaces, lem-na-evolutionary-skew-convective-form-bound, thm-na-mini-be-step-existence-energy, thm-poincare-inequality-for-w-one-p-zero, thm-holder-inequality-for-integrals, thm-bochner-integrability-criterion, lem-bochner-integral-norm-inequality, thm-bounded-linear-maps-commute-with-bochner-integration, cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives, thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions, def-countable-choice]
```

## Scope and integration dispositions

Preserve every current original Statement and Definition. These are additive pressure conclusions, not substitutes for the L^(4/3)_tL² pressure-existence clause or the instantaneous smooth pressure-rate clause. The reconstruction lemma retains the proved actual-full-u_t criterion in Remarks; its missing regularity input is not treated as a proved supplier. The smooth addition displays an explicit constant in terms of the existing C_* and its viscosity dependence and does not impose a mesh/time coupling.

The proposed carriers contain complete typed statements, Facts & Assumptions, explicit choice assumptions and dependency IDs, tagged phase-format proofs, and precise source locators. Their verification maps are empty. No proof-layout, tests, gate or publication acceptance is claimed. Root retains the second/final actual consumer-review cycle after native author drain and owns all manifest, proof-contract, source-level and readiness maintenance.
