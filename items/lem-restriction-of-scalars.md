---
id: lem-restriction-of-scalars
kind: lemma
title: "A field is a vector space over itself, and over any subfield $K \\subseteq F$ every $F$-vector space is a $K$-vector space by restricting the scalars"
status: draft
origin: session
deps: [def-vector-space, def-subfield, def-field]
justified_by: []
aliases: [lem-field-is-a-vector-space-over-itself]
landmark: false
short: "restriction of scalars"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Restriction of scalars (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Restriction_of_scalars"
    - title: "Vector space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Vector_space"
pipeline_run: null
---

## Statement

Let $F$ be a field ([[def-field]]).

1. $F$ is a vector space over itself ([[def-vector-space]]): take the set to be
   $F$, the vector addition to be the field addition, the zero vector to be
   $0_F$, and the scalar multiplication $F \times F \to F$ to be the field
   multiplication.
2. Let $K \subseteq F$ be a subfield ([[def-subfield]]) and let $V$ be a vector
   space over $F$. Then $V$, with the same addition and the same zero vector and
   with the scalar multiplication restricted to $K \times V$, is a vector space
   over $K$. This is called **restricting the scalars** from $F$ to $K$.
3. In particular $F$ is a vector space over every subfield $K \subseteq F$, with
   the field multiplication restricted to $K \times F$ as scalar multiplication.

## Facts & Assumptions

**Given:** A field $F$, a subfield $K \subseteq F$, and a vector space $V$ over $F$.

[L1] The vector space axioms (V1)–(V5) ([[def-vector-space]]): $(V,+,0_V)$ is an abelian group; $\lambda(u+v) = \lambda u + \lambda v$; $(\lambda+\mu)v = \lambda v + \mu v$; $(\lambda\mu)v = \lambda(\mu v)$; $1_F v = v$.

[L2] The field axioms of [[def-field]], read as they are read throughout this library: $(F,+,0_F)$ is an abelian group; multiplication on $F$ is associative and commutative with two-sided identity $1_F$; multiplication distributes over addition, so that $x(y+z) = xy+xz$ and $(y+z)x = yx+zx$; and every $x \ne 0_F$ has a multiplicative inverse.

[L3] A subfield $K$ of $F$ is a subring of $F$ closed under inverses of its nonzero elements; equivalently, a subset containing $1_F$ with $a - b \in K$ and $ab \in K$ for all $a, b \in K$ and $x^{-1} \in K$ for every nonzero $x \in K$. With the restricted operations $K$ is itself a field, its addition and multiplication being the restrictions of those of $F$, and $0_K = 0_F$, $1_K = 1_F$, with the negatives and the inverses of $K$ those of $F$ ([[def-subfield]]).

## Proof

**Proof technique:** direct.

1.1 Put $V_F := F$ as a set, let the vector addition be the field addition with zero vector $0_F$, and let the scalar multiplication be the field multiplication, which is a map $F \times F \to F$ as required. [L2]

1.2 Axiom (V1) holds for $V_F$: axiom (A) of a field says exactly that $(F,+,0_F)$ is an abelian group. [L2]

1.3 Axiom (V2) holds for $V_F$: $\lambda(u+v) = \lambda u + \lambda v$ is distributivity of multiplication over addition. [L2]

1.4 Axiom (V3) holds for $V_F$: $(\lambda+\mu)v = \lambda v + \mu v$ is distributivity on the other side. [L2]

1.5 Axiom (V4) holds for $V_F$: $(\lambda\mu)v = \lambda(\mu v)$ is associativity of the field multiplication. [L2]

1.6 Axiom (V5) holds for $V_F$: $1_F v = v$ is the multiplicative identity law. [L2]

1.7 For claim 2: since $K \subseteq F$, restricting the scalar multiplication of $V$ to the subset $K \times V$ of $F \times V$ yields a map $K \times V \to V$, which is the required datum. [L3]

1.8 The set $V$, its addition and its zero vector are unchanged by the restriction, so $(V,+,0_V)$ is still an abelian group; this is axiom (V1) for the $K$-structure. [L1]

1.9 For $\lambda, \mu \in K$ the sum $\lambda + \mu$ and the product $\lambda\mu$ formed in $K$ are the sum and the product formed in $F$, and the multiplicative identity of $K$ is $1_F$. [L3]

2.1 Steps 1.1 to 1.6 verify (V1)–(V5), so $F$ with the operations of step 1.1 is a vector space over itself: claim 1. [step 1.1, step 1.2, step 1.3, step 1.4, step 1.5, step 1.6, L1]

2.2 Let $\lambda, \mu \in K$ and $u, v \in V$. Then $\lambda(u+v) = \lambda u + \lambda v$ and $(\lambda\mu)v = \lambda(\mu v)$ are the instances of (V2) and (V4) for these elements of $F$, the product $\lambda\mu$ being the same whether formed in $K$ or in $F$; $(\lambda+\mu)v = \lambda v + \mu v$ is the instance of (V3), the sum $\lambda+\mu$ being likewise the same; and the identity of $K$ is $1_F$, so $1_K v = 1_F v = v$ is the instance of (V5). [step 1.7, step 1.9, L1, L3]

3.1 With step 1.8, the restricted structure satisfies (V1)–(V5) over $K$, so $V$ is a vector space over $K$: claim 2. [step 1.8, step 2.2, L1]

4.1 Claim 3 follows by applying claim 2 to the $F$-vector space of claim 1: $F$ is a vector space over $K$, its scalar multiplication being the field multiplication restricted to $K \times F$. [step 2.1, step 3.1] ∎

## Remarks

- **On the reading of the field axioms in [L2].** [[def-field]] states axiom (M)
  for $F \setminus \{0_F\}$ and states distributivity on one side only. The
  reading used above, that multiplication is associative and commutative on all of
  $F$ and distributes on both sides, is the standard one and is the reading
  already in force elsewhere in this library, for instance in
  [[lem-of-zero-mult]] and [[lem-of-no-zero-divisors]]. It is used in steps 1.4
  and 1.5, where axioms (V3) and (V4) are read off for arbitrary scalars including
  $0_F$, and nowhere else. Nothing published is changed by recording it here.

- **Restricting the scalars changes the structure, not the set.** The vectors, the
  addition and the zero are untouched; only the collection of scalars allowed to
  act shrinks. Everything that can be said about $V$ as a $K$-vector space is
  therefore a statement about the same object with fewer operations available, and
  every $F$-linear subspace of $V$ is in particular a $K$-linear subspace
  ([[def-linear-subspace]]). The converse fails, and that is the point of the
  construction.

- **The field is part of the data.** Because of this lemma, a bare phrase like
  "the vector space $V$" is incomplete: $\mathbb{R}$ is a vector space over
  $\mathbb{R}$ and also over the embedded copy of $\mathbb{Q}$ inside it, and
  these are different structures on one set. Every statement on this page names
  its field.

- **Nothing here is about dimension.** How much smaller $K$ is than $F$, and what
  that does to $V$, is a question about bases and dimension, which are developed
  on a later page. This lemma asserts only that the restricted structure satisfies
  the five axioms.
