---
id: ex-inviscid-burgers-gradient-catastrophe
kind: example
title: "Inviscid Burgers gradient catastrophe"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-burgers-slope-obeys-a-riccati-law-along-characteristics, thm-inviscid-burgers-characteristic-formula-and-first-crossing-time]
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

For $u_0(\xi)=-\tanh\xi$, the map is $X=\xi-t\tanh\xi$.  Its first
crossing is $t=1$ at $\xi=0$, and the slope there tends to $-\infty$.

## Facts & Assumptions

**Given:** The Burgers formula and $u_0'(\xi)=-\operatorname{sech}^2\xi$.

## Verification

**Proof technique:** direct.

1.1 $X_\xi=1-t\operatorname{sech}^2\xi$, which first vanishes at $t=1$, $\xi=0$, since $0<\operatorname{sech}^2\xi\le1$. [given, algebra]

2.1 The Riccati formula gives $u_x(t,X(t,0))=-1/(1-t)$, which tends to $-\infty$ as $t\uparrow1$. [step 1.1, given, algebra] ∎
