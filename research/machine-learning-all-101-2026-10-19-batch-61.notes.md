# Batch 61 authoring notes

## Scope and planning reconciliation

- Run: machine-learning-all-101-2026-10-19; batch 61; current dispatch scheduling input 4652875380fb83fe2b469069a490dc8aeba66b4b740ea67dbde87608a9c8b602.
- The current owner authoring direction at research/machine-learning-all-101-2026-10-19-owner-authoring-direction.md was read. It preserves the approved 101 pairs and draft status and adds no P-KR-01-specific scope change; its ordinary readiness and shared-manifest reconciliation requirements apply.
- The complete P-KR-01 design at research/plan-machine-learning-track.md and the matching research/plan-spec.json record agree on page IDs, title, category, the convex-prerequisite page, finite-metric scope, cone/separation proof route, and example promises. No design/spec conflict. The plan's page-level requires edge is kept separate from the theorem's item-level logical suppliers.
- The declared prerequisite page convex-and-semicontinuous-functions-on-rn is published and contains thm-strict-separation-of-a-point-from-a-closed-convex-set. Its actual statement is for a nonempty closed convex set in R^n and an exterior point. The cone used below is nonempty, closed, convex, and in R^(2m+1); the required dimension is positive because m>=1.
- The plan-spec items inventory was empty. The scaffold inventory below is authored from the complete design promises: local definitions for finite couplings and finite-metric W1, a full optima-attainment lemma, the required finitely-generated-cone lemma, the duality theorem including the stated complementary-slackness consequence, and the three promised B-page examples.
- The existing Euclidean def-p-one-wasserstein-one is restricted to measures on R^d; it does not define transport on an arbitrary finite metric space. The local definitions therefore do not claim to be supplied by it.

## Inventory, dependencies and levels

The inventory and direct logical edges were entered before item carriers. Batch 61 is level 0 with no in-run batch prerequisites. Item levels use only suppliers in this pair; published suppliers are external context.

| Item | Page | Direct in-pair suppliers | Level |
|---|---|---|---:|
| def-finite-metric-coupling | A | none | 0 |
| lem-finitely-generated-cone-is-closed | A | none | 0 |
| def-finite-metric-wasserstein-one | A | def-finite-metric-coupling | 1 |
| lem-finite-metric-transport-optima-attained | A | both finite-metric definitions | 2 |
| thm-finite-metric-transport-duality | A | the definitions and both local lemmas | 3 |
| ex-two-point-finite-metric-transport-duality | B | theorem and finite-metric definitions | 4 |
| ex-finite-chain-transport-duality | B | theorem and finite-metric definitions | 4 |
| ex-attaining-finite-metric-primal-dual-pair | B | theorem and finite-metric definitions | 4 |

The B page remains a leaf. No cross-batch item edge is required; the empty cross-batch input records that boundary.

## Supplier checks

- def-metric-space gives the real-valued metric axioms but intentionally omits nonnegativity; lem-metric-nonnegativity proves it from reflexivity, symmetry and triangle inequality. The local cost and Lipschitz bounds use that lemma explicitly.
- def-finite-probability-vector uses a common finite alphabet, nonnegative coordinates and total mass one. Product coupling p_i q_j is constructed directly; no product-measure or arbitrary-choice supplier is needed.
- thm-heine-borel-rn applies to the closed bounded coupling and normalized-potential subsets of R^(m^2) and R^m. Its full proof was inspected; it states and proves the result without a choice principle.
- thm-euclidean-semicontinuous-extreme-value-theorem applies to the continuous finite-sum cost/objective functionals on those nonempty compact sets. Its full proof was inspected; no separate closed-cone or LP-duality claim is imported.
- thm-strict-separation-of-a-point-from-a-closed-convex-set has the required exterior-point direction. Its actual proof and the nearest-point/variational-inequality supplier statements and proofs were inspected. The cone proof uses the theorem's strict separator, then derives nonpositive pairing on the cone by scaling and positive pairing on the exterior point.
- def-euclidean-inner-product, def-linear-independence, and thm-invertible-matrix-theorem support the local Gram-matrix proof that each cone with an independent active set of generators is closed. The proof eliminates coefficients over a finite dependent support and takes a finite union; it uses no sequential compactness or choice axiom.
- lem-finite-set-has-max and def-max-min justify the attained finite minimum in the c-transform formula. The local use is over the explicit finite list indexed by j=1,...,m.

## Source reading and retrieval history

