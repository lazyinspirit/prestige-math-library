---
id: ex-tdmath-close-packing-endpoint
kind: example
title: The close-packing endpoint can have zero canonical weight
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 5
deps:
  - def-tdmath-superstable-regular-interaction
  - thm-tdmath-canonical-interior-density-limit
  - def-product-measure-on-sigma-finite-spaces
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - def-factorial-and-falling-factorial
  - thm-lebesgue-outer-measure-and-measurability-are-translation-invariant
dependency_roles:
  def-tdmath-superstable-regular-interaction: mathematical-premise
  thm-tdmath-canonical-interior-density-limit: mathematical-premise
  def-product-measure-on-sigma-finite-spaces: mathematical-premise
  thm-lebesgue-measure-of-a-box-of-every-kind: mathematical-premise
  thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
  def-factorial-and-falling-factorial: mathematical-premise
  thm-lebesgue-outer-measure-and-measurability-are-translation-invariant: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "D. Dereudre, Introduction to the theory of Gibbs point processes"
      url: "https://arxiv.org/pdf/1701.08105"
      locator: "Section 1.3, PDF pp.10–12: canonical positional normalization; the one-dimensional hard-rod integral is calculated here."
---

## Example

In one dimension, let the pair potential be infinite when the separation is less than $a>0$, and zero otherwise. For $N\geq1$ labeled rods in $[0,L]$, with canonical positional normalization $1/N!$, write $S=L-(N-1)a$. If $S>0$, translating the ordered coordinates by $y_i=x_i-(i-1)a$ gives
$$Z(L,N;\beta)=\frac{S^N}{N!}=\frac{(L-(N-1)a)^N}{N!},\qquad \beta>0.$$
If $S=0$, the allowed configuration set has zero Lebesgue measure and $Z(L,N;\beta)=0$. Along $N\to\infty$ with $L=(N-1)a$, the density $N/L\to1/a$ while every finite-volume partition is zero. Thus the thermodynamic close-packing endpoint is approached by a sequence of zero-weight finite systems; it is not realized by a positive canonical partition. The interior canonical limit theorem makes no assertion at that endpoint.
## Facts & Assumptions

**Given:** Hard-core distance $a>0$ and inverse temperature $\beta>0$.

[F1] [[def-tdmath-superstable-regular-interaction]]: the canonical positional partition integrates over labeled coordinates and divides by $N!$.

[F2] [[thm-tdmath-canonical-interior-density-limit]]: its canonical limit assertion is restricted to interior attainable densities.

[F3] [[def-product-measure-on-sigma-finite-spaces]], [[thm-lebesgue-measure-of-a-box-of-every-kind]], [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]], and [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: product Lebesgue measure assigns volume $S^N$ to the cube $[0,S]^N$ and permits iterated integration.

[F4] [[def-factorial-and-falling-factorial]]: the coordinate-order partition has $N!$ permutation chambers and the canonical normalization divides by $N!$.

[F5] [[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]]: translating a Lebesgue-measurable set preserves its Lebesgue measure.


## Proof

**Given:** $N\geq1$ and $L\geq(N-1)a$.

1.1 Order the coordinates $0\leq x_1<\cdots<x_N\leq L$. The exclusion constraints are $x_{i+1}-x_i\geq a$. Apply the coordinatewise translation $x_i\mapsto y_i=x_i-(i-1)a$; each one-coordinate translation preserves Lebesgue measure [F5], so product measure is preserved. The ordered region becomes $0\leq y_1\leq\cdots\leq y_N\leq S$, where $S=L-(N-1)a$. The cube $[0,S]^N$ splits, up to equality sets of zero product measure, into $N!$ coordinate-order regions. Product-measure uniqueness makes these permutation chambers equal in measure, so the ordered region has volume $S^N/N!$. The full labeled allowed volume is $N!$ times this, and canonical division by $N!$ gives $Z(L,N;\beta)=S^N/N!$. [F1, F3, F4, F5, algebra]

2.1 If $L=(N-1)a$, then $S=0$ and the transformed region is a null set; its integral is zero. If $L>(N-1)a$, then $S>0$ and the ordered region has positive product volume. Thus the maximal-density endpoint does not carry a positive canonical partition at exact close packing; the interior-only theorem [F2] makes no contrary assertion. [F1, F2, F3, F4, step 1.1, algebra] ∎
