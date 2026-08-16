---
id: thm-matrix-rings-over-division-rings-are-semisimple
kind: theorem
title: "Matrix rings over division rings are semisimple"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-semisimple-ring, def-division-ring, def-ring, def-finite-sum-in-a-commutative-monoid, def-simple-module]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "William Crawley-Boevey, Noncommutative Algebra, Chapter 1 Sections 1.1-1.9"
      url: "https://www.math.uni-bielefeld.de/~wcrawley/1617noncommalg/Noncommutative%20algebra.pdf"
pipeline_run: null
---

## Statement

Let $D$ be a division ring and $n\ge1$. On the set of $n\times n$ arrays over $D$, use entrywise addition and the product
$$
(AB)_{ij}:=\sum_{k=1}^n a_{ik}b_{kj}.
$$
These operations make a ring $M_n(D)$, and this ring is semisimple. More precisely, its left regular module is the direct sum of the simple column ideals $M_n(D)e_{jj}\cong D^n$ for $1\le j\le n$. See [[def-semisimple-ring]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] A unital ring $R$ is semisimple when its left regular module ${}_R R$ is semisimple. This is a left-module definition and uses no Jacobson radical. For the zero ring, the regular module is zero and hence semisimple; the Wedderburn-Artin theorem below is stated for nonzero rings. ([[def-semisimple-ring]]).

[L2] A division ring is a ring $D$ with $1\ne0$ in which every nonzero element has a two-sided multiplicative inverse. ([[def-division-ring]]).

[L3] A ring has an abelian-group addition, an associative multiplication with identity, and both distributive laws; multiplication need not be commutative. ([[def-ring]]).

[L4] Finite sums in a commutative monoid are independent of the chosen enumeration, and the empty sum is $0$. ([[def-finite-sum-in-a-commutative-monoid]]).

[L5] A left $R$-module $M$ is simple if $M\ne0$ and its only submodules are $0$ and $M$. Equivalently, $M$ has no proper nonzero submodule. ([[def-simple-module]]).

## Proof

**Proof technique:** direct.

1.1 Entrywise addition makes the arrays an abelian group. Associativity of multiplication follows by expanding both $(AB)C$ and $A(BC)$ and reassociating the finite double sum; the two distributive laws follow entrywise from those of $D$. The matrix $I=(\delta_{ij}1_D)$ is a two-sided identity. Thus the displayed operations make the unital ring $M_n(D)$ without any commutativity assumption on $D$. [L2, L3, L4, given, algebra]

2.1 Let $e_j=e_{jj}$. Every matrix has the unique decomposition $A=\sum_{j=1}^nAe_j$, and $M_n(D)e_i\cap\sum_{j\ne i}M_n(D)e_j=0$ because the two sides have disjoint possible nonzero columns. Hence $$ {}_{M_n(D)}M_n(D)=\bigoplus_{j=1}^nM_n(D)e_j. $$ [step 1.1, L4, given, algebra]

3.1 Sending a matrix in $M_n(D)e_j$ to its $j$-th column identifies that left ideal with $D^n$ under left matrix multiplication. If $0\ne v\in D^n$, choose $k$ with $v_k\ne0$. For any $w\in D^n$, the matrix whose only possibly nonzero column is column $k$, with entry $a_{ik}=w_i v_k^{-1}$, sends $v$ to $w$. Thus every nonzero submodule of $D^n$ is all of $D^n$, so each column ideal is simple. [L2, L5, step 1.1, step 2.1, given, algebra]

4.1 The decomposition in step 2.1 is therefore a finite direct sum of simple left modules, so [L1] makes $M_n(D)$ semisimple. For $n=1$ it is the single simple column ideal, and the hypothesis $n\ge1$ excludes an empty decomposition. [L1, step 2.1, step 3.1, given] ∎
