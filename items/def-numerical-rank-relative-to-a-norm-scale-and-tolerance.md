---
id: def-numerical-rank-relative-to-a-norm-scale-and-tolerance
kind: definition
title: "Numerical rank relative to a declared norm, scale, and tolerance"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-exact-rank-is-locally-constant-at-full-rank-and-discontinuous-at-nonmaximal-rank-matrices]
aliases: []
verification:
  audited: 2026-08-29
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "David Bindel, CS 6210: Matrix Nearness Problems"
      url: "https://www.cs.cornell.edu/courses/cs6210/2025fa/lec/2025-10-15.html"
---

## Definition

Let $m,n\in\mathbb{N}$, let $\mathbb F$ be $\mathbb R$ or $\mathbb C$, let
$\lVert\cdot\rVert$ be a declared norm on the matrix space
$M_{m\times n}(\mathbb F)$, let $A\in M_{m\times n}(\mathbb F)$, and let
$\tau\ge 0$ be a declared tolerance. The **numerical rank of $A$ at
tolerance $\tau$** is

$$\operatorname{rank}_{\tau}(A)\;:=\;\min\Bigl\{\,\operatorname{rank}B\;:\;B\in M_{m\times n}(\mathbb F),\ \lVert A-B\rVert\le\tau\,\Bigr\}.$$

The minimum exists: it is a minimum of a nonempty subset of the finite set
$\{0,1,\dots,\min(m,n)\}$, the value $\operatorname{rank}A$ being attained at
$B=A$.

**Scale.** The tolerance may be declared absolutely, as a real number
$\tau\ge 0$, or relative to a scale, as $\tau=\tau_0\lVert A\rVert$ for a
declared factor $\tau_0\ge 0$. Both enter the definition through the single
threshold $\tau$; the scale only fixes which threshold is meant, and every
statement about $\operatorname{rank}_{\tau}$ is a statement about that one
threshold.

**Why the exact-rank discontinuity forces the parameter.** Exact rank is
locally constant at the full-rank matrices but discontinuous at every
nonmaximal-rank matrix
([[thm-exact-rank-is-locally-constant-at-full-rank-and-discontinuous-at-nonmaximal-rank-matrices]]);
an exact rank read from noisy data is therefore unstable. Numerical rank
replaces exact rank by the smallest exact rank attainable within the declared
norm tolerance $\tau$: it is, by construction, constant on every open ball of
radius below the relevant gaps, and it counts as rank exactly those directions
that perturbation of size at most $\tau$ cannot erase.

## Remarks

- **The choice of norm is part of the data.** Different norms give different
  distances to the low-rank sets, hence possibly different numerical ranks for
  the same matrix and tolerance. The spectral specialisation is
  [[prop-spectral-numerical-rank-counts-singular-values-above-the-declared-threshold]];
  the dependence on the declared tolerance itself is genuine: for
  $A=\operatorname{diag}(1,1/2,0)$, the tolerances $3/4$ and $1/4$ give the
  numerical ranks $1$ and $2$ respectively.

- **Numerical rank is not a substitute for exact rank.** It answers a different
  question: which rank is stable under perturbations of size at most $\tau$,
  not what the exact rank is. In the spectral norm, if $A\ne0$, the two ranks
  agree exactly when $\tau$ is strictly smaller than the smallest nonzero
  singular value of $A$; for $A=0$ they agree for every $\tau\ge0$. Once
  $\tau$ reaches a positive singular value, the numerical rank can drop.
