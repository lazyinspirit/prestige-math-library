---
id: def-normwise-and-componentwise-backward-error-for-linear-systems
kind: definition
title: "Normwise and componentwise backward error for an approximate linear-system solution"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-condition-number-of-a-nonsingular-linear-system, def-abs-value]
aliases: []
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "James Demmel, Math 221 Lecture 3: Vector Norms, Matrix Norms, and Condition Numbers"
      url: "https://web.archive.org/web/20250328021224if_/https://people.eecs.berkeley.edu/~demmel/ma221_Fall09/Lectures/Lecture_03.html"
    - title: "L. N. Trefethen and D. Bau III, Numerical Linear Algebra, Lecture 12"
      url: "https://djvu.online/file/DTGVxlxBwTy0n"
---

## Definition

Let $n\ge 1$, let $p\in\mathbb{Q}$ with $p\ge 1$, let
$A=(a_{ij})\in\operatorname{GL}_n(\mathbb{R})$, let $b=(b_i)\in\mathbb{R}^{n}$,
and let $\widehat x\in\mathbb{R}^{n}$ be an approximate solution of the system
$Ax=b$ with residual $r=b-A\widehat x$.

**Normwise backward error.** The normwise backward error of $\widehat x$ is

$$\eta_p(\widehat x)\;:=\;\inf\Bigl\{\,\varepsilon\ge 0\;:\;\text{there are } \Delta A\in M_n(\mathbb{R}),\ \Delta b\in\mathbb{R}^{n}\text{ with } (A+\Delta A)\widehat x=b+\Delta b,\ \lVert\Delta A\rVert_p\le\varepsilon\lVert A\rVert_p,\ \lVert\Delta b\rVert_p\le\varepsilon\lVert b\rVert_p\,\Bigr\},$$

where $\lVert\cdot\rVert_p$ on matrices is the induced norm of
[[def-induced-matrix-p-norm]] and on vectors the $p$-norm.

**Componentwise backward error.** The componentwise backward error of
$\widehat x$ is

$$\omega(\widehat x)\;:=\;\inf\Bigl\{\,\varepsilon\ge 0\;:\;\text{there are } \Delta A=(\Delta a_{ij}),\ \Delta b=(\Delta b_i)\text{ with } (A+\Delta A)\widehat x=b+\Delta b,\ \lvert\Delta a_{ij}\rvert\le\varepsilon\lvert a_{ij}\rvert\text{ for all }i,j<n,\ \lvert\Delta b_i\rvert\le\varepsilon\lvert b_i\rvert\text{ for all }i<n\,\Bigr\},$$

with $|\cdot|$ the absolute value ([[def-abs-value]]).

**Both infima are over nonempty sets, so they are well defined.** The single
choice $\Delta A:=-A$ and $\Delta b:=-b$ always satisfies the defining
relation, because $(A+\Delta A)\widehat x=0=b+\Delta b$. It is admissible with
$\varepsilon=1$ for both notions: normwise,
$\lVert\Delta A\rVert_p=\lVert A\rVert_p$ and
$\lVert\Delta b\rVert_p=\lVert b\rVert_p$; componentwise,
$|\Delta a_{ij}|=|a_{ij}|$ and $|\Delta b_i|=|b_i|$. Hence each defining set is
a nonempty subset of $[0,\infty)$ and therefore has an infimum.

In words: $\eta_p(\widehat x)$ is the smallest factor by which the data
$(A,b)$ must be perturbed, measured in the $p$-norm with the weights
$\lVert A\rVert_p$ and $\lVert b\rVert_p$, for the computed answer $\widehat x$
to be exactly right; $\omega(\widehat x)$ measures the same perturbation
entrywise. The explicit residual formulas for both are
[[prop-explicit-formulas-for-normwise-and-componentwise-backward-error]].

## Remarks

- **Backward error is about the data, not the answer.** An approximate solution
  with small backward error is the exact solution of a nearby problem; the size
  of the forward error $\lVert x-\widehat x\rVert$ is governed separately by
  the condition number through
  [[thm-local-conditioning-times-backward-error-controls-forward-error-to-first-order]].

- **The two notions are not interchangeable.** Componentwise admissibility
  controls every entry and preserves the zero pattern of the data, whereas
  normwise admissibility controls only the declared aggregate norms. Neither
  definition gives the same numerical tolerance as the other without
  dimension- and data-dependent comparison factors. Sparse matrices make the
  distinction especially visible: $\omega$ preserves their zero pattern but
  $\eta_p$ does not.
