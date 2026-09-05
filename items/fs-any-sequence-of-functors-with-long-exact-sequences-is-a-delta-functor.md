---
id: fs-any-sequence-of-functors-with-long-exact-sequences-is-a-delta-functor
kind: false-statement
title: "FALSE: any sequence of functors with long exact sequences is a delta functor"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-homological-delta-functor, def-cohomological-delta-functor, prop-homology-of-complexes-satisfies-the-delta-functor-naturality-and-exactness-laws, ex-a-degreewise-split-sequence-with-nonzero-connecting-map]
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
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 2 `Derived Functors`"
      url: "https://math.mit.edu/~hrm/palestine/weibel/02-derived_functors.pdf"
pipeline_run: frontier-30
---

## Statement

> **False.** Any family of functors that sends every short exact sequence to a
> long exact sequence is automatically a delta functor.
## Facts & Assumptions

**Given:** The homology delta functor on complexes and one short exact sequence of complexes whose connecting map is nonzero.

[L1] A delta functor requires naturality of the connecting maps, not only exactness of the long sequence ([[def-homological-delta-functor]], [[def-cohomological-delta-functor]]).

[L2] Homology of complexes is a genuine homological delta functor ([[prop-homology-of-complexes-satisfies-the-delta-functor-naturality-and-exactness-laws]]).

[L3] There exists a short exact sequence of complexes with a nonzero connecting map ([[ex-a-degreewise-split-sequence-with-nonzero-connecting-map]]).

## Refutation

**Proof technique:** direct.

1.1 Start from the homology delta functor of [L2]. Keep all functors $H_n$ and all connecting maps unchanged except on one chosen short exact sequence with nonzero connector from [L3], where replace the connecting map by its negative. Each long exact sequence stays exact, because negating one map does not change its image or kernel. [L2, L3, given, construct]

2.1 By construction, the modified family still has long exact sequences, but on an isomorphism between the altered sequence and an unaltered copy the connecting square no longer commutes: one side uses $\partial$ and the other uses $-\partial$, which are different because $\partial\neq 0$. Thus [L1] fails, so the modified family is not a delta functor. [L1, step 1.1, algebra] ∎
