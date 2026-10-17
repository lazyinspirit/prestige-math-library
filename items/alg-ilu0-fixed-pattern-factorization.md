---
id: alg-ilu0-fixed-pattern-factorization
kind: algorithm
title: "Fixed-pattern ILU(0) factorization and application"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
provenance:
  statement: ai-altered
  proof: not-applicable
deps:
  - def-field
  - def-csr-matrix-with-stored-entry-semantics
  - def-forward-and-back-substitution-for-triangular-systems
justified_by: []
aliases: []
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Yousef Saad, Iterative Methods for Sparse Linear Systems, 2nd ed., §§10.3.1–10.3.2, printed pp. 301–310"
      url: "https://www-users.cse.umn.edu/~saad/IterMethBook_2ndEd.pdf"
    - title: "Richard Barrett et al., Templates for the Solution of Linear Systems: Building Blocks for Iterative Methods, 2nd ed., §§3.4.1–3.4.2, printed pp. 38–41"
      url: "https://www.netlib.org/templates/templates.pdf"
dependency_level: 1
---

## Definition

Let $F$ be a field, let $n\ge1$, and let the input be a valid $n\times n$ CSR
record as in [[def-csr-matrix-with-stored-entry-semantics]], representing
$A\in M_n(F)$. Matrix positions in this definition use one-based notation:
$(i,j)$ refers to CSR row $i-1$ and column index $j-1$. This row/column order
is fixed before the procedure begins; vector component label $i$ refers to
coordinate $i-1$. The procedure performs no pivoting or reordering. All field
operations below are exact.

Let $P=\{(i,j):a_{ij}\ne0\}$. Scan each row once to check the canonical and
increasing-index conditions and to record whether its diagonal position occurs.
If the input fails either pattern condition, return `invalid-pattern`. If a row
has no diagonal position, return `missing-diagonal(i)` for the least such $i$.

Copy the value in each input slot to a work array $W$, and regard the unit
diagonal of $L$ as implicit. Process rows $i=1,\ldots,n$ in increasing order.
For each $k<i$ with $(i,k)\in P$, in increasing $k$ order, do the following:

1. If $W_{kk}=0$, return `zero-pivot(k)`.
2. Set $W_{ik}\gets W_{ik}/W_{kk}$; this value is the stored factor $L_{ik}$.
3. Let $R$ be the increasing list of one-based matrix column labels $j>k$
   represented by row $i$'s CSR segment, and let $C$ be the corresponding
   increasing list represented by row $k$'s CSR segment. Set each pointer to
   the first entry of its list, or to
   that list's end marker when it is empty. While both pointers are within
   their lists, compare their current indices. If they are equal, call their
   common value $j$ and update
   $$W_{ij}\gets W_{ij}-W_{ik}W_{kj}$$
   and advance both pointers once. If the current index in $R$ is smaller,
   advance only its pointer once; if the current index in $C$ is smaller,
   advance only its pointer once, making no arithmetic update in either
   unequal-index branch. Stop when either pointer passes the end of its list.
   Do not skip a matching slot when a current work value is zero.

After all such $k$ have been processed in row $i$, if $W_{ii}=0$, return
`zero-pivot(i)`. Otherwise the upper row entries $U_{ij}$ are the current
$W_{ij}$ for $(i,j)\in P$ and $j\ge i$. Continue to the next row.

If every row completes, return `ok` with the unit-lower factor $L$ (stored
strict-lower entries $L_{ik}=W_{ik}$ for $(i,k)\in P$) and the upper factor
$U$ (stored entries $U_{ij}=W_{ij}$ for $(i,j)\in P$, $j\ge i$). Both factors
use only positions in $P$; the diagonal of $L$ is implicit, and all other
unstored off-diagonal entries are zero. The numeric values remain stored at
their structural slots if an update makes a value zero.

For a successful factor pair and $r\in F^n$, apply the preconditioner as
follows. For $i=1,\ldots,n$ in order, initialize $y_i:=r_i$ and, for each
$k<i$ with $(i,k)\in P$ in increasing order, update
$y_i:=y_i-L_{ik}y_k$. Then for $i=n,n-1,\ldots,1$, initialize $x_i:=y_i$;
for each $k>i$ with $(i,k)\in P$ in decreasing order, update
$x_i:=x_i-U_{ik}x_k$; finally set $x_i:=x_i/U_{ii}$. Visit every such stored
factor slot exactly once, including slots whose current factor value is zero.
These are the forward and backward substitution recurrences, with their sums
traversed only over stored strict-triangular slots. The pivot checks ensure
every denominator in this application is nonzero. This procedure defines setup
and application only; it asserts no factorization identity $A=LU$, Krylov
convergence, conditioning improvement, or accuracy guarantee.
