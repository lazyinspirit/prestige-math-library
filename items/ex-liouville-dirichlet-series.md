---
id: ex-liouville-dirichlet-series
kind: example
title: "The Dirichlet series of the Liouville function is zeta of 2s divided by zeta of s"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-liouville-function, cor-completely-multiplicative-dirichlet-series-euler-product]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Kiran S. Kedlaya, Notes on Analytic Number Theory, Chapter 2 examples"
      url: "https://kskedlaya.org/ant/part-1-3.html"
pipeline_run: null
---

## Example

For $\Re s>1$,

$$\sum_{n \ge 1} \lambda(n)n^{-s} = \frac{\zeta(2s)}{\zeta(s)},$$

where $\lambda$ is the Liouville function.

## Facts & Assumptions

**Given:** A complex number $s$ with $\Re s>1$.

[L1] The Liouville function satisfies $\lambda(p^k)=(-1)^k$
([[def-liouville-function]]).

[L2] Completely multiplicative Dirichlet series have geometric Euler factors
([[cor-completely-multiplicative-dirichlet-series-euler-product]]).

## Verification

**Proof technique:** direct.

1.1 By [L2], $$\sum_{n \ge 1} \lambda(n)n^{-s} = \prod_p \frac{1}{1+\;p^{-s}}.$$ Indeed [L1] gives the local ratio $f(p)=-1$, so the denominator is $1-(-p^{-s})=1+p^{-s}$. [L1, L2, given, algebra]

2.1 Since $$\frac{1}{1+p^{-s}} = \frac{1-p^{-s}}{1-p^{-2s}},$$ multiplying over primes gives $$\prod_p \frac{1-p^{-s}}{1-p^{-2s}} = \frac{\zeta(2s)}{\zeta(s)}.$$ So the claimed identity holds. [step 1.1, algebra] ∎
