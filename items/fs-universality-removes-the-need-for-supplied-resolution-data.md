---
id: fs-universality-removes-the-need-for-supplied-resolution-data
kind: false-statement
title: "FALSE: universality removes the need for supplied resolution data"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-supplied-projective-resolution-datum, def-supplied-injective-resolution-datum, thm-left-derived-functors-from-two-supplied-resolution-data-are-naturally-isomorphic, thm-right-derived-functors-from-two-supplied-injective-resolution-data-are-naturally-isomorphic, thm-derived-functors-are-universal-delta-functors, cor-a-morphism-between-universal-delta-functors-is-determined-in-degree-zero]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 2 `Derived Functors`"
      url: "https://math.mit.edu/~hrm/palestine/weibel/02-derived_functors.pdf"
pipeline_run: frontier-30
---

## Statement

> **False.** Because derived functors are universal delta functors, one never
> needs to supply projective or injective resolution data in their definition.
## Facts & Assumptions

**Given:** The derived-functor construction and its universality theorem.

[L1] Left and right derived objects are defined relative to supplied projective
or injective resolution data
([[def-supplied-projective-resolution-datum]],
[[def-supplied-injective-resolution-datum]]).

[L2] The previous page proves well-definedness only after comparing different
supplied data by natural isomorphism
([[thm-left-derived-functors-from-two-supplied-resolution-data-are-naturally-isomorphic]],
[[thm-right-derived-functors-from-two-supplied-injective-resolution-data-are-naturally-isomorphic]]).

[L3] Universality is a later comparison principle for already constructed delta
functors
([[thm-derived-functors-are-universal-delta-functors]],
[[cor-a-morphism-between-universal-delta-functors-is-determined-in-degree-zero]]).

## Refutation

**Proof technique:** direct.

1.1 The construction of the derived objects starts with the chosen resolution data in [L1]. Without those data there is no deleted resolution to which the functor can be applied. [L1, given, algebra]

2.1 Item [L2] shows that even the basic well-definedness claim is a separate comparison theorem about different supplied data. Only after that construction work is in place does [L3] compare the resulting delta functors abstractly. Therefore universality does not remove the need for supplied resolution data at the definition stage. [L2, L3, step 1.1, algebra] ∎
