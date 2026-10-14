---
id: thm-full-conformal-marginal-coverage
kind: theorem
title: "Full conformal marginal coverage"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 7
deps:
  - alg-full-conformal-prediction-set
  - lem-permutation-equivariant-score-map-preserves-exchangeability
  - thm-conformal-rank-superuniformity-under-exchangeability
  - def-exchangeable-random-elements
  - def-independent-sigma-algebras-and-events
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Jing Lei et al., Distribution-Free Predictive Inference for Regression, JASA 113(523) (2018), Theorem 2.1, Remark 2.4, and Appendix A.1"
      url: "https://arxiv.org/pdf/1604.04173"
    - title: "Glenn Shafer and Vladimir Vovk, A Tutorial on Conformal Prediction, JMLR 9 (2008), §§4.1–4.2"
      url: "https://www.jmlr.org/papers/volume9/shafer08a/shafer08a.pdf"
    - title: "Ryan Tibshirani, Conformal Prediction, Advanced Topics in Statistical Learning, Spring 2024, §3"
      url: "https://www.stat.berkeley.edu/~ryantibs/statlearn-s24/lectures/conformal.pdf"
---

## Statement

Let $(\mathcal X,\mathscr X)$ and $(\mathcal Y,\mathscr Y)$ be measurable
feature and response spaces, let $m\ge0$, and let
$Z_i=(X_i,Y_i)$, $1\le i\le m+1$, be random elements of the product measurable
space $\mathcal Z=(\mathcal X\times\mathcal Y,\mathscr X\otimes\mathscr Y)$.
Suppose their joint law is invariant under every coordinate permutation, as in
[[def-exchangeable-random-elements]]. Suppose a measurable, permutation-equivariant
full score assignment $A:\mathcal Z^{m+1}\to\mathbb R^{m+1}$ is used for every
augmented candidate sample, as in [[alg-full-conformal-prediction-set]]. Then,
for $0<\alpha<1$, its nonrandomized full conformal set satisfies
$$\mathbb P\{Y_{m+1}\in C(X_{m+1})\}\ge1-\alpha.$$
If the tie-randomized set uses one $U$ with Lebesgue probability law on
$[0,1]$, independent of $\sigma(Z_1,\ldots,Z_{m+1})$ and shared across the
candidate scan, then
$$\mathbb P\{Y_{m+1}\in C_U(X_{m+1})\}=1-\alpha.$$
These are marginal guarantees over the exchangeable examples and any stated
tie randomization.

## Facts & Assumptions

**Given:** The exchangeable tuple of feature-response pairs in the stated product measurable space, the measurable permutation-equivariant full score assignment, and $0<\alpha<1$; for the randomized clause, a uniform random element independent of the example tuple.

[F1] Exchangeability is invariance of the joint law under every coordinate permutation. [[def-exchangeable-random-elements]]

[F2] Measurable permutation-equivariant scores of an exchangeable tuple remain exchangeable. [[lem-permutation-equivariant-score-map-preserves-exchangeability]]

[F3] The full conformal set includes a candidate exactly when its upper-rank p-value exceeds $\alpha$, or in the randomized version when $p_U>\alpha$. [[alg-full-conformal-prediction-set]]

[F4] The upper-rank p-value is superuniform under exchangeability, and the independent tie-randomized rank is uniform. [[thm-conformal-rank-superuniformity-under-exchangeability]]

## Proof

1.1 By [F1], the data tuple has an exchangeable law. The full score assignment is measurable and permutation-equivariant by hypothesis, so [F2] makes the augmented score vector exchangeable. [given, F1, F2]

2.1 For the true candidate $Y_{m+1}$, the full set membership condition in [F3] is $p_{m+1}>\alpha$. By [F4], its probability is at least $1-\alpha$; for the randomized version, $p_{U,m+1}$ is uniform and $\mathbb P(p_{U,m+1}>\alpha)=1-\alpha$. [F3, F4, step 1.1] ∎

## Remarks

The theorem gives marginal coverage, not coverage conditional on the test features or on a subgroup. It does not provide a distribution-shift guarantee.
