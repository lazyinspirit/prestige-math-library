# Batch 53 — Step 1 authoring notes

Run: `numerical-analysis-remaining-71-2026-10-17`  
Batch: `53`  
Pair: `discontinuous-galerkin-methods` / `discontinuous-galerkin-methods-examples`

## Inventory and dependency order

The A page contains 11 items and the B page contains 3 examples, below the 100-item page cap. The A-page inventory is `lem-sipdg-physical-simplex-trace-green`, `def-sipdg-jump-average-convention`, `def-sipdg-bilinear-form-and-energy-norm`, `lem-sipdg-discrete-flux-inverse-bound`, `lem-sipdg-energy-seminorm-is-a-norm`, `lem-sipdg-boundedness-augmented-norm`, `thm-sipdg-exact-consistency`, `lem-sipdg-adjoint-consistency-h2`, `thm-sipdg-coercivity-large-penalty`, `thm-sipdg-l2-error-under-adjoint-regularity`, and `thm-sipdg-energy-error-estimate`. The B-page items are `ex-sipdg-broken-function-is-not-h1`, `ex-sipdg-one-dimensional-interior-jump`, and `ex-sipdg-small-penalty-loses-coercivity`.

The item levels recompute from current manifest and carrier dependencies as follows:

- Level 0: `lem-sipdg-physical-simplex-trace-green`, `def-sipdg-jump-average-convention`.
- Level 1: `def-sipdg-bilinear-form-and-energy-norm` and all three B-page examples.
- Level 2: `lem-sipdg-discrete-flux-inverse-bound`, `lem-sipdg-energy-seminorm-is-a-norm`, `lem-sipdg-boundedness-augmented-norm`, `thm-sipdg-exact-consistency`, `lem-sipdg-adjoint-consistency-h2`.
- Level 3: `thm-sipdg-coercivity-large-penalty`, `thm-sipdg-l2-error-under-adjoint-regularity`.
- Level 4: `thm-sipdg-energy-error-estimate`.

Carrier dependencies and manifest dependencies match for all 14 items. The batch-local level calculation reports 14 items, maximum level 4, and no errors. All 13 direct out-of-batch item suppliers were inspected in their current carriers and are `published`; the remaining item suppliers are within this pair and are authored supplier-first by level. No item supplier is unresolved, and `batch-53.cross-batch-dependencies.json` is empty. The page-level prerequisite `variational-crimes-and-strang-lemmas` is also currently published.

## Plan and design reconciliation

The canonical `research/plan-spec.json` row for NA-33 (page order 2660) controls page prerequisites and names `variational-crimes-and-strang-lemmas`. The higher-level analysis-track design at `research/plan-numerical-analysis-track.md` L478 additionally lists NA-28 and NA-29. The detailed spatial design at `research/plan-numerical-spatial-track.md` L1308 lists NA-28/29/30 as planned interfaces and incorrectly describes them as unpublished. The actual NA-30 page is published. The page manifest therefore retains only the canonical `variational-crimes-and-strang-lemmas` prerequisite; the additional stale interface list is recorded here and was not added as unsupported item dependencies.

The actual statement of `thm-second-strang-lemma-for-nonconforming-galerkin` requires the form to be bounded on all of `X_h=V+V_h`. That bounded extension has not been established for this SIPDG face-flux form on the required continuous-plus-discrete sum space. The energy estimate is instead proved directly in `thm-sipdg-energy-error-estimate.md`, using the SIPDG-specific inverse-flux estimate, coercivity, exact consistency, and boundedness on the explicitly defined face-aware form domain. No claim that NA-30 proves this SIPDG estimate is made. This is a documented route deviation for owner reconciliation against the spatial design wording; the authored conditional estimate itself has no missing mathematical supplier. H(div) flux recovery remains outside the page interface, consistent with the design scope.

## Mathematical scope and local results

The A page fixes real scalar diffusion on bounded polyhedral domains, finite matching shape-regular affine simplicial meshes in dimension `d≥2`, piecewise-constant symmetric positive-definite coefficients, and weak homogeneous Dirichlet enforcement. Its penalty threshold is sufficient and depends on degree, shape regularity, and coefficient bounds; no universal penalty value is asserted. The L2 estimate keeps `s∈(1/2,1]` and explicitly assumes the dual regularity, adjoint-consistency, and face-aware augmented approximation hypotheses. For `s=1`, the stated piecewise-H2 and trace-matching branch supplies adjoint consistency through the local H2 lemma; for `s<1`, the identity and weak normal-flux traces remain explicit assumptions.

