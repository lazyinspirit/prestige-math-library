---
id: thm-tikhonov-source-condition-rate-and-qualification-saturation
kind: theorem
title: Tikhonov source-condition rates balance noise at qualification one
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
provenance:
  statement: ai-altered
  proof: ai-altered
dependency_level: 3
deps:
  - def-countable-choice
  - def-compact-spectral-filter-and-qualification
  - lem-tikhonov-source-condition-bias-bound
  - lem-hilbert-tikhonov-noise-amplification-bound
  - lem-finite-rank-operators-are-compact
  - thm-norm-limit-of-compact-operators-is-compact
  - def-square-summable-family-on-an-arbitrary-index-set
  - lem-square-summable-sequences-form-a-hilbert-space
aliases: []
proof_strategy: direct
sources:
  references:
    - title: "Guido Clason, Regularization of Inverse Problems, full lecture notes"
      url: https://imsc.uni-graz.at/clason/preprints/InverseNotes.pdf
      locator: Chapter 6, Corollaries 6.1–6.2 and saturation discussion, PDF pp. 56–58; the exponent here is for powers of A*A.
    - title: "Per Christian Hansen, Introduction to Inverse Problems, Chapter 5: Regularization Parameter Choice"
      url: https://people.compute.dtu.dk/pcha/DIP/chap5.pdf
      locator: Complete 27-slide chapter; slides 4–6 give the bias/noise split and parameter tradeoff.
---

## Statement

Assume Countable Choice. Let $A:X\to Y$ be compact between real or complex
Hilbert spaces and let $x^\dagger=S^\nu w$ with $S=A^*A$,
$0<\nu\le1$, and $\|w\|\le R$. For data $y_\delta=Ax^\dagger+e$ with
$\|e\|\le\delta$, the Tikhonov solution satisfies, for every $\lambda>0$,
$$\|x_\lambda^\delta-x^\dagger\| \le R\lambda^\nu+\frac{\delta}{2\sqrt\lambda}.$$
For $R,\delta>0$, choosing
$$\lambda=(\delta/R)^{2/(2\nu+1)}$$
gives
$$\|x_\lambda^\delta-x^\dagger\| \le\frac32 R^{1/(2\nu+1)}\delta^{2\nu/(2\nu+1)}.$$
The qualification cannot exceed one uniformly over compact operators: for
every $\nu>1$ there is a compact injective diagonal operator and a unit source
vector for which the bias is not $O(\lambda^\nu)$.

## Facts & Assumptions

**Given:** Countable Choice, compact $A:X\to Y$, $S=A^*A$, a source representation $x^\dagger=S^\nu w$ with $0<\nu\le1$ and $\|w\|\le R$, data $y_\delta=Ax^\dagger+e$ with $\|e\|\le\delta$, and $\lambda>0$.

[A1] [[def-countable-choice]]: Countable Choice is the compact spectral theorem's choice assumption; the arguments use no full Choice.

[F1] [[lem-tikhonov-source-condition-bias-bound]]: The exact-data bias is at most $R\lambda^\nu$.

[F2] [[lem-hilbert-tikhonov-noise-amplification-bound]]: The data perturbation is amplified by at most $1/(2\sqrt\lambda)$.

[F3] [[def-compact-spectral-filter-and-qualification]]: The source condition uses $S^\nu=(A^*A)^\nu$ and the Tikhonov residual filter is $\lambda/(t+\lambda)$.

[F4] [[def-square-summable-family-on-an-arbitrary-index-set]]: The sequence space $\ell^2(\mathbb N,\mathbb R)$ has its canonical norm, inner product, and coordinate vectors.

[F5] [[lem-square-summable-sequences-form-a-hilbert-space]]: This real sequence space is complete.

[F6] [[lem-finite-rank-operators-are-compact]]: Every bounded finite-rank operator between normed spaces is compact.

[F7] [[thm-norm-limit-of-compact-operators-is-compact]]: A norm limit of compact operators into a Banach space is compact.

## Proof
1.1 Let $x_\lambda=(A^*A+\lambda I)^{-1}A^*Ax^\dagger$. By linearity, $x_\lambda^\delta-x^\dagger=(x_\lambda-x^\dagger)+R_\lambda e$. The triangle inequality, [F1], and [F2] give $$\|x_\lambda^\delta-x^\dagger\| \le R\lambda^\nu+\frac{\delta}{2\sqrt\lambda}.$$ [given, F1, F2, F3, algebra]

1.2 Fix $\nu>1$ and take $\mathbb N_+=\{1,2,\ldots\}$ and $X=Y=\ell^2(\mathbb N_+,\mathbb R)$ with standard unit vectors $e_n$. Relabelling coordinates by the bijection $k\mapsto k+1$ from $\mathbb N$ to $\mathbb N_+$ is an isometry from the complete space in [F5], so $X=Y$ is Hilbert. For $x=(x_n)\in\ell^2$, define $(Ax)_n=x_n/n$ and, for each $N\ge1$, define $(A_Nx)_n=x_n/n$ when $n\le N$ and $0$ otherwise. These are linear and bounded because $\|Ax\|_2^2\le\|x\|_2^2$ and $\|A_Nx\|_2^2\le\|x\|_2^2$; $A_N$ has range in $\operatorname{span}(e_1,\ldots,e_N)$. Also $\|(A-A_N)x\|_2^2=\sum_{n>N}n^{-2}|x_n|^2\le(N+1)^{-2}\|x\|_2^2$, with equality at $x=e_{N+1}$, so $\|A-A_N\|=1/(N+1)\to0$. By [F4]–[F7], $X=Y$ is Hilbert and $A$ is compact. Since every diagonal coefficient is positive, $A$ is injective; $Se_1=e_1$, so with $w=e_1$ the source target is $x^\dagger=S^\nu w=e_1$ and $\|w\|=1$. [A1, F4, F5, F6, F7, construct]

2.1 Substituting $\lambda=(\delta/R)^{2/(2\nu+1)}$ into the two terms in step 1.1 gives $R\lambda^\nu=R^{1/(2\nu+1)}\delta^{2\nu/(2\nu+1)}$ and $\delta/(2\sqrt\lambda)=\tfrac12R^{1/(2\nu+1)}\delta^{2\nu/(2\nu+1)}$. Their sum is the stated rate. [given, step 1.1, algebra]

3.1 For exact data $Ax^\dagger=e_1$, the first coordinate of the Tikhonov solution is $1/(1+\lambda)$ and all other coordinates are zero. Hence $\|x^\dagger-x_\lambda\|=\lambda/(1+\lambda)$, and $$\frac{\|x^\dagger-x_\lambda\|}{\lambda^\nu} =\frac{\lambda^{1-\nu}}{1+\lambda}\longrightarrow+\infty \quad(\lambda\downarrow0).$$ Thus no constant depending only on $\nu$ and the source radius can give an $O(R\lambda^\nu)$ bias bound uniformly for this compact-operator class when $\nu>1$. This proves saturation at qualification one. [F3, step 1.2, algebra] ∎
