---
id: lem-completed-fourfold-graded-cohomology-ring-laws-and-naturality
kind: lemma
title: "The completed fourfold-graded cohomology ring is natural and satisfies the ring laws"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
aliases: []
dependency_level: 1
deps:
  - def-completed-fourfold-graded-cohomology-ring
  - def-singular-cohomology-ring
  - prop-cup-product-is-natural-unital-and-associative
  - thm-singular-cohomology-is-graded-commutative
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "John Milnor and James Stasheff, Characteristic Classes (re-typeset scan; original pagination)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf"
      locator: "Chapter 19, original pp. 219-222: ordinary rational cohomology operations underlying the multiplicative-sequence construction"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

For every space $B$, the operations of
[[def-completed-fourfold-graded-cohomology-ring]] make
$\widehat H^{4*}(B;\mathbb Q)$ a commutative unital ring. For every continuous
map $f:B\to C$, componentwise pullback is a unital ring homomorphism
$f^*:\widehat H^{4*}(C;\mathbb Q)\to\widehat H^{4*}(B;\mathbb Q)$. The assertion
is valid for arbitrary, possibly infinite-dimensional spaces.

## Facts & Assumptions

**Given:** Spaces $B$ and $C$, a continuous map $f:B\to C$, and elements $a=(a_j)$, $b=(b_j)$, $c=(c_j)$ of $\widehat H^{4*}(C;\mathbb Q)$.

[F1] The completed group is $\widehat H^{4*}(B;\mathbb Q)=\prod_{j\ge0}H^{4j}(B;\mathbb Q)$ with componentwise addition, product $(a\cdot b)_n=\sum_{i+j=n}a_i\smile b_j$, and unit $(1,0,0,\dots)$; for fixed $n$ the sum has $n+1$ terms ([[def-completed-fourfold-graded-cohomology-ring]]).

[F2] The singular cohomology ring has multiplication induced by the cochain cup product, with unit the class of the constant cochain $1$, and its multiplication is associative and distributive over addition ([[def-singular-cohomology-ring]]).

[F3] Cup product is natural and unital: $f^*(u\smile v)=f^*u\smile f^*v$ and $f^*1=1$ ([[prop-cup-product-is-natural-unital-and-associative]]).

[F4] Cup product is graded commutative: $u\smile v=(-1)^{pq}v\smile u$ for $u\in H^p$, $v\in H^q$ ([[thm-singular-cohomology-is-graded-commutative]]).

## Proof

**Proof technique:** direct; compare finite sums in each degree.

1.1 Addition and multiplication are well defined: both are given by finite operations in each degree $4n$, since $a_i\smile b_{n-i}\in H^{4n}(B;\mathbb Q)$ for $0\le i\le n$ and these are the only contributing pairs, so no infinite sum occurs. Addition is associative and commutative and has the zero sequence as neutral element because these hold in each group $H^{4n}(B;\mathbb Q)$. [given, F1, F2]

1.2 Associativity: for every $n$, $((a\cdot b)\cdot c)_n=\sum_{i+j+k=n}(a_i\smile b_j)\smile c_k$ and $(a\cdot(b\cdot c))_n=\sum_{i+j+k=n}a_i\smile(b_j\smile c_k)$, two finite sums over the same triples that agree termwise by associativity of the cup product. [given, F1, F2]

1.3 Unit: $(\mathbf 1\cdot a)_n=1\smile a_n=a_n$ and $(a\cdot\mathbf 1)_n=a_n\smile1=a_n$ for every $n$, since $1\in H^0(B;\mathbb Q)$ is the unit of the graded cohomology ring. [given, F1, F2]

1.4 Distributivity: $(a\cdot(b+c))_n=\sum_{i+j=n}a_i\smile(b_j+c_j)=\sum_{i+j=n}a_i\smile b_j+\sum_{i+j=n}a_i\smile c_j$ by bilinearity of the cup product and additivity of finite sums. [given, F1, F2]

2.1 Commutativity: $(a\cdot b)_n=\sum_{i+j=n}a_i\smile b_j=\sum_{i+j=n}(-1)^{16ij}b_j\smile a_i=(b\cdot a)_n$, because $4i\cdot4j=16ij$ is even and so every sign is $+1$. [step 1.1, F4, algebra]

2.2 Naturality: for each $n$, $f^*((a\cdot b)_n)=\sum_{i+j=n}f^*(a_i\smile b_j)=\sum_{i+j=n}f^*a_i\smile f^*b_j=(f^*a\cdot f^*b)_n$, and $f^*\mathbf 1=\mathbf 1$ componentwise; hence $f^*$ is a unital ring homomorphism. [step 1.1, F1, F3]

3.1 Steps 1.1-1.4 and 2.1 give the commutative unital ring laws, and step 2.2 gives naturality, in every degree and hence componentwise; nothing was assumed about the dimension or CW type of $B$, and the statements include the empty space and the zero ring, where all groups vanish and the same finite computations apply with zero elements. Only the prescribed formulas are used, so no choice principle is invoked. [step 1.2, step 1.3, step 1.4, step 2.1, step 2.2, given] ∎
