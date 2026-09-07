---
id: prop-divergence-satisfies-the-product-rule
title: "Product rule for volume-form divergence"
kind: proposition
status: draft
origin: pipeline
deps: ["prop-divergence-is-well-defined-and-has-the-coordinate-formula"]
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
    - title: "EoM Divergence Comments definition; direct algebraic consequence of the coordinate formula"
      url: "https://encyclopediaofmath.org/wiki/Divergence"
proof_strategy: "Direct calculation and localization"
---
## Statement

For a smooth scalar function $f$ and smooth vector field $X$,
$$\operatorname{div}_\mu(fX)=df(X)+f\operatorname{div}_\mu X.$$
The formula holds also on manifolds with boundary.

## Facts & Assumptions

[F1] [[prop-divergence-is-well-defined-and-has-the-coordinate-formula]]: If $\mu=\rho\,dx^1\wedge\cdots\wedge dx^n$ with $\rho$ nowhere zero and $X=\sum_iX^i\partial_i$, then $$\operatorname{div}_\mu X=\rho^{-1}\sum_{i=1}^n\partial_i(\rho X^i).$$ This defines a smooth global function, also at boundary points. In dimension zero $X=0$ and divergence is zero.

## Proof

**Given:** The objects and hypotheses in the statement above.

1.1 In any chart the coordinate divergence formula gives $\operatorname{div}_\mu(fX)=\rho^{-1}\sum_i\partial_i(\rho fX^i)=\sum_iX^i\partial_i f+f\rho^{-1}\sum_i\partial_i(\rho X^i)$. This is the ordinary finite product rule. [F1, algebra]

2.1 The first term is $df(X)$ and the second is $f\operatorname{div}_\mu X$, so the coordinate-invariant equality follows. The formula is valid for $f=0$, constant $f$, $X=0$, and in dimension zero, where both sums and $df(X)$ are zero; the cited coordinate formula includes boundaries. [F1, step 1.1] ∎
