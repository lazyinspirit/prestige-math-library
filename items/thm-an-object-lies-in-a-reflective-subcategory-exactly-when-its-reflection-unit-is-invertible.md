---
id: thm-an-object-lies-in-a-reflective-subcategory-exactly-when-its-reflection-unit-is-invertible
kind: theorem
title: "An ambient object lies in the essential image of a reflective inclusion exactly when its reflection unit is invertible"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-reflective-subcategory-and-reflector, thm-the-counit-of-a-reflection-is-an-isomorphism, def-isomorphism-groupoid-and-connected-category]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, section 4.5"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement

For a reflection $R\dashv I$ with unit $\eta$, an object $C\in\mathcal C$ is isomorphic to an object in the image of $I$ if and only if
$$\eta_C:C\to IR(C)$$
is an isomorphism.

## Facts & Assumptions

**Given:** A reflection $R\dashv I$ as in [[def-reflective-subcategory-and-reflector]], with unit $\eta$, and an object $C\in\mathcal C$.

[L1] For every $A\in\mathcal A$, the reflection counit $\varepsilon_A:RI(A)\to A$ is an isomorphism and $I(\varepsilon_A)\circ\eta_{I(A)}=1_{I(A)}$ ([[thm-the-counit-of-a-reflection-is-an-isomorphism]]).

[L2] An isomorphism has a unique two-sided inverse, and composites of isomorphisms are isomorphisms ([[def-isomorphism-groupoid-and-connected-category]]).

## Proof

**Proof technique:** direct.

1.1 If $\eta_C$ is invertible, it itself displays $C$ as isomorphic to the included object $I(R(C))$, so $C$ lies in the essential image. [given, L2]

2.1 Conversely, let $u:C\to I(A)$ be an isomorphism. Naturality of $\eta$ gives $IR(u)\circ\eta_C=\eta_{I(A)}\circ u$. The map $IR(u)$ is invertible because a functor sends the inverse of $u$ to its inverse, while $\eta_{I(A)}=I(\varepsilon_A)^{-1}$ by [L1]. Hence $\eta_C=IR(u)^{-1}\circ\eta_{I(A)}\circ u$ is a composite of isomorphisms and is invertible by [L2]. [step 1.1, L1, L2] ∎
