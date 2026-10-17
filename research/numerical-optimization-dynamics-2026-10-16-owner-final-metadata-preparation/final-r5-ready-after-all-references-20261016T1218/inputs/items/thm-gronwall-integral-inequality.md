---
id: thm-gronwall-integral-inequality
kind: theorem
title: "Gronwall's integral inequality with variable and constant coefficients"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-derivative-of-exponential, cor-exponential-reciprocal-and-positivity, thm-chain-rule, thm-algebra-of-derivatives, thm-ftc-first-part, thm-ftc-second-part, thm-monotonicity-of-the-integral]
justified_by: []
forward_refs: []
aliases: []
landmark: true
short: "Gronwall's inequality"
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-21
sources:
  scraped: []
  references:
    - title: "Gerald Teschl, Ordinary Differential Equations and Dynamical Systems, Ch. 2"
      url: "https://schecter.math.ncsu.edu/ma_732_sp13/teschl_ode.pdf"
    - title: "Jiri Lebl, Basic Analysis I, Section 6.3"
      url: "https://jirilebl.github.io/ra/realanal.pdf"
pipeline_run: null
---

## Statement

Let $t_0\le T$, let $u,a,b:[t_0,T]\to\mathbb R$ be continuous, with $u,b\ge0$, and suppose

$$u(t)\le a(t)+\int_{t_0}^t b(s)u(s)\,ds.$$

Then

$$u(t)\le a(t)+\int_{t_0}^t a(s)b(s)\exp\!\left(\int_s^t b(r)\,dr\right)ds.$$

If $a$ is nondecreasing, this gives $u(t)\le a(t)\exp(\int_{t_0}^t b)$. The time-reflected form assumes $u(t)\le a(t)+\int_t^{t_0}b(s)u(s)\,ds$ for $t\le t_0$. In particular, when $a=A\ge0$ and $b=B\ge0$ are constant, the two orientations give $u(t)\le A e^{B|t-t_0|}$.

## Facts & Assumptions

**Given:** The continuous functions and integral inequality in the Statement.

[L1] The exponential is differentiable and $(\exp)'=\exp$ ([[thm-derivative-of-exponential]]).

[L2] For every real $x$, $\exp(x)>0$ ([[cor-exponential-reciprocal-and-positivity]]).

[L3] The chain rule gives $(f\circ g)'(c)=f'(g(c))g'(c)$ under its differentiability hypotheses ([[thm-chain-rule]]).

[L4] The product rule gives $(fg)'=f'g+fg'$ ([[thm-algebra-of-derivatives]]).

[L5] An integrable derivative satisfies $\int_a^b G'=G(b)-G(a)$ ([[thm-ftc-second-part]]).

[L6] If integrable $p\le q$ on an interval, then $\int p\le\int q$ ([[thm-monotonicity-of-the-integral]]).

[L7] If $g$ is continuous on a nondegenerate compact interval, then its integral function is differentiable there with derivative $g$, including domain-relative endpoint derivatives ([[thm-ftc-first-part]]).

## Proof

**Proof technique:** direct.

1.1 If $T=t_0$, every displayed integral is zero and the conclusion is immediate. Assume $t_0<T$, and put $v(t)=\int_{t_0}^t b(s)u(s)\,ds$ and $B(t)=\int_{t_0}^t b(s)\,ds$; [L7] gives $v'=bu$ and $B'=b$, after which [L3], [L4], and [L1] give $(e^{-B}v)'=e^{-B}b(u-v)\le e^{-B}ba$. [given, L1, L3, L4, L7]

2.1 Apply [L6] and [L5] to integrate the inequality, use $v(t_0)=0$, and divide by the positive factor from [L2]; this gives the displayed formula. If $a$ is nondecreasing, $a(s)\le a(t)$ and direct integration of the exponential derivative gives the stated simplification. Replacing time by $-t$ proves the reflected form with $\int_t^{t_0}$, and $b=0$ gives $u\le a$. [step 1.1, L1, L2, L3, L5, L6, algebra] ∎
