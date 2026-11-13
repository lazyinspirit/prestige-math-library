---
title: Both gallery divisibility orders are lattices
status: published
research_item: lem-author-d3116e202611-gallery-lattices
dependency_level: 4
---

## Prerequisites

- [def-author-18fc5d9b80f3-category-divisibility](item-def-author-18fc5d9b80f3-category-divisibility)
- [lem-author-d3116e202611-gallery-category](item-lem-author-d3116e202611-gallery-category)
- [lem-author-d3116e202611-principal-prefix-ideals](item-lem-author-d3116e202611-principal-prefix-ideals)


## Statement

Let $P$ be the gallery category of a finite central simplicial arrangement. Suppose any two arrows with the same source have a common right multiple. Then outgoing arrows under left divisibility form a lattice at every object, and incoming arrows under right divisibility form a lattice at every object.

## Statement references

[def-author-18fc5d9b80f3-category-divisibility](item-def-author-18fc5d9b80f3-category-divisibility)

[lem-author-d3116e202611-gallery-category](item-lem-author-d3116e202611-gallery-category)

[lem-author-d3116e202611-principal-prefix-ideals](item-lem-author-d3116e202611-principal-prefix-ideals)

## Facts & Assumptions

[F1] Use cancellation, length and reversal from [lem-author-d3116e202611-gallery-category](item-lem-author-d3116e202611-gallery-category) and the criterion of [lem-author-d3116e202611-principal-prefix-ideals](item-lem-author-d3116e202611-principal-prefix-ideals). A prefix of $v$ means $a$ with $v=ab$; write $D(v)$ for all such prefixes. A common right multiple of $a,b$ is an arrow divisible on the left by both.

[F2] Use [def-author-18fc5d9b80f3-category-divisibility](item-def-author-18fc5d9b80f3-category-divisibility) for the outgoing and incoming divisibility relations and the partial-order, meet, join and lattice terminology. Products follow traversal order. In particular, for arrows $a,b$ ending at $A$, $a$ right-divides $b$ exactly when $b=ca$ for a composable arrow $c$.

## Proof

**Given:** The data and hypotheses in the Statement.

**Goal:** Establish the Statement.

1.1 The intersection $D(a)\cap D(b)$ contains the identity, is prefix closed and satisfies rank-two closure, since both principal ideals do. Length is bounded by $\min(\ell(a),\ell(b))$. The criterion gives a unique generator $d$, which is precisely the greatest common left divisor. Left divisibility is a partial order because additive length excludes nonidentity invertibles. [F1, F2]

1.2 Choose one common right multiple $z$ of $a,b$, and let $U$ be the nonempty set of all common right multiples. The intersection $J=\bigcap_{v\in U}D(v)$ is length bounded by $\ell(z)$, contains the identity and satisfies prefix and rank-two closure. The criterion gives $J=D(m)$. Both $a,b$ belong to every $D(v)$, hence to $D(m)$, so $m\in U$. By definition $m$ divides every element of $U$, proving that $m$ is the least common right multiple. This argument does not assume that $U$ is finite. [F1, F2, given]

2.1 Reversal sends incoming arrows ending at $A$ bijectively to outgoing arrows starting at $A$. If $b=ca$, then $b^*=a^*c^*$, and the converse follows by reversing again. Thus reversal preserves and reflects the specified divisibility relations. It is an order isomorphism, so it transports the meet and join just constructed to the incoming right-divisibility order. Thus both required orders are lattices. [F1, F2, step 1.1, step 1.2] ∎
