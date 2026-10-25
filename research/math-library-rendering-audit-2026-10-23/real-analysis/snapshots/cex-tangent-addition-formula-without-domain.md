---
id: cex-tangent-addition-formula-without-domain
kind: counterexample
title: "$u=v=\\pi/4$ shows that the tangent addition formula cannot omit its domain restrictions"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [thm-addition-and-subtraction-formulas-for-tangent-cotangent-secant-and-cosecant, def-tangent-cotangent-secant-cosecant, thm-quarter-turn-values-and-shift-formulas]
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
    - title: "NIST Digital Library of Mathematical Functions, Chapter 4"
      url: "https://dlmf.nist.gov/4"
pipeline_run: null
---

## Statement refuted

The tangent addition formula cannot be asserted for all real $u,v$ without domain restrictions. The conventions and prerequisite facts used below are recorded in [[thm-addition-and-subtraction-formulas-for-tangent-cotangent-secant-and-cosecant]], [[def-tangent-cotangent-secant-cosecant]], [[thm-quarter-turn-values-and-shift-formulas]].

## Facts & Assumptions

**Given:** $u=v=\pi/4$.

## Counterexample

1.1 Both $\tan u$ and $\tan v$ equal $1$, so the formal right side has denominator $1-1=0$. [given]

2.1 Meanwhile $u+v=\pi/2$, where tangent itself is undefined. [given] ∎
