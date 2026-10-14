# Batch 31 handoff — Contamination and Robust Risk

Run: `mathematical-statistics-foundations-37`  
Role: beta · batch: 31 · pair dependency level: 4  
Assigned pages: `contamination-models-and-robust-risk` (A, order 1904) and `contamination-models-and-robust-risk-examples` (B, order 1905)

## Controlling plan and evidence comparison

The assigned pair IDs, title, category, order, companion, and page prerequisites in `plan-spec.json` agree with MSF-30. The plan-spec `items: []` arrays were placeholders; the authored inventory is in the batch manifest. The dispatch names page prerequisites MSF-03 and MSF-21 (batches 3 and 17).

MSF-30 keeps the gross-error path, iid Huber mixture, and post-sampling replacement models distinct; defines the TV modulus with the event-supremum convention; and calls for a **tail-probability** lower bound, separate from expected minimax risk. Its proof route is equalize two TV-close Huber mixtures, then apply a two-point argument. The local work proves the density construction, exact contamination-fraction inflation, and common-law tail step rather than treating the source’s final “standard Le Cam” reference as a proof. It also handles a nonattained modulus supremum and the infinite-modulus case.

The older F06 dossier’s Pair 0 proposed placing general risk/minimax foundations and a contamination-modulus theorem together, with expected minimax-risk terminology. The controlling 37-pair plan places risk in MSF-03, general minimax lower bounds in MSF-21, and this tail-risk result in MSF-30; that later placement controls. The older proposal is recorded as historical, not as an alternate inventory.

The owner’s E11 resolution was added during this batch. The **current** MSF-30 row now uses MSF-03’s target-first convention, requires the pairwise loss-separation hypothesis, and gives the probability constant `min(c0,1/2)`. The current row matches the theorem’s main conclusion. The row currently contains the resolution’s proposed correction, although the resolution JSON still says `content-resolved-owner-plan-application-pending`; that status and the row text are inconsistent. The shared plan and plan-spec were not edited by this batch.

The theorem also records why the universal-constant form needs care: the clean premise allows arbitrary `c0`, so the clean branch yields only `min(c0,1/2)`. A fixed universal probability constant follows when `c0` has a fixed positive lower bound. The theorem keeps the general `min(c0,1/2)` conclusion and states that corollary explicitly.

The E11 resolution supplies a three-point counterexample showing why generic loss separation is necessary: identical data laws and a large off-diagonal loss can coexist with a third action of bounded loss, so the modulus can be arbitrarily large while a constant action has zero tail risk above that bound. The current plan and theorem include the separation hypothesis.

## Item inventory, direct dependencies, and levels

Levels were recomputed from the run manifests. The assigned 12 labels match the computed levels; levels count in-run suppliers, while each item also declares all directly used suppliers.

### A page

- `lem-convex-mixture-of-probability-laws` — L0; deps: `def-probability-measure`.
- `lem-common-law-forces-two-point-tail-loss-bound` — L0; deps: `def-probability-measure`, `def-measurable-space`.
- `def-gross-error-path` — L1; deps: `def-probability-measure`, `lem-convex-mixture-of-probability-laws`, `def-dirac-measure`, `prop-dirac-measure-is-a-probability-measure`.
- `def-huber-contamination-model` — L1; deps: `def-statistical-experiment`, `def-probability-measure`, `def-identically-distributed-and-iid-random-variables`, `lem-convex-mixture-of-probability-laws`.
- `def-adversarial-sample-replacement` — L1; deps: `def-statistical-experiment`, `def-identically-distributed-and-iid-random-variables`, `def-random-element-and-real-random-variable`, `def-product-sigma-algebra-and-finite-product-sigma-algebras`.
- `lem-huber-contamination-mixtures-can-be-equalized-under-tv-threshold` — L2; deps: `def-probability-measure`, `def-huber-contamination-model`, `def-total-variation-distance-for-probability-laws`, `def-axiom-of-choice`, `def-radon-nikodym-derivative`, `lem-radon-nikodym-density-of-a-finite-positive-measure-has-a-nonnegative-representative`, `thm-linearity-of-the-lebesgue-integral-on-l-one`, `prop-order-and-scalar-rules-for-the-nonnegative-integral`, `def-extended-real-valued-measurable-function`, `thm-indefinite-integral-of-a-nonnegative-function-is-a-measure`, `prop-closure-properties-of-measurable-functions-used-by-the-integral`, `lem-convex-mixture-of-probability-laws`.
- `def-contamination-robust-risk` — L4; deps: `def-statistical-experiment`, `def-loss-function-and-risk`, `def-expectation-of-a-nonnegative-or-integrable-random-variable`, `def-measurable-space`, `def-huber-contamination-model`, `def-adversarial-sample-replacement`, `def-gross-error-path`, `def-product-sigma-algebra-and-finite-product-sigma-algebras`, `def-product-measure-on-sigma-finite-spaces`, `thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique`.
- `def-contamination-modulus` — L4; deps: `def-statistical-experiment`, `def-loss-function-and-risk`, `def-measurable-space`, `def-total-variation-distance-for-probability-laws`.
- `thm-huber-contamination-modulus-lower-bound` — L5; deps: `def-axiom-of-choice`, `def-loss-function-and-risk`, `def-measurable-space`, `def-product-sigma-algebra-and-finite-product-sigma-algebras`, `def-product-measure-on-sigma-finite-spaces`, `thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique`, `def-huber-contamination-model`, `def-contamination-robust-risk`, `def-contamination-modulus`, `lem-huber-contamination-mixtures-can-be-equalized-under-tv-threshold`, `lem-common-law-forces-two-point-tail-loss-bound`.

