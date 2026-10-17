---
id: thm-csr-storage-and-exact-matvec-cost
kind: theorem
title: "CSR storage and exact matrix-vector operation counts"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-csr-matrix-with-stored-entry-semantics, alg-csr-matrix-vector-product-with-validation]
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
    - title: "Yousef Saad, Iterative Methods for Sparse Linear Systems, 2nd ed., Chapter 3 §§3.4–3.5, printed pp. 92–96"
      url: "https://www-users.cse.umn.edu/~saad/IterMethBook_2ndEd.pdf"
    - title: "Richard Barrett et al., Templates for the Solution of Linear Systems: Building Blocks for Iterative Methods, 2nd ed., Chapter 4 §4.3.1–4.3.2, printed pp. 57–63"
      url: "https://www.netlib.org/templates/templates.pdf"
dependency_level: 2
---

## Statement

Let $F$ be a field, let $m,n\in\mathbb N$, and let a valid CSR record have
$s$ stored entries. Its input arrays use exactly $s$ field-value slots, $s$
integer column-index slots, and $m+1$ integer row-pointer slots, for a total of
$2s+m+1$ data slots. On valid input, the algorithm
[[alg-csr-matrix-vector-product-with-validation]] performs exactly $s$ field
multiplications, $s$ field additions, and $m$ zero initializations. Its index
validation and loop-control work is $O(m+s+1)$. Counting the CSR arrays and
returned output but excluding the supplied vector $x$ and constant-size
workspace, it uses exactly $2s+2m+1$ data slots, hence $O(m+s+1)$ slots; for
$m\ge1$ this is $O(m+s)$. Here $O(g)$ means bounded by $Cg$ for a constant $C$ independent of
the dimensions and input values.

For a square record of order $m\ge1$ with at least one stored entry in each
row, $s\ge m$, so the work and storage are $O(s)$. For a canonical record as defined in
[[def-csr-matrix-with-stored-entry-semantics]], $s=\operatorname{nnz}(A)$;
without that convention, the cost is in terms of stored entries, not
$\operatorname{nnz}(A)$. These are arithmetic, index, and storage counts, not
runtime, memory-bandwidth, convergence, or factorization-cost bounds.

## Facts & Assumptions

**Given:** A valid CSR record with dimensions $m,n\in\mathbb N$ and $s$ stored entries.

[L1] [[def-csr-matrix-with-stored-entry-semantics]]: the arrays have lengths $m+1$, $s$, and $s$; the row pointers satisfy $r_0=0\le\cdots\le r_m=s$.

[L2] [[def-csr-matrix-with-stored-entry-semantics]]: a record is canonical when no row repeats a column and no stored value is zero; then $s=\operatorname{nnz}(A)$.

[L3] [[alg-csr-matrix-vector-product-with-validation]]: on a valid record the algorithm initializes $m$ outputs and visits each row interval $r_i,\ldots,r_{i+1}-1$, performing one multiply-add per visited index.

## Proof

1.1 The value, column-index, and row-pointer arrays have lengths $s$, $s$, and $m+1$, respectively, so their input representation contains exactly $2s+m+1$ data slots. [L1, algebra]

1.2 The number of visits in row $i$ is $r_{i+1}-r_i$. Summing these lengths telescopes to $r_m-r_0=s$; monotonicity makes the intervals disjoint and their endpoints cover every stored index once. Thus the accumulation loop executes exactly $s$ multiply-add updates, and the initialization loop executes exactly $m$ times. The two validation scans examine at most $m+1$ pointers and $s$ column indices, so validation and loop control take $O(m+s+1)$ work. [L1, L3, algebra]

1.3 The returned vector occupies $m$ additional field slots. Counting it with the CSR arrays, and excluding the supplied $x$ and fixed workspace, gives exactly $2s+2m+1$ data slots, hence $O(m+s+1)$. If $m\ge1$, then $m+s\ge1$ and the additive constant is absorbed into a fixed multiple of $m+s$. [L1, L3, algebra]

2.1 For a square record of order $m\ge1$ with every row storing at least one entry, summing its $m$ row lengths gives $s\ge m$; substituting into the preceding bounds yields $O(s)$. By [L2], a canonical record has $s=\operatorname{nnz}(A)$; no such equality is asserted when duplicate columns or explicit zeros are stored. [L1, L2, step 1.2, step 1.3, algebra] ∎
