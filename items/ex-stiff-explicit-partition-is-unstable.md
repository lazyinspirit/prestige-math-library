---
id: ex-stiff-explicit-partition-is-unstable
kind: example
title: "An explicitly treated stiff decay mode is unstable for a large step"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - alg-imex-euler-step
  - def-additive-ode-and-partition
  - cor-exponential-reciprocal-and-positivity
  - def-real-exponential-function-and-e
  - lem-of-inverse-positive
  - thm-chain-rule-for-total-derivatives
  - thm-derivative-of-exponential
  - thm-exponential-is-strictly-increasing
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Uri M. Ascher, Steven J. Ruuth, and Raymond J. Spiteri, Implicit-explicit Runge-Kutta methods for time-dependent partial differential equations"
      url: "https://chaosbook.org/library/AscherANM97.pdf"
      locator: "§2, explicit and implicit treatments of additive stiff terms, PDF pp. 2–4."
---

## Example

Take the scalar decay equation $y'=-\kappa y$ with $\kappa>0$ and $y_0=1$. Treat the whole stiff term explicitly, so $a(y)=-\kappa y$ and $b(y)=0$. IMEX Euler gives amplification $1-h\kappa$; for $h\kappa>2$ its magnitude exceeds one although the exact solution $\exp(-\kappa t)$ decays. If instead this same term is implicit, the amplification is $(1+h\kappa)^{-1}$, which lies in $(0,1)$ for every $h\kappa>0$. This scalar comparison does not imply matrix stability for nonnormal operators.

## Facts & Assumptions

**Given:** $\kappa>0$, $h>0$, and $y_0=1$.

[F1] [[alg-imex-euler-step]]: the exact-step equation is $Y=y+h a(y)+h b(Y)$.

[F2] [[def-real-exponential-function-and-e]], [[thm-derivative-of-exponential]], and [[thm-chain-rule-for-total-derivatives]]: $\exp(x)$ is differentiable with derivative $\exp(x)$, so $y(t)=\exp(-\kappa t)$ solves $y'=-\kappa y$ and $y(0)=1$.

[F3] [[cor-exponential-reciprocal-and-positivity]] and [[thm-exponential-is-strictly-increasing]]: $\exp(x)>0$ and $x<0$ implies $\exp(x)<\exp(0)=1$.

[F4] [[lem-of-inverse-positive]]: if $0<a<b$, then $0<b^{-1}<a^{-1}$.

## Verification

**Proof technique:** direct.

1.1 With $a(y)=-\kappa y$ and $b=0$, [F1] gives $Y=(1-h\kappa)y$, so after $N$ steps the numerical value is $(1-h\kappa)^N$. If $h\kappa>2$, then $1-h\kappa<-1$ and $|1-h\kappa|^N>1$ for every $N\ge1$. By [F2], $y(t)=\exp(-\kappa t)$ is the exact solution, and [F3] gives $|y(Nh)|=\exp(-\kappa Nh)<1$. [given, F1, F2, F3, algebra]

1.2 With $a=0$ and $b(y)=-\kappa y$, the equation in [F1] becomes $(1+h\kappa)Y=y$. Since $0<1<1+h\kappa$, [F4] gives $0<(1+h\kappa)^{-1}<1$. Thus the implicit treatment damps every such scalar step, while the explicit treatment grows whenever $h\kappa>2$. [F1, F4, algebra]

2.1 At the boundary $h\kappa=2$, the explicit amplification is $-1$, whose magnitude is exactly one. Thus the strict instability condition is $h\kappa>2$; equality is neutral for this scalar test equation. [F1, algebra] ∎

