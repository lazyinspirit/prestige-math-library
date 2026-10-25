---
id: ex-csr-matvec-operation-count
kind: example
title: "An exact CSR product and its stored-entry count"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-csr-matrix-with-stored-entry-semantics, alg-csr-matrix-vector-product-with-validation, thm-csr-matvec-returns-the-represented-matrix-product, thm-csr-storage-and-exact-matvec-cost, thm-rat-field]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Yousef Saad, Iterative Methods for Sparse Linear Systems, 2nd ed., Chapter 3 §3.5, printed pp. 95–96"
      url: "https://www-users.cse.umn.edu/~saad/IterMethBook_2ndEd.pdf"
dependency_level: 3
---

## Example

Use the CSR record with
$r=(0,2,5,8,10)$,
$c=(0,1,0,1,2,1,2,3,2,3)$, and
$v=(2,-1,-1,2,-1,-1,2,-1,-1,2)$ for the four-row tridiagonal matrix. For
$x=(1,2,3,4)$, the algorithm returns $y=(0,0,0,5)$. It uses $10$ field
multiplications, $10$ field additions, and $4$ zero initializations; the input
CSR arrays occupy $25$ data slots.

## Facts & Assumptions

**Given:** The displayed CSR data, the vector $x=(1,2,3,4)$ over $\mathbb Q$, and exact rational arithmetic.

[L1] [[def-csr-matrix-with-stored-entry-semantics]]: the row pointers delimit the stored entries in each row and each entry contributes its value at its stored column.

[L2] [[alg-csr-matrix-vector-product-with-validation]]: on valid input, the algorithm initializes each output coordinate to zero and adds $v_t x_{c_t}$ for each stored entry $t$ in its row.

[L3] [[thm-csr-matvec-returns-the-represented-matrix-product]]: for valid data, the returned vector is the represented matrix times $x$.

[L4] [[thm-csr-storage-and-exact-matvec-cost]]: a valid record with $s$ stored entries uses $s$ multiplications, $s$ additions, $m$ initializations, and $2s+m+1$ CSR input slots.

[L5] [[thm-rat-field]]: the rational numbers with their standard operations form a field.

## Verification

1.1 The row formulas give $y_0=2(1)-1(2)=0$, $y_1=-1(1)+2(2)-1(3)=0$, $y_2=-1(2)+2(3)-1(4)=0$, and $y_3=-1(3)+2(4)=5$ in $\mathbb Q$. [given, L1, L2, L5, algebra]

2.1 By [L3], these row values are the exact matrix-vector output, so the algorithm returns $(0,0,0,5)$. [L3, step 1.1]

3.1 The CSR has $s=10$ entries and $m=4$ rows. [L4] gives $10$ multiplications, $10$ additions, $4$ initializations, and $2(10)+4+1=25$ input slots. [given, L4, algebra] ∎
