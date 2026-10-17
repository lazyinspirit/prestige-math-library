---
id: ex-reverse-euler-trajectory-tape
kind: example
title: "Reverse-mode differentiation of an Euler trajectory tape"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps: [alg-reverse-mode-automatic-differentiation, thm-reverse-mode-computes-gradient]
justified_by: []
proof_strategy: direct
generation:
  role: example
verification:
  precheck: pass
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "MIT OpenCourseWare 18.S096, Matrix Calculus for Machine Learning and Beyond, complete lecture notes, Chapter 8 §§8.3–8.4"
      url: "https://live.ocw.mit.edu/courses/18-s096-matrix-calculus-for-machine-learning-and-beyond-january-iap-2023/mit18_s096iap23_lec_full.pdf"
dependency_level: 3
---

## Example

Take two explicit Euler updates for $x'=\alpha x$ with step $h=1/2$, initial state $x_0=1$, and scalar output $J=x_2$:
$$x_{k+1}=x_k+h\alpha x_k,\qquad k=0,1.$$
At $\alpha=1$, the tape has $x_1=3/2$ and $x_2=9/4$; reverse mode returns $dJ/d\alpha=3/2$.

## Facts & Assumptions

**Given:** The two-step Euler graph, $x_0=1$, $h=1/2$, $\alpha=1$, and output $J=x_2$.

[F1] [[alg-reverse-mode-automatic-differentiation]]: for each transition, reverse mode applies its local transpose derivative to the incoming cotangent and adds parameter contributions.

[F2] [[thm-reverse-mode-computes-gradient]]: the returned parameter cotangent equals the exact derivative of this scalar graph.

## Verification

**Proof technique:** direct recurrence and reverse tape.

1.1 Substitution into the two Euler updates gives $x_1=1+(1/2)(1)(1)=3/2$ and $x_2=(3/2)+(1/2)(1)(3/2)=9/4$. As a function of $\alpha$, $J(\alpha)=(1+h\alpha)^2x_0$, so $J'(1)=2h(1+h)x_0=3/2$. [given, algebra]

2.1 Seed $\bar x_2=1$. At step $k=1$, $\partial x_2/\partial x_1=1+h\alpha=3/2$ and $\partial x_2/\partial\alpha=h x_1=3/4$, so $\bar x_1=3/2$ and the accumulated $\bar\alpha=3/4$. [F1, step 1.1, algebra]

3.1 At step $k=0$, $\partial x_1/\partial x_0=3/2$ gives $\bar x_0=(3/2)(3/2)=9/4$, while $\partial x_1/\partial\alpha=h x_0=1/2$ adds $(1/2)(3/2)=3/4$ to $\bar\alpha$. Thus the total parameter cotangent is $3/2$. [F1, step 2.1, algebra]

4.1 The reverse result equals the direct derivative in step 1.1, and [F2] identifies it as the derivative of the finite trajectory map. [F2, step 1.1, step 3.1] ∎
