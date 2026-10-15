---
id: thm-uniform-distribution-integrates-riemann-functions
kind: theorem
title: "Uniform distribution integrates Riemann-integrable functions"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-star-discrepancy-and-digital-net
  - def-multidimensional-grid-partition
  - def-multidimensional-darboux-sums
  - thm-multidimensional-riemann-criterion
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Art B. Owen, Monte Carlo Book: The Quasi-Monte Carlo Parts, Chapter 15 §15.4, Theorem 15.3"
      url: "https://artowen.su.domains/mc/qmcstuff.pdf"
    - title: "Harald Niederreiter, Random Number Generation and Quasi-Monte Carlo Methods, Chapter 2 §2.1"
      url: "https://www.ricam.oeaw.ac.at/files/people/siambook_nied.pdf"
---

## Statement

Let $(x_n)_{n\ge0}$ be any sequence in $[0,1)^d$ such that
$$D_N^*(x_0,\ldots,x_{N-1})\longrightarrow0\qquad(N\to\infty).$$
Then for every bounded Riemann-integrable $f:[0,1]^d\to\mathbb R$,
$$\frac1N\sum_{n=0}^{N-1}f(x_n)\longrightarrow I_d(f).$$
Here $D_N^*$ and $I_d$ have the conventions of [[def-star-discrepancy-and-digital-net]].

## Facts & Assumptions
**Given:** A sequence with star discrepancy tending to zero and a bounded Riemann-integrable function on the cube.

[F1] Star discrepancy is the supremum of the empirical-minus-volume error over all anchored boxes $\prod_j[0,u_j)$, with $u\in[0,1]^d$. ([[def-star-discrepancy-and-digital-net]])

[F2] A coordinate grid partitions the cube into finitely many rectangular cells; the lower and upper Darboux sums are the sums of cell infima and suprema times cell volumes. ([[def-multidimensional-grid-partition]], [[def-multidimensional-darboux-sums]])

[F3] Riemann integrability is equivalent to the existence, for every positive tolerance, of a grid with Darboux gap below that tolerance; the integral lies between every lower and upper sum. ([[thm-multidimensional-riemann-criterion]])

## Proof

1.1 Fix $\varepsilon>0$. By [F3], choose a finite grid $G$ with $U(f,G)-L(f,G)<\varepsilon/2$. For each closed grid cell $R_k=\prod_j[t_{j,k_j},t_{j,k_j+1}]$, write $m_k=\inf_{R_k}f$ and $M_k=\sup_{R_k}f$; assign empirical points using the disjoint half-open cells $C_k=\prod_j[t_{j,k_j},t_{j,k_j+1})$. The empirical frequency error of $C_k$ is the alternating sum of the anchored-box errors at its $2^d$ vertices, by inclusion–exclusion; hence $\left|N^{-1}\#\{n<N:x_n\in C_k\}-\operatorname{vol}(C_k)\right|\le2^dD_N^*$. [F1, F2, F3, algebra]

2.1 Summing $m_k\le f(x_n)\le M_k$ over the cells and using step 1.1 gives $L(f,G)-2^dD_N^*\sum_k|m_k|\le N^{-1}\sum_{n<N}f(x_n)\le U(f,G)+2^dD_N^*\sum_k|M_k|$. The grid is fixed and finite, so both finite sums of absolute extrema are finite. For all sufficiently large $N$, the two discrepancy terms are less than $\varepsilon/2$. Since $I_d(f)$ lies between $L(f,G)$ and $U(f,G)$ by [F3], the empirical average is within $\varepsilon$ of $I_d(f)$. [F2, F3, step 1.1, algebra]

3.1 As $\varepsilon>0$ was arbitrary, the empirical averages converge to $I_d(f)$. [step 2.1] ∎
