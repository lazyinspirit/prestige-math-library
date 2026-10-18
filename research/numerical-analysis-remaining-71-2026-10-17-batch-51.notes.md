# Batch 51 notes — Crouzeix–Raviart finite elements

Run `numerical-analysis-remaining-71-2026-10-17`, batch 51, role beta. The batch is scheduled at dependency level 0 with no prerequisite batches. Scheduling input SHA-256: `a9c2867eaa03cf0691cfe311c2db2df06f2bb75d230effbc8a099369ec33749c`.

## Plan reconciliation

The current `plan-spec.json` NA-31 entry controls direct requirements and lists `variational-crimes-and-strang-lemmas` only. The older `plan-numerical-analysis-track.md` NA-31 section and the detailed `plan-numerical-spatial-track.md` NA-31 section list NA-28/29/30 and C1-domain trace/Gauss–Green suppliers. NA-28/29 are transitive context through the published NA-30 page; they are not added as direct page requirements. C1-domain trace/Gauss–Green statements do not directly cover simplex facets, so the A page proves the required simplex trace and cellwise Green identities locally.

The detailed design route asks for local Neumann liftings in the jump argument. The carrier instead proves the same scaled jump estimate directly from the exact affine P1 structure: a zero-mean affine facet jump vanishes at the facet barycenter, and its variation is bounded by the incident cell gradients. This proof is explicit and yields the required uniform estimate for the assigned P1 space. The route adjustment is recorded for owner reconciliation; no claim or hypothesis was weakened.

## Authored inventory and levels

The A page contains 20 items and the B page contains three worked examples/counterexample. The manifest and each carrier frontmatter declare matching dependencies and levels:

- Level 0: `def-crouzeix-raviart-local-p1-element`, `def-crouzeix-raviart-fractional-sobolev-regularity`, `lem-crouzeix-raviart-continuous-poincare`.
- Level 1: `lem-crouzeix-raviart-local-face-unisolvence`, `def-crouzeix-raviart-global-space`, `lem-crouzeix-raviart-simplex-traces-and-green-identity`, `def-crouzeix-raviart-poisson-smoothing-index`.
- Level 2: `lem-crouzeix-raviart-global-face-basis`, `def-crouzeix-raviart-face-average-interpolant`, `lem-crouzeix-raviart-face-jump-estimate`, `def-crouzeix-raviart-poisson-method`, `lem-crouzeix-raviart-broken-gradient-is-a-norm`.
- Level 3: `lem-crouzeix-raviart-local-interpolation-estimates`, `lem-crouzeix-raviart-conforming-companion`, `lem-crouzeix-raviart-comparison-norm`, `thm-crouzeix-raviart-discrete-well-posedness`, `ex-crouzeix-raviart-one-face-degree-of-freedom`, `ex-crouzeix-raviart-broken-gradient-norm`.
- Level 2: `cex-crouzeix-raviart-below-trace-threshold`.
- Level 4: `thm-crouzeix-raviart-discrete-poincare`, `lem-crouzeix-raviart-consistency-defect`.
- Level 5: `thm-crouzeix-raviart-energy-error-estimate`.
- Level 6: `thm-crouzeix-raviart-l2-error-estimate`.

All in-run logical suppliers were authored before their consumers. No dependency cycle or page-capacity issue was found. Countable Choice is stated where required by the simplex trace/Green, affine shape-scaling, reference Poincare, interpolation, companion, exact Hilbert solve, and imported Strang interfaces. The finite-dimensional face-basis solve and broken-gradient kernel argument remain choice-free; no full Axiom of Choice is claimed. The batch-51 scoped dependency calculation passed for all 23 items, maximum level 6.

## Sources and retrieval evidence

Two independent full-text treatments were read: Jean-Luc Guermond, MATH 661 Fall 2025, Part VIII, Chapter 36 (complete 16-page PDF), and Joachim Schöberl, *Numerical Methods for Partial Differential Equations*, Chapter 25 §25.2 (complete relevant online chapter text). Guermond supports the local/global CR element, interpolation, discrete Poincare, consistency and energy/L2 route, including the strict normal-trace exponent `r>1/2` and adjoint exponent `s>1/2`. Schöberl independently supports the CR P1 face degrees of freedom, second Strang framework, H2 interpolation, and H2 duality argument. Item-level locators and dispositions are in the coverage JSON and carrier frontmatter.

