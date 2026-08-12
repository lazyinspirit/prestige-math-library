---
id: thm-integral-logarithm-product-law
kind: theorem
title: "The integral logarithm satisfies L(xy)=L(x)+L(y) for all positive x and y"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-algebra-of-derivatives, thm-integral-logarithm-derivative-and-normalisation, thm-chain-rule,
       cor-zero-derivative-implies-constant,
       cor-differentiable-implies-continuous]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "OpenStax, Calculus Volume 1, Section 6.7"
      url: "https://openstax.org/books/calculus-volume-1/pages/6-7-integrals-exponential-functions-and-logarithms"
pipeline_run: null
---

## Statement

For all $x,y>0$,

$$L(xy)=L(x)+L(y).$$

## Facts & Assumptions

**Given:** $y>0$, with $x$ ranging over $(0,\infty)$.

[L1] $L'(z)=1/z$ for $z>0$, and $L(1)=0$
([[thm-integral-logarithm-derivative-and-normalisation]]).

[L2] If $f$ is differentiable at $g(x)$ and $g$ at $x$, then
$(f\circ g)'(x)=f'(g(x))g'(x)$ ([[thm-chain-rule]]).

[L3] A continuous function on an order-convex interval whose derivative
vanishes throughout the interior is constant
([[cor-zero-derivative-implies-constant]]).

[L4] A differentiable function is continuous
([[cor-differentiable-implies-continuous]]).

[L5] Sums, differences and scalar multiples of functions differentiable at a
point are differentiable there, with the corresponding derivatives
([[thm-algebra-of-derivatives]]).

## Proof

**Proof technique:** direct.

1.1 Define $h(x):=L(xy)-L(x)$ on $(0,\infty)$. By [L1] and [L2] each term is differentiable, so [L5] makes $h$ differentiable with $$h'(x)=\frac{y}{xy}-\frac1x=0.$$ [L1, L2, L5, algebra]
2.1 By [L4], $h$ is continuous, so [L3] makes it constant on $(0,\infty)$. [step 1.1, L4, L3]
3.1 Evaluating at $x=1$ gives $h(x)=h(1)=L(y)-L(1)=L(y)$. Therefore $L(xy)-L(x)=L(y)$, which is the claimed product law. [step 2.1, L1, algebra] ∎