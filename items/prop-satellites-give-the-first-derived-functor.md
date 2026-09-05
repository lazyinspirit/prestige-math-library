---
id: prop-satellites-give-the-first-derived-functor
kind: proposition
title: "Satellites give the first derived functor"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-universal-delta-functor, thm-derived-functors-are-universal-delta-functors, cor-universal-delta-functors-extending-the-same-degree-zero-functor-are-uniquely-isomorphic, thm-left-derived-functors-form-a-homological-delta-functor, thm-right-derived-functors-form-a-cohomological-delta-functor]
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Alexandre Grothendieck, Some aspects of homological algebra (Barr translation)"
      url: "https://ncatlab.org/nlab/files/BarrTranslOf-GrothedieckTohoku.pdf"
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 2 `Derived Functors`"
      url: "https://math.mit.edu/~hrm/palestine/weibel/02-derived_functors.pdf"
pipeline_run: frontier-30
---

## Statement

Assume the Axiom of Dependent Choice.

Let $\mathcal A$ and $\mathcal B$ be abelian categories, and let
$F:\mathcal A\to\mathcal B$ be additive.

If $\mathcal A$ has enough projectives, $F$ is right exact, and $S=(S_n)$ is any universal homological delta functor
equipped with a chosen natural isomorphism $S_0\xrightarrow{\sim}F$, then
$$S_1\cong L_1^PF$$
naturally, for every supplied projective resolution datum $P$ on all objects
of $\mathcal A$. In this sense the first left satellite of $F$,
defined as the degree-one term of a universal homological delta functor
extending $F$, agrees with $L_1^PF$.

If $\mathcal A$ has enough injectives, $F$ is left exact, and $T=(T^n)$ is any universal cohomological delta
functor equipped with a chosen natural isomorphism $T^0\xrightarrow{\sim}F$,
then
$$T^1\cong R_I^1F$$
naturally, for every supplied injective resolution datum $I$ on all objects of
$\mathcal A$. This is the corresponding first right satellite agreement.
## Facts & Assumptions

**Given:** A universal delta functor extending $F$ and the corresponding derived delta functor.

[L1] Derived functors are universal delta functors ([[thm-derived-functors-are-universal-delta-functors]]).

[L2] Two universal delta functors equipped with chosen degree-zero identifications to the same functor are uniquely isomorphic ([[cor-universal-delta-functors-extending-the-same-degree-zero-functor-are-uniquely-isomorphic]]).

[L3] Universality is the structure that defines the satellite terminology used on this page ([[def-universal-delta-functor]]).

[L4] The derived delta functors come with canonical degree-zero identifications to $F$ ([[thm-left-derived-functors-form-a-homological-delta-functor]], [[thm-right-derived-functors-form-a-cohomological-delta-functor]]).

## Proof

**Proof technique:** direct.

1.1 In the homological case, [L1] makes $(L_n^PF)$ universal and [L4] identifies its degree-zero term canonically with $F$. The given satellite functor $S$ is also a universal extension of $F$ by [L3]. Therefore [L2] yields a unique isomorphism of delta functors $S\xrightarrow{\sim}L^PF$, and its degree-one component is the asserted natural isomorphism $S_1\cong L_1^PF$. [L1, L2, L3, L4, given, algebra]

2.1 The cohomological case is identical with $(R_I^nF)$ in place of $(L_n^PF)$. Its degree-one component gives the natural isomorphism $T^1\cong R_I^1F$. [L1, L2, L3, L4, step 1.1] ∎
