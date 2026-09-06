---
id: ex-degree-zero-invariants-and-coinvariants
kind: example
title: "Degree-zero invariants and coinvariants"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [prop-degree-zero-group-cohomology-and-homology-are-invariants-and-coinvariants]
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Weibel, §6.1"
      url: "https://math.mit.edu/~hrm/palestine/weibel/06-group_homology_and_cohomology.pdf"
---

## Example

Let $C_2=\langle t\rangle$ act on $M=\mathbb Z$ by $t m=-m$. Then $H^0(C_2;M)=0$ and $H_0(C_2;M)=\mathbb Z/2$.

## Verification

**Given:** The sign action of $C_2$ on $\mathbb Z$.

1.1 Fixed points satisfy $m=-m$, hence $m=0$ in $\mathbb Z$. [given]

2.1 Coinvariants quotient by $tm-m=-2m$, hence are $\mathbb Z/2$; degree-zero recovery identifies these with the two asserted groups. [step 1.1] ∎
