---
id: lem-moment-bound-for-a-random-sign
kind: lemma
title: "For a uniform random sign $\\varepsilon$, $\\mathbb E[e^{t\\varepsilon}]\\le e^{t^2/2}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-moment-generating-function, def-real-exponential-function-and-e, def-factorial-and-falling-factorial, lem-finite-sum-laws, lem-series-linearity, thm-direct-comparison-test, thm-nonnegative-series-bounded-partial-sums]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "J. Matousek and J. Vondrak, The Probabilistic Method, Section 7.1"
      url: "https://www.cs.cmu.edu/~15850/handouts/matousek-vondrak-prob-ln.pdf"
    - title: "Y. Zhao, MIT 18.218 Probabilistic Method in Combinatorics, Section 4.1"
      url: "https://yufeizhao.com/pm/sp19/pmnotes.pdf"
pipeline_run: null
---

## Statement

If $\varepsilon$ is uniform on $\{-1,1\}$, then for every real $t$,
$$\mathbb E[\exp(t\varepsilon)]\le\exp(t^2/2).$$

## Facts & Assumptions

**Given:** A uniform random sign $\varepsilon$ and a real $t$.

[L1] The moment generating function is the expectation of $\exp(tX)$ ([[def-moment-generating-function]]).

[L2] $\exp(x)=\sum_{k\ge0}x^k/k!$ for real $x$ ([[def-real-exponential-function-and-e]]).

[L3] Factorials are finite products with $0!=1$ ([[def-factorial-and-falling-factorial]]).

[L4] Convergent series may be added and scaled, and termwise comparison of nonnegative series passes to their sums ([[lem-series-linearity]], [[thm-direct-comparison-test]], [[thm-nonnegative-series-bounded-partial-sums]]).

[L5] Finite sums obey addition, scaling, and monotonicity ([[lem-finite-sum-laws]]).

## Proof

**Proof technique:** direct.

1.1 Direct averaging gives $\mathbb E[\exp(t\varepsilon)]=(\exp(t)+\exp(-t))/2$. [L1]

1.2 For every $j\ge0$, $(2j)!=\prod_{r=1}^j(2r-1)(2r)\ge\prod_{r=1}^j2r=2^jj!$, including $j=0$. [L3, L5, algebra]

2.1 Expanding both exponentials by [L2] and using [L4], the odd powers cancel and the result is $\sum_{j\ge0}t^{2j}/(2j)!$. [step 1.1, L2, L4]

3.1 Hence $t^{2j}/(2j)!\le(t^2/2)^j/j!$ term by term, and [L4] gives $\mathbb E[\exp(t\varepsilon)]\le\sum_{j\ge0}(t^2/2)^j/j!=\exp(t^2/2)$. [step 2.1, step 1.2, L2, L4] ∎
