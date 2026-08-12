---
id: ex-unit-hyperbolic-area-brackets-e
kind: example
title: "Integral bounds alone give $2<e<4$; the sharper published bound is $2<e<3$"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [cor-e-is-the-unique-unit-hyperbolic-area,
       thm-integral-logarithm-product-law,
       cor-integral-logarithm-is-strictly-increasing,
       thm-monotonicity-of-the-integral,
       thm-additivity-over-subintervals,
       cor-two-less-than-e-less-than-three]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

Elementary integral bounds give $2<e<4$. The sharper published estimate is
$2<e<3$.

## Facts & Assumptions

**Given:** The integral function $L$ and the number $e$.

[L1] $e$ is the unique positive number with
$L(e)=\int_1^e dt/t=1$
([[cor-e-is-the-unique-unit-hyperbolic-area]]).

[L2] $L(xy)=L(x)+L(y)$
([[thm-integral-logarithm-product-law]]).

[L3] $L$ is strictly increasing
([[cor-integral-logarithm-is-strictly-increasing]]).

[L4] If $m\leq f\leq M$ on $[a,b]$, then
$m(b-a)\leq\int_a^b f\leq M(b-a)$
([[thm-monotonicity-of-the-integral]]).

[L5] Oriented integrals satisfy
$\int_u^v f+\int_v^w f=\int_u^w f$
([[thm-additivity-over-subintervals]]).

[L6] The published sharper bound is $2<e<3$
([[cor-two-less-than-e-less-than-three]]).

## Verification

**Proof technique:** direct.

1.1 On $[1,3/2]$, one has $2/3\leq1/t\leq1$, so [L4] gives $$\frac13\leq\int_1^{3/2}\frac{dt}{t}\leq\frac12.$$ [L4, algebra]

1.2 On $[3/2,2]$, one has $1/2\leq1/t\leq2/3$, so [L4] gives $$\frac14\leq\int_{3/2}^{2}\frac{dt}{t}\leq\frac13.$$ [L4, algebra]

1.3 The stronger estimate $2<e<3$ is the published result [L6]; it is cited here, not reproved. [L6]

2.1 By additivity [L5], steps 1.1 and 1.2 yield $7/12\leq L(2)\leq5/6$. Thus $L(2)<1$ and $2L(2)\geq7/6>1$. [step 1.1, step 1.2, L5, algebra]

3.1 The product law gives $L(4)=L(2\cdot2)=2L(2)>1$. [step 2.1, L2]

4.1 Since $L(e)=1$ by [L1] and $L$ is strictly increasing by [L3], $L(2)<L(e)<L(4)$ implies $2<e<4$. [step 2.1, step 3.1, L1, L3]

5.1 Steps 4.1 and 1.3 establish both stated brackets. [step 4.1, step 1.3] ∎
