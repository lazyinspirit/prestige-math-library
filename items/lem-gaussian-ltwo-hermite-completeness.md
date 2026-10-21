---
id: lem-gaussian-ltwo-hermite-completeness
kind: lemma
title: Completeness of normalized probabilists’ Hermite polynomials in Gaussian L²
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - cor-cauchy-schwarz-for-random-variables
  - cor-uniqueness-of-the-l-one-fourier-transform
  - def-axiom-of-choice
  - def-complex-exponential
  - def-fourier-transform-on-l-one-of-rn
  - def-monic-probabilists-hermite-polynomials
  - def-standard-normal-and-normal-laws
  - lem-ac-supplies-sequential-choices-for-probability-constructions
  - lem-complex-lp-completeness-density-and-inner-product
  - lem-complex-exponential-series-converges-everywhere
  - lem-hermite-orthogonality-and-monomial-expansion
  - lem-l-one-fourier-transform-is-well-defined
  - lem-standard-normal-fourth-moment
  - thm-dominated-convergence
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Arthur Jacot, Franck Gabriel, and Clément Hongler, Neural Tangent Kernel: Convergence and Generalization in Neural Networks"
      url: "https://arxiv.org/pdf/1806.07572"
      locator: "Appendix A.4, printed pp. 16–18; the Hermite expansion step used for sphere positivity"
    - title: "MIT OpenCourseWare 18.102, Introduction to Functional Analysis, Lecture 24"
      url: "https://ocw.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2009/1826dc6d058501cc8fb679d7db07a785_MIT18_102s09_lec24.pdf"
      locator: "Complete five-page lecture note, printed pp. 140–143; completeness of the unweighted Hermite-function basis, read as an independent related treatment"
---

## Statement

Assume AC. Let $\gamma$ be the standard Gaussian probability measure on $\mathbb R$ with density $\phi(x)=(2\pi)^{-1/2}e^{-x^2/2}$, let $H_m$ be the monic probabilists’ Hermite polynomial defined by $H_0=1$, $H_1(x)=x$, and $H_{m+1}(x)=xH_m(x)-mH_{m-1}(x)$, and put $h_m=H_m/\sqrt{m!}$. Then $(h_m)_{m\ge0}$ is a complete orthonormal basis of real $L^2(\gamma)$. Every $f\in L^2(\gamma)$ has the norm-convergent expansion $f=\sum_{m\ge0}a_mh_m$, where $a_m=\int f h_m\,d\gamma$, and $\sum_{m\ge0}a_m^2=\|f\|_{L^2(\gamma)}^2$. If $f$ is continuous and nonpolynomial, then $a_m\ne0$ for an unbounded set of indices $m$. Every globally Lipschitz real function belongs to $L^2(\gamma)$, so this conclusion applies to every globally Lipschitz nonpolynomial activation.

## Statement references

