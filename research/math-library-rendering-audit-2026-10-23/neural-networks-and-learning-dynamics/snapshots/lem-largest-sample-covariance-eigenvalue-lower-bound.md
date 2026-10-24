---
id: lem-largest-sample-covariance-eigenvalue-lower-bound
kind: lemma
title: "Independent lower bound for the largest sample-covariance eigenvalue"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-sample-covariance-empirical-spectral-distribution
  - thm-singular-value-decomposition
  - thm-operator-norm-is-the-largest-singular-value
  - lem-nonbacktracking-covariance-high-moment-bound
  - lem-fixed-degree-covariance-trace-and-edge-witnesses
proof_strategy: direct
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Yin, Bai, and Krishnaiah, On the Limit of the Largest Eigenvalue of the Large Dimensional Sample Covariance Matrix, Theorem 3.1"
      url: "https://link.springer.com/content/pdf/10.1007/BF00353874.pdf"
    - title: "Baik and Silverstein, Eigenvalues of Large Sample Covariance Matrices of Spiked Population Models, Theorem 1.1"
      url: "https://jack.math.ncsu.edu/spike.pdf"
---

## Statement

Let $(\xi_{ij})_{i,j\ge1}$ be one infinite iid array of real random variables with mean zero, variance one and finite fourth moment. For each positive integer $n$, let $p_n$ be a positive integer and let $X_n=(\xi_{ij})_{1\le i\le n,1\le j\le p_n}$ and suppose $p_n/n\to\gamma\in(0,\infty)$. For $S_n=X_n^{\mathsf T}X_n/n$ and $b_\gamma=(1+\sqrt\gamma)^2$, the separate lower-edge estimate is
$$\liminf_{n\to\infty}\lambda_{\max}(S_n)\ge b_\gamma\quad\text{almost surely}.$$

## Statement references

Yin, Bai, and Krishnaiah, Theorem 3.1, printed p. 517 ([complete paper PDF](https://link.springer.com/content/pdf/10.1007/BF00353874.pdf)).

Baik and Silverstein, Theorem 1.1 for the identity population case, printed pp. 4–5 ([complete paper PDF](https://jack.math.ncsu.edu/spike.pdf)).

## Facts & Assumptions

[F1] [[lem-nonbacktracking-covariance-high-moment-bound]] supplies an almost-sure eventual finite bound on $\|X_n/\sqrt n\|$, without using any sharp edge or empirical spectral limit.

[F2] [[lem-fixed-degree-covariance-trace-and-edge-witnesses]] proves the independent fixed-degree trace moments and upper-endpoint polynomial witness under the coarse bound in F1.

[F3] [[thm-singular-value-decomposition]] identifies the positive spectra of $X_nX_n^{\mathsf T}/n$ and $S_n=X_n^{\mathsf T}X_n/n$; their largest eigenvalues are equal.

## Proof

**Given:** The nested iid array and hypotheses in the Statement.

1.1 Apply F1 to the upper-left blocks. On its probability-one event the hypothesis of F2 is satisfied. F2 therefore gives $\liminf_n\lambda_{\max}(X_nX_n^{\mathsf T}/n)\ge(1+\sqrt\gamma)^2$ almost surely. Its argument uses fixed polynomial trace witnesses derived from tree counting and bounded truncations; it invokes no weak ESD convergence or limiting-support theorem. [given, F1, F2]

2.1 Transfer the largest eigenvalue through the SVD identity in F3. This yields $\liminf_n\lambda_{\max}(S_n)\ge b_\gamma$ almost surely, as asserted. [F3, step 1.1] ∎
