---
id: prop-one-densities-form-a-one-dimensional-vector-space
title: "The density line and its positive cone"
kind: proposition
status: draft
origin: pipeline
deps: ["def-one-density-on-a-finite-dimensional-real-vector-space"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Lee Proposition 16.35(a,b,d), pp.428–429"
      url: "https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf"
proof_strategy: "Direct calculation and localization"
---
## Statement

The densities $D(V)$ form a one-dimensional real vector space under pointwise operations. Evaluation on any basis is a linear isomorphism $D(V)\to\mathbb R$. The nonzero nonnegative densities form a canonical positive ray.

## Facts & Assumptions

[F1] [[def-one-density-on-a-finite-dimensional-real-vector-space]]: For an $n$-dimensional real vector space $V$, a **one-density** is a real-valued function $\delta$ on ordered bases such that $$\delta(vA)=|\det A|\,\delta(v)\qquad(A\in GL(n,\mathbb R)).$$ For $n\geq1$ extend its value by zero to dependent $n$-tuples. For $n=0$ it is an arbitrary real scalar on the empty basis (the empty determinant is one). Write $D(V)$ for these densities. Positive means strictly positive on every basis; nonnegative includes zero. Negative scalar multiples remain densities; positivity is extra structure on their one-dimensional real space.

## Proof

**Given:** The objects and hypotheses in the statement above.

1.1 Fix a basis $e$ (the empty basis when $n=0$). Every basis is uniquely $eA$ for $A\in GL(n,\mathbb R)$. A density is determined by $c=\delta(e)$ since $\delta(eA)=c|\det A|$. Conversely this formula, with zero on dependent tuples for $n\geq1$, satisfies the required transformation law by multiplicativity of determinants. [F1]

2.1 The formula is linear in $c$, so evaluation and its displayed inverse are linear bijections. Since $|\det A|>0$, positivity is equivalent to $c>0$ and nonnegativity to $c\geq0$, independently of the chosen basis. Thus the nonzero nonnegative densities are exactly one ray. For $n=0$ this says precisely that scalars form $\mathbb R$. [step 1.1, algebra] ∎
