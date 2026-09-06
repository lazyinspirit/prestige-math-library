---
id: cor-burgers-classical-solution-persists-for-monotone-data
kind: corollary
title: "Monotone Burgers data have no forward characteristic crossing"
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

## Statement

If $u_0'(\xi)\ge0$ for all $\xi$, then $1+t u_0'(\xi)\ge1$ for $t\ge0$.
Hence the Burgers projection has no forward crossing.  This says nothing about
any unrelated global lifespan condition.

## Facts & Assumptions

**Given:** The characteristic formula and $u_0'\ge0$.

## Proof

**Proof technique:** direct.

1.1 For $t\ge0$, multiplication gives $t u_0'(\xi)\ge0$. [given, algebra]

2.1 Therefore $1+t u_0'(\xi)\ge1$, so the zero set defining $T_*$ is empty and the projection has no forward crossing. [step 1.1, given] ∎
