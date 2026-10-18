---
id: def-weak-linear-two-category
kind: definition
title: Weak linear 2-category
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps:
  - def-category
  - def-functor-and-contravariant-functor
  - def-natural-transformation
  - def-strict-two-category
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: Douglas and Reutter, Fusion 2-Categories and a State-Sum Invariant for 4-Manifolds, §§1.1-1.2
      url: https://arxiv.org/pdf/1812.11933
---

## Definition

Fix a field $k$. A **weak linear 2-category** $\mathcal B$ consists of a class of objects and, for each ordered pair $(A,B)$, a $k$-linear category $\mathcal B(A,B)$. Its objects are called **1-morphisms** and its morphisms are called **2-morphisms**. Each triple $A,B,C$ has a $k$-bilinear composition functor
$$\mathcal B(B,C)\times\mathcal B(A,B)\longrightarrow\mathcal B(A,C),\qquad (g,f)\longmapsto g\circ f,$$
and each $A$ has an identity 1-morphism $1_A\in\mathcal B(A,A)$. A $k$-linear category here means that every hom set is a $k$-vector space and composition is bilinear.

For composable $f:A\to B$, $g:B\to C$, and $h:C\to D$, there is a natural invertible 2-morphism
$$a_{h,g,f}:(h\circ g)\circ f\Longrightarrow h\circ(g\circ f).$$
For each $f:A\to B$ there are natural invertible unit 2-morphisms
$$\ell_f:1_B\circ f\Longrightarrow f,\qquad r_f:f\circ1_A\Longrightarrow f.$$
The associators satisfy the pentagon equation on every fourfold composite; the two unitors and associator satisfy the triangle equation on every pair of composable 1-morphisms. These equations are equalities of 2-morphisms between the indicated parallel 1-morphisms. Vertical composition is composition in each hom category. Horizontal composition is the displayed functor, so functoriality gives the interchange equation between horizontal and vertical composition.

When the associators and unitors are identities, this is a strict 2-category in the sense of [[def-strict-two-category]]. No strictness is imposed in the weak definition.

## Remarks

The source and target of every 2-morphism lie in one hom category. Associators change only the parentheses of a composable string; they do not change its endpoints. No monoidal product on the objects is part of this definition.
