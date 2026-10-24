---
id: cex-principal-complex-powers-exponent-law
kind: counterexample
title: "$((-1)^2)^{1/2}=1\\ne-1=(-1)^{2(1/2)}$ for principal complex powers"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-complex-logarithms-principal-logarithm-and-complex-powers, thm-classification-of-complex-logarithms]
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

## Statement refuted

The principal-power law $(z^a)^b=z^{ab}$ is false without branch hypotheses. The conventions and prerequisite facts used below are recorded in [[def-complex-logarithms-principal-logarithm-and-complex-powers]], [[thm-classification-of-complex-logarithms]].

## Facts & Assumptions

**Given:** $z=-1$, $a=2$, and $b=1/2$.

## Counterexample

1.1 The principal square of $-1$ is $1$, so $((-1)^2)^{1/2}=1$. [given]

2.1 The principal value of $(-1)^1$ is $-1$, so the two sides differ. [given] ∎
