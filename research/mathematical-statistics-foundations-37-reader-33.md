# Step 3a reader report — batch 33

Run: `mathematical-statistics-foundations-37`  
Role: reader  
Status: complete

## Scope and evidence

- Recomputed the autopilot run status from disk: the run is live at Step 3a; batch 33 had no reader artifact when review began.
- Read `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`, `briefs/reader.md`, and the batch-33 page manifest. No pre-rendered reader evidence bundle was present; I read the assigned carriers and required dependencies directly. Run notes, coverage records, contracts, and prior reports were navigation evidence, not verdicts.
- Opened both assigned pages: `library/mathematical-statistics/robust-mean-estimation-under-heavy-tails.md` and `library/mathematical-statistics/robust-mean-estimation-under-heavy-tails-examples.md`.
- Opened all six A-page prerequisite pages: `library/mathematical-statistics/concentration-inequalities-and-tail-bounds.md`, `library/mathematical-statistics/contamination-models-and-robust-risk.md`, `library/functional-analysis/hilbert-space-geometry-and-riesz-representation.md`, `library/functional-analysis/banach-valued-integration-and-the-radon-nikodym-property.md`, `library/functional-analysis/compact-self-adjoint-hilbert-schmidt-and-trace-class-operators.md`, and `library/mathematical-statistics/symmetrization-rademacher-complexity-and-covering-entropy.md`.
- Opened the current-run supplier items used by assigned proofs: batch 31 `def-adversarial-sample-replacement` and `def-huber-contamination-model`; batch 14 `thm-bernstein-independent-sums` and `def-subgaussian-variable-and-vector`; batch 15 `thm-independent-process-symmetrization` and `thm-one-sided-coordinate-rademacher-contraction`. Their relevant statements and proof interfaces were adequate; no uneditable dependency defect was found.
- For the geometric-median constants, checked Minsker, *Geometric Median and Robust Estimation in Banach Spaces*, Lemma 2.1(a) and the Corollary 4.1 proof, arXiv PDF pp. 3–8: <https://arxiv.org/pdf/1308.1334>.
- For the trimmed-mean statements, checked Lugosi and Mendelson, *Robust Multivariate Mean Estimation: The Optimality of Trimmed Mean*, Theorem 1/proof, PDF pp. 8–13, and Proposition 1 with Lemmas 1–2/proofs, pp. 17–22: <https://arxiv.org/pdf/1907.11391>. The relevant source definitions, quantile conventions, and constants were compared with the current local claims; source wording was treated as evidence, not adopted without checking.

## Opened assigned-item inventory

Items were reviewed in dependency order, suppliers before consumers.

| Dependency level | Opened item IDs |
|---|---|
| 0 | `lem-variance-sensitive-bounded-empirical-process-concentration`; `alg-geometric-median-of-block-means`; `alg-multivariate-trimmed-mean`; `alg-univariate-trimmed-mean`; `lem-absolutely-continuous-upper-quantile-exact-tail-mass`; `lem-finite-covariance-matrix-basic-properties`; `lem-positive-real-has-dyadic-scale-in-factor-two` |
| 1 | `cex-correct-scale-trimming-slab-radius-four-is-false`; `cex-excess-tail-functional-does-not-bound-trimmed-mean`; `cex-univariate-clean-quantile-count-exponent-is-false`; `lem-geometric-median-majority-radius-bound`; `lem-measurable-minimum-norm-geometric-median-selection`; `lem-multivariate-trimmed-mean-selector-total-and-measurable`; `lem-univariate-trimmed-mean-total-and-measurable` |
| 2 | `lem-multivariate-mean-rate-given-correct-scale-event`; `lem-zero-covariance-multivariate-trimmed-mean-exact`; `thm-finite-variance-geometric-median-mean-bound`; `thm-univariate-trimmed-mean-under-replacement` |
| 3 | `prop-correct-scale-multivariate-trimming-slab-bound` |
| 4 | `thm-multivariate-trimmed-mean-under-replacement` |
| B-page examples | `ex-one-corrupted-block-is-rejected-by-the-geometric-median`; `cex-half-replacement-prevents-covariance-only-mean-recovery`; `ex-polynomial-tail-law-with-finite-variance` |

## Edits and evidence

Edits were confined to assigned batch-33 draft items, its batch manifest/proof contracts, and the task report/findings artifacts. No assigned page prose, other-batch carrier, published item, or `research/plan-spec.json` was edited.

