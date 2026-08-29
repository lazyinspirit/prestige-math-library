---
id: thm-an-object-is-projective-exactly-when-hom-out-of-it-is-exact
kind: theorem
title: "An object is projective exactly when Hom out of it is exact"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-hom-is-left-exact-in-each-variable,
       def-projective-object,
       def-injective-object,
       thm-projective-object-characterisations,
       thm-injective-object-characterisations,
       def-exact-functor-between-abelian-categories]
justified_by: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Pavel Etingof et al., Tensor Categories, Section 1.6"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
pipeline_run: frontier-23
---

## Statement

Let $P$ and $I$ be objects of an abelian category.

1. $P$ is projective if and only if the functor $\mathcal A(P,-)$ is exact.
2. $I$ is injective if and only if the functor $\mathcal A(-,I)$ is exact.

## Facts & Assumptions

**Given:** An abelian category and objects $P$ and $I$ in it.

[L1] Hom is left exact in each variable
([[thm-hom-is-left-exact-in-each-variable]]).

[L2] Projective objects are exactly those for which Hom out of them sends every
short exact sequence to a short exact sequence
([[def-projective-object]],
[[thm-projective-object-characterisations]]).

[L3] Injective objects are exactly those for which Hom into them sends every
short exact sequence to a short exact sequence
([[def-injective-object]],
[[thm-injective-object-characterisations]]).

[L4] An exact functor is one that is both left exact and right exact
([[def-exact-functor-between-abelian-categories]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the functor $\mathcal A(P,-)$ is always left exact. Therefore, by [L4], it is exact exactly when it is also right exact on every short exact sequence. But [L2] says that extra right-end surjectivity is exactly the projective lifting property. [L1, L2, L4]

2.1 The same argument for the contravariant Hom functor uses [L1], [L3], and [L4]: $\mathcal A(-,I)$ is always left exact, and exactness is equivalent to the additional surjectivity that characterizes injectivity. [L1, L3, L4] ∎
