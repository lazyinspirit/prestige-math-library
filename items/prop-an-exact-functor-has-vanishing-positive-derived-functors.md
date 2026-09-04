---
id: prop-an-exact-functor-has-vanishing-positive-derived-functors
kind: proposition
title: "An exact functor has vanishing positive derived functors"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-exact-functor-between-abelian-categories, def-left-derived-object-relative-to-projective-resolution-data, def-right-derived-object-relative-to-injective-resolution-data, thm-an-exact-functor-commutes-with-homology]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 2 `Derived Functors`"
      url: "https://math.mit.edu/~hrm/palestine/weibel/02-derived_functors.pdf"
pipeline_run: frontier-29
---
## Statement

Let $P$ be a supplied projective resolution datum on a class $\mathcal D_P$,
let $I$ be a supplied injective resolution datum on a class $\mathcal D_I$,
and let $F:\mathcal A\to\mathcal B$ be an exact functor between abelian
categories. Then for every $A\in\mathcal D_P$ and every $n>0$,
$$L_n^PF(A)=0,$$
and for every $B\in\mathcal D_I$ and every $n>0$,
$$R_I^nF(B)=0.$$
## Facts & Assumptions

**Given:** An integer $n>0$, an object $A\in\mathcal D_P$, and an object $B\in\mathcal D_I$.

[L1] The left and right derived objects are the homology or cohomology of the deleted chosen resolutions after applying $F$ ([[def-left-derived-object-relative-to-projective-resolution-data]], [[def-right-derived-object-relative-to-injective-resolution-data]]).

[L2] Exact functors commute with homology of chain complexes ([[thm-an-exact-functor-commutes-with-homology]]).

[L3] Exactness means that $F$ is exact on both the projective and injective resolution complexes ([[def-exact-functor-between-abelian-categories]]).

## Proof

**Proof technique:** direct.

1.1 The deleted projective resolution of $A$ is exact in every positive degree. By [L3], applying $F$ preserves that exactness, so the resulting chain complex has zero homology in every positive degree. Using [L1], this says $L_n^PF(A)=0$ for $n>0$. [L1, L3, given, algebra]

1.2 Read the deleted injective resolution of $B$ as a reindexed chain complex. It is exact in every positive cohomological degree, and [L3] preserves that exactness after applying $F$. By [L2], the resulting homology, hence cohomology, is zero in every positive degree. Therefore $R_I^nF(B)=0$ for $n>0$. [L1, L2, L3, algebra]

2.1 Steps 1.1 and 1.2 prove the claimed vanishing on both sides. [step 1.1, step 1.2] ∎
