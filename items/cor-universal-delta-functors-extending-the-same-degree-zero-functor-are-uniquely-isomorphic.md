---
id: cor-universal-delta-functors-extending-the-same-degree-zero-functor-are-uniquely-isomorphic
kind: corollary
title: "Universal delta functors extending the same degree-zero functor are uniquely isomorphic"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-universal-delta-functor, def-morphism-of-homological-delta-functors, def-morphism-of-cohomological-delta-functors]
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 12.12: Cohomological delta-functors"
      url: "https://stacks.math.columbia.edu/tag/010P"
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 2 `Derived Functors`"
      url: "https://math.mit.edu/~hrm/palestine/weibel/02-derived_functors.pdf"
pipeline_run: frontier-30
---

## Statement

Let $F$ be a fixed degree-zero functor.

If $S$ and $T$ are universal homological delta functors equipped with chosen
natural isomorphisms
$$\sigma:S_0\xrightarrow{\sim}F,\qquad \tau:T_0\xrightarrow{\sim}F,$$
then there is a unique isomorphism of homological delta functors
$$S\xrightarrow{\sim}T$$
whose degree-zero part is $\tau^{-1}\sigma:S_0\xrightarrow{\sim}T_0$.

If $S$ and $T$ are universal cohomological delta functors equipped with chosen
natural isomorphisms
$$\sigma:S^0\xrightarrow{\sim}F,\qquad \tau:T^0\xrightarrow{\sim}F,$$
then there is a unique isomorphism of cohomological delta functors
$$S\xrightarrow{\sim}T$$
whose degree-zero part is $\tau^{-1}\sigma:S^0\xrightarrow{\sim}T^0$.
## Facts & Assumptions

**Given:** Two universal delta functors together with chosen degree-zero identifications to $F$.

[L1] Universality for homological and cohomological delta functors is the unique extension property from degree zero ([[def-universal-delta-functor]]).

[L2] Morphisms of delta functors are the degreewise maps compatible with the connecting morphisms ([[def-morphism-of-homological-delta-functors]], [[def-morphism-of-cohomological-delta-functors]]).

## Proof

**Proof technique:** direct.

1.1 In the homological case, set $t_0=\tau^{-1}\sigma:S_0\to T_0$. Applying [L1] to $t_0$ gives a morphism $\phi:S\to T$, and applying [L1] to $t_0^{-1}$ gives a morphism $\psi:T\to S$. Their composites extend $\operatorname{id}_{S_0}$ and $\operatorname{id}_{T_0}$ respectively, so uniqueness in [L1] forces $\psi\phi=\operatorname{id}_S$ and $\phi\psi=\operatorname{id}_T$. Hence $\phi$ is the unique isomorphism extending $\tau^{-1}\sigma$. [L1, L2, given, algebra]

2.1 The cohomological case is identical, with the maps oriented out of the universal functors as required by [L1]. [L1, L2, step 1.1] ∎
