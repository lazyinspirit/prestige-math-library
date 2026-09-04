---
id: ex-euler-totient-dirichlet-series
kind: example
title: "A local prime factor in the Dirichlet series of Euler's totient"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-euler-totient-dirichlet-series, thm-totient-of-a-prime-power]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Kiran S. Kedlaya, Notes on Analytic Number Theory, Chapter 2 examples"
      url: "https://kskedlaya.org/ant/part-1-3.html"
pipeline_run: null
---

## Example

For a prime $p$, the $p$-power contribution to the Dirichlet series of
$\varphi$ is

$$\sum_{k \ge 0} \varphi(p^k)p^{-ks} = \frac{1-p^{-s}}{1-p^{1-s}}.$$

## Facts & Assumptions

**Given:** A prime $p$ and $\Re s>2$.

[L1] The Dirichlet series of $\varphi$ is $\zeta(s-1)/\zeta(s)$
([[cor-euler-totient-dirichlet-series]]).

[L2] $\varphi(p^k)=p^k-p^{k-1}$ for $k \ge 1$
([[thm-totient-of-a-prime-power]]).

## Verification

**Proof technique:** direct.

1.1 By [L2], $$\sum_{k \ge 0} \varphi(p^k)p^{-ks} = 1 + \sum_{k \ge 1} (p^k-p^{k-1})p^{-ks} = 1 + (1-p^{-1})\sum_{k \ge 1} p^{k(1-s)}.$$ [L2, given, algebra]

2.1 Summing the geometric series gives $$1 + (1-p^{-1})\frac{p^{1-s}}{1-p^{1-s}} = \frac{1-p^{-s}}{1-p^{1-s}}.$$ This is the local factor of [L1]. [L1, step 1.1, algebra] ∎
