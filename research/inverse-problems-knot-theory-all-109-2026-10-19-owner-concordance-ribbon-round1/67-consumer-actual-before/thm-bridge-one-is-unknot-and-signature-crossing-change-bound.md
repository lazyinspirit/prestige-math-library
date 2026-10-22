---
id: thm-bridge-one-is-unknot-and-signature-crossing-change-bound
kind: theorem
title: Bridge number one characterizes the unknot and signature bounds unknotting number
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 17
deps:
  - thm-bridge-one-is-unknot
  - thm-unknotting-number-at-least-half-levine-tristram-signature
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Jennifer Schultens, Additivity of Bridge Numbers of Knots"
      url: "https://www.math.ucdavis.edu/~jcs/pubs/addbri15.pdf"
      locator: "Definition 1, printed pp. 1–2, bridge-position convention"
    - title: "Ozsváth, Stipsicz, and Szabó, Grid Homology for Knots and Links"
      url: "https://web.math.princeton.edu/~petero/GridHomologyBook.pdf"
      locator: "§2.3, Proposition 2.3.9, printed pp. 24–25, signature crossing-change bound"
---

## Statement

Assume full AC. For every smooth oriented knot $K$, $b(K)=1$ if and only if $K$ is ambient isotopic through orientation-preserving diffeomorphisms to the fixed oriented coordinate circle, and the classical signature satisfies $|\sigma_{-1}(K)|\le 2u(K)$, where $u(K)$ is the minimum number of crossing changes needed to reach that circle.

## Statement references

[[thm-bridge-one-is-unknot|The bridge-number-one characterization]]

[[thm-unknotting-number-at-least-half-levine-tristram-signature|The signature lower bound for unknotting number]]

## Unresolved proof obligation

The bridge-number claim is established separately in `thm-bridge-one-is-unknot`. The second conjunct remains unproved until the S-equivalence, signature-invariance, and -1 regular-parameter obligations recorded in `thm-unknotting-number-at-least-half-levine-tristram-signature` are discharged. No complete proof of the conjunction is supplied here.
