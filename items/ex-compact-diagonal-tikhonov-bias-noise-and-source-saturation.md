---
id: ex-compact-diagonal-tikhonov-bias-noise-and-source-saturation
kind: example
title: A compact diagonal model displays the Tikhonov bias-noise balance
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
dependency_level: 4
deps:
  - thm-tikhonov-convergence-under-noise-parameter-coupling
  - thm-tikhonov-source-condition-rate-and-qualification-saturation
  - def-compact-spectral-filter-and-qualification
  - def-square-summable-family-on-an-arbitrary-index-set
  - lem-square-summable-sequences-form-a-hilbert-space
  - def-hilbert-space
  - def-countable-choice
  - lem-finite-rank-operators-are-compact
  - thm-norm-limit-of-compact-operators-is-compact
  - lem-hilbert-tikhonov-noise-amplification-bound
aliases: []
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Guido Clason, Regularization of Inverse Problems, full lecture notes"
      url: https://imsc.uni-graz.at/clason/preprints/InverseNotes.pdf
      locator: Chapter 6, Corollaries 6.1–6.2 and saturation discussion, PDF pp. 56–58; local coordinates use the $A^*A$ power convention.
    - title: "Per Christian Hansen, Introduction to Inverse Problems, Chapter 4: Regularization Methods"
      url: https://www2.compute.dtu.dk/~pcha/DIP/chap4.pdf
      locator: Complete 29-slide chapter; slides 16–18 give Tikhonov singular filters and slide 23 gives data perturbation amplification.
---

## Example

Assume Countable Choice and write $\mathbb N_+=\{1,2,\ldots\}$. Let $A$ be the compact diagonal map on
$\ell^2(\mathbb N_+,\mathbb R)$ given by
$Ae_n=n^{-1}e_n$. Fix $N\ge2$ and $0<\nu\le1$, take
$w=e_1+e_N$, source target $x^\dagger=(A^*A)^\nu w$, noise
$e=-N^{-(2\nu+1)}e_N$, and $\lambda=N^{-2}$. Then
$\|w\|=\sqrt2$, the noise level is $\delta=N^{-(2\nu+1)}$, and the
exact Tikhonov bias and filtered noise each contribute
$\tfrac12N^{-2\nu}$ in the $e_N$ direction. The total error is of order
$N^{-2\nu}$, while the balancing parameter is comparable to
$(\delta/\sqrt2)^{2/(2\nu+1)}$. The same operator also exhibits saturation:
for any $\mu>1$, the unit source $w=e_1$ gives $x^\dagger=e_1$ and exact-data
bias $\lambda/(1+\lambda)$, which is not $O(\lambda^\mu)$.

## Facts & Assumptions

**Given:** Countable Choice, the real sequence Hilbert space $\ell^2(\mathbb N_+,\mathbb R)$, its standard basis $(e_n)$, the diagonal map $Ae_n=n^{-1}e_n$, an integer $N\ge2$, an exponent $0<\nu\le1$, and the data and parameter in the Statement; for the separate saturation calculation, also fix any exponent $\mu>1$.

[F1] [[def-square-summable-family-on-an-arbitrary-index-set]]: The canonical sequence norm is $\|x\|_2^2=\sum_n|x_n|^2$, and $(e_n)$ is orthonormal.

[F2] [[lem-square-summable-sequences-form-a-hilbert-space]]: The real $\ell^2$ sequence space is complete.

[F3] [[def-hilbert-space]]: A complete real inner-product space is a real Hilbert space.

[F4] [[lem-finite-rank-operators-are-compact]]: Bounded finite-rank maps are compact.

[F5] [[thm-norm-limit-of-compact-operators-is-compact]]: A norm limit of compact operators into a Banach space is compact.

[F6] [[def-compact-spectral-filter-and-qualification]]: The source condition $S^\nu w$ and Tikhonov filter use $S=A^*A$ and $g_\lambda(t)=1/(t+\lambda)$.

[F7] [[lem-hilbert-tikhonov-noise-amplification-bound]]: The filtered noise norm is bounded by $\|e\|/(2\sqrt\lambda)$.

