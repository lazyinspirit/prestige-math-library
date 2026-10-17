---
id: ex-stiff-decay-mode-damping-comparison
kind: example
title: "Backward Euler and BDF2 damp a fast scalar mode while trapezoidal does not"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - cor-exponential-reciprocal-and-positivity
  - cor-zero-derivative-implies-constant
  - def-real-exponential-function-and-e
  - thm-algebra-of-continuous-functions
  - thm-algebra-of-derivatives
  - thm-derivative-of-exponential
  - thm-chain-rule
  - thm-exponential-limits-and-range
  - thm-backward-euler-a-and-l-stability
  - thm-trapezoidal-a-stable-not-l-stable
  - prop-bdf2-roots-vanish-in-stiff-limit
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
sources:
  references:
    - title: "Ernst Hairer and Gerhard Wanner, Introduction à l’Analyse Numérique, Chapter III, §III.9"
      url: "https://www.unige.ch/~hairer/poly/chap3.pdf"
    - title: "MIT OpenCourseWare, 18.330 Introduction to Numerical Analysis, Chapter 5, §5.2.2: Stability"
      url: "https://math.mit.edu/icg/resources/teaching/18.330/18.330-Apr-2014.pdf"
    - title: "Masayuki Yano, James Douglass Penn, George Konidaris, and Anthony T. Patera, Math, Numerics, and Programming (for Mechanical Engineers), Unit IV, Chapter 21"
      url: "https://ocw.mit.edu/courses/2-086-numerical-computation-for-mechanical-engineers-spring-2013/64e7bed65373841c988a0fd98e1ae16e_MIT2_086S13_Unit4_Textbook.pdf"

---
## Facts & Assumptions

**Given:** Reals $\rho>0$ and $h>0$, and a classical solution $y$ on $[0,h]$, meaning $y$ is continuous on $[0,h]$, differentiable on $(0,h)$, satisfies $y'(t)=-\rho y(t)$ there, and has $y(0)=1$. Write $x=\rho h$.

[F1] [[def-real-exponential-function-and-e]]: $\exp$ is defined by its real power series and $\exp(0)=1$.

[F2] [[thm-derivative-of-exponential]]: $(\exp)'=\exp$.

[F3] [[thm-chain-rule]]: the derivative of a composition is the product of the outer derivative at the inner value and the inner derivative.

[F4] [[thm-exponential-limits-and-range]]: $\exp(-x)\to0$ as $x\to+\infty$.

[F5] [[thm-backward-euler-a-and-l-stability]]: $R_{\mathrm{BE}}(z)=1/(1-z)$.

[F6] [[thm-trapezoidal-a-stable-not-l-stable]]: $R_{\mathrm T}(z)=(1+z/2)/(1-z/2)$.

[F7] [[prop-bdf2-roots-vanish-in-stiff-limit]]: both BDF2 test roots tend to zero as $|z|\to\infty$ in the closed left half-plane.

[F8] [[thm-algebra-of-derivatives]]: if two real functions are differentiable at an interior point of a common domain, their product is differentiable there with $(fg)'=f'g+fg'$.

[F9] [[thm-algebra-of-continuous-functions]]: the product of two real functions continuous at a point is continuous there.

[F10] [[cor-zero-derivative-implies-constant]]: if $I$ is an interval and $v$ is continuous on $I$, differentiable at every interior point, and has $v'=0$ throughout the interior, then $v$ is constant on $I$.

[F11] [[cor-exponential-reciprocal-and-positivity]]: $\exp(-u)=1/\exp(u)>0$ for every real $u$.

## Example

As $x=\rho h\to\infty$, the exact one-step factor and the backward-Euler factor tend to zero, as do both BDF2 roots. The trapezoidal factor tends to $-1$. It remains A-stable but leaves the fast mode nearly undamped with alternating sign.

## Verification
1.1 The function $u(t)=\exp(-\rho t)$ is continuous on $[0,h]$, has $u(0)=1$ by [F1], and satisfies $u'(t)=-\rho\exp(-\rho t)=-\rho u(t)$ on $(0,h)$ by [F2] and [F3]. Thus it is a classical solution. [given, F1, F2, F3, algebra]

1.2 Let $y$ be any classical solution from the Given and set $v(t)=\exp(\rho t)y(t)$ on $[0,h]$. By [F9], $v$ is continuous there. On $(0,h)$, [F8], [F2], and [F3] give $v'(t)=\rho\exp(\rho t)y(t)+\exp(\rho t)y'(t)=0$. So [F10] makes $v$ constant; since $v(0)=1$, [F11] gives $y(h)=1/\exp(\rho h)=\exp(-x)$. The exact one-step factor is therefore $\exp(-x)$. [given, F2, F3, F8, F9, F10, F11, algebra]

1.3 At $z=-x$, [F5] gives $R_{\mathrm{BE}}(-x)=1/(1+x)\to0$, and [F6] gives $R_{\mathrm T}(-x)=(1-x/2)/(1+x/2)\to-1$. [F5, F6, algebra]

2.1 Since $-x$ lies in the closed left half-plane, [F7] gives that both BDF2 roots tend to zero as $x\to\infty$. By [F4] and step 1.2 the exact factor also tends to zero. Therefore $|R_{\mathrm T}(-x)-\exp(-x)|\to1$, exhibiting the trapezoidal fast-mode damping defect without making a general accuracy claim. [F4, F7, step 1.2, step 1.3, algebra] ∎
