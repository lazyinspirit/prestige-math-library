---
id: def-vector-valued-height-over-finitely-generated-field
kind: definition
title: "Vector-valued canonical height and total non-isotriviality"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-polarized-endomorphism-of-projective-variety
  - def-finitely-generated-field-extension
  - thm-vector-valued-adelic-intersection-theory
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Alexander Carney, Heights and arithmetic dynamics over finitely generated fields"
      url: "https://arxiv.org/pdf/2010.07200v1"
      locator: "§1.2–§1.4, Definitions 1.2–1.4"
---

## Definition

Let $K/k$ be a finitely generated field extension and let $X/K$ be a geometrically normal projective variety. Write $\widehat{\operatorname{Pic}}(K/k)_{\mathrm{int}}$ for the integrable completed Picard group of models and use its pseudo-effective order: $u\le v$ means $v-u$ has nonnegative intersection against every tuple of nef test classes. If $\bar L$ is an integrable adelic line bundle on $X$ and $P\in X(\overline K)$, its vector-valued height is the restriction intersection on the closure of $P$ in a finite extension model, divided by $[K(P):K]$. For a polarization $(X,f,L,q)$, the unique $f^*$-equivariant integrable adelic lift $\bar L_f$ of $L$ defines the vector-valued canonical height $h_f(P):=h_{\bar L_f}(P)$.

A rational map is **constructible** if it is a composition of rational maps and inverses of purely inseparable rational maps. A polarized system $(X,f)$ is **constructibly isotrivial over $k$** if it is constructibly isomorphic to the base change of a system defined over $k$. It is **totally non-isotrivial over $k$** if it is not constructibly isotrivial and no positive-dimensional periodic closed subvariety carries a constructibly isotrivial restricted system.

## Definition references

[[def-polarized-endomorphism-of-projective-variety]]

[[def-finitely-generated-field-extension]]

[[thm-vector-valued-adelic-intersection-theory]]

## Facts & Assumptions

**Given:** A finitely generated field extension $K/k$, a geometrically normal projective $X/K$, an integrable adelic line bundle, and a polarization $(f,L,q)$.

[F1] The model-limit intersection theorem states the completed integrable groups, pairing and point-height construction. It does not state the separate equivariant Tate-lift theorem. ([[thm-vector-valued-adelic-intersection-theory]])

[F2] A polarization is an ample invertible sheaf whose pullback is a tensor power with exponent greater than one. ([[def-polarized-endomorphism-of-projective-variety]])

## Remaining local well-definedness obligations

The full vector-valued height and total non-isotriviality interfaces are retained from the source. The completed model intersection construction is not yet proved locally. Existence, nefness and uniqueness of the canonical lift over a general finitely generated extension additionally require Carney's Tate model sequence (2020 Lemma 4.1), including cofinal compatible models, geometric contraction in the boundary-divisor topology and nefness of every approximation. They are not consequences of the bare Statement of the cited intersection theorem. Thus no completed local verification of these constructions is claimed here. The isotriviality predicates themselves are the explicit predicates in the Definition.
