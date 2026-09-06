---
id: ex-the-cone-triangle-of-multiplication-by-m
kind: example
title: "The cone triangle of multiplication by m"
status: draft
origin: pipeline
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
deps: [def-mapping-cone-of-a-chain-map, def-standard-cone-triangle-in-the-homotopy-category, def-zero-and-stalk-complex]
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "The Stacks Project, Definition 13.9.1"
      url: "https://stacks.math.columbia.edu/tag/014D"
---

## Example

For $m\in\mathbb Z$, the map $m:S^0(\mathbb Z)\to S^0(\mathbb Z)$ has cone
the two-term complex $\mathbb Z\xrightarrow m\mathbb Z$ in degrees $1,0$.
Its standard cone triangle is therefore
$$S^0(\mathbb Z)\xrightarrow mS^0(\mathbb Z)\to[\mathbb Z\xrightarrow m\mathbb Z]\to S^0(\mathbb Z)[1].$$

## Facts & Assumptions

**Given:** The displayed data.

[F1] The mapping cone has its stated degreewise direct-sum and differential
formulas ([[def-mapping-cone-of-a-chain-map]]).

[F2] Passing a chain-level cone triangle to the homotopy category gives its
standard cone triangle
([[def-standard-cone-triangle-in-the-homotopy-category]]).

## Verification

1.1 By [F1], the cone has $D_n\oplus C_{n-1}$ in degree $n$, so only degrees $1$ and $0$ remain and its differential is multiplication by $m$. [F1, given]

2.1 By [F2], passing this explicit cone triangle to $K(\mathbb Z\text{-Mod})$ makes it a standard cone triangle. [F2, step 1.1, given] ∎
