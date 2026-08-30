---
id: thm-a-poset-with-finite-meets-is-a-strict-monoidal-category
kind: theorem
title: "A poset with finite meets is a strict monoidal category"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-strict-monoidal-category, def-lattice-distributive-lattice-and-order-ideal, prop-preorders-as-categories-and-monotone-maps-as-functors]
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, Example 2.3.12"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
pipeline_run: null
---

## Statement

Let $P$ be a poset with a top element $\top$ and binary meets. Then the
category associated to $P$ is a strict monoidal category with tensor product
$x\otimes y:=x\wedge y$ and unit object $\top$.

## Facts & Assumptions

**Given:** A poset $P$ with top element $\top$ and binary meet operation
$\wedge$.

[L1] A lattice supplies binary meets, written $\wedge$ ([[def-lattice-distributive-lattice-and-order-ideal]]).

[L2] A preorder, and hence a poset, determines a category with at most one morphism between two objects ([[prop-preorders-as-categories-and-monotone-maps-as-functors]]).

[L3] A strict monoidal category has literal associativity and unit equalities and identity constraints ([[def-strict-monoidal-category]]).

## Proof

**Proof technique:** direct.

1.1 By [L2], $P$ becomes a category whose objects are the elements of $P$ and whose morphisms are the order relations. [given, L2]

2.1 Define $x\otimes y:=x\wedge y$ on objects. Because meet is monotone in each variable, the unique arrows $x\to x'$ and $y\to y'$ induce the unique arrow $x\wedge y\to x'\wedge y'$, so $\otimes$ is a bifunctor. [step 1.1, L1, L2]

3.1 The universal property of meet gives $(x\wedge y)\wedge z=x\wedge(y\wedge z)$ and $\top\wedge x=x=x\wedge\top$ as equalities of objects in the poset. Since each hom-collection has at most one arrow, the associator and unitors are automatically identity morphisms. [step 2.1, L1, L2, L3]

4.1 Therefore the associated category is strict monoidal. [step 3.1, L3] ∎
