# Batch 101 — Step 1 authoring notes

Run: machine-learning-all-101-2026-10-19  
Pair: semi-supervised-graph-propagation-and-pseudolabeling-limits  
Dispatch scheduling input: 8ccb126509878bdac2b40bc0656cadeecb74eaea7073f8e066c3b258d9302e61

## Controlling design and conflicts

- The beta assignment points to plan line 621. The current ML-93 design begins at line 634 and runs through line 640. This is a stale locator only.
- The current ML-93 design and its matching plan-spec entry agree on the six A-page interfaces, anchored finite-graph convention, exact harmonic solution, confidence threshold and no-relabel pseudo-label protocol, two-law nonidentification witness, and the no-continuum-limit/no-risk-guarantee warnings. The plan text controls; no scope change is needed.
- The plan-spec entry names the same A/B pages and the same two required pages as the batch manifest.
- The dependency-level artifact records batch 101 at level 2 with prerequisites 2 and 21, but its input_sha256 is 69025dde350f98b7148b6e768b5696a275290fe171748be48746b2924054386b, different from this dispatch scheduling input above. Record this as a scheduling-input hash conflict for owner reconciliation; do not edit the shared dependency-level artifact. The level and prerequisite batch IDs themselves agree with the dispatch.

## Item inventory, dependencies, and levels

The scaffold manifest is populated before carrier authoring. Levels below use current-run logical deps only; published suppliers do not raise an item level.

| Item | Page | Level | Direct deps | Claim and convention |
|---|---|---:|---|---|
| alg-finite-round-confidence-pseudolabeling | A | 0 | none | Deterministic finite weighted k-nearest-neighbor learner; round cap, threshold, vote confidence, simultaneous additions, fixed order, weights, and no-relabel rule are explicit. |
| def-graph-harmonic-label-extension | A | 1 | def-finite-weighted-graph-laplacian | Finite symmetric nonnegative zero-diagonal W; energy on fixed boundary data; anchoring means every component meeting U meets B. |
| thm-unlabeled-law-alone-does-not-identify-labels | A | 2 | def-supervised-learning-problem; def-population-and-empirical-risk | Finite discrete binary experiment; identical P_X and observed labels, opposite deterministic labels at one unseen positive-mass point; expected randomized 0–1 risk lower bound q/2. |
| thm-graph-harmonic-extension-uniqueness-and-maximum-principle | A | 2 | def-finite-weighted-graph-laplacian; def-graph-harmonic-label-extension; lem-weighted-graph-laplacian-quadratic-form-and-kernel; def-cholesky-factorisation-with-positive-diagonal; thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique; thm-forward-and-back-substitution-are-correct-unique-and-quadratic-cost; thm-cholesky-solves-hermitian-positive-definite-systems-and-has-half-the-lu-factorisation-cost | Anchored principal block is SPD; exact energy minimizer and block formula; weighted-average and maximum principles; multiclass simplex consequence. |
| alg-graph-harmonic-label-propagation | A | 3 | def-graph-harmonic-label-extension; thm-graph-harmonic-extension-uniqueness-and-maximum-principle; def-cholesky-factorisation-with-positive-diagonal; thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique; thm-forward-and-back-substitution-are-correct-unique-and-quadratic-cost; thm-cholesky-solves-hermitian-positive-definite-systems-and-has-half-the-lu-factorisation-cost | Validate, reject unanchored components, factor the anchored SPD block under a finite operation cap, solve each label coordinate, check a numerical residual, and return values plus status. |
| rem-semisupervised-cluster-assumptions | A | 4 | alg-finite-round-confidence-pseudolabeling; alg-graph-harmonic-label-propagation; thm-unlabeled-law-alone-does-not-identify-labels | Structural assumptions connect P_X to labels; graph smoothness, cluster constancy, and low-density separation are modeling assumptions, not consequences of unlabeled observations. |
| ex-confident-pseudolabel-can-be-wrong | B | 1 | alg-finite-round-confidence-pseudolabeling | Finite metric witness: 4/5 vote confidence crosses threshold while the hidden label is the other class; no-relabeling retains the wrong assignment. |
| ex-unlabeled-marginal-two-law-lower-bound | B | 3 | thm-unlabeled-law-alone-does-not-identify-labels; def-population-and-empirical-risk | Exact two-point specialization with q=1/2 and worst expected risk at least 1/4. |
| ex-graph-harmonic-path-interpolation | B | 3 | def-graph-harmonic-label-extension; thm-graph-harmonic-extension-uniqueness-and-maximum-principle | Unit-weight path with endpoint values 0 and 1 has unique midpoint value 1/2 and energy 1/4. |
| ex-graph-harmonic-unanchored-component-status | B | 4 | def-graph-harmonic-label-extension; alg-graph-harmonic-label-propagation | An isolated unlabeled component returns unanchored-component before any SPD solve. |

