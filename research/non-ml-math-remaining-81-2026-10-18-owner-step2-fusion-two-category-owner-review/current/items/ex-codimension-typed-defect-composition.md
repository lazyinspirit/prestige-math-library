---
id: ex-codimension-typed-defect-composition
kind: example
title: Typed object, 1-morphism, and 2-morphism defect composition
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps:
  - def-weak-linear-two-category
  - def-finite-semisimple-module-category-over-fusion-category
  - def-fusion-two-category
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Décoppet and Yu, Fiber 2-Functors and Tambara-Yamagami Fusion 2-Categories, §1
      url: https://arxiv.org/pdf/2306.08117
    - title: Douglas and Reutter, Fusion 2-Categories and a State-Sum Invariant for 4-Manifolds, §2.1
      url: https://arxiv.org/pdf/1812.11933
---

## Example

In a chosen 2+1-dimensional defect theory modeled by a fusion 2-category, label objects $A,B,C$ as surface defects, 1-morphisms $f:A\to B$ and $g:B\to C$ as line junctions, and 2-morphisms $\alpha:f\Rightarrow f'$ as point junctions. This is a type dictionary conditional on that chosen theory, not a theorem identifying every algebraic object with a physical defect.

## Facts & Assumptions


**Given:** A weak 2-category with the source, target, and composition data in [[def-weak-linear-two-category]].

[F1] [[def-fusion-two-category]]: Tensor product is part of the monoidal structure; composition is the separately typed 1-morphism composition of the underlying 2-category.

[F2] [[def-weak-linear-two-category]]: A 1-morphism has a specified source and target, and horizontal composition is defined only for matching endpoints.

## Verification

1.1 If $f:A\to B$ and $g:B\to C$, their categorical composite has type $g\circ f:A\to C$. A point junction $\alpha:f\Rightarrow f'$ lies in the single hom category $\mathcal B(A,B)$, and vertical composition is defined only when the target 1-morphism of one 2-cell is the source 1-morphism of the next. [F2, given, algebra]

2.1 For $\alpha:f\Rightarrow f'$ in $\mathcal B(A,B)$ and $\beta:g\Rightarrow g'$ in $\mathcal B(B,C)$, functorial horizontal composition gives $\beta\ast\alpha:g\circ f\Rightarrow g'\circ f'$ in $\mathcal B(A,C)$. The object tensor $A\otimes C$ has a different type from the composite $g\circ f$; no physical realization or identification of these operations follows from this typing calculation. [F1, F2, step 1.1, algebra] ∎