| Item | Repair and evidence |
|---|---|
| `lem-finite-covariance-matrix-basic-properties` | Replaced an unsupported expectation Cauchy–Schwarz step with pointwise bounds from `|x| ≤ 1+x²` and `2|xy| ≤ x²+y²`; made coordinate/polynomial measurability explicit and corrected the Cauchy–Schwarz citation to its pointwise Euclidean use. The pointwise inequalities establish the needed first and cross moments from the stated second moment. |
| `lem-geometric-median-majority-radius-bound` | Removed the unsupported attribution of line-distance formulas and directional derivatives to `def-hilbert-space`. Derived the line geometry by orthogonal decomposition and the derivative by a rationalized difference quotient; bounded the non-good summands using the Hilbert inner-product inequality. This supplies the exact finite-dimensional computation used in the majority argument. |
| `lem-measurable-minimum-norm-geometric-median-selection` | Added the separability definition and countable-enumeration lemma to the dependency chain. The comparison events now use a countable dense scalar range and rational thresholds, so their Borel status follows from the cited measurable-comparison facts rather than an unstated comparison rule. Fixed a missing math delimiter in the dense-metric argument that caused the renderer to hide the remaining source steps. |
| `lem-multivariate-trimmed-mean-selector-total-and-measurable` | Made low-scale continuity and local finite high-scale control explicit; wrote comparison preimages using rational thresholds; derived the coordinate/pair-map measurability; and proved the needed subsequential compactness directly from a finite-subcover argument. The resulting branch and pointwise-limit arguments justify totality and Borel measurability under the stated prerequisites. |
| `alg-geometric-median-of-block-means` | Added `def-separable-space`, because the procedure's input domain explicitly requires a separable Hilbert space. |
| `thm-finite-variance-geometric-median-mean-bound` | Replaced an unsupported scalar (L^2) Cauchy–Schwarz use by `‖X‖ ≤ 1+‖X‖²`; constructed strong measurability of the rank-one covariance map from simple approximants and trace-norm continuity; and made the Hilbert Cauchy–Schwarz use explicit. Added the separability/enumeration dependencies used for dense-sequence constructions and tagged the referenced block-deviation step. The trace-class supplier chain now has the stated measurability and integrability inputs. |
| `thm-univariate-trimmed-mean-under-replacement` | Stated the replacement-fraction domain `η ≥ 0`; proved translation equivariance and shifted quantile identities from threshold sets; and supplied the centered (L^2) tail inequality and clip-variance comparison used by the concentration step. The original source-tail formulation and its assumptions are retained. |
| `prop-correct-scale-multivariate-trimming-slab-bound` | Replaced unsupported scalar expectation Cauchy–Schwarz with the second-moment variance identity; made the independent clean half the ghost sample and stated the swapped-half argument; and introduced a countable rational direction class. Its countability input now cites the published rational-density theorem directly. The strict tail-count argument supports the corrected (16\varepsilon Q_0) radius and its probability bound. |
| `ex-polynomial-tail-law-with-finite-variance` | Replaced the unsupported first-moment Cauchy–Schwarz claim with `|x| ≤ 1+x²`. Added an explicit derivation that \(\mathbb R\) with product inner product is a separable real Hilbert space, using the ordered-field, norm, completeness, and rational-density sources. |
| `cex-half-replacement-prevents-covariance-only-mean-recovery` | Corrected the stated admissible replacement range to `1/2 ≤ η ≤ 1`, matching the equal-mixture indistinguishability construction. |
| `ex-one-corrupted-block-is-rejected-by-the-geometric-median` | Added the same explicit real Hilbert/separability derivation required to apply the algorithm to the five real block means. The piecewise objective calculation is correct and gives the unique minimizer (0) for every (M>0). |

The proof-contract file was updated for every material proof/dependency change. Stale derivation mappings from proof-step reindexing were replaced with records extracted from the current numbered proofs. The batch manifest now matches the item dependency lists. No stale `verification.judge` record was present on a changed assigned item, so none required removal.

## Uneditable defects

None found. The opened current-run suppliers in batches 14, 15, and 31 have no defect affecting their assigned consumers. No published dependency defect was found in the inspected claim interfaces. No proposed withdrawal was identified.

## Page verdicts

- `robust-mean-estimation-under-heavy-tails` (A): no remaining defect found after the repairs above. Its summary accurately separates clean finite-variance, univariate replacement, and multivariate trimming results, and records the corrected slab radius and required domains.
- `robust-mean-estimation-under-heavy-tails-examples` (B): no remaining defect found after the example/counterexample repairs above. Its summary accurately distinguishes the polynomial-tail law, five-block calculation, and half-replacement indistinguishability example.

## Validation and blocker

- `reflow` and `precheck` were run for every changed item; all completed successfully. The algorithm precheck reported zero proof-bearing items and no failures.
- `node tools/proof-contract.mjs research/mathematical-statistics-foundations-37-batch-33.proof-contracts.json --strict` passed for all 23 items with zero errors and warnings.
- The final batched proof-layout command passed: 11 changed items, 43 numbered steps, zero layout defects. Its first scan exposed the missing delimiter above; after that repair and the required reflow/precheck rerun, the final scan passed.
- Blocker: none. Coverage note: no pre-rendered bundle existed, so review evidence came from the opened carriers, their relevant dependencies, and the located primary-source passages listed above.