[Jacot, Gabriel, and Hongler, Appendix A.4, Hermite expansion used in the sphere-positivity argument](https://arxiv.org/pdf/1806.07572)

[MIT 18.102 Lecture 24, completeness of the Hermite-function basis (related treatment; the local proof below uses Gaussian Fourier uniqueness)](https://ocw.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2009/1826dc6d058501cc8fb679d7db07a785_MIT18_102s09_lec24.pdf)

## Facts & Assumptions

**Given:** AC; the standard Gaussian measure $\gamma$; the monic probabilists’ Hermite polynomials $H_m$ and their normalized versions $h_m$.

[A1] AC is the axiom that every family of nonempty sets has a choice function ([[def-axiom-of-choice]]). It supplies countable choice for the Fourier uniqueness and $L^2$ completeness interfaces ([[lem-ac-supplies-sequential-choices-for-probability-constructions]]).

[F1] The standard Gaussian measure has Lebesgue density $(2\pi)^{-1/2}e^{-x^2/2}$ ([[def-standard-normal-and-normal-laws]]).

[F2] The $H_m$ are monic of degree $m$, orthogonal under $Z\sim N(0,1)$ with $\mathbb E[H_m(Z)H_n(Z)]=m!\,\delta_{mn}$, and span the polynomials degree by degree ([[def-monic-probabilists-hermite-polynomials]], [[lem-hermite-orthogonality-and-monomial-expansion]]).

[F3] Complex $L^2$ is complete under countable choice, and $C_c^\infty(\mathbb R)$ is dense in Lebesgue $L^2(\mathbb R)$ ([[lem-complex-lp-completeness-density-and-inner-product]]).

[F4] With the convention $\widehat v(\xi)=\int_{\mathbb R}v(x)e^{-2\pi i x\xi}\,dx$, the $L^1$ Fourier transform is well-defined and is unique: equal transforms of two $L^1$ functions imply equality almost everywhere ([[def-fourier-transform-on-l-one-of-rn]], [[lem-l-one-fourier-transform-is-well-defined]], [[cor-uniqueness-of-the-l-one-fourier-transform]]).

[F5] The complex exponential is its everywhere-convergent power series ([[def-complex-exponential]], [[lem-complex-exponential-series-converges-everywhere]]).

[F6] For square-integrable real random variables, $\mathbb E|XY|\le(\mathbb E X^2)^{1/2}(\mathbb E Y^2)^{1/2}$ ([[cor-cauchy-schwarz-for-random-variables]]).

[F7] Pointwise convergence under one integrable majorant permits passage of integrals to the limit ([[thm-dominated-convergence]]).

[F8] A standard normal variable has finite second moment ([[lem-standard-normal-fourth-moment]]).

## Proof
**Proof technique:** direct.

1.1 Let $r\in L^2(\gamma)$ be orthogonal to every $h_m$. Each monomial $x^j$ is a finite linear combination of $H_0,\ldots,H_j$ by [F2], and each fixed polynomial is square-integrable under $\gamma$ because a polynomial times $e^{-x^2/2}$ has an integrable tail. Therefore $\int r(x)x^j\,d\gamma(x)=0$ for every $j\ge0$. [A1, F2, given]

1.2 Put $v(x)=r(x)\phi(x)$, so $v\in L^1(\mathbb R)$ by [F1] and [F6]. For every $a\ge0$, Cauchy–Schwarz and completion of the square give $\int |r(x)|e^{a|x|}\,d\gamma(x)\le\|r\|_2(\int e^{2a|x|}\,d\gamma)^{1/2}<\infty$, since each half-line integral is at most $e^{2a^2}$. [given, F1, F6]

2.1 Fix $\xi\in\mathbb R$. The partial sums $S_M(x)=\sum_{j=0}^M(-2\pi i\xi x)^j/j!$ converge pointwise to $e^{-2\pi i\xi x}$ and satisfy $|S_M(x)|\le e^{2\pi|\xi||x|}$ by [F5]. Applying [F7] with the integrable majorant from step 1.2 gives $\widehat v(\xi)=\lim_{M\to\infty}\int r(x)S_M(x)\,d\gamma(x)=0$, because every term is a scalar multiple of a zero moment from step 1.1. [F5, F7, step 1.1, step 1.2]

3.1 By [F4], $\widehat v=0$ implies $v=0$ Lebesgue-almost everywhere. Since $\phi(x)>0$ for all $x$, $r=0$ $\gamma$-almost everywhere. Thus the only $L^2(\gamma)$ function orthogonal to all the $h_m$ is zero. [A1, F4, step 2.1]

4.1 For arbitrary real $f\in L^2(\gamma)$, set $a_m=\int f h_m\,d\gamma$ and $S_M=\sum_{m=0}^M a_mh_m$. Orthogonality in [F2] gives $\|f-S_M\|_2^2=\|f\|_2^2-\sum_{m=0}^M a_m^2\ge0$ and, for $M>K$, $\|S_M-S_K\|_2^2=\sum_{K<m\le M}a_m^2$; hence the partial sums are Cauchy. View them in complex $L^2(\gamma)$; by [F3] and [A1] they converge there, and their limit is real because every $S_M$ is real. The residual $f-S$ is orthogonal to each $h_m$, hence zero by step 3.1. Therefore $f=S$ in $L^2(\gamma)$ and taking norms yields Parseval’s identity. [A1, F2, F3, step 3.1]

5.1 If only finitely many $a_m$ are nonzero, step 4.1 makes $f$ equal almost everywhere to a polynomial $p$. If $f$ is continuous and differs from $p$ at some point, it differs on a nonempty open interval, which has positive $\gamma$ measure by [F1]; hence $f=p$ everywhere, contrary to nonpolynomiality. Thus a continuous nonpolynomial $f$ has unbounded coefficient support. A globally Lipschitz $f$ obeys $|f(x)|\le |f(0)|+L|x|$; [F8] gives $\int |x|^2\,d\gamma<\infty$, so this growth bound implies $f\in L^2(\gamma)$. [F1, F8, step 4.1] ∎
