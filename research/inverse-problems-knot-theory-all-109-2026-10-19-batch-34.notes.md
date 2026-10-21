# Batch 34 authoring notes — Stable compressed sensing with noise

Run: inverse-problems-knot-theory-all-109-2026-10-19
Pair: compressed-sensing-with-noise-and-model-selection / compressed-sensing-with-noise-and-model-selection-examples
Scheduling input: 079ac521d6b339aaa93aee206e6a220ffd6502f10e8baeee9dbb8b7230b3d6f4

## Authority and active state

- Read CLAUDE.md, README.md, SCHEMA.md, relevant Step 1 clauses in WORKFLOW.md, briefs/beta-scaffold.md, batch-34 task and dependency-order task, owner direction, complete IP-34 design section, plan-spec.json, batch dependency map, and current batch/page evidence.
- Recomputed native status from .autopilot/inverse-problems-knot-theory-all-109-2026-10-19. The run remains in 1-scaffold; 34/109 items are covered, nothing is in flight, and the owner-repair/recertification blocker remains in research/inverse-problems-knot-theory-all-109-2026-10-19-step1-blockers.json. This batch does not change runtime state or resolve that blocker.
- Git HEAD at initial inspection was 50139bdcb6, “Defer compact construction artifact scans until author drain.” Extensive unrelated uncommitted frontier work was present and is preserved.
- Both assigned pages remain drafts and have frontmatter only. Page bodies are empty; page_layout is not authored before the engine's layout pass.

## Plan and scaffold reconciliation

- The assigned task and current plan-spec agree on page IDs, titles, category, current orders 3064/3065, and A-page requirements sparse-recovery-and-nullspace-certificates and operator-splitting-admm-and-primal-dual-methods.
- The plan-spec rows leave items empty. The prose IP-34 design names four headline A items and three B leaves; the registration proposal names those A items and one aggregate B item. The batch retains the aggregate B item and verifies all three cases.
- The proposal's page orders 3044/3045 are stale relative to task and plan-spec orders 3064/3065. The task and current plan-spec control.
- Proposal dependency rows are explicitly candidate over-approximations, not authored minimal edges. Their reverse/cyclic edges and levels 10–12 are not used. The actual authored graph is acyclic.
- Seven local A helpers were added where a complete proof required definitions or intermediate results: finite coordinate-tail sigma definition, sparse-vector formulation bridge, largest-coordinate attainment, block-tail estimate, minimizer existence, primal/dual certificates, and proper-closed-convex BPDN objectives. The listed design statements remain present and unchanged in strength.
- F&R Definition 4.21 at q=2 exactly matches the IP-34 head-l2/tail-l1 robust NSP. An earlier note asserting a head-l1 discrepancy was a reading error; full source inspection corrected it. No plan conflict remains on this convention.

## Supplier review and conventions

- IP-33 A page and its actual draft carriers were inspected: def-ip-nullspace-property, thm-ip-basis-pursuit-exact-recovery-under-nsp, and lem-ip-nullspace-property-stability-cone. The matrix action and one-based label j map to library coordinate j-1 were checked against actual statements and proofs. IP-33 exact/noiseless results are not used as noisy-recovery premises.
- The IP-33 carriers are drafts. Their actual interfaces were checked, but no review, acceptance, or publication is inferred.
- The published operator-splitting A page and alg-pdhg-primal-dual-hybrid-gradient definition and verification were inspected. The procedure assumes finite-dimensional real spaces, proper closed convex functions, exact proximal solver/checker programs, and the strict product step-size condition. It reports failure and cap exhaustion and makes no pointwise convergence claim. The BPDN wrapper returns success only after a separate exact primal-dual certificate; it does not guarantee finite certificate discovery.
- No Axiom of Choice, RIP theorem, or identity-design minimax theorem is used. The compactness proof for BPDN minimizers is the stated finite-dimensional ZF theorem; it selects one feasible witness only.

## Sources read and dispositions

