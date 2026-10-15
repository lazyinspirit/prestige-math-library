---
id: def-negative-sobolev-space-for-white-noise
kind: definition
title: Logarithmic negative Sobolev spaces for white noise
status: published
origin: pipeline
deps:
  - def-hilbert-space
  - def-l-p-space-as-a-quotient-by-null-functions
  - def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: Castillo and Nickl, Nonparametric Bernstein–von Mises theorems in Gaussian white noise, Definition 2 and equations (7)–(8), printed pp. 2004–2006
      url: https://www.statslab.cam.ac.uk/~rn289/Site/__files/AOS1133.pdf
    - title: Giné and Nickl, Mathematical Foundations of Infinite-Dimensional Statistical Models, §7.3.4, printed pp. 594–595
      url: https://www.statslab.cam.ac.uk/~rn289/Site/__files/FULLPDF.pdf
dependency_level: 0
---

## Definition

Let $(\psi_{lk})$ be a countable complete orthonormal basis of the real Hilbert space $L^2([0,1])$ ([[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]], [[def-hilbert-space]], [[def-l-p-space-as-a-quotient-by-null-functions]]). For a wavelet basis, index levels by $l\ge0$, let $K_l$ have $2^l$ indices, and put $a_l=2^l$ for $l\ge1$ and $a_0=2$ for the finite coarsest level. This finite-level convention only prevents a zero logarithmic weight and does not change any convergence criterion below. For a trigonometric basis, use its integer frequency index $l$, bounded multiplicities, and $a_l=\max(2,|l|)$.

Here an **$S$-regular wavelet basis** means a wavelet orthonormal basis whose members are $S$ times differentiable, with each derivative through order $S$ in $L^2([0,1])$, following the source convention. The weak BvM theorem below only uses the basis's completeness, orthonormality, and level counts.

For $\delta>0$, define $H(\delta)=H^{-1/2,\delta}_2$ to be the space of coefficient sequences $c=(c_{lk})$ with norm

$$\|c\|_{H(\delta)}^2:=\sum_{l,k}a_l^{-1}(\log a_l)^{-2\delta}|c_{lk}|^2<\infty.$$

Its inner product is the corresponding weighted coefficient inner product. Multiplying each coordinate by $a_l^{-1/2}(\log a_l)^{-\delta}$ identifies it isometrically with $\ell^2(I)$, where $I=\{(l,k):k\in K_l\}$ (or the corresponding trigonometric index set). This sequence space is complete: if $x^{(m)}$ is Cauchy, each coordinate converges to a scalar $x_i$; for every finite $F\subset I$, the Cauchy bound passes to the limit in $\sum_{i\in F}|x_i^{(m)}-x_i^{(n)}|^2$, so the supremum over finite $F$ shows $x^{(m)}\to x$ in $\ell^2(I)$. It is separable because finite-support sequences with rational coordinates form a countable dense set. Thus $H(\delta)$ is a separable Hilbert space without an additional choice assumption.

A function $f\in L^2([0,1])$ is identified with its coefficient sequence $c_{lk}=\langle f,\psi_{lk}\rangle$. For each finite set $F$ of indices, orthonormality makes $\sum_{(l,k)\in F}c_{lk}\psi_{lk}$ orthogonal to its residual in $L^2$, so the Pythagorean identity gives $\sum_F|c_{lk}|^2\le\|f\|_2^2$. Taking the supremum over finite $F$ and using the boundedness of the weights proves continuity of the coefficient map. If all coefficients of $f$ vanish, then $f$ is orthogonal to the linear span of the basis. Completeness makes this span dense, and continuity of $g\mapsto\langle f,g\rangle$ gives $\langle f,f\rangle=0$, hence $f=0$ in $L^2$. Applying this to the difference of two functions proves injectivity. Thus the coefficient map is a continuous linear embedding $L^2([0,1])\hookrightarrow H(\delta)$.

The weight trace $\sum_{l,k}a_l^{-1}(\log a_l)^{-2\delta}$ is finite exactly when $\delta>1/2$: for wavelets its tail is a constant multiple of $\sum_{l\ge1}l^{-2\delta}$, while for a trigonometric basis it is comparable to $\sum_{l\ge2}[l(\log l)^{2\delta}]^{-1}$. The product-prior theorem below uses the wavelet case.