The item-level computation uses deps, matching tools/item-dependency-levels.mjs. The graph extension definition is level 1 from the batch-21 graph definition; the graph theorem and risk theorem are level 2; the graph algorithm is level 3; the remark and unanchored example are level 4. The published Cholesky suppliers are external context and do not raise these levels.

Before carrier authoring, the exported dependencyLevels function was run over the actual current run manifests. All ten batch-101 declared levels equal the computed levels, with zero batch-101 level errors. The full run snapshot currently has 36 errors from other pages whose item inventories are still empty; the formal whole-run CLI check will be recorded after final edits.

## Supplier inspection and readiness evidence

- Read the actual finite weighted-graph definition and the complete weighted quadratic-form/kernel proof. The definition fixes W symmetric, entrywise nonnegative and zero diagonal, with support edge {i,j} exactly when w_ij>0. The lemma proves f^T L f = (1/2) sum_ij w_ij(f_i-f_j)^2, positive semidefiniteness, and the componentwise-constant kernel. The anchored-block proof below uses precisely this identity and these connected components; it does not use the unresolved batch-20 Lloyd suppliers from the wider ML-20 page.
- Current owner readiness evidence for the graph suppliers is research/machine-learning-all-101-2026-10-19-owner-step1-readiness-reconciliation-21.json, decision ready-current-input-after-accepted-repair. The recorded raw source hashes d299b3ed46e1989f90edd7321a36cb348534342a82a3977ddbe5b8a4768eca3d and 9cc961c0cf92112942132c9c43a984408e2b36319bef4397627f4f34d7762eeb match the current graph definition and lemma files. The recorded owner acceptance is research/machine-learning-all-101-2026-10-19-owner-spectral-metric-acceptance.json. This is Step-1 readiness context, not independent review.
- Read the actual supervised-problem and population-risk definitions and the complete risk-measurability proof. In the finite discrete theorem all predictors and zero-one losses are measurable, risks reduce to finite sums, and are finite. No conditional distribution, iid sampling, RCD, or choice axiom is used. The relevant risk and supervised-problem raw hashes match the current files and the current owner readiness evidence research/machine-learning-all-101-2026-10-19-owner-step1-readiness-reconciliation-2.json.
- Read the published real positive-definite Cholesky definition, factorization theorem, forward/back substitution theorem, and composed solve theorem with their complete relevant proofs. The graph block is real symmetric positive definite; the solver convention is exact finite-dimensional arithmetic with lower Cholesky factor and forward/back substitution. The implementation exposes finite budget and residual-failure statuses. A numerical residual is not a class-label guarantee.
- No unresolved mathematical supplier gap or dependency cycle is identified. No axiom of choice or dependent choice is used.

## Source reading and retrieval

- Xiaojin Zhu, Zoubin Ghahramani, and John Lafferty, “Semi-Supervised Learning Using Gaussian Fields and Harmonic Functions,” ICML 2003, full 8-page paper at https://mlg.eng.cam.ac.uk/pub/pdf/ZhuGhaLaf03a.pdf. The complete relevant argument in §2 (PDF pp. 1–2) was inspected: finite weighted graph and fixed labels, quadratic energy, harmonic equations, block linear system, and the maximum-principle statement. The paper assumes a connected graph and cites rather than proves the maximum principle; neither assumption nor proof is imported. Local proofs cover componentwise anchoring and the finite maximum principle.
- Olivier Chapelle, Bernhard Schölkopf, and Alexander Zien (eds.), Semi-Supervised Learning, MIT Press, 2006, full 524-page text at https://mcube.lab.nycu.edu.tw/~cfung/docs/books/chapelle2006semi_supervised_learning.pdf. Read Chapter 11 §§11.1–11.3.4 (printed pp. 193–205), including the graph definition, label-propagation algorithms, one-hot multiclass convention, graph quadratic criterion, and closed-form linear system. Read Chapter 1 §§1.3.2–1.3.3 (printed pp. 9–10) and Chapter 11 §11.6 (printed pp. 212–213) for modeling assumptions and graph-geometry limits. The book gives alternative propagation/regularization procedures; their convergence or accuracy guarantees are not imported. The exact finite pseudo-label procedure and two-law lower bound are local.
- Browser full-text inspection is complete. The required command node tools/source-fetch-check.mjs --coverage research/machine-learning-all-101-2026-10-19-batch-101.coverage.json --stamp passed: 2/2 sources fetch-verified, 2 newly stamped, 2/2 resolved, 0 drops, exit code 0. Zhu et al. stamp: 216490 bytes, 8 pages, SHA-256 prefix fe5394f834acb2af. Chapelle et al. stamp: 6282224 bytes, 524 pages, SHA-256 prefix 9e67c6bf4a45adb1. Source history and per-result dispositions are in research/machine-learning-all-101-2026-10-19-batch-101.source-evidence.json. No retrieval failed, so no source_resolution entry or recovery retry was required.

