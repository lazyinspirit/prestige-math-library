# Batch 56 authoring notes — Parabolic finite-element methods

Run: `numerical-optimization-dynamics-2026-10-16`  
Pair: `parabolic-finite-element-methods` / `parabolic-finite-element-methods-examples`  
Assigned role: beta; batch dependency level 3; prerequisite batches 24 and 38.

## Controlling design and inventory

The controlling design is NA-36 in `research/plan-numerical-spatial-track.md` (the pair’s declared category and the `plan-spec.json` scaffold pointer both select this file). Its proof route requires the evolution-space trace and integration-by-parts lemma, the space-time BNB theorem, the exact semidiscrete Ritz residual, and separately conditioned time-discrete rates. The duplicate NA-36 section in `research/plan-numerical-analysis-track.md` agrees on scope and route. The owner direction makes the repaired spatial plan and its incorporated contract authoritative over historical abbreviated designs; it also requires continued authoring against absent supplier bodies without claiming their readiness. No mathematical conflict between the two NA-36 descriptions was found.

`plan-spec.json` has the A/B page identities and the required supplier pages, but leaves both item inventories empty. The generated batch-56 manifest therefore controls the assigned inventory: 21 A-page items and 3 B-page examples (24 total, below the 100-item page cap). The A page carries the proof sequence and the B page carries the three examples. The dispatch scheduling input is `6dfd0c45f2a8223c7d6f772198513d38987ad90fa865c52f24f2241dd5c6d510`. The recorded run dependency artifact assigns batch 56 level 3 with prerequisites `[24, 38]`.

Levels were recomputed from the full current-run item graph, so in-run suppliers in other batches count. All 24 declared labels match: the A page has levels `{0:4, 1:8, 2:4, 3:2, 4:1, 5:1, 7:1}` and the B page has `{2:1, 4:1, 6:1}`. Suppliers were authored before consumers in ascending local item level. The local-only projection is not a valid level check because it omits in-run cross-batch suppliers.

## Mathematical route and axiom branch

The A page defines the real evolution triple and energy space, proves the Hilbert-valued energy identity, trace/integration-by-parts, Bochner approximation and mollification, weak compactness, BNB, measurable form-operator and inverse measurability, and the concrete separable `H^1_0(Ω) ↪ L^2(Ω) ↪ H^{-1}(Ω)` setting before using them. Continuous well-posedness follows the controlling space-time BNB route, with the measurable inverse action proved locally and arbitrary initial data in `H` reached by approximation from `V`. The semidiscrete error proof retains the full Ritz residual; a differentiable time-dependent comparison map has an explicit operator-norm `C^1` hypothesis and the `P'(t)u(t)` term. The backward-Euler and Crank–Nicolson results retain their separate data, initial projection, and time-regularity hypotheses. The examples calculate the four-triangle heat projection case, check the Ritz residual, and exhibit the Crank–Nicolson order loss.

Countable Choice is explicit wherever used and is not silently strengthened to full Choice. It enters the Bochner `L²` approximation/translation and mollification arguments, weak subsequence extraction, the separability/density constructions, Hilbert Riesz/BNB and measurable inverse arguments, and the finite-element zero-boundary inclusion. Dependent trace, well-posedness, semidiscrete, rate, and example items carry the needed assumption. The zero-boundary inclusion is the one unresolved external proof dependency; no local theorem asserts its supplier is ready.

## Sources and harvested coverage

The A-page coverage ledger records two independent full-text treatments, the exact supported items, every harvested result and its disposition (including excluded dG results), and the source-specific limitations:

- Christian Clason, *Introduction to Finite Element Methods*, full PDF: <https://arxiv.org/pdf/1709.08618v2.pdf>. Complete Chapter 8 Theorem 8.1 and Chapters 11–12 were inspected (PDF pp. 60–62 and 100–115; §§8.1, 11.1–11.2, 12.1–12.3 and Theorems 11.1–11.3, 12.1–12.4). The PDF stamp records 964,669 bytes, 118 pages, SHA-256 prefix `905aa791535978f0`. Clason’s Theorem 11.3 leaves measurability of the inverse action implicit; the local Galerkin-approximation lemma supplies that argument. The continuous existence proof follows the controlling BNB route.
- Long Chen, *Finite Element Methods for Parabolic Equations*, full PDF: <https://www.math.uci.edu/~chenlong/226/ParabolicEquation.pdf>. All 12 pages and §§1–3 were inspected, including Theorems 1.2, 2.1–2.10, Lemmas 2.2 and 2.6, and Theorems 3.3–3.4. The PDF stamp records 258,084 bytes, 12 pages, SHA-256 prefix `da5a65cd13361cf1`. One browser page-open returned HTTP 502; the direct complete PDF retrieval succeeded and this history is retained in the coverage record. The time-step algorithms use interval averages for L² data rather than silently assuming point samples exist.

`source-fetch-check --stamp` recorded both complete PDFs as fetch-verified (two recorded retrieval attempts per source; no newly unstamped source remained). The final check-mode run reports 2/2 fetch-verified and 2/2 resolved, with zero source drops. The coverage checklist records 51 harvested results and zero errors or warnings. No source is marked dropped or owner-escalated.

