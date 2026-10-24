---
id: fs-left-and-right-global-dimension-are-equal-by-definition
kind: false-statement
title: "FALSE: left and right global dimensions are equal by definition"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-left-and-right-global-dimension-of-a-ring]
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapters 3–4"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
pipeline_run: frontier-31a
---
## Statement

FALSE: left and right global dimensions are equal by definition

## Facts & Assumptions

**Given:** An arbitrary ring $R$ and the definitions of left and right global dimension.

## Refutation

**Proof technique:** direct.

1.1 Left global dimension is $\sup\{\operatorname{pd}_R M:M\text{ a left }R\text{-module}\}$, while right global dimension is the corresponding supremum over right $R$-modules, equivalently left $R^{\mathrm{op}}$-modules. [given, algebra]

2.1 These are distinct definitions on distinct module categories; no equality is built into either one. Any theorem equating them must add hypotheses or prove a comparison, so equality cannot hold “by definition.” [step 1.1, algebra] ∎
