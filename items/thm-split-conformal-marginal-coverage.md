---
id: thm-split-conformal-marginal-coverage
kind: theorem
title: "Split conformal marginal coverage"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 7
deps:
  - alg-split-conformal-prediction-set
  - thm-conformal-rank-superuniformity-under-exchangeability
  - lem-permutation-equivariant-score-map-preserves-exchangeability
  - def-exchangeable-random-elements
  - lem-regular-conditional-kernels-push-forward-under-measurable-random-maps
  - def-regular-conditional-distribution
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
    - title: "Jing Lei et al., Distribution-Free Predictive Inference for Regression, JASA 113(523) (2018), Theorem 2.2 and Appendix A.1"
      url: "https://arxiv.org/pdf/1604.04173"
    - title: "Ryan Tibshirani, Conformal Prediction, Advanced Topics in Statistical Learning, Spring 2024, §2"
      url: "https://www.stat.berkeley.edu/~ryantibs/statlearn-s24/lectures/conformal.pdf"
---

## Statement

Let $Z_i=(X_i,Y_i)$, $1\le i\le m+1$, be random elements of one measurable
example space $(\mathcal Z,\mathscr Z)$, and let $\mathcal T$ be the training
sigma-field. Suppose the tuple $Z=(Z_1,\ldots,Z_{m+1})$ has a regular
conditional distribution $Q_\omega$ given $\mathcal T$ in the sense of
[[def-regular-conditional-distribution]], whose sections have joint laws
invariant under every coordinate permutation, as in
[[def-exchangeable-random-elements]], for almost every $\omega$. Let $H$ be a $\mathcal T$-measurable
training statistic, and let $s:\mathcal H\times\mathcal Z\to\mathbb R$ be a
jointly measurable split score rule. Use the split set in
[[alg-split-conformal-prediction-set]] at $0<\alpha<1$. Then
$$\mathbb P\{Y_{m+1}\in C(X_{m+1})\mid\mathcal T\}\ge1-\alpha\quad\text{almost surely}.$$
If the tie-randomized set $C_U$ is used with one $U$ of Lebesgue probability
law on $[0,1]$ independent of $\mathcal T\vee\sigma(Z)$, then
$$\mathbb P\{Y_{m+1}\in C_U(X_{m+1})\mid\mathcal T\}=1-\alpha\quad\text{almost surely}.$$
In either case, integration over the training sigma-field gives the same
marginal lower bound or exact marginal coverage.

## Facts & Assumptions

**Given:** A conditional regular distribution of the example tuple with exchangeable sections, a training-measurable statistic, and a jointly measurable fixed score rule; for the randomized clause, an independent uniform random element.

[F1] A regular conditional distribution is a probability kernel satisfying the conditional-event identity, and its sections are probability measures. [[def-regular-conditional-distribution]]

[F2] A jointly measurable score map pushes the regular conditional distribution forward to the conditional distribution of the score vector; an independent uniform input is adjoined by a product kernel. [[lem-regular-conditional-kernels-push-forward-under-measurable-random-maps]]

[F3] A measurable permutation-equivariant map sends an exchangeable tuple to an exchangeable score vector. [[lem-permutation-equivariant-score-map-preserves-exchangeability]]

[F4] For an exchangeable score vector, the upper-rank p-value is superuniform and its specified independent-uniform tie randomization is uniform. [[thm-conformal-rank-superuniformity-under-exchangeability]]

[F5] The split threshold uses $k=\lceil(m+1)(1-\alpha)\rceil$, the $k$th calibration score if $k\le m$, and $+\infty$ when $k=m+1$. [[alg-split-conformal-prediction-set]]

## Proof

1.1 Define $g(\omega,z)=(s(H(\omega),z_i))_{i=1}^{m+1}$. For each $i$, the map $(\omega,z)\mapsto(H(\omega),z_i)$ is measurable into $\mathcal H\times\mathcal Z$: the preimage of a rectangle $A\times B$ is $H^{-1}(A)\times\{z:z_i\in B\}$, which belongs to $\mathcal T\otimes\mathscr Z^{\otimes(m+1)}$, and such rectangles generate the target product sigma-algebra. Joint measurability of $s$ therefore makes every coordinate of $g$ measurable. The finite tuple $g$ is measurable into the product Borel sigma-algebra because preimages of Borel rectangles are finite intersections of coordinate preimages. For each fixed $\omega$, $g(\omega,\cdot)$ is permutation-equivariant because the same fixed rule $s(H(\omega),\cdot)$ is applied coordinatewise. By [F2] its pushforward is a regular conditional distribution of the score vector; by the sectionwise exchangeability in the hypothesis and [F3], that score-vector distribution is exchangeable. [given, F1, F2, F3]

1.2 Put $n=m+1$ and $k=\lceil n(1-\alpha)\rceil$. If $k=n$, [F5] sets $q=+\infty$, so every true response is covered. If $k\le m$ and the true test score $R_n$ exceeds the $k$th calibration score $q$, then at least $k$ calibration scores are strictly below $R_n$; consequently at most $n-k$ of all $n$ scores are at least $R_n$, and $p_n\le(n-k)/n\le\alpha$. Thus $p_n>\alpha$ implies coverage in every case. [F4, F5]

2.1 Apply [F4] to the conditional exchangeable score law from step 1.1. The event $p_n>\alpha$ has conditional probability at least $1-\alpha$, and step 1.2 includes it in the nonrandomized coverage event. For the randomized version, the second assertion of [F2] makes $Q_\omega\otimes\lambda$ a regular conditional distribution of $(Z,U)$ given $\mathcal T$. The map that sends $(\omega,z,u)$ to the tie-randomized rank computed from $g(\omega,z)$ and $u$ is jointly measurable: the score coordinates are measurable by step 1.1, comparisons of real-valued measurable functions are measurable, and the rank formula uses finite sums, products, and scalar division. Applying the first assertion of [F2] to this map gives the conditional law of $p_{U,n}$. For almost every $\omega$, $Q_\omega$ is exchangeable, $H(\omega)$ is fixed, and $\lambda$ is independent uniform; [F4] therefore gives conditional probability exactly $1-\alpha$ for $p_{U,n}>\alpha$, which is precisely randomized-set coverage. [F2, F4, step 1.1, step 1.2]

3.1 The conditional-kernel identity in [F1], applied with the conditioning event $H=\Omega$, integrates the conditional coverage probabilities from step 2.1 to their unconditional probabilities. The lower bound and the exact equality therefore also hold marginally. [F1, step 2.1] ∎

## Remarks

These are marginal guarantees over the test feature and response, conditional only on the training sigma-field. They do not assert coverage conditional on $X_{m+1}$ or on a subgroup, and they do not cover a distribution shift that breaks the stated conditional exchangeability.
