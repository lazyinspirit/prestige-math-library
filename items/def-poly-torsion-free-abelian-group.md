---
id: def-poly-torsion-free-abelian-group
kind: definition
title: Poly-torsion-free abelian groups
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps:
  - def-group-ring
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  scraped: []
  references:
    - title: Tim D. Cochran, Kent E. Orr, and Peter Teichner, “Knot concordance,
        Whitney towers and L²-signatures”
      url: https://arxiv.org/pdf/math/9908117
      locator: §2.1, PTFA group definition
---

## Definition

A group G is poly-torsion-free abelian (PTFA) if it admits a finite subnormal series
1=G_0 ◁ G_1 ◁ ⋯ ◁ G_m=G
in which every quotient G_{j+1}/G_j is torsion-free abelian. The trivial group is PTFA, using the length-zero series. The term “subnormal” means each G_j is normal in G_{j+1}; normality in all of G is not required.

## Definition references

[[def-group-ring|Group rings and coefficient conventions]]

[COT, §2.1](https://arxiv.org/pdf/math/9908117)
