---
id: thm-complex-exponential-addition-and-real-extension
kind: theorem
title: "$\\exp(z+w)=\\exp z\\,\\exp w$, and the complex exponential extends the real exponential"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-complex-exponential, lem-complex-exponential-series-converges-everywhere, lem-cauchy-product-of-absolutely-convergent-complex-series, def-real-exponential-function-and-e, lem-binomial-theorem-over-complex-numbers, thm-binomial-closed-formula]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I: Complex Numbers and the Complex Exponential"
      url: "https://www.jirka.org/ra/html/sec_complexexp.html"
pipeline_run: null
---

## Statement

For all $z,w\in\mathbb C$, $\exp(z+w)=\exp z\exp w$. For real $x$, the complex value $\exp(x+0i)$ equals the published real exponential $e^x$. The conventions and prerequisite facts used below are recorded in [[def-complex-exponential]], [[lem-complex-exponential-series-converges-everywhere]], [[lem-cauchy-product-of-absolutely-convergent-complex-series]], [[def-real-exponential-function-and-e]], [[lem-binomial-theorem-over-complex-numbers]], [[thm-binomial-closed-formula]].

## Facts & Assumptions

**Given:** Complex $z,w$ and real $x$.

[L1] [[lem-cauchy-product-of-absolutely-convergent-complex-series]] says that the product has $n$th coefficient $\sum_{k\le n}a_kb_{n-k}$.

[L2] [[thm-binomial-closed-formula]] gives $\binom nk\,k!\,(n-k)!=n!$ for $k\le n$.

[L3] [[lem-binomial-theorem-over-complex-numbers]] gives $(z+w)^n=\sum_{k\le n}\iota_{\mathbb C}\!\left(\binom nk\right)z^kw^{n-k}$, where $\iota_{\mathbb C}$ is its canonical-natural map.

[L4] [[lem-complex-exponential-series-converges-everywhere]] states that $\sum z^n/n!$ converges absolutely for every complex $z$.

## Proof

**Proof technique:** direct.

1.1 By [L4], the two exponential series converge absolutely, so [L1] makes their product the Cauchy product. [L1, L4]

2.1 Its degree-$n$ coefficient is $\sum_{k\le n}z^kw^{n-k}/(k!(n-k)!)$. By [L2], after applying the canonical-natural map into $\mathbb C$, each summand is $\iota_{\mathbb C}\!\left(\binom nk\right)z^kw^{n-k}/n!$, and [L3] turns their sum into $(z+w)^n/n!$. [L2, L3, step 1.1]

3.1 The resulting series is the defining series of $\exp(z+w)$. When $z=x+0i$, every term is the corresponding real term in the definition of $e^x$, so the two values agree. [step 2.1] ∎
