---
id: thm-separable-bimodule-relative-tensor-is-associative
kind: theorem
title: Relative tensor product gives associative composition of separable bimodules
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - lem-relative-tensor-product-from-separability-idempotent
  - def-separable-algebra-and-bimodule-in-fusion-category
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Douglas and Reutter, Fusion 2-Categories and a State-Sum Invariant for 4-Manifolds, Construction 2.1.19
      url: https://arxiv.org/pdf/1812.11933
    - title: Décoppet and Yu, Fiber 2-Functors and Tambara-Yamagami Fusion 2-Categories, §2.3
      url: https://arxiv.org/pdf/2306.08117
---

## Statement

For separable algebra objects in a finite semisimple monoidal category, take objects to be separable algebras, 1-morphisms $A\to B$ to be $A$-$B$ bimodules, and 2-morphisms to be bimodule maps. Composition is $X\circ Y=X\otimes_B Y$ with order fixed so $X:A\to B$ and $Y:B\to D$ compose as $X\otimes_B Y:A\to D$. This composition has canonical associators and unitors satisfying the bicategory pentagon and interchange equations; its units are the regular bimodules $_AA_A$.

## Facts & Assumptions


**Given:** Separable algebras and bimodules as in [[def-separable-algebra-and-bimodule-in-fusion-category]].

[F1] [[lem-relative-tensor-product-from-separability-idempotent]]: Each $X\otimes_B Y$ corepresents maps balanced over $B$, uniquely up to a unique canonical isomorphism.

[F2] [[def-separable-algebra-and-bimodule-in-fusion-category]]: Bimodule morphisms preserve the left and right actions, and the regular $A$-$A$ bimodule has multiplication actions.

## Proof

1.1 Let $X:A\to B$, $Y:B\to D$, and $Z:D\to E$. Both $(X\otimes_B Y)\otimes_D Z$ and $X\otimes_B(Y\otimes_D Z)$ receive a map from $X\otimes Y\otimes Z$ that is balanced in the $B$- and $D$-slots. Conversely, a map from $X\otimes Y\otimes Z$ balanced in both slots factors uniquely through either parenthesization: first apply the universal property in [F1] to one slot, then to the other. The two iterated products therefore represent the same functor of the target object. [F1, given, construct]

2.1 The representing property in step 1.1 gives a unique isomorphism $a_{X,Y,Z}:(X\otimes_B Y)\otimes_D Z\longrightarrow X\otimes_B(Y\otimes_D Z)$ preserving the universal three-balanced map; applying the same property in reverse gives its inverse. For four composable bimodules, both composites around the pentagon preserve the same universal four-balanced map. Uniqueness therefore makes the two composites equal, which is the pentagon equation. [step 1.1, algebra]

2.2 The regular bimodule $A$ is a left and right unit. The action maps $A\otimes_A X\to X$ and $X\otimes_A A\to X$ are balanced. Their inverses are induced by the algebra unit $\eta_A$ and the relevant unitors. The action and unit laws show the two composites are identities; the triangle equation for these unitors follows because its two paths agree on the universal balanced map, so step 1.1 forces equality. [F1, F2, algebra]

3.1 Bimodule maps $f:X\to X'$ and $g:Y\to Y'$ induce the unique map $f\otimes_B g$ preserving the universal balanced map. For composable triples of bimodule maps, either horizontal-then-vertical or vertical-then-horizontal composition has the same composite with that universal map, since each is the ordinary composite of $f,g$ on the tensor factors. Uniqueness from [F1] gives equality; this is interchange. Thus these data form the stated bicategory. [F1, step 1.1, step 2.1, step 2.2, algebra] ∎
