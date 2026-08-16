---
id: prop-sums-and-scalar-multiples-of-complex-power-series
kind: proposition
title: "Sums and scalar multiples of convergent complex power series are represented coefficientwise on the common disc"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-complex-power-series-converge-locally-uniformly, lem-complex-conjugation-and-modulus-laws]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-16
sources:
  scraped: []
  references:
    - title: "MIT 18.100C lecture notes on power series"
      url: "https://ocw.mit.edu/courses/18-100c-real-analysis-fall-2012/1058808e5cb57c986118333f8b6fa0d7_MIT18_100CF12_l11sum.pdf"
pipeline_run: null
---

## Statement

If $f(z)=\sum a_n(z-c)^n$ and $g(z)=\sum b_n(z-c)^n$, then for complex scalars $\alpha,\beta$,
$$\alpha f(z)+\beta g(z)=\sum_{n\ge0}(\alpha a_n+\beta b_n)(z-c)^n$$
throughout the common open disc of convergence, with local uniform convergence there.

## Facts & Assumptions

**Given:** Two complex power series about the same centre and scalars $\alpha,\beta$.

[L1] Each series converges uniformly on every smaller closed subdisc ([[thm-complex-power-series-converge-locally-uniformly]]).

[L2] Complex modulus satisfies $|z+w|\le |z|+|w|$ and $|zw|=|z||w|$ ([[lem-complex-conjugation-and-modulus-laws]]).

## Proof

**Proof technique:** direct.

1.1 For every finite $N$, exact distributivity gives $\alpha\sum_{n<N}a_n(z-c)^n+\beta\sum_{n<N}b_n(z-c)^n=\sum_{n<N}(\alpha a_n+\beta b_n)(z-c)^n$. [algebra]

1.2 On a closed subdisc inside both radii, [L1] makes both sequences of partial sums uniformly convergent. If their limits are $A,B$, then [L2] bounds the error after taking the linear combination by $|\alpha||A_N-A|+|\beta||B_N-B|$, which tends uniformly to $0$. [L1, L2, algebra]

2.1 Passing to the limit in step 1.1 proves the formula and its local uniform convergence. Zero scalars and unequal radii are included by taking the common disc. [step 1.1, step 1.2] ∎