## Item progress and next actions

### alg-finite-round-confidence-pseudolabeling

- Claim and convention: finite ordered metric input; weighted k-nearest-neighbor vote; class and distance tie rules; confidence threshold; simultaneous additions; fixed order; finite round cap; and immutable pseudo-labels. It asserts no risk or correctness guarantee.
- Source: Chapelle, Schölkopf, and Zien, Semi-Supervised Learning, Chapter 1 §1.3.2, https://mcube.lab.nycu.edu.tw/~cfung/docs/books/chapelle2006semi_supervised_learning.pdf. This is methodological context only; the complete finite procedure is local.
- Dependencies and level: no logical item suppliers; level 0.
- Decision: definition-like algorithm; no proof phase is applicable.
- Validation: authored carrier written; verification.precheck is n/a for an algorithm. Final scoped render and manifest checks remain pending.
- Unresolved obligations: none for this item.
- Next action: author def-graph-harmonic-label-extension at level 1.

### def-graph-harmonic-label-extension

- Claim and convention: defines the finite weighted graph, support components including isolates, nonempty labeled boundary, componentwise anchor condition, Dirichlet energy, and minimizer set without asserting uniqueness.
- Sources: Zhu, Ghahramani, and Lafferty, §2, PDF pp. 1–2; Chapelle, Schölkopf, and Zien, Chapter 11 §§11.1–11.3.4. The statement agrees with the current finite weighted Laplacian definition; sources are linked only after the complete Definition.
- Dependencies and level: def-finite-weighted-graph-laplacian; level 1.
- Decision: definition-only; no axiom or proof obligation is asserted.
- Validation: authored carrier written; verification.precheck is n/a for a definition. Final scoped render and dependency checks remain pending.
- Unresolved obligations: none for this item.
- Next action: prove anchored uniqueness and the maximum principle in thm-graph-harmonic-extension-uniqueness-and-maximum-principle at level 2.

### thm-graph-harmonic-extension-uniqueness-and-maximum-principle

- Claim and convention: the zero-boundary extension of a vector has weighted energy zero only if it is constant on every component; component anchoring forces zero, hence L_UU is SPD. The exact solution is the unique energy minimizer. Every unlabeled value is a weighted neighbor average and lies between the boundary extrema. Coordinatewise one-hot solutions are nonnegative and sum to one.
- Sources: Zhu, Ghahramani, and Lafferty §2, PDF pp. 1–2; Chapelle, Schölkopf, and Zien Chapter 11 §§11.2–11.3.4. Both source treatments were inspected in full at the relevant sections. The paper assumes connectedness and cites rather than proves the maximum principle; the local argument proves the componentwise-anchored case directly.
- Dependencies and level: def-finite-weighted-graph-laplacian; def-graph-harmonic-label-extension; lem-weighted-graph-laplacian-quadratic-form-and-kernel; published thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique and thm-cholesky-solves-hermitian-positive-definite-systems-and-has-half-the-lu-factorisation-cost; level 2.
- Proof decision: direct, choice-free finite graph and finite-dimensional real linear algebra. The empty-unlabeled boundary case is separated. No continuum graph limit, sampling consistency, or label-truth guarantee is claimed.
- Validation: node tools/tsx-run.mjs tools/precheck.mts items/thm-graph-harmonic-extension-uniqueness-and-maximum-principle.md passed after adopting the checker's phase-stratified steps and repairing the one-hot uniqueness argument. Result: 1 checked, 0 failing. Precheck metadata records pass.
- Unresolved obligations: none for this item. A finite-precision residual is only a numerical diagnostic in the dependent algorithm.
- Next action: author the finite two-law risk theorem at level 2.

