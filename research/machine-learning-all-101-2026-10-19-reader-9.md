# Step 3a reader report — batch 9

Run: `machine-learning-all-101-2026-10-19`  
Role: reader  
Batch: `9`

## Opened inventory

### Assigned pages

| Page | Status and layout | Review |
|---|---|---|
| `minimax-learning-lower-bounds-and-optimal-rates` | Draft; `page_layout: compact-v1`; six items, no examples | Body is empty. Its three required pages resolve. |
| `minimax-learning-lower-bounds-and-optimal-rates-examples` | Draft; `page_layout: compact-v1`; no items, three examples | Body is empty. It requires the assigned A page. |

Opened page files: `library/machine-learning/minimax-learning-lower-bounds-and-optimal-rates.md` and `library/machine-learning/minimax-learning-lower-bounds-and-optimal-rates-examples.md`.

Opened prerequisite pages: `library/mathematical-statistics/minimax-lower-bounds-and-information-theoretic-methods.md` (published), `library/machine-learning/prediction-problems-risks-and-empirical-minimization.md` (draft), and `library/combinatorics/linear-algebra-methods-in-combinatorics.md` (published). The last page homes the published VC-shattering definition used by the batch. I did not use the prerequisite page summaries as mathematical suppliers.

### Items, in dependency order

Read the batch-2 draft suppliers before their batch-9 consumer: `def-supervised-learning-problem`, `def-population-and-empirical-risk`, and `lem-population-and-empirical-risk-are-measurable`; also read the published supplier `def-shattering-and-vc-dimension`. The current measurability-lemma file changed during review; I reopened its current text after the source-hash check detected the change (current SHA-256 observed: `915b431fd690d6600ae6495d341058fe49afb372045534ef009fcb1cc8db0ca6`).

Read the additional suppliers needed to check the measurability lemma's cited steps: `def-expectation-of-a-nonnegative-or-integrable-random-variable`, `def-product-sigma-algebra-and-finite-product-sigma-algebras`, `def-measurable-function-between-measurable-spaces`, `def-extended-real-valued-measurable-function`, and `prop-closure-properties-of-measurable-functions-used-by-the-integral`.

Then reviewed the assigned items in dependency order:

1. `lem-bernoulli-two-point-testing-for-vc-lower-bound`
2. `lem-bounded-variable-lower-tail-from-mean`
3. `def-minimax-excess-risk`
4. `thm-realizable-vc-minimax-lower-bound`
5. `thm-agnostic-vc-minimax-lower-bound`
6. `cor-vc-minimax-rate-match`
7. `ex-bernoulli-two-point-testing`
8. `ex-finite-shattered-set`
9. `ex-fixed-confidence-vc-lower-bounds`

Reviewed all nine records in `research/machine-learning-all-101-2026-10-19-batch-9.proof-contracts.json` against the current proof steps, cited facts, and boundary dispositions. The eight proof-bearing items have matching derivation steps and inputs; no finite-smoke obligation is listed. The definition has no phase proof.

## Mathematical review and evidence

