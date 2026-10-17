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
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
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

[F2] [[thm-derivative-of-exponential]]: $\exp$ is $C^\infty$ and $(\exp)'=\exp$.

[F3] [[thm-chain-rule]]: if $g:A\to\mathbb R$ maps $A$ into $B$, $c\in A$ is a limit point where $g$ is differentiable, and $g(c)$ is a limit point of $B$ where $f:B\to\mathbb R$ is differentiable, then $(f\circ g)'(c)=f'(g(c))g'(c)$. For each $c\in(0,h)$, take $A=(0,h)$ and $B=\mathbb R$; both limit-point hypotheses hold.

[F4] [[thm-exponential-limits-and-range]]: $\exp(-x)\to0$ as $x\to+\infty$.

[F5] [[thm-backward-euler-a-and-l-stability]]: $R_{\mathrm{BE}}(z)=1/(1-z)$.

[F6] [[thm-trapezoidal-a-stable-not-l-stable]]: $R_{\mathrm T}(z)=(1+z/2)/(1-z/2)$.

[F7] [[prop-bdf2-roots-vanish-in-stiff-limit]]: both BDF2 test roots tend to zero as $|z|\to\infty$ in the closed left half-plane.

[F8] [[thm-algebra-of-derivatives]]: products satisfy $(fg)'=f'g+fg'$, and scalar multiples satisfy $(\alpha f)'=\alpha f'$ at a limit point where the input functions are differentiable.

[F9] [[thm-algebra-of-continuous-functions]]: products and scalar multiples of functions continuous at a point are continuous there, and the identity function is continuous.

[F10] [[cor-zero-derivative-implies-constant]]: if $I$ is an interval and $v$ is continuous on $I$, differentiable at every interior point, and has $v'=0$ throughout the interior, then $v$ is constant on $I$.

[F11] [[cor-exponential-reciprocal-and-positivity]]: $\exp(-u)=1/\exp(u)>0$ for every real $u$.

[F12] The identity map $t\mapsto t$ has difference quotient $1$ and derivative $1$ at each real $t$. Since $g_\pm(t)=\pm\rho t$, [F8] gives $g_\pm'(t)=\pm\rho$, and [F9] gives continuity of $g_\pm$ on $[0,h]$.

[F13] Since $\exp$ is continuous on $\mathbb R$ by [F2], for either sign, any $t_0\in[0,h]$, and any $\varepsilon>0$, choose $\eta>0$ such that $|s\mp\rho t_0|<\eta$ implies $|\exp(s)-\exp(\pm\rho t_0)|<\varepsilon$. Taking $\delta=\eta/\rho$, $|t-t_0|<\delta$ implies $|\pm\rho t\mp\rho t_0|<\eta$. Thus $t\mapsto\exp(\pm\rho t)$ is continuous on $[0,h]$ by the $\varepsilon$-$\delta$ definition.

## Example

As $x=\rho h\to\infty$, the exact one-step factor and the backward-Euler factor tend to zero, as do both BDF2 roots. The trapezoidal factor tends to $-1$. It remains A-stable but leaves the fast mode nearly undamped with alternating sign.

## Verification
1.1 The function $u(t)=\exp(-\rho t)$ is continuous on $[0,h]$ by [F13], has $u(0)=1$ by [F1], and satisfies $u'(t)=-\rho\exp(-\rho t)=-\rho u(t)$ on $(0,h)$ by [F2], [F3], and [F12]. Thus it is a classical solution. [given, F1, F2, F3, F12, F13, algebra]

1.2 Let $y$ be any classical solution from the Given and set $v(t)=\exp(\rho t)y(t)$ on $[0,h]$. By [F13] and [F9], $v$ is continuous there. On $(0,h)$, [F8], [F2], [F3], and [F12] give $v'(t)=\rho\exp(\rho t)y(t)+\exp(\rho t)y'(t)=0$. So [F10] makes $v$ constant; since $v(0)=1$, [F11] gives $y(h)=1/\exp(\rho h)=\exp(-x)$. The exact one-step factor is therefore $\exp(-x)$. [given, F2, F3, F8, F9, F10, F11, F12, F13, algebra]

1.3 At $z=-x$, [F5] gives $R_{\mathrm{BE}}(-x)=1/(1+x)\to0$, and [F6] gives $R_{\mathrm T}(-x)=(1-x/2)/(1+x/2)\to-1$. [F5, F6, algebra]

2.1 Since $-x$ lies in the closed left half-plane, [F7] gives that both BDF2 roots tend to zero as $x\to\infty$. By [F4] and step 1.2 the exact factor also tends to zero. Therefore $|R_{\mathrm T}(-x)-\exp(-x)|\to1$, exhibiting the trapezoidal fast-mode damping defect without making a general accuracy claim. [F4, F7, step 1.2, step 1.3, algebra] ∎
