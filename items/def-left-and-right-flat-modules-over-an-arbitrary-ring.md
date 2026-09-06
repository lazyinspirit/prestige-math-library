---
id: def-left-and-right-flat-modules-over-an-arbitrary-ring
title: "Left and right flat modules over an arbitrary ring"
kind: definition
status: published
origin: pipeline
deps: ["def-exact-and-short-exact-sequences-of-modules", "def-tensor-product-of-modules-by-generators-and-relations"]
proof_strategy: direct
sources:
  references:
    - title: "Weibel, An Introduction to Homological Algebra"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-06
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Definition

A left $R$-module $M$ is flat when $-\otimes_RM$ is exact on right $R$-modules; a right $R$-module $N$ is flat when $N\otimes_R-$ is exact on left $R$-modules.
