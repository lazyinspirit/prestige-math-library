---
id: ex-formal-derivative-detects-a-repeated-root-in-characteristic-two
kind: example
title: 'In characteristic $2$, $x^2+1=(x+1)^2$ has zero derivative and a repeated root'
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-repeated-root-derivative-criterion, prop-formal-derivative-laws, prop-integers-modulo-n-as-a-quotient-ring, def-prime, thm-z-mod-p-is-a-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: 'Brian Conrad, Differential Criterion and Primitivity, Section 1'
      url: 'https://math.stanford.edu/~conrad/210BPage/handouts/sepfield.pdf'
pipeline_run: null
---

## Example

In $(\mathbb Z/2)[x]$, the polynomial $f=x^2+1$ has repeated root $1$ and has formal derivative $0$.

## Facts & Assumptions

**Given:** The quotient field $\mathbb Z/2$ and the polynomial $f=x^2+1$.

[L1] A root is repeated exactly when it is also a root of the formal derivative ([[thm-repeated-root-derivative-criterion]]).

[L2] The power and Leibniz rules hold for formal derivatives over any commutative ring ([[prop-formal-derivative-laws]]).

[L3] The ring $\mathbb Z/2$ is the quotient ring $\mathbb Z/2\mathbb Z$, so $2=0$ and $1+1=0$ ([[prop-integers-modulo-n-as-a-quotient-ring]]).

[L4] An integer is prime when it exceeds $1$ and has no positive divisors other than $1$ and itself ([[def-prime]]).

[L5] For prime $p$, the ring $\mathbb Z/p$ is a field ([[thm-z-mod-p-is-a-field]]).

## Verification

**Proof technique:** direct.

1.1 A direct divisor check using [L4] shows that $2$ is prime, so [L5] licenses the field $\mathbb Z/2$. By [L3], $-1=1$ and $(x-1)^2=(x+1)^2=x^2+2x+1=x^2+1=f$, so $1$ is a repeated root. [given, L3, L4, L5, algebra]

2.1 By [L2], $f'=2x=0$ in $\mathbb Z/2[x]$, so both $f(1)$ and $f'(1)$ vanish, agreeing with the criterion [L1]. [step 1.1, L1, L2, L3] ∎
