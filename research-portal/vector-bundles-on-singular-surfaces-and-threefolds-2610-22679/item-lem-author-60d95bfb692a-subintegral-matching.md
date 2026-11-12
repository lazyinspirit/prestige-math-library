---
title: Sections match across a finite subintegral cover
status: published
research_item: lem-author-60d95bfb692a-subintegral-matching
dependency_level: 9
---

PDF p. 5: HK18 Theorem 1.4

## Prerequisites

- [lem-author-60d95bfb692a-subintegral-diagonal-cover](item-lem-author-60d95bfb692a-subintegral-diagonal-cover)
- [lem-author-60d95bfb692a-cover-restriction-injective](item-lem-author-60d95bfb692a-cover-restriction-injective)
- [def-seminormal-scheme-interface](item-def-seminormal-scheme-interface)
- [math:def-finite-morphism-schemes](https://alphabetamath.cc/item/def-finite-morphism-schemes)
- [def-cdh-topology-interface](item-def-cdh-topology-interface)
- [def-scheme-sites-and-sheafification](item-def-scheme-sites-and-sheafification)
- [math:def-fibre-product-schemes-universal-property](https://alphabetamath.cc/item/def-fibre-product-schemes-universal-property)
- [math:thm-fibre-products-of-schemes-exist](https://alphabetamath.cc/item/thm-fibre-products-of-schemes-exist)


## Statement
Fix a field $k$. Let $p:T\to X$ be a finite subintegral morphism of separated finite-type schemes over $k$, and let $F$ be a set-valued sheaf on the cdh site of separated finite-type $k$-schemes. For every $s\in F(T)$, its pullbacks along the two projections $T\times_X T\rightrightarrows T$ agree. The fibre product represents pairs of maps to $T$ with the same composite to $X$.

## Facts & Assumptions

**Given:** $p$, $F$ and $s$ as stated, on the suitably small scheme category used to define this cdh site, with its indicated fibre products represented in it.

**Goal:** Prove equality of the two pullbacks.

[F1] The diagonal $\Delta:T\to T\times_X T$ is a cdh covering singleton, and each projection composed with $\Delta$ is $\operatorname{id}_T$. [lem-author-60d95bfb692a-subintegral-diagonal-cover](item-lem-author-60d95bfb692a-subintegral-diagonal-cover)

[F2] Restriction of a sheaf along a covering singleton is injective. [lem-author-60d95bfb692a-cover-restriction-injective](item-lem-author-60d95bfb692a-cover-restriction-injective)

[F3] Subintegral means integral, bijective on underlying points and inducing isomorphisms on all residue fields. Finite means affine with coordinate algebras finite as modules over the corresponding base rings. [def-seminormal-scheme-interface](item-def-seminormal-scheme-interface) [math:def-finite-morphism-schemes](https://alphabetamath.cc/item/def-finite-morphism-schemes)

[F4] The category and cdh topology are those of [def-cdh-topology-interface](item-def-cdh-topology-interface). A set-valued sheaf is in particular a contravariant functor on this category: for composable arrows $a$ and $b$, $(a\circ b)^*=b^*\circ a^*$, and $\operatorname{id}^*=\operatorname{id}$. [def-scheme-sites-and-sheafification](item-def-scheme-sites-and-sheafification)

[F5] Scheme fibre products exist and have the compatible-pair universal property. Their representatives in the chosen site have this meaning. [math:thm-fibre-products-of-schemes-exist](https://alphabetamath.cc/item/thm-fibre-products-of-schemes-exist) [math:def-fibre-product-schemes-universal-property](https://alphabetamath.cc/item/def-fibre-product-schemes-universal-property)

## Proof

**Proof technique:** Compare after restriction to the diagonal.

1.1 Write $q_1,q_2:T\times_X T\to T$ for the projections. By [F1], $q_1\circ\Delta=q_2\circ\Delta=\operatorname{id}_T$. Functoriality from [F4] gives $\Delta^*(q_i^*s)=(q_i\circ\Delta)^*s=s$ for $i=1,2$. Consequently the two pullbacks of $s$ restrict along $\Delta$ to the same element $s$. [F1, F4, given]

2.1 By [F1] and [F2], restriction along $\Delta$ is injective. The two pullbacks are therefore equal. [F1, F2, step 1.1] ∎
