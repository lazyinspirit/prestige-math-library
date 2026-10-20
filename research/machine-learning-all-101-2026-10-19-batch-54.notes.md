# Batch 54 — authoring and evidence record

Run: `machine-learning-all-101-2026-10-19`  
Pair: `compression-generalization-for-trained-networks`  
Batch dependency level: 2; prerequisite batches: 3, 31  
Dispatch scheduling input: `2dda02423f09c7e4d5cf88dcf014aad727951156d45fddc2d1f5d2c41992694c`

## Plan reconciliation

- The generated task points to `research/plan-machine-learning-track.md` line 396. The current `ML-49` heading is at line 408 (scope begins at line 410); the current complete section and `plan-spec.json` entry were inspected. The locator is stale, but their controlling mathematical content agrees.
- Both current sources prescribe `def-margin-preserving-compression`, `thm-finite-description-compression-bound`, and `ex-compressed-classifier-vs-original-predictor`, including the corrected `2 epsilon` margin threshold, the compressed-classifier-only conclusion, and the fixed-helper-string condition.
- The prose design names ML-01 in its `Requires` sentence. The assigned page and canonical plan-spec declare the direct page requirements `feedforward-networks-and-universal-approximation` and `finite-class-pac-learning-and-erm`; the latter page itself requires prediction-problems-and-risk. The A page keeps the two declared direct page edges and item-level risk definitions link to their actual ML-01 suppliers. No extra page edge is added.
- The ML-30 interface is used only to define the explicit feedforward network in the B example. The universal-approximation theorem is not used as a premise or claim.

## Scaffold inventory and item order

The scaffold manifest now records the following logical items before carrier authoring:

| Item | Claim | Direct dependencies | Item level |
|---|---|---|---:|
| `def-margin-preserving-compression` | Fixed-helper finite codebook, sample-dependent compressor, score distortion, multiclass margin, and empirical margin loss | `def-supervised-learning-problem`; `def-population-and-empirical-risk`; `thm-arithmetic-and-lattice-operations-preserve-measurability` | 2 |
| `thm-finite-description-compression-bound` | A one-sided unit-range MGF/Markov tail, finite codebook union bound, and coordinatewise score-to-margin implication give the corrected compressed-risk bound | See the exact direct-dependency list in `batch-54.pages.json`; it includes the MGF, independence/factorization, Markov, product-measurability, expectation, exponential/logarithm, and local compression suppliers | 3 |
| `ex-compressed-classifier-vs-original-predictor` | Explicit two-point ReLU example with identical training scores and different off-sample predictions and population risks | `def-margin-preserving-compression`; `thm-finite-description-compression-bound`; `def-feedforward-neural-network` | 4 |

The direct same-run item chain is definition -> theorem -> example. The assigned batch page requirements remain unchanged; the run-level batch dependency artifact currently reports batch 54 at level 2 with suppliers 3 and 31.

## Completed item: `def-margin-preserving-compression`

The A-page definition fixes a finite multiclass label set, least-index tie-breaking, the true-label score margin, empirical margin loss, a sample-independent helper/codebook/decoder, and a measurable sample-dependent compressor. It states coordinatewise distortion on observed points and proves measurability of the classifier, margin, and zero-one risk event. The theorem separately proves the strict `2 epsilon` margin implication. Direct dependencies include the supervised-learning and risk definitions, product sigma-algebras, measurable maps, arithmetic/lattice measurability, and the measurable-space convention. The source references are Arora et al. §2 Definitions 1–2 and Shalev-Shwartz–Ben-David Chapter 4 §4.2. Full-text stamping passed (3/4 fetch-stamped; 4/4 resolved, one documented unusable-locator drop). The definition is at item level 2, on the A page; its verification, proof contract, and scoped checks are complete.

## Supplier inspection and current readiness

- Read the complete actual definitions in `items/def-supervised-learning-problem.md`, `items/def-population-and-empirical-risk.md`, and `items/def-identically-distributed-and-iid-random-variables.md`, plus the well-definedness proof `items/lem-population-and-empirical-risk-are-measurable.md`. The definition suppliers specify measurable instance/label spaces, a probability law, measurable predictors/loss, risk as the nonnegative integral/sample average, and mutual independence with a common law.
- Read the complete actual `items/def-feedforward-neural-network.md` definition. It specifies finite DAG evaluation and layered MLPs with identity output vertices; the B example uses only this interface.
- The latest ordinary full-run Step-1 snapshot marks all items on the three required in-run supplier pages current-ready: finite-class page 4/4, feedforward page 16/16, and prediction/risk page 9/9. The exact interface used by the example is the actual `def-feedforward-neural-network` body. The local theorem does not rely on a proof-only excerpt from `thm-finite-class-uniform-deviation`; it derives the one-sided tail from the published bounded-variable Hoeffding MGF statement and finite-product factorization.
- The full bodies/proofs of the MGF supplier, measurable-independence lemma, finite-product expectation factorization, Markov corollary, exponential laws, law/change-of-variables results, continuous-function suppliers, and indicator-expectation corollary were inspected for their stated hypotheses and uses. The finite MGF/Markov derivation is explicit in the theorem and uses no choice principle. The Axiom-of-Choice-dependent `thm-hoeffding-independent-bounded-sums` is not used.
- The current-required page edges are verified in the cross-batch record. The example uses only the network-definition interface and makes no universal-approximation claim.

## Source inspection

