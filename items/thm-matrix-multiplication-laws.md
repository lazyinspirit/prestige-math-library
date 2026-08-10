---
id: thm-matrix-multiplication-laws
kind: theorem
title: 'Matrix multiplication is associative, unital, distributive, and compatible with scalar multiplication'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-matrix-product-and-identity-matrix, lem-finite-sum-reindexing-and-fubini,
       def-field]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'S. Axler, Linear Algebra Done Right, 4th ed., §3C'
      url: 'https://linear.axler.net/LADR4e.pdf'
pipeline_run: null
---

## Statement

Matrix multiplication over a field is associative and unital, distributes over
entrywise addition on both sides, and is compatible with scalar multiplication.
Precisely, whenever the displayed products have compatible shapes,

$$A(BC)=(AB)C,\qquad I_mA=A=AI_n,$$

$$(A+A')B=AB+A'B,\qquad A(B+B')=AB+AB',$$

$$0B=0=A0,\qquad (\lambda A)B=\lambda(AB)=A(\lambda B).$$

These identities include every zero-sized shape.

## Facts & Assumptions

**Given:** A field $F$; matrices $A\in M_{m\times n}(F)$, $B\in M_{n\times p}(F)$, and $C\in M_{p\times q}(F)$; conformable matrices $A',B'$; and a scalar $\lambda\in F$.

[L1] Matrix products and identity matrices are defined entrywise by finite row-by-column sums ([[def-matrix-product-and-identity-matrix]]).

[L2] A finite double sum may be evaluated in either order ([[lem-finite-sum-reindexing-and-fubini]]).

## Proof

**Proof technique:** direct.

1.1 For $i<m$ and $\ell<q$, expansion by [L1] gives $((AB)C)_{i\ell}=\sum_{k<p}\sum_{j<n}(a_{ij}b_{jk})c_{k\ell}$ and $(A(BC))_{i\ell}=\sum_{j<n}\sum_{k<p}a_{ij}(b_{jk}c_{k\ell})$. [given, L1]

2.1 Associativity and distributivity in $F$, followed by [L2], identify the two sums in step 1.1, so $(AB)C=A(BC)$. [step 1.1, L1, L2]

3.1 The entry formulas also give $(I_mA)_{ik}=a_{ik}=(AI_n)_{ik}$; splitting sums gives both distributive laws; pulling out $\lambda$ gives scalar compatibility; and a sum of zero summands gives each zero law. Thus all stated identities hold entrywise. [step 2.1, L1]

4.1 If any indexing dimension is zero, every asserted matrix equality either has no entries to compare or reduces to an empty sum, whose value is $0$. Hence the same calculations cover all zero-sized shapes, including $I_0$. [step 3.1, L1, L2] ∎
