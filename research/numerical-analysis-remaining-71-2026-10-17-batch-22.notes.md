# Batch 22 authoring notes — LIN-POLYEIG

## Plan and design reconciliation

- `research/plan-spec.json` controls the two page IDs, order 2598/2599, category, pair relationship, scope description, and A-page `requires: [restarted-and-block-eigensolvers]`. The mapped complete design is `research/plan-numerical-linear-track.md`, section LIN-POLYEIG beginning at line 2162; its three scope clauses, first-companion orientation requirement, finite/infinite reversal route, weighted backward-error formula, pole exclusion and three examples are retained. The empty `items: []` arrays in the original plan and scaffold manifest were unpopulated inventories, not permission to omit authoring.
- The design's prerequisite paragraph calls `LIN-EIGITER → restarted-and-block-eigensolvers` a proposed same-frontier edge, then says no external item is a proof premise and that no external page token is recorded in `requires`. The controlling plan and assigned task do record that page as a requirement, and the current page is published at order 2418. Per the plan-controls-conflicts instruction, the required page is retained as page-level context. Its algorithmic items are not used as proof premises, so no item-level `deps` or cross-batch logical edge is invented. The design's phrase “strong finite linearization identity” is resolved by proving polynomial-unimodular equivalence for both the companion pencil and its reversal, and by separately proving exact determinant and finite/infinite eigenvector identities.
- The run owner direction requires continued same-pair authoring, draft-only content and honest supplier checks; no other pair was edited. The generated batch-level record gives batch 22 dependency level 0 and no prerequisite batches. This is consistent with the item graph below: every logical in-run supplier is owned in this pair, and there is no cross-batch item edge.

## Item inventory and dependency levels

| Item | Kind | Logical dependencies | Level |
|---|---|---|---:|
| `def-matrix-polynomial-and-homogeneous-eigenpairs` | definition | none | 0 |
| `def-first-frobenius-companion-pencil` | definition | `def-matrix-polynomial-and-homogeneous-eigenpairs` | 1 |
| `thm-first-companion-pencil-is-strong-linearization` | theorem | `def-first-frobenius-companion-pencil`; `def-matrix-polynomial-and-homogeneous-eigenpairs` | 2 |
| `lem-first-companion-pencil-residual-transfer` | lemma | `def-first-frobenius-companion-pencil`; `def-matrix-polynomial-and-homogeneous-eigenpairs`; `thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces` (published) | 2 |
| `def-coefficientwise-weighted-backward-error-for-matrix-polynomial` | definition | `def-matrix-polynomial-and-homogeneous-eigenpairs` | 1 |
| `thm-exact-coefficientwise-weighted-backward-error` | theorem | `def-coefficientwise-weighted-backward-error-for-matrix-polynomial`; `thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces` (published) | 2 |
| `def-rational-matrix-eigenproblem-and-pole-domain` | definition | `def-matrix-polynomial-and-homogeneous-eigenpairs` | 1 |
| `prop-clearing-a-common-denominator-away-from-poles` | proposition | `def-rational-matrix-eigenproblem-and-pole-domain` | 2 |
| `ex-quadratic-damped-vibration-first-companion-pencil` | example | polynomial definition; companion definition; strong-linearization theorem | 3 |
| `ex-infinite-polynomial-eigenvalue-from-singular-leading-coefficient` | example | polynomial definition; companion definition; strong-linearization theorem | 3 |
| `ex-rational-transfer-function-pole-is-a-spurious-cleared-root` | example | rational definition; denominator-clearing proposition | 3 |

Levels are zero plus one above the maximum same-run logical supplier level. The published complex Cauchy–Schwarz theorem is a supplier but is external to this run and does not raise the run-local level. No cycles, unformed local definitions, choice axioms, or unresolved logical suppliers remain. The A page has 8 items and the B page has 3 examples, within the page cap.

## Supplier and source evidence

