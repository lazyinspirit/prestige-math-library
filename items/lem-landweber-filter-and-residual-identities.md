---
id: lem-landweber-filter-and-residual-identities
kind: lemma
title: Landweber iterates and residuals are spectral-filter iterates
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - alg-landweber-iteration-with-discrepancy-stopping
  - def-compact-spectral-filter-and-qualification
  - lem-compact-gram-operator-is-positive-and-has-kernel
  - lem-compact-spectral-multiplier-is-well-defined
  - def-hilbert-space-adjoint
  - def-countable-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Per Christian Hansen, Introduction to Inverse Problems, Chapter 6: Iterative Methods"
      url: "https://people.compute.dtu.dk/pcha/DIP/chap6.pdf"
      locator: "Slides 7–10: expanded Landweber recurrence and its geometric-series filter."
    - title: "Christian Clason, Regularization of Inverse Problems, full lecture notes"
      url: "https://arxiv.org/pdf/2001.00617"
      locator: "Chapter 7, Lemma 7.1 and equations (67)–(68), printed pp. 66–68 / PDF pp. 78–80."
---

## Statement

Assume Countable Choice. Let $A:X\to Y$ and $\omega$ satisfy the
hypotheses of [[alg-landweber-iteration-with-discrepancy-stopping]] and put
$T=A^*A$. For each integer $k\ge0$, define
$g_0(t)=0$ and
$g_k(t)=\omega\sum_{j=0}^{k-1}(1-\omega t)^j$ for $k\ge1$, with
$r_k(t)=(1-\omega t)^k$. For the associated infinite mathematical path,
$$x_k=g_k(T)A^*y_\delta,\qquad y_\delta-Ax_k=r_k(AA^*)y_\delta.$$
If $y_\delta=Ax^\dagger$, then
$$x^\dagger-x_k=r_k(T)x^\dagger.$$
Here $g_k(T)$ and $r_k(T)$ are the compact spectral multipliers defined in
[[def-compact-spectral-filter-and-qualification]]; $r_k(AA^*)$ is the
multiplier with scalar function $t\mapsto(1-\omega t)^k$ on the compact
self-adjoint operator $AA^*$, as supplied by
[[lem-compact-spectral-multiplier-is-well-defined]].

## Facts & Assumptions

**Given:** Countable Choice, compact nonzero $A:X\to Y$, $0<\omega<2/\|A\|^2$,
the algorithm's initial value $x_0=0$, and $T=A^*A$.

[A1] [[def-countable-choice]]: Countable Choice is assumed by the Hilbert-adjoint and compact spectral multiplier suppliers used here.

[F1] [[alg-landweber-iteration-with-discrepancy-stopping]]: Its associated infinite path is defined for every $j\ge0$ by $x_{j+1}=x_j+\omega A^*(y_\delta-Ax_j)$; a finite run computes only a prefix.

[F2] [[lem-compact-gram-operator-is-positive-and-has-kernel]]: Both $A^*A$ and $AA^*$ are compact, positive, and self-adjoint, with $\ker(A^*A)=\ker A$.

[F3] [[lem-compact-spectral-multiplier-is-well-defined]]: Every bounded scalar function on the nonzero eigenspaces of a compact self-adjoint operator defines a bounded spectral multiplier.

[F4] [[def-compact-spectral-filter-and-qualification]]: For $T=A^*A$, compact spectral multipliers include the residual filter $r_k(t)=(1-\omega t)^k$.

[F5] [[def-hilbert-space-adjoint]]: $\langle Ax,y\rangle_Y=\langle x,A^*y\rangle_X$.

## Proof

**Given:** The hypotheses above and the exact recurrence [F1].

1.1 The adjoint identity [F5] gives $A^*A=T$. Thus [F1] rewrites each update before stopping as $x_{j+1}=(I-\omega T)x_j+\omega A^*y_\delta$. Starting from $x_0=0$, induction gives $x_k=\omega\sum_{j=0}^{k-1}(I-\omega T)^jA^*y_\delta$: the sum is empty for $k=0$, and multiplying the $k$-term sum by $I-\omega T$ and adding $\omega A^*y_\delta$ produces the $(k+1)$-term sum. [A1, given, F1, F5, induction, algebra]

2.1 Put $\rho_k=y_\delta-Ax_k$. Substitution of [F1] gives $\rho_{k+1}=\rho_k-\omega AA^*\rho_k=(I-\omega AA^*)\rho_k$. Induction from $\rho_0=y_\delta$ yields $\rho_k=(I-\omega AA^*)^ky_\delta$. By [F2], $AA^*$ is compact positive self-adjoint, and [F3] therefore interprets this polynomial as the stated compact spectral multiplier. The scalar geometric identity $1-(1-\omega t)^k=\omega t\sum_{j=0}^{k-1}(1-\omega t)^j$ also identifies the vector expression from step 1.1 with $g_k(T)A^*y_\delta$. [A1, F1, F2, F3, step 1.1, induction, algebra]

3.1 If $y_\delta=Ax^\dagger$, then [step 1.1] and $A^*y_\delta=Tx^\dagger$ give $x_k=\omega\sum_{j=0}^{k-1}(I-\omega T)^jTx^\dagger=[I-(I-\omega T)^k]x^\dagger$ by the same polynomial identity. Since [F2] makes $T$ compact positive self-adjoint, [F4] interprets $r_k(T)$ as its residual multiplier; hence $x^\dagger-x_k=(I-\omega T)^kx^\dagger=r_k(T)x^\dagger$. [A1, F2, F4, step 1.1, algebra] ∎
