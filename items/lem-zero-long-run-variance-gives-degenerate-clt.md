---
id: lem-zero-long-run-variance-gives-degenerate-clt
kind: lemma
title: Zero covariance long-run variance gives a degenerate CLT under absolute summability
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-moments-variance-and-covariance
  - def-l-p-space-as-a-quotient-by-null-functions
  - def-mixing-coefficients-for-stationary-markov-chain
  - thm-lp-convergence-implies-convergence-in-probability
  - thm-convergence-in-probability-implies-convergence-in-distribution
  - thm-dominated-convergence
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Galin L. Jones, On the Markov Chain Central Limit Theorem, §4.1"
      url: "https://arxiv.org/pdf/math/0409112"
    - title: "Charles J. Geyer, Markov Chain Monte Carlo Lecture Notes, §4.8"
      url: "https://www.stat.umn.edu/geyer/f05/8931/n1998.pdf"
axiom_use: "No choice principle is used; only a finite covariance expansion and absolute summability are used."
---

## Statement

Let $(Y_k)_{k\ge0}$ be a centered, strictly stationary, square-integrable real process ([[def-l-p-space-as-a-quotient-by-null-functions]]), and put $\gamma_k=\operatorname{Cov}(Y_0,Y_k)$. If $\sum_{k\ge1}|\gamma_k|<\infty$ and
$$\gamma_0+2\sum_{k=1}^{\infty}\gamma_k=0,$$
then $n^{-1/2}\sum_{k=1}^nY_k\to0$ in $L^2$ and hence in distribution to $N(0,0)$.

## Facts & Assumptions

**Given:** A centered strictly stationary real process with finite second moment and the stated covariance hypotheses.

[F1] Variance is the centered second moment and covariance is the centered product expectation. ([[def-moments-variance-and-covariance]])

[F2] Strict stationarity makes every covariance depend only on the lag. ([[def-mixing-coefficients-for-stationary-markov-chain]])

[F3] Convergence in $L^2$ implies convergence in probability. ([[thm-lp-convergence-implies-convergence-in-probability]])

[F4] Convergence in probability to a constant implies convergence in distribution to its point-mass law. ([[thm-convergence-in-probability-implies-convergence-in-distribution]])

[F5] Dominated convergence applies to a series indexed by counting measure when its terms have a summable majorant. ([[thm-dominated-convergence]])

## Proof
1.1 Expanding the finite square of $S_n:=\sum_{k=1}^nY_k$ and using centering and [F2] gives $\displaystyle \frac1n\operatorname{Var}(S_n)=\gamma_0+2\sum_{k=1}^{n-1}\left(1-\frac{k}{n}\right)\gamma_k.$ For each fixed $k$, the weight tends to $1$ and its absolute value is at most $1$. The summable sequence $|\gamma_k|$ dominates the summands, so [F5] gives $n^{-1}\operatorname{Var}(S_n)\to\gamma_0+2\sum_{k\ge1}\gamma_k=0$. [F1, F2, F5, given]

2.1 Since $\mathbb E[S_n]=0$, step 1.1 gives $\mathbb E[(S_n/\sqrt n)^2]=n^{-1}\operatorname{Var}(S_n)\to0$. This is convergence to zero in $L^2$; [F3] gives convergence in probability, and [F4] gives convergence in distribution to the point mass at zero, namely $N(0,0)$. [F1, F3, F4, step 1.1] ∎
