---
id: def-satellite-induced-concordance-operator
kind: definition
title: "Satellite operators on concordance classes"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-cdr-satellite-concordance-categories
  - def-locally-flat-topological-knot-concordance
  - def-satellite-pattern-companion-and-winding-number
  - def-smooth-knot-concordance
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
    - title: "Tim D. Cochran, Christopher W. Davis, and Arunima Ray, “Injectivity of satellite operators in knot concordance”"
      url: "https://arxiv.org/pdf/1205.5058v3"
      locator: "§§1–2, satellite maps and strong winding"
    - title: "Arunima Ray, “Slice Knots and Knot Concordance”"
      url: "https://numdam.org/item/10.5802/wbln.39.pdf"
      locator: "§5, satellite conventions"
---

## Definition

Let V=S¹×D² be the standard oriented solid torus, with oriented core, meridional disk and product longitude. A pattern is a smooth oriented knot P in the interior of V. Its winding number w(P) is its algebraic intersection with an oriented meridional disk, equivalently the coefficient of the core in [P]∈H₁(V;Z). For a smooth oriented knot K in S³, let e_K:V→S³ be a zero-framed tubular embedding carrying the core to K and carrying the meridian and product longitude to the positive meridian and preferred longitude of K. The satellite knot P(K) is e_K(P).

When concordance preservation has been established, the formula [K]↦[P(K)] defines a set map on each of C_sm, C_top, C_ex and C^{1/n}. The solid-torus meridian is strong winding number ±1 for P if, after V is embedded as the standard unknotted solid torus and P(U) denotes the resulting closure, that meridian normally generates π₁(S³\P(U)). Normal generation means that the smallest normal subgroup containing the element is the whole group. Strong winding number ±1 is a separate condition from ordinary winding number ±1. No additivity or homomorphism property is part of this definition.

## Definition references

[[def-satellite-pattern-companion-and-winding-number|Pattern, companion, zero framing, and winding number]]

[[def-cdr-satellite-concordance-categories|Exotic and localized homology concordance classes]]

[[def-smooth-knot-concordance|Smooth concordance classes]]

[[def-locally-flat-topological-knot-concordance|Locally flat topological concordance classes]]

[CDR, §§1–2](https://arxiv.org/pdf/1205.5058v3)

[Ray, §5](https://numdam.org/item/10.5802/wbln.39.pdf)
