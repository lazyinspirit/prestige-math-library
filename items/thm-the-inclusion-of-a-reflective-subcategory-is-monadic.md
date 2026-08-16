---
id: thm-the-inclusion-of-a-reflective-subcategory-is-monadic
kind: theorem
title: "The inclusion of a reflective full subcategory is monadic"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-monadic-and-strictly-monadic-functor, def-idempotent-monad, thm-algebras-for-an-idempotent-monad-form-a-reflective-subcategory, def-reflective-subcategory-and-reflector, thm-every-adjunction-induces-a-monad-on-the-domain-of-its-left-adjoint, thm-the-counit-of-a-reflection-is-an-isomorphism]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Proposition 5.3.3(ii)"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement

If $\mathcal A$ is a reflective full subcategory of $\mathcal C$, then its inclusion $I:\mathcal A\to\mathcal C$ is monadic.

## Facts & Assumptions

**Given:** A reflection $R\dashv I$ as in [[def-reflective-subcategory-and-reflector]].

[L1] A reflection is an adjunction $R:\mathcal C\rightleftarrows\mathcal A:I$ with $I$ the full inclusion ([[def-reflective-subcategory-and-reflector]]).

[L2] Algebras for an idempotent monad are exactly the objects whose unit is invertible, with the unique inverse-unit structure ([[thm-algebras-for-an-idempotent-monad-form-a-reflective-subcategory]]).

[L3] An adjunction induces the monad formed from its right adjoint after its left adjoint ([[thm-every-adjunction-induces-a-monad-on-the-domain-of-its-left-adjoint]]).

[L4] Every component of the counit of a reflection is an isomorphism ([[thm-the-counit-of-a-reflection-is-an-isomorphism]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] and [L3], the reflection induces the monad $T=IR$ on $\mathcal C$ with multiplication $I\varepsilon R$. By [L4] this multiplication is a natural isomorphism, so $T$ is idempotent ([[def-idempotent-monad]]). [L1, L3, L4]

2.1 By [L2], the Eilenberg–Moore category of $T$ is the full subcategory of objects $C$ for which the reflection unit $C\to IRC$ is invertible. The comparison sends $A\in\mathcal A$ to $(IA,I\varepsilon_A)$, and its essential image is exactly this fixed-object subcategory. [step 1.1, L2]

3.1 Fullness of $I$ makes the comparison fully faithful, and every algebra $(C,\eta_C^{-1})$ has the specified isomorphism $\eta_C:C\to IRC$ to the comparison image of $RC$. Thus the comparison is an equivalence, so $I$ is monadic by [[def-monadic-and-strictly-monadic-functor]]. [step 2.1] ∎
