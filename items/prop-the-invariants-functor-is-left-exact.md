---
id: prop-the-invariants-functor-is-left-exact
kind: proposition
title: "The invariants functor is left exact"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-invariants-are-hom-from-the-trivial-group-ring-module, thm-hom-functors-are-left-exact]
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Weibel, §6.1"
      url: "https://math.mit.edu/~hrm/palestine/weibel/06-group_homology_and_cohomology.pdf"
---

## Statement

If $0\to A\to B\to C$ is exact in left $G$-modules, then $0\to A^G\to B^G\to C^G$ is exact.

## Proof

**Given:** The displayed exact sequence of left $G$-modules.

1.1 Applying $\operatorname{Hom}_{\mathbb Z[G]}(\mathbb Z,-)$ gives an exact sequence at its first two positions by covariant Hom left exactness. [given]

2.1 Transport this sequence through the natural isomorphisms of invariants with Hom from the trivial module. This is exactly the asserted sequence. [step 1.1] ∎
