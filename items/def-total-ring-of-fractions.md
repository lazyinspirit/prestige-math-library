---
id: "def-total-ring-of-fractions"
kind: "definition"
title: "total ring of fractions"
deps: ["def-multiplicative-subset-and-localisation"]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "10.37.16 proof, total fraction ring used there"
      url: "https://stacks.math.columbia.edu/tag/030C"
provenance:
  statement: literature-derived
  proof: not-applicable
status: published
origin: "pipeline"
---

## Definition

For a nonzero commutative ring $R$, let $S$ be the set of its nonzerodivisors, meaning elements whose multiplication maps on $R$ are injective. Its **total ring of fractions** is $Q(R)=S^{-1}R$. The set $S$ is multiplicative since composites of injective multiplication maps are injective. The natural map $R\to Q(R)$ is injective: $a/1=0$ implies $sa=0$ for some $s\in S$, hence $a=0$. Set $Q(0)=0$. For a domain this recovers the fraction field; for a ring with zero divisors it need not be a field.
