---
id: cex-formal-nonunit-has-no-inverse
kind: counterexample
title: "$x$ has no multiplicative inverse in $R\\llbracket x\\rrbracket$ although it is invertible in $K((x))$ when $R=K$ is a field"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-formal-power-series-unit-criterion, thm-formal-power-laurent-dictionary]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "Benjamin Sambale, An Invitation to Formal Power Series"
      url: "https://link.springer.com/article/10.1365/s13291-022-00256-6"
pipeline_run: null
---

## Counterexample

Let $K$ be a field. The series $x$ is not a unit in $K\llbracket x\rrbracket$, but its image is a unit in $K((x))$ with inverse $x^{-1}$.

## Facts & Assumptions

**Given:** The hypotheses and notation of the statement above.

[F1] A formal power series is a unit exactly when its constant coefficient is a unit ([[thm-formal-power-series-unit-criterion]]).

[F2] Power series embed in Laurent series, and a nonzero Laurent series $h=x^{v_x(h)}u$ has inverse $x^{-v_x(h)}u^{-1}$ ([[thm-formal-power-laurent-dictionary]]).

## Verification

**Proof technique:** compare constant coefficient and Laurent order.

1.1 The constant coefficient of $x$ is $0$, which is not a unit in the field $K$, so the unit criterion excludes a power-series inverse. Equivalently, every product $xg$ has constant coefficient $0$. [given, F1]

1.2 In $K((x))$, negative exponents are permitted and $x x^{-1}=1=x^{-1}x$. Thus passing to Laurent series changes the answer. [given, F2]

2.1 Steps 1.1 and 1.2 exhibit the claimed contrast. [step 1.1, step 1.2] ∎
