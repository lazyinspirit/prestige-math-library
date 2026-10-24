---
id: ex-parabolic-crank-nicolson-time-regularity-order-loss
kind: example
title: A solution with only H1 time regularity loses CN second order
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - alg-parabolic-crank-nicolson-cg1
  - def-bounded-coercive-and-symmetric-sesquilinear-forms
  - def-parabolic-evolution-triple-and-energy-space
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification: {judge: {model: "gpt-6-luna", verdict: pass, date: 2026-10-17}}
---

## Example

In the scalar evolution triple $V=H=V^*=\mathbb R$, use
$a(x,y)=xy$, $T=1$, exact solution $u(t)=t^{3/4}$, and load
$f(t)=u'(t)+u(t)$. Apply Crank–Nicolson with exact interval-average load,
uniform step $\tau=1/N$, and $U^0=u(0)=0$. Then the first nodal error is
$$e^1=\frac{\tau^{7/4}}{14(1+\tau/2)}.$$
Thus the maximum nodal error is not $O(\tau^2)$ although the exact solution
belongs to $H^1(0,1)$ and the load belongs to $L^2(0,1)$, as assumed by the
method. The $H^2$ time regularity in the Crank–Nicolson theorem is a real
condition.

## Facts & Assumptions

**Given:** $V=H=V^*=\mathbb R$ with the identity embeddings, the form $a(x,y)=xy$, the function $u(t)=t^{3/4}$, its load $f=u'+u$, and the Crank–Nicolson algorithm with interval-average forcing.

[F1] Crank–Nicolson uses the average of the endpoint states in the autonomous form and the interval-average load ([[alg-parabolic-crank-nicolson-cg1]]).

[F2] A form is bounded and coercive when $|a(x,y)|\le M\|x\|\|y\|$ and $a(x,x)\ge\alpha\|x\|^2$ ([[def-bounded-coercive-and-symmetric-sesquilinear-forms]]).

[F3] An evolution triple uses dense continuous embeddings and identifies $H$ with its dual in the canonical way ([[def-parabolic-evolution-triple-and-energy-space]]).

## Verification

1.1 Here $a(x,y)=xy$ has $M=\alpha=1$. The derivative is $u'(t)=\frac34t^{-1/4}$ and $\int_0^1|u'(t)|^2dt=\frac9{16}\int_0^1t^{-1/2}dt=\frac98<\infty$; also $u\in L^2(0,1)$, so $u\in H^1(0,1)$ and $f=u'+u\in L^2(0,1)$. But $u''(t)=-\frac3{16}t^{-5/4}$ has nonintegrable square near zero, so $u\notin H^2(0,1)$. [F2, F3, given, algebra]

1.2 The exact equation integrated over $(0,\tau)$ is $\frac{u(\tau)-u(0)}\tau+\frac1\tau\int_0^\tau u(t)dt =\frac1\tau\int_0^\tau f(t)dt.$ The first CN step from [F1] is $\frac{U^1-U^0}\tau+\frac{U^1+U^0}2=\frac1\tau\int_0^\tau f(t)dt$. Subtract, use $U^0=u(0)=0$, and set $e^1=U^1-u(\tau)$. This gives $e^1\left(\frac1\tau+\frac12\right) =\frac1\tau\int_0^\tau t^{3/4}dt-\frac{\tau^{3/4}}2 =\left(\frac47-\frac12\right)\tau^{3/4} =\frac1{14}\tau^{3/4}.$ [F1, given, algebra]

2.1 Solving the scalar equation in step 1.2 yields $e^1=\tau^{7/4}/(14(1+\tau/2))$. Along $\tau=1/N\to0$, $|e^1|/\tau^2=\tau^{-1/4}/(14(1+\tau/2))\to\infty$; the maximum nodal error is at least $|e^1|$, so it cannot be $O(\tau^2)$. [step 1.2, algebra] ∎
