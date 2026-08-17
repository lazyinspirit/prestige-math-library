---
id: thm-a-monadic-functor-is-conservative
kind: theorem
title: "Every monadic functor is conservative"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-monadic-and-strictly-monadic-functor, def-conservative-functor, def-t-algebra-and-algebra-homomorphism, prop-fully-faithful-functors-reflect-isomorphisms]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Lemma 5.6.1"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement

Every monadic functor reflects isomorphisms; equivalently, every monadic functor is conservative ([[def-conservative-functor]]).

## Facts & Assumptions

**Given:** A monad $T$, its algebra homomorphisms ([[def-t-algebra-and-algebra-homomorphism]]), a monadic functor with comparison equivalence as in [[def-monadic-and-strictly-monadic-functor]], and the fact that fully faithful functors reflect isomorphisms ([[prop-fully-faithful-functors-reflect-isomorphisms]]).

## Proof

**Proof technique:** direct.

1.1 Let $f:(A,a)\to(B,b)$ be an algebra homomorphism whose underlying morphism has inverse $g$. From $f\circ a=b\circ T(f)$, the inverse equations, and functoriality, one obtains $g\circ b=a\circ T(g)$ by composing with $f$ and cancelling it; hence $g$ is an algebra homomorphism. [given]

2.1 Therefore the Eilenberg–Moore forgetful functor reflects isomorphisms: an underlying inverse is automatically an inverse inside the algebra category by step 1.1. [step 1.1]

3.1 For a monadic $U$, its comparison $K$ is an equivalence and hence fully faithful. If $U(f)=U^TK(f)$ is an isomorphism, step 2.1 makes $K(f)$ an isomorphism, and full faithfulness reflects that isomorphism back to $f$; thus $U$ is conservative. [step 2.1, given] ∎
