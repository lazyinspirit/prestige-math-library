---
id: thm-inviscid-burgers-characteristic-formula-and-first-crossing-time
kind: theorem
title: "Inviscid Burgers characteristic formula and first crossing time"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-characteristic-crossing-and-caustic-for-first-order-pde, lem-burgers-slope-obeys-a-riccati-law-along-characteristics]
justified_by: []
proof_strategy: direct
verification:
  audited: 2026-09-06
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

For $u_t+uu_x=0$ with $C^1$ datum $u(0,\xi)=u_0(\xi)$, every classical
characteristic has

$$u(t,X(t,\xi))=u_0(\xi),\qquad X(t,\xi)=\xi+t u_0(\xi).$$

Thus $X_\xi=1+t u_0'(\xi)$ and its first forward crossing time is

$$T_*:=\inf\{t\ge0:\exists\xi,\ 1+t u_0'(\xi)=0\}\in[0,\infty],$$

where the infimum of the empty set is $\infty$.

## Facts & Assumptions

**Given:** A classical Burgers solution with the stated $C^1$ initial datum.

## Proof

**Proof technique:** direct.

1.1 Along $\dot X=u(t,X)$, the chain rule and the PDE give $d(u(t,X))/dt=u_t+uu_x=0$. [given, algebra]

2.1 The initial condition makes $u(t,X)=u_0(\xi)$, hence $\dot X=u_0(\xi)$ and integration from $X(0,\xi)=\xi$ gives $X=\xi+t u_0(\xi)$. [step 1.1, given, algebra]

3.1 Differentiating in $\xi$ gives $X_\xi=1+t u_0'(\xi)$, so the definition of caustic gives exactly the displayed set and its stated infimum convention. [step 2.1, given] ∎
