---
id: cor-a-morphism-between-universal-delta-functors-is-determined-in-degree-zero
kind: corollary
title: "A morphism between universal delta functors is determined in degree zero"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-universal-delta-functor, def-morphism-of-homological-delta-functors, def-morphism-of-cohomological-delta-functors]
proof_strategy: direct
verification:
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

Let $S$ and $T$ be universal delta functors of the same variance.

In the homological case, two morphisms $u,v:S\to T$ are equal as soon as
$u_0=v_0$.

In the cohomological case, two morphisms $u,v:S\to T$ are equal as soon as
$u^0=v^0$.
## Facts & Assumptions

**Given:** Two morphisms between universal delta functors with the same
degree-zero component.

[L1] Universality says that a degree-zero map has at most one extension to a
morphism of delta functors
([[def-universal-delta-functor]]).

[L2] Morphisms of delta functors are exactly the degreewise compatible maps
([[def-morphism-of-homological-delta-functors]],
[[def-morphism-of-cohomological-delta-functors]]).

## Proof

**Proof technique:** direct.

1.1 In either variance, the two given morphisms are both extensions of the same degree-zero map. By the uniqueness clause in [L1], there is at most one such extension. Therefore the two morphisms coincide in every degree. [L1, L2, given, algebra]

2.1 This is precisely the claim that the full morphism is determined in degree zero. [step 1.1] ∎