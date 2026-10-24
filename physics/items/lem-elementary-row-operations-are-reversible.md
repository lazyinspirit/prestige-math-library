---
id: lem-elementary-row-operations-are-reversible
kind: lemma
title: "Every elementary row operation has an elementary inverse, so row equivalence is an equivalence relation"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-elementary-row-operations-and-row-equivalence]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "J. Hefferon, Linear Algebra, 4th ed., Ch. One, §III.1"
      url: "https://jheffero.w3.uvm.edu/linearalgebra/book.pdf"
pipeline_run: null
---

## Statement

Every elementary row operation on a finite matrix over a field has an elementary inverse. Consequently row equivalence is reflexive, symmetric and transitive.

## Facts & Assumptions

**Given:** A field $F$ and finite matrices of one fixed shape over $F$.

[L1] An elementary row operation is a row swap, a scaling of one row by a nonzero field element, or addition of a scalar multiple of one row to another ([[def-elementary-row-operations-and-row-equivalence]]).

## Proof

**Proof technique:** direct.

1.1 A swap is its own inverse; the inverse of $R_p\leftarrow cR_p$ is $R_p\leftarrow c^{-1}R_p$ because $c\ne0$ in a field; and the inverse of $R_p\leftarrow R_p+cR_q$ is $R_p\leftarrow R_p-cR_q$. [L1, algebra]

2.1 The empty operation sequence proves reflexivity, reversing a sequence and replacing every operation by its inverse proves symmetry, and concatenating two finite sequences proves transitivity. These arguments also cover empty matrices and the empty reduction. [step 1.1] ∎

