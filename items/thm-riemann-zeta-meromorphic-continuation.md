---
id: thm-riemann-zeta-meromorphic-continuation
kind: theorem
title: "The Riemann zeta function extends meromorphically to the complex plane with its only pole at $1$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-riemann-zeta-continuation-to-the-right-half-plane, thm-jacobi-theta-transformation, thm-theta-mellin-representation-of-completed-zeta, def-completed-riemann-zeta-function, thm-gamma-meromorphic-continuation, cor-gamma-function-has-no-zeros]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  references:
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Theorem 2.4"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
    - title: "K. Chandrasekharan, Lectures on the Riemann Zeta-Function, Lecture 12 §7"
      url: "https://mathweb.tifr.res.in/Documents/Publications/Lectures/01.pdf"
---

## Statement

There is a meromorphic function on $\mathbb C$, still denoted $\zeta$, that
agrees with the Dirichlet series on $\operatorname{Re}s>1$. This continuation is
holomorphic on $\mathbb C\setminus\{1\}$ and has a single simple pole at
$s=1$, of residue $1$.

## Facts & Assumptions

**Given:** The completed function $\Lambda(s)=\pi^{-s/2}\Gamma(s/2)\zeta(s)$ on $\operatorname{Re}s>1$.

[L1] On $\operatorname{Re}s>0$, zeta already has the fractional-part formula and
only a simple residue-one pole at $1$
([[thm-riemann-zeta-continuation-to-the-right-half-plane]]).

[L2] The theta transformation is
$$\theta(t)=t^{-1/2}\theta(1/t)\qquad(t>0)$$
([[thm-jacobi-theta-transformation]]).

[L3] On $\operatorname{Re}s>1$,
$$\Lambda(s)=\frac12\int_0^\infty(\theta(t)-1)t^{s/2-1}\,dt$$
([[thm-theta-mellin-representation-of-completed-zeta]]).

[L4] The symbol $\Lambda(s)$ denotes $\pi^{-s/2}\Gamma(s/2)\zeta(s)$
([[def-completed-riemann-zeta-function]]).

[L5] Gamma extends meromorphically to $\mathbb C$ and has simple poles at the
nonpositive integers ([[thm-gamma-meromorphic-continuation]]).

[L6] Gamma has no zeros on $\mathbb C$ ([[cor-gamma-function-has-no-zeros]]).

[A1] Two meromorphic functions on a connected domain that agree on a nonempty
open subset agree everywhere on that domain.

## Proof

**Proof technique:** direct.

1.1 On $\operatorname{Re}s>1$, split the integral in [L3] at $1$. Using [L2] on $(0,1)$ and the change of variables $u=1/t$ gives $$\Lambda(s)=\frac{1}{s(s-1)}+\frac12\int_1^\infty (\theta(t)-1)\left(t^{s/2-1}+t^{-(s+1)/2}\right)\,dt.$$ [given, L2, L3, algebra]

2.1 For $t\ge1$, [L2] and the definition of $\theta$ give $$0<\theta(t)-1=2\sum_{n\ge1}e^{-\pi n^2 t}\le 2\sum_{n\ge1}e^{-\pi n t}=\frac{2e^{-\pi t}}{1-e^{-\pi t}}.$$ Hence the integral in step 1.1 converges absolutely and locally uniformly for every $s\in\mathbb C$, because the powers of $t$ contribute only polynomial growth while the right-hand side decays exponentially. Therefore $$H(s):=\frac12\int_1^\infty (\theta(t)-1)\left(t^{s/2-1}+t^{-(s+1)/2}\right)\,dt$$ is entire, and step 1.1 shows that $\Lambda(s)=1/(s(s-1))+H(s)$ is meromorphic on $\mathbb C$ with at most simple poles at $0$ and $1$. [step 1.1, L2, algebra]

3.1 By [L5] and [L6], $1/\Gamma(s/2)$ is entire, with a simple zero at $s=0$ and zeros only at the negative even integers. Thus $$\widetilde\zeta(s):=\pi^{s/2}\Lambda(s)/\Gamma(s/2)$$ is meromorphic on $\mathbb C$. On $\operatorname{Re}s>1$, [L4] makes $\widetilde\zeta(s)=\zeta(s)$. By [A1], this is the unique meromorphic continuation of zeta. The zero of $1/\Gamma(s/2)$ cancels the pole of $\Lambda$ at $0$, and no further poles are introduced at the negative even integers. Since [L1] already shows that zeta is holomorphic on $\operatorname{Re}s>0$ away from $1$, the only pole of the continuation is the simple residue-one pole at $s=1$. [step 2.1, L1, L4, L5, L6, A1, algebra] ∎