- Peyré and Cuturi, Computational Optimal Transport, full arXiv HTML body retrieved; read §§2.1, 2.3, 3.1, 3.3 and 6.1, including the complete relevant propositions and proofs. The discrete coupling matrix and metric-cost dual-potential interface are used as context. Their §3.1 explicitly defers strong LP duality to a separate reference, so it is not used as the proof of this pair.
- Santambrogio, Introduction to Optimal Transport Theory, full 16-page arXiv lecture-note body retrieved; read §§1.1–1.3, PDF pp. 3–6. The notes explicitly restrict their setting to Euclidean domains and say they do not check the hypotheses for the displayed inf-sup exchange. The c-transform/1-Lipschitz reduction is context only; the arbitrary finite-metric result is proved locally.
- Arjovsky, Chintala and Bottou, Wasserstein GAN, full arXiv v3 paper text retrieved; read §§2–3 and the theorem/application passages on PDF pp. 3–7, and the complete Appendix C proof of Theorem 3 on PDF pp. 23–24. The paper invokes compact-metric Kantorovich–Rubinstein duality but does not prove the finite theorem. Its ideal-critic differentiability argument depends on its compact-data-space and Assumption 1 hypotheses; those WGAN and neural-critic claims remain out of scope.
- Kager, A Short Simple Proof of Closedness of Convex Cones and Farkas' Lemma, complete two-page arXiv v2 paper. Read the full theorem and proof. It supports the closedness claim, but its sequential Bolzano–Weierstrass route is not imported; the local lemma gives a finite independent-support/Gram-projection proof.
- Retrieval history: the design's Santambrogio author-hosted book PDF timed out and a CiteSeer mirror returned HTTP 403. A complete same-author 16-page lecture note was found and read; its Euclidean-only scope is recorded above. A Utrecht convexity compendium PDF also timed out; the complete Kager arXiv paper supplied a successful alternative. These alternatives were read, so no active source is dropped or unresolved and no source_resolution status dropped record is claimed.
- Harvest dispositions are recorded in batch-61.coverage.json, batch-61.source-coverage.json and batch-61.source-evidence.json. The current `source-fetch-check --stamp` revalidation passed 6/6 sources with 0 newly stamped and 0 documented drops; the existing successful stamps and earlier failed-URL/alternative history are preserved.

## Item progress

### Scaffold inventory — complete before carrier authoring

- Claim scope: finite metric spaces only; the proof is the prescribed closed-cone separation argument, with compactness used only for primal and normalized dual attainment.
- Page placement and dependencies: the eight item IDs, exact deps, and levels are in the batch manifest. The two local definitions and cone lemma are the level-0 suppliers; consumers are written in ascending level.
- Sources and locators: the complete texts and retrieval limitations are listed above. Source fetch validation and harvest dispositions remain to be recorded after the source-coverage files are written.
- Unresolved obligations: none currently identified in the declared interfaces. The actual suppliers cited in item contracts will be checked against their bodies before readiness.
- Next action: write the remaining level-0 supplier, then author higher-level consumers.

### def-finite-metric-coupling — complete

- Claim and conventions: a coupling is a nonnegative matrix on the same ordered finite alphabet, with row sums p and column sums q. The item restates the probability-vector hypotheses, so the definition is usable without importing a measure-theoretic coupling convention.
- Direct dependency: def-finite-probability-vector, whose full definition was inspected; it requires nonnegative coordinates and total mass one on a finite nonempty alphabet. This item is level 0.
- Source locators: Peyré and Cuturi, §§2.1–2.3 and 3.1, on histograms and matrix couplings; Santambrogio, §1.1, PDF pp. 3–4, on couplings and the product-plan construction. Both source texts were read in the relevant ranges; harvest dispositions and fetch stamps are recorded in the batch evidence.
- Axiom and boundary checks: no choice is used; the alphabet is supplied and nonempty. The two marginal equations imply total coupling mass one by finite summation.
- Next action: author the level-0 finitely-generated-cone lemma.

### lem-finitely-generated-cone-is-closed — complete

- Claim and conventions: the nonnegative span of a finite list in Euclidean R^r is closed and remains closed under nonnegative linear combinations.
- Direct dependencies: def-euclidean-inner-product, def-linear-independence, lem-metrics-on-rn, def-metric-topology and thm-invertible-matrix-theorem. Each actual body was inspected; the Gram matrix has trivial kernel for an independent generator sublist, the square-matrix theorem supplies its inverse, and the metric-topology definition supplies the closed-set criterion.
- Proof: any representation with dependent positive support is shortened by a finite minimum step. Each independent-support cone is expressed as finitely many linear equalities and weak inequalities using a Gram-matrix left inverse, so it is closed. There are only finitely many supports. No sequential compactness or choice principle is used.
- Source locator: Kager, complete two-page arXiv v2 paper, Lemma on PDF pp. 1–2. Its proof uses Bolzano–Weierstrass; the carrier does not import that route and supplies the finite-support proof locally.
- Unresolved mathematical obligations: none. The source fetch stamp is present and was revalidated in this pass.
- Next action: author the finite-metric W1 definition at level 1.

