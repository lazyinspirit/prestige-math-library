---
id: thm-complex-exponential-is-entire-with-derivative-itself
kind: theorem
title: "The complex exponential is entire and its complex derivative is itself"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-continuous-partials-and-cauchy-riemann-imply-holomorphic, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, thm-derivative-of-exponential, thm-sine-and-cosine-derivatives, cor-differentiable-implies-continuous, lem-algebra-of-continuous-real-maps-on-a-space, thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, Exercise 2.1.4"
      url: "https://www.jirka.org/ca/ca.pdf"
    - title: "J. Orloff, MIT 18.04 Topic 2, Example 2.11"
      url: "https://ocw.mit.edu/courses/18-04-complex-variables-with-applications-spring-2018/330e301bd727c7bdaa679cf44cb75fe3_MIT18_04S18_topic2.pdf"
pipeline_run: null
---

## Statement

The complex exponential is entire, and

$$ \exp'(z)=\exp z $$

for every $z\in\mathbb C$.

## Facts & Assumptions
**Given:** A complex number $z=x+iy$ and the published complex exponential.

[F1] For real $x,y$, $\exp(x+iy)=e^x(\cos y+i\sin y)$ ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

[L1] The real exponential is $C^\infty$ and $(e^x)'=e^x$ ([[thm-derivative-of-exponential]]).

[L2] The real derivatives are $(\sin y)'=\cos y$ and $(\cos y)'=-\sin y$ ([[thm-sine-and-cosine-derivatives]]).

[L3] A real function differentiable at a point is continuous there ([[cor-differentiable-implies-continuous]]).

[L4] Finite sums and products of continuous real-valued maps on a topological space are continuous ([[lem-algebra-of-continuous-real-maps-on-a-space]]).

[L5] Continuous first partial derivatives satisfying the Cauchy–Riemann equations give complex differentiability, and holomorphy when this holds at every point ([[thm-continuous-partials-and-cauchy-riemann-imply-holomorphic]]). Where $f$ is complex differentiable, $f'=u_x+iv_x$ ([[thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann]]).

## Proof

**Proof technique:** direct.

1.1 By [F1], the real and imaginary components are $u(x,y)=e^x\cos y$ and $v(x,y)=e^x\sin y$. [given, F1]

2.1 By [L1] and [L2], $$u_x=e^x\cos y,\quad u_y=-e^x\sin y,\quad v_x=e^x\sin y,\quad v_y=e^x\cos y.$$ [step 1.1, L1, L2, algebra]

3.1 The one-variable factors in step 2.1 are continuous by [L1]–[L3]; their pullbacks along the coordinate projections are continuous, and [L4] makes all four displayed partials continuous on $\mathbb R^2$. [step 2.1, L1, L2, L3, L4]

4.1 Step 2.1 gives $u_x=v_y$ and $u_y=-v_x$ everywhere. By [L5], the complex exponential is entire and its derivative is $u_x+iv_x=e^x(\cos y+i\sin y)=\exp z$. [step 1.1, step 2.1, step 3.1, L5] ∎
