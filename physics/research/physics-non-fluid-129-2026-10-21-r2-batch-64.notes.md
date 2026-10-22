# Batch 64 notes — Gaussian matching and derivative remainder

## Design and plan reconciliation

No owner authoring-direction file was present at the specified path. The complete design at research/plan-quantum-field-theory-frontier-expansion-track.md, section “Gaussian matching and a rigorous derivative-expansion remainder,” matches research/plan-spec.json on the A/B page IDs, order (825/826), category/library, titles, and page prerequisites (qft-ir02 and qftx-analytic-prerequisites; the B page requires the A page). The only inventory discrepancy is that the plan-spec A and B items arrays are empty placeholders while the detailed design/prose scaffold lists three A items and one B counterexample. Resolved by authoring the four planned items and adding two local A prerequisites required to make the Gaussian source identity and shell transform explicit. Page identity and prerequisite claims were not changed.

The prose scaffold's prescribed route is retained: complete the finite Gaussian square, form the positive spectral kernel, prove the exact finite-order geometric remainder on the spectral energy band, and give the Gaussian shell composition identity. The planned A=-Delta/Plancherel specialization is represented by the equivalent general positive self-adjoint spectral statement and the explicit momentum-multiplier counterexample. The claims remain conditional mathematical deductions. They do not claim arbitrary interacting matching, thresholds, nonlocal massless loops, unrestricted-source bounds, a continuum limit, or a general infinite-dimensional Gaussian measure/determinant. The shell identity is exact at finite regulator with normalized Gaussian probabilities; no Polchinski flow is asserted without a differentiable covariance path and separate differentiability/integrability hypotheses.

## Local inventory and dependency audit

A page inventory, in supplier-first order:
- lem-qftx-finite-heavy-gaussian-square — level 0.
- def-qftx-heavy-gaussian-data — level 1; includes finite-regulator determinant/infinite-dimensional caveats.
- thm-qftx-heavy-derivative-bound — level 2; exact bound for every E>=0, useful/small when E<M.
- def-qftx-finite-gaussian-shell-transform — level 0.
- prop-qftx-finite-gaussian-shell-semigroup — level 1.
- B leaf cex-qftx-eft-outside-band — level 3.

The published supplier thm-qftx-positive-unbounded-spectral-calculus is present, current, and has a current owner-authored Step 1 ready record. We inspected its complete actual proof and checked its exact positive self-adjoint operator, AC, spectral-PVM, domain, and bounded-Borel-calculus interface. Its proof step 1.1 uses Cauchy–Schwarz for its resolvent lower bound and closedness of a self-adjoint operator for its resolvent graph argument, while its declared dependency list omits thm-cauchy-schwarz-in-an-inner-product-space and lem-unbounded-adjoint-is-well-defined-and-closed. The closedness lemma requires Countable Choice, supplied from AC by lem-ac-supplies-sequential-choices-for-probability-constructions. Both consumers of the spectral carrier declare these inspected mathematical inputs directly. The B counterexample also declares the AC-to-Countable-Choice supplier explicitly because its multiplication-operator and L2-Hilbert interfaces require Countable Choice. This is an upstream dependency-metadata observation for the owner, not a missing proof prerequisite or a claim of independent approval; no upstream item was edited.

The finite Gaussian square uses covariance K^{-1} (precision K), e^{-S} normalization and hbar=1. The Moshayedi notes' adjacent covariance/density displays are internally inconsistent in notation; those displays are explicitly out-of-scope, and the Gaussian density in the proof comes from the exact imported nondegenerate-normal density theorem. The Skinner and Moshayedi Gaussian sources support finite-dimensional identities only. Neubert and Burgess motivate scale separation and local inverse-mass expansion; their power-counting ellipses are not used as the rigorous operator-norm estimate, which is proved locally. The historical scaffold reading-ledger source Fredenhagen–Rejzner, https://arxiv.org/pdf/1208.1428, section 7 Theorem 7.2 and equations 77–86, concerns causal extension/finite renormalization and does not support Gaussian matching or a derivative-expansion remainder. It is excluded as support here; the historical source ledger is unchanged.

All external mathematics prerequisites are imported mathematical suppliers; the two missing local mathematical carriers are the Gaussian-square lemma and finite shell-transform definition authored on the A page. Page-level batch dependency remains level 1 via batch 59. The A page remains under the 100-item cap. Both pages are local draft mathematics pages; no published or imported item, shared plan, engine state, or verdict was modified.


## Scoped checks and remaining run-wide blockers

- source-fetch-check --stamp passed 6/6 source records (4 newly stamped); final check mode passed 6/6, with no retrieval failures or documented drops.
- coverage-checklist reported 14 harvested results, 0 errors and one low-yield warning: 4/12 A-page results are marked included; all remaining results have explicit inline or justified out-of-scope dispositions. Alpha can confirm those dispositions at the next review.
- Strict proof-contract validation passed all 6 items with 0 errors or warnings. Final proof-layout passed all 6 explicitly changed items with 0 defects each.
- Scoped item dependency recomputation passed all 6 items at levels 0, 1, 2, 0, 1 and 3 respectively. Scoped mathematical content validation passed all 6 items and 2 pages with 0 errors. Manifest integrity reported 258/258 run records present, 0 missing and 0 added.
- Recomputing the current run batch graph gives batch 64 at level 1, requiring batch 59. The stored run-wide batch dependency check reports a stale input hash after the authorized batch-64 manifest authoring. The engine-state file was left unchanged as instructed; the current computed batch-64 interface is recorded here and in the cross-batch dependency evidence.
- The whole-run physics-content command remains blocked by the unrelated empty batch-100 pages qsmx-modular-equilibrium and qsmx-modular-equilibrium-examples. The whole-run item dependency command also reports other existing empty scaffold inventories and the unrelated ex-gr-fx14-1 declaration level 3 versus computed level 4. The six assigned items pass their scoped checks; no other batch was edited.

All six assigned items now have current Step 1 `ready` records with their direct examined dependencies and authoring evidence. These records document authored prerequisite readiness only; they are not independent proof acceptance or publication approval.
