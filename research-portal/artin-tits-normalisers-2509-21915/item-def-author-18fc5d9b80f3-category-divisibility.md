---
title: Divisibility and atomicity in a category
status: published
research_item: def-author-18fc5d9b80f3-category-divisibility
dependency_level: 0
---

## Prerequisites

- [math:def-category](https://alphabetamath.cc/item/def-category)
- [math:def-partial-order](https://alphabetamath.cc/item/def-partial-order)
- [math:def-lattice-distributive-lattice-and-order-ideal](https://alphabetamath.cc/item/def-lattice-distributive-lattice-and-order-ideal)


## Definition

Write $fg$ for the composite obtained by first traversing $f$ and then $g$. An arrow $f$ left-divides $h$ when $h=fg$ for some arrow $g$; it right-divides $h$ when $h=gf$ for some $g$. A category is cancellative when $fg=fh$ implies $g=h$ and $gf=hf$ implies $g=h$, whenever the displayed composites are defined. An atom is a nonidentity arrow which is not a composite of two nonidentity arrows. The category is atomic if, for each arrow $h$, the lengths of factorizations of $h$ into nonidentity arrows are bounded by an integer depending on $h$.

For an object $x$, the outgoing divisibility relation is left divisibility on arrows with source $x$; the incoming divisibility relation is right divisibility on arrows with target $x$. Partial-order and lattice terminology is used here only when the relevant collection of arrows is a set. When these relations are partial orders, their joins are least common multiples and their meets are greatest common divisors for the respective divisibilities. A lattice is a partially ordered set in which every pair has a meet and a join.

## Definition references

[math:def-category](https://alphabetamath.cc/item/def-category)

[math:def-partial-order](https://alphabetamath.cc/item/def-partial-order)

[math:def-lattice-distributive-lattice-and-order-ideal](https://alphabetamath.cc/item/def-lattice-distributive-lattice-and-order-ideal)

## Justification

The source and target conditions make the factorization relations meaningful. Identity arrows give reflexivity and associativity of composition gives transitivity. An arrow $u:x\to y$ is invertible if there is an arrow $v:y\to x$ with $uv=1_x$ and $vu=1_y$; then $u$ and $v$ are inverse arrows. Atomicity rules out nonidentity invertible arrows: the inverse of a nonidentity arrow is also nonidentity, so repeating an inverse pair would otherwise give arbitrarily long factorizations of an identity. In a cancellative atomic category, mutual left divisibility gives $f=fgk$ and cancellation gives $gk=1$. Cancellation in $g(kg)=g1$ then gives $kg=1$, so $g$ and $k$ are inverse arrows; hence both are identities and $f=h$. The same argument applies to right divisibility. Thus, in a cancellative atomic category, an outgoing or incoming divisibility relation is a partial order whenever its underlying arrow collection is a set; its meets and joins, when they exist, are unique by antisymmetry.
