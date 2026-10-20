# Step 3a reader report — batch 55

Run: machine-learning-all-101-2026-10-19  
Role: reader  
Output: machine-learning-all-101-2026-10-19-reader-findings-55.json

## Scope and opened inventory

The live autopilot status reported batch 55 as uncovered in Step 3a reader. The batch manifest assigned two pages and eight items.

Pages opened:

- `library/machine-learning/algorithmic-stability-of-stochastic-training.md`
- `library/machine-learning/algorithmic-stability-of-stochastic-training-examples.md`

Assigned items opened in dependency order:

1. `lem-iid-sample-plus-ghost-point-are-exchangeable`
2. `def-uniform-stability`
3. `thm-uniform-stability-implies-expected-generalization`
4. `thm-sgd-stability-convex-loss`
5. `thm-sgd-stability-nonconvex-loss`
6. `ex-sgd-convex-stability-linear-in-steps`
7. `ex-sgd-stability-convex-vs-nonconvex-schedules`
8. `ex-sgd-nonlipschitz-loss-no-uniform-stability`

Relevant suppliers opened to check the proofs included:

- Probability and risk: `def-identically-distributed-and-iid-random-variables`, `def-independent-random-elements`, `def-independent-sigma-algebras-and-events`, `def-independent-families-of-event-classes`, `def-product-sigma-algebra-and-finite-product-sigma-algebras`, `thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique`, `def-supervised-learning-problem`, `def-population-and-empirical-risk`, `def-expectation-of-a-nonnegative-or-integrable-random-variable`, and `def-integrable-real-and-complex-functions-and-their-integrals`.
- Integration: `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`, `thm-linearity-of-the-lebesgue-integral-on-l-one`, `thm-integral-triangle-inequality`, `thm-logarithm-derivative-and-integral`, `thm-ftc-second-part`, `thm-additivity-over-subintervals`, `thm-monotonicity-of-the-integral`, and `thm-continuous-implies-integrable`.
- Convexity and differential calculus: `lem-l-smoothness-descent-inequality`, `lem-convex-gradient-step-nonexpansive`, `def-convex-and-strictly-convex-functions-on-euclidean-sets`, `def-total-derivative-in-euclidean-space`, `def-jacobian-matrix-and-gradient`, `def-euclidean-inner-product`, `thm-gradient-represents-directional-derivatives-and-steepest-ascent`, and `thm-cauchy-schwarz-and-the-euclidean-norm`.
- Exponential and powers: `lem-exponential-dominates-one-plus-x`, `thm-exponential-is-strictly-increasing`, `thm-exponential-addition-formula`, `def-real-exponential-function-and-e`, `def-natural-logarithm`, `thm-natural-logarithm-laws`, `def-real-power`, and `thm-real-power-continuity-and-derivatives`.

The primary [Hardt–Recht–Singer paper](https://arxiv.org/html/1509.01240) was checked at §2.2, §3.2 Lemma 3.7(2), §3.3 Theorem 3.8, and §3.5 Theorem 3.12 and proof. Section 3.2, Lemma 3.7(2), states that if $f$ is convex and $\beta$-smooth, then for $\alpha\le2/\beta$ the gradient update is 1-expansive. The cited [SCAFFOLD paper](https://cs.nyu.edu/~mohri/pub/scaffold.pdf) was opened at Appendix C, Lemma 6, whose hypotheses and contractive conclusion are narrower.

## Edit and validation

Edited `items/thm-sgd-stability-nonconvex-loss.md`. Its integral estimates use continuous comparison functions, while the cited FTC and integral order/additivity results require integrable functions. Added the published dependency `thm-continuous-implies-integrable`, added fact [F14], stated the integrability hypothesis in [F10] exactly, and cited [F14] in steps 4.1 and 5.1. The bound and its hypotheses are unchanged. The source theorem states that a continuous real function on a compact interval with distinct endpoints is Riemann integrable.

Updated the corresponding derivations and citation in `research/machine-learning-all-101-2026-10-19-batch-55.proof-contracts.json`. The item had no `verification.judge` record to remove.

Validation after the edit:

- Reflow: unchanged.
- Precheck: PASS, direct.
- Final proof-layout: 1 item, 7 steps, 0 defects.

No page prose or other item was edited.

## Defects outside the authorized write scope

1. `lem-convex-gradient-step-nonexpansive` is an in-run supplier in batch 30, outside this assignment. In Facts & Assumptions [F1] and Proof 1.1, the proof uses the supporting-line inequality for a differentiable convex function to conclude that its auxiliary function is minimized at the base point. The cited definition supplies only the segment inequality; the supporting-line inequality is not derived in the item. A one-sided directional-derivative argument from the segment inequality would close this nonfatal inference.

2. In the same supplier, the source reference in its `Statement references` points to SCAFFOLD, Appendix C, Lemma 6. That source assumes strong convexity and step size at most $1/\beta$ and states $\|x-\eta\nabla h(x)-y+\eta\nabla h(y)\|^2\le(1-\mu\eta)\|x-y\|^2$; it does not state the supplier's convex-only nonexpansiveness result for step size at most $2/\beta$. Hardt, Recht, and Singer, [arXiv:1509.01240](https://arxiv.org/html/1509.01240), §3.2, Lemma 3.7(2), states the exact convex and smooth result. This is a nonfatal citation mismatch because the supplier includes its own proof, subject to the inference above.

   Both findings are routed through assigned consumer `thm-sgd-stability-convex-loss`. The exact source bytes observed for the in-run item were still current at split: SHA-256 `2c0d4c5e7e9eaf04ca25139603b065ee9d5901e85455dc7582792f86955efe46`.

3. Published dependency `thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique`, Proof 3.1, says the preceding step supplies the sigma-finite exhaustion needed for uniqueness. That step establishes sigma-finiteness of μ×ν but does not state it for the other measure ρ. The rectangle formula and the same finite exhaustion immediately give ρ(X_n×Y_n)=μ(X_n)ν(Y_n)<∞, so ρ is sigma-finite too; the proof needs that explicit line before applying its uniqueness theorem. This is a nonfatal omission. Its assigned consumer is `lem-iid-sample-plus-ghost-point-are-exchangeable`.

These defects were not edited because their subjects are outside batch 55. No proposed withdrawal was identified.

## Page verdicts

- `algorithmic-stability-of-stochastic-training`: PASS. Its YAML-only page has no summary body, retains draft status and `page_layout: compact-v1`, and lists exactly the five assigned A-items and the two manifest prerequisites.
- `algorithmic-stability-of-stochastic-training-examples`: PASS. Its YAML-only page has no summary body, retains draft status and `page_layout: compact-v1`, and lists exactly the three assigned examples and its manifest prerequisite.

No TikZ/tikzcd or other diagrams occur in the assigned items or pages. No page summary or page prose was present to review or repair.

## Coverage note and blocker

All assigned pages and items and the relevant dependency statements/proofs were reviewed; no unresolved mathematical uncertainty or reader-execution blocker remains. Some indirect suppliers were discovered while reading their consumers and opened afterward: `def-independent-families-of-event-classes`, `lem-l-smoothness-descent-inequality`, and `thm-continuous-implies-integrable`. They were checked before final adjudication, but this discovery-driven closure review did not preserve strict chronological supplier-first order for those indirect sources. The uneditable concerns above remain for the owner to route.
