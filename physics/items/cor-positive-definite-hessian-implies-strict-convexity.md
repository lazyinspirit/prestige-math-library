---
id: cor-positive-definite-hessian-implies-strict-convexity
kind: corollary
title: "An everywhere-positive-definite Hessian implies strict convexity"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-hessian-characterises-convexity, def-definite-and-indefinite-hessian-quadratic-forms, thm-chain-rule-for-total-derivatives, thm-monotonicity-from-the-derivative, cor-mean-value-theorem]
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
    - title: "S. Boyd and L. Vandenberghe, Convex Optimization, §3.1.4"
      url: "https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf"
pipeline_run: null
---

## Statement

Let $f:U\to\mathbb R$ be $C^2$ on an open convex set. An everywhere-positive-definite Hessian implies strict convexity.

## Facts & Assumptions

**Given:** The line-restriction formula from [[thm-hessian-characterises-convexity]] and the total chain rule [[thm-chain-rule-for-total-derivatives]].

[F1] A symmetric quadratic form is positive definite when $q_H(h)>0$ for every $h\ne0$ ([[def-definite-and-indefinite-hessian-quadratic-forms]]).

[L1] If a real function is continuous on an order-convex interval, differentiable at every interior point, and has positive derivative at every interior point, then it is strictly increasing ([[thm-monotonicity-from-the-derivative]]).

[L2] For a continuous real function on a closed interval that is differentiable in its interior, one secant slope equals an interior derivative ([[cor-mean-value-theorem]]).

## Proof

**Proof technique:** direct.

1.1 Fix distinct $x,y\in U$, put $v=y-x\ne0$, and define $\phi(t)=f(x+tv)$. The chain rule gives $$\phi''(t)=\langle H_f(x+tv)v,v\rangle>0$$ by [F1]. [F1, given, algebra]

2.1 Applying [L1] to $\phi'$ makes $\phi'$ strictly increasing. For $0<t<1$, apply [L2] on $[0,t]$ and $[t,1]$: the two secant slopes equal $\phi'(r)$ and $\phi'(s)$ for some $r<t<s$, so the first slope is strictly smaller than the second. Rearranging gives $\phi(t)<(1-t)\phi(0)+t\phi(1)$. This is strict convexity of $f$; the endpoints are excluded exactly as the definition requires. [step 1.1, L1, L2, algebra] ∎
