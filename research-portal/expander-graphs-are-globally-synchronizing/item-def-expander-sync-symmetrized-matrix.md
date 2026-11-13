---
title: Independent-copy symmetrization matrix
status: published
research_item: def-expander-sync-symmetrized-matrix
dependency_level: 2
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 33, proof of Proposition 6.3
      statement: For an independent copy $A'$ of the adjacency matrix $A$ of $G(n,p)$,
        the matrix $W=A-A'$ is symmetric; its entries above the diagonal are
        independent and identically distributed with probabilities $p(1-p)$ at
        each of $-1$ and $1$ and $p^2+(1-p)^2$ at $0$.
      hypotheses: The article's proposition assumes a sufficiently large integer $n$
        and $p\in(0,1)$; this finite calculation applies to every integer
        $n\ge1$ and $p\in[0,1]$.
      reading_limits: The construction and entry-law passage in the original PDF p. 33
        and its extracted text were inspected for attribution. No other
        assertion in Proposition 6.3 is assessed here. The justification uses
        the declared mathematical suppliers and a local finite-distribution
        argument, not the article as proof.
---

PDF p. 33: ` Proof of Proposition 6.3 `

## Prerequisites

- [def-expander-sync-erdos-renyi](item-def-expander-sync-erdos-renyi)
- [def-expander-sync-graph-notation](item-def-expander-sync-graph-notation)
- [prop-expander-prereq-symmetric-bernoulli-difference-moments](item-prop-expander-prereq-symmetric-bernoulli-difference-moments)
- [math:def-independent-random-elements](https://alphabetamath.cc/item/def-independent-random-elements)
- [math:def-probability-measure](https://alphabetamath.cc/item/def-probability-measure)
- [math:def-measure](https://alphabetamath.cc/item/def-measure)
- [math:def-finite-probability-space-and-event](https://alphabetamath.cc/item/def-finite-probability-space-and-event)



## Definition

Let $n\in\mathbb N$ with $n\ge1$, $p\in[0,1]$, and let $A$ be the adjacency matrix of $G(n,p)$ on the labelled vertices $[n]=\{1,\ldots,n\}$. Let $A'$ be an independent copy of $A$: it has the same matrix distribution as $A$ and is independent of $A$ as a random element. Define the independent-copy symmetrization matrix by $W=A-A'$.

The matrix $W$ is symmetric with zero diagonal. Its entries $W_{x,y}$ for $1\le x<y\le n$ are mutually independent and identically distributed: each takes the values $1$ and $-1$ with probability $p(1-p)$ each, and $0$ with probability $p^2+(1-p)^2$. Mutual independence means that every joint assignment to a finite subfamily has probability equal to the product of its individual probabilities. When there are no entries above the diagonal, this independence assertion is vacuous.

## Definition references

[def-expander-sync-erdos-renyi](item-def-expander-sync-erdos-renyi)

[def-expander-sync-graph-notation](item-def-expander-sync-graph-notation)

[math:def-independent-random-elements](https://alphabetamath.cc/item/def-independent-random-elements)

[prop-expander-prereq-symmetric-bernoulli-difference-moments](item-prop-expander-prereq-symmetric-bernoulli-difference-moments)

## Facts & Assumptions

[F1] In $G(n,p)$ the indicators of the distinct unordered edges are mutually independent and each is $1$ with probability $p$ and $0$ with probability $1-p$. Its adjacency matrix is symmetric with zero diagonal. ([def-expander-sync-erdos-renyi](item-def-expander-sync-erdos-renyi), [def-expander-sync-graph-notation](item-def-expander-sync-graph-notation))

[F2] Independent random elements have joint probabilities that factor for events determined separately by the two elements. ([math:def-independent-random-elements](https://alphabetamath.cc/item/def-independent-random-elements))

[F3] On a finite probability space, differences of mutually independent Bernoulli$(p)$ coordinate pairs are mutually independent across the pairs, and each difference has probabilities $p(1-p)$ at $1$ and $-1$ and $p^2+(1-p)^2$ at $0$. ([prop-expander-prereq-symmetric-bernoulli-difference-moments](item-prop-expander-prereq-symmetric-bernoulli-difference-moments))

[F4] A probability measure is nonnegative, has total mass one, and is countably additive. In particular it is finitely additive on disjoint events, by appending empty events to a finite family. ([math:def-probability-measure](https://alphabetamath.cc/item/def-probability-measure), [math:def-measure](https://alphabetamath.cc/item/def-measure))

[F5] A finite set with nonnegative outcome weights summing to one is a finite probability space; the probability of a subset is the sum of its outcome weights. ([math:def-finite-probability-space-and-event](https://alphabetamath.cc/item/def-finite-probability-space-and-event))

## Justification

**Given:** $n\in\mathbb N$ with $n\ge1$, $p\in[0,1]$, an adjacency matrix $A$ of $G(n,p)$ and an independent copy $A'$.

**Goal:** Verify that $W$ is well defined and has the stated symmetry and entry laws.

1.1 Both matrices are indexed by the same labelled vertex set, so their entrywise difference is a well-defined real matrix. By [F1] both are symmetric with zero diagonal, hence so is $W$. [given, F1, algebra]

1.2 For any assignment of values to edge indicators from each matrix, [F2] factors its probability into the probability of the assignment for $A$ and that for $A'$. The same law for $A'$ and [F1] factor each of those two probabilities over its distinct edges. Thus all coordinates in the two edge families are mutually independent Bernoulli$(p)$ variables on their original common probability space. [given, F1, F2]

2.1 Let $E$ be the finite set of unordered pairs of distinct vertices in $[n]$, and let $S$ be the finite set of all assignments $(b_e,b'_e)_{e\in E}$ with $b_e,b'_e\in\{0,1\}$. Write $Z=((A_e,A'_e))_{e\in E}$ for the joint edge vector. For $z\in S$, put $w(z)=\mathbb P(Z=z)$. These events are measurable because each is a finite intersection of edge-coordinate events; they partition the original sample space. By [F4], the weights are nonnegative and sum to one. Hence $(S,w)$ is a finite probability space by [F5]. For each $T\subseteq S$, the event $Z\in T$ is the disjoint union of the events $Z=z$ for $z\in T$, so $\mathbb P(Z\in T)=\sum_{z\in T}w(z)$. Consequently every joint coordinate-assignment probability on $(S,w)$ equals its original probability. By step 1.2, the coordinate pairs on $(S,w)$ satisfy all the independence and Bernoulli hypotheses of [F3]. [given, F1, F3, F4, F5, step 1.2, construct]

3.1 Apply [F3] on $(S,w)$ to the coordinate differences $b_e-b'_e$. This gives their common law and mutual independence. Every joint assignment of differences is a subset of $S$, so the probability equality in step 2.1 transfers all these assertions to the original differences $A_e-A'_e$, precisely the entries $W_{x,y}$ for $x<y$. This includes $p=0$ and $p=1$ without dividing by any probability. If $n=1$, $E$ is empty and $S$ consists of the single empty assignment of weight one; there are no upper-diagonal entries and independence is vacuous. Together with step 1.1 this establishes every asserted property. [F3, step 1.1, step 2.1] ∎





## Source notes

The construction and entry law are attributed to [Expander graphs are globally synchronizing](https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf), proof of Proposition 6.3, PDF p. 33. The argument above uses the independent suppliers stated in its facts.
