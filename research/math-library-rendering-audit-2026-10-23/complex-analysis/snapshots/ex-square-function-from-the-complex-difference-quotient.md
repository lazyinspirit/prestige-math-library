---
id: ex-square-function-from-the-complex-difference-quotient
kind: example
title: "$z\\mapsto z^2$ is entire with derivative $2z$, directly from the complex difference quotient"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-complex-differentiability-holomorphic-and-entire, lem-complex-conjugation-and-modulus-laws, thm-c2-holomorphic-components-are-harmonic]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-13
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "MIT 18.04, Topic 2: Functions of a Complex Variable"
      url: "https://ocw.mit.edu/courses/18-04-complex-variables-with-applications-spring-2018/330e301bd727c7bdaa679cf44cb75fe3_MIT18_04S18_topic2.pdf"
pipeline_run: frontier-12
---

## Example

The square function $f(z)=z^2$ is entire and satisfies $f'(z)=2z$. In Cartesian coordinates its components are
$$u(x,y)=x^2-y^2,\qquad v(x,y)=2xy,$$
and both are harmonic; $v$ is a harmonic conjugate of $u$.

## Facts & Assumptions
**Given:** An arbitrary $z\in\mathbb C$.

[L1] A function is complex differentiable at $z$ when its punctured-domain difference quotient has a complex limit there, and it is entire when it is complex differentiable at every point of $\mathbb C$ ([[def-complex-differentiability-holomorphic-and-entire]]).

[L2] The complex modulus is multiplicative, satisfies the triangle inequality, and is definite ([[lem-complex-conjugation-and-modulus-laws]]).

[L3] For a holomorphic function with $C^2$ components, both components satisfy Laplace's equation, and the imaginary component is a harmonic conjugate of the real component ([[thm-c2-holomorphic-components-are-harmonic]]).

## Verification

**Proof technique:** direct computation.

1.1 For every nonzero increment $h$, $$\frac{f(z+h)-f(z)}h=\frac{(z+h)^2-z^2}{h}=2z+h.$$ [algebra]

2.1 Since $|(2z+h)-2z|=|h|\to0$, the quotient in step 1.1 tends to $2z$. Thus $f'(z)=2z$ by [L1]. [step 1.1, L1, L2]

3.1 The point $z$ was arbitrary, so $f$ is entire. [step 2.1, L1]

3.2 Writing $z=x+iy$ gives $z^2=(x^2-y^2)+i(2xy)$. Hence $u_x=2x=v_y$ and $u_y=-2y=-v_x$, in agreement with step 2.1. [step 2.1, algebra]

4.1 Moreover $u_{xx}+u_{yy}=2-2=0$ and $v_{xx}+v_{yy}=0+0=0$. The polynomial components are $C^2$, so [L3] identifies them as harmonic and identifies $v$ as a harmonic conjugate of $u$. [step 3.1, step 3.2, L3, algebra] ∎
