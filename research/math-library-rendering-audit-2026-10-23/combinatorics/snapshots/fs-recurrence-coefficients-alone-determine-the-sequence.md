---
id: fs-recurrence-coefficients-alone-determine-the-sequence
kind: false-statement
title: "FALSE: The recurrence coefficients alone determine the sequence"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [cor-initial-values-determine-a-linear-recurrence-sequence]
justified_by: []
aliases: []
landmark: false
proof_strategy: counterexample
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "R. P. Stanley, Enumerative Combinatorics, vol. 1, 2nd ed., Sections 4.1-4.2"
      url: "https://math.mit.edu/~rstan/ec/ec1.pdf"
pipeline_run: null
---

## Statement

**False claim.** The coefficients of a constant-coefficient linear recurrence determine its sequence without any initial values.

## Facts & Assumptions

**Given:** The recurrence $a_{n+2}=a_{n+1}+a_n$.

[L1] For a fixed order-$d$ recurrence, every choice of $d$ initial values determines exactly one recurrence sequence ([[cor-initial-values-determine-a-linear-recurrence-sequence]]).

## Refutation

**Proof technique:** two initial-value witnesses.

1.1 With initial pair $(a_0,a_1)=(0,0)$, the recurrence gives the zero sequence. With initial pair $(b_0,b_1)=(0,1)$, it gives $0,1,1,2,3,\ldots$. [given, algebra]

2.1 The two sequences obey exactly the same recurrence coefficients but differ at index one. This is consistent with [L1], which requires the two initial values in addition to the coefficients, and it refutes the claim. [step 1.1, L1] ∎
