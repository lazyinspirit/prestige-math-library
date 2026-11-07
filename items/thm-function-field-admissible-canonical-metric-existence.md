---
id: thm-function-field-admissible-canonical-metric-existence
kind: theorem
title: "Existence of an admissible canonical metric over a function curve"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 8
deps:
  - def-adelic-metrized-line-bundle-over-function-curve
  - def-polarized-endomorphism-of-projective-variety
  - thm-function-field-adelic-intersection-product-exists
  - thm-lang-neron-finite-generation-modulo-the-trace
  - thm-k-k-trace-existence-and-uniqueness
  - lem-equivariant-splitting-from-invertible-kernel-polynomial
  - lem-neumann-series-and-small-perturbations-of-bounded-inverses
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Alexander Carney, The Arithmetic Hodge Index Theorem and Rigidity of Dynamical Systems over Function Fields"
      url: "https://arxiv.org/pdf/1810.06342v2"
      locator: "§4.1–§4.3, Theorem 4.2 and Proposition 4.5"
---

## Statement

Let $k$ be algebraically closed, let $K=k(B)$ for a smooth projective curve $B/k$, and let $X/K$ be geometrically normal, geometrically integral, and projective. Let $(X,f,L,d)$ be a polarized dynamical system. Write $\operatorname{Pic}(X)_{\mathbb Q}$ for the group of isomorphism classes of invertible sheaves tensored with $\mathbb Q$, and write $\widehat{\operatorname{Pic}}(X)_{\mathrm{int},\mathbb Q}$ for the integrable adelic Picard group tensored with $\mathbb Q$. The projection from the latter group to $\operatorname{Pic}(X)_{\mathbb Q}$ admits a unique $f^*$-equivariant section, meaning a section commuting with pullback by $f$. For the ample eigenclass $[L]$, its lift $\bar L_f$ is nef and is called the $f$-admissible metric. Its point height satisfies $h_{\bar L_f}(f(P))=d h_{\bar L_f}(P)$, is nonnegative, and is zero on every point with finite forward orbit.

## Statement references

[[def-adelic-metrized-line-bundle-over-function-curve]]

[[def-polarized-endomorphism-of-projective-variety]]

## Facts & Assumptions

**Given:** An algebraically closed field $k$; a smooth projective curve $B/k$; $K=k(B)$; a geometrically normal, geometrically integral projective $X/K$; and a polarization $(f,L,d)$.

[F1] Integrable adelic metrized line bundles, their point heights, and their intersection products are defined by the model-limit conventions. ([[def-adelic-metrized-line-bundle-over-function-curve]])

[F2] The $K/k$-trace exists, and Lang–Néron gives finite generation modulo the trace under its stated regular-extension hypotheses. ([[thm-k-k-trace-existence-and-uniqueness]], [[thm-lang-neron-finite-generation-modulo-the-trace]])

## Remaining local proof obligations

Carney proves this by constructing the $f^*$-equivariant splitting of the Picard/trace sequence, whose finite-dimensional decomposition uses the Néron–Severi group, the K/k-trace and Lang–Néron; a Tate limit then gives the admissible metric and its nefness. The formal section formula is proved in [[lem-equivariant-splitting-from-invertible-kernel-polynomial]], and [[lem-neumann-series-and-small-perturbations-of-bounded-inverses]] supplies the Banach inverse when its norm hypotheses hold. Neither proves that the actual Picard/trace sequence has the required spectral separation, or that the resulting metrics are integrable and nef. The current supplier `thm-lang-neron-finite-generation-modulo-the-trace` has no proof, and the full construction of admissible metrics and its comparison with the Call–Silverman canonical height has not been reconstructed locally. These missing arguments block use as a ready supplier.