## Cross-batch prerequisite audit and escalations

Actual supplier statements and proofs were inspected; the exact excerpts, interfaces, and readiness audit are in `research/numerical-optimization-dynamics-2026-10-16-batch-56.cross-batch-dependencies.json`. Supplier author-readiness claims are not independent approval.

**Batch 24 / NA-28.** `def-matching-affine-simplicial-meshes` and `def-broken-and-conforming-polynomial-spaces` are hash-current. `thm-zero-boundary-piecewise-polynomials-in-w10p` has a Step 1 row marked `ready`, but its current hash check is stale. Its required interface is: Countable Choice; bounded polyhedral open `Ω`; a finite matching affine simplicial mesh; a real conforming piecewise polynomial with zero trace on every boundary facet; and `p=2`, yielding membership in `W^{1,2}_0(Ω)`. This affects `V_h ⊂ H^1_0(Ω)` in the semidiscrete theorem and Ritz error result and the `H^1_0` membership of both fan-mesh examples. The five affected local items remain complete drafts with complete contracts, but are escalated pending owner-side supplier reconciliation:

- `thm-parabolic-fem-semidiscrete-existence-energy`
- `thm-parabolic-semidiscrete-ritz-error-splitting-and-energy-bound`
- `ex-parabolic-heat-initial-projection-error`
- `ex-parabolic-semidiscrete-ritz-error-identity`

**Batch 38 / NA-29.** The direct suppliers `thm-cea-quasi-optimality-for-conforming-galerkin-approximations`, `cor-shape-regular-affine-fe-primal-energy-approximation`, and `cor-aubin-nitsche-h-r-plus-s-rate-under-primal-and-dual-approximation` have hash-stale Step 1 rows. Their transitive draft suppliers `thm-adjoint-problem-for-bounded-coercive-variational-forms`, `lem-galerkin-orthogonality-for-conforming-galerkin-approximations`, `lem-affine-pullback-weak-derivatives-and-scaling`, `lem-shape-regular-affine-simplex-scaling`, and `thm-bramble-hilbert-on-reference-simplex` are also hash-stale. The Cea claim requires the same real bounded/coercive form and a finite-dimensional conforming subspace. The primal rate additionally requires a matching shape-regular affine mesh family, an unisolvent reference element containing `P_r`, bounded degrees of freedom on `W^{r+1,2}`, and an actual global conforming boundary-preserving interpolant. The `h^{r+s}` claim requires the supplied adjoint problem and uniform regularity/approximation bounds for both `u(t)` and `u'(t)`; the `h^{r+1}` case remains conditional on `s=1` and those bounds, not a generic polyhedral-domain regularity claim. These unresolved hypotheses affect `cor-parabolic-semidiscrete-spatial-error-rates`, which remains escalated. Its `h^r`, `h^{r+s}`, and downstream time-dependent energy-rate claims are retained.

The scoped Step 1 recheck after the final local proof edit finds 19 `ready` records current and the five items above `escalated`; the escalations were not overwritten. The local proofs, placements, contracts, and mathematical claims remain present for owner reconciliation.

## Checks and run-wide blockers

Batch-scoped checks after final item edits:

- `manifest-deps`: 24 items, no errors.
- Full-run graph projection filtered to batch 56: all 24 item dependency labels match; no batch-56 level mismatch.
- `proof-layout`: 24 items, 91 numbered steps, zero defects.
- `precheck`: 20 proof-bearing items checked, zero failures.
- `rendercheck`: 26 files (24 items and both A/B pages), all YAML/frontmatter and math spans pass.
- `content-policy`: 24 items, zero errors or warnings.
- Strict proof contracts: 24/24 items pass; scoped proof-contract coverage: 20/20 supplied arguments covered.
- `coverage-checklist --require-destination`: 51 harvested results, zero errors or warnings.
- `source-fetch-check`: 2/2 sources fetch-verified; 2/2 resolved; no drops.

Run-wide checks are blocked by unrelated current-run work and were left untouched. `item-dependency-levels.mjs check` reports 30 empty scaffold pages plus three mismatches outside this batch (`def-stiefel-grassmann-projected-vector-transport`, `prop-stiefel-grassmann-vector-transport-is-tangent`, and `lem-smolyak-mixed-trapezoid-detail-decay`); it reports no batch-56 mismatch. `batch-dependency-levels.mjs check` stops on malformed YAML in batch 87 item `alg-finite-sectional-forward-euler-positivity-cfl.md` (unquoted `title` containing a colon at frontmatter line 20). The full `step1-decisions check` stops while hashing unrelated item `items/alg-chebyshev-composite-simpson-weighted-mass-matrix.md`: its frontmatter repeats `pipeline_run` (second occurrence at file line 26 / YAML line 25). Neither foreign item was edited. Batch 56’s targeted Step 1 statuses were rechecked directly against current hashes.

These authoring records and mechanical checks are not independent mathematical approval, do not resolve upstream stale records, and do not complete the run’s owner-controlled workflow.
