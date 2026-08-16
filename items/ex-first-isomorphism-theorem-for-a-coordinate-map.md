---
id: ex-first-isomorphism-theorem-for-a-coordinate-map
kind: example
title: 'The first isomorphism theorem for $(x,y,z)\mapsto(x+y,y+z)$'
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-first-isomorphism-theorem-for-vector-spaces]
aliases: []
landmark: false
proof_strategy: computation
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

For
$$T:F^3\longrightarrow F^2,\qquad T(x,y,z)=(x+y,y+z),$$
one has $\ker T=F(-1,1,-1)$ and $\operatorname{im}T=F^2$. The induced map
$$\widetilde T:F^3/F(-1,1,-1)\longrightarrow F^2,\qquad (x,y,z)+\ker T\longmapsto(x+y,y+z)$$
is an isomorphism, with inverse $(a,b)\mapsto(a,0,b)+\ker T$.

## Facts & Assumptions

**Given:** The displayed coordinate map $T$.

[L1] The first isomorphism theorem gives a unique isomorphism $V/\ker T\to\operatorname{im}T$ sending $v+\ker T$ to $T(v)$ ([[thm-first-isomorphism-theorem-for-vector-spaces]]).

## Verification

**Proof technique:** computation.

1.1 Solving $x+y=0$ and $y+z=0$ gives $(x,y,z)=y(-1,1,-1)$, so the kernel is the stated line. [algebra]

1.2 For every $(a,b)\in F^2$, $T(a,0,b)=(a,b)$, so $T$ is surjective. [algebra]

2.1 Fact [L1] gives the induced isomorphism with the displayed formula, and step 1.2 shows that sending $(a,b)$ to $(a,0,b)+\ker T$ is its two-sided inverse. [step 1.1, step 1.2, L1] ∎
