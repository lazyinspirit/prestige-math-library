---
id: ex-mobius-reciprocal-zeta-coefficients
kind: example
title: "The first coefficients of 1 over zeta are the Möbius values"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-mobius-dirichlet-series-reciprocal-zeta, thm-dirichlet-series-multiplication-convolution]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Kiran S. Kedlaya, Notes on Analytic Number Theory, Definition 2.8"
      url: "https://kskedlaya.org/ant/part-1-3.html"
pipeline_run: null
---

## Example

The reciprocal-zeta identity begins

$$\frac{1}{\zeta(s)} = 1-\frac1{2^s}-\frac1{3^s}-\frac1{5^s}+\frac1{6^s}-\frac1{7^s}+O(8^{-s}),$$

matching the first Möbius values.

## Facts & Assumptions

**Given:** The reciprocal-zeta identity on $\Re s>1$.

[L1] The Möbius Dirichlet series is $1/\zeta(s)$
([[cor-mobius-dirichlet-series-reciprocal-zeta]]).

[L2] Dirichlet-series multiplication is convolution
([[thm-dirichlet-series-multiplication-convolution]]).

## Verification

**Proof technique:** direct.

1.1 The first Möbius values are $$\mu(1)=1,\ \mu(2)=\mu(3)=\mu(5)=\mu(7)=-1,\ \mu(4)=\mu(8)=0,\ \mu(6)=1.$$ So the displayed initial segment is exactly $\sum_{n \le 7}\mu(n)n^{-s}$. [L1, given, algebra]

2.1 Multiplying this initial segment by the initial segment of $\zeta(s)$ and using [L2], the coefficients through $n=7$ cancel to those of the Dirichlet-convolution identity. That is the coefficient-level content of [L1]. [L1, L2, step 1.1, algebra] ∎
