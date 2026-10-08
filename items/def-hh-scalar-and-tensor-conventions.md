---
id: def-hh-scalar-and-tensor-conventions
kind: definition
title: "Scalars, tensor powers, the empty tensor, opposite algebras and finite sums"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 0
deps: [def-field, def-vector-space, def-tensor-product-of-modules-by-generators-and-relations, thm-universal-property-of-module-tensor-products, thm-commutative-ring-module-structure-on-a-tensor-product, thm-unit-isomorphisms-for-module-tensor-products, def-algebra-over-a-commutative-ring, def-opposite-ring, def-finite-sum-in-a-commutative-monoid]
justified_by: [lem-hh-tensor-coherence-on-elementary-tensors]
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Keith Conrad, Tensor products (University of Connecticut expository notes, 60 pp.)"
      url: "https://kconrad.math.uconn.edu/blurbs/linmultialg/tensorprod.pdf"
      locator: "§§1–3, printed pp. 1–13: elementary tensors, general tensors as finite sums, and the universal property used to fix the conventions"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Definition

Fix the following conventions, used on this page and by the later Hopf and Hecke pages.

- $k$ is a field ([[def-field]]) and every vector space is a $k$-vector space ([[def-vector-space]]); $\otimes$ means $\otimes_k$.
- $V\otimes W$ is the tensor product of [[def-tensor-product-of-modules-by-generators-and-relations]], with the $k$-vector-space structure of [[thm-commutative-ring-module-structure-on-a-tensor-product]] and unit and universal property as in [[thm-universal-property-of-module-tensor-products]]. Every element of $V\otimes W$ is a finite sum of elementary tensors $v\otimes w$.
- Tensor powers are left-associated: $V^{\otimes 0}:=k$, $V^{\otimes 1}:=V$ and $V^{\otimes n}:=(V^{\otimes(n-1)})\otimes V$ for $n\ge2$. The empty tensor $k$ is identified with the tensor unit through the isomorphisms of [[thm-unit-isomorphisms-for-module-tensor-products]].
- For an algebra $A$ over a commutative ring ([[def-algebra-over-a-commutative-ring]]) the opposite algebra $A^{\mathrm{op}}$ has the same underlying set and structure map and product $a\cdot b:=ba$ ([[def-opposite-ring]]).
- Finite sums $\sum_{i\in I}x_i$ follow [[def-finite-sum-in-a-commutative-monoid]]; an empty sum is $0$.

Parentheses in iterated tensor products may be dropped only after [[lem-hh-tensor-coherence-on-elementary-tensors]] has been proved.
