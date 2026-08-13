---
id: cor-arc-length-accumulation-derivative-is-speed
kind: corollary
title: "For a C1 path the arc-length accumulation function has derivative equal to speed"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-arc-length-function, thm-c1-paths-have-length-equal-to-the-integral-of-speed, thm-ftc-first-part]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis II, section 9.2"
      url: "https://www.jirka.org/ra/html/sec_pathintegral.html"
pipeline_run: null
---

## Statement

Let $a<b$, let $\gamma:[a,b]\to\mathbb R^n$ be $C^1$, and let

$$s_\gamma(t):=L_{[a,t]}(\gamma|_{[a,t]}).$$

Then $s_\gamma$ is differentiable on $[a,b]$ in the relative sense and

$$s_\gamma'(t)=\lVert\gamma'(t)\rVert_2.$$

At $a$ and $b$ these are the relative one-sided derivatives.

## Facts & Assumptions
**Given:** The $C^1$ path in the Statement.

[L1] The arc-length function is $s_\gamma(t)=L_{[a,t]}(\gamma|_{[a,t]})$, with $s_\gamma(a)=0$ ([[def-arc-length-function]]).

[L2] A $C^1$ path has length equal to the integral of its continuous speed, including on a singleton interval where both values are zero ([[thm-c1-paths-have-length-equal-to-the-integral-of-speed]]).

[L3] The integral function of an integrable function is differentiable at every point where the integrand is continuous, with derivative equal to the integrand; at endpoints this means the relative one-sided derivative ([[thm-ftc-first-part]]).



## Proof

**Proof technique:** direct.

1.1 The speed $v(t):=\lVert\gamma'(t)\rVert_2$ is continuous because $\gamma'$ and the Euclidean norm are continuous. [given, algebra]

2.1 By [L1] and [L2], for every $t\in[a,b]$, $$s_\gamma(t)=\int_a^t v(u)\,du,$$ including $t=a$. [L1, L2, step 1.1]

3.1 Apply [L3] to step 2.1. It gives $s_\gamma'(t)=v(t)=\lVert\gamma'(t)\rVert_2$ throughout $[a,b]$, with the asserted endpoint interpretation. [step 1.1, step 2.1, L3] ∎
