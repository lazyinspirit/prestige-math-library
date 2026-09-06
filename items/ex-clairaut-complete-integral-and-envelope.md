---
id: ex-clairaut-complete-integral-and-envelope
kind: example
title: "Clairaut complete integral and its nondegenerate stationary envelope"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-fully-nonlinear-first-order-pde-and-complete-integral, lem-envelope-stationarity-implies-the-hamilton-jacobi-equation]
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
    - title: "Part I: Explicit methods — Lecture notes for MA342H"
      url: "https://www.maths.tcd.ie/~pete/pde2/part_1.pdf"
---

## Example

For $u=xu_x+(u_x)^2$, $S(x;a)=ax+a^2$ is a complete integral.  Its stationary envelope is $u=-x^2/4$.

## Facts & Assumptions

**Given:** The equation and the family $S(x;a)=ax+a^2$.

## Verification

**Proof technique:** direct.

1.1 $S_x=a$, so $xS_x+(S_x)^2=ax+a^2=S$; thus $S$ is a complete integral. [given, algebra]

1.2 $S_a=x+2a=0$ gives $a=-x/2$, and $S_{aa}=2$ is invertible. [given, algebra]

2.1 Substitution gives $u=S(x,-x/2)=-x^2/4$; the nondegenerate-envelope lemma makes it a classical solution. [step 1.1, step 1.2, algebra] ∎
