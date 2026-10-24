---
id: lem-sugawara-quadratic-modes-well-defined
kind: lemma
title: Restricted Sugawara quadratic mode sums are well defined
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps:
  - def-positive-energy-affine-module
  - def-loop-algebra-of-a-simple-lie-algebra
  - def-residue-two-cocycle-on-a-loop-algebra
  - def-casimir-operator-relative-to-an-invariant-form
  - lem-the-casimir-operator-is-basis-independent-and-intertwining
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: Antony Wassermann, Kac–Moody and Virasoro Algebras, Chapter III §6
      url: https://arxiv.org/pdf/1004.1287
    - title: David Ben-Zvi and Edward Frenkel, Geometric Realization of the Segal–Sugawara Construction, §§3.2–3.3
      url: https://math.mit.edu/juvitop/pastseminars/notes_2019_Fall/BenZviFrenkel.pdf
---

## Statement

Let $\mathfrak g$ be a finite-dimensional complex simple Lie algebra as in [[def-loop-algebra-of-a-simple-lie-algebra]], with the normalized nondegenerate invariant form $B$ from [[def-residue-two-cocycle-on-a-loop-algebra]]. Let $\rho$ be a restricted affine-current module of level $k$ as in [[def-positive-energy-affine-module]]. For any $B$-dual bases $(x_a)$ and $(x^a)$, define
$$Q_m=\frac12\sum_a\sum_{r\in\mathbb Z}:J_{x_a}(r)J_{x^a}(m-r):,$$
where $J_x(n)=\rho(x\otimes t^n)$ and
$$:J_x(r)J_y(s):=\begin{cases}J_x(r)J_y(s),&r<0,\\J_y(s)J_x(r),&r\ge0.\end{cases}$$
Then each $Q_m$ is locally finite on every vector of the module and is independent of the chosen dual bases.

## Facts & Assumptions

**Given:** A restricted affine-current module, a finite-dimensional simple Lie algebra, and the displayed normal-ordering convention.

[F1] [[def-positive-energy-affine-module]]: for every vector $v$ and current $x$, all sufficiently large positive modes $J_x(n)$ annihilate $v$.

[F2] [[def-loop-algebra-of-a-simple-lie-algebra]]: $\mathfrak g$ is finite-dimensional.

[F3] [[def-casimir-operator-relative-to-an-invariant-form]]: $\sum_a x_a x^a$ is the Casimir element for any pair of $B$-dual bases.

[F4] [[lem-the-casimir-operator-is-basis-independent-and-intertwining]]: the inverse tensor $\sum_a x_a\otimes x^a$ is independent of the chosen dual bases.

[F5] [[def-residue-two-cocycle-on-a-loop-algebra]]: the normalized invariant form is nondegenerate.

## Proof

1.1 Fix a vector $v$. By [F1], each of the finitely many basis currents $x_a,x^a$ has a positive-mode cutoff on $v$; taking the maximum of these finitely many cutoffs gives one cutoff for all basis elements. For $r\ge0$, normal ordering puts $J_{x_a}(r)$ on the right, so the summand vanishes on $v$ for all sufficiently large $r$. For $r<0$, the rightmost mode is $J_{x^a}(m-r)$, whose index tends to $+\infty$ as $r\to-\infty$, so those summands also vanish on $v$ outside a finite range. Thus only finitely many $r$ contribute to $Q_m v$. [F1, F2, given, algebra]

2.1 For fixed $m,r$, the map $x\otimes y\mapsto :J_x(r)J_y(m-r):$ is bilinear, with its factor order fixed by the sign of $r$. The dual bases in the statement exist by [F5]. Therefore [F4] makes the sum over $a$ equal for every pair of $B$-dual bases, term by term in $r$. By step 1.1, on each vector only finitely many $r$ contribute, so summing these equal operators proves that $Q_m$ is independent of the dual bases. [F3, F4, F5, step 1.1, algebra] ∎
