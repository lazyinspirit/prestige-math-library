---
id: thm-tikhonov-convergence-under-noise-parameter-coupling
kind: theorem
title: Vanishing Tikhonov bias and controlled noise amplification imply convergence
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
provenance:
  statement: ai-altered
  proof: ai-altered
dependency_level: 3
deps:
  - def-compact-spectral-filter-and-qualification
  - lem-tikhonov-bias-converges-for-minimum-norm-solution
  - lem-hilbert-tikhonov-noise-amplification-bound
aliases: []
proof_strategy: direct
sources:
  references:
    - title: "Guido Clason, Regularization of Inverse Problems, full lecture notes"
      url: https://imsc.uni-graz.at/clason/preprints/InverseNotes.pdf
      locator: Chapters 4–6, data perturbation and convergence of spectral regularization, PDF pp. 31–63.
    - title: "Per Christian Hansen, Introduction to Inverse Problems, Chapter 5: Regularization Parameter Choice"
      url: https://people.compute.dtu.dk/pcha/DIP/chap5.pdf
      locator: Complete 27-slide chapter; slides 4–6 decompose forward error into bias and data perturbation.
---

## Statement

Assume Countable Choice. Let $A:X\to Y$ be compact between real or complex
Hilbert spaces, $x^\dagger\perp\ker A$, and $y=Ax^\dagger$. For a sequence
$\delta_j\ge0$, data $y_j=y+e_j$ with $\|e_j\|\le\delta_j$, and parameters
$\lambda_j>0$, suppose
$$\lambda_j\to0,\qquad \frac{\delta_j}{\sqrt{\lambda_j}}\to0.$$
Then the Tikhonov solutions
$$x_j=(A^*A+\lambda_j I)^{-1}A^*y_j$$
converge in norm to $x^\dagger$. No source condition on $x^\dagger$ is
required.

## Facts & Assumptions

**Given:** Countable Choice, compact $A:X\to Y$, the minimum-norm solution
$x^\dagger\perp\ker A$ of $Ax=y$, noisy data $y_j=y+e_j$ with
$\|e_j\|\le\delta_j$, and positive parameters $\lambda_j$ satisfying the
stated limits.

[F1] [[lem-tikhonov-bias-converges-for-minimum-norm-solution]]: For exact
data $y=Ax^\dagger$, the bias $\|x^\dagger-(A^*A+\lambda I)^{-1}A^*y\|$
tends to zero as $\lambda\downarrow0$.

[F2] [[lem-hilbert-tikhonov-noise-amplification-bound]]: For bounded $A$,
$R_\lambda=(A^*A+\lambda I)^{-1}A^*$ satisfies
$\|R_\lambda e\|\le\|e\|/(2\sqrt\lambda)$.

[F3] [[def-compact-spectral-filter-and-qualification]]: The regularized
solution is $R_\lambda y$ and the parameter $\lambda$ is the coefficient of
the squared norm penalty.

## Proof
1.1 Let $x_\lambda=R_\lambda y$ be the exact-data solution. Linearity gives $x_j-x^\dagger=(x_{\lambda_j}-x^\dagger)+R_{\lambda_j}e_j$. By [F1] and [F2], $$\|x_j-x^\dagger\|\le \|x_{\lambda_j}-x^\dagger\|+\frac{\delta_j}{2\sqrt{\lambda_j}}.$$ [given, F1, F2, F3, algebra]

2.1 The first term on the right tends to zero because $\lambda_j\to0$ and [F1]; the second tends to zero by the assumed ratio. Thus $\|x_j-x^\dagger\|\to0$. [given, step 1.1, algebra, F1] ∎
