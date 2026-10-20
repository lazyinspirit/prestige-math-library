# Step 3a reader report — batch 26

Run: `machine-learning-all-101-2026-10-19`  
Role: reader  
Scope: batch `26`

## Opened inventory

Pages:

- `ml02-causal-pc` (A): opened `library/machine-learning/ml02-causal-pc.md`; 15 listed items, no examples, draft status, empty body, `page_layout: compact-v1`.
- `ml02-causal-pc-examples` (B): opened `library/machine-learning/ml02-causal-pc-examples.md`; 3 listed examples, no ordinary items, draft status, empty body, `page_layout: compact-v1`.

The A page's five `requires` pages were located and their frontmatter/status opened: `central-limit-theorems`, `independence-borel-cantelli-and-zero-one-laws`, `markov-kernels-and-markov-chains`, `structural-causal-models-dags-and-adjustment`, and `mixed-effects-and-longitudinal-models`. All are published.

Assigned items, read in batch dependency order:

- A page: `def-causal-discovery-oracle-regime`; `def-cpdag-markov-equivalence-class`; `lem-pc-skeleton-separation`; `lem-covered-edge-reversal-preserves-d-separation`; `lem-chordal-components-admit-both-orientations`; `def-gaussian-partial-correlation`; `lem-pc-separating-set-collider`; `thm-dag-markov-equivalence-skeleton-vstructures`; `alg-pc-causal-discovery`; `def-sample-partial-correlation`; `thm-gaussian-zero-partial-correlation-is-conditional-independence`; `lem-pc-fisher-transform-uniform-concentration`; `lem-meek-rules-complete-for-cpdag`; `thm-pc-oracle-correctness`; `thm-pc-high-dimensional-consistency`.
- B page: `ex-pc-chain-versus-collider-separating-sets`; `ex-pc-latent-confounding-limitations`; `ex-pc-markov-equivalent-dags`.

Direct published suppliers opened to verify these claims included the d-separation and ancestral-moral definitions and lemmas; the recursive SCM, kernel-factorization, faithfulness and conditional-independence interfaces; the choice definitions; the Gaussian, density, characteristic-function and uniqueness items; and the cited kernel-extension, kernel-composition, product-measure, Tonelli, Cholesky, change-of-variables, measurability and determinant results. The assigned batch coverage and proof-contract carriers were read as evidence, not accepted as verdicts.

## Review and page verdicts

**`ml02-causal-pc` — pass.** The frontmatter inventory matches the 15 assigned A items, the five prerequisite page IDs resolve, and there is no body summary. The definitions state the observed-only/faithful/perfect-oracle assumptions explicitly. The skeleton-separation, covered-reversal, chordal-orientation, collider, DAG-equivalence, Gaussian partial-correlation, oracle-correctness and high-dimensional arguments were checked against their stated hypotheses and suppliers. The population procedure's current-neighborhood updates and level stopping rule are explicit; the separate high-dimensional cap is stated in its theorem. The mathematical claims are supported after the repairs below.

**`ml02-causal-pc-examples` — pass.** The frontmatter inventory matches the three assigned examples and there is no body summary. The Gaussian moment/covariance calculations and the two-node observational-equivalence computation check out. All three TikZ diagrams agree with their text: chain versus collider arrows, the latent common-cause/direct-edge models, and the two reverse total orders with their undirected triangle CPDAG are drawn consistently. The proofs do not rely on the diagrams.

## Repairs made

- `items/lem-chordal-components-admit-both-orientations.md`, proof step 4.1: changed the construction to root every tree of the clique forest and concatenate their postorders. A clique forest can be disconnected, so rooting only one tree did not define the claimed perfect-elimination order on every vertex. Meek's Appendix, Lemma 5 (“Orienting chordal graphs,” printed p. 409), explicitly handles disconnected graphs componentwise. Updated this item's step 4.1 derivation and degenerate-boundary evidence in the proof contract.
- `items/thm-pc-oracle-correctness.md`, Statement: clarified that the collider stage orients exactly the unshielded colliders, while R1–R3 closure may orient further compelled edges before returning the CPDAG. The original wording could be read as saying all final directed edges are collider arrows. The proof and algorithm already distinguish those stages. Updated the three in-batch consumer contract quotations (`thm-pc-high-dimensional-consistency`, `ex-pc-chain-versus-collider-separating-sets`, and `ex-pc-latent-confounding-limitations`) to the clarified Statement; focused consumer checks found no further repairs necessary.
- `items/def-gaussian-partial-correlation.md`: added `justified_by: [thm-gaussian-zero-partial-correlation-is-conditional-independence]`; that theorem proves the conditional-covariance block is positive definite, establishing the definition's stated domain for every queried pair and conditioning set.
- `items/def-sample-partial-correlation.md`: added `justified_by: [lem-pc-fisher-transform-uniform-concentration]`. Its theorem proves almost-sure sample-domain validity under the nondegenerate Gaussian sampling assumptions used in the definition.
- `items/lem-pc-fisher-transform-uniform-concentration.md`, proof step 1.1: made explicit that full rank of the residual pair together with the intercept/conditioning design gives a positive-definite centered sample covariance block. Updated the corresponding contract derivation.
- Corrected source locators in `def-gaussian-partial-correlation` and `thm-gaussian-zero-partial-correlation-is-conditional-independence` from Lauritzen §2.6 to §4.1.3, Proposition 4.2 (printed pp. 97–98). Lauritzen's §2.6 is the DAG Markov-equivalence section; Proposition 4.2 in §4.1.3 gives the Gaussian conditional-independence criterion, with the partial-correlation formula immediately following it.
- Corrected `lem-pc-fisher-transform-uniform-concentration` from Kalisch–Bühlmann Appendix A.2.3 to Appendix A.2.1, Lemma 3 (printed p. 631), which states the Fisher-transform concentration bound. Appendix A.2.3 is the proof of their CPDAG-consistency Theorem 2. Corrected its Lauritzen background locator to §4.1.3, Proposition 4.2.
- Corrected `lem-covered-edge-reversal-preserves-d-separation`'s Meek reference from “Appendix” to §1.1, Theorem 1, the exact Markov-equivalence characterization relevant to the result; Lauritzen Lemma 2.59 (printed p. 70) is the direct covered-edge-reversal reference.

