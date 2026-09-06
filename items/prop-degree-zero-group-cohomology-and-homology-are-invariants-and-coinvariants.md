---
id: prop-degree-zero-group-cohomology-and-homology-are-invariants-and-coinvariants
kind: proposition
title: "Degree-zero group (co)homology"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-group-cohomology-as-a-derived-functor, def-group-homology-as-a-derived-functor, thm-zero-th-right-derived-functor-of-a-left-exact-functor-recovers-the-functor, thm-zero-th-left-derived-functor-of-a-right-exact-functor-recovers-the-functor]
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Weibel, Definition 6.1.2"
      url: "https://math.mit.edu/~hrm/palestine/weibel/06-group_homology_and_cohomology.pdf"
---

## Statement

For every left $G$-module $M$, $H^0(G;M)=M^G$ and $H_0(G;M)=M_G$, naturally in $M$.

## Proof

**Given:** A left $G$-module $M$.

1.1 The zeroth right derived functor of invariants recovers the invariants functor. [given]

2.1 The zeroth left derived functor of coinvariants recovers coinvariants. Substitute the two definitions of group (co)homology. [step 1.1] ∎
