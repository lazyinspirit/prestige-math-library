---
id: lem-largest-sample-covariance-eigenvalue-lower-bound
kind: lemma
title: "Independent lower bound for the largest sample-covariance eigenvalue"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-sample-covariance-empirical-spectral-distribution
  - thm-singular-value-decomposition
  - thm-operator-norm-is-the-largest-singular-value
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

Let $X_n\in\mathbb R^{n\times p_n}$ have mutually independent entries with one common law of mean zero, variance one, and finite fourth moment, and suppose $p_n/n\to\gamma\in(0,\infty)$. For $S_n=X_n^{\mathsf T}X_n/n$ and $b_\gamma=(1+\sqrt\gamma)^2$, the separate lower-edge estimate is
$$\liminf_{n\to\infty}\lambda_{\max}(S_n)\ge b_\gamma\quad\text{almost surely}.$$

## Statement references

Yin, Bai, and Krishnaiah, Theorem 3.1, printed p. 517 ([complete paper PDF](https://link.springer.com/content/pdf/10.1007/BF00353874.pdf)).

Baik and Silverstein, Theorem 1.1 for the identity population case, printed pp. 4–5 ([complete paper PDF](https://jack.math.ncsu.edu/spike.pdf)).

## Proof status

This supplier remains escalated. [[def-sample-covariance-empirical-spectral-distribution]], [[thm-singular-value-decomposition]], and [[thm-operator-norm-is-the-largest-singular-value]] fix the matrix/singular-value conventions. Yin, Bai, and Krishnaiah, Theorem 3.1, p. 517, states the exact limit but its proof obtains the lower inequality from Jonsson (1982) or Wachter (1978) without reproducing that argument. Baik and Silverstein, Theorem 1.1 and §4, gives an identity-population edge limit, but its proof uses the limiting empirical spectral distribution to locate the edge, contrary to the controlling plan's explicit warning. A separate lower-bound proof or a plan-approved full source is still required.
