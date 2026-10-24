---
id: lem-weierstrass-tail-difference-quotient-bound
kind: lemma
title: "The Weierstrass tail has one sign and dominates at the probe points"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-classical-weierstrass-series-converges-uniformly,
       lem-weierstrass-probe-points,
       thm-sine-cosine-signs-monotonicity-and-ranges,
       cor-trigonometric-parity-and-pythagorean-identity,
       thm-quarter-turn-values-and-shift-formulas,
       lem-limit-preserves-order,
       def-pi-via-first-positive-cosine-zero,
       thm-cosine-has-a-smallest-positive-zero]
justified_by: []
aliases: []
landmark: true
short: "one-signed Weierstrass tail"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
  audited: 2026-08-21
sources:
  scraped: []
  references:
    - title: "Jeff Calder, Weierstrass's Non-Differentiable Function, proof of Theorem 1, step 2"
      url: "https://www-users.cse.umn.edu/~jwcalder/104F14/weierstrass-function.pdf"
pipeline_run: null
---

## Statement

Use the parameters and probe points of [[lem-weierstrass-probe-points]]. Put

$$B_m:=\sum_{n=m}^{\infty}a^n\bigl(\cos(b^n\pi x_m)-\cos(b^n\pi x_0)\bigr).$$

This tail converges absolutely, all of its summands have the same weak sign,
and

$$|B_m|\ge(2/3)(ab)^m(x_m-x_0).$$

## Facts & Assumptions

**Given:** Parameters $0<a<1$, an odd integer $b>1$, a real $x_0$, and the associated $k_m,z_m,x_m$.

[L1] The series defining $W_{a,b}$ converges absolutely at every real point ([[thm-classical-weierstrass-series-converges-uniformly]]).

[L2] For every $n\ge m$, $\cos(b^n\pi x_m)=-(-1)^{k_m}$ and $\cos(b^n\pi x_0)=(-1)^{k_m}\cos(b^{n-m}z_m\pi)$ ([[lem-weierstrass-probe-points]]).

[L3] The probes satisfy $-1/2\le z_m<1/2$ and $0<x_m-x_0\le3/(2b^m)$ ([[lem-weierstrass-probe-points]]).

[L4] Cosine is strictly decreasing on $[0,\pi]$, strictly increasing on $[-\pi,0]$ by parity, and has range $[-1,1]$ ([[thm-sine-cosine-signs-monotonicity-and-ranges]], [[cor-trigonometric-parity-and-pythagorean-identity]]).

[L5] $\cos(\pi/2)=0$ ([[thm-quarter-turn-values-and-shift-formulas]]).

[L6] If a convergent real sequence is eventually nonnegative, then its limit is nonnegative; more generally, eventual non-strict inequalities pass to limits ([[lem-limit-preserves-order]]).

[L7] The number $\pi=2\gamma$ is positive because the smallest positive zero of cosine satisfies $\gamma\in(0,2)$ ([[def-pi-via-first-positive-cosine-zero]], [[thm-cosine-has-a-smallest-positive-zero]]).

## Proof

**Proof technique:** direct.

1.1 Absolute convergence in [L1] licenses subtraction of the two convergent series and defines the displayed tail $B_m$. [L1, construct]

1.2 Since $|z_m|\le1/2$ and $\pi>0$ by [L7], parity and monotonicity in [L4], together with [L5], give $\cos(z_m\pi)=\cos(|z_m|\pi)\ge\cos(\pi/2)=0$. [L3, L4, L5, L7]

2.1 By [L2], every summand of $B_m$ is $$-(-1)^{k_m}a^n\bigl(1+\cos(b^{n-m}z_m\pi)\bigr).$$ The parenthesized factor is nonnegative by the range clause of [L4], so the partial sums share one weak sign. Their absolute values therefore converge to $|B_m|$ and dominate the absolute value of the $n=m$ term by [L6]; step 1.2 makes that term at least $a^m$. Hence $|B_m|\ge a^m$. [step 1.1, step 1.2, L2, L4, L6, algebra]

3.1 The upper bound in [L3] gives $1\ge(2b^m/3)(x_m-x_0)$. Multiplying step 2.1 by this nonnegative bound yields $|B_m|\ge(2/3)(ab)^m(x_m-x_0)$. [step 2.1, L3, algebra] ∎
