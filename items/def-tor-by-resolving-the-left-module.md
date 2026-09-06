---
id: def-tor-by-resolving-the-left-module
title: "Tor from a projective resolution of the left module"
kind: definition
status: draft
origin: pipeline
deps: ["def-tensor-product-total-complex-of-chain-complexes", "def-projective-resolution-in-an-abelian-category"]
proof_strategy: direct
sources:
  references:
    - title: "Weibel, An Introduction to Homological Algebra"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Definition

For a right $R$-module $N$ and a left $R$-module $M$ with projective resolution $P\to M$, set $\operatorname{Tor}^R_n(N,M)=H_n(N\otimes_RP)$.
