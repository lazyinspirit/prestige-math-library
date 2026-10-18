---
id: def-positive-energy-unitary-affine-module
kind: definition
title: Positive-energy unitary module for an affine current algebra
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps:
  - def-positive-energy-affine-module
  - def-degree-derivation-and-full-untwisted-affine-algebra
  - def-compact-real-form-of-a-complex-semisimple-lie-algebra
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: Antony Wassermann, Kac–Moody and Virasoro Algebras, Chapter III §2
      url: https://arxiv.org/pdf/1004.1287
---

## Definition

Let $\mathfrak k$ be the compact real form of the complex simple algebra underlying [[def-positive-energy-affine-module]]. A **positive-energy unitary module** consists of a complex inner-product space (not assumed complete) with positive-definite inner product
$$H=\bigoplus_{r\in\mathbb Z_{\ge0}}H_r,$$
where the displayed direct sum is orthogonal. Each $H_r$ is finite-dimensional and $H_0\ne0$. The representation of the restricted affine-current algebra has central level an integer $k\ge0$, satisfies $X(n)H_r\subseteq H_{r-n}$ for every $X\in\mathfrak k$ (with $H_s=0$ for $s<0$), and satisfies $X(n)^*=-X(-n)$. In particular zero modes are skew-adjoint on each energy space. This definition selects the nonnegative integral level branch; it does not assert that every positive-energy unitary representation has integral level. The module is **irreducible** if it has no nonzero proper subspace invariant under all current modes.

Define the energy operator on the graded space by $E|_{H_r}=r\operatorname{id}$. The stated mode shift gives $[E,X(n)]=-nX(n)$. This is the convention corresponding to $E=-d$ when adjoining the degree derivation $d$ of [[def-degree-derivation-and-full-untwisted-affine-algebra]], which satisfies $[d,x_n]=n x_n$. The derivation $d$ is not part of the current central extension used in the Sugawara mode formula.
