---
id: thm-bai-yin-smallest-singular-value-limits
kind: theorem
title: "Bai–Yin lower singular-value limits and eventual rectangular full rank"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-identically-distributed-and-iid-random-variables
  - def-sample-covariance-empirical-spectral-distribution
  - thm-singular-value-decomposition
  - cor-rank-equals-number-of-nonzero-singular-values
proof_strategy: direct
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Bai and Yin, Limit of the Smallest Eigenvalue of a Large-Dimensional Sample Covariance Matrix, Theorem 1"
      url: "https://doi.org/10.1214/aop/1176989118"
    - title: "Bai and Silverstein, Spectral Analysis of Large Dimensional Random Matrices, 2nd ed., Theorem 5.11"
      url: "https://ndl.ethernet.edu.et/bitstream/123456789/60805/1/140.pdf"
---

## Statement

For each positive integer $n$, let $X_n\in\mathbb R^{n\times p_n}$ have mutually independent entries with one common law of mean zero, variance one, and finite fourth moment, and suppose $p_n/n\to\gamma\in(0,\infty)$. Let $s_{r_n}(X_n)$ be the smallest among the $r_n:=\min(n,p_n)$ singular values, counting zero values. Then, almost surely: if $\gamma<1$, $s_{r_n}(X_n)/\sqrt n\to1-\sqrt\gamma$, so $X_n$ has full column rank for all sufficiently large $n$; if $\gamma>1$, $s_{r_n}(X_n)/\sqrt n\to\sqrt\gamma-1$, so $X_n$ has full row rank for all sufficiently large $n$; and if $\gamma=1$, the smallest positive singular value divided by $\sqrt n$ tends to zero on any sequence for which it is eventually defined.

## Statement references

Bai and Yin, Theorem 1, official publication record; the complete paper was not retrieved ([publication record](https://doi.org/10.1214/aop/1176989118)).

Bai and Silverstein, Theorem 5.11, printed pp. 112–113 ([complete book PDF](https://ndl.ethernet.edu.et/bitstream/123456789/60805/1/140.pdf)).

## Proof status

This theorem statement is an unresolved supplier interface from the controlling plan, not an accepted proof. The official Bai–Yin full text was inaccessible after the recorded initial failure and five recovery attempts. The retrieved Bai–Silverstein Theorem 5.11 is not a plan-compatible substitute: its proof uses the Marchenko–Pastur weak limit for reverse edge bounds, and its cited Appendix Lemma B.25 has a nonsummable endpoint at the $\beta=1$ value used in Theorem 5.10. The lower-edge and eventual full-rank claims require a complete source proof or a separately proved local substitute.
