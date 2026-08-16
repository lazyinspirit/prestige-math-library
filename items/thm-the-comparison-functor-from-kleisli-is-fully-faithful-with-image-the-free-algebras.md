---
id: thm-the-comparison-functor-from-kleisli-is-fully-faithful-with-image-the-free-algebras
kind: theorem
title: "The comparison from the Kleisli category is fully faithful with image the free algebras"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-the-kleisli-factorisation-functor-exists-and-is-unique, thm-the-comparison-functor-exists-and-is-unique, def-free-t-algebra, def-full-faithful-and-essentially-surjective-functor]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Lemma 5.2.14"
      url: "https://emilyriehl.github.io/files/context.pdf"
    - title: "B. Richter, From Categories to Homotopy Theory, Proposition 6.3.5"
      url: "https://www.math.uni-hamburg.de/personen/richter/bookdraft.pdf"
pipeline_run: null
---

## Statement

For a monad $T$ on $\mathcal C$, the canonical comparison functor

$$M:\mathcal C_T\to\mathcal C^T$$

sends $A$ to the free algebra $(TA,\mu_A)$ and is fully faithful. Its strict image is exactly the full subcategory of free $T$-algebras.

## Facts & Assumptions

**Given:** The Kleisli and Eilenberg–Moore resolutions, their comparison functors ([[thm-the-kleisli-factorisation-functor-exists-and-is-unique]], [[thm-the-comparison-functor-exists-and-is-unique]]), and the definition of a free algebra ([[def-free-t-algebra]]).

## Proof

**Proof technique:** direct.

1.1 The comparison sends $A$ to $(TA,\mu_A)$ and a Kleisli arrow $f:A\to TB$ to the algebra homomorphism $\mu_B\circ T(f):TA\to TB$. [given]

2.1 For every $A,B$, the map $f\mapsto\mu_B\circ T(f)$ is a bijection from $\mathcal C(A,TB)=\mathcal C_T(A,B)$ to the algebra homomorphisms $(TA,\mu_A)\to(TB,\mu_B)$; its inverse sends $h$ to $h\circ\eta_A$. The monad unit laws show the two composites are identities, using the algebra-homomorphism equation for $h$ in one direction. [step 1.1, given]

3.1 Thus every induced hom-set map is bijective, so $M$ is fully faithful ([[def-full-faithful-and-essentially-surjective-functor]]); step 1.1 also shows that its objects are precisely the free algebras, giving the claimed strict image. [step 2.1] ∎
