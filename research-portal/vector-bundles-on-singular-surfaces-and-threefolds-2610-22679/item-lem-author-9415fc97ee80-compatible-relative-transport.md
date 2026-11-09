---
title: Compatible comparisons transport relative objects and support fibers
status: published
research_item: lem-author-9415fc97ee80-compatible-relative-transport
dependency_level: 13
---

PDF p. 7: Motivic purity at a smooth closed point

## Prerequisites

- [def-supported-complex-indexing](item-def-supported-complex-indexing)
- [math:def-triangulated-category-axiom-tr-three](https://alphabetamath.cc/item/def-triangulated-category-axiom-tr-three)
- [math:thm-long-exact-hom-sequences-of-a-distinguished-triangle](https://alphabetamath.cc/item/thm-long-exact-hom-sequences-of-a-distinguished-triangle)


## Statement
In a triangulated category, consider two specified distinguished triangles $A\to B\to Q\to A[1]$ and $A'\to B'\to Q'\to A'[1]$. If isomorphisms $u:A\to A'$ and $v:B\to B'$ commute with the first arrows, there exists an isomorphism $w:Q\to Q'$ completing a morphism of triangles; uniqueness of $w$ is not asserted. In particular any two choices of a cone for the same first arrow are isomorphic compatibly with the first two objects, without making cones a functor on an arbitrary triangulated category.

For a commuting square of cochain maps $C(X)\to C(U)$ and $D(X)\to D(U)$ with vertical quasi-isomorphisms, the induced map on the explicit support fibers is a quasi-isomorphism and respects their maps to the global complexes. Consequently compatible derived comparisons on the ambient scheme and its open complement suffice to transport a purity calculation by this construction. A separately supplied direct compatible comparison of support objects may also suffice; no universal necessity of ambient and open comparisons is asserted. Unrelated isomorphisms of individual cohomology groups do not by themselves supply the commuting derived comparison used here.

## Facts & Assumptions

**Given:** The triangles and commuting first-arrow square; separately the strict commuting square of cochain maps for the explicit-fiber assertion.

**Goal:** Establish cone transport with its nonuniqueness and compatible support transport.

[F1] TR3 supplies some third map completing a morphism of distinguished triangles. [math:def-triangulated-category-axiom-tr-three](https://alphabetamath.cc/item/def-triangulated-category-axiom-tr-three)

[F2] Representable Hom gives long exact sequences on such triangles. [math:thm-long-exact-hom-sequences-of-a-distinguished-triangle](https://alphabetamath.cc/item/thm-long-exact-hom-sequences-of-a-distinguished-triangle)

[F3] The support fiber of $f:A\to B$ has degree $n$ term $A^n\oplus B^{n-1}$ and differential $(a,b)\mapsto(d_Aa,f(a)-d_Bb)$, with projection to $A$. [def-supported-complex-indexing](item-def-supported-complex-indexing)

## Proof

1.1 Apply [F1] to obtain $w$ and a morphism of triangles. For any object $T$, apply covariant $\operatorname{Hom}(T,-)$ and [F2]. In the five-term segment surrounding $\operatorname{Hom}(T,Q)$, all vertical maps except possibly the middle one are isomorphisms because they are induced by $u,v$ or their shifts. Exactness implies the middle map is bijective: surjectivity follows by lifting a target element's image in the next term and correcting the difference by the preceding term; injectivity follows by the same correction for an element with zero image. Thus $\operatorname{Hom}(T,w)$ is bijective for every $T$. [F1, F2, given]

2.1 Take $T=Q'$ to lift $\operatorname{id}_{Q'}$ to $h:Q'\to Q$ with $wh=\operatorname{id}_{Q'}$. Then $w(hw-\operatorname{id}_Q)=0$; injectivity for $T=Q$ gives $hw=\operatorname{id}_Q$. Hence $w$ is an isomorphism. TR3 only gave existence and does not select it uniquely, so no functorial cone assertion follows. [step 1.1, algebra]

3.1 In the cochain-map case, the two vertical maps act coordinatewise on the models in [F3]; the commuting square makes this a cochain map and its projections commute with the ambient vertical map. The short exact sequences $0\to C(U)[-1]\to\operatorname{fib}(C(X)\to C(U))\to C(X)\to0$ and its $D$ counterpart give long exact cohomology sequences. The same five-term argument as in step 1.1, now using the two vertical quasi-isomorphisms and their shifts, proves that the fiber map induces an isomorphism in every degree. This proves support transport under the sufficient compatible-comparison hypotheses stated here. [F3, given, step 1.1, step 2.1] ∎
