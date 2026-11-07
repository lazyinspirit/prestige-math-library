---
id: thm-jarnik-besicovitch-dimension-for-linear-forms
kind: theorem
title: "Jarník–Besicovitch dimension formula for systems of linear forms"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 10
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-khintchine-groshev-matrix-approximation-set
  - def-hausdorff-dimension-function-and-gauge-measure
  - thm-khintchine-groshev-hausdorff-measure-zero-full-law
  - thm-khintchine-groshev-zero-full-law
  - def-countable-choice
  - def-hausdorff-dimension
  - cor-euclidean-hausdorff-dimension
proof_strategy: direct
sources:
  references:
    - title: "Allen and Beresnevich, A Mass Transference Principle for Systems of Linear Forms and Its Applications, Corollary 1"
      url: "https://arxiv.org/pdf/1703.10015v2"
      locator: "Corollary 1, homogeneous dimension formula"
    - title: "Beresnevich and Velani, The dimension of well approximable numbers, §2.2"
      url: "https://eprints.whiterose.ac.uk/id/eprint/231801/8/Journal_of_London_Math_Soc_-_2026_-_Beresnevich_-_The_dimension_of_well_approximable_numbers.pdf"
      locator: "higher-dimensional homogeneous formula"
---

## Statement

Assume the Axiom of Countable Choice. Let $n,m\ge1$ with $nm>1$, and let $W_{n,m}(\tau)$ consist of matrices $X\in[0,1]^{n\times m}$ such that $\|qX+p\|_\infty<\|q\|_\infty^{-\tau}$ for infinitely many $q\in\mathbb Z^n\setminus\{0\}$ and $p\in\mathbb Z^m$. Then

$$\dim_H W_{n,m}(\tau)=\begin{cases}nm,&0<\tau\le n/m,\\[2pt]m(n-1)+\dfrac{n+m}{\tau+1},&\tau\ge n/m.\end{cases}$$

The formulas agree at $\tau=n/m$; the case $n=m=1$ is excluded and is covered by the separate line theorem.

## Statement references

[Allen and Beresnevich, *A Mass Transference Principle for Systems of Linear Forms and Its Applications*, Corollary 1](https://arxiv.org/pdf/1703.10015v2)

[Beresnevich and Velani, *The dimension of well approximable numbers*, §2.2](https://eprints.whiterose.ac.uk/id/eprint/231801/8/Journal_of_London_Math_Soc_-_2026_-_Beresnevich_-_The_dimension_of_well_approximable_numbers.pdf)

## Facts & Assumptions

**Given:** Countable Choice, the homogeneous matrix convention, and the Hausdorff Khintchine–Groshev law.

[A1] Countable Choice is assumed by the Hausdorff measure and Lebesgue suppliers. ([[def-countable-choice]])

[F1] For the power gauge $f_s(r)=r^s$, the associated $g_s(r)=r^{-m(n-1)}f_s(r)$ is a dimension function whenever $s>m(n-1)$. ([[def-hausdorff-dimension-function-and-gauge-measure]])

[F2] The Hausdorff Khintchine–Groshev statement has series $\sum_q q^{n+m-1}g_s(\psi(q)/q)$; both its convergence cover and divergence transfer are proved locally. ([[thm-khintchine-groshev-hausdorff-measure-zero-full-law]])

[F3] For $nm>1$, the homogeneous Lebesgue theorem gives full measure for arbitrary $\psi$ when $\sum_q q^{n-1}\psi(q)^m=\infty$. ([[thm-khintchine-groshev-zero-full-law]])

## Proof

1.1 For $\psi(q)=q^{-\tau}$ and $s>m(n-1)$, the Hausdorff series in [F2] is
$$\sum_q q^{n+m-1}\left(q^{-(\tau+1)}\right)^{s-m(n-1)}=\sum_q q^{n+m-1-(\tau+1)(s-m(n-1))}.$$
It converges for $s>m(n-1)+(n+m)/(\tau+1)$ and diverges when $s$ is below that threshold. [F1, F2, algebra]

1.2 If $0<\tau<n/m$, the Lebesgue Khintchine–Groshev series is $\sum_q q^{n-1-m\tau}$, which diverges because $n-1-m\tau>-1$. By [A1] and [F3], $W_{n,m}(\tau)$ has full Lebesgue measure and hence Hausdorff dimension $nm$. The ambient cube gives the matching upper bound. [A1, F3, algebra]

2.1 If $\tau>n/m$, the convergence branch of [F2] gives the upper dimension bound $m(n-1)+(n+m)/(\tau+1)$. The lower bound follows from the divergent branch of [F2] for each $m(n-1)<s<m(n-1)+(n+m)/(\tau+1)$; its full power-gauge measure is infinite for these exponents, which are below the ambient dimension. At the boundary $\tau=n/m$, [F3] already gives full Lebesgue measure because the series is harmonic, so the dimension is $nm$. [A1, F2, F3, step 1.1, algebra]

3.1 For $\tau>n/m$, step 2.1 gives both bounds with threshold $m(n-1)+(n+m)/(\tau+1)$. Approaching it from exponents strictly above $m(n-1)$ is sufficient for the dimension lower bound. The critical and lower-exponent cases follow from steps 2.1 and 1.2. These cover every approved $\tau>0$ and prove the piecewise formula. [F2, step 2.1, step 1.2, algebra] ∎
