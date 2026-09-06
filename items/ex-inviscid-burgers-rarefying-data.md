---
id: ex-inviscid-burgers-rarefying-data
kind: example
title: "Rarefying inviscid Burgers data"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-inviscid-burgers-characteristic-formula-and-first-crossing-time]
justified_by: []
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Part III: Analysis of Partial Differential Equations"
      url: "https://giacomoageno.github.io/LectureNotesAPDE.pdf"
---

## Example

For $u_0(\xi)=\xi$, $X=(1+t)\xi$, so for $t\ge0$ the solution is
$u(t,x)=x/(1+t)$.  The fan expands and has no forward caustic.

## Facts & Assumptions

**Given:** The Burgers characteristic formula with $u_0(\xi)=\xi$ and $t\ge0$.

## Verification

**Proof technique:** direct.

1.1 The formula gives $X=\xi+t\xi=(1+t)\xi$ and $X_\xi=1+t>0$. [given, algebra]

2.1 Inverting gives $\xi=x/(1+t)$, while $u(t,X)=u_0(\xi)=\xi$; hence $u(t,x)=x/(1+t)$. [step 1.1, algebra] ∎
