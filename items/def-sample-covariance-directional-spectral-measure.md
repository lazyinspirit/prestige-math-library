---
id: def-sample-covariance-directional-spectral-measure
kind: definition
title: "Directional spectral measure of a Hermitian matrix"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - def-dirac-measure
  - prop-dirac-measure-is-a-probability-measure
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Z. D. Bai, B. Q. Miao, and G. M. Pan, On Asymptotics of Eigenvectors of Large Sample Covariance Matrix"
      url: "https://arxiv.org/pdf/0708.1720"
    - title: "Z. D. Bai and J. W. Silverstein, Spectral Analysis of Large Dimensional Random Matrices, 2nd ed."
      url: "https://ndl.ethernet.edu.et/bitstream/123456789/60805/1/140.pdf"
---

## Definition

For positive integers $d,N$, let $X\in\mathbb C^{d\times N}$ and let $T\in\mathbb C^{d\times d}$ be Hermitian positive semidefinite, meaning $T=T^*$ and $v^*Tv\ge0$ for every $v\in\mathbb C^d$. Let $T^{1/2}$ be its Hermitian positive semidefinite square root and set
$$A:=\frac1N T^{1/2}XX^*T^{1/2}.$$
For each distinct eigenvalue $\lambda$ of the Hermitian matrix $A$, let $P_\lambda$ be the orthogonal projection onto its eigenspace. The empirical spectral distribution of $A$, normalized by its dimension $d$, is
$$\mu_A:=\frac1d\sum_{\lambda\in\operatorname{spec}(A)}\operatorname{rank}(P_\lambda)\,\delta_\lambda,$$
where $\delta_\lambda$ is the unit point mass at $\lambda$.
For a deterministic unit vector $x\in\mathbb C^d$, its directional spectral measure is
$$\mu_A^x:=\sum_{\lambda\in\operatorname{spec}(A)}\|P_\lambda x\|_2^2\,\delta_\lambda.$$
For a Borel set $B\subseteq\mathbb R$, set $\mathbf1_B(A):=\sum_{\lambda\in B\cap\operatorname{spec}(A)}P_\lambda$; then $\mu_A^x(B)=x^*\mathbf1_B(A)x$. Both measures are supported on the nonnegative real axis.

## Definition references

Bai, Miao, and Pan, §1, printed pp. 7–8 ([full paper PDF](https://arxiv.org/pdf/0708.1720)).

Bai and Silverstein, Chapter 3, §§3.1–3.3, printed pp. 39–58 ([full book PDF](https://ndl.ethernet.edu.et/bitstream/123456789/60805/1/140.pdf)).

## Facts & Assumptions

**Given:** Positive integers $d,N$, the matrices and vector in the Definition, and the finite-dimensional spectral decomposition.

[F1] Every Hermitian matrix has real eigenvalues and mutually orthogonal eigenspace projections whose sum is the identity ([[thm-complex-spectral-theorem-for-normal-endomorphisms]]).

[F2] For each real $\lambda$, $\delta_\lambda$ is the unit Borel point mass at $\lambda$ ([[def-dirac-measure]]).

[F3] Each point mass $\delta_\lambda$ is a Borel probability measure ([[prop-dirac-measure-is-a-probability-measure]]).

## Verification

**Given:** The positive semidefinite matrix $T$, matrix $X$, and the definitions in the Definition.

1.1 By [F1], diagonalize $T=U\operatorname{diag}(t_1,\ldots,t_d)U^*$ with each $t_j\ge0$. Then $T^{1/2}:=U\operatorname{diag}(\sqrt{t_1},\ldots,\sqrt{t_d})U^*$ is Hermitian positive semidefinite. With $B=N^{-1/2}T^{1/2}X$, the matrix $A=BB^*$ is Hermitian and $v^*Av=\|B^*v\|_2^2\ge0$ for every $v$; hence all its eigenvalues are nonnegative. [given, F1, algebra]

2.1 Each displayed set function is a finite nonnegative linear combination of the point masses defined in [F2], which are Borel probability measures by [F3]; its coefficients are nonnegative because $\operatorname{rank}(P_\lambda)/d\ge0$ and $\|P_\lambda x\|_2^2\ge0$. Thus both are finite Borel measures. By step 1.1 their finite supports lie in $[0,\infty)$. [given, F2, F3, step 1.1, algebra] ∎

