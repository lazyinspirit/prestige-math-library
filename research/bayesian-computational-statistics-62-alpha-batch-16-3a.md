# Step 3a adjudication — batch 16

Run: `bayesian-computational-statistics-62`; group: `batch-16`.

The authoritative scope owes two touched-carrier decisions, no reader/refuter findings and no page decisions. The reader report and empty findings were read; the refuter report is also empty but discloses truncated first-group reading. This review does not rely on that partial evidence as certification.

## Completed level-0 review

The six HIGH/CRITICAL level-0 items were independently reviewed against their actual dependency statements; their complete item-specific risk dispositions are recorded in the batch-16 proof contract. The likelihood comparisons have the correct directional KL and counting-measure normalizations; Gaussian MGFs cover both signs and the zero linear statistic; the independent denominator proof uses the support-sensitive ratio expectation at most one; the nondegenerate projection forces logarithmic small-ball cost.

`lem-independent-posterior-splitting-from-tests-and-sieve-tail`: accept the reader repair. The exact historical carrier is `research/bayesian-computational-statistics-62-owner-step2-gate1-13-16-before/lem-independent-posterior-splitting-from-tests-and-sieve-tail.md`; its raw SHA256 equals the immutable pre-reader snapshot (0020e0dd50c9b1bcab007ea5c9f39e424aa4bf4a6b77421e254f88dfaf328b73). Current source matches reader-post bb7a7a6eab7805ff6fe4df57d81ab8c2cf59fbc4fb1f8b3704bd5bbb8ad9a72b exactly. The two added boundary justifications are sound: E D_n≤1 proves finiteness almost surely, while arbitrary mass values in [0,1] on D_n=0 remain inside the vanishing denominator-failure event. The numerator split and Markov bound retain positive exponent margins. Statement and dependencies are unchanged; this is a nonfatal proof omission fully repaired by the reader, with confidence 1.