1. Simon Foucart and Holger Rauhut, A Mathematical Introduction to Compressive Sensing, complete 634-page book PDF:
   https://www.mat.uniroma2.it/~speleers/cime2024/material/book_rauhut.pdf
   Read §2.1 Definition 2.2, printed p. 42; §4.3 Definition 4.17, Theorems 4.19–4.20, Definition 4.21, Theorem 4.22, and the complete proof of Theorem 4.25, printed pp. 85–90. Definition 4.21 at q=2 is the exact IP-34 robust NSP formula. Theorem 4.22 states the best-term/noise rates with constants depending on rho and tau. Theorem 4.25 gives a complete stronger recovery argument; the local theorem independently derives its displayed, valid constants. The best-sparse-vector definition is connected to the local coordinate-tail minimum by lem-ip-best-s-term-l1-sparse-vector-formulation.
2. Shahar Mendelson, Holger Rauhut, and Rachel Ward, “Improved Bounds for Sparse Recovery from Subsampled Random Convolutions,” complete 39-page paper:
   https://www.mathc.rwth-aachen.de/~rauhut/files/circulant-independent.pdf
   Read §2.1 Definition 2.1 and Theorem 2.2, printed pp. 4–5. The robust NSP formula matches exactly. The theorem states the error rates and explicit constants but calls the result standard and does not prove it; the local proof supplies all required reasoning.
3. Antonin Chambolle and Thomas Pock, “A First-Order Primal-Dual Algorithm for Convex Problems with Applications to Imaging,” complete 51-page report:
   https://optimization-online.org/wp-content/uploads/2010/06/2646.pdf
   Read §2, Algorithm 1, and §3.1, printed pp. 2–7. The source supports the finite-dimensional saddle recurrence and strict step condition. Its convergence results are not used as a finite-termination or certificate-discovery guarantee.
4. Exploratory alternatives: IISc Lectures 18–19 browser screenshots returned cache misses; the complete two short PDFs were recovered by direct download and all four pages inspected. Lecture 19 refers the main recovery proof to an exercise/prior result, so it is not an active proof source. A UTD CS-Notes mirror redirected to a webpage acknowledgement; an exact-title search found a direct JMLR PDF, but that theorem has different SGL/CLOT hypotheses and is not used. No required source remains unresolved.
5. source-fetch-check --stamp completed for all active page-source entries: 5/5 full PDFs were fetched and stamped; the read-only stamp check also passes.

## Inventory, dependencies, and global item levels

The A page has ten items and the B page has one. Levels count every in-run dependency across the run manifests, including batch-33 items; published and other out-of-run suppliers do not raise item level.

| Item | Page | Direct in-run suppliers | Level |
|---|---|---|---:|
| lem-ip-bpdn-objectives-proper-closed-convex | A | none | 0 |
| def-ip-best-s-term-l1-error | A | def-ip-nullspace-property (batch 33) | 1 |
| def-ip-robust-nullspace-property | A | def-ip-nullspace-property (batch 33) | 1 |
| lem-ip-robust-nsp-block-tail-estimate | A | def-ip-nullspace-property (batch 33) | 1 |
| lem-ip-bpdn-minimizer-exists | A | def-ip-nullspace-property (batch 33) | 1 |
| lem-ip-bpdn-dual-certificates | A | none | 0 |
| alg-ip-basis-pursuit-denoising | A | lem-ip-bpdn-minimizer-exists, lem-ip-bpdn-dual-certificates, lem-ip-bpdn-objectives-proper-closed-convex | 2 |
| lem-ip-best-s-term-l1-sparse-vector-formulation | A | def-ip-best-s-term-l1-error | 2 |
| lem-ip-largest-s-coordinates-attain-best-s-term-l1-error | A | def-ip-best-s-term-l1-error | 2 |
| thm-ip-robust-nsp-noisy-recovery-bound | A | level-1 suppliers, sparse-error bridge, largest-coordinate lemma, algorithm | 3 |
| ex-ip-34-scope-and-boundary-cases | B | robust NSP, best-error definition/bridge, algorithm, recovery theorem | 4 |

The batch scheduling level remains 3 with batch 33 as its only in-run prerequisite; that batch-level number is distinct from the item levels above. A scoped dependency calculation including batch 33's actual def-ip-nullspace-property and all batch-34 items passes with levels 0 through 4. The full-run node tools/item-dependency-levels.mjs check reports unrelated empty scaffold inventories and pre-existing stale labels in other owners' batches. Those files are outside the assigned scope and were not edited.

## Cross-batch supplier obligations

