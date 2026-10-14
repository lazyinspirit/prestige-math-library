# Step 3a Reader Report — Batch 31

**Run:** `mathematical-statistics-foundations-37`  
**Role:** reader  
**Coverage:** batch `31`

## Opened inventory

Assigned pages opened:

- `contamination-models-and-robust-risk` (A), including its summary and manifest links.
- `contamination-models-and-robust-risk-examples` (B), including its summary and examples list.

The two declared prerequisite pages were also opened: `losses-risk-and-decision-rules` and `minimax-lower-bounds-and-information-theoretic-methods`.

All assigned items were read in their dependency-level order:

1. `lem-convex-mixture-of-probability-laws`
2. `lem-common-law-forces-two-point-tail-loss-bound`
3. `def-gross-error-path`
4. `def-huber-contamination-model`
5. `def-adversarial-sample-replacement`
6. `lem-huber-contamination-mixtures-can-be-equalized-under-tv-threshold`
7. `def-contamination-robust-risk`
8. `def-contamination-modulus`
9. `thm-huber-contamination-modulus-lower-bound`
10. `ex-mean-gross-error-path-has-unbounded-sensitivity`
11. `ex-bounded-sample-mean-under-replacement`
12. `ex-bernoulli-huber-modulus-and-identical-mixtures`

The 23 unique direct item suppliers opened were `def-probability-measure`, `def-measurable-space`, `def-dirac-measure`, `prop-dirac-measure-is-a-probability-measure`, `def-statistical-experiment`, `def-identically-distributed-and-iid-random-variables`, `def-random-element-and-real-random-variable`, `def-product-sigma-algebra-and-finite-product-sigma-algebras`, `def-total-variation-distance-for-probability-laws`, `def-axiom-of-choice`, `def-radon-nikodym-derivative`, `lem-radon-nikodym-density-of-a-finite-positive-measure-has-a-nonnegative-representative`, `thm-linearity-of-the-lebesgue-integral-on-l-one`, `prop-order-and-scalar-rules-for-the-nonnegative-integral`, `def-extended-real-valued-measurable-function`, `thm-indefinite-integral-of-a-nonnegative-function-is-a-measure`, `prop-closure-properties-of-measurable-functions-used-by-the-integral`, `def-loss-function-and-risk`, `def-expectation-of-a-nonnegative-or-integrable-random-variable`, `def-product-measure-on-sigma-finite-spaces`, `thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique`, `def-borel-sigma-algebra`, and `cor-expectation-agrees-with-the-finite-weighted-sum`.

The batch-31 proof-contract file was opened. All 12 assigned items have a contract; the facts, citations, derivation step numbers, boundary clauses, and finite checks were compared with the current item text.

## Item review

