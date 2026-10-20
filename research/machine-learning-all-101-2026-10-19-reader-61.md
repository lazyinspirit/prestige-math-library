# Step 3a reader report — batch 61

Run: `machine-learning-all-101-2026-10-19`  
Role: `reader-61`

## Opened inventory

Assigned pages:

- `library/machine-learning/finite-metric-transport-duality.md` (A): draft, frontmatter only, `page_layout: compact-v1`; lists all five A items and requires `convex-and-semicontinuous-functions-on-rn` and `f-divergences-renyi-and-hypothesis-testing`.
- `library/machine-learning/finite-metric-transport-duality-examples.md` (B): draft, frontmatter only, `page_layout: compact-v1`; lists the three examples and requires the A page.

I also checked the frontmatter for the two required pages at `library/real-analysis/convex-and-semicontinuous-functions-on-rn.md` and `library/information-theory/f-divergences-renyi-and-hypothesis-testing.md`. Their inventories contain the convex analysis/separation material and `def-finite-probability-vector` relevant to this pair. The assigned pages have no Markdown bodies or summaries.

Assigned items, read in manifest dependency order:

1. `def-finite-metric-coupling`
2. `lem-finitely-generated-cone-is-closed`
3. `def-finite-metric-wasserstein-one`
4. `lem-finite-metric-transport-optima-attained`
5. `thm-finite-metric-transport-duality`
6. `ex-two-point-finite-metric-transport-duality`
7. `ex-finite-chain-transport-duality`
8. `ex-attaining-finite-metric-primal-dual-pair`

Direct item suppliers opened:

- `def-finite-probability-vector`, `def-metric-space`, `def-euclidean-inner-product`, `def-linear-independence`, `def-metric-topology`, `def-convex-subset-of-euclidean-space`, `def-max-min`, `def-abs-value`, `def-integer-power`, `def-metric-continuity`, and `def-semicontinuity-on-euclidean-subsets`.
- `lem-metric-nonnegativity`, `lem-metrics-on-rn`, `thm-invertible-matrix-theorem`, `lem-finite-set-has-max`, `lem-finite-sum-laws`, `lem-of-square-positive`, `lem-of-square-monotone`, `thm-of-square-roots`, `lem-of-abs-value`, `lem-of-triangle-inequality`, `lem-of-sign-rules`, `lem-of-zero-mult`, `thm-induction-principle`, `thm-heine-borel-rn`, `lem-real-line-is-a-metric-space`, `thm-euclidean-semicontinuous-extreme-value-theorem`, and `thm-strict-separation-of-a-point-from-a-closed-convex-set`.

Relevant transitive suppliers opened to check the compactness, separation, and finite-minimum arguments:

- `def-metric-ball`, `thm-nearest-point-in-a-nonempty-closed-convex-set`, `lem-projection-onto-a-closed-convex-set-has-the-variational-inequality`, `def-supporting-hyperplane-to-a-convex-set`, `def-metric-interior-closure-boundary`, `thm-extreme-value-metric`, `thm-cauchy-schwarz-and-the-euclidean-norm`, `thm-euclidean-semicontinuity-level-set-characterisations`, `thm-compact-iff-finite-intersection-property`, `def-metric-compactness`, `lem-finite-subsets-listable`, `def-field`, `def-ordered-field`, `def-complete-ordered-field`, `def-real-order`, and `lem-of-add-order`.

Task evidence consulted: the batch manifest, `briefs/reader.md`, the batch cross-batch-dependency file, the batch proof contracts, the batch source-coverage and source-evidence records, current `.autopilot` status, and the current Git log. These records were used as navigation and evidence, not as verdicts.

## Mathematical review

- The coupling definition preserves the fixed alphabet and the source/destination index convention. The product coupling in the attainment lemma has the stated marginals, including zero coordinates.
- The finite cone proof correctly eliminates dependent positive supports, represents each independent-support cone as a closed set of linear equalities and inequalities, and writes the full cone as a finite union of those closed sub-cones. The finite termination step is now explicit.
- The coupling and normalized-potential feasible sets are nonempty, closed, and bounded in their stated Euclidean dimensions. The finite-dimensional semicontinuous extreme-value result therefore gives the required primal minimum and dual maximum. The attainment proof establishes the cost minimum by compactness before identifying it with the formula defining `W_1`; I found no circular inference.
- The duality proof applies strict separation to a nonempty closed convex cone and the point below its optimal cost. Cone scaling forces the separating functional to be nonpositive on the cone; the finite c-transform produces a normalized 1-Lipschitz potential. Weak duality and the epsilon argument give equality, and the finite zero-sum argument gives complementary slackness for every optimal pair.
- The two-point matrices have the claimed marginals and cost in both parameter orders. The finite-chain summation-by-parts identity and recursive potential give the stated formula. The three-point coupling, potential, cost, and complementary-slackness equalities check directly.
- The TikZ diagram in `ex-attaining-finite-metric-primal-dual-pair` matches the text: the two distance-one edges are labelled correctly, node labels give the stated masses, and both curved arrows point from the source masses to `x_2` with weights `1/2`. The other items make no diagram-dependent claim and need no diagram for their arguments.

