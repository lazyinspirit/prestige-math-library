# Step 3a reader report — batch 45

Run: machine-learning-all-101-2026-10-19  
Date: 2026-10-19

## Verdict

Reviewed all 16 assigned items and both assigned pages. Four authorized edits were made: three proof-support repairs and one citation-locator correction. No confirmed defect remained outside the assigned write scope, and there is no blocker.

## Opened inventory

### Assigned pages

- library/machine-learning/overparameterized-training-and-interpolation.md — A page, draft. Its item inventory matches the assigned manifest; its Markdown body is empty and page_layout: compact-v1 is retained. **Verdict: pass.**
- library/machine-learning/overparameterized-training-and-interpolation-examples.md — B page, draft. Its example inventory matches the assigned manifest; its Markdown body is empty and page_layout: compact-v1 is retained. **Verdict: pass.**

### Assigned items

- Foundational and architecture items: lem-du-activation-normalizer-finite-positive, lem-du-conditional-loss-contraction-under-gram-control, def-du-overparameterized-network-architectures-and-gram-kernels, lem-du-population-gram-kernels-are-finite-symmetric-psd, and lem-du-local-pl-descent-and-path-length.
- Initialization and perturbation items: lem-du-output-gradient-gram-update-identity, lem-du-initial-output-gaussian-concentration, lem-du-neighborhood-gram-and-hessian-control, and lem-du-simultaneous-initialization-event.
- Convergence theorems: thm-wide-network-gradient-descent-reaches-zero-training-loss and thm-residual-network-polynomial-width-training-convergence.
- Examples: ex-du-relu-outside-analytic-activation-class, ex-du-residual-skip-at-every-layer, ex-du-interpolation-does-not-imply-test-fit, ex-du-duplicate-inputs-force-singular-gram, and ex-du-initial-output-common-mode-variance.

### Required and direct supplier page context

- library/bayesian-computational-statistics/gaussian-process-support-and-concentration.md
- library/linear-algebra/the-spectral-theorem-and-singular-value-decomposition.md
- library/machine-learning/nonconvex-gradient-descent-and-stationarity.md
- library/machine-learning/feedforward-networks-and-universal-approximation.md (batch 31)
- library/machine-learning/automatic-differentiation-and-backpropagation.md (batch 38)
- library/numerical-linear-algebra-and-approximation/randomized-low-rank-approximation.md

### External item suppliers opened

- Probability and Gaussian suppliers: def-standard-normal-and-normal-laws, def-multivariate-normal-law, lem-gaussian-even-moment-bound-for-brownian-increments, cor-countable-independent-copies-exist, cor-cauchy-schwarz-for-random-variables, thm-factorization-of-expectations-for-independent-variables, thm-finite-union-bound, thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique, thm-standard-gaussian-lipschitz-concentration, thm-nondegenerate-multivariate-normal-law-has-density, thm-differentiation-under-the-integral-sign, thm-integration-by-parts, thm-dominated-convergence, cor-markov-inequality-for-random-variables, and cor-chebyshev-inequality-for-random-variables.
- Choice and finite-dimensional suppliers: def-axiom-of-choice, def-dependent-choice, def-countable-choice, cor-real-spectral-theorem-for-self-adjoint-endomorphisms, thm-cauchy-schwarz-and-the-euclidean-norm, thm-induction-principle, cor-mean-value-theorem, lem-epsilon-net-of-unit-sphere-has-cardinality-bound, thm-finite-dimensional-orthogonal-decomposition, and cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases.
- Differentiation, optimization, and norm suppliers: alg-gradient-descent, def-real-frechet-derivative-on-real-and-complex-matrix-spaces, lem-taylor-integral-remainder, def-operator-norm-on-a-finite-dimensional-inner-product-space, cor-vector-valued-ftc-and-lipschitz-bound, def-frobenius-matrix-norm, and def-p-norms-on-rn.
- In-run differentiable-network suppliers: def-feedforward-neural-network (batch 31), thm-shared-parameter-backpropagation-gradient-formula (batch 38), alg-backpropagation-through-shared-parameter-recurrence, def-finite-straight-line-computational-program, thm-chain-rule-for-total-derivatives, and thm-reverse-mode-computes-gradient.
- Gaussian matrix supplier: lem-gaussian-matrix-orthogonal-unitary-invariance-and-block-independence.