- Arora, Ge, Neyshabur, and Zhang, *Stronger Generalization Bounds for Deep Nets via a Compression Approach*, PMLR 80 (2018), §2 Definitions 1–2, Theorem 2.1, and Remarks 1–4: `https://proceedings.mlr.press/v80/arora18b/arora18b.pdf`.
- Arora et al., supplementary material, complete Appendix A.1 proof of Theorem 2.1: `https://proceedings.mlr.press/v80/arora18b/arora18b-supp.pdf`.
- Shalev-Shwartz and Ben-David, *Understanding Machine Learning: From Theory to Algorithms*, Chapter 4 §4.2, Lemma 4.5 and Corollary 4.6, complete section: `https://www.inf.u-szeged.hu/~turan/ML-Konyv.pdf`.

The primary source's Appendix A.1 says coordinatewise error `epsilon` preserves labels whenever the original margin is at least `epsilon`; this misses a factor of two. The local proof establishes preservation only for margin strictly greater than `2 epsilon`, so the margin-loss term is `Lhat_(2 epsilon)`. The primary source also explicitly bounds the compressed predictor, not the original network absent a separate all-domain loss-preservation argument. The independent textbook's finite-class proof is two-sided and has its own factor-2 tail prefactor. The theorem instead derives the sharper one-sided constant directly from the published bounded-variable Hoeffding MGF, finite-product factorization, and Markov's inequality.

The first `source-fetch-check --stamp` verified the PMLR main paper and supplement but exhausted six attempts on the author-hosted book URL, each returning only 195 characters of HTML. A web search located the same complete 449-page book at the U-Szeged URL above; its full Chapter 4 §4.2 was inspected, and the exact existing full-text stamp was reused from batch 3 (`bytes=2601519`, `sha256_16=c446eabd9212e983`, 449 pages, fetched 2026-10-18T18:54:23.329Z). `source_resolution` records the six failed attempts, search, per-item arguments/dependencies, and certain drop of the unusable URL only; the book result itself remains included via the alternate copy. Final `source-fetch-check --stamp` passed: 3/4 fetch-stamped and 4/4 resolved, with one documented dropped locator and zero new stamps. Both batch-54 coverage files are byte-identical and contain that stamped evidence.

## Completed item: `thm-finite-description-compression-bound`

The theorem assumes a measurable compressor that succeeds for $P^m$-almost every IID sample, with its helper and finite codebook fixed independently of the sample. Its conclusion bounds only the selected decoded classifier. Proof step 1.1 makes the probability events and selected risk maps measurable; step 1.2 proves the strict `2 epsilon` score-to-margin implication. Steps 2.1 and 3.1 justify and compute the fixed-code MGF; step 4.1 applies Markov to obtain the one-sided tail. Step 5.1 applies the finite union bound and log algebra over at most `r^q` codes. Step 6.1 combines the uniform event with the almost-sure compression set and the margin-loss bound. All hypotheses, code count, Borel measurability, logarithm algebra, and null-set handling are explicit; no choice axiom enters. The proof contract contains exact excerpts for every fact and maps all seven actual steps. The source statement/appendix margin defect and the book's different two-sided constant are recorded above. The item is authored at level 3.

## Completed item: `ex-compressed-classifier-vs-original-predictor`

The B-page example gives two explicit one-hidden-layer ReLU score maps on a two-point space. They agree exactly on the observed one-point sample, but disagree at the other input and have risks 0 and 1/2. It defines the training map as constant and the selector as constant, then shows the one-code, `q=1`, `r=1` compressor fails the theorem's almost-sure hypothesis on the alternative sample. This finite witness is not a counterexample to the probability bound. Its direct dependencies are the local compression definition, the theorem's compressed-classifier scope, and the current-ready feedforward-network definition. The A and B page carriers remain frontmatter-only with no summary body; the engine has not yet stamped `page_layout`.

## Final validation and unresolved run-wide blockers

- Scoped `author-check` passed: precheck 3/3, rendercheck 5 files, content policy 3 items with zero errors/warnings, and strict proof contract 3/3 with zero errors/warnings. Explicit `proof-layout` passed for all 3 changed items, covering 12 steps with zero defects. `manifest-deps` passed with zero missing dependencies and zero errors.
- Scoped item dependency recomputation over batches 2, 3, 31, and 54 passed with levels `def-margin-preserving-compression` 2, theorem 3, and example 4. The batch-54 batch level remains 2 with prerequisite batches 3 and 31.
- Full-run batch dependency checking is blocked by malformed YAML in the unrelated item `items/ex-matched-observation-mrps-have-distinct-bellman-errors.md:24`: its double-quoted locator contains unescaped `\gamma`, reported as an invalid `\g` escape. No change was made outside batch 54.
- The latest full-run item dependency check reports 40 empty scaffold inventories in other batches. The scoped batch-54 item graph is clean.
- Ordinary full-run Step-1 readiness for each required in-run supplier page was current-ready at the final snapshot: finite-class 4/4, feedforward 16/16, prediction/risk 9/9. These item and page interfaces are also recorded in `dependency-inputs.json` and `cross-batch-dependencies.json`.
- Ordinary Step-1 records were written with no owner override: `def-margin-preserving-compression`, `thm-finite-description-compression-bound`, and `ex-compressed-classifier-vs-original-predictor` are each `ready`, with current hashes over their declared direct dependencies.
- The live autopilot remains at `1-scaffold` with 66/101 pairs covered and no unit running. Its held blocker is owner reconciliation of artifact-incomplete units 15, 28, 31, and 46 (`stage-stalemate`); batch 54 is ready locally, while unit-level and batch-level run checks remain owned by the build workflow.

These records mean authoring readiness only; independent workflow review and approval remain open. The run-wide blockers above remain outside this pair's write boundary.
