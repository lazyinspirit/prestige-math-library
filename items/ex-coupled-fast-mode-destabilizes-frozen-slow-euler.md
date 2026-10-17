---
id: ex-coupled-fast-mode-destabilizes-frozen-slow-euler
title: "A stable coupled model has an unstable explicit fast microstep"
kind: example
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - alg-frozen-slow-explicit-fast-euler
  - def-real-exponential-function-and-e
  - thm-exponential-addition-formula
  - thm-exponential-is-strictly-increasing
  - thm-derivative-of-exponential
  - lem-exponential-dominates-one-plus-x
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

Consider $x'=-x$, $z'=x-8z$ from $(x_0,z_0)=(1,1)$. Its exact solution for arbitrary initial data is
$$x(t)=x_0e^{-t},\qquad z(t)=e^{-8t}z_0+\frac{x_0}{7}(e^{-t}-e^{-8t}).$$
It tends to zero as $t\to\infty$, so the continuous linear system is asymptotically stable, meaning every solution tends to the origin. Apply [[alg-frozen-slow-explicit-fast-euler]] with $H=3/5$, $m=2$, and $h=3/10$. The method gives $x^+=2/5$, $z_1=-11/10$, and $z_2=46/25$. At fixed frozen $x$, a fast-coordinate perturbation is multiplied per microstep by $1-8h=-7/5$, whose magnitude exceeds one; the exact homogeneous fast perturbation instead decays.

## Facts & Assumptions

**Given:** The linear vector field, initial data, macro step, and microstep count specified above.

[F1] The assigned algorithm updates the slow coordinate once by explicit Euler and then performs $m$ fast Euler updates using the original frozen slow state ([[alg-frozen-slow-explicit-fast-euler]]).

[F2] The exponential satisfies $e^0=1$ and $e^{a+b}=e^ae^b$, has derivative $e^t$, is increasing, and obeys $1+t\le e^t$ for $t\ge0$ ([[def-real-exponential-function-and-e]], [[thm-exponential-addition-formula]], [[thm-exponential-is-strictly-increasing]], [[thm-derivative-of-exponential]], [[lem-exponential-dominates-one-plus-x]]).

[A1] In this example $f(x,z)=-x$ and $g(x,z)=x-8z$.

## Proof

1.1 Differentiating the displayed formula with [F2] gives $x'=-x$ and $z'=x-8z$, and at $t=0$ it gives the arbitrary initial pair $(x_0,z_0)$. Thus it is the exact solution. For $t\ge0$, [F2] gives $e^t\ge1+t>0$ and $e^{8t}\ge1+8t>0$, while the addition formula gives $e^{-t}=1/e^t$ and $e^{-8t}=1/e^{8t}$. Therefore $0<e^{-t}\le1/(1+t)$ and $0<e^{-8t}\le1/(1+8t)$. Given $\varepsilon>0$, both bounds are below $\varepsilon$ whenever $t>\max\{1/\varepsilon,1/(8\varepsilon)\}$, so both exponentials and then both solution components tend to zero. [F2, A1, algebra]

1.2 By [F1] and [A1], $x^+=1+(3/5)(-1)=2/5$. The fast updates use frozen $x=1$, so $z_1=1+(3/10)(1-8)=-11/10$ and $z_2=-11/10+(3/10)(1-8(-11/10))=46/25$. Subtracting two fast recurrences with the same frozen $x$ gives $\delta z_{j+1}=(1-8h)\delta z_j=-7/5\,\delta z_j$. The exact homogeneous fast equation $w'=-8w$ has solution $w(t)=e^{-8t}w(0)$ by [F2]. Since $e^{8h}\ge1+8h>1$, its reciprocal $e^{-8h}$ lies in $(0,1)$, so the exact homogeneous multiplier decays. [F1, F2, A1, algebra]

2.1 Step 1.1 directly shows every exact solution tends to zero, whereas step 1.2 gives an expanding fast perturbation in each explicit microstep. The successful step costs one $f$ and two $g$ evaluations, which by itself makes no wall-clock speedup claim. [F1, step 1.1, step 1.2, algebra] ∎