`node tools/source-fetch-check.mjs --coverage research/numerical-analysis-remaining-71-2026-10-17-batch-51.coverage.json --stamp --timeout-sec 90` passed: 4/4 fetch entries verified (the two assigned sources are listed once on each A/B page; final recheck required no new stamps). No retrieval failures or recovery retries occurred.

## Supplier readiness and unresolved items

The current published `variational-crimes-and-strang-lemmas` page and the complete body of `thm-second-strang-lemma-for-nonconforming-galerkin` were inspected. The theorem's actual hypotheses are: Countable Choice; an exact Hilbert variational problem; a finite-dimensional discrete test space; a common norm on `X_h=V+V_h` whose restrictions are the exact and discrete norms; a bounded extension of the discrete form; discrete coercivity; and bounded exact/discrete loads. The authored CR setting verifies these conditions with `M_h=1` and `alpha_h=(1+C_J)^-1`. The supplier is published and its proof body is present, but `verification.precheck` is `pending`; this does not constitute acceptance.

Therefore `thm-crouzeix-raviart-energy-error-estimate` is escalated on exact supplier `thm-second-strang-lemma-for-nonconforming-galerkin`, affecting the claimed `h^r` energy rate. `thm-crouzeix-raviart-l2-error-estimate` is also escalated because its duality proof consumes the energy estimate and the same unresolved supplier. All other batch items have complete, placed suppliers and proof contracts; no other direct external dependency was found with a pending verification precheck.

## Mechanical checks

- Strict proof-contract check: passed for all 23 items with 104 exact supplier citations, all 59 numbered steps mapped, all standard boundary cases classified, and exact finite calculations recorded for the degree-of-freedom and two-triangle examples.
- Scoped content policy: passed for the 23-item batch manifest, zero errors and zero warnings.
- Scoped item precheck: passed for all 17 proof-bearing items; the six definitions were correctly reported not applicable.
- Scoped `proof-layout.mjs`: passed for all 23 explicitly changed carriers, 59 proof steps, zero layout defects.
- Batch-51-only item dependency calculation: passed for 23 items, maximum level 6, zero errors. Focused `depcheck` passed for the 23 assigned items and their closure (1,145 items / 233 prerequisite pages), zero errors and warnings.
- Scoped `rendercheck` passed for 25 files (23 items and two A/B pages), zero errors and warnings.
- `coverage-checklist.mjs` passed for both pages, 46 harvested source results, zero errors and warnings. Coverage source kinds are recorded as `lecture-notes` and `textbook`.
- The latest run-wide `item-dependency-levels.mjs check --run ...` reported 44 empty inventories and 30 stale dependency-level labels in other batches; it reported no batch-51 errors. These run-wide counts can change while other authors update their batches; no out-of-scope files were edited.
- A run-wide `proof-contract-coverage.mjs` attempt was blocked by the empty scaffold inventory on `fast-multipole-expansions-and-error-examples`. This is outside batch 51; every assigned batch item has a contract and the strict batch-scoped contract check passes.
- Step 1 records: all 23 batch-51 records are current: 21 `ready`, with the energy and L2 estimates `escalated` for the pending NA-30 Strang precheck. The latest whole-run snapshot had 961 items, 531 ready, 393 missing item records, six stale records, 31 escalations, and 44 empty page inventories; the run remains open and other batches are still changing.

## Readiness

Final item decisions are recorded in the per-item Step 1 records. The two error-estimate theorems are escalated because the required Strang supplier precheck remains pending; no owner approval or independent review is claimed.

## Owner follow-through after native writer drain

At 2026-10-17T12:41:14.346683+00:00, root rechecked the genuine native writer drainage and the actual published Strang supplier. Its format marker has already been corrected to pass after actual successful precheck/render/layout; its Statement and proof are unchanged. Root read the two CR error consumers and their complete fractional trace/graph-Green supplier, checked the Strang instantiation and dual decomposition, and ran successful current focused strict contracts, render, precheck and final layout. Only the two CR verification.precheck markers were updated to their actual pass; no Statement or proof changed. Evidence: owner-planning-integration/cr-and-interpolation-focused-checks.json.

The first owner attempt to replace the two stale-marker escalation records failed before any readiness write because strict loadStep3 rejects an unfinished peer manifest (Duplicate item undefined). The original first escalation was archived as cr-before-thm-crouzeix-raviart-energy-error-estimate.json; both actual decisions therefore remain escalated until root can bind them through the unchanged strict reader. This is pending bookkeeping against current inputs, not a new mathematical gap or independent proof acceptance. No whole-frontier gate was attempted.
