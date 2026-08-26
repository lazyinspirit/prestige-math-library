---
id: thm-pg-two-q-is-a-finite-projective-plane
kind: theorem
title: "For every prime power $q$, the space $PG(2,q)$ is a projective plane of order $q$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-finite-projective-plane,
       def-order-of-a-finite-projective-plane,
       thm-existence-of-finite-fields,
       lem-cardinality-of-a-finite-dimensional-space-over-a-finite-field]
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "Noam D. Elkies, Math 155 notes: Feb. 3"
      url: "https://people.math.harvard.edu/~elkies/M155.09/feb03"
    - title: "K. Conrad, Finite Fields, Sections 1-2"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/finitefields.pdf"
---

## Statement

Let $q$ be a prime power, choose a field $F$ with $q$ elements, and consider the
incidence structure whose points are the one-dimensional linear subspaces of
$F^3$, whose lines are the two-dimensional linear subspaces of $F^3$, and where
incidence is inclusion. Then this structure is a finite projective plane of
order $q$. It is denoted $PG(2,q)$.

## Facts & Assumptions

**Given:** A prime power $q$.

[L1] There exists a field $F$ with exactly $q$ elements ([[thm-existence-of-finite-fields]]).

[L2] A one-dimensional $F$-vector space has $q$ elements, a two-dimensional one has $q^2$ elements, and $F^3$ has $q^3$ elements ([[lem-cardinality-of-a-finite-dimensional-space-over-a-finite-field]]).

## Proof

**Proof technique:** direct.

1.1 Choose a field $F$ with $q$ elements by [L1], and let points and lines be the one-dimensional and two-dimensional subspaces of $F^3$. [L1, choose]

2.1 If $U$ and $V$ are distinct points, choose nonzero vectors $u\in U$ and $v\in V$. They are linearly independent, so their span is a two-dimensional subspace containing both $U$ and $V$. Any two-dimensional subspace containing $U$ and $V$ contains $u$ and $v$, hence contains their span, so this line is unique. [step 1.1, algebra]

2.2 Let $W_1$ and $W_2$ be distinct lines. Each has $q^2$ elements by [L2]. If $W_1\cap W_2=\{0\}$, then the map $W_1\times W_2\to F^3$, $(x,y)\mapsto x+y$, is injective, so $F^3$ would have at least $q^4$ elements, contradicting [L2]. Thus $W_1\cap W_2$ contains a nonzero vector and therefore at least one point. If it contained two distinct points, then it would contain the two-dimensional span of those points, forcing $W_1=W_2$. So distinct lines meet in exactly one point. [step 1.1, L2, algebra]

2.3 The four one-dimensional subspaces $\langle e_1\rangle$, $\langle e_2\rangle$, $\langle e_3\rangle$, and $\langle e_1+e_2+e_3\rangle$ have no three on one line: the span of any two coordinate axes is the set of vectors with one coordinate $0$, which does not contain $e_1+e_2+e_3$, and the span of $\langle e_i\rangle$ with $\langle e_1+e_2+e_3\rangle$ does not contain either of the other two coordinate axes. [step 1.1, algebra]

2.4 Let $W$ be a line. By [L2], $W$ has $q^2-1$ nonzero vectors. Each point on $W$ has $q-1$ nonzero vectors, and two distinct points meet only in $0$, so the points on $W$ partition the nonzero vectors of $W$ into pieces of size $q-1$. Hence $W$ contains $(q^2-1)/(q-1)=q+1$ points, which is at least $3$ because every prime power satisfies $q\ge2$. [step 1.1, L2, algebra]

3.1 Steps 2.1, 2.2, 2.3, and 2.4 verify the axioms of [[def-finite-projective-plane]], and step 2.4 identifies the common line size as $q+1$. Therefore [[def-order-of-a-finite-projective-plane]] gives order $q$. [step 2.1, step 2.2, step 2.3, step 2.4] ∎
