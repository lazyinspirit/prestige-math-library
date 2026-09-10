---
id: fs-tor-takes-two-left-modules-over-an-arbitrary-ring
title: "Tor does not take two left modules over an arbitrary ring without extra bimodule structure"
kind: false-statement
status: published
origin: pipeline
deps: ["def-tor-by-resolving-the-left-module"]
proof_strategy: direct
sources:
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-06
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
---

## Statement

False claim: for every noncommutative ring $R$, $\operatorname{Tor}^R_i(M,N)$ is defined for two left $R$-modules $M,N$.

## Refutation

**Given:** the ring $R$ and its left modules.

1.1 The tensor construction requires its first input to be a right $R$-module so that $(xr)\otimes y=x\otimes(ry)$ is meaningful. [given]

2.1 For two merely left modules, $xr$ is not part of the supplied structure, so the balancing relation is not typed. [step 1.1, algebra]

3.1 Hence the displayed Tor expression is not even defined without additional bimodule or opposite-ring data, refuting the universal claim. [step 2.1, algebra] ∎