- The Bernoulli testing lemma derives the randomized-test error bound from the half-ℓ1 total-variation definition, proves the finite affinity inequality by Cauchy–Schwarz, computes product affinity, and supplies the logarithmic comparison defining `Phi`. The no-observation case is handled directly. Mohri et al., *Foundations of Machine Learning*, 2nd ed., Chapter 3 §3.4, Lemma 3.21, leaves Exercise D.3 as an exercise; the assigned lemma supplies the needed proof. The textbook's statement and formula were checked at PDF pp. 61–62 (printed pp. 44–45).
- The bounded-variable lemma's expectation split over `{Z <= t}` and `{Z > t}` proves the stated strict-tail inequality for all `0 <= t < 1`, including when its right side is negative.
- The minimax definition makes the binary trace, zero-one risk, class benchmark, realizable target risk, independent learner seed, product sample law, and the required evaluation/risk measurability explicit. The direct suppliers support its probability and VC notation; the current measurability supplier proves fixed-predictor risk measurability, while the definition separately requires random-learner risk measurability. I found no unstated measurability or choice premise in the assigned uses.
- The realizable theorem's range ensures the rare-atom mixture has nonnegative weights. Its binomial exponential-moment estimate gives probability at least `1/13` of seeing at most half the rare atoms; conditional fair unseen labels give a strict-tail probability at least `1/7`; averaging yields `1/91 > 1/100`. The finite selection of target labelings needs only finite choice. The source theorem's wider printed range is not needed for this locally proved restricted statement. Mohri et al., Theorem 3.20 and proof, PDF pp. 59–61 (printed pp. 43–45), and UBC Statistical Learning Theory notes, Chapter 7 §7.3, Theorem 7.13, were consulted. The UBC theorem has the narrower conditions `d >= 3` and `m > d/2`; the assigned proof does not rely on extending it.
- The agnostic theorem's sample range gives `a <= 1/7`; its coordinate testing, convexity/tangent argument for `Phi`, explicit rational-log estimate, and normalized excess-risk tail step support the constants `sqrt(d/(320m))` and `1/64`. The finite sign prior selects a law for each learner. Mohri et al., Lemma 3.21, Lemma 3.22, and Theorem 3.23 and proof (Chapter 3 §3.4, PDF pp. 61–64 / printed pp. 44–48) were consulted. The theorem's local range includes the smallness condition needed by the construction.
- The corollary's expectation bounds follow from nonnegative risk and the supplied strict-tail probabilities; its confidence thresholds follow by direct comparison of the theorem threshold with `eta`. Its rate wording remains qualified by the corresponding theorem ranges. The fixed-confidence example checks `d=4`, `m=64`, both range conditions, and the thresholds `3/2048` and `1/sqrt(5120)`; it correctly allows the two hard laws to differ.
- The one-sample Bernoulli example expands the error for arbitrary randomized tests and attains the lower bound with `psi(y)=y`. The finite VC example explicitly constructs all eight labelings on three points and rules out four distinct points.
- Statement/Definition/Example sections are uninterrupted by hyperlinks; references follow in the immediately named reference sections. Proof steps are separate paragraphs with valid trailing tags and final QED markers. No TikZ or tikzcd diagram occurs, and no diagram is needed for these arguments.

Source checks included Mohri et al., *Foundations of Machine Learning*, 2nd ed., Chapter 3 §3.4, especially Theorem 3.20 and proof, Lemmas 3.21–3.22, and Theorem 3.23 and proof (PDF pp. 59–64; printed pp. 43–48). The items cite the [canonical PDF](https://www.dropbox.com/s/38p0j6ds5q9c8oe/10290.pdf?dl=1); I checked the full-text passages in [a complete copy of the same second edition](https://avanti1980.github.io/course-ml/book/Foundations%20of%20Machine%20Learning%202ed%20-%20Mehryar%20Mohri%2C%20Afshin%20Rostamizadeh%2C%20and%20Ameet%20Talwalkar.pdf). Shalev-Shwartz and Ben-David, *Understanding Machine Learning*, Chapter 28 §§28.2.1–28.2.2 (PDF pp. 393–398), was checked in the [cited PDF](https://www.inf.u-szeged.hu/~turan/ML-Konyv.pdf). The [UBC Statistical Learning Theory notes](https://www.cs.ubc.ca/~dsuth/532D/26w1/notes/html/chap_pac-nfl.html), Chapter 7 §7.3, Theorem 7.13 and the binomial-tail passage at lines 219–234, were checked as an independent comparison. The cited statements and locators match the bibliography; the local proofs do not depend on the sources' unproved or narrower steps.

## Edits and defects

No item or page was edited. I found no confirmed defect in the assigned items or pages and no defect in the opened suppliers. There are no uneditable defects to route. Since there was no item edit, reflow, precheck, proof-layout, or formatter was not run.

## Page verdicts

- `minimax-learning-lower-bounds-and-optimal-rates`: **Pass.** Draft A-page inventory and prerequisite links are present; compact layout is preserved and the body is empty.
- `minimax-learning-lower-bounds-and-optimal-rates-examples`: **Pass.** Draft B-page inventory is present; compact layout is preserved, it depends on the A page, and the body is empty.

## Blockers and limitations

There is no batch-9 mathematical-review blocker. After writing these two artifacts, the read-only autopilot status still showed the run active at Step 3a with batch 9 among the missing reader results; the native reader handoff had not yet been counted at that check, and I did not force a workflow transition. The batch-9 author notes also report an out-of-scope run-wide graph-recomputation blocker involving a malformed batch-37 manifest and six stale Step 1 decision hashes. I did not inspect or modify batch 37 or shared run artifacts, so that report remains owner-side context rather than a finding from this review.
