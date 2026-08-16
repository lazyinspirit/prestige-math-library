---
id: thm-algebras-for-an-idempotent-monad-form-a-reflective-subcategory
kind: theorem
title: "Algebras for an idempotent monad form a reflective subcategory"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-idempotent-monad, def-t-algebra-and-algebra-homomorphism, def-eilenberg-moore-category, def-reflective-subcategory-and-reflector]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Proposition 5.3.3(i)"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement

Let $(T,\eta,\mu)$ be an idempotent monad on $\mathcal C$. An object $A$ admits a $T$-algebra structure if and only if $\eta_A:A\to TA$ is an isomorphism, and then the structure is uniquely $\eta_A^{-1}$. The forgetful functor identifies $\mathcal C^T$ with the full reflective subcategory of such objects, with reflector $T$.

## Facts & Assumptions

**Given:** An idempotent monad ([[def-idempotent-monad]]), its algebras ([[def-t-algebra-and-algebra-homomorphism]]), and its Eilenberg–Moore category ([[def-eilenberg-moore-category]]).

## Proof

**Proof technique:** direct.

1.1 If $a:TA\to A$ is an algebra structure, then $a\circ\eta_A=1_A$. Naturality of $\eta$ at $a$ and idempotence, which gives $\eta_{TA}=T(\eta_A)$, imply $\eta_A\circ a=T(a)\circ\eta_{TA}=T(a\circ\eta_A)=1_{TA}$; hence $a=\eta_A^{-1}$. [given]

2.1 Conversely, if $\eta_A$ is invertible, put $a=\eta_A^{-1}$. The unit axiom is immediate, and naturality of $\eta$ together with the monad unit laws gives $a\circ T(a)=a\circ\mu_A$; step 1.1 shows this structure is unique. [given, step 1.1]

3.1 Naturality of $\eta$ shows every base morphism between two such fixed objects commutes with their inverse-unit algebra structures, so the subcategory is full. The unit $\eta_A:A\to TA$ is universal from $A$ to this subcategory, since $TA$ is fixed and every map to a fixed object extends uniquely through $\eta_A$; hence $T$ is its reflector in the sense of [[def-reflective-subcategory-and-reflector]]. [step 1.1, step 2.1] ∎
