---
title: Gluing compatible local determinant homomorphisms
status: published
research_item: lem-author-da44cda020c0-units-k1-local-determinant-gluing
dependency_level: 1
---

PDF p. 9: Surjectivity of the determinant on K1

## Prerequisites

- [lem-author-da44cda020c0-units-k1-gluing-units](item-lem-author-da44cda020c0-units-k1-gluing-units)
- [math:def-group](https://alphabetamath.cc/item/def-group)
- [math:def-group-homomorphism](https://alphabetamath.cc/item/def-group-homomorphism)
- [math:lem-monoid-units-form-a-group](https://alphabetamath.cc/item/lem-monoid-units-form-a-group)


## Statement
Let $X$ be a ringed space covered by open sets $U_i$. Let $G$ and $G_i$ be groups with homomorphisms $r_i:G\to G_i$, and let $d_i:G_i\to\mathcal O_X(U_i)^\times$ be homomorphisms. Assume that, for every $g\in G$, the sections $d_i(r_i(g))$ agree on every overlap. Then there is a unique homomorphism $d:G\to\mathcal O_X(X)^\times$ whose restriction to each $U_i$ is $d_ir_i$.

## Facts & Assumptions
**Given:** The cover, groups, maps and overlap compatibility in the statement.

**Goal:** Construct the unique global homomorphism $d$.

[F1] Compatible local units glue uniquely, and gluing respects multiplication. [lem-author-da44cda020c0-units-k1-gluing-units](item-lem-author-da44cda020c0-units-k1-gluing-units)

[F2] Groups have the associative product, identity and inverses specified in [math:def-group](https://alphabetamath.cc/item/def-group). A group homomorphism is a function preserving products, as in [math:def-group-homomorphism](https://alphabetamath.cc/item/def-group-homomorphism); composites preserve products by the same definition.

[F3] For every open set $V$, the section ring $\mathcal O_X(V)$ supplied by the ringed-space convention in [F1] is commutative and unital. Its multiplication and identity make its underlying set a monoid. Applying [math:lem-monoid-units-form-a-group](https://alphabetamath.cc/item/lem-monoid-units-form-a-group) to that monoid makes $\mathcal O_X(V)^\times$ a group under the restricted multiplication. This applies to $V=X$ and to every $U_i$.

## Proof
**Proof technique:** Glue pointwise and use uniqueness.

1.1 For each $g\in G$, the assumed overlap compatibility and [F1] give a unique global unit $d(g)$ restricting to $d_i(r_i(g))$ on every $U_i$. [F1, F3, given]

2.1 For $g,h\in G$, the restrictions of $d(gh)$ and $d(g)d(h)$ agree on every $U_i$ because $d_i$ and $r_i$ are homomorphisms. Uniqueness in [F1] gives $d(gh)=d(g)d(h)$. The same uniqueness proves that any map with the specified restrictions equals $d$. [F1, F2, F3, step 1.1] ∎
