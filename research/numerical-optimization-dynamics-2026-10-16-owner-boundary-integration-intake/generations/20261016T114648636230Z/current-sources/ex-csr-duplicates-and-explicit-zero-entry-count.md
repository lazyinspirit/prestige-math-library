---
id: ex-csr-duplicates-and-explicit-zero-entry-count
kind: example
title: "Duplicate columns and explicit zeros count as stored entries"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-csr-matrix-with-stored-entry-semantics, alg-csr-matrix-vector-product-with-validation, thm-csr-matvec-returns-the-represented-matrix-product, thm-csr-storage-and-exact-matvec-cost, thm-rat-field, lem-of-zero-mult]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Yousef Saad, Iterative Methods for Sparse Linear Systems, 2nd ed., Chapter 3 §3.4, printed pp. 92–94"
      url: "https://www-users.cse.umn.edu/~saad/IterMethBook_2ndEd.pdf"
dependency_level: 3
---

## Example

Let $m=2$, $n=3$, $s=3$ and use
$r=(0,2,3)$, $c=(1,1,0)$, $v=(2,-2,0)$. The repeated column in row $0$
cancels, and the last stored entry is an explicit zero, so the represented
matrix is the zero $2$ by $3$ matrix even though $s=3$ and
$\operatorname{nnz}(A)=0$. For $x=(4,5,6)$, the algorithm returns $(0,0)$ with
$3$ multiplications, $3$ additions, and $2$ zero initializations.

## Facts & Assumptions

**Given:** The displayed arrays, $x=(4,5,6)$ over $\mathbb Q$, and exact rational arithmetic.

[L1] [[def-csr-matrix-with-stored-entry-semantics]]: repeated column entries are summed, explicit zero values remain stored, and $s$ counts stored entries rather than nonzero matrix entries.

[L2] [[alg-csr-matrix-vector-product-with-validation]]: each stored entry contributes one product-add update to its row accumulator.

[L3] [[thm-csr-matvec-returns-the-represented-matrix-product]]: the result equals the represented matrix-vector product in exact field arithmetic.

[L4] [[thm-csr-storage-and-exact-matvec-cost]]: a valid record with $s$ stored entries uses $s$ multiplications, $s$ additions, $m$ initializations, and $2s+m+1$ CSR input slots.

[L5] [[thm-rat-field]]: the rational numbers with their standard operations form a field.

[L6] [[lem-of-zero-mult]]: in a field, multiplying zero by any element gives zero.

## Verification

1.1 The pointers $0,2,3$ delimit two entries in row $0$ and one in row $1$; all column indices lie in $\{0,1,2\}$. Row $0$ contributes $2+(-2)=0$ to column $1$, and row $1$ contributes $0$ to column $0$. Thus every matrix entry is zero, while all three values are stored. [given, L1, L5, algebra]

2.1 The products in row $0$ are $2(5)$ and $(-2)(5)$, which sum to $0$; the row $1$ product is $0(4)=0$. By [L3], the algorithm returns $(0,0)$. [L2, L3, L5, L6, step 1.1, algebra]

3.1 There are three stored entries and two rows, so [L4] gives $3$ multiplications, $3$ additions, $2$ initializations, and $2(3)+2+1=9$ CSR input slots. This noncanonical record has $s=3\ne\operatorname{nnz}(A)=0$. [given, L1, L4, algebra] ∎
