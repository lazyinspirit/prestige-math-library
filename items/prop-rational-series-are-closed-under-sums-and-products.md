---
id: prop-rational-series-are-closed-under-sums-and-products
kind: proposition
title: "Rational formal power series are closed under sums and Cauchy products"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-rational-formal-power-series-and-reduced-denominator, thm-formal-power-series-unit-criterion]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "R. P. Stanley, Enumerative Combinatorics, vol. 1, 2nd ed., Section 4.2"
      url: "https://math.mit.edu/~rstan/ec/ec1.pdf"
pipeline_run: null
---

## Statement

Let $R$ be a commutative ring. If $F,G\in R\llbracket x\rrbracket$ are rational, then both $F+G$ and the Cauchy product $FG$ are rational. This includes zero series and polynomial presentations.

## Facts & Assumptions

**Given:** Rational presentations $F=P_1/Q_1$ and $G=P_2/Q_2$ over a commutative ring $R$.

[L1] A rational formal series has a presentation $P/Q$ whose denominator has unit constant coefficient ([[def-rational-formal-power-series-and-reduced-denominator]]).

[L2] A formal series is a unit exactly when its constant coefficient is a unit ([[thm-formal-power-series-unit-criterion]]).

## Proof

**Proof technique:** direct.

1.1 The product $Q_1Q_2$ has unit constant coefficient $Q_1(0)Q_2(0)$, so it is a unit of $R\llbracket x\rrbracket$ by [L2]. [given, L1, L2]

2.1 The identities $F+G=(P_1Q_2+P_2Q_1)/(Q_1Q_2)$ and $FG=P_1P_2/(Q_1Q_2)$ have polynomial numerators and the denominator from step 1.1, so [L1] makes both series rational. The formulas remain valid when a numerator is zero or a denominator is $1$. [step 1.1, L1, algebra] ∎
