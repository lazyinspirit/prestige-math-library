---
title: Finite colour-class capacity and prescribed partitions
status: draft
research_item: lem-finite-palette-capacity
dependency_level: 1
---

## Prerequisites

- [def-unrestricted-finite-colouring-map](item-def-unrestricted-finite-colouring-map)
- [math:thm-the-strong-pigeonhole-principle](https://alphabetamath.cc/item/thm-the-strong-pigeonhole-principle)
- [math:def-finite-cardinality](https://alphabetamath.cc/item/def-finite-cardinality)
- [math:cor-division-algorithm-nonzero-divisor](https://alphabetamath.cc/item/cor-division-algorithm-nonzero-divisor)
- [math:thm-subset-of-a-finite-set](https://alphabetamath.cc/item/thm-subset-of-a-finite-set)
- [math:def-injection-surjection-bijection](https://alphabetamath.cc/item/def-injection-surjection-bijection)


## Statement

Let $X$ be a finite set and let $k,n\geq1$ be integers. A $k$-colouring is a function from $X$ to $[k]=\{1,\ldots,k\}$, and its colour class for $i$ is the fibre over $i$.

If $|X|>k(n-1)$, every $k$-colouring of $X$ has a colour class with at least $n$ elements. If $|X|\leq kn$, there is a $k$-colouring of $X$ in which every colour class has at most $n$ elements. If $|X|=k(n-1)+1$, there is a $k$-colouring whose first class has size $n$ and whose other $k-1$ classes each have size $n-1$. Empty classes are permitted.

## Statement references

[def-unrestricted-finite-colouring-map](item-def-unrestricted-finite-colouring-map)

[math:def-finite-cardinality](https://alphabetamath.cc/item/def-finite-cardinality)

## Facts & Assumptions

**Given:** A finite set $X$ and integers $k,n\geq1$.

[F1] A $k$-colouring is a function into $[k]$, and its colour classes are its fibres; colours may be unused ([def-unrestricted-finite-colouring-map](item-def-unrestricted-finite-colouring-map)).

[F2] A finite set of cardinality $m$ admits a bijection to $\{0,\ldots,m-1\}$; finite cardinality is preserved by bijection, and $|[k]|=k$ ([math:def-finite-cardinality](https://alphabetamath.cc/item/def-finite-cardinality)).

[F3] For finite sets $A,B$, a function $f:A\to B$, and a natural number $t$, if $|A|>t|B|$ then some fibre has more than $t$ elements ([math:thm-the-strong-pigeonhole-principle](https://alphabetamath.cc/item/thm-the-strong-pigeonhole-principle)).

[F4] For an integer $j$ and a positive integer $n$, there are unique integers $q,r$ with $j=qn+r$ and $0\leq r<n$ ([math:cor-division-algorithm-nonzero-divisor](https://alphabetamath.cc/item/cor-division-algorithm-nonzero-divisor)).

[F5] A subset of a finite set is finite and has cardinality at most that of the ambient set ([math:thm-subset-of-a-finite-set](https://alphabetamath.cc/item/thm-subset-of-a-finite-set)).

[F6] A map is injective if equal outputs imply equal inputs, surjective if every codomain element is attained, and bijective if both conditions hold; its image is the set of attained values ([math:def-injection-surjection-bijection](https://alphabetamath.cc/item/def-injection-surjection-bijection)).

## Proof

**Given:** $X$ is finite and $k,n$ are positive integers. **Goal:** Prove the three capacity and partition assertions.

1.1 Let $c:X\to[k]$ be a $k$-colouring and suppose $|X|>k(n-1)$. Applying the counting form of the pigeonhole principle to $c$ with $t=n-1$ gives a fibre of size greater than $n-1$, hence at least $n$. [given, F1, F2, F3]

1.2 Put $m=|X|$ and choose a bijection $e:X\to\{0,\ldots,m-1\}$. If $m\leq kn$, divide each $e(x)$ uniquely as $qn+r$ with $0\leq r<n$. Since $0\leq e(x)<kn$, necessarily $0\leq q<k$; define $c(x)=q+1$. This is a $k$-colouring, including the empty function when $m=0$. [given, F1, F2, F4, construct]

1.3 Suppose $m=k(n-1)+1$. In the enumeration given by $e$, assign indices $0,\ldots,n-1$ colour $1$ and, for each $i=2,\ldots,k$, assign the next block of $n-1$ consecutive indices colour $i$. These disjoint blocks cover exactly $n+(k-1)(n-1)=m$ indices, and their sizes are $n,n-1,\ldots,n-1$. Pulling them back along $e$ gives the stated colour classes. For $n=1$ the later blocks are empty; for $k=1$ there are no later blocks. [given, F1, F2, construct]

2.1 For each $i\in[k]$, the map sending $x$ in the $i$th fibre to its remainder $r$ is injective: equal remainders and the common quotient $i-1$ give equal $e(x)$, hence equal $x$. By definition this map is surjective onto its image and hence is a bijection from the fibre to that image. Its image is a subset of $\{0,\ldots,n-1\}$, so the fibre has at most $n$ elements by cardinality transport and the finite-subset bound. [step 1.2, F2, F5, F6]

3.1 Steps 1.1, 2.1 and 1.3 establish the three assertions. [step 1.1, step 2.1, step 1.3] ∎
