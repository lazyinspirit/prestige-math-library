---
id: thm-ilu0-factor-pattern-and-work-counts
kind: theorem
title: "ILU(0) factor slots, setup work, and application work"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
  - alg-ilu0-fixed-pattern-factorization
  - def-field
  - def-csr-matrix-with-stored-entry-semantics
  - def-forward-and-back-substitution-for-triangular-systems
  - thm-forward-and-back-substitution-are-correct-unique-and-quadratic-cost
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pending
sources:
  references:
    - title: "Yousef Saad, Iterative Methods for Sparse Linear Systems, 2nd ed., §§10.4.1–10.5.1, printed pp. 301–310"
      url: "https://www-users.cse.umn.edu/~saad/IterMethBook_2ndEd.pdf"
    - title: "Richard Barrett et al., Templates for the Solution of Linear Systems: Building Blocks for Iterative Methods, 2nd ed., §§3.6.1–3.6.2, printed pp. 38–41"
      url: "https://www.netlib.org/templates/templates.pdf"
dependency_level: 2
---

## Statement

Let $F$ be a field, $n\ge1$, and $A\in M_n(F)$ have a valid canonical CSR
record with strictly increasing column indices in each row. Let
$P=\{(i,j):a_{ij}\ne0\}$ and $s=\operatorname{nnz}(A)$. Run
[[alg-ilu0-fixed-pattern-factorization]]. The procedure terminates with a
`missing-diagonal` or `zero-pivot` status, or returns `ok`.

On an `ok` return, define
$$P_L=\{(i,k)\in P:i>k\},\qquad P_U=\{(k,j)\in P:k\le j\},$$
and put $\ell=|P_L|$, $q=|P_U|$, and $u=q-n$. The stored strict-lower
slots of $L$ are exactly $P_L$, and the stored slots of $U$ are exactly $P_U$;
the unit diagonal of $L$ is implicit. Thus the factors use exactly
$\ell+q=s$ numeric slots. Here a factor's stored-slot count retains a slot
even if an update makes its value zero.

For each $(i,k)\in P_L$, let
$$R_{ik}=\{j>k:(i,j)\in P\},\qquad C_k=\{j>k:(k,j)\in P\},$$
and set $I=\sum_{(i,k)\in P_L}|R_{ik}\cap C_k|$ and
$J=\sum_{(i,k)\in P_L}(|R_{ik}|+|C_k|)$. On a successful setup, the
factorization performs exactly $\ell$ divisions, $I$ multiplications, and
$I$ subtractions. The two-pointer merges perform at most $J$ column-index
comparisons, in addition to one validation visit for each of the $n$ row
intervals and the $s$ stored entries.

Applying a successful factor pair to one vector by the specified two
triangular solves performs exactly $\ell+u=s-n$ multiplications, $s-n$
subtractions, and $n$ divisions, and returns the unique vector produced by
forward and backward substitution. These counts concern setup and one
application separately. They assert no convergence, conditioning improvement,
or accuracy guarantee. The stored-pattern conclusion is about $L$ and $U$;
it does not assert that the product $LU$ has support contained in $P$.

## Facts & Assumptions

**Given:** A field $F$, a canonical sorted CSR record for $A\in M_n(F)$ with
$n\ge1$, and a successful run of the fixed-pattern ILU(0) algorithm.

[A1] [[def-field]]: every nonzero field element has a multiplicative inverse, so division by a checked nonzero pivot is defined.

[F1] [[alg-ilu0-fixed-pattern-factorization]]: each multiplier update is made only at input-pattern positions, and the $U$ and $L$ values are stored at the stated upper and strict-lower positions.

[F2] [[def-csr-matrix-with-stored-entry-semantics]]: a canonical CSR record has no repeated column and no stored zero, so its stored-entry count is $s=\operatorname{nnz}(A)$.

[F3] [[def-forward-and-back-substitution-for-triangular-systems]]: for lower-triangular $L$ with nonzero diagonal, forward substitution uses $x_i=\ell_{ii}^{-1}(b_i-\sum_{j<i}\ell_{ij}x_j)$.

[F4] [[def-forward-and-back-substitution-for-triangular-systems]]: for upper-triangular $U$ with nonzero diagonal, backward substitution uses $x_i=u_{ii}^{-1}(b_i-\sum_{j>i}u_{ij}x_j)$.

[F5] [[thm-forward-and-back-substitution-are-correct-unique-and-quadratic-cost]]: when $L$ is lower triangular with nonzero diagonal, forward substitution produces the unique solution of $Lx=b$.

[F6] [[thm-forward-and-back-substitution-are-correct-unique-and-quadratic-cost]]: when $U$ is upper triangular with nonzero diagonal, backward substitution produces the unique solution of $Ux=b$.

## Proof

1.1 The input has finite arrays and $n$ is finite. Validation visits the $n$ row intervals and $s$ stored entries once; the factorization loops over at most $n$ rows, finitely many pattern entries, and finite row-list merges. Every division is preceded by a nonzero-pivot check, and [A1] makes each such division defined. Thus the procedure either returns one of its specified failure statuses or completes with `ok`. [given, A1, F1, F2, algebra]

2.1 If the procedure returns `ok`, each processed pivot is nonzero by its check, so the returned $U$ has nonzero diagonal. The definition sets $L$ to be unit lower triangular and retains only upper entries in $U$. [F1, step 1.1]

3.1 Initially the work values occupy exactly the input slots $P$. Each multiplier is written only at a strict-lower slot in $P_L$, and each update is performed only when both matching row positions are in $P$. No update allocates a new position. Induction over the finite row and pivot loops therefore gives stored patterns $P_L$ and $P_U$ for $L$ and $U$, respectively. [F1, F2, step 2.1, induction]

3.2 The forward recurrence in [F3] applied to unit-lower $L$ and the backward recurrence in [F4] applied to $U$ are well-defined because $L_{ii}=1$ and every $U_{ii}\ne0$. By [F5] and [F6] they produce the unique successive triangular-solve outputs specified by the algorithm. [F1, F3, F4, F5, F6, step 2.1]

4.1 The sets $P_L$ and $P_U$ are disjoint and partition $P$: every $(i,j)\in P$ has exactly one of $i>j$ or $i\le j$. Hence $\ell+q=|P|=s$. Since the unit diagonal of $L$ is implicit, this is exactly the factor numeric-slot count. [F2, step 3.1, algebra]

4.2 On success, the outer lower-pattern loop processes every one of the $\ell$ positions once and performs one division there. For a fixed $(i,k)\in P_L$, the update loop visits exactly the indices in $R_{ik}\cap C_k$; each visit performs one multiplication and one subtraction. Summing these counts gives exactly $\ell$ divisions and $I$ multiplications and subtractions. [F1, step 3.1, algebra]

5.1 Both lists in each intersection are strictly increasing. A two-pointer merge advances at least one pointer at every comparison and stops when one list ends, so it makes at most the sum of the two list lengths, $|R_{ik}|+|C_k|$, comparisons. Summing over $P_L$ gives the bound $J$; validation visits each row interval and stored entry once. [F1, F2, step 4.2, algebra]

6.1 The forward recurrence in [F3] performs one multiplication and subtraction for each stored strict-lower slot, hence $\ell$ of each and no diagonal divisions. The backward recurrence in [F4] performs one multiplication and subtraction for each stored strict-upper slot, hence $u$ of each, and one division for each of its $n$ rows. Since $\ell+u=\ell+q-n=s-n$, the stated application counts follow. [F1, F3, F4, step 4.1, algebra] ∎
