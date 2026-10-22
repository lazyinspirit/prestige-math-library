# Batch 29 authoring notes

## Scope and plan comparison

- Run: `physics-non-fluid-129-2026-10-21-r2`, batch level 0; assigned pair `gr-fx01-hypersurface-and-null-geometry` and its examples page only.
- Current `plan-spec.json` assigns the A/B pages orders 755 and 756, with the A page requiring `gr-causal-and-initial-value-boundaries`, `gr-curvature-and-tides`, and `gr-gr13-convex-normal-neighborhoods`. These match the current batch manifest.
- The retained 2026-10-19 design reservation gives the pair order 8001. This conflicts with the current plan order; the current plan controls, so 755/756 are used.
- The design narrative says the page reuses the full Gauss–Codazzi theorem on GR14. The assigned inventory has no Gauss–Codazzi item and none of the authored null-screen, Raychaudhuri or focal-boundary items uses that theorem. It is recorded as a design-text mismatch; no unplanned result or page dependency was added. The inspected theorem remains outside this batch.
- The original three planned A items are preserved. Two local prerequisites were added to the A page: `lem-gr-fx-null-normal-plane-and-screen` proves local normal-frame and positive-screen well-definedness, and `lem-gr-fx-null-screen-index-form` proves the null second-variation identity with its initial-surface boundary term. They are pure mathematical items.
- The focal-boundary item now consumes the local index-form lemma. Its additional direct mathematical dependencies are the causal-reachability interface, the normal-neighborhood cone and convexity results, local exponential maps, smooth ODE dependence for the longitudinal correction, and the Countable/Dependent Choice hypotheses inherited from push-up. The original planned dependencies are retained.

## Items and dependency levels

Levels are recomputed from direct in-run suppliers only; all external supplier statements and proofs were inspected at their current carriers. No missing prerequisite carrier or unresolved proof was found.

| Item | Direct in-run suppliers | Level | Authoring disposition |
|---|---|---:|---|
| `lem-gr-fx-null-normal-plane-and-screen` | none | 0 | Local normal pair, positive screen quotient, symmetric null second form, screen derivative and boost law proved. |
| `def-gr-fx-null-screen-geometry` | `lem-gr-fx-null-normal-plane-and-screen` | 1 | Definitions include spacelike sections, affine congruences, screen Jacobi map and optical data. |
| `prop-gr-fx-null-raychaudhuri` | `def-gr-fx-null-screen-geometry` | 2 | Riccati and trace derivation plus conditional affine focusing bound. |
| `lem-gr-fx-null-screen-index-form` | `def-gr-fx-null-screen-geometry` | 2 | Derives the screen index form, its $+\chi_\ell$ boundary term, and realization of admissible fields. |
| `lem-gr-fx-null-focal-boundary-exclusion` | `def-gr-fx-null-screen-geometry`, `lem-gr-fx-null-screen-index-form` | 3 | Uses the index-form supplier, focal perturbation, longitudinal causal correction, cone criterion and push-up argument. |
| `ex-gr-fx01-1` | all three planned A results | 4 | Round Minkowski sphere, exact focusing radius, and direct timelike comparison after focus. |
| `ex-gr-fx01-2` | all three planned A results | 4 | Constant-along-generator boost and invariant geometric focal/boundary event. |

The batch level remains 0 because the A page has no prerequisite batch among the current run's assigned batches. The B-to-A page edge is within this batch and is therefore not entered in the cross-batch file.

## Design, conventions and mathematical checks

- Use signature $(-,+,+,+)$, curvature $R(X,Y)Z=\nabla_X\nabla_YZ-\nabla_Y\nabla_XZ-\nabla_{[X,Y]}Z$, and $K(X,Y)=g(\nabla_Xn,Y)$. In SI readings, $x^0=ct$ and the affine parameter is length-valued.
- The cited Gourgoulhon–Jaramillo review uses a different null-pair normalization in parts of its treatment and has a non-affinity term in Raychaudhuri. The local content states $g(\ell,k)=-2$ and proves the affine specialization; it does not import a mismatched normalization or omit non-affinity silently.
- The null screen inverse and all traces are on $\ell^\perp/\mathbb R\ell$; the full null-hypersurface metric is degenerate and is never inverted.
- The focal proof uses the positive initial boundary term $+\chi_\ell$ for the stated sign convention. A focal field is cut off at its first screen zero, and the derivative jump produces a negative index direction on each sufficiently short longer interval. A longitudinal correction fixes both endpoints while making a timelike subcurve; the supplied local cone criterion and push-up result then give chronological membership.
- The Raychaudhuri result is conditional on $\operatorname{Ric}(\ell,\ell)\ge0$ and generator continuation. It does not infer an energy condition, Einstein equation, curvature singularity, or empirical result.
- The B-page boost calculation assumes $f$ is constant along each generator. An arbitrary varying boost can make the rescaled generator non-affine.
- Both A/B page frontmatters are within the 100-item cap. Published pages, shared plans, imported mathematics, owner verdicts and engine state were not edited.