### B page

- `ex-mean-gross-error-path-has-unbounded-sensitivity` — L2; deps: `def-gross-error-path`, `def-dirac-measure`, `prop-dirac-measure-is-a-probability-measure`, `def-borel-sigma-algebra`, `cor-expectation-agrees-with-the-finite-weighted-sum`.
- `ex-bounded-sample-mean-under-replacement` — L2; deps: `def-adversarial-sample-replacement`, `def-huber-contamination-model`, `def-identically-distributed-and-iid-random-variables`, `def-statistical-experiment`, `def-measurable-space`, `def-dirac-measure`, `prop-dirac-measure-is-a-probability-measure`.
- `ex-bernoulli-huber-modulus-and-identical-mixtures` — L5; deps: `def-huber-contamination-model`, `def-contamination-modulus`, `def-total-variation-distance-for-probability-laws`, `def-dirac-measure`, `prop-dirac-measure-is-a-probability-measure`, `lem-convex-mixture-of-probability-laws`, `def-measurable-space`, `def-borel-sigma-algebra`.

The proof carriers state `verification.precheck: pass` after the final precheck. The equalization proof explicitly uses AC through its RN-density supplier. The product-law equality in the main theorem cites finite-product measure existence and uniqueness. The common-law lemma permits extended-nonnegative losses, which is needed for the infinite-modulus branch.

## Supplier review and cross-batch inputs

The batch dependency input currently has 11 external run edges: six `verified` and five `interface-compatible-review-pending`. The latter are the MSF-03 and MSF-21 page edges, plus the three consumer-item edges to `def-loss-function-and-risk`. The owner resolution says the current target-first interfaces and separation clause are compatible; ordinary independent supplier review remains pending.

- `def-loss-function-and-risk` exists and has a hash-valid Step-1 `ready` record. Its body is target-first `L(theta, action)`, has measurable action sections, defines randomized-kernel expected risk, and includes deterministic rules as point-mass kernels. The current plan row now agrees on orientation. This definition gives expected risk; batch 31 defines tail risk separately.
- `thm-two-point-le-cam-risk-bound` now exists in batch 17 and has a Step-1 `ready` record (record inspected; current run-wide hash validation is blocked by the duplicate batch-30 manifest item below). Its actual statement/proof are for randomized scalar estimators and squared-error **expected** risk. It does not itself prove a generic tail-probability result. The page prerequisite is retained and its edge is review-pending; the local `lem-common-law-forces-two-point-tail-loss-bound` supplies the event-level tail argument used here.
- `def-statistical-experiment` and the batch-4 nonnegative RN-density lemma have hash-valid Step-1 `ready` records; their exact bodies/proofs and hypotheses were inspected.
- Verified item edges are `def-huber-contamination-model` → `def-statistical-experiment`, `def-adversarial-sample-replacement` → `def-statistical-experiment`, `def-contamination-modulus` → `def-statistical-experiment`, `def-contamination-robust-risk` → `def-statistical-experiment`, `ex-bounded-sample-mean-under-replacement` → `def-statistical-experiment`, and the equalization lemma → the batch-4 RN-density lemma.

The four batch 31 Step-1 escalations were recorded before the owner correction and were **not overwritten**: `def-contamination-robust-risk`, `def-contamination-modulus`, `thm-huber-contamination-modulus-lower-bound`, and `ex-bernoulli-huber-modulus-and-identical-mixtures`. Eight other records are `ready`. The current cross-batch review is still marked review-pending, and the resolution says independent supplier review remains pending, so these historical escalations are preserved for owner recertification. No `--owner` decision was used.

## Source reading and disposition

The A page has three independent full-text treatments, including two full lecture-note sources. The rough-draft Stark chapter was used only for definitions/orientation, never as proof approval. `coverage.json` records exact locators, all 16 harvested results, supported item IDs, per-result dispositions, and source fetch stamps: 9 included, 6 inline, and 1 already published. No source was dropped and no retrieval failure required a `source_resolution` entry.

