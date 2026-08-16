---
id: thm-the-cokleisli-adjunction-induces-the-given-comonad
kind: theorem
title: "The co-Kleisli adjunction induces the given comonad"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-cokleisli-category, thm-the-kleisli-adjunction-induces-the-given-monad]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Lemma 5.2.12 by formal duality"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement

For a comonad $G$ on $\mathcal C$, there is an adjunction

$$L_G:\mathcal C_G^{\mathrm{coKl}}\rightleftarrows\mathcal C:R_G$$

with $L_G(A)=GA$ and $R_G(A)=A$. Its induced comonad $L_GR_G$ is $G$ on the nose.

## Facts & Assumptions

**Given:** A comonad $(G,\varepsilon,\delta)$ and its co-Kleisli category.

[L1] A co-Kleisli arrow $A\to B$ is a base arrow $GA\to B$, with composition determined by $\delta$ ([[def-cokleisli-category]]).

[L2] The Kleisli adjunction construction induces its original monad ([[thm-the-kleisli-adjunction-induces-the-given-monad]]).

## Proof

**Proof technique:** direct.

1.1 Define $L_G(A)=GA$ and $L_G(f)=G(f)\delta_A$ for $f:GA\to B$. Define $R_G(A)=A$ and let $R_G(u)$ be the co-Kleisli arrow represented by $u\varepsilon_A:GA\to B$. These are the formal duals of the Kleisli functors. [L1, L2]

2.1 Co-Kleisli associativity and unit laws make both assignments functorial. The equality $\mathcal C(L_GA,B)=\mathcal C(GA,B)=\mathcal C_G^{\mathrm{coKl}}(A,R_GB)$ is a natural identity of hom-sets, so $L_G\dashv R_G$. [L1, step 1.1]

3.1 The counit of this adjunction is $\varepsilon_A:GA\to A$, while its unit at $A$ is the co-Kleisli arrow represented by $1_{GA}$. The triangle identities are the co-Kleisli unit laws, and the induced comultiplication is $L_G$ of that unit, namely $\delta_A$. Thus the induced comonad is $(G,\varepsilon,\delta)$. [L1, L2, step 1.1, step 2.1] ∎
