---
id: cor-initial-values-determine-a-linear-recurrence-sequence
kind: corollary
title: "$d$ initial values determine a sequence satisfying a fixed order-$d$ recurrence"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-four-spaces-for-a-fixed-linear-recurrence]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "M. Waldschmidt, Linear Recurrence Sequences VI, slides 5-6"
      url: "https://webusers.imj-prg.fr/~michel.waldschmidt/articles/pdf/LinRecSeqVI.pdf"
pipeline_run: null
---

## Statement

Fix a field $K$, an integer $d\ge1$, and coefficients $c_1,\ldots,c_d\in K$ with $c_d\ne0$. For every initial list $(u_0,\ldots,u_{d-1})\in K^d$, there is exactly one sequence $(a_n)_{n\ge0}$ satisfying

$$a_{n+d}+c_1a_{n+d-1}+\cdots+c_da_n=0\qquad(n\ge0)$$

and $a_i=u_i$ for $i<d$.

## Facts & Assumptions

**Given:** A field $K$, a positive order $d$, fixed recurrence coefficients with nonzero trailing coefficient, and an initial list in $K^d$.

[L1] Initial-value extraction is a linear isomorphism from the fixed-recurrence sequence space to $K^d$ ([[lem-four-spaces-for-a-fixed-linear-recurrence]]).

## Proof

**Proof technique:** direct.

1.1 Surjectivity in [L1] gives a recurrence sequence with the prescribed $d$ initial values. [given, L1]

2.1 Injectivity in [L1] says that two recurrence sequences with the same initial list are equal, proving uniqueness. This includes $d=1$, where one initial value determines every later term. [step 1.1, L1] ∎
