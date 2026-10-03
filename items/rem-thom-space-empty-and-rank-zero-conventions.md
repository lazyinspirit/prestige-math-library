---
id: rem-thom-space-empty-and-rank-zero-conventions
kind: remark
title: "Empty-base and rank-zero Thom conventions"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: ["def-disk-bundle-sphere-bundle-and-thom-space", "prop-thom-space-of-a-trivial-rank-r-bundle-is-a-suspension-smash-product"]
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "May, A Concise Course in Algebraic Topology, Chapter 23 §5"
      url: "https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
      locator: "printed pp.194–196; disk/sphere models, Thom normalization; stabilization on p.196"
---

## Conventions

The based quotient convention gives $\operatorname{Th}(0_B)=B_+$, even though the sphere bundle is empty. For $B=\varnothing$, the Thom space is the one-point based space. These are the conventions already proved in [[prop-thom-space-of-a-trivial-rank-r-bundle-is-a-suspension-smash-product]] and defined in [[def-disk-bundle-sphere-bundle-and-thom-space]]. A rank-zero collapse of a union of components is the identity on that union and sends the other components to the basepoint.
