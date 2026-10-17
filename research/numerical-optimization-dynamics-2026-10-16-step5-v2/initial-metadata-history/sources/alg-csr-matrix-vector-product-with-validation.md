---
id: alg-csr-matrix-vector-product-with-validation
kind: algorithm
title: "Validated compressed sparse row matrix-vector product"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-csr-matrix-with-stored-entry-semantics]
justified_by: []
aliases: []
verification:
  precheck: pending
sources:
  references:
    - title: "Yousef Saad, Iterative Methods for Sparse Linear Systems, 2nd ed., Chapter 3 §3.5, printed pp. 95–96 (CSR matrix-vector product)"
      url: "https://www-users.cse.umn.edu/~saad/IterMethBook_2ndEd.pdf"
    - title: "Richard Barrett et al., Templates for the Solution of Linear Systems: Building Blocks for Iterative Methods, 2nd ed., Chapter 4 §4.3.1–4.3.2, printed pp. 57–63"
      url: "https://www.netlib.org/templates/templates.pdf"
dependency_level: 1
---

## Definition

Fix a field $F$. The **validated CSR matrix-vector product** takes integer
dimension candidates $m,n$, integer arrays $r,c$, a value array $v$ of elements
of $F$, and a vector candidate $x$ of elements of $F$. All input arrays are
finite; write $s=\operatorname{length}(v)$.

1. If $m\notin\mathbb N$, $n\notin\mathbb N$,
   $\operatorname{length}(r)\ne m+1$,
   $\operatorname{length}(c)\ne s$, or
   $\operatorname{length}(x)\ne n$, return the status `invalid-dimension`.
2. For $i=0,\ldots,m$, check that $r_i\in\{0,\ldots,s\}$; return
   `invalid-index` if a check fails. Check $r_0=0$ and $r_m=s$, and for each
   $i=0,\ldots,m-1$ check $r_i\le r_{i+1}$; return `invalid-index` if any
   check fails. For each $t=0,\ldots,s-1$, check $0\le c_t<n$ and return
   `invalid-index` if a check fails.
3. Initialize $y_i=0_F$ for $0\le i<m$. For each row
   $i=0,\ldots,m-1$, and then each stored index
   $t=r_i,\ldots,r_{i+1}-1$, update
   $$y_i\gets y_i+v_t x_{c_t}.$$
4. Return the status `ok` together with $y\in F^m$.

For valid CSR data, each update uses exact field arithmetic. This procedure
makes no floating-point rounding, backward-stability, convergence, runtime, or
memory-bandwidth claim.
