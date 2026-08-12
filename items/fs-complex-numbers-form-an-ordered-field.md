---
id: fs-complex-numbers-form-an-ordered-field
kind: false-statement
title: 'FALSE: the complex field admits an order making it an ordered field'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-complex-numbers-form-a-field, lem-of-square-positive]
justified_by: []
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "R. K. Srivastava, Complex Analysis lecture notes"
      url: "https://fac.iitg.ac.in/rksri/MA547%20Complex%20Analysis%20lecture%20notes%202025.pdf"
pipeline_run: frontier-11
---

## Statement refuted

There is a total order on $\mathbb C$ compatible with its field operations.

## Facts & Assumptions

**Given:** The proposed ordered-field structure on $\mathbb C$.

[F1] In an ordered field every nonzero square is positive ([[lem-of-square-positive]]).

[F2] The complex field contains nonzero $i$ with $i^2=-1$ ([[thm-complex-numbers-form-a-field]]).

## Refutation

**Proof technique:** contradiction.

1.1 Suppose such an ordered-field structure existed. Since $i\ne0$, [F1] and [F2] would give $-1=i^2>0$. [assume-contra, F1, F2]

2.1 Also $1=1^2>0$ by [F1], so compatibility with addition gives $0=1+(-1)>0$, impossible in a strict order. [F1, step 1.1, algebra]

3.1 Therefore no order compatible with the complex field operations exists. [step 2.1, discharge-contradiction] ∎
