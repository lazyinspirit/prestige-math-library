---
id: cex-differentiation-under-an-improper-integral-without-domination
kind: counterexample
title: "Differentiation under an improper integral can fail without uniform domination"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-differentiation-under-dominated-improper-multiple-integrals, def-improper-integral-at-infinity, thm-exponential-definition-equivalence, thm-derivative-of-exponential, thm-exponential-limits-and-range, thm-chain-rule, thm-ftc-second-part, thm-substitution-for-improper-integrals]
justified_by: []
aliases: []
landmark: false
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
    - title: "W. F. Trench, Functions Defined by Improper Integrals, Example 3"
      url: "https://ramanujan.math.trinity.edu/wtrench/texts/TRENCH_IMPROPER_FUNCTIONS.PDF"
pipeline_run: null
---

## Statement refuted

Pointwise differentiability of an integrand and convergence of every parameter slice suffice to pass a derivative through an improper integral.

## Facts & Assumptions

**Given:** For $x\ge0$ and $t\in\mathbb R$, let $f(x,t):=t^3e^{-t^2x}$ and $F(t):=\int_0^\infty f(x,t)\,dx$.

[L1] On an open domain and open parameter interval, if $f$ and $\partial_tf$ are continuous, one slice is absolutely improperly integrable, and $|\partial_tf|$ has an integrable bound uniform on each compact parameter interval, then $F'(t)=\int_D\partial_tf(x,t)\,dx$ ([[thm-differentiation-under-dominated-improper-multiple-integrals]]).

[L2] A monotone differentiable substitution preserves a convergent improper integral under the stated compact-truncation hypotheses ([[thm-substitution-for-improper-integrals]]).

[L3] The derivative of the exponential is the exponential ([[thm-derivative-of-exponential]]).

[L4] The improper integral $\int_0^\infty h$ is the finite limit of $\int_0^Rh$ as $R\to\infty$, when that limit exists ([[def-improper-integral-at-infinity]]).

[L5] If $G'=h$ on a compact interval and $h$ is integrable, then $\int h$ is the endpoint difference of $G$ ([[thm-ftc-second-part]]).

[L6] One has $\exp(x)\to0$ as $x\to-\infty$, and the exponential is normalized by $\exp(0)=1$ ([[thm-exponential-limits-and-range]], [[thm-exponential-definition-equivalence]]).

[L7] The one-variable chain rule gives $(g\circ h)'=(g'\circ h)h'$ ([[thm-chain-rule]]).

## Counterexample

**Proof technique:** direct.

1.1 By [L3], [L5], [L6], and [L7], $(-e^{-u})'=e^{-u}$ and $\int_0^Re^{-u}\,du=1-e^{-R}\to1$. If $t\ne0$, the substitution $u=t^2x$ in [L2] therefore gives $F(t)=t\int_0^\infty e^{-u}\,du=t$; at $t=0$, the integrand is identically zero, so [L4] gives $F(0)=0$. Thus $F(t)=t$ for every real $t$. [L2, L3, L4, L5, L6, L7, algebra]

1.2 By [L3], $\partial_tf(x,t)=(3t^2-2xt^4)e^{-t^2x}$, so $\partial_tf(x,0)=0$ for every $x\ge0$ and its improper integral is $0$. [L3, algebra]

2.1 Step 1.1 gives $F'(0)=1$, while step 1.2 gives $\int_0^\infty\partial_tf(x,0)\,dx=0$. Restricting the witness to the open domain $(0,\infty)$ changes none of these integrals; there $f$ and $\partial_tf$ are continuous and the zero base slice is absolutely integrable. Thus every hypothesis of [L1] except a parameter-uniform integrable derivative bound holds, differentiation under the sign fails, and no such dominator can exist near $t=0$. [step 1.1, step 1.2, L1] ∎