| Source | Read locator and use | Full-text stamp |
|---|---|---|
| Chen, Gao & Ren, [Robust Covariance and Scatter Matrix Estimation under Huber’s Contamination Model](https://arxiv.org/pdf/1506.00691) | §1 Huber law; §5 equation (12) and Theorem 5.1, PDF p.16; complete proof in Appendix E, pp.45–46. Supports Huber model, convex mixture, robust risk, modulus, equalization proof, and local tail theorem. | PDF, 53 pp., 782,543 bytes, SHA-256 prefix `0765aa45a423bf46`. |
| Philippe Rigollet, [18.S997 High-Dimensional Statistics lecture notes](https://ocw.mit.edu/courses/18-s997-high-dimensional-statistics-spring-2015/619e4ae252f1b26cbe0f7a29d5932978_MIT18_S997S15_CourseNotes.pdf) | Ch.5 §5.3, Neyman–Pearson Lemma 5.3 and TV discussion, PDF pp.112–114; lemma/proof read in full. Supports the local common-law event argument and TV convention. | PDF, 131 pp., 1,177,319 bytes, SHA-256 prefix `4bde3259229af46e`. |
| P. B. Stark, [Statistics 240 Lecture Notes, Part 9](https://www.stat.berkeley.edu/~stark/Teach/S240/Notes/ch9.pdf) | §1.2 gross-error/replacement, pp.10–12; §1.3.4 mean example, pp.17–18. The source labels the chapter rough draft; use is limited to model orientation, while the examples are proved locally. | PDF, 42 pp., 290,976 bytes, SHA-256 prefix `230b0a385105fd3b`. |

`source-fetch-check --stamp` had already stamped all three sources (0 newly stamped on the final check); final check verified 3/3, 0 drops. The coverage checklist reports 1 page, 16 harvested results, 0 errors, 0 warnings.

## Final scoped checks

- `node tools/tsx-run.mjs tools/author-check.mts mathematical-statistics-foundations-37 31` — pass; 12 items and both page carriers, with precheck, rendercheck, content policy and strict contracts.
- Explicit precheck — 7/7 proof-bearing items pass.
- `node tools/proof-layout.mjs` on the 12 assigned items — 12 items, 28 proof steps, 0 defects.
- Strict proof-contract check — 12/12 items, 0 errors, 0 warnings.
- Scoped depcheck — 0 errors, 0 warnings; dependency closure covered 447 items and 170 prerequisite pages.
- Batch 31 item-level dependency projection — all 12 declared levels match computed levels; no batch 31 level errors. The batch 31 cross-batch key audit finds 11 expected external edges, with no missing or extra review rows.
- Whole-run item-level dependency check still fails outside this batch. Current exact findings: duplicate `lem-finite-dimensional-functional-convolution-bound` in batch 30; level mismatches for `thm-z-estimator-consistency`, `def-dqm-submodel-through-a-law`, `thm-dqm-score-mean-zero`, `def-tangent-set`, `def-tangent-space`, `thm-tangent-space-is-closed-linear-subspace`, `def-nuisance-tangent-space`, `def-nuisance-tangent-orthogonal-complement`, `ex-bounded-scores-generate-unrestricted-tangent-space`, `ex-regular-bernoulli-submodel-dqm-score`, `ex-boundary-score-cone-and-linear-tangent-space`, `lem-adaptive-covariance-lepski-scale-reduction`, `lem-huber-covariance-ambient-action-tail-lower-bound`, `lem-matrix-variance-intrinsic-dimension-at-least-one`, `thm-heavy-tailed-covariance-bound`, `lem-huber-matrix-depth-estimator-operator-error`, `ex-block-sparse-huber-covariance-model`, and `ex-dense-huber-covariance-model`. No other batch was edited.
- The most recent Step-1 hash recheck is blocked because `loadStep3` rejects the duplicate batch-30 manifest entry above. Before that duplicate appeared, the scoped check validated eight current ready hashes and found the four preserved escalations. The eight ready items did not change afterward; no hash validation is claimed for the current run snapshot while the duplicate remains.

The dispatch supplied scheduling hash `dd05d82b8e5bf49626aa96d504293f4afc76b61792a92c3d8eaa81be00ba597c`; the current shared batch dependency artifact has `input_sha256` `6e1c86944ecd4ef6db1a3278746ff762bf62c176309acd6c8da4e73df54b6f80`. Its batch 31 row remains level 4 and lists prerequisite batches 1, 3, 4, and 17 (the item-level inputs include batches 1 and 4; the dispatch’s page prerequisites are 3 and 17). The shared schedule was not edited.
