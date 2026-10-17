---
id: lem-tikhonov-bias-converges-for-minimum-norm-solution
kind: lemma
title: Compact-operator Tikhonov bias vanishes on the minimum-norm solution
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
provenance:
  statement: ai-altered
  proof: ai-altered
dependency_level: 2
deps:
  - def-compact-spectral-filter-and-qualification
  - lem-compact-gram-operator-is-positive-and-has-kernel
  - lem-hilbert-tikhonov-normal-operator-invertible
  - thm-spectral-theorem-for-compact-self-adjoint-operators
  - def-countable-choice
  - def-orthogonality-and-orthogonal-complement
aliases: []
proof_strategy: direct
sources:
  references:
    - title: "Guido Clason, Regularization of Inverse Problems, full lecture notes"
      url: https://imsc.uni-graz.at/clason/preprints/InverseNotes.pdf
      locator: Chapters 5–6, pointwise convergence of spectral regularizations and Tikhonov regularization, PDF pp. 46–63.
    - title: "Per Christian Hansen, Introduction to Inverse Problems, Chapter 4: Regularization Methods"
      url: https://www2.compute.dtu.dk/~pcha/DIP/chap4.pdf
      locator: Complete 29-slide chapter; slides 16–18 give the Tikhonov singular filters.
---

## Statement

Assume Countable Choice. Let $A:X\to Y$ be compact between real or complex
Hilbert spaces, let $x^\dagger\perp\ker A$, and put $y=Ax^\dagger$. For
$\lambda>0$, let $x_\lambda=(A^*A+\lambda I_X)^{-1}A^*y$. Then
$$x^\dagger-x_\lambda=\sum_{t\in\Sigma}\frac{\lambda}{t+\lambda}P_tx^\dagger,$$
where $\Sigma$ and $P_t$ are the nonzero eigenvalues and eigenspace
projections of $A^*A$, and
$$\lim_{\lambda\downarrow0}\|x^\dagger-x_\lambda\|=0.$$

## Facts & Assumptions

**Given:** Countable Choice, compact $A:X\to Y$ between Hilbert spaces,
$x^\dagger\perp\ker A$, $y=Ax^\dagger$, and $\lambda>0$.

[A1] [[def-countable-choice]]: Countable Choice is the hypothesis of the
compact self-adjoint spectral theorem used below.

[F1] [[lem-compact-gram-operator-is-positive-and-has-kernel]]: $S=A^*A$ is
compact, positive and self-adjoint, with $\ker S=\ker A$.

[F2] [[thm-spectral-theorem-for-compact-self-adjoint-operators]]: For compact
self-adjoint $S$, the nonzero eigenspaces are orthogonal and their closed span
is $(\ker S)^\perp$; finite-subset spectral sums converge in norm.

[F3] [[def-compact-spectral-filter-and-qualification]]: $x_\lambda
=(A^*A+\lambda I)^{-1}A^*y$ uses the multiplier $g_\lambda(t)=(t+\lambda)^{-1}$.

[F4] [[lem-hilbert-tikhonov-normal-operator-invertible]]: For bounded $A$ and
$\lambda>0$, $A^*A+\lambda I$ is invertible.

[F5] [[def-orthogonality-and-orthogonal-complement]]: A vector in
$(\ker S)^\perp$ is orthogonal to every vector in $\ker S$.

## Proof
1.1 By [F1], $\ker S=\ker A$. Thus $x^\dagger\perp\ker S$, and the spectral decomposition in [F2] gives $x^\dagger=\sum_{t\in\Sigma}P_tx^\dagger$ as a norm-convergent finite-subset net. [A1, F1, F2, F5]

2.1 Since $y=Ax^\dagger$, $A^*y=Sx^\dagger$. The filter in [F3] therefore gives $x_\lambda=g_\lambda(S)Sx^\dagger$, whose coefficient on $E_t$ is $t/(t+\lambda)$. The coefficient on $\ker S$ is zero. Subtracting from the expansion in step 1.1 proves the displayed bias identity. [F1, F3, F4, step 1.1, algebra]

3.1 Given $\varepsilon>0$, choose a finite $F\subseteq\Sigma$ so the norm of the tail $\sum_{t\notin F}P_tx^\dagger$ is less than $\varepsilon/2$; this is possible because the finite-subset net in [F2] converges. Each scalar $\lambda/(t+\lambda)$ for $t\in F$ tends to zero, so for all sufficiently small $\lambda>0$ the norm of the finite part of the bias sum is less than $\varepsilon/2$. The tail has norm at most its unfiltered norm because $0\le\lambda/(t+\lambda)\le1$. The triangle inequality then gives $\|x^\dagger-x_\lambda\|<\varepsilon$. [F2, step 2.1, algebra] ∎
