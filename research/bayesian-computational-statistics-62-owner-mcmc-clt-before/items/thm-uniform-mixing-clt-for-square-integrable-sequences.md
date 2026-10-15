---
id: thm-uniform-mixing-clt-for-square-integrable-sequences
kind: theorem
title: A uniform-mixing CLT for square-integrable stationary sequences
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - def-mixing-coefficients-for-stationary-markov-chain
  - def-moments-variance-and-covariance
  - lem-zero-long-run-variance-gives-degenerate-clt
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Galin L. Jones, On the Markov Chain Central Limit Theorem, Theorem 8"
      url: "https://arxiv.org/pdf/math/0409112"
verification:
  precheck: n/a
axiom_use: "The imported uniform-mixing limit theorem makes no additional choice claim in this statement."
---

## Statement

Let $(Y_k)_{k\ge0}$ be a centered strictly stationary real sequence with $\mathbb E[Y_0^2]<\infty$. If
$$\sum_{n=1}^{\infty}\sqrt{\phi_Y(n)}<\infty,$$
then the covariance series
$$\sigma_Y^2:=\mathbb E[Y_0^2]+2\sum_{k=1}^{\infty}\operatorname{Cov}(Y_0,Y_k)$$
converges absolutely and is nonnegative. If $\sigma_Y^2>0$, then for $S_n=\sum_{k=1}^nY_k$,
$$n^{-1/2}S_n\Rightarrow N(0,\sigma_Y^2).$$
If $\sigma_Y^2=0$, [[lem-zero-long-run-variance-gives-degenerate-clt]] gives the degenerate normal limit.

## Proof status

The cited theorem supplies the nondegenerate CLT and absolute covariance convergence. The complete proof is not supplied locally; this imported uniform-mixing theorem remains an owner escalation. The zero-variance reduction is recorded separately and does not replace that proof.