- The A page requires batch-33 sparse-recovery-and-nullspace-certificates. The actual page, three actual draft carriers, and proofs were checked for the declared interfaces and coordinate conversion. The cross-batch record will state interface verification only, not readiness or acceptance.
- The A page also requires the published operator-splitting-admm-and-primal-dual-methods page. Its actual PDHG carrier and verification were inspected. No convergence or finite-discovery claim is imported.
- The B page depends on the A page within this batch. Direct item dependencies and global levels are in the manifest.

## Authoring checkpoints

- def-ip-best-s-term-l1-error (A, level 1): defines the attained finite coordinate-tail minimum sigma_s(x)_1 and the one-based coordinate bridge. F&R §2.1 Definition 2.2 and MRW §2.1 give the standard sparse-vector error; the separate level-2 sparse-vector formulation lemma proves equivalence locally.
- def-ip-robust-nullspace-property (A, level 1): states the all-vector, all-|S|<=s tail-l1/head-l2 property with 0<rho<1, tau>0, canonical-natural scalars, and the library coordinate bridge. F&R Definition 4.21 at q=2 and MRW Definition 2.1 match the formula.
- lem-ip-robust-nsp-block-tail-estimate (A, level 1): proves ||h_(S^c)||2 <= ||h_S||2 + ||h_(S^c)||1/sqrt(s) by finite sorted-coordinate comparisons and block averages; it includes q=0 and a short final block. Sources: F&R proof of Theorem 4.25, printed pp. 89–90, and MRW §2.1. No choice axiom is used.
- lem-ip-bpdn-minimizer-exists (A, level 1): proves residual-set closedness, constructs a nonempty closed bounded l1 sublevel, applies the finite-dimensional ZF compactness theorem, and obtains a global minimizer. The proof uses one existential feasible point and no choice axiom.
- lem-ip-bpdn-dual-certificates (A, level 0): computes the residual-ball conjugate and proves exact primal optimality and range-disjointness certificates from adjoint, coordinate, and Cauchy–Schwarz identities, including p=0 and epsilon=0.
- lem-ip-bpdn-objectives-proper-closed-convex (A, level 0): proves f=||.||1 and the residual-ball indicator proper, convex, and closed in the epigraph convention. This verifies the PDHG objective hypotheses directly.
- lem-ip-best-s-term-l1-sparse-vector-formulation (A, level 2): proves the coordinate-tail minimum equals the standard minimum over vectors with at most s nonzero coordinates; its minimizer is the finite coordinate truncation.
- lem-ip-largest-s-coordinates-attain-best-s-term-l1-error (A, level 2): proves sorted largest coordinates maximize retained l1 mass and minimize the omitted tail.
- alg-ip-basis-pursuit-denoising (A, level 2): runs the published finite-cap PDHG interface and returns explicit invalid-input, proximal failure, proximal exhaustion, infeasible, success, and budget-exhausted statuses. Exact success and infeasibility tests are justified by the local certificate lemma. No convergence or certificate-discovery guarantee is asserted.
- thm-ip-robust-nsp-noisy-recovery-bound (A, level 3): proves cone control, chooses separate top-s sets for the truth and error, applies robust NSP and block-tail estimate, and derives C1=2(1+2rho)/(1-rho), C2=6tau/(1-rho), C3=2(1+rho)/(1-rho), C4=4tau/(1-rho). The claim bounds reconstruction error only.
- ex-ip-34-scope-and-boundary-cases (B, level 4): verifies bounded-noise and compressible-truth data under I2, then gives a coordinate-projection example with a one-sparse nullspace truth where robust NSP fails.

## Authorship boundary

Only the assigned A/B pages, their draft item carriers, and batch-34 evidence were changed. Published items, shared plans, engine state, verdicts, other batches, and owner blockers were left untouched.

## Exact dependency and validation record

Direct carrier dependencies are synchronized with the batch manifest. The full lists are preserved in each item frontmatter; the A-page authorship sequence and direct edges are:

