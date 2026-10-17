---
id: def-compact-spectral-filter-and-qualification
kind: definition
title: Compact spectral filters, source conditions, and qualification
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
provenance:
  statement: ai-altered
  proof: not-applicable
dependency_level: 1
deps:
  - lem-compact-gram-operator-is-positive-and-has-kernel
  - lem-compact-spectral-multiplier-is-well-defined
  - thm-spectral-theorem-for-compact-self-adjoint-operators
  - lem-hilbert-tikhonov-normal-operator-invertible
  - def-countable-choice
  - def-hilbert-space-adjoint
  - def-bounded-linear-operator
verification:
  precheck: n/a
aliases: []
sources:
  references:
    - title: "Guido Clason, Regularization of Inverse Problems, full lecture notes"
      url: https://imsc.uni-graz.at/clason/preprints/InverseNotes.pdf
      locator: Chapters 5–6, definition of spectral filters and filter qualification, PDF pp. 46–58; Clason's source-condition exponent is on singular values.
    - title: "Per Christian Hansen, Introduction to Inverse Problems, Chapter 4: Regularization Methods"
      url: https://www2.compute.dtu.dk/~pcha/DIP/chap4.pdf
      locator: Complete 29-slide chapter; slides 5, 12, 16–18 give the finite-matrix spectral filter and Tikhonov filter factors.
---

## Definition

Assume Countable Choice. Let $X,Y$ be real or complex Hilbert spaces and let
$A:X\to Y$ be compact and bounded. Put $S=A^*A$. By
[[lem-compact-gram-operator-is-positive-and-has-kernel]], $S$ is compact,
positive, and self-adjoint, with $\ker S=\ker A$. Let $\Sigma$ be the set of
nonzero eigenvalues of $S$ and $P_t$ the orthogonal projection onto the
eigenspace of $t\in\Sigma$; let $P_0$ be the orthogonal projection onto
$\ker S$. The compact spectral multiplier of a bounded scalar function
$q:\{0\}\cup\Sigma\to\mathbb F$ is
$$q(S)x:=q(0)P_0x+\sum_{t\in\Sigma}q(t)P_tx,$$
where the finite-subset net converges in norm by
[[lem-compact-spectral-multiplier-is-well-defined]]. For $\nu>0$, define
$S^\nu$ by the multiplier $q_\nu(0)=0$ and $q_\nu(t)=t^\nu$ for $t>0$.

For $\lambda>0$, the Tikhonov filter and residual filter are
$$g_\lambda(t)=\frac1{t+\lambda},\qquad r_\lambda(t)=1-tg_\lambda(t)=\frac{\lambda}{t+\lambda}.$$
The Tikhonov solution for data $y_\delta\in Y$ is
$$x_\lambda^\delta=g_\lambda(S)A^*y_\delta =(A^*A+\lambda I_X)^{-1}A^*y_\delta.$$
The source condition of order $\nu>0$ and radius $R\ge0$ means that
$x^\dagger=S^\nu w$ for some $w\in X$ with $\|w\|\le R$. A family of
filters $g_\alpha$ with residual filters $r_\alpha(t)=1-tg_\alpha(t)$ has
qualification at least $p>0$ when, for each $0<\nu\le p$, some finite
constant $C_\nu$ satisfies
$$\sup_{t\in\Sigma}t^\nu|r_\alpha(t)|\le C_\nu\alpha^\nu \quad\text{for every }\alpha>0.$$

## Remarks

The parameter $\lambda$ here is the coefficient of $\|x\|^2$ in
$\|Ax-y_\delta\|^2+\lambda\|x\|^2$. Hansen's discrete slides write this
coefficient as $\lambda_H^2$, so $\lambda=\lambda_H^2$. Clason writes the
source condition as $x^\dagger=|A|^\mu w$ with $|A|=(A^*A)^{1/2}$;
here $\mu=2\nu$. Thus Tikhonov's qualification-one range in the present
convention is $0<\nu\le1$.

