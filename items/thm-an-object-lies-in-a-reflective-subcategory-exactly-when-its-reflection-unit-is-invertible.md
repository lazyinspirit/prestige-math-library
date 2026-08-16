---
id: thm-an-object-lies-in-a-reflective-subcategory-exactly-when-its-reflection-unit-is-invertible
kind: theorem
title: "An ambient object lies in the essential image of a reflective inclusion exactly when its reflection unit is invertible"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-reflective-subcategory-and-reflector, thm-the-counit-of-a-reflection-is-an-isomorphism, def-isomorphism-groupoid-and-connected-category, def-adjunction-by-unit-counit-and-triangle-identities]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-16
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

[L1] For a reflector onto a full subcategory, every component $\varepsilon_A:RI(A)\to A$ of the counit is an isomorphism ([[thm-the-counit-of-a-reflection-is-an-isomorphism]]).

[L2] A morphism $f:A\to B$ is an isomorphism if there is $g:B\to A$ with $g\circ f=1_A$ and $f\circ g=1_B$; such a $g$ is unique and is denoted $f^{-1}$ ([[def-isomorphism-groupoid-and-connected-category]]).

[L3] For an adjunction $F\dashv G$ with unit $\eta$ and counit $\varepsilon$, the triangle identities hold componentwise: $\varepsilon_{Fc}\circ F(\eta_c)=1_{Fc}$ and $G(\varepsilon_d)\circ\eta_{Gd}=1_{Gd}$ ([[def-adjunction-by-unit-counit-and-triangle-identities]]).

## Proof

**Proof technique:** direct.

1.1 If $\eta_C$ is invertible, it itself displays $C$ as isomorphic to the included object $I(R(C))$, so $C$ lies in the essential image. [given, L2]

2.1 Conversely, let $u:C\to I(A)$ be an isomorphism. Naturality of $\eta$ gives $IR(u)\circ\eta_C=\eta_{I(A)}\circ u$. The map $IR(u)$ is invertible because a functor sends the inverse of $u$ to its inverse. Applying $R\dashv I$ in [L3] at $d=A$ gives $I(\varepsilon_A)\circ\eta_{I(A)}=1_{I(A)}$, and $I(\varepsilon_A)$ is invertible because $\varepsilon_A$ is by [L1] and functors preserve inverses; composing that identity with $I(\varepsilon_A)^{-1}$ on the left gives $\eta_{I(A)}=I(\varepsilon_A)^{-1}$, which is therefore an isomorphism. Hence $\eta_C=IR(u)^{-1}\circ\eta_{I(A)}\circ u$. A composite $g\circ f$ of isomorphisms is an isomorphism, since $f^{-1}\circ g^{-1}$ is a two-sided inverse for it by associativity and the identity laws; applying this twice and using [L2] makes $\eta_C$ invertible. [step 1.1, L1, L2, L3] ∎