### thm-unlabeled-law-alone-does-not-identify-labels

- Claim and convention: on a finite discrete domain, two deterministic label laws share the full feature marginal and all observed labels but differ at one unseen atom of mass q; any common randomized predictor has worst expected zero-one population risk at least q/2.
- Sources: Chapelle, Schölkopf, and Zien, Chapter 1 §§1.3.2–1.3.3. The book motivates semi-supervised use of the marginal and structural assumptions but does not supply this exact lower bound; the full finite two-law proof is local.
- Dependencies and level: def-supervised-learning-problem and def-population-and-empirical-risk from batch 2; level 2. Their current owner-ready raw hashes match the current carriers, and the finite specialization does not invoke the generic conditional-law interface.
- Proof decision: direct finite sum argument; Q is a probability vector on the finite binary classifier class. No RCD, iid, independence, or choice assumption is used.
- Validation: node tools/tsx-run.mjs tools/precheck.mts items/thm-unlabeled-law-alone-does-not-identify-labels.md passed: 1 checked, 0 failing. Precheck metadata records pass.
- Unresolved obligations: none for this item.
- Next action: author alg-graph-harmonic-label-propagation at level 3, then the level-4 remark.

### alg-graph-harmonic-label-propagation

- Claim and convention: validates finite W and component anchors; returns unanchored and empty-U statuses before solving; forms each right-hand side in fixed vertex order; specifies deterministic dense Cholesky and triangular recurrences; enforces a finite per-column operation cap; reports residual and failure status. Approximate scores are not projected to the simplex, and neither residual success nor exact harmonic scores certify true labels.
- Sources and suppliers: Zhu et al. §2, PDF pp. 1–2, and Chapelle et al. Chapter 11 §§11.2–11.3 for the harmonic linear system and graph propagation context; local Definition/Statement references cite the exact anchored theorem, Cholesky definition/factorization, triangular substitutions, and composed solve suppliers. The finite-budget wrapper and status contract are local.
- Dependencies and level: def-graph-harmonic-label-extension; thm-graph-harmonic-extension-uniqueness-and-maximum-principle; published Cholesky definition, factorization, triangular substitution, and solve; level 3.
- Decision: complete algorithm definition with explicit finite loops and failure branches; no correctness or convergence claim is added.
- Validation: authored carrier written; verification.precheck is n/a for an algorithm. Final scoped renderer and manifest checks remain pending.
- Unresolved obligations: none for this item.
- Next action: author rem-semisupervised-cluster-assumptions at level 4, then the B examples in ascending levels.

### rem-semisupervised-cluster-assumptions

- Claim and convention: separates the exact finite graph maximum principle from ground-truth labels; defines cluster constancy, low-density separation, and graph smoothness as extra assumptions linking feature geometry to labels; makes no general risk, consistency, minimax, calibration, or graph-limit claim.
- Sources: Zhu et al. §2, PDF pp. 1–2; Chapelle et al. Chapter 1 §§1.3.2–1.3.3 and Chapter 11 §11.6, printed pp. 9–10 and 212–213. Source text is used for methodological caveats only; the local two-law theorem supplies the exact identification limit.
- Dependencies and level: alg-finite-round-confidence-pseudolabeling; alg-graph-harmonic-label-propagation; thm-unlabeled-law-alone-does-not-identify-labels; level 4.
- Decision: scope remark only; it asserts no new theorem or general risk guarantee.
- Validation: authored carrier written; verification.precheck is n/a for a remark. Final scoped renderer and manifest checks remain pending.
- Unresolved obligations: none for this item.
- Next action: author the B-page finite examples in levels 1, 3, and 4.

### ex-confident-pseudolabel-can-be-wrong

- Claim and convention: five ordered labeled points on the real line, one unlabeled point, k=5, threshold 4/5, unit pseudo-weight, and one round yield a wrong class-1 pseudo-label at a point whose true class is 2; the procedure does not revise it.
- Source/dependency: the procedure is the exact local alg-finite-round-confidence-pseudolabeling definition; no external result is used.
- Dependencies and level: alg-finite-round-confidence-pseudolabeling; level 1.
- Decision: generated finite example; the calculation only concerns the stated training set and threshold.
- Validation: node tools/tsx-run.mjs tools/precheck.mts items/ex-confident-pseudolabel-can-be-wrong.md passed after adopting canonical phase numbering: 1 checked, 0 failing. TikZ diagram is outside Facts/Verification; verification computes distances and votes without relying on it.
- Unresolved obligations: none for this item.
- Next action: author the q=1/2 two-law example and path example, both at level 3.