Source sections checked so far: van der Vaart–van Zanten, [2008 GP rates](https://arxiv.org/pdf/0806.3024), equation (1.2), §3.2 Lemma 3.2 and its proof (PDF pp. 9–11); Ghosal–van der Vaart, [non-IID rates](https://arxiv.org/pdf/0708.0491), §8 Lemma 10 and posterior numerator-splitting proof (PDF pp. 30–31). Source statements do not substitute for the local proofs. The pointwise calculations were checked independently.

## Completed level-1 review

`lem-fixed-design-gaussian-regression-exponential-tests`: accept the reader repair, confidence 1. Its historical carrier in the same `owner-step2-gate1-13-16-before` directory matches the pre-reader SHA256 5658e564ef710e5de19c8c828f1d156a02a89c5f97e1fe25905a2f90b4e2c9cb. The current source equals reader-post ebf3aac6dd4d5bfd3742d0ec372e90d0d0422a11b88b23a0bab9800d53d58db9. The selected set can be empty (for instance a sieve consisting only of the true mean); defining its maximum as zero completes the test construction. Every mean-separated alternative forces a retained center, and residual-energy tests cover the scale alternatives. Constants are absorbed by choosing M with strict exponent margins. The original omission is nonfatal; no statement or dependency changed.

The log-Gaussian comparison and spiky-scale counterexample risk reviews are complete. The former has correct finite-normalizer and root-L2 conventions. For the latter, the factorial scales dominate the likelihood exponent on the stated high-probability subsequence; the target ball has posterior mass tending to zero. The counterexample is sound even though the source article states a broader fixed-design rate. The local corrected theorem must therefore be checked with its actual qualifications.

## Completed theorem review

The theorem’s current twelve-step proof was reviewed with its actual Batch-11 and Batch-15 suppliers. The IID denominator and same-metric testing proofs are complete. The concentration definition uses the full squared RKHS penalty; the current sieve proof matches it and proves the local mass, entropy and tail bounds. Its expansion chain has local proofs, including the finite-dimensional semigroup calculation and finite-ball approximation. No old claim that these suppliers were unfinished was used as evidence of a current defect.

The log-density branch uses root-L2 Hellinger distance and valid measurable normalizers. The binary branch uses uniformly bounded Bernoulli joint densities and the exact sqrt(2) conversion to link distance. Fixed design uses its independent-observation denominator and separate Gaussian mean/scale tests. The logarithmic floor absorbs scale-local mass, including truth at a scale endpoint. Nondegenerate directions imply rho_n=O(epsilon_n). For W=0, the sharper alternative separately uses the stated local upper density bound; its likelihood integral argument is sound. Expectation limits follow from bounded posterior tails. No theorem repair is needed.

Source comparison: [Chafaï–Lehec notes](https://djalil.chafai.net/docs/M2/chafai-lehec-m2-lsie-lecture-notes.pdf), Chapter 4, Theorem 4.6 and complete semigroup proof, PDF pp. 48–50, confirms the nonpositive Hessian numerator used in the finite-dimensional supplier; that supplier also proves its own cutoff and neighborhood passage. [Borell (1975)](https://dornsife.usc.edu/sergey-lototsky/wp-content/uploads/sites/211/2023/06/Borell-Subspace-original.pdf), §3 Theorem 3.1 and two-step proof, printed pp. 208–210, gives the sharp expansion and cylinder/compact reduction. The current Banach supplier explicitly handles compactness, measurability and endpoint probabilities. These current suppliers were read; no independent audit of every transitive published foundation is claimed.

## Completed logistic example review

`ex-binary-regression-logistic-intercept-gp` verifies all hypotheses of the current binary branch: the one-point L² space is R, Gaussian support and joint evaluation are explicit, the link has L≤1/4 and R=1, and the true response is 1/2. The scalar small-ball lower bound gives concentration cost at most half of log n minus half of log log n plus a constant, below n epsilon_n²=log n eventually. Its three verification steps are sound. All eleven required HIGH/CRITICAL risk reviews are complete in `research/bayesian-computational-statistics-62-batch-16.proof-contracts.json`.

## Decisions and defect closure

Exactly the two owed decisions are in `research/bayesian-computational-statistics-62-alpha-batch-16-3a-decisions.json`, group `batch-16`, in supplier-first order. Both have verdict `accepted_repair` and `repair_confidence: 1`. They reference the closed nonfatal rows:

- `bayesian-computational-statistics-62-3a-batch-16-posterior-evidence-boundary` — posterior-splitting proof steps 1.1 and 2.1.
- `bayesian-computational-statistics-62-3a-batch-16-empty-selected-test-family` — fixed-design testing proof step 3.1.

The rows were appended through `tools/defect-ledger.mjs append`, which serialized the append and regenerated the ledger view. They are owned at `caught_at_stage: 3a-adjudicate`. Neither is a mechanical check failure. There are no reader/refuter findings to decide, and no page decision is owed.

The historical preimages were fully available and matched both pre-reader hashes; no historical uncertainty or owner current-content exception is needed. Every risk-reviewed item’s current raw source equals its immutable reader-post item hash. The only batch contract changes made here are the eleven item-specific risk reviews. No source item, definition, statement, page, provenance or judge record was edited by this adjudication. Thus no statement-change consumer repair or judge invalidation arose.

## Prerequisites and external dispositions

The current direct dependency interfaces were read, including the directional KL, root-L2 Hellinger, normal-law/moment, elementary calculus, independence, density, Tonelli, Jensen, variance, Chebyshev and Markov statements. The mathematical prerequisites actually used in the authored arguments were checked; citations are not treated as substitute proofs. For the posterior-splitting lemma, its assumptions force A≥0: if A<0, E D_n≤1 and Markov imply P(D_n≥exp(-A n epsilon_n²))≤exp(A n epsilon_n²)→0, contradicting the assumed lower-tail condition. Therefore T>A forces T>0, as needed for its null-test term. No extra hypothesis or edit is needed.

The owned cross-batch input `research/bayesian-computational-statistics-62-batch-16.cross-batch-dependencies.json` now records the eleven reviewed item edges with specific current proof/interface evidence. This replaces stale full-versus-half squared-penalty descriptions for the theorem’s actual concentration suppliers. Other rows were preserved. The existing open metadata-only edge from `ex-l2-small-log-density-far-in-hellinger` to `def-hellinger-distance-between-density-laws` is outside this dispatch’s routed items and remains present for owner disposition; no mathematical defect is asserted or cleared for it. The required frontier-ledger refresh succeeded.

No defective published supplier was identified in this review, so the published-consumer ledger was not edited. No proposed withdrawal, outside-batch mathematical repair request, substantial unmet prerequisite or unresolved mathematical uncertainty arose. Published foundations were read at their exact needed interfaces; a new whole-library audit is not claimed.

## Focused local checks and handoff

All commands below completed with exit code 0:

- Initial `node tools/risk-report.mjs research/bayesian-computational-statistics-62-batch-16.proof-contracts.json`: eleven HIGH/CRITICAL items identified, 0 errors.
- The same command with `--require-reviewed`: 0 errors, all eleven required reviews complete (16 total batch items routed).
- `node tools/proof-contract.mjs research/bayesian-computational-statistics-62-batch-16.proof-contracts.json --strict`: 16/16 checked, 0 errors, 0 warnings.
- `node tools/tsx-run.mjs tools/precheck.mts` with the two accepted item paths: 2 checked, 0 failing.
- `node tools/rendercheck.mjs` with those same explicit paths: both parse under the real renderer’s YAML parser and KaTeX.
- `node tools/defect-ledger.mjs validate --run bayesian-computational-statistics-62`: 38 run rows checked, 0 errors at check time.
- Exact decision coverage and raw-byte comparison: 2/2 owed obligations, all eleven reviewed sources equal their reader-post hashes.
- Final single batched `node tools/proof-layout.mjs items/lem-independent-posterior-splitting-from-tests-and-sieve-tail.md items/lem-fixed-design-gaussian-regression-exponential-tests.md`: 2 items, 6 steps, 0 defects.

No new item edits or formatter were needed. These are local checks only. No judge, stamp, certification, engine gate battery, stage transition, publication or dispatch was initiated. The engine owns current decision stamping and the next battery. All routed work is complete; no blocker remains for this dispatch.
