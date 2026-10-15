---
id: thm-strong-mixing-clt-with-moment-conditions
kind: theorem
title: Strong-mixing CLTs under bounded, moment, and logarithmic-moment conditions
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
    - title: "Galin L. Jones, On the Markov Chain Central Limit Theorem, Theorems 5 and 6"
      url: "https://arxiv.org/pdf/math/0409112"
verification:
  precheck: n/a
axiom_use: "The imported strong-mixing limit theorems make no additional choice claim in this statement."
---

## Statement

Let $(Y_k)_{k\ge0}$ be a centered strictly stationary real sequence with $\mathbb E[Y_0^2]<\infty$, and define $S_n=\sum_{k=1}^nY_k$. Either of the following is sufficient:

1. There is $B<\infty$ with $|Y_0|\le B$ almost surely and $\sum_{n\ge1}n\alpha_Y(n)<\infty$.
2. For some $\delta>0$, $\mathbb E|Y_0|^{2+\delta}<\infty$ and $\sum_{n\ge1}\alpha_Y(n)^{\delta/(2+\delta)}<\infty$.
3. For some $a\in(0,1)$, $\alpha_Y(n)=O(a^n)$ and $\mathbb E[Y_0^2\log^+|Y_0|]<\infty$, where $\log^+u=\max(0,\log u)$ for $u>0$ and $0\log^+0:=0$.

In each case the covariance series
$$\sigma_Y^2:=\mathbb E[Y_0^2]+2\sum_{k=1}^{\infty}\operatorname{Cov}(Y_0,Y_k)$$
converges absolutely and is nonnegative. If $\sigma_Y^2>0$, then
$$n^{-1/2}S_n\Rightarrow N(0,\sigma_Y^2).$$
If $\sigma_Y^2=0$, [[lem-zero-long-run-variance-gives-degenerate-clt]] gives the same convergence to the degenerate law $N(0,0)$.

## Proof status

The cited source states the nondegenerate CLTs and absolute covariance convergence but defers their proofs to classical strong-mixing limit theorems. No complete local proof of those limit theorems is supplied in this batch; their proof arguments remain an owner escalation. The separate local lemma handles the degenerate-variance reduction and does not close that missing proof.