### ex-unlabeled-law-two-point-lower-bound

- Claim and convention: two laws on {a,b} both put mass 1/2 at each feature; the observed label at a is 0 under both, and the hidden label at b changes. The theorem gives worst expected risk at least 1/4; the verification also computes the complementary b-error probabilities directly.
- Dependencies and level: thm-unlabeled-law-alone-does-not-identify-labels; def-population-and-empirical-risk; level 3.
- Decision: generated finite example, exact for the two stated laws and common predictor distribution.
- Validation: node tools/tsx-run.mjs tools/precheck.mts items/ex-unlabeled-law-two-point-lower-bound.md passed: 1 checked, 0 failing. The TikZ law diagram is explanatory; the proof uses finite sums.
- Unresolved obligations: none for this item.
- Next action: author ex-graph-harmonic-path-interpolation at level 3.

### ex-graph-harmonic-path-interpolation

- Claim and convention: W has exactly unit edges {1,2} and {2,3}; B={1,3}, labels are 0 and 1, and U={2}. The exact score is 1/2 and the energy is 1/4.
- Dependencies and level: def-graph-harmonic-label-extension; thm-graph-harmonic-extension-uniqueness-and-maximum-principle; level 3.
- Decision: generated finite example with an independent exact one-variable energy calculation.
- Validation: node tools/tsx-run.mjs tools/precheck.mts items/ex-graph-harmonic-path-interpolation.md passed: 1 checked, 0 failing. TikZ diagram is explanatory; Verification computes the system and energy.
- Unresolved obligations: none for this item.
- Next action: author ex-graph-harmonic-unanchored-component-status at level 4.

### ex-graph-harmonic-unanchored-component-status

- Claim and convention: the support components are {1,2} and {3}; B={1}, U={2,3}, so the isolated unlabeled component fails the anchor test and the solver is not called.
- Dependencies and level: def-graph-harmonic-label-extension; alg-graph-harmonic-label-propagation; level 4.
- Decision: generated finite boundary example; the status follows the algorithm branch exactly.
- Validation: node tools/tsx-run.mjs tools/precheck.mts items/ex-graph-harmonic-unanchored-component-status.md passed: 1 checked, 0 failing. The TikZ graph is explanatory; Verification computes the components and follows the status branch.
- Unresolved obligations: none for this item.
- Next action: complete the proof contracts, synchronize the manifest and A/B page frontmatter, then run final scoped validation and the ordinary Step-1 recorder.

Source coverage includes four fetch-stamped full-text treatments. The final reconciliation below supersedes earlier per-item next-action notes where dependencies, inventory, or validation scope changed during authoring.

### lem-real-cholesky-recurrence-computes-factorization

- Claim and conventions: for a real symmetric positive-definite matrix, the explicit lower-triangular Cholesky recurrence has positive pivots at every step and returns R with RR^T=M. The proof establishes leading-principal-block positivity, uses rank-nullity only to invert an SPD block, and verifies each matrix entry.
- Sources and locators: David Bindel, CS 4220 notes, complete “Cholesky factorization” section, web lines 100–104, https://www.cs.cornell.edu/courses/cs4220/2026sp/lec/2026-02-09.html; Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, complete relevant §2.9.3, web lines 431–588, https://fncbook.com/structure/. Cornell gives a block recursion but leaves Schur-complement positivity as an exercise; Driscoll–Braun presents the SPD/positive-diagonal factorization and LDLᵀ square-root construction. The complete recurrence proof is local.
- Dependencies and level: def-cholesky-factorisation-with-positive-diagonal and thm-rank-nullity, both published; level 0. Its consumer alg-graph-harmonic-label-propagation cites the exact recurrence result.
- Decision: local intermediate result added to A before its algorithm consumer, with explicit statement references, complete two-step induction/factorization proof, exact citations, and all boundary cases recorded.
- Validation: precheck passed; proof-layout includes this item in 11 items / 21 steps / 0 defects; rendercheck, content-policy, strict proof-contract, and citation-fidelity checks passed.
- Unresolved mathematics: none. Run-wide Step-1 recording is blocked by malformed batch-71 manifest rows described below; no record was fabricated.
- Next action: owner repairs batch 71's item-object shape, then the ordinary Step-1 recorder can refresh all 11 records.