### def-finite-metric-wasserstein-one — complete

- Claim and conventions: W1 is the minimum of the finite cost sum over nonnegative matrices with the two prescribed marginals, on an arbitrary finite metric space. The definition repeats the coupling and probability-vector clauses so its own body is uninterrupted and self-contained.
- Direct dependencies: def-metric-space and def-finite-metric-coupling; the latter is an in-pair level-0 supplier. Its justified_by target is the later optima-attainment lemma, which will depend on this definition.
- Source locators: Peyré and Cuturi, §§2.1–2.3 and 6.1; Santambrogio, §§1.1 and 1.3, PDF pp. 3–6. The finite-transport formula and single-potential context were inspected; neither source replaces the local existence or duality proofs.
- Axiom and boundary checks: no choice is needed. Nonnegative finite costs follow from the metric nonnegativity supplier; minimum attainment is not claimed without the planned justified_by lemma.
- Next action: prove nonempty compact coupling and normalized-potential sets and their extrema at level 2.

### lem-finite-metric-transport-optima-attained — complete

- Claim and conventions: the finite coupling polytope is nonempty compact and the normalized 1-Lipschitz potential set is nonempty compact; the finite cost and dual linear functional attain their respective extrema.
- Direct dependencies: finite probability and coupling definitions, the local W1 definition, metric nonnegativity, Euclidean Heine–Borel, the metric/topology and real-line metric interfaces for closedness and continuity, and the lower/upper semicontinuity definition and Euclidean extreme-value theorem. Every cited supplier body was inspected.
- Proof: the product matrix p_i q_j supplies a coupling; each feasible entry lies in [0,1]. Closedness follows from finite continuous linear constraints, and Heine–Borel gives compactness. The normalized potential set contains zero and has |f_i| bounded by the finite distance to x_1. Continuous linear objectives attain extrema. These statements also establish the W1 definition's justified_by obligation.
- Source locators: Peyré and Cuturi, §§2.1–2.3 and 3.1; Santambrogio, §§1.1–1.2, PDF pp. 3–5. The sources provide context only for the finite-dimensional proof; the local closedness and attainment arguments are complete.
- Axiom and boundary checks: m>=1 is used for product vectors, x_1 normalization, positive Euclidean dimensions and nonempty extrema. The proof is choice-free.
- Unresolved obligations: none.
- Next action: write the level-3 cone-separation duality theorem.

### thm-finite-metric-transport-duality — complete

- Claim and conventions: for every finite nonempty metric space and two probability vectors, the minimum coupling cost equals the maximum normalized 1-Lipschitz potential value. Both extrema are attained. For every optimal pair, positive coupling mass occurs only on saturated potential constraints.
- Direct dependencies: finite metric/probability/coupling/W1 definitions; metric nonnegativity; finite minima; the local cone-closedness and optima-attainment lemmas; strict separation of an exterior point from a nonempty closed convex Euclidean set. All actual source statements/proofs and exact domains were inspected.
- Proof route: weak duality by marginal summation; build the cone with slack generator, prove the primal-shortfall point is outside it; use strict separation and cone scaling; rule out a zero last normal coordinate by the product coupling; normalize the two potentials; reduce them to one Lipschitz potential by a finite c-transform; normalize constants; let epsilon decrease to zero; derive complementary slackness by summing nonnegative residuals.
- Source locators: Peyré and Cuturi §§2.1–2.3, 3.1, 3.3 and 6.1; Santambrogio §§1.1–1.3; Arjovsky et al. §§2–3. The first source explicitly defers LP strong duality, the second leaves its inf-sup exchange hypotheses unchecked and is Euclidean-scoped, and the third invokes rather than proves KR duality; the local proof supplies the full arbitrary finite-metric argument.
- Axiom check: no choice principle is used. The finite product coupling is explicit; all minima are finite-list minima; the local cone proof uses finite support reduction; the selected Heine–Borel/extreme-value suppliers were checked as choice-free.
- Unresolved mathematical obligations: none currently identified. At the time of this checkpoint, proof contracts and actual supplier/body reconciliation are complete; final scoped checks and the ordinary Step-1 readiness recorder remain to be attempted.
- Next action: author the three level-4 B-page examples.

