---
id: thm-na-haar-cell-average-w1inf-error-bound
kind: theorem
title: Haar cell averages approximate smooth bounded-derivative data at first order
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
page: wavelet-transforms-and-nonlinear-approximation
dependency_level: 1
deps: [def-na-haar-cell-average-projection, def-na-smooth-derivative-bound-class, lem-taylor-lagrange-remainder-from-mean-value]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Gilbert Strang and Kevin Amaratunga, Wavelets and Filter Banks, MIT OpenCourseWare 18.327, Handouts 3 and 9"
      url: "https://ocw.mit.edu/courses/18-327-wavelets-filter-banks-and-applications-spring-2003/9ae8fd2b4313aea9cb1d828e3d431301_Handout3.pdf"
    - title: "Stéphane Mallat, A Wavelet Tour of Signal Processing, 3rd ed., Chapter 9"
      url: "https://www.di.ens.fr/~mallat/College/WaveletTourChap9.pdf"
---

## Statement

Let $f\in\mathcal S^1$ with $M_1=M_1(f)$. For every integer $J\ge0$, with $h=2^{-J}$ and $P_J$ as in [[def-na-haar-cell-average-projection]],
$$\left(\int_0^1|f(x)-P_Jf(x)|^2\,dx\right)^{1/2}\le \frac{h}{\sqrt2}M_1.$$
Thus the cell-average Haar approximation has first-order error on the explicit derivative-bounded smooth class $\mathcal S^1$.

## Facts & Assumptions

**Given:** $f\in\mathcal S^1$, $M_1=\sup_{[0,1]}|f'|$, and a dyadic level $J\ge0$.

[F1] [[def-na-haar-cell-average-projection]]: on each cell $I$ of length $h$, $P_Jf$ equals the average $\bar f_I=h^{-1}\int_If$.

[F2] [[def-na-smooth-derivative-bound-class]]: $f$ is $C^1$ on an open interval containing $[0,1]$ and $|f'(x)|\le M_1$ there for $x\in[0,1]$.

[F3] [[lem-taylor-lagrange-remainder-from-mean-value]]: if $f$ is $C^1$ on an open interval containing $[a,b]$, then for $x,y\in[a,b]$ there is a point between them with $f(x)-f(y)=f'(\xi)(x-y)$; for $x=y$ the difference is zero.

## Proof

1.1 Fix one cell $I$ of length $h$ and put $\bar f_I=h^{-1}\int_If$. Expanding both sides gives $\int_I|f(x)-\bar f_I|^2\,dx=\frac1{2h}\int_I\int_I|f(x)-f(y)|^2\,dy\,dx,$ because each side equals $\int_If^2-h^{-1}(\int_If)^2$. [given, F1, algebra]

2.1 For $x,y\in I$, [F3] and [F2] give $|f(x)-f(y)|\le M_1|x-y|\le M_1h$. Hence the double integral in step 1.1 is at most $h^2M_1^2\cdot h^2$, so $\int_I|f-\bar f_I|^2\le h^3M_1^2/2$. [given, F2, F3, step 1.1, algebra]

3.1 There are $1/h$ cells with disjoint interiors. Summing their squared errors gives $\|f-P_Jf\|_2^2\le h^2M_1^2/2$. Taking nonnegative square roots proves the stated bound. [step 2.1, algebra] ∎