## Final reconciliation

- Inventory and placement: seven A items and four B examples are in the assigned pages. Current carrier-derived levels, in manifest order, are 0, 0, 1, 2, 2, 3, 4, 1, 3, 3, 4. The eleven carrier statements, dependencies, sources, levels, proof-contract scope, and exact 7+4 page inventories agree. Both page bodies are empty. There is no cycle among the assigned items.
- Design reconciliation: the task's plan locator L621 is stale; current ML-93 design starts at plan L634. The current plan and plan-spec.json agree on scope, prerequisites, warnings, and proof route. No substantive conflict remains. The dispatch scheduling hash 8ccb126509878bdac2b40bc0656cadeecb74eaea7073f8e066c3b258d9302e61 differs from the initially observed artifact hash 69025dde350f98b7148b6e768b5696a275290fe171748be48746b2924054386b. Later stored hashes observed during the run were cdace3639e8df109f7abfa6ec032821842cd47b0787b1d17682719eb805194c5, 29ea310cc07551424801e9880c98a70864c3f28ee142e944d94d84c6785ea3ed, 98be114434e93c4ca10d22c7528b3413353279a3d334f08a6e0be5e0e382545e, and latest e4d05960c5b86ceb1b82760e9467a49cec1a7fab1824e1aa5b2a7cd2357f3618; the last successful recomputation was d929ed5191c5f1f05bc5f55c68b4f9fae349783a9e26d34987554307cf5f1bd1. The batch-level recomputation is now blocked before hashing because the run snapshot contains string IDs where item objects are required. The last successful result gave batch 101 level 2 and requirements 2 and 21; no new in-run batch edge was added. The owner-controlled shared artifact was not changed. The batch-101 dependency-inputs file records the current external pages, item levels, hash history, and blocker.
- Suppliers: actual graph/Laplacian definitions and proof, finite risk definitions and measurability proof, Cholesky definition/factorization/substitution results, and rank-nullity statement/proof were inspected. Owner reconciliation records for batches 2 and 21 bind current supplier hashes and readiness. There is no missing mathematical supplier or additional axiom branch.
- Sources: four full-text sources are recorded and fetch-stamped. Zhu et al., complete relevant §2, PDF pp. 1–2; Chapelle et al., Ch. 1 §§1.3.2–1.3.3 and Ch. 11 §§11.1–11.3.4, §11.6; Bindel, complete Cholesky factorization section; Driscoll–Braun, complete relevant §2.9.3. Coverage and source-evidence record URLs, locators, supported items, and each disposition. The source-fetch check with --stamp verified 4/4 sources, 2 newly stamped, 0 drops; no retrieval failed, so no source-resolution entry was needed.
- Final scoped checks: seven proof-bearing prechecks pass; proof-layout reports 11 items, 21 steps, 0 defects; rendercheck passes 11 files; content-policy reports 11 items, 0 errors/warnings; depcheck, fwdcheck, and extcheck pass the selected scope; manifest-deps reports 11 items, 0 defects; proof-contract strict checks 11/11 with 0 errors/warnings; citation fidelity checks 18 citations with no missing quotes or widening candidates. The exact finite calculations and recurrence proof are in the carriers; no graph-specific registered smoke check was found, so no smoke ID was invented.
- Whole-run blockers: current item-dependency-levels check reports six empty inventories (generative-adversarial-networks and its examples page; predictive-calibration-and-uncertainty-under-shift and its examples page; monotone-risk-calibration-and-deployment-guarantees and its examples page) plus three item rows without IDs in batch 71: foundation-models-transfer-and-scaling-evidence.items[0] is the string def-foundation-model-as-broad-pretraining-and-adaptation, and the two example rows are the strings ex-empirical-language-model-scaling-law and ex-pretraining-adaptation-interface-limitations. Batch-dependency-levels check and step1-decisions check stop with Duplicate item undefined. All eleven ordinary step1-decisions record attempts, without owner override, fail with that same error before writing. The prior ten ready records predate the A-page inventory change and are stale; the new lemma has no record. No escalation or owner override was written.
- Handoff: mathematical content and scoped evidence for this pair are complete. Current Step-1 readiness recording requires the owner to repair the three batch-71 item-object rows and regenerate the shared batch dependency artifact; after that, refresh the eleven ordinary records in dependency order.
