---
id: thm-naturality-of-the-long-exact-sequence-of-a-pair
kind: theorem
title: "Naturality of the pair long exact sequence"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-long-exact-sequence-of-a-pair-in-singular-homology, prop-relative-homology-is-functorial-for-maps-of-pairs, cor-the-long-exact-homology-sequence-is-natural]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology, §2.1"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf"
pipeline_run: frontier-31a
---

## Statement

A map of pairs $f:(X,A)\to(Y,B)$ induces a commuting morphism from the long
exact sequence of $(X,A)$ to that of $(Y,B)$, including the connecting maps.

## Facts & Assumptions

**Given:** A map of pairs $f:(X,A)\to(Y,B)$.

## Proof

**Proof technique:** direct.

1.1 The maps on $A$, $X$, and quotient chains give a commuting morphism of the short exact sequences used for the two pair sequences. [given, construct]

2.1 Naturality of the homological long exact sequence makes every resulting square commute. In particular, chainwise $f_\#(\partial c)=\partial f_\#(c)$ gives commutation at the connector. [step 1.1, algebra] ∎
