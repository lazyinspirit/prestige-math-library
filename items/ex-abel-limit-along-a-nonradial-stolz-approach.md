---
id: ex-abel-limit-along-a-nonradial-stolz-approach
kind: example
title: "Abel convergence of the alternating harmonic power series along a nonradial Stolz approach"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-abel-limit-theorem-for-complex-series-in-stolz-regions, thm-log-one-plus-x-power-series]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

For $k\ge2$, put $z_k=1-1/k+i/(2k)$. Then $|z_k|<1$, $z_k\to1$ nonradially within one Stolz region, and
$$\sum_{n=1}^{\infty}\frac{(-1)^{n+1}z_k^n}{n}\longrightarrow\log2.$$

## Facts & Assumptions

**Given:** The sequence $(z_k)$ and the alternating harmonic coefficients.

[L1] The alternating harmonic series converges to $\log2$ ([[thm-log-one-plus-x-power-series]]).

[L2] Abel's theorem recovers a convergent series along every fixed Stolz approach to $1$ ([[thm-abel-limit-theorem-for-complex-series-in-stolz-regions]]).

## Verification

**Proof technique:** direct.

1.1 Direct calculation gives $|z_k|^2=1-2/k+5/(4k^2)<1$ for $k\ge2$, and $|1-z_k|=\sqrt5/(2k)$. [algebra]

2.1 Since $1-|z_k|=(1-|z_k|^2)/(1+|z_k|)$, step 1.1 gives a uniform bound on $|1-z_k|/(1-|z_k|)$, so $(z_k)$ lies in one Stolz region and tends to $1$. [step 1.1, algebra]

3.1 Apply [L2] to the series in [L1]. The nonzero imaginary part makes the approach nonradial. [step 2.1, L1, L2] ∎