- The required `restarted-and-block-eigensolvers` page is published. Its page body and all ten listed item bodies were inspected. They cover finite-budget Arnoldi restart, LOBPCG, Ritz-value, shift-invert and harmonic-extraction procedures. None supplies the polynomial-eigenproblem claims here; no item from that page appears in a Facts block or proof dependency. Its declared page requirement remains intact.
- The other published supplier is `thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces`. Its Statement and Proof were inspected. Its real/complex inner-product hypotheses match the standard complex Euclidean inner product used for the rowwise Frobenius estimate and weighted perturbation lower bound. It uses no choice principle.
- Four full-text references were fetched and inspected: Tisseur–Meerbergen, *The Quadratic Eigenvalue Problem*, §§3.1, 3.4 and 4.2; Mackey–Mackey–Tisseur, *Polynomial Eigenvalue Problems: Theory, Computation, and Structure*, §2 definitions on reversal/infinity and §3 Definition 7 and Frobenius companions; Berhanu, *The Polynomial Eigenvalue Problem*, Chapter 3 §3.2, Theorem 3.1; and Betcke–Higham–Mehrmann–Schröder–Tisseur, *NLEVP*, §§1 and 2.1. Exact locators, supported items, dispositions, reading limits and fetch stamps are in the batch coverage file.
- A preliminary search linked the NLEVP title to `https://eprints.maths.manchester.ac.uk/2069/1/newlin.pdf`; a successful fetch was rejected after title inspection showed it is Noferini–Poloni, *Duality of Matrix Pencils and Linearizations* (2013). The correct full NLEVP PDF was obtained from UCL Discovery and inspected. The rejected URL and correction remain in `coverage.json` retrieval history; the mistaken PDF is not cited or used. No dead-source retry was needed.
- No named finite-smoke registry check applies. The exact finite calculations and counterexample are verified in their local Verification steps. The proofs are self-contained rather than source-only; the sources document conventions and independent treatments.

## Cross-batch disposition and limitations

The required published page is contextual placement metadata, not a logical item supplier. The only external logical item is the published complex Cauchy–Schwarz theorem. There are no cross-batch or same-frontier item dependencies, so `research/numerical-analysis-remaining-71-2026-10-17-batch-22.cross-batch-dependencies.json` is `[]`. No shared plan, published carrier, engine state or verdict was changed. All assigned claims and examples are included; the page summary explicitly limits unscaled conditioning transfer and excludes pole roots.

## Final scoped checks and frontier state

- `node tools/tsx-run.mjs tools/author-check.mts numerical-analysis-remaining-71-2026-10-17 22`: exit 0. The recorded batch report has `ok: true`; precheck passed all 7 proof-bearing items, rendercheck accepted 13 files, content policy reported 11 items with 0 errors and 0 warnings, and strict proof contracts passed 11/11.
- `node tools/proof-contract.mjs research/numerical-analysis-remaining-71-2026-10-17-batch-22.proof-contracts.json --strict`: 11/11, 0 errors, 0 warnings. `node tools/proof-layout.mjs` on the 11 explicit item files: 11 items, 23 steps, 0 defects.
- `node tools/source-fetch-check.mjs --coverage research/numerical-analysis-remaining-71-2026-10-17-batch-22.coverage.json`: 7/7 fetch-verified, 7/7 resolved, 0 documented drops. The stamps were already present from the full-text retrieval step.
- Recomputed the manifest levels over only batch 22 using the same `dependencyLevels` implementation: 11 items, maximum level 3, 0 errors. The 11 Step 1 records all remain `ready`, with their recorded direct dependencies matching the manifest; the scoped batch has no open readiness work.
- The run-wide Step 1 readiness check is not closed: 510 item records were examined, 11 are ready, and its work list contains 499 missing peer readiness records plus 89 empty peer scaffold inventories. The run-wide dependency-level audit likewise has peer work: across 142 pages and 513 listed items it reports 93 errors, comprising 89 empty scaffold inventories and four level-label mismatches (`ex-ewald-source-collision-field-singularity`, `lem-double-exponential-truncated-tail-bound`, `thm-second-order-meshfree-convolution-bias`, and `ex-interior-constant-and-affine-kernel-reproduction`). Batch 22 passes its scoped level check; none of these peer items were edited.
