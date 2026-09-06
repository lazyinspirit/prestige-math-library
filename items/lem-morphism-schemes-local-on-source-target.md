---
id: lem-morphism-schemes-local-on-source-target
kind: lemma
title: "Morphisms of schemes are local on compatible open covers"
status: published
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-morphism-of-schemes, def-affine-open-subscheme, thm-gluing-ringed-and-locally-ringed-spaces]
proof_strategy: direct
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "The Stacks Project, Schemes, Section 14"
      url: "https://stacks.math.columbia.edu/tag/01JB"
---
## Statement

Compatible morphisms of schemes on an open cover of a scheme $X$ glue uniquely
to a morphism from $X$; two morphisms out of $X$ are equal if their restrictions
to an open cover are equal. Both assertions may be checked after affine-open
refinement of source and target.

## Facts & Assumptions

**Given:** An open cover of $X$ and compatible local scheme morphisms.

## Proof

**Proof technique:** direct.

1.1 The underlying continuous maps agree on overlaps and therefore glue to a unique continuous map from $X$. [given, construct]

2.1 Compatibility of the maps of structure sheaves on overlaps glues their sheaf maps, and locality on stalks is local on $X$; thus the glued map is a scheme morphism. [step 1.1, construct]

3.1 Restricting a hypothetical equality to the cover proves necessity, while uniqueness in the gluing construction proves sufficiency; refining by affine opens preserves the same argument. [step 1.1, step 2.1] ∎