No stale `verification.judge` record was present on any changed item. The strict proof-contract check initially found three stale quotations downstream of the clarified oracle Statement; all three were updated, after which the strict check passed.

## Defects not editable in this dispatch

The following published dependencies have wikilinks inside a complete `Definition` or `Statement` section. The statement-first rule requires moving every such link to the immediately following matching references section, with one source per line and blank lines between references. These published carriers are outside batch 26's edit scope; the structured findings route them to the owner.

| Published item | Exact location | Finding |
|---|---|---|
| `def-choice-function` | `## Definition`, both paragraphs | Wikilinks to `def-function`, `def-power-set` and `def-set-difference-and-symmetric-difference` interrupt the definition. |
| `def-axiom-of-choice` | `## Definition`, opening formulation | The definition's quoted choice-function formulation contains a wikilink to `def-choice-function`. |
| `def-independent-random-elements` | `## Definition`, both paragraphs | The definition contains wikilinks to `def-independent-sigma-algebras-and-events` and `def-sigma-algebra-generated-by-a-function`. |
| `def-product-sigma-algebra-and-finite-product-sigma-algebras` | `## Definition`, first paragraph | The product-sigma-algebra definition contains a wikilink to `def-measurable-rectangle`. |
| `def-measure-kernel-and-probability-kernel` | `## Definition`, first paragraph | The kernel definition contains wikilinks to `def-measure` and `def-measurable-function-between-measurable-spaces`. |
| `def-standard-normal-and-normal-laws` | `## Definition` | The construction embeds links to the normal-density, integral-measure, random-law and Dirac-measure suppliers in the definition. |
| `def-composition-of-probability-kernels` | `## Definition`, explanatory paragraph | The definition contains wikilinks to the kernel convention, the integration-measurability theorem and the composition lemma. |
| `def-conditional-expectation-given-a-sigma-algebra` | `## Definition`, second paragraph | The definition embeds links to the expectation and $L^1$ interfaces. |
| `thm-dag-factorization-implies-d-separation-conditional-independence` | `## Statement`, final sentence | The theorem statement ends with a wikilink to `def-faithfulness-of-a-dag-model`. |
| `thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets` | `## Statement`, first sentence | The theorem statement embeds a wikilink to `def-countable-choice`. |
| `thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions` | `## Statement`, first sentence | The theorem statement embeds a wikilink to `def-countable-choice`. |
| `def-countable-choice` | `## Definition`, equivalence paragraph | The definition embeds wikilinks to `def-choice-function` and `def-countable`. |
| `def-dependent-choice` | `## Definition`, axiom and explanatory paragraphs | The definition embeds multiple supplier wikilinks, including `def-function`, `def-natural-numbers`, and the choice definitions. |

## Source checks

- Kalisch and Bühlmann, “Estimating High-Dimensional Directed Acyclic Graphs with the PC-Algorithm,” *JMLR* 8 (2007) ([full article PDF](https://www.jmlr.org/papers/volume8/kalisch07a/kalisch07a.pdf)): §§2.1–2.3, printed pp. 614–619; assumptions A1–A4 and Theorems 1–2, pp. 619–620; Appendix A.2.1, Lemma 3, printed p. 631; Appendix A.2.3, printed p. 634. These state the adjacency/separator criterion, population search, collider and orientation stages, Gaussian Fisher test, assumptions and consistency conclusions.
- Meek, “Causal Inference and Causal Explanation with Background Knowledge,” UAI 1995 ([complete author-hosted paper](https://arxiv.org/pdf/1302.4972)): §1.1, Theorem 1, printed p. 405; §2.1, printed p. 406; Appendix Theorems 2–3 and Lemma 5, printed pp. 408–409. Theorem 3 states R1–R3 orientation completeness; Lemma 5 treats edge orientations in chordal graphs, including disconnected graphs componentwise.
- Lauritzen, *Graphical Models* lecture notes ([full PDF](https://web.math.ku.dk/~lauritzen/papers/gmnotes.pdf)): §2.5.4, printed pp. 54–57, ancestral moral separation; §2.6, printed pp. 69–72, adjacency/separator, covered reversal and skeleton/unshielded-collider equivalence; §4.1.3, Proposition 4.2 and the partial-correlation formula, printed pp. 97–98.

## Validation and blocker

- `reflow`: unchanged for all seven changed item paths.
- `precheck`: pass for all five proof-bearing changed items; the two definition items are not applicable and reported zero proof failures.
- Strict proof-contract check: 18/18 items, 0 errors and 0 warnings after the three consumer quotations were updated.
- `proof-layout`: 7 changed items, 26 numbered proof steps, 0 defects.
- No blocker within batch 26. The final live status snapshot at `2026-10-19T11:52:06.520Z` shows `3a-read` at 35/101 with batch 26 still uncovered and no active blocker. An earlier snapshot had reported an unrelated `split-8 failed 3x` blocker; it was cleared by the final status.
- No separate rendered evidence bundle was present in the task artifacts. Direct suppliers and the source passages needed for this review were opened; the full transitive proof foundation beneath published suppliers was not re-audited.
