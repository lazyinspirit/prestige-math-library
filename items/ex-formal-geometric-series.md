---
id: ex-formal-geometric-series
kind: example
title: "The formal geometric identity $(1-x)^{-1}=\\sum_{n\\ge0}x^n$ holds over every commutative ring"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-formal-power-series-unit-criterion, prop-coefficient-extraction-linearity-and-extensionality]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Benjamin Sambale, An Invitation to Formal Power Series"
      url: "https://link.springer.com/article/10.1365/s13291-022-00256-6"
pipeline_run: null
---

## Example

In $R\llbracket x\rrbracket$, for every commutative ring $R$,

$$(1-x)^{-1}=1+x+x^2+x^3+\cdots.$$

This includes the zero ring.

## Facts & Assumptions

**Given:** The hypotheses and notation of the statement above.

[F1] Product coefficients satisfy $[x^n](fg)=\sum_{i=0}^{n}[x^i]f[x^{n-i}]g$ ([[prop-coefficient-extraction-linearity-and-extensionality]]).

[F2] Two formal series are equal if and only if all their coefficients are equal ([[prop-coefficient-extraction-linearity-and-extensionality]]).

[F3] A formal power series is a unit exactly when its constant coefficient is a unit ([[thm-formal-power-series-unit-criterion]]).

## Verification

**Proof technique:** multiply and compare coefficients.

1.1 The series $s=\sum_{n\ge0}x^n$ has every coefficient equal to $1$. The constant coefficient of $(1-x)s$ is $1$, and for $n\ge1$ its coefficient is $[x^n]s-[x^{n-1}]s=1-1=0$. [given, F1]

2.1 Thus $(1-x)s=1$ by coefficient extensionality. Since $1-x$ has unit constant coefficient $1$, its inverse is unique, so $s=(1-x)^{-1}$. In the zero ring both sides are the unique series. [step 1.1, given, F2, F3] ∎
