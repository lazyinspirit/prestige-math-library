---
id: op-two-boundary-slopes-characterize-torus-knots
kind: open-problem
title: Do exactly two boundary slopes characterize torus knots?
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - def-axiom-of-choice
  - def-boundary-slope-of-an-incompressible-surface
  - def-coprime-torus-knot
  - def-knot-exterior
  - def-knot-meridian-and-preferred-longitude
  - thm-knot-exterior-homology-and-longitude
justified_by: []
axiom_use: Full AC is the convention of the supplied ordinary A-polynomial
  or boundary-slope definitions; this open question asserts no proof.
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: John A. Baldwin and Steven Sivek, Torus knots, the A-polynomial, and
        SL(2,C), discussion following Question 1.6
      url: https://arxiv.org/pdf/2405.19197v2
verification:
  sources_checked:
    date: "2026-10-22"
    scope: "Formulation and unresolved status reviewed in the completed delegated build; source-reading limits and evidence remain recorded in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    by: "gpt-6.1-sol delegated native review; publication authorized by owner"
---

## Open problem

Assume the Axiom of Choice. If a nontrivial knot $K\subset S^3$ has exactly two distinct boundary slopes, must $K$ be a torus knot? The two slopes of a nontrivial torus knot $T_{p,q}$ are $0$ and $pq$ in the meridian-longitude convention where $a[\lambda]+b[\mu]$ has slope $b/a$.

## Open problem references

[Baldwin and Sivek, discussion following Question 1.6](https://arxiv.org/pdf/2405.19197v2)

## Status

Open. Baldwin–Sivek describe the two-boundary-slope statement as a folklore conjecture and give only a partial result for nontrivial fibered non-torus knots. A web search on 2026-10-19 found 2-bridge partial results but no resolution for all knots. No proof is asserted here.