| Item | Verdict and evidence |
|---|---|
| `lem-convex-mixture-of-probability-laws` | Sound. Nonnegativity, total mass, and countable additivity follow from the probability-measure hypotheses and the affine formula; both endpoints are included. |
| `lem-common-law-forces-two-point-tail-loss-bound` | Sound. The separation condition gives a pointwise cover by the two measurable loss events; integrating their indicators gives the stated (1/2) bound, including extended-valued losses. |
| `def-gross-error-path` | Sound. It uses the supplied convex mixture and correctly states point contamination as (H=\delta_x); it does not claim a uniform remainder. |
| `def-huber-contamination-model` | Sound. The one-coordinate mixture, iid sampling, and distinction from gross-error directions and sample replacement are kept separate. |
| `def-adversarial-sample-replacement` | Sound. The clean coordinates are iid, the measurable-diagonal condition makes mismatch events measurable, and the definition permits dependence of the replacement vector on the full clean sample. |
| `lem-huber-contamination-mixtures-can-be-equalized-under-tv-threshold` | Sound. With the stated AC assumption, the (P_0+P_1) dominating measure is finite; the RN representatives, no-half TV convention, normalization by positive TV distance, and endpoint cases support the construction. The interpolation from \(\epsilon'=\delta/(1+\delta)\) to the requested \(\epsilon\) is valid. |
| `def-contamination-robust-risk` | Sound. It distinguishes expected and tail risk, Huber iid sampling and adversarial replacement, and identifies the finite product measure used for the sample law. The stated measurability hypotheses suffice for the loss events and expectations. |
| `def-contamination-modulus` | Sound. The TV threshold and separate \(\epsilon=1\) convention agree with the stated Huber parameterization; the supremum does not assume an optimizer exists. |
| `thm-huber-contamination-modulus-lower-bound` | Sound. The clean-risk branch, finite-modulus approximate-supremum branch, recursive product-law construction, common-law tail bound, and infinite-modulus branch preserve the target-first loss orientation and all hypotheses. The explicit separation condition supplies the needed two-point loss geometry. |
| `ex-mean-gross-error-path-has-unbounded-sensitivity` | The calculation is sound: the finite-support mean is \(\epsilon a\), so the right derivative is \(a\) and its absolute supremum is infinite. Its source locator was repaired as recorded below. |
| `ex-bounded-sample-mean-under-replacement` | Sound. The coordinatewise bound sums to \(k/N\); at \(N=2,\eta=1/2\), both deterministic clean samples reach the same observed vector with exactly one allowed replacement. The resulting vector is not iid. |
| `ex-bernoulli-huber-modulus-and-identical-mixtures` | Sound. The four-event TV calculation yields \(|\theta_0-\theta_1|\); the modulus and contaminating laws cover \(\epsilon=0\), both sides of \(1/2\), and \(\epsilon=1\). |

## Edit and evidence

I corrected the reference locator in `items/ex-mean-gross-error-path-has-unbounded-sensitivity.md`. The previous locator named Stark PDF pages 17–18. The opened source, [Statistics 240 Lecture Notes, Part 9](https://www.stat.berkeley.edu/~stark/Teach/S240/Notes/ch9.pdf), places the mean functional in §1.3.4, equation (50), computes its point-contamination derivative in equation (51), and states the infinite gross-error sensitivity immediately after, with equation (52). The reference now points to §1.3.4, equations (50)–(52). This is a citation-metadata correction only; the proof, proof contract, and verification fields were unchanged.

The final changed-item layout check passed: `node tools/proof-layout.mjs items/ex-mean-gross-error-path-has-unbounded-sensitivity.md` reported 1 item, 3 steps, 0 defects. No other item was edited. No material proof repair was made, so no proof-contract update, reflow, or precheck was required.

## External source checks

- Chen, Gao, and Ren, [“Robust Covariance and Scatter Matrix Estimation under Huber’s Contamination Model”](https://arxiv.org/pdf/1506.00691), §5, equation (12) and Theorem 5.1 (PDF pp. 15–16), states the TV modulus and a minimax tail lower bound at scale \(M(0)\vee\omega\). Appendix E, “Proof of Theorem 5.1” (PDF pp. 44–45), constructs equalized Huber mixtures and invokes two-point testing. The local theorem proves its approximate-supremum witness directly rather than relying on the source proof’s selection of a maximizing pair.
- MIT 18.S997, [High-Dimensional Statistics lecture notes](https://ocw.mit.edu/courses/18-s997-high-dimensional-statistics-spring-2015/619e4ae252f1b26cbe0f7a29d5932978_MIT18_S997S15_CourseNotes.pdf), §5.3 (printed p. 105 / PDF p. 111), gives the two-hypothesis testing lower bound and the event-supremum convention for total variation used as context for the common-law argument.
- Stark, [Statistics 240 Lecture Notes, Part 9](https://www.stat.berkeley.edu/~stark/Teach/S240/Notes/ch9.pdf), §1.2, equation (23), gives the gross-error mixture; §1.3.4, equations (50)–(52), gives the mean functional and point-contamination derivative checked above.

## Page verdicts

- `contamination-models-and-robust-risk` (A): sound. Its summary accurately distinguishes gross-error paths, iid Huber mixtures, and adversarial replacement, and correctly separates expected-risk and tail-risk conclusions. The two declared prerequisite pages were read; their current summaries are consistent with the loss/risk and lower-bound interfaces used here.
- `contamination-models-and-robust-risk-examples` (B): sound. Its summary matches the three listed examples and preserves the bounded-observation qualification on the replacement calculation.

## Unrepaired defects and blocker

No confirmed uneditable defects were found in the assigned pages, items, direct suppliers, or the source clauses checked. No blocker remains for the local arguments reviewed here.

**Coverage limitation:** the assigned items’ `deps` closure contains 435 item files. I reviewed the 12 assigned items and all 23 unique direct item suppliers, but did not independently audit every nested supplier proof in that full transitive closure. I also did not verify every bibliography entry inherited by those suppliers. The verdicts above are limited accordingly.