## Source checks and mathematical review

The official PMLR paper was checked at [§3.2 Conditions 3.1–3.2, §3.3 equations (2)–(3), Definitions 5.1 and 6.1 / equations (7)–(8), and Theorems 5.1 and 6.1](https://proceedings.mlr.press/v97/du19c.pdf). The local activation, architecture, Gram recursion, width, step-size, and geometric loss claims preserve those assumptions and theorem conclusions. The residual statement uses the stricter width term n⁴H⁶/λ⁴; the official Theorem 6.1 term is n⁴/(λ⁴H⁶), and the item explicitly describes its displayed condition as stronger. Its local proof uses the displayed stronger condition.

The supplementary source was checked at [Appendix C, last-layer Gram formula (14)](https://proceedings.mlr.press/v97/du19c/du19c-supp.pdf) and [Appendix E.1, Definition E.1, equations (16)–(17)](https://proceedings.mlr.press/v97/du19c/du19c-supp.pdf). Those exact locators confirm the local last-layer formula and residual mean/second-moment recursion. The citations in the assigned definition were split so main-paper equations (7)–(8) and supplementary equations (14), (16)–(17) point to the correct documents.

The residual TikZ diagram in def-du-overparameterized-network-architectures-and-gram-kernels correctly shows the identity skip from x^(h-1) and the scaled nonlinear branch meeting at the sum and producing x^h. No other assigned item contains a diagram.

The main proof chain was checked from the finite Gaussian initialization estimates through last-layer Gram control and the confined-gradient-descent lemma. The fully connected and residual theorem proofs now cite the exact helper results needed for the displayed rates. The examples' witnesses and recurrences agree with their complete descriptions.

## Edits and evidence

1. items/lem-du-neighborhood-gram-and-hessian-control.md, proof step 3.2: corrected the weight-difference estimate to include the required M factor. From ||b_(h,0)||_∞ ≤ B_b M, the weight term (s_h/√m)ΔW_h^T diag(σ')b_(h,0) is O(s_h M D); the previous O(s_h D) intermediate bound omitted M, although the final ||d_h|| ≤ T M D bound already carried it. Updated the corresponding proof-contract derivation.
2. items/lem-du-simultaneous-initialization-event.md: added direct suppliers and Facts F20 and F21 for expectation factorization of independent summands and the finite union bound. The mgf estimate in step 1.1 uses factorization; the layer, Gram-entry, net, backward-coordinate, and total-failure estimates use finite unions. Added the corresponding proof tags and updated the proof contract.
3. items/thm-residual-network-polynomial-width-training-convergence.md, proof step 1.1: supplied the omitted depth-uniform residual variance estimate. The residual second-moment recursion and Cauchy–Schwarz give q_h ≤ (1 + αL)q_(h-1) + αC_σ, with q_1 = 1 and α = c_res/H, so q_h is bounded independently of H. The terminal diagonal formula then gives λ ≤ C/H². Added the Cauchy–Schwarz supplier and updated the proof contract.
4. items/def-du-overparameterized-network-architectures-and-gram-kernels.md: split the citation for the population recursions by source location, retaining all claims while linking equations (7)–(8) to the main paper and equations (14), (16)–(17) to the supplement.

No verification.judge record was present on the changed draft items. Reflow reported all four changed items unchanged. Precheck passed for the three proof-bearing items; the definition check reported zero checked proofs and zero failures. The final node tools/proof-layout.mjs run checked all four paths: 4 items, 19 steps, 0 defects.

## Unedited defects and blockers

None found. No page summary, other-batch carrier, published carrier, or planning scaffold was edited.

## Coverage note

All assigned items and pages, their direct mathematical suppliers, required page context, and the exact cited Du paper and supplement locators listed above were opened. This was not a whole-corpus audit or a full transitive audit of every dependency beneath published foundational suppliers. The supplementary theorem proof appendices were not reread line-by-line; the local proof arguments were checked directly, and the source statements and specific supplemental formulas cited by the items were verified.
