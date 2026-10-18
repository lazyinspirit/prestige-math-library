---
id: def-sugawara-modes
kind: definition
title: Sugawara modes and their normal ordering
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - def-loop-algebra-of-a-simple-lie-algebra
  - def-positive-energy-affine-module
  - def-dual-coxeter-number-for-normalized-form
  - def-untwisted-affine-central-extension
  - lem-sugawara-quadratic-modes-well-defined
  - def-compact-real-form-of-a-complex-semisimple-lie-algebra
  - def-residue-two-cocycle-on-a-loop-algebra
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: Antony Wassermann, Kac–Moody and Virasoro Algebras, Chapter III §6
      url: https://arxiv.org/pdf/1004.1287
    - title: David Ben-Zvi and Edward Frenkel, Geometric Realization of the Segal–Sugawara Construction, §3.3
      url: https://math.mit.edu/juvitop/pastseminars/notes_2019_Fall/BenZviFrenkel.pdf
---

## Definition

Let $\mathfrak g$ be a finite-dimensional complex simple Lie algebra as in [[def-loop-algebra-of-a-simple-lie-algebra]], with normalized invariant form $B$ from [[def-untwisted-affine-central-extension]]. Let $\rho$ be a restricted affine-current module of level $k$ as in [[def-positive-energy-affine-module]], and assume $k+h^\vee\ne0$ for the number in [[def-dual-coxeter-number-for-normalized-form]]. Choose any $B$-dual bases $(x_a)$ and $(x^a)$ of $\mathfrak g$. Write $J_x(n)=\rho(x\otimes t^n)$.

For modes, define
$$:J_{x_a}(r)J_{x^a}(s):=\begin{cases}J_{x_a}(r)J_{x^a}(s),&r<0,\\J_{x^a}(s)J_{x_a}(r),&r\ge0.\end{cases}$$
The **Sugawara mode** of index $m\in\mathbb Z$ is
$$L_m=\frac{1}{2(k+h^\vee)}\sum_a\sum_{r\in\mathbb Z}:J_{x_a}(r)J_{x^a}(m-r):.$$
For the compact real form of [[def-compact-real-form-of-a-complex-semisimple-lie-algebra]], put $Q=-B|_{\mathfrak k}$; it is positive by the normalized form in [[def-residue-two-cocycle-on-a-loop-algebra]]. If $(X_i)$ is $Q$-orthonormal, then $( -X_i)$ is its $B$-dual, so the same formula reads
$$L_m=-\frac{1}{2(k+h^\vee)}\sum_i\sum_{r\in\mathbb Z}:J_{X_i}(r)J_{X_i}(m-r):.$$
By [[lem-sugawara-quadratic-modes-well-defined]], the mode sum is locally finite on every vector and independent of the chosen dual bases. At the **critical level** $k=-h^\vee$ the scalar denominator is zero and this normalized formula is not defined; no operator is asserted there.
