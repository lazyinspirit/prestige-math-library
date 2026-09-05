---
id: fs-zero-derivative-almost-everywhere-implies-constancy
kind: false-statement
title: "FALSE: derivative zero almost everywhere implies constancy"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-cantor-function-is-continuous, def-derivative, thm-cantor-function-properties, thm-cantor-set-properties]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "A. M. Bruckner, J. B. Bruckner, and B. S. Thomson, Real Analysis, 2nd ed."
      url: "https://classicalrealanalysis.info/documents/BBT-AlllChapters-Landscape.pdf"
---

## Statement

If a real function on a compact interval has derivative $0$ almost everywhere,
then it is constant.

## Facts & Assumptions

**Given:** The statement above.

[A1] We use the Cantor function.

## Refutation

**Proof technique:** direct.

1.1 Let $c$ be the Cantor function. By [[thm-cantor-function-properties]], it is constant on a neighborhood of every point outside the Cantor set, so $c'(x)=0$ there. The Cantor set is null by [[thm-cantor-set-properties]], hence $c'=0$ almost everywhere. [given]

2.1 The same theorem gives $c(0)=0$ and $c(1)=1$, so $c$ is not constant. Therefore the statement is false. [step 1.1] ∎
