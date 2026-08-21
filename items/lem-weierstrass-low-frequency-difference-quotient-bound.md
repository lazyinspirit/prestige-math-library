---
id: lem-weierstrass-low-frequency-difference-quotient-bound
kind: lemma
title: "Low-frequency bound for the Weierstrass difference quotient"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [cor-sine-and-cosine-are-one-lipschitz, lem-weierstrass-probe-points,
       def-finite-sum, lem-finite-sum-laws, lem-of-triangle-inequality,
       def-pi-via-first-positive-cosine-zero,
       thm-cosine-has-a-smallest-positive-zero]
justified_by: []
aliases: []
landmark: true
short: "low-frequency Weierstrass bound"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
sources:
  scraped: []
  references:
    - title: "Jeff Calder, Weierstrass's Non-Differentiable Function, proof of Theorem 1, step 1"
      url: "https://www-users.cse.umn.edu/~jwcalder/104F14/weierstrass-function.pdf"
pipeline_run: null
---

## Statement

Use the parameters and probe points of [[lem-weierstrass-probe-points]], and
suppose $ab>1$. Put

$$A_m:=\sum_{n<m}a^n\bigl(\cos(b^n\pi x_m)-\cos(b^n\pi x_0)\bigr).$$

Then $A_0=0$ and, for every $m\in\mathbb N$,

$$|A_m|\le\pi(x_m-x_0)\frac{(ab)^m-1}{ab-1}.$$

In particular, for every $m\ge1$,

$$|A_m|<\pi(ab)^m(x_m-x_0)/(ab-1).$$

## Facts & Assumptions

**Given:** Parameters $0<a<1$, an odd integer $b>1$ with $ab>1$, a real $x_0$, and the associated probes $x_m$.

[L1] $|\cos u-\cos v|\le|u-v|$ for all real $u,v$ ([[cor-sine-and-cosine-are-one-lipschitz]]).

[L2] The probes satisfy $0<x_m-x_0\le3/(2b^m)$ ([[lem-weierstrass-probe-points]]).

[L3] Finite sums satisfy $\sum_{n<0}c_n=0$ and $\sum_{n<m+1}c_n=\sum_{n<m}c_n+c_m$ ([[def-finite-sum]]).

[L4] Finite sums preserve termwise inequalities and commute with scalar multiplication ([[lem-finite-sum-laws]], claims 2 and 4).

[L5] For reals $x,y$, $|x+y|\le|x|+|y|$ ([[lem-of-triangle-inequality]]).

[L6] The number $\pi=2\gamma$ is positive because the smallest positive zero of cosine satisfies $\gamma\in(0,2)$ ([[def-pi-via-first-positive-cosine-zero]], [[thm-cosine-has-a-smallest-positive-zero]]).

## Proof

**Proof technique:** direct.

1.1 The displayed finite sum defines $A_m$, and [L3] gives $A_0=0$. [given, L2, L3, construct]

1.2 Multiplying the finite sum $\sum_{n<m}(ab)^n$ by $ab-1$ and telescoping gives $(ab-1)\sum_{n<m}(ab)^n=(ab)^m-1$, including at $m=0$; since $ab-1>0$, $$\sum_{n<m}(ab)^n=\frac{(ab)^m-1}{ab-1}.$$ [given, L3, algebra]

2.1 Repeated use of [L5], followed by [L1] on each summand and [L4], gives $$|A_m|\le\sum_{n<m}a^n b^n\pi|x_m-x_0|=\pi(x_m-x_0)\sum_{n<m}(ab)^n,$$ where [L2] supplies $x_m-x_0>0$ and [L6] supplies $\pi>0$. [step 1.1, L1, L2, L4, L5, L6, algebra]

3.1 Substitute step 1.2 into step 2.1. For $m\ge1$, one has $(ab)^m-1<(ab)^m$ and the other factors are positive, so the strict displayed bound follows; at $m=0$, the non-strict formula already gives $A_0=0$. [step 1.2, step 2.1, algebra] ∎