[F8] [[thm-tikhonov-source-condition-rate-and-qualification-saturation]]: For $0<\nu\le1$, source radius $R$ gives error bound $R\lambda^\nu+\delta/(2\sqrt\lambda)$.

## Verification
1.1 Relabelling coordinates by $k\mapsto k+1$ is an isometry from the complete space $\ell^2(\mathbb N,\mathbb R)$ in [F2] to $\ell^2(\mathbb N_+,\mathbb R)$, so the latter is Hilbert. For $M\ge1$, let $A_Me_n=n^{-1}e_n$ for $n\le M$ and $A_Me_n=0$ for $n>M$. Since $n^{-1}\le1$, both $A$ and $A_M$ are bounded by one, and $A_M$ has finite rank. Also $\|(A-A_M)x\|_2^2=\sum_{n>M}n^{-2}|x_n|^2\le (M+1)^{-2}\|x\|_2^2$, with equality at $x=e_{M+1}$. Thus $\|A-A_M\|=1/(M+1)\to0$. By [F3]–[F5], $A$ is a bounded compact operator on a Hilbert space. [given, F1, F2, F3, F4, F5, algebra]

1.2 For every $x\in\ell^2$, the coordinate inner product gives $\langle Ax,e_n\rangle=n^{-1}x_n=\langle x,n^{-1}e_n\rangle$, so the adjoint identity yields $A^*e_n=n^{-1}e_n$ and $Se_n=n^{-2}e_n$. Thus the source target is $x^\dagger=e_1+N^{-2\nu}e_N$. Its forward image is $y=e_1+N^{-(2\nu+1)}e_N$. The chosen noise cancels the $e_N$ datum, so $y_\delta=y+e=e_1$ and $\|e\|=\delta=N^{-(2\nu+1)}$. [given, F1, F6, algebra]

2.1 The Tikhonov filter applied to $y_\delta=e_1$ gives $x_\lambda^\delta=(1+\lambda)^{-1}e_1$. Hence $$x^\dagger-x_\lambda^\delta =\frac{\lambda}{1+\lambda}e_1+N^{-2\nu}e_N,$$ and, at $\lambda=N^{-2}$, $$\|x^\dagger-x_\lambda^\delta\|_2 =\sqrt{(N^2+1)^{-2}+N^{-4\nu}}.$$ The exact-data bias in the $e_N$ coordinate is $\lambda N^{-2\nu}/(N^{-2}+\lambda)=\tfrac12N^{-2\nu}$; the noise output in that coordinate is $(1/N)(N^{-2}+\lambda)^{-1}(-N^{-(2\nu+1)})=-\tfrac12N^{-2\nu}$. Their contributions to solution error add. [F6, step 1.2, algebra]

3.1 For $0<\nu\le1$, $N^{-2}\le N^{-2\nu}$, so the displayed error lies between $N^{-2\nu}$ and $\sqrt2N^{-2\nu}$. Also $\delta/(2\sqrt\lambda)=\tfrac12N^{-2\nu}$ and $$\left(\frac{\delta}{\sqrt2}\right)^{2/(2\nu+1)} =N^{-2}2^{-1/(2\nu+1)},$$ so the selected $\lambda=N^{-2}$ differs from the balancing value by a factor between $1$ and $2$. These exact coordinates exhibit the stated bias-noise balance. [F7, F8, step 1.2, step 2.1, algebra]

4.1 For the separate exponent $\mu>1$, take the unit source $w=e_1$. Since $Se_1=e_1$ by step 1.2, the source target is $x^\dagger=S^\mu w=e_1$ and the exact datum is $y=Ae_1=e_1$. For every $x$, $\langle Ax,e_1\rangle=x_1=\langle x,e_1\rangle$, so the adjoint identity gives $A^*e_1=e_1$. The Tikhonov solution is therefore $x_\lambda=(1+\lambda)^{-1}e_1$. Hence $$\frac{\|x^\dagger-x_\lambda\|}{\lambda^\mu}=\frac{\lambda^{1-\mu}}{1+\lambda}\longrightarrow+\infty\qquad(\lambda\downarrow0).$$ This unit source therefore has bias not $O(\lambda^\mu)$. [F1, F6, step 1.1, step 1.2, algebra] ∎
