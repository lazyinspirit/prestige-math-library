---
id: "cex-a-continuous-nowhere-differentiable-singular-one-simplex"
kind: "counterexample"
title: "A continuous nowhere differentiable singular one simplex"
deps: ["def-smooth-singular-simplex", "thm-takagi-function-is-continuous-and-nowhere-differentiable", "def-tent-function-and-takagi-series"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "DG-16 design; Hatcher/Park control"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "DG-16 B inventory; explicit verification or unresolved witness in proof_plan"
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement refuted

Every continuous real-valued singular one-simplex is differentiable at some interior parameter, and hence continuity alone could suffice for smoothness.

## Example

The Takagi path $T:[0,1]\to\mathbb R$, $T(t)=\sum_{n\ge0}2^{-n}\operatorname{dist}(2^nt,\mathbb Z)$, is continuous and has no finite derivative anywhere, including one-sided endpoint derivatives.

## Facts & Assumptions

**Given:** The real line as target and the displayed explicit series.

[F1] A smooth singular simplex has a smooth extension on an affine neighbourhood ([[def-smooth-singular-simplex]]).

[F2] The Takagi series converges uniformly and is nowhere finitely differentiable on its closed interval ([[thm-takagi-function-is-continuous-and-nowhere-differentiable]]).

[F3] The tent function is $\phi(t)=\min(r(t),1-r(t))$ with $r(t)=t-\lfloor t\rfloor$ ([[def-tent-function-and-takagi-series]]).

## Proof

1.1 Each term is nonnegative and at most $2^{-n-1}$ by [F3]. Thus the sum is well-defined and $0\le T\le1$. By [F2] it is continuous, so it is a singular one-simplex. Direct substitution gives $T(0)=T(1)=0$ and $T(1/2)=1/2$, because every term with $n\ge1$ vanishes there. The path is therefore nonconstant despite its equal endpoints. [given, F2, F3, algebra]

2.1 To spell out the differentiability obstruction supplied by [F2], take the nested adjacent dyadic interval $[u_N,v_N]$ of length $2^{-N}$ containing the parameter, using the interval to the right at a dyadic point and the interval to the left at $1$. All summands of index at least $N$ vanish at its endpoints. Each earlier summand is affine there with slope $\varepsilon_n\in\{-1,1\}$. The secant slope of $T$ is $\sum_{n<N}\varepsilon_n$. Nested intervals preserve the earlier slopes, so consecutive secant slopes differ by one in absolute value and cannot converge to a finite value. If a finite derivative existed, the two endpoint quotients would tend to it, and their convex combination, this secant slope, would also tend to it. At a dyadic point or endpoint the appropriate one-sided quotient gives the same contradiction. This verifies exactly the finite-derivative assertion needed here. [F2, F3, step 1.1, algebra]

3.1 A smooth extension in [F1] would give a finite derivative at every interior parameter, contradicting step 2.1. Thus this example meets the stronger nowhere-differentiable requirement, not only failure at one cusp. There is no empty-domain case for a singular one-simplex. A point target would yield a constant smooth map and is not this witness. No infinite selections are used: the series and dyadic intervals are specified arithmetically. [F1, F2, step 1.1, step 2.1] ∎
