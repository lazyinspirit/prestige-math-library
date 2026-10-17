---
id: def-csr-matrix-with-stored-entry-semantics
kind: definition
title: "Compressed sparse row matrices with stored-entry semantics"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-field, def-matrix-space, def-finite-sum-in-a-commutative-monoid]
justified_by: []
aliases: []
verification:
  precheck: n/a
sources:
  references:
    - title: "Yousef Saad, Iterative Methods for Sparse Linear Systems, 2nd ed., Chapter 3 §3.4, printed pp. 92–94 (CSR storage)"
      url: "https://www-users.cse.umn.edu/~saad/IterMethBook_2ndEd.pdf"
    - title: "Richard Barrett et al., Templates for the Solution of Linear Systems: Building Blocks for Iterative Methods, 2nd ed., Chapter 4 §4.3.1–4.3.2, printed pp. 57–63"
      url: "https://www.netlib.org/templates/templates.pdf"
dependency_level: 0
---

## Definition

Let $F$ be a field, and let $m,n,s\in\mathbb N$, where $\mathbb N$ includes
$0$. A **compressed sparse row (CSR) record** for an $m$ by $n$ matrix over
$F$ consists of integer arrays $r=(r_0,\ldots,r_m)$ and
$c=(c_0,\ldots,c_{s-1})$, and a value array $v=(v_0,\ldots,v_{s-1})\in F^s$,
satisfying

$$r_0=0,\qquad 0=r_0\le r_1\le\cdots\le r_m=s,\qquad 0\le c_t<n\quad(0\le t<s).$$

For each row $i<m$, its **stored entries** are the indices
$t$ with $r_i\le t<r_{i+1}$. The row is empty exactly when
$r_i=r_{i+1}$. Repeated column indices within one row and stored values
$v_t=0_F$ are permitted; each such entry remains a separate stored entry.

The represented matrix $A\in M_{m\times n}(F)$ is defined entrywise by

$$A_{ij}:=\sum_{r_i\le t<r_{i+1}}\mathbf 1_{c_t=j}v_t\qquad(0\le i<m,\ 0\le j<n),$$

where $\mathbf 1_{c_t=j}$ is $1_F$ when $c_t=j$ and $0_F$ otherwise, and an
empty sum is $0_F$. Repeated entries in column $j$ are therefore added. The
number $s$ is the **stored-entry count**; it is not in general the number of
nonzero entries of $A$.

A CSR record is **canonical** when no row repeats a column and no stored value
is zero. In that case every nonzero matrix entry is stored exactly once and
$s=\operatorname{nnz}(A)$, where $\operatorname{nnz}(A)$ denotes the number of
nonzero entries of $A$. If $m=0$, the endpoint conditions force $s=0$ and the
row-pointer array has its single entry $r_0=0$. If $n=0$, the column-index
condition forces $s=0$ as well.
