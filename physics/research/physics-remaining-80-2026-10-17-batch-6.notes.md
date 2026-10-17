# Batch 6 authoring notes — Electrovacuum tensor Cauchy system

Run: `physics-remaining-80-2026-10-17`  
Owner: beta / batch 6  
Pages: `emg-cp01` and `emg-cp01-examples`

## Scope and plan reconciliation

The assigned pair is the only authored pair in this batch: nine mathematical items on A (`emg-cp01`) and three worked items on B (`emg-cp01-examples`). Both pages remain drafts. No published item, mathematical original, shared plan, frontier ledger, import receipt, or engine state was edited.

The current `research/plan-spec.json` and batch manifest give `emg-cp01` five page prerequisites: `orthonormal-bases-parseval-and-fourier-series`, `relations-functions-and-quotients`, `emg-mg01`, `gr-gr14-full-high-regularity-symmetric-hyperbolic-proof`, and `gr-causal-and-initial-value-boundaries`. This controls over the older CP01 reservation/design text at `research/plan-einstein-maxwell-models-track.md` line 236, which names only the first two as earlier prerequisites and has a stale empty `requires` reservation. The manifest retains all five current plan prerequisites. The old worker inventory's broad choice assumptions and unbuilt `def-emg-*` wrappers were not imported as proved facts: inspected current GR14 statements and proofs supply the exact Sobolev, symmetric-hyperbolic, and normal-constraint interfaces used here.

The design's central warning is preserved: the general symmetric-hyperbolic supplier below does not verify matrices for a gauge-fixed Einstein-Maxwell reduction and does not prove a coupled local development. The page asserts neither result. The constraint theorem proves necessary conditions from an already existing smooth solution; it does not assert sufficiency.

## Inventory and dependency levels

The A page's nine items are `def-emg-electrovacuum-cauchy-system`, `def-emg-periodic-high-sobolev-state`, `thm-emg-symmetric-hyperbolic-research-supplier`, `lem-emg-maxwell-stress-conservation`, `prop-emg-potential-ricci-wave-identity`, `lem-emg-local-potential-gauge`, `def-emg-constrained-electrovacuum-data`, `thm-emg-gauss-codazzi-maxwell-constraints`, and `lem-emg-fixed-smooth-background-harmonic-data`. The B page's three items are `ex-emg-flat-zero-field-data`, `cex-emg-test-field-not-coupled-flat-solution`, and `ex-emg-nontrivial-magnetic-period`.

Scoped dependency calculation found no cycles. Item levels are: level 0, `def-emg-electrovacuum-cauchy-system`; level 1, `def-emg-periodic-high-sobolev-state`, `lem-emg-maxwell-stress-conservation`, `prop-emg-potential-ricci-wave-identity`; level 2, `thm-emg-symmetric-hyperbolic-research-supplier`, `lem-emg-local-potential-gauge`, `def-emg-constrained-electrovacuum-data`; level 3, `thm-emg-gauss-codazzi-maxwell-constraints`, `lem-emg-fixed-smooth-background-harmonic-data`, `ex-emg-flat-zero-field-data`, `ex-emg-nontrivial-magnetic-period`; level 4, `cex-emg-test-field-not-coupled-flat-solution`. The manifest carries these `dependency_level` values and each item's full direct `deps` list. Batch 6's current in-run level is 0 with no incoming batch edges; its cross-batch dependency input is `[]`. Batch 7's planned `emg-cp02` page consumes CP01 and is a consumer-owned outgoing edge.

## Mathematical interface and conventions

The local electrovacuum definition fixes signature `(-,+,+,+)`, independent spacetime orientation, future direction, curvature convention, positive `K=+\tfrac12\mathcal L_nh`, SI normalization `T^{EM}=Q/\mu_0`, `e=E/c`, and the source sign `\nabla_aF^{ab}=-\mu_0J^b`. The proof computes the stress signs and normal projections under those conventions. The constraint sources use `T(n,n)=(|e|^2+|b|^2)/(2\mu_0)` and `T(n,V)=-h(e\times_hb,V)/\mu_0`; the normal-frame GR supplier has the matching positive-`K` formulas.

