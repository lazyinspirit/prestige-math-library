---
id: def-variation-function-and-positive-negative-variation
kind: definition
title: "Variation function and positive and negative variations"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-bounded-variation-and-total-variation,
       lem-variation-additive-on-subintervals, def-interval]
justified_by: []
aliases: []
landmark: true
short: "positive and negative variation"
verification:
  precheck: n/a
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "Christopher Heil, Absolute Continuity and the Banach-Zaretsky Theorem"
      url: "https://heil.math.gatech.edu/papers/abscont_typosmarked.pdf"
    - title: "William F. Trench, Introduction to Real Analysis, Ch. 3"
      url: "https://people.math.sc.edu/girardi/m5545/TrenchBook/FreeHyperlinkedEdition2pt04.pdf"
pipeline_run: null
---

## Definition

Let $f:[a,b]\to\mathbb R$ have bounded variation
([[def-bounded-variation-and-total-variation]]). Its **variation function** is

$$V_f(x):=\operatorname{Var}_{[a,x]}(f)\qquad(x\in[a,b]),$$

so $V_f(a)=0$. This is defined on every subinterval by
[[lem-variation-additive-on-subintervals]] and the singleton convention. The
**positive variation** and **negative variation** of $f$ are

$$P_f(x):=\frac{V_f(x)+f(x)-f(a)}2,\qquad N_f(x):=\frac{V_f(x)-f(x)+f(a)}2.$$

The names refer to upward and downward accumulated variation; their monotonicity
and the resulting decomposition are proved separately.

