---
id: def-qa-binary-vector-space
kind: definition
title: "The coordinate vector space over F2"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 2
deps:
  - def-qa-binary-field-f2
  - thm-qa-binary-field-f2-is-a-field
  - def-vector-space
  - def-linear-independence
  - def-linear-combination-and-span
  - lem-span-is-the-set-of-linear-combinations
  - def-linear-basis
  - def-dimension
justified_by: []
proof_strategy: direct
axiom_use: "No Choice is used; the coordinate operations and standard basis are explicit finite data."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes (arXiv:1907.09415v6, 2026)"
      url: "https://arxiv.org/pdf/1907.09415"
      locator: "Appendix A.1, PDF p.205: the binary vector space with entrywise addition modulo two and notation F_2={0,1}."
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (17 April 2025)"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
      locator: "Chapter 6, PDF pp.33–37: binary strings as elements of F_2^n in Simon's problem."
---
## Definition

For $n\ge0$, let $\mathbb F_2^n=\{0,1\}^n$. Give it coordinatewise addition $(x+y)_i=x_i+y_i$ and scalar multiplication $(c x)_i=cx_i$ using the operations of [[def-qa-binary-field-f2]]. Its zero vector is $0^n$. Then $\mathbb F_2^n$ is a vector space over $\mathbb F_2$, with standard basis $e_0,\ldots,e_{n-1}$ and dimension $n$. For $n=0$, the carrier consists of the empty tuple, and the basis is empty.

## Facts & Assumptions

**Given:** An integer $n\ge0$ and the field $\mathbb F_2$.

[F1] [[def-qa-binary-field-f2]] and [[thm-qa-binary-field-f2-is-a-field]]: the carrier is $\{0,1\}$ with its quotient addition and multiplication, and these operations satisfy the field axioms.

[F2] [[def-vector-space]]: a vector space has an abelian-group addition, zero vector, and scalar multiplication satisfying both distributive laws, associativity of scalar multiplication, and the identity-scalar law.

[F3] [[def-linear-independence]]: a finite list is independent when a zero linear combination forces every coefficient to be zero.

[F4] [[def-linear-combination-and-span]] and [[lem-span-is-the-set-of-linear-combinations]]: the span of a list is the set of its finite linear combinations.

[F5] [[def-linear-basis]] and [[def-dimension]]: a basis is an independent spanning set, and dimension is the number of elements in a finite basis.

## Verification

1.1 The coordinate operations are closed because each coordinate operation is an operation in $\mathbb F_2$ by [F1]. Each vector-space axiom in [F2] holds coordinate by coordinate by the corresponding field axiom in [F1]; coordinatewise equality then gives the vector identity. For $n=0$ there is only the empty tuple, and all coordinate identities hold vacuously. [given, F1, F2, algebra]

2.1 For $i<n$, let $e_i$ have coordinate $1$ at $i$ and $0$ elsewhere. Every $x\in\mathbb F_2^n$ equals $\sum_{i<n}x_i e_i$ coordinatewise, so $B=\{e_i:i<n\}$ spans. The vectors $e_i$ are pairwise distinct because their $1$-coordinates differ. To verify that $B$ is independent in the subset sense of [F3], take any finite injective list $b:r\to B$ and coefficients $c_t\in\mathbb F_2$. If $r=0$, the independence implication is vacuous. Otherwise write $b_t=e_{i_t}$; injectivity and distinctness of the $e_i$ make the indices $i_t$ pairwise distinct. The coordinate $i_t$ of $\sum_{u<r}c_u b_u$ is then exactly $c_t$, so a zero sum forces every $c_t=0$. This also covers $n=0$, since then $B=\varnothing$ admits no nonempty list. Thus $B$ is independent, and it is a basis by [F4]–[F5]. Its $n$ distinct vectors give dimension $n$. [given, F1, F3, F4, F5, algebra] ∎
