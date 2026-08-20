---
id: thm-hessian-characterises-convexity
kind: theorem
title: "A $C^2$ function is convex exactly when its Hessian is positive semidefinite"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-convex-and-strictly-convex-functions-on-euclidean-sets, def-definite-and-indefinite-hessian-quadratic-forms, def-hessian-and-euclidean-critical-point, cor-second-derivative-characterises-convexity, thm-chain-rule-for-total-derivatives, cor-hessian-is-symmetric]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "S. Boyd and L. Vandenberghe, Convex Optimization, §3.1.4"
      url: "https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf"
pipeline_run: null
---

## Statement

A $C^2$ function on an open convex set is convex if and only if its Hessian is positive semidefinite at every point. Hessians and their quadratic forms have the conventions of [[def-hessian-and-euclidean-critical-point]], [[cor-hessian-is-symmetric]].

## Facts & Assumptions

**Given:** An open convex $U\subseteq\mathbb R^n$, a $C^2$ function $f:U\to\mathbb R$, and the total chain rule [[thm-chain-rule-for-total-derivatives]].

[L1] A twice differentiable real function on an interval is convex if and only if its second derivative is nonnegative throughout the interval ([[cor-second-derivative-characterises-convexity]]).

[F1] A symmetric quadratic form is positive semidefinite when $q_H(h)\ge0$ for every $h$ ([[def-definite-and-indefinite-hessian-quadratic-forms]]).

## Proof

**Proof technique:** direct.

1.1 For $x\in U$ and a direction $v$, put $\phi(t)=f(x+tv)$ on the open interval where the affine line lies in $U$. Two applications of the chain rule give $$\phi''(t)=\langle H_f(x+tv)v,v\rangle.$$ [L1, F1, given, algebra]

2.1 For the forward implication, if $f$ is convex then every line restriction $\phi$ is convex, so [L1] and step 1.1 give $\langle H_f(x)v,v\rangle\ge0$ for every $v$, which is [F1]. For the reverse implication, [F1] and step 1.1 make every line restriction have nonnegative second derivative; [L1] makes each restriction convex, yielding the two-point convexity inequality for $f$. [step 1.1, L1, F1] ∎

## Remarks

The convex-domain hypothesis cannot be dropped. On the open but nonconvex set $\mathbb R\setminus\{0\}$, the function $f(x)=x^{-2}$ has $f''(x)=6x^{-4}>0$ everywhere, but it is not a convex function on that domain in the sense of [[def-convex-and-strictly-convex-functions-on-euclidean-sets]]. This is the boundary recorded in Boyd–Vandenberghe, Remark 3.1.