### ex-two-point-finite-metric-transport-duality — complete

- Claim and conventions: on a two-point space at separation delta, arbitrary probability weights a,b in [0,1] have W1=delta|a-b|. Both transport directions have displayed feasible plans and normalized attaining potentials, including a=b and endpoint weights.
- Direct dependencies: finite metric/probability/coupling/W1 definitions and the local duality theorem. Actual supplier bodies were inspected.
- Proof: each case checks nonnegativity, both marginals and cost; each potential checks normalization, Lipschitz bound and objective. Equal feasible primal/dual values, together with the local theorem, force attainment and the stated W1 value.
- Sources: Peyré and Cuturi §6.1; Santambrogio §1.3, PDF pp. 5–6. These support the finite dual-potential context; all displayed plan and potential calculations are local.
- Axiom and boundary checks: no choice; a=b and a or b at 0 or 1 are included.
- Next action: author the finite-chain example.

### ex-finite-chain-transport-duality — complete

- Claim and conventions: for the finite path metric on indices 0 through n, W1 is the sum of absolute cumulative mass imbalances; the sign-increment potential attains the normalized dual maximum.
- Direct dependencies: finite probability/coupling/W1 definitions, the usual real metric restricted to the finite chain, and the local finite-metric duality theorem. The sources for these statements were inspected.
- Proof: finite summation by parts gives the dual upper bound. The recursively specified potential has adjacent increments in {-1,0,1}, so it is 1-Lipschitz on the path; its objective equals the cumulative-imbalance sum. The local theorem identifies the dual maximum with W1.
- Source locators: Peyré and Cuturi §6.1, finite discrete W1 dual formulation; Santambrogio §1.3, Euclidean 1-Lipschitz reduction. The cumulative formula is proved locally, not imported.
- Axiom and boundary checks: n>=1; all R_k=0 cases are handled by sgn(0)=0. No choice is used.
- Unresolved obligations: none.
- Next action: author the explicit three-point attaining pair.

### ex-attaining-finite-metric-primal-dual-pair — complete

- Claim and conventions: on the three-point path with edge lengths 1 and 1, the half-mass plan from the endpoints to the middle and the potential (0,-1,0) have equal value 1.
- Direct dependencies: finite metric, probability, coupling and W1 interfaces plus the local finite-metric duality/complementary-slackness theorem. The source bodies were inspected.
- Proof: verify the distance matrix, the plan's nonnegative entries and marginals, and the potential's normalization and pairwise Lipschitz inequalities. The equal feasible primal/dual values and proved duality force attainment; both positive entries saturate their cost constraints.
- Source locators: Peyré and Cuturi §§3.3 and 6.1; Santambrogio §1.3. The exact finite witness and all arithmetic are established in the example.
- Axiom and boundary checks: all mass vectors are finite and explicit; no choice is used.
- Unresolved obligations: none.
- Next action at the end of ascending-level authoring: finish A/B inventories, source harvest/evidence, proof contracts, and scoped checks; these are completed below.

## Final reconciliation and scoped evidence — 2026-10-19

