---
id: def-iwasawa-algebra-of-profinite-group
kind: definition
title: Iwasawa Algebra of a Profinite Group
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-p-adic-integers-as-compatible-residue-classes
  - def-profinite-group-by-inverse-limit
  - thm-group-ring-is-a-unital-algebra-with-basis-g
justified_by: []
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Johnston and Nickel, An Unconditional Proof of the Abelian Equivariant Iwasawa Main Conjecture and Applications
      url: https://arxiv.org/pdf/2010.03186
      locator: §4.1, definition of the completed group algebra.
verification: {}
---

## Definition

Let $p$ be a prime and let $G$ be a profinite group. Its Iwasawa algebra over the $p$-adic integers is the completed group algebra
$$\Lambda(G):=\mathbb Z_p[[G]]:=\varprojlim_{U\triangleleft_o G}\mathbb Z_p[G/U],$$
where $U$ ranges over open normal subgroups and the transition maps are induced by quotient homomorphisms. Multiplication is the inverse-limit multiplication. When $G$ is abelian, every open subgroup is normal, so the same inverse limit can equivalently be indexed over all open subgroups.

## Definition references

[Johnston and Nickel, §4.1](https://arxiv.org/pdf/2010.03186)

[[thm-group-ring-is-a-unital-algebra-with-basis-g]]