Two local A-page suppliers were added to make required arguments well-defined and complete: the affine transfer of reference-simplex traces and Green's identity to physical simplices, including independence of the transferred trace from the chosen affine map; and boundedness of the SIPDG bilinear form in its augmented norm. The latter controls the face-flux terms used in the direct energy estimate. The energy-norm proof also now justifies the existence of an exterior facet in each adjacency component by summing the physical-simplex Green identity with `G(x)=x`; this proves definiteness under the boundary-facet jump convention.

The form definition states its domain using weak L2 normal coefficient-flux traces, so all pairings in the consistency and error statements are defined. The one-dimensional examples use a separately stated interval convention with counting measure on point faces and `h_F` equal to the common cell length. The small-penalty example verifies both `a_h(v,v)=-1/2` and positive energy `||v||_{DG}^2=3/2`.

## Source reading and resolution

Two independent full-text treatments were read and the harvested results are recorded item-by-item, with included dispositions, in `batch-53.coverage.json`:

- Jean-Luc Guermond, *Discontinuous Galerkin*, MATH 661 Fall 2025, Chapter 38, [PDF](https://people.tamu.edu/~guermond/M661_FALL_2025/chap38.pdf). The complete 14-page chapter was inspected, including §§38.2.1–38.2.3 and §38.5, printed pp. 192–199, along with the remaining sections for scope and excluded variants. The locator supports jump/average conventions, the SIP form, consistency, inverse-trace coercivity, energy error, and the conditional dual-regularity/L2 estimate.
- Douglas N. Arnold, Franco Brezzi, Bernardo Cockburn, and L. Donatella Marini, *Unified Analysis of Discontinuous Galerkin Methods for Elliptic Problems*, SIAM J. Numer. Anal. 39(5) (2002), [PDF](https://www.math.purdue.edu/~santos/research/disc_galerkin_ref/siam_DG_2002.pdf). The complete 32-page paper was inspected, particularly §§3.1–3.3, 4.1–4.3, and 5.1, printed pp. 1756–1768, and §§5.2–5.3 to distinguish the primal symmetric method from other variants.

The coverage ledger contains 22 harvested results, each with a supported item and disposition. `source-fetch-check --stamp` verified both full-text retrievals against the recorded PDF hashes (2/2, 0 newly stamped); `coverage-checklist` reports one A page, 22 results, and no errors or warnings. Neither retrieval failed, so no retries or dropped-source decisions were needed and `tools/source-resolution.mjs` was not changed.

## Scoped checks and run-level blockers

Final scoped results:

- `proof-contract.mjs --strict`: 14/14 items; 0 errors, 0 warnings. Contracts use current proof steps, exact current supplier excerpts, and boundary-case dispositions.
- `precheck.mts`: 12 proof-bearing items checked; 0 failures. The two definitions have no proof body to check.
- `rendercheck.mjs`: 16 item/page files; 0 errors, 0 warnings.
- focused `depcheck.mjs`: 0 errors, 0 warnings.
- `proof-layout.mjs` on all 14 batch items: 31 proof steps; 0 defects.
- Batch item dependency levels: 14 items; maximum level 4; 0 errors. Carrier dependencies and manifest dependencies agree.
- Coverage and source-fetch checks: 22 harvested results and 2/2 fetch-verified sources; 0 errors or warnings.

All 14 items have Step 1 `ready` records written with their exact direct dependency IDs and without `--owner`. A current hash-bound readiness check reports 14/14 ready and no stale or missing record for this batch. These records document authoring completion only; they are not independent approval.

The whole-run `item-dependency-levels.mjs check` remains red outside batch 53: 73 errors total, comprising 62 empty scaffold inventories and 11 stale item levels. The stale rows are ten Delaunay items and `ex-godunov-fv-captures-stationary-burgers-shock` (its recorded level is 6; computed level is 5). No batch-53 item is among those errors, and no other batch was edited.

The recomputed autopilot status at 2026-10-17 12:22 UTC showed the run still `running`, with Step 1 scaffold at 19/71 coverage, no active writer, and the existing owner-required `stage-stalemate` blocker directing repair/recertification of rejected items before retrying the stage gate. That run-state and blocker are outside this pair and were left untouched.
