---
title: Chern-compatible presentation transports the exact fibers
status: published
research_item: lem-author-9b282fc59773-compatible-presentation-fibers
dependency_level: 16
sources:
  references: []
---

## Prerequisites

- [def-author-9b282fc59773-chern-map-and-fibers](item-def-author-9b282fc59773-chern-map-and-fibers)
- [lem-author-9b282fc59773-fixed-determinant-fibers](item-lem-author-9b282fc59773-fixed-determinant-fibers)
- [math:def-injection-surjection-bijection](https://alphabetamath.cc/item/def-injection-surjection-bijection)
- [math:thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse](https://alphabetamath.cc/item/thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)


## Statement
Let $C_X:V\to T=\operatorname{Pic}(X)\times\mathrm{CH}^2(X)$ be the defined map. Suppose $M,N$ are sets, $v:V\to M$ and $b:N\to T$ are bijections, and $t:M\to N$ is a map satisfying $b\circ t\circ v=C_X$. For $y=(L,a)\in T$, let $n$ be its unique preimage under $b$. The restriction of $v$ is a bijection from $V_{L,a}$ onto $t^{-1}(n)$.

## Statement references
[def-author-9b282fc59773-chern-map-and-fibers](item-def-author-9b282fc59773-chern-map-and-fibers)

[lem-author-9b282fc59773-fixed-determinant-fibers](item-lem-author-9b282fc59773-fixed-determinant-fibers)

[math:def-injection-surjection-bijection](https://alphabetamath.cc/item/def-injection-surjection-bijection)

[math:thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse](https://alphabetamath.cc/item/thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

## Facts & Assumptions
**Given:** The sets and maps in the Statement, including the actual equality $b t v=C_X$ and the Choice and universe assumptions of the Chern-map supplier.

**Goal:** Produce the asserted fiber bijection.

[F1] Under the Choice and universe assumptions of the Chern-map definition, $C_X$ is a well-defined map of sets, and its fiber over $(L,a)$ is $V_{L,a}$. Choice is inherited for the construction of these supplied objects; the fiber argument below uses no further choice. [def-author-9b282fc59773-chern-map-and-fibers](item-def-author-9b282fc59773-chern-map-and-fibers) [lem-author-9b282fc59773-fixed-determinant-fibers](item-lem-author-9b282fc59773-fixed-determinant-fibers) [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F2] A function $f:A\to B$ is injective when $f(x)=f(x\prime)$ implies $x=x\prime$, surjective when every $z\in B$ has a preimage, and bijective when both properties hold. Write $f^{-1}(z)=f^{-1}[\{z\}]=\{x\in A:f(x)=z\}$ for its fiber. The restriction of $f$ to a subset means the same value rule on that subset, with the indicated codomain containing all its values. [math:def-injection-surjection-bijection](https://alphabetamath.cc/item/def-injection-surjection-bijection)

[F3] Every bijection $f:A\to B$ has a unique inverse function $f^{-1}:B\to A$, with $f^{-1}(f(x))=x$ and $f(f^{-1}(z))=z$. Here $f^{-1}:B\to A$ denotes the inverse function, whereas $f^{-1}[\{z\}]$ in [F2] denotes a subset. Existence of this inverse requires no choice principle. [math:thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse](https://alphabetamath.cc/item/thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse)

## Proof
1.1 If $e\in V_{L,a}$, then $b(t(v(e)))=C_X(e)=y=b(n)$. Injectivity of $b$ yields $t(v(e))=n$. Conversely, if $m\in t^{-1}(n)$, its unique preimage $e$ under $v$ satisfies $C_X(e)=b(t(m))=y$, so $e\in V_{L,a}$. [F1, F2, F3, given]

2.1 The restrictions of $v$ and its inverse therefore map the two specified subsets into each other. Their composites remain the respective identity maps because they were inverse on the ambient sets. This proves the bijection of fibers. Mere abstract bijections of the ambient sets without the compatibility equality would not imply this conclusion. [F2, F3, step 1.1, given] ∎