- lem-ip-bpdn-objectives-proper-closed-convex: def-p-norms-on-rn, lem-p-norms-are-norms-and-induce-the-published-metrics, lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric, def-euclidean-inner-product, def-proper-closed-convex-function-on-rn, def-convex-and-strictly-convex-functionals-on-a-banach-space, def-convex-subset-of-euclidean-space, def-indicator-function-of-closed-convex-set, def-canonical-natural, lem-of-naturals-positive, lem-finite-sum-laws, lem-of-square-monotone.
- def-ip-best-s-term-l1-error: def-ip-nullspace-property, def-p-norms-on-rn, def-max-min, lem-finite-set-has-max.
- def-ip-robust-nullspace-property: def-ip-nullspace-property, def-p-norms-on-rn, def-canonical-natural, lem-of-naturals-positive.
- lem-ip-robust-nsp-block-tail-estimate: def-ip-nullspace-property, def-p-norms-on-rn, def-canonical-natural, lem-of-naturals-positive, lem-p-norms-are-norms-and-induce-the-published-metrics, lem-finite-sum-laws, lem-of-square-monotone.
- lem-ip-bpdn-minimizer-exists: def-ip-nullspace-property, def-p-norms-on-rn, lem-p-norms-are-norms-and-induce-the-published-metrics, lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric, thm-cauchy-schwarz-and-the-euclidean-norm, lem-finite-sum-laws, lem-of-square-monotone, def-canonical-natural, lem-of-naturals-positive, thm-euclidean-heine-borel-pseudocompactness-and-extreme-values.
- lem-ip-bpdn-dual-certificates: def-p-norms-on-rn, def-euclidean-inner-product, def-adjoint-of-a-linear-map-between-inner-product-spaces, thm-adjoint-exists-and-is-unique-in-finite-dimension, thm-cauchy-schwarz-and-the-euclidean-norm, def-fenchel-conjugate-on-finite-dimensional-euclidean-space, lem-finite-sum-laws, lem-p-norms-are-norms-and-induce-the-published-metrics.
- lem-ip-best-s-term-l1-sparse-vector-formulation: def-ip-best-s-term-l1-error, def-p-norms-on-rn, lem-finite-sum-laws.
- lem-ip-largest-s-coordinates-attain-best-s-term-l1-error: def-ip-best-s-term-l1-error, def-p-norms-on-rn, lem-finite-sum-laws.
- alg-ip-basis-pursuit-denoising: def-p-norms-on-rn, def-euclidean-inner-product, def-adjoint-of-a-linear-map-between-inner-product-spaces, thm-adjoint-exists-and-is-unique-in-finite-dimension, def-proper-closed-convex-function-on-rn, def-fenchel-conjugate-on-finite-dimensional-euclidean-space, lem-fenchel-conjugate-is-proper-closed-convex, def-induced-matrix-p-norm, def-proximal-mapping, thm-proximal-operator-existence-resolvent-firm-nonexpansive, alg-pdhg-primal-dual-hybrid-gradient, lem-ip-bpdn-minimizer-exists, lem-ip-bpdn-dual-certificates, lem-ip-bpdn-objectives-proper-closed-convex.
- thm-ip-robust-nsp-noisy-recovery-bound: def-ip-robust-nullspace-property, def-ip-best-s-term-l1-error, lem-ip-best-s-term-l1-sparse-vector-formulation, lem-ip-largest-s-coordinates-attain-best-s-term-l1-error, lem-ip-robust-nsp-block-tail-estimate, lem-ip-bpdn-minimizer-exists, alg-ip-basis-pursuit-denoising, lem-ip-bpdn-dual-certificates, def-p-norms-on-rn, lem-p-norms-are-norms-and-induce-the-published-metrics, thm-cauchy-schwarz-and-the-euclidean-norm, lem-finite-sum-laws, def-canonical-natural, lem-of-naturals-positive.
- ex-ip-34-scope-and-boundary-cases: def-ip-robust-nullspace-property, def-ip-best-s-term-l1-error, lem-ip-largest-s-coordinates-attain-best-s-term-l1-error, alg-ip-basis-pursuit-denoising, thm-ip-robust-nsp-noisy-recovery-bound, def-p-norms-on-rn, thm-cauchy-schwarz-and-the-euclidean-norm, lem-finite-sum-laws.

Observed validations so far:

- The scoped item-dependency calculation including batch-33 def-ip-nullspace-property passes, with global item levels 0, 1, 2, 3, and 4. The batch-34 manifest and item frontmatter labels match.
- node tools/source-fetch-check.mjs --coverage research/inverse-problems-knot-theory-all-109-2026-10-19-batch-34.source-coverage.json --stamp completed: 5/5 page-source records are fetch-verified; all five full PDFs have stamps, with zero drops.
- node tools/coverage-checklist.mjs research/inverse-problems-knot-theory-all-109-2026-10-19-batch-34.coverage.json --require-destination completed: 2 pages, 18 harvested results, zero errors and zero warnings.
- The initial strict proof-contract run exposed step/fact mapping and boundary-anchor defects. The phase ordering and contract evidence were repaired; the final strict check passes for all 11 items.
- node tools/item-dependency-levels.mjs check --run inverse-problems-knot-theory-all-109-2026-10-19 reports unrelated empty scaffold inventories and stale labels in batches outside this assignment. The scoped calculation above passes; no other batch was edited.
- Read-only frontier-dependency-ledger collection is blocked by malformed pre-existing YAML in items/lem-kontsevich-morse-isotopy-decomposition.md, line 23: unquoted title “Gualtieri, Topology I: Smooth Manifolds, §3.4, Theorem 3.26”. The batch-34 cross-batch input itself is valid JSON and records only run-owned page/item edges; the published operator-splitting prerequisite is evidenced in these notes, not as a run-to-run ledger edge.
- All required scoped checks and all 11 Step-1 decisions are complete and hash-current. The only external workflow blockers are the unrelated full-run dependency metadata and malformed YAML encountered by the read-only cross-batch collector; neither touches this batch’s item graph or proof evidence.

## Final completion evidence

- The batch-34 manifest and all 11 item carriers have matching IDs, kinds, titles, direct deps, statements, source references, provenance, and computed global levels. The A page inventory lists all ten A items in supplier-first levels 0–3; the B page lists its single example. Both page bodies remain empty.
- node tools/proof-contract.mjs research/inverse-problems-knot-theory-all-109-2026-10-19-batch-34.proof-contracts.json --strict: 11/11 checked, zero errors and warnings.
- node tools/tsx-run.mjs tools/precheck.mts on the nine changed proof-bearing items: 9 checked, zero failing.
- node tools/proof-layout.mjs on the nine changed proof-bearing items: 9 items, 29 steps, zero defects.
- node tools/rendercheck.mjs on both pages and all 11 carriers: 13 files, all math spans and frontmatter parsed, zero errors.
- node tools/depcheck.mjs --items-file /tmp/prestige-b34-depcheck-items.json: focused checks for 11 items passed; prerequisite cycle checks covered 468 items and 314 pages. The A/B pages contain 10 and 1 items respectively.
- Scoped dependency-level check including batch-33 def-ip-nullspace-property: pass, global item levels 0–4.
- node tools/coverage-checklist.mjs research/inverse-problems-knot-theory-all-109-2026-10-19-batch-34.coverage.json --require-destination: 2 pages, 18 harvested results, zero errors and warnings.
- node tools/source-fetch-check.mjs --coverage research/inverse-problems-knot-theory-all-109-2026-10-19-batch-34.source-coverage.json --stamp: 5/5 full-source records stamped; read-only check mode also passes. No source is dropped or left unresolved.
- The batch-34 cross-batch input has five rows (one batch-33 A-page edge and four direct item edges). A local ownership/interface check passes. The broader read-only frontier-dependency-ledger collection cannot complete because another owner's items/lem-kontsevich-morse-isotopy-decomposition.md has an unquoted YAML title at line 23; no file outside this batch was repaired.
- Step-1 records were written for all 11 items with decision ready and owner=false. A current item-hash check returns ready/hash-current for each record. The recorded evidence names direct dependencies and scope checks. These records are authoring readiness only; they are not independent review, mathematical certification, or publication.
- No mathematical supplier claim remains unresolved within the owned pair. The batch-33 supplier carriers are present drafts whose actual statements/proofs were inspected, and the cross-batch evidence expressly avoids inferring their acceptance. The unrelated full-run dependency-level and cross-ledger blockers remain with their owners.

## Final live-run status

At the final read-only status check, autopilot still reports the run running in 1-scaffold with 52/109 items covered, nothing in flight, and many batches still missing coverage. The owner repair/recertification blocker remains in research/inverse-problems-knot-theory-all-109-2026-10-19-step1-blockers.json. Batch-34 item records are current but do not resolve or bypass this run-level gate.