The potential argument proves the radial homotopy formula locally, constructs a Gaussian-normal chart by the normal geodesic map, writes the scalar gauge wave as a positive symmetric first-order system, extends that system to a torus, and applies the current local symmetric-hyperbolic theorem. Countable Choice is stated where the cited local theorem uses it. The Ricci term remains in the Lorenz-gauge potential identity. The examples separately verify Minkowski zero-field data, a nonzero flat Maxwell test field that violates the coupled Hamiltonian constraint, and a nonzero magnetic period that obstructs a single-valued global potential.

## Sources and harvest

Coverage is in `research/physics-remaining-80-2026-10-17-batch-6.coverage.json`. Three independent full texts were inspected: Reall's complete 125-page Cambridge lecture notes; Friedrich–Rendall's complete 97-page survey; and the complete Alcubierre–Degollado–Salgado paper. The coverage records 20 named results with item destinations, two explicit out-of-scope vacuum/puncture results, and the field-strength evolution deferral to planned `emg-cp02`.

Reall's Gaussian `1/(4\pi)` and `c=1` conventions are not copied into the SI formulas. Alcubierre's Gaussian normalization is likewise converted locally. Friedrich–Rendall §3.1 is not used as a replacement for the complete published GR14 proof; its mollifier, composition, and compactness shortcuts are not imported. Its vacuum harmonic-data construction is only context for the finite-regularity calculation proved with a fixed smooth background. No source was dropped and no retrieval recovery was needed; `source_resolution` is empty. `source-fetch-check --stamp` verified all three URLs, and the later check pass confirmed the stamps.

## Checks

- Scoped item dependency levels: 12 items checked, computed levels match, maximum 4. `manifest-deps`: 12 items, zero missing dependency arrays.
- `proof-layout`: 12 items, 32 numbered steps, zero defects. Phase-format `precheck`: 9 proof-bearing items checked, zero failures.
- `proof-contract --strict`: 12/12 items, 41 exact supplier citations, 32 derivation steps, zero errors and warnings. Risk reviews remain `null` for later independent review.
- `content-policy`: 12 scoped items, zero errors or warnings. `depcheck`: focused item checks and selected prerequisite cycle checks passed. `rendercheck`: all 12 items and both pages passed.
- Coverage checklist: one A page, 20 harvested results, zero errors or warnings. Source fetch: 3/3 verified. `finite-smoke` reports zero checks for this scope because its registered finite checks do not cover these tensor/ODE claims; the three explicit examples are verified algebraically in their carriers.
- `physics-check` did not complete its content audit: it stopped at the imported-mathematics freshness gate with `mathematics import changed: items/lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval.md; reconcile and re-import before a new run`.
- Whole-run `batch-dependency-levels check` stops with `Duplicate item undefined`. Whole-run `item-dependency-levels check` also reports unrelated empty inventories, item rows with no IDs, and level mismatches in other assigned batches. The owned batch's scoped item-level calculation passes.

## Readiness and escalation

All 12 owned items are recorded `escalated` after authoring and proof completion. The read-only local import of `lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval` differs from its current root original. The inspected root original now adds the explicit `n=0` and singleton-interval boundary clauses, changes the maximal-solution argument and adds `thm-existence-and-uniqueness-of-a-maximal-ode-solution`; the imported snapshot does not contain that current statement/proof. This item is in every owned item's transitive dependency closure, including the path `def-emg-electrovacuum-cauchy-system` → `def-emg-lorentzian-forms` → `thm-gr-curvature-tensoriality-and-coordinate-formula` → `thm-gr-point-normal-and-exponential-coordinate-charts` → `thm-gr-local-geodesics-and-exponential-map` → `thm-smooth-dependence-of-ode-solutions-on-parameters` → `lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval`.

The exact unresolved prerequisite for every readiness record is reconciliation of that imported mathematics snapshot by the owner. No imported file, root original, or import receipt was changed. A per-item Step 1 record was written for each of the 12 owned items with `decision: escalated`, `owner: false`, the direct examined item dependencies plus the stale transitive supplier ID, and the exact evidence above; no `--owner` was used. Whole-run `step1-decisions check` reports 262 items, 7 ready, and `closed: false`, as expected while this blocker and other batch work remain. The escalation records are not independent approval; the item contracts and all locally available authoring are complete.
