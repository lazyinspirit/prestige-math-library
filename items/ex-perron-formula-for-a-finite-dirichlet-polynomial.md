---
id: ex-perron-formula-for-a-finite-dirichlet-polynomial
kind: example
title: "Perron inversion for a finite Dirichlet polynomial"
status: draft
origin: pipeline
deps: [thm-perron-formula]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Kiran S. Kedlaya, Analytic Number Theory, §10.1"
      url: "https://kskedlaya.org/ant/chapter-10.html"
---

## Example

For $F(s)=1+2^{-s}$, Perron's integral is $1$ for $1<x<2$, $3/2$ for $x=2$,
and $2$ for $x>2$.

## Verification

**Given:** the Perron formula for finite sums.

1.1 Termwise inversion gives $\delta(x)+\delta(x/2)$; for $x>1$, the first term is $1$. [given, algebra]

2.1 The second term is $0,1/2,1$ according as $x<2,x=2,x>2$, proving all three values without a limit interchange. [step 1.1, cases] ∎