## Full-text source review

Full PDFs were inspected for both independent treatments. Exact URLs, locators, supported items and per-result dispositions are in `physics-non-fluid-129-2026-10-21-r2-batch-29.coverage.json`.

- É. Gourgoulhon and J.-L. Jaramillo, *A 3+1 perspective on null hypersurfaces and isolated horizons*, full arXiv PDF: curvature convention; null hypersurfaces and generators; cross-section screen metric; null second form, expansion, shear, boosts; Raychaudhuri.
- Edward Witten, *Light Rays, Singularities, and All That*, full Clay lecture PDF: focal points and promptness; null focusing; surface-origin null deformations; index form; Jacobi matrix and Raychaudhuri.
- The Gourgoulhon–Jaramillo review and Witten lecture notes are independent treatments; the lecture notes satisfy the book/lecture-notes coverage requirement.
- No retrieval failure occurred, so there are no recovery retries or dropped sources. The actual retrieval stamps are written by `source-fetch-check --stamp` and recorded in coverage.

## Supplier interface/readiness review

The current source records in `suppliers.json` were checked against the actual local carriers; the listed supplier hashes matched their current text in that snapshot. Full relevant proofs were read for the Jacobi equation, curvature symmetries, convex normal neighborhoods, normal-neighborhood causal cone, and push-up suppliers. Definitions and exact interfaces were read for Lorentzian structure, embedded submanifolds, connection and curve derivatives, causal reachability, spacelike initial data, curvature/Ricci convention, and the choice principles. Smooth ODE dependence was read in full for the parameter correction. Missing prior-run Step 1 records on external published carriers were not treated as missing mathematical prerequisites; readiness is recorded only for this batch's authored prerequisites.

The cross-batch dependency array records 31 direct external item/page edges as `verified`. This is a scoped interface check only and is not independent proof approval.

## Scoped check results

- `source-fetch-check --stamp`: 2/2 source PDFs fetch-verified; a final recheck found both stamps current and added no duplicate attempts.
- `coverage-checklist`: 1 A page, 9 harvested results, 0 errors and 0 warnings.
- `item-dependency-levels` on this batch: 7 items; levels are helper 0, definition 1, Raychaudhuri 2, index form 2, focal exclusion 3, and examples 4/4.
- `manifest-deps`: 7 manifest items, no missing dependency arrays. Cross-batch edge reconciliation found 31 required and 31 recorded rows, with no missing/extra edges or invalid rows.
- `precheck`: 6 proof-bearing items checked, 0 failures; the definition is not applicable. `proof-layout`: 7 items, 26 steps, 0 defects.
- Strict proof-contract check: 7/7 entries, 0 errors and 0 warnings. `depcheck`: 7 focused items, 1,218 prerequisite-closure items, 0 errors and 0 warnings. Scoped `rendercheck`: 9 files, 0 errors and 0 warnings.
- `author-check` batch 29: passed precheck, rendercheck, content-policy and strict proof-contract gates. `audit-manifest`: 39 relationships over 7 items, 0 defects. `manifest-integrity`: 258/258 planned pages present, with no additions or losses.
- Step 1 readiness records were written with `decision: ready` and `owner: false` for all seven authored items; `loadStep1Record`/`step1Decision` confirmed each record is current. These records are for later review and are not independent proof approval.
- The separate run-wide `proof-contract-coverage` command could not initialize because another run page, `emx-paraxial-optics`, has an empty frontier item inventory. The batch-29 strict proof-contract gate covers all seven assigned items; no other batch or shared plan was changed to clear this unrelated state.
- No tests were added or run.
