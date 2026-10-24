---
id: lem-log-modulus-is-harmonic-off-its-centre
kind: lemma
title: Logarithmic modulus is harmonic off its centre
status: published
origin: pipeline
deps:
  - def-complex-conjugate-real-imaginary-part-and-modulus
  - def-plane-harmonic-function
  - thm-logarithm-derivative-and-integral
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "Jeremy Orloff, MIT 18.04 Topic 5: Introduction to Harmonic Functions"
      url: https://ocw.mit.edu/courses/18-04-complex-variables-with-applications-spring-2018/2e739bb156efb0bc7103fc43d0897dda_MIT18_04S18_topic5.pdf
      locator: "Topic 5, logarithmic potential example; the translated-centre calculation is written out below"
---

## Statement

For every $a\in\mathbb C$, the real-valued function
$u_a(z)=\log|z-a|$ is smooth and harmonic on
$\mathbb C\setminus\{a\}$. No choice principle is required.

## Facts & Assumptions

**Given:** $a\in\mathbb C$ and the plane harmonicity and modulus conventions
([[def-plane-harmonic-function]],
[[def-complex-conjugate-real-imaginary-part-and-modulus]]).

[F1] The real logarithm has derivative $(\log t)'=1/t$ on $(0,\infty)$
([[thm-logarithm-derivative-and-integral]]).

## Proof

**Proof technique:** direct differentiation.

1.1 Write $z=x+iy$, $a=p+iq$, $X=x-p$, $Y=y-q$ and $R=X^2+Y^2>0$. Then $u_a=\tfrac12\log R$. Repeatedly differentiating [F1] gives $(d/dt)^m\log t=(-1)^{m-1}(m-1)!t^{-m}$ for $m\ge1$; composition with the polynomial $R$ therefore makes $u_a$ smooth on $R>0$. Its first derivatives are $u_x=X/R$ and $u_y=Y/R$. [F1, given, algebra]

2.1 A further differentiation gives $u_{xx}=(Y^2-X^2)/R^2$ and $u_{yy}=(X^2-Y^2)/R^2$. Their sum is zero at every $z\ne a$. Thus $u_a$ is harmonic on $\mathbb C\setminus\{a\}$ by the plane harmonicity definition. [step 1.1, given, algebra] ∎
