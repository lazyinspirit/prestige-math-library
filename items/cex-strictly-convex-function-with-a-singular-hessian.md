---
id: cex-strictly-convex-function-with-a-singular-hessian
kind: counterexample
title: "A strictly convex function can have a singular Hessian"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-convex-and-strictly-convex-functions-on-euclidean-sets, def-hessian-and-euclidean-critical-point, lem-derivative-of-a-power, thm-algebra-of-derivatives, cor-mean-value-theorem]
justified_by: []
aliases: []
landmark: false
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

## Statement refuted

Every twice differentiable strictly convex function has a positive-definite Hessian at every point.

The counterexample below establishes: For every $n\ge1$, the function $f:\mathbb R^n\to\mathbb R$ given by $f(x)=\sum_{j<n}x_j^4$ is strictly convex, but its Hessian at the origin is the zero matrix.

## Facts & Assumptions

**Given:** Fix $n\ge1$. Strict convexity is as in [[def-convex-and-strictly-convex-functions-on-euclidean-sets]], and the Hessian convention is [[def-hessian-and-euclidean-critical-point]].

[L1] For every integer $d\ge1$, the function $p_d(x)=x^d$ is differentiable everywhere and satisfies $p_d'(x)=d x^{d-1}$ ([[lem-derivative-of-a-power]]).

[L2] For a continuous real function on a closed interval that is differentiable in its interior, one secant slope equals an interior derivative ([[cor-mean-value-theorem]]).

[L3] Scalar multiples of differentiable real functions are differentiable with the expected derivatives ([[thm-algebra-of-derivatives]]).

## Counterexample

**Proof technique:** direct.

1.1 Let $r<s$ and $0<t<1$, and put $c=(1-t)r+ts$. Apply [L2] on $[r,c]$ and $[c,s]$. The two secant slopes equal $4u^3$ and $4v^3$ for some $r<u<c<v<s$ by [L1], so the first is strictly smaller; rearranging gives $c^4<(1-t)r^4+ts^4$. Thus $x^4$ is strictly convex. For distinct vectors, at least one coordinate gives this strict inequality and every other coordinate gives the corresponding weak one; adding shows that $f(x)=\sum_{j<n}x_j^4$ is strictly convex for $n\ge1$. [L1, L2, given, algebra]

2.1 Differentiating again with [L1] and [L3], the Hessian is diagonal with entries $12x_j^2$ and zero off-diagonal entries. At the origin it is the zero matrix, hence singular and not positive definite because $n\ge1$. Thus $f(x)=\sum_{j<n}x_j^4$ is strictly convex, but its Hessian at the origin is the zero matrix. [L1, L3, step 1.1, given, algebra] ∎
