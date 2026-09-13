---
id: ex-darboux-coordinates-for-a-nonconstant-area-form
kind: example
title: Darboux coordinates for a nonconstant area form
status: published
origin: pipeline
deps: ["thm-darboux-theorem"]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:80/%7Eacannas/Books/symplectic.pdf
      locator: Homework 6, Problem 2, p. 49
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Example

Let $\omega=f(x,y)dx\wedge dy$ with smooth $f>0$. Near any chosen
$(x_0,y_0)$, explicit Darboux coordinates are

$$Q=x-x_0,\qquad P(x,y)=\int_{y_0}^{y}f(x,s)\,ds.$$

## Facts & Assumptions

**Given:** Work in a rectangle around $(x_0,y_0)$ on which the integral is
defined.

[F1] Darboux's theorem predicts local coordinates with form $dQ\wedge dP$.
[[thm-darboux-theorem]].

## Verification

**Proof technique:** direct.

1.1 At the chosen point, $(Q,P)=(0,0)$. Differentiation under the integral gives $dP=P_x\,dx+f(x,y)\,dy$, and therefore $dQ\wedge dP=dx\wedge(P_x\,dx+f\,dy)=f\,dx\wedge dy=\omega$. [given, algebra]

2.1 The Jacobian determinant of $(x,y)\mapsto(Q,P)$ is $P_y=f>0$, so the inverse function theorem makes $(Q,P)$ a coordinate system after shrinking. Thus it realizes the Darboux conclusion in [F1] explicitly. [F1, step 1.1] ∎
