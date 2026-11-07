---
id: def-admissible-one-dimensional-p-adic-lie-extension
kind: definition
title: Admissible One-Dimensional p-Adic Lie Extension
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-profinite-group-by-inverse-limit
justified_by: []
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Johnston and Nickel, An Unconditional Proof of the Abelian Equivariant Iwasawa Main Conjecture and Applications
      url: https://arxiv.org/pdf/2010.03186
      locator: §5.1, printed p. 14.
verification: {}
---

## Definition

Let $p$ be an odd prime and let $K$ be a totally real number field. A one-dimensional compact $p$-adic Lie group in this definition is a profinite group $G$ with an open subgroup topologically isomorphic to the additive group $\mathbb Z_p$. Write $K_\infty/K$ for the cyclotomic $\mathbb Z_p$-extension. A Galois extension $L/K$ with such a Galois group $G=\operatorname{Gal}(L/K)$ is an **admissible one-dimensional $p$-adic Lie extension** if $L$ is totally real, $K_\infty\subseteq L$, and $[L:K_\infty]$ is finite. The finite kernel over $K_\infty$ is $H=\operatorname{Gal}(L/K_\infty)$.

## Definition references

[Johnston and Nickel, §5.1](https://arxiv.org/pdf/2010.03186)
