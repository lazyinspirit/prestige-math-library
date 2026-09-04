---
id: fs-the-definition-of-a-derived-map-may-depend-on-the-chosen-comparison-lift
kind: false-statement
title: "FALSE: the definition of a derived map may depend on the chosen comparison lift"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-left-derived-map-relative-to-resolution-data, def-right-derived-map-relative-to-resolution-data, lem-the-induced-homology-map-is-independent-of-the-comparison-lift, lem-the-induced-cohomology-map-is-independent-of-the-injective-comparison-extension]
proof_strategy: direct
verification:
  audited: 2026-09-04
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

Assume the Axiom of Dependent Choice.

The definition of a derived map may depend on which comparison lift or
comparison extension is chosen.
## Facts & Assumptions

**Given:** The Axiom of Dependent Choice and a morphism between objects with
supplied resolutions.

[L1] Left derived maps are defined from comparison lifts
([[def-left-derived-map-relative-to-resolution-data]]).

[L2] Right derived maps are defined from comparison extensions
([[def-right-derived-map-relative-to-resolution-data]]).

[L3] The induced homology map is independent of the chosen projective
comparison lift
([[lem-the-induced-homology-map-is-independent-of-the-comparison-lift]]).

[L4] The induced cohomology map is independent of the chosen injective
comparison extension
([[lem-the-induced-cohomology-map-is-independent-of-the-injective-comparison-extension]]).

## Refutation

**Proof technique:** direct.

1.1 On the projective side, [L1] defines the derived map from a comparison lift, and [L3] proves that any two such lifts induce the same homology map. [L1, L3, given]

2.1 On the injective side, [L2] defines the derived map from a comparison extension, and [L4] proves that any two such extensions induce the same cohomology map. Therefore the displayed claim is false on both sides. [L2, L4, step 1.1] ∎
