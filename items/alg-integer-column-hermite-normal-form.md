---
id: alg-integer-column-hermite-normal-form
kind: algorithm
title: Exact Euclidean column-Hermite basis extraction
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
proof_strategy: direct
dependency_level: 0
deps: [def-euclidean-domain, thm-euclidean-algorithm, thm-division-algorithm-in-z, def-int-abs, lem-int-abs-properties]
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory v3.08, Lemma 2.44 and Remark 2.45(b)"
      url: "https://www.jmilne.org/math/CourseNotes/ANTc.pdf"
verification:
  precheck: n/a
---

## Definition

Input a full-row-rank matrix $M\in\mathbb Z^{n\times m}$, with $n\ge1$ and $m\ge n$, whose columns generate a full-rank sublattice of $\mathbb Z^n$. Output its canonical upper-triangular column-Hermite basis as follows.

1. For $i=n,n-1,\ldots,1$, set $q_i=m-n+i$ and work on the first $q_i$ columns. At this stage their entries below row $i$ are zero. Swap columns within this active block to put a nonzero row-$i$ entry in column $q_i$.

2. For each $j<q_i$, let $a=M_{i,q_i}\ne0$ and $b=M_{ij}$. Run the extended Euclidean recurrence on $|a|,|b|$ with coefficient pairs $(1,0),(0,1)$, repeatedly replacing $(r_0,r_1)$ by $(r_1,r_0-q r_1)$ and applying the same update to the coefficient pairs, until the second remainder is zero. Let $g>0$ be the last nonzero remainder and $(s_0,t_0)$ its coefficient pair. Set $s=s_0$ if $a>0$ and $s=-s_0$ if $a<0$; set $t=t_0$ if $b\ge0$ and $t=-t_0$ if $b<0$. Thus $sa+tb=g$, including when $b=0$. Apply to columns $q_i,j$ the matrix
   $$\begin{pmatrix}s&-b/g\\ t&a/g\end{pmatrix}.$$
   This changes the row entries $(a,b)$ to $(g,0)$. After all such $j$ have been processed, make the pivot positive by changing the sign of its column if necessary.

3. After the row stages, the first $m-n$ columns are zero and the last $n$ columns form a nonsingular upper-triangular matrix $H$. For $j=n,n-1,\ldots,2$, and then $i=j-1,j-2,\ldots,1$, divide $h_{ij}=q h_{ii}+r$ with $0\le r<h_{ii}$ and replace column $j$ by column $j-q\,\text{column }i$. Return the last $n$ columns.

The output convention is $h_{ii}>0$ and $0\le h_{ij}<h_{ii}$ for $i<j$; its columns generate the input column lattice.

## Definition references

[Milne, Lemma 2.44 and Remark 2.45(b)](https://www.jmilne.org/math/CourseNotes/ANTc.pdf)

## Facts & Assumptions

**Given:** A full-row-rank integer matrix with $m\ge n\ge1$.

[F1] Integer division by a positive integer has a unique quotient and remainder, and the Euclidean remainder descent terminates at the gcd ([[thm-division-algorithm-in-z]], [[thm-euclidean-algorithm]]).

[F2] A Euclidean domain is a domain equipped with a Euclidean function for which every division has remainder zero or strictly smaller Euclidean value ([[def-euclidean-domain]]).

[F3] Every nonzero integer is a sign in $\{1,-1\}$ times its nonnegative absolute value ([[def-int-abs]], [[lem-int-abs-properties]]).

## Verification



1.1 For an active pair $a\ne0,b$, the extended Euclidean recurrence tracks the same integer linear combinations as its remainders, so it returns $sa+tb=g=\gcd(a,b)>0$. The displayed two-column matrix has determinant $(sa+tb)/g=1$ and sends the row $(a,b)$ to $(g,0)$. [F1, F2, F3, given, algebra]

2.1 Each active column update is unimodular, so it preserves the column lattice; it also preserves zeros in rows below the active row because the two columns being mixed are in the active block. The bottom-up invariant therefore holds at the next row. [given, step 1.1, algebra]

3.1 Every final quotient uses a positive pivot, so its remainder lies in the finite range $0\le r<h_{ii}$ and the corresponding column subtraction preserves the lattice and upper-triangular shape. There are finitely many pivot-column pairs, giving a finite reduction pass. [F1, given, step 2.1] ∎

