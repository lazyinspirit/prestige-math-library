---
id: thm-yoneda-product-is-associative-and-unital
kind: theorem
title: "The Yoneda product is associative and unital"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-yoneda-splicing-is-well-defined-on-equivalence-classes, def-yoneda-splice-product, def-equivalence-of-n-fold-extensions, thm-the-pullback-of-an-epimorphism-is-an-epimorphism, cor-the-pushout-of-a-monomorphism-is-a-monomorphism, thm-short-five-lemma-in-an-abelian-category]
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapters 3–4"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
pipeline_run: frontier-31a
---
## Statement

In an abelian category, define $\operatorname{YExt}^0(M,N)=\operatorname{Hom}(M,N)$. The product of two degree-zero classes is ordinary composition of their morphisms, in the displayed splice order. Splicing a
positive-degree extension with a degree-zero morphism means the corresponding
pullback at its quotient endpoint or pushout at its subobject endpoint. With
this convention, Yoneda splicing is associative on equivalence classes and
identity morphisms are two-sided units.

## Facts & Assumptions

**Given:** Three composable classes of nonnegative degrees, with the product convention in the statement and positive-degree splicing as in [[def-yoneda-splice-product]].

[F1] Positive-degree splicing descends to generated equivalence classes ([[lem-yoneda-splicing-is-well-defined-on-equivalence-classes]], [[def-equivalence-of-n-fold-extensions]]).

[F2] Pullbacks preserve epimorphisms and pushouts preserve monomorphisms in an abelian category ([[thm-the-pullback-of-an-epimorphism-is-an-epimorphism]], [[cor-the-pushout-of-a-monomorphism-is-a-monomorphism]]).

[F3] A morphism of short exact sequences that is the identity on the endpoints is an isomorphism on the middle object ([[thm-short-five-lemma-in-an-abelian-category]]).

## Proof

**Proof technique:** direct.

1.1 Endpoint pullback and pushout preserve exact extensions by [F2] and the universal properties of kernels and cokernels. An endpoint-preserving chain map induces a chain map of their pullbacks or pushouts, again fixing the new endpoints. Thus these operations respect every generating map and hence the generated equivalence relation. Together with [F1] and ordinary composition, the product is defined on classes in every pair of degrees. [F1, F2, given, construct]

1.2 If all three degrees are positive, both parenthesizations concatenate the same list of middle objects with the same junction maps, so their extensions agree. If all are zero, associativity is the category's associativity of morphism composition. [given, algebra]

2.1 For two consecutive degree-zero factors, iterated pullback is canonically the pullback along the composite map, and iterated pushout is canonically the pushout along the composite map, by their universal properties. This treats degree patterns $(+,0,0)$ and $(0,0,+)$. For patterns $(0,+,+)$ and $(+,+,0)$, the outer endpoint pushout or pullback affects only the outer endpoint of the concatenation, giving the same extension before or after concatenating. [step 1.1, construct]

2.2 For the pattern $(0,+,0)$, endpoint pushout and endpoint pullback commute up to canonical equivalence. For extension length at least two, they modify distinct outer middle objects and their universal maps commute. For a short extension $0\to B\to E\to A\to0$, a quotient map $f:A'\to A$ and a subobject map $g:B\to B'$ give a canonical map $g_*(f^*E)\to f^*(g_*E)$: the maps to $g_*E$ and to $A'$ agree over $A$, and the map from $B'$ is supplied by the pushout. It fixes $B'$ and $A'$, so [F3] makes it an isomorphism of short extensions. This proves the remaining pattern with two zero degrees. [F3, step 1.1, construct]

2.3 For the pattern $(+,0,+)$, let $\xi$ extend $L$ by $N$, let $f:K\to L$, and let $\eta$ extend $M$ by $K$. The two products are $(f^*\xi)\smile\eta$ and $\xi\smile(f_*\eta)$. There is a chain map from the first spliced extension to the second: use the pullback projection on the last middle object of $\xi$, the pushout map on the first middle object of $\eta$, and identities elsewhere and at $N,M$. At the junction its square commutes by the defining equations of that pullback and pushout; all other squares are their endpoint squares or identity squares. Hence these two extensions are equivalent by the generated relation, which needs no isomorphism of all middle objects. [F1, step 1.1, construct]

3.1 Steps 1.2 and 2.1–2.3 exhaust the eight patterns of zero and positive degrees, proving associativity. Pullback along an identity and pushout along an identity are canonically isomorphic to the original extension by their universal properties. In degree zero the same assertion is the identity law for composition. Thus identity morphisms give both units in every degree. [step 1.1, step 1.2, step 2.1, step 2.2, step 2.3, algebra] ∎
