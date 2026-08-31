---
id: thm-the-internal-hom-is-unique-up-to-unique-natural-isomorphism
kind: theorem
title: "The internal hom is unique up to a unique adjunction-compatible natural isomorphism"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-left-closed-and-right-closed-monoidal-category, thm-adjoints-are-unique-up-to-unique-natural-isomorphism]
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Category Theory in Context, 2nd ed., Proposition 4.3.1 and Definition 4.4.7"
      url: "https://emilyriehl.github.io/files/context.pdf"
    - title: "G. M. Kelly, Basic Concepts of Enriched Category Theory, Section 1.5"
      url: "https://tac.mta.ca/tac/reprints/articles/10/tr10.pdf"
---

## Statement

Fix an object $X$ in a monoidal category. Any two chosen right adjoints to $-\otimes X$ are related by a unique natural isomorphism compatible with their adjunction units and counits, and the analogous assertion holds for two chosen right adjoints to $X\otimes-$. Hence each internal-hom construction, together with its adjunction data, is unique up to a unique adjunction-compatible natural isomorphism.

## Facts & Assumptions

**Given:** An object $X$ in a monoidal category, together with two chosen right adjoints to $-\otimes X$ or two chosen right adjoints to $X\otimes-$.

[L1] Right-closed and left-closed mean exactly that the corresponding tensor functor has a right adjoint ([[def-left-closed-and-right-closed-monoidal-category]]).

[L2] Two right adjoints to the same functor are uniquely naturally isomorphic in a way compatible with the adjunction data ([[thm-adjoints-are-unique-up-to-unique-natural-isomorphism]]).

## Proof

**Proof technique:** direct.

1.1 If $R,R':\mathcal C\to\mathcal C$ are two chosen right adjoints to $-\otimes X$, then they are two right adjoints to the same functor. By [L2] there is a unique natural isomorphism $R\Rightarrow R'$ compatible with the adjunction units and counits. [given, L2]

2.1 By [L1], a right internal hom in the variable $X$ is precisely such a right adjoint $R=[X,-]$. Therefore any two choices of $[X,-]$, equipped with their adjunction data, are related by the unique natural isomorphism compatible with those units and counits. [step 1.1, L1]

2.2 The same argument with the functor $X\otimes-$ proves the corresponding adjunction-compatible uniqueness for the left internal hom $\langle X,-\rangle$. [step 1.1, L1, L2]

3.1 So both internal-hom constructions, with their adjunction data fixed, are unique up to a unique compatible natural isomorphism. [step 2.1, step 2.2] ∎
