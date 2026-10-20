---
id: lem-largest-sample-covariance-eigenvalue-upper-bound
kind: lemma
title: "Finite-fourth-moment upper bound for the largest sample-covariance eigenvalue"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-sample-covariance-empirical-spectral-distribution
  - thm-singular-value-decomposition
  - thm-operator-norm-is-the-largest-singular-value
  - cor-first-borel-cantelli-lemma-for-events
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

Let $X_n\in\mathbb R^{n\times p_n}$ have mutually independent entries with one common law of mean zero, variance one, and finite fourth moment, and suppose $p_n/n\to\gamma\in(0,\infty)$. For $S_n=X_n^{\mathsf T}X_n/n$, with $b_\gamma=(1+\sqrt\gamma)^2$, the upper-edge bound is
$$\limsup_{n\to\infty}\lambda_{\max}(S_n)\le b_\gamma\quad\text{almost surely}.$$

## Statement references

Yin, Bai, and Krishnaiah, Theorem 3.1 and its high-moment proof in §4, printed pp. 517–520 ([complete paper PDF](https://link.springer.com/content/pdf/10.1007/BF00353874.pdf)).

Bai and Silverstein, Theorem 5.10, printed pp. 105–112 ([complete book PDF](https://ndl.ethernet.edu.et/bitstream/123456789/60805/1/140.pdf)).

## Proof status

The definitions [[def-sample-covariance-empirical-spectral-distribution]], [[thm-singular-value-decomposition]], and [[thm-operator-norm-is-the-largest-singular-value]] reduce the claim to $\limsup_n\|X_n\|_{\mathrm{op}}/\sqrt n\le1+\sqrt\gamma$. The complete high-moment proof in Yin, Bai, and Krishnaiah, §4, uses truncation, graph-count estimates, and a Borel–Cantelli step that have not been reconstructed as local lemmas in this draft. No proof of the upper-edge estimate is claimed; the item is escalated for that missing derivation.