- Current owner direction was read. The design and `plan-spec.json` agree on P-KR-01’s A/B identities, title, machine-learning category, A-page prerequisite, finite-metric scope, examples, complementary-slackness claim, and closed-cone/separation duality route. The plan-spec item arrays remain empty; this batch manifest fills the local definitions and intermediate proofs needed to deliver the full promises.
- The eight item levels remain `0,0,1,2,3,4,4,4`; direct in-pair suppliers are listed above. The theorem manifest now includes the exact Euclidean-pairing and convexity definitions it uses; the proof states the coordinate shift from alphabet index $i$ to library coordinate $i-1$, and the attainment proof specifies row-major matrix flattening. Duplicate manifest `deps` were removed. External suppliers do not change in-run levels. Batch 61 remains level 0 with no prerequisite batches, and its cross-batch input remains `[]`.
- Supplier verification found no missing mathematical result. The actual strict-separation theorem applies to the nonempty closed convex cone in $\mathbb R^{2m+1}$ because $m\ge1$; its published proof uses nearest-point projection and the variational inequality. The finite coupling and potential extrema are attained choice-free. `def-metric-continuity` has a transitive metadata dependency on `def-countable-choice`, but these proofs use only its epsilon-delta clause and assume no countable choice.
- **Closed-cone subroute note for owner review:** the plan describes reducing supports and then using a convergent-subsequence argument with a fixed independent support. The carrier keeps the support reduction and the prescribed cone-separation route, but proves each independent-support cone closed by an explicit Gram-matrix left inverse and takes a finite union. This is a complete choice-free proof. The library theorem `thm-metric-sequential-closure` uses $\mathrm{AC}_\omega$ at step 1.2 to select a sequence from nonempty neighbourhood intersections; importing it for the closedness passage would add an axiom absent from P-KR-01. This is a disclosed proof-route deviation, not an unresolved mathematical claim.
- Source locators and per-result dispositions are in `batch-61.coverage.json`; fetch attempts and stamps are in `batch-61.source-coverage.json`; reading attribution and failed-URL/alternative history are in `batch-61.source-evidence.json`. The final `source-fetch-check --stamp` result was 6/6 verified, 0 newly stamped, 0 documented drops. Peyré–Cuturi and Santambrogio remain the two independent A-page treatments; Arjovsky et al. is context only, with its complete Theorem 3 appendix proof read to verify the WGAN boundary; Kager’s complete paper was read but its sequence proof is not imported.
- Final scoped checks passed: `manifest-deps` (8 items); `proof-layout` (8 items, 25 steps, 0 defects); `precheck` (8 files, 6 proof-bearing items checked, 0 failures); `rendercheck` (8 items and 2 pages, 0 errors or warnings); focused `depcheck` (8 items, 336 dependency-closure items, 265 pages, 0 errors or warnings); `content-policy` (8 items, 0 errors or warnings); strict `proof-contract` (all 8 items); statement-first inspection (8 items, 0 defects). A/B page bodies remain empty.
- The finite-smoke registry has no finite-metric transport selector. The contract rows therefore keep `finite_smoke: []`; the two-point, chain, and three-point witnesses are verified directly and completely in their local example arguments.
- The duplicate `Proof references` sections were consolidated into the immediately following `Statement references` sections. Their source URLs remain represented there, in `sources.references`, and in the source-harvest evidence; all proof supplier links remain in `Facts & Assumptions`.
- All eight ordinary `step1-decisions.mjs record` calls returned `ready` with `owner: false`; a subsequent current-input check reports all eight records closed. These records complete authoring readiness only; they are not independent approval.
- Run-wide checks still expose owner-scope blockers. The final `item-dependency-levels.mjs check` sees 202 pages and 543 items; 119 other pages still have empty scaffold inventories. It also finds 17 one-level mismatches in batch 32, all on `relu-approximation-rates-and-depth-expressivity` or its examples page: `def-relu-network` (0/1), `def-relu-linear-region` (1/2), `lem-relu-tent-iterate-depth` (1/2), `lem-relu-square-approximation` (2/3), `lem-relu-bounded-product-approximation` (3/4), `thm-yarotsky-fixed-architecture-sobolev-approximation-rate` (4/5), `thm-yarotsky-adaptive-one-dimensional-lipschitz-approximation` (1/2), `thm-yarotsky-approximation-lower-bounds` (1/2), `lem-relu-rank-sensitive-region-recursion` (2/3), `thm-relu-linear-region-upper-bound` (3/4), `lem-relu-folding-block` (1/2), `thm-relu-linear-region-lower-bounds` (2/3), `thm-telgarsky-depth-separation-l1` (2/3), `cex-telgarsky-small-k-large-degree-gate` (3/4), `ex-relu-tent-map-depth-vs-width` (3/4), `ex-target-specific-vs-target-independent-approximation` (5/6), and `ex-linear-regions-do-not-guarantee-learning` (4/5), with recorded/computed levels shown in parentheses. All eight assigned labels compute correctly. An earlier scan observed `lem-finite-metric-plan-lifts-to-a-borel-coupling` in batch 62 at level 0 although its dependency on batch-61 `def-finite-metric-coupling` implied level 1; the final scan no longer reports it. `batch-dependency-levels.mjs check` reports the run-wide dependency-level artifact stale after current manifest changes; that shared artifact was left to the owner.
- The recomputed live status remains `1-scaffold`: 27/101 covered, nothing in flight, and the owner blocker in `step1-blockers.json` still requires repair/recertification for units 15, 28, 31, and 46. The engine reports artifact completion deferred until authoring coverage is complete and writers drain. No run state, verdict, shared plan, or other pair was edited.
- **Next action:** owner reconciliation of the disclosed closed-cone proof-route deviation and stale run-wide dependency-level evidence, followed by completion/drain of the other scaffold work and the native Step-1 gate.
