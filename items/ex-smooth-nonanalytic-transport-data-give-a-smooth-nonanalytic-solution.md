---
id: ex-smooth-nonanalytic-transport-data-give-a-smooth-nonanalytic-solution
kind: example
title: "Smooth nonanalytic transport data give a smooth nonanalytic solution"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-semilinear-and-quasilinear-first-order-cauchy-problems, lem-characteristic-solution-satisfies-the-quasilinear-pde]
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

Let $g(x)=e^{-1/x^2}$ for $x\ne0$ and $g(0)=0$.  The transport solution
$u(t,x)=g(x-t)$ is smooth but not analytic at each point $x=t$.

## Facts & Assumptions

**Given:** The displayed flat function $g$ and $u(t,x)=g(x-t)$.

## Verification

**Proof technique:** direct.

1.1 Every derivative of $g$ at $0$ is $0$, while $g(x)>0$ for $x\ne0$; thus $g$ is $C^\infty$ but cannot equal its Taylor series near $0$. [given, algebra]

1.2 The chain rule gives $u_t=-g'(x-t)$ and $u_x=g'(x-t)$, hence $u_t+u_x=0$ and $u(0,x)=g(x)$. [given, algebra]

2.1 Translation carries the flat nonanalytic point from $0$ to $x=t$, so $u$ is nonanalytic there despite being smooth. [step 1.1, step 1.2, given] ∎
