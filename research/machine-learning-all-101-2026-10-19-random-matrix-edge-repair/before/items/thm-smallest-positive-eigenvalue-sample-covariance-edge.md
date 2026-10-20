---
id: thm-smallest-positive-eigenvalue-sample-covariance-edge
kind: theorem
title: "Almost-sure limit and structural-zero count at the lower sample-covariance edge"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-sample-covariance-empirical-spectral-distribution
  - thm-bai-yin-smallest-singular-value-limits
  - thm-singular-value-decomposition
  - cor-rank-equals-number-of-nonzero-singular-values
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - def-identically-distributed-and-iid-random-variables
  - cor-first-borel-cantelli-lemma-for-events
proof_strategy: direct
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Bai and Yin, Limit of the Smallest Eigenvalue of a Large-Dimensional Sample Covariance Matrix, official publication record"
      url: "https://doi.org/10.1214/aop/1176989118"
    - title: "Bai and Silverstein, Spectral Analysis of Large Dimensional Random Matrices, 2nd ed., Theorem 5.11"
      url: "https://ndl.ethernet.edu.et/bitstream/123456789/60805/1/140.pdf"
---

## Statement

For each positive integer $n$, let $X_n\in\mathbb R^{n\times p_n}$ have mutually independent entries with one common law of mean zero, variance one, and finite fourth moment, and suppose $p_n/n\to\gamma\in(0,\infty)$. Set $S_n=X_n^{\mathsf T}X_n/n$ and let $\lambda_{\min}^{+}(S_n)$ denote its smallest positive eigenvalue whenever one exists. If $\gamma<1$, then almost surely $X_n$ has full column rank for all sufficiently large $n$, so $S_n$ has no zero eigenvalues eventually and $\lambda_{\min}(S_n)\to(1-\sqrt\gamma)^2$. If $\gamma>1$, then almost surely $X_n$ has full row rank for all sufficiently large $n$, so $S_n$ has exactly $p_n-n$ zero eigenvalues and $\lambda_{\min}^{+}(S_n)\to(\sqrt\gamma-1)^2$. If $\gamma=1$, then almost surely $\lambda_{\min}^{+}(S_n)\to0$.

## Statement references

Bai and Yin, Theorem 1, official publication record; the full paper was not retrievable ([publication record](https://doi.org/10.1214/aop/1176989118)).

Bai and Silverstein, Theorem 5.11, printed pp. 112–113 ([complete book PDF](https://ndl.ethernet.edu.et/bitstream/123456789/60805/1/140.pdf)).

## Proof status

By [[thm-singular-value-decomposition]], the positive eigenvalues of $S_n$ are the squares of the positive singular values of $X_n$, divided by $n$. The number of positive eigenvalues equals $\operatorname{rank}(X_n)$ by [[cor-rank-equals-number-of-nonzero-singular-values]]; the real spectral theorem then gives zero multiplicity $p_n-\operatorname{rank}(X_n)$. The unresolved supplier [[thm-bai-yin-smallest-singular-value-limits]] would yield the three edge limits and off-square full-rank cases. For $\gamma=1$, $S_n=0$ exactly when $X_n=0$, which has probability $q^{np_n}$ for $q=\Pr(\xi=0)<1$ by [[def-identically-distributed-and-iid-random-variables]]; this is summable because $p_n/n\to\gamma>0$, so [[cor-first-borel-cantelli-lemma-for-events]] makes $\lambda_{\min}^{+}(S_n)$ defined eventually. The Bai–Yin supplier remains unresolved, so this item is escalated.