## Citation review

I checked the cited primary-source passages directly:

- Peyré and Cuturi, *Computational Optimal Transport*, [§2.1, §2.3 (including (2.10)–(2.11)), §3.1 (including Remark 3.2), §3.3 Proposition 3.2, and §6.1 Proposition 6.1](https://ar5iv.labs.arxiv.org/html/1803.00567). The coupling/marginal and primal-cost formulations, the LP dual form, complementary-slackness condition, and one-potential c-transform match the cited locators. Remark 3.2 explicitly defers strong duality to an LP theorem; the assigned proof does not import it.
- Santambrogio, *Introduction to Optimal Transport Theory*, [§§1.1–1.3, PDF pp. 3–6](https://arxiv.org/pdf/1009.3856). The source gives the transport-plan formulation and p=1 c-transform reduction, but §1.2 says it does not check the inf-sup exchange hypotheses and §1.1 restricts the notes to Euclidean domains. The assigned arbitrary finite-metric equality is proved locally.
- Arjovsky, Chintala, and Bottou, *Wasserstein GAN*, [§2 and §3, PDF pp. 3–7](https://arxiv.org/pdf/1701.07875). The source gives compact-data-space Earth-Mover/KR context and Theorem 3's ideal-critic statement; it does not prove this finite arbitrary-metric theorem. No WGAN gradient, training, or neural-critic conclusion is imported.
- Kager, *A Short Simple Proof of Closedness of Convex Cones and Farkas’ Lemma*, [closed-cone lemma and proof, PDF pp. 1–2](https://arxiv.org/pdf/2208.11678v2). The cited lemma is correctly identified. The assigned cone proof supplies its own finite support-elimination/Gram-matrix argument.

## Edits and evidence

- `items/def-finite-metric-coupling.md:35`: changed the visible label of the moved wikilink to “Finite probability vectors.” The complete Definition remains uninterrupted and the supplier reference remains in `Definition references`.
- `items/def-finite-metric-wasserstein-one.md:38,40,42`: changed the moved wikilink labels to “Metric spaces,” “Finite probability vectors,” and “Couplings of finite probability vectors.” The Definition and its supplier/source references remain intact.
- `items/lem-finitely-generated-cone-is-closed.md:79`, proof step 1.1: made the termination justification explicit: every reduction removes at least one positive-support index and adds none, so at most `N` reductions leave an independent or empty support.
- `items/thm-finite-metric-transport-duality.md:92`, proof step 2.1: replaced “for large `s`” with the explicit choice `s=(β+1)/⟨h,z⟩` when the pairing is positive.
- `items/thm-finite-metric-transport-duality.md:102`, proof step 7.1: stated why a finite sum of nonnegative reals can vanish only when each term vanishes, completing the complementary-slackness inference.
- Updated the corresponding derivations for cone step 1.1 and theorem steps 2.1 and 7.1 in `research/machine-learning-all-101-2026-10-19-batch-61.proof-contracts.json`. Neither repaired item had a stale `verification.judge` record.

## Page verdicts

- `finite-metric-transport-duality` (A): **pass**. Its frontmatter inventory, prerequisites, draft status, compact layout, and empty body are consistent.
- `finite-metric-transport-duality-examples` (B): **pass**. Its examples inventory, A-page prerequisite, draft status, compact layout, and empty body are consistent.

## Uneditable defects

None found in the assigned pages, assigned items, or the published suppliers needed for these claims.

## Validation and blockers

- `reflow.mts` reported unchanged for all four changed items.
- `precheck.mts`: the two definitions had `0 checked, 0 failing`; the cone lemma and duality theorem each passed direct precheck.
- Final `proof-layout.mjs`: `4 items, 11 steps, 0 defects`.
- No blocker within batch 61. Current autopilot status is paused; its reported blockers are `split-51` and `collect-36`, outside this dispatch’s scope.

## Coverage note

All assigned pages and items, their direct dependencies, and the transitive supplier bodies listed above were opened. I did not recursively proof-audit every lower-level metadata dependency behind the published suppliers; the current metadata closure has 289 IDs. No assigned inference remains without an explicit supplier, an earlier step, or an elementary derivation.
