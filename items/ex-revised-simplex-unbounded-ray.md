---
id: ex-revised-simplex-unbounded-ray
kind: example
title: "A revised-simplex unbounded ray"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-revised-simplex-primal-pivot-objective-ray-optimality]
justified_by: []
aliases: []
verification:
  precheck: pass
dependency_level: 4
proof_strategy: direct
sources:
  references:
    - title: "Dimitris Bertsimas and John N. Tsitsiklis, Introduction to Linear Optimization, §§3.1–3.2"
      url: "https://ru.djvu.online/file/akQmg8LVIXoy3"
    - title: "Michel Goemans, MIT 18.310 Lecture Notes: Linear Programming, §2.3"
      url: "https://ocw.mit.edu/courses/18-310-principles-of-discrete-applied-mathematics-fall-2013/11d00f8f0f460a5e59b5e97322a218a9_MIT18_310F13_Ch8.pdf"
---

## Example

Minimize $-x_1$ subject to $x_1-x_2=0$ and $x_1,x_2\ge0$. Use $B=(2)$ as the initial feasible basis.

## Facts & Assumptions

**Given:** $A=(1,-1)$, $b=0$, $c=(-1,0)$, and the basis $B=(2)$.

[F1] [[thm-revised-simplex-primal-pivot-objective-ray-optimality]]: Let $B$ be a primal-feasible basis, let $j$ be nonbasic with $\bar c_j<0$, and put $d=A_B^{-1}a_j$. If $d_i\le0$ for every basic row $i$, then $r_j=1$, $r_B=-d$, and $r_k=0$ for the other nonbasic indices define a feasible ray with $Ar=0$ and $c^{\mathsf T}r=\bar c_j<0$; the LP is unbounded below.

## Verification


1.1 The basis matrix is $A_B=-1$, so $x_2=(-1)^{-1}0=0$. The multiplier is $y=(-1)^{-1}c_2=0$, and the nonbasic reduced cost is $\bar c_1=-1-1\cdot0=-1$. [given, algebra]

2.1 The entering direction coefficient is $d=A_B^{-1}a_1=-1$. There is no row with $d_i>0$, so the ray has $r_1=1$ and $r_2=-d=1$. Then $Ar=1-1=0$, $r\ge0$, and $c^{\mathsf T}r=-1<0$; [F1] gives unboundedness below. [given, F1, step 1.1, algebra] ∎
