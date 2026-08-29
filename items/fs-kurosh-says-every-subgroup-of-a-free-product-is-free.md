---
id: fs-kurosh-says-every-subgroup-of-a-free-product-is-free
kind: false-statement
title: "FALSE: Kurosh says every subgroup of a free product is free"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-kurosh-subgroup-theorem, cor-factors-embed-in-a-free-product-with-amalgamation, thm-free-groups-are-torsion-free]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Roger C. Lyndon and Paul E. Schupp, Combinatorial Group Theory"
      url: "https://www.scribd.com/document/384118619/CombinatorialGroupTheory"
pipeline_run: null
---

## Statement

Every subgroup of a free product is free.

## Facts & Assumptions

**Given:** The Kurosh subgroup theorem.

[L1] A subgroup of a free product is itself a free product of a free group together with intersections with conjugates of the factors. ([[thm-kurosh-subgroup-theorem]])

[L2] The factors embed in their free product. ([[cor-factors-embed-in-a-free-product-with-amalgamation]])

[L3] Every free group is torsion-free. ([[thm-free-groups-are-torsion-free]])

## Refutation

**Proof technique:** direct.

1.1 Let $G=C_2\ast C_3$ and let $H=C_2$ be the first embedded factor, whose embedding is supplied by [L2]. In the Kurosh decomposition of $H$, the identity double coset contributes the intersection $H\cap C_2=H$. [L1, L2, given]

2.1 The subgroup $H=C_2$ contains a nonidentity element of order $2$, whereas [L3] says every free group is torsion-free. Thus $H$ is a subgroup of a free product that is not free, and the universal statement is false. [L1, L3, step 1.1, algebra] ∎
