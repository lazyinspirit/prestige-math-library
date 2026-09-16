---
id: cex-an-inner-product-space-need-not-be-complete
kind: counterexample
title: An inner-product space need not be complete
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-real-and-complex-inner-product-space, thm-cauchy-schwarz-in-an-inner-product-space, thm-p-series-rational, rem-ell-p-is-l-p-of-counting-measure, def-counting-measure, lem-convergent-implies-cauchy, def-complete-metric-space, def-hilbert-space, def-real-limit]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis, §1.3.3 and §2.3.6"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
    - title: "Andrew Lin and Casey Rodriguez, MIT 18.102 Introduction to Functional Analysis, Lecture 16"
      url: "https://live.ocw.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/8fb8d5c170f1613151aca71de21027bc_MIT18_102s21_full_lec.pdf"
---

## Statement refuted

Every inner-product space is complete for its induced norm.

## Facts & Assumptions

[A1] The $p$-series $\sum_{m\ge1}1/m^2$ converges, and a convergent sequence of reals is Cauchy ([[thm-p-series-rational]], [[lem-convergent-implies-cauchy]], [[def-real-limit]]).

[A2] On counting measure the integral of $|f|^2$ is the series of the $|f(k)|^2$, and almost-everywhere equality is equality everywhere, so the norm of a finitely supported sequence is $\bigl(\sum_k|x_k|^2\bigr)^{1/2}$ ([[rem-ell-p-is-l-p-of-counting-measure]], [[def-counting-measure]]).

[A3] The pairing is linear in the first argument, conjugate-linear in the second and positive definite, and Cauchy–Schwarz gives $|\langle x,y\rangle|\le\|x\|\,\|y\|$ ([[def-real-and-complex-inner-product-space]], [[thm-cauchy-schwarz-in-an-inner-product-space]]).

[A4] A metric space is complete when every Cauchy sequence converges in it, and a Hilbert space is complete for its induced norm ([[def-complete-metric-space]], [[def-hilbert-space]]).

## Counterexample

**Proof technique:** direct.

**Given:** The space $c_{00}$ of finitely supported real or complex sequences with the pairing $\langle x,y\rangle=\sum_kx_k\overline{y_k}$, a finite sum for $x,y\in c_{00}$.

1.1 The pairing is an inner product on $c_{00}$: linearity in the first argument and conjugate symmetry are finite-sum algebra, and $\langle x,x\rangle=\sum_k|x_k|^2=0$ forces every coordinate $x_k$ to vanish; the induced length is the $\ell^2$ norm of the finitely supported sequence. [A2, A3]

1.2 Let $u^{(N)}$ be the sequence with $u^{(N)}_k=1/(k+1)$ for $k<N$ and $u^{(N)}_k=0$ for $k\ge N$; each $u^{(N)}$ lies in $c_{00}$, and for $M>N$ one has $\|u^{(M)}-u^{(N)}\|^2=\sum_{N\le k<M}1/(k+1)^2=\sum_{N<m\le M}1/m^2$, a difference of partial sums of the convergent $p$-series, which tends to $0$ as $N,M\to\infty$ by [A1]; hence $(u^{(N)})$ is Cauchy in the $\ell^2$ norm. [A1, A2]

2.1 Suppose $v\in c_{00}$ were a limit of $(u^{(N)})$ in the induced norm; then for each fixed $k$, Cauchy–Schwarz applied to $v-u^{(N)}$ and the $k$-th coordinate vector gives $|v_k-u^{(N)}_k|\le\|v-u^{(N)}\|$, so $v_k=\lim_Nu^{(N)}_k=1/(k+1)$ for every $k$, and $v$ has infinitely many nonzero coordinates, contrary to finite support. [step 1.2, A3]

3.1 Hence the Cauchy sequence $(u^{(N)})$ in the inner-product space $c_{00}$ has no limit there, so $c_{00}$ is not complete for its induced norm, and the statement that every inner-product space is complete is false. [step 1.1, step 2.1, A4] ∎
