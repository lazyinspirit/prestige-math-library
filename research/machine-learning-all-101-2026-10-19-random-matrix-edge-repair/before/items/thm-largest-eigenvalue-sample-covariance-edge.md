---
id: thm-largest-eigenvalue-sample-covariance-edge
kind: theorem
title: "Almost-sure limit of the largest sample-covariance eigenvalue"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-sample-covariance-empirical-spectral-distribution
  - lem-largest-sample-covariance-eigenvalue-upper-bound
  - lem-largest-sample-covariance-eigenvalue-lower-bound
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
    - title: "Bai and Silverstein, Spectral Analysis of Large Dimensional Random Matrices, 2nd ed., Chapter 5, §5.2"
      url: "https://ndl.ethernet.edu.et/bitstream/123456789/60805/1/140.pdf"
---

## Statement

For each positive integer $n$, let $X_n\in\mathbb R^{n\times p_n}$ have mutually independent entries with one common law of mean zero, variance one, and finite fourth moment, and suppose $p_n/n\to\gamma\in(0,\infty)$. For $S_n=X_n^{\mathsf T}X_n/n$, the largest eigenvalue satisfies
$$\lambda_{\max}(S_n)\longrightarrow(1+\sqrt\gamma)^2\quad\text{almost surely}.$$

## Statement references

Yin, Bai, and Krishnaiah, Theorem 3.1 and §4, printed pp. 517–520 ([complete paper PDF](https://link.springer.com/content/pdf/10.1007/BF00353874.pdf)).

Bai and Silverstein, Theorem 5.10, printed pp. 105–112 ([complete book PDF](https://ndl.ethernet.edu.et/bitstream/123456789/60805/1/140.pdf)).

## Proof status

The SVD reduction for $S_n=X_n^{\mathsf T}X_n/n$ is $\lambda_{\max}(S_n)=\|X_n/\sqrt n\|_{\mathrm{op}}^2$. Combining [[lem-largest-sample-covariance-eigenvalue-upper-bound]] and [[lem-largest-sample-covariance-eigenvalue-lower-bound]] would give the asserted limit, but neither supplier has a complete local proof. The plan's warning rules out replacing the missing lower-bound proof with the MP weak-convergence argument.
