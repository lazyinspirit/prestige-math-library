# Untwisted Hall algebra: finiteness and associativity supplier plan

Root assistance, 2026-10-17. This is an independently checked planning argument informed by Schiffmann, *Lectures on Hall Algebras*, §1.3, not an authored or accepted library theorem. It makes explicit that finite-field linearity, a finite-subobject hypothesis for every object, hereditary dimension, and an Euler form are not needed for the untwisted algebra.

Let C be a supplied small abelian category (or a supplied small skeleton of an essentially small one), with finite Hom sets and finite sets YExt¹(M,N) of Yoneda equivalence classes of short exact sequences. The exact existing abelian-category/short-exact-sequence/Yoneda/skeleton suppliers must be checked before native authoring. No resolution-based identification of Ext is assumed. Fix a commutative coefficient ring R. Write Iso(C) for the set of isomorphism classes and H=⊕_[M] R u_M.

For objects M,N,L let g^L_(M,N) be the number of subobjects U⊂L isomorphic to N with quotient L/U isomorphic to M. A subobject is a monomorphism modulo isomorphism over L, rather than a chosen literal embedding. This number is finite: every such subobject has a representative monomorphism N→L, and Hom(N,L) is finite. It depends only on the three isomorphism classes, since an isomorphism L→L' transports subobjects and quotients bijectively and isomorphisms of M,N do not change their isomorphism-type conditions.

For fixed M,N only finitely many L contribute. Each such L occurs as the middle object of a Yoneda extension class in YExt¹(M,N). Equivalent short exact sequences have isomorphic middle objects, so the map from the finite extension-class set to possible middle isomorphism classes is well-defined and surjective. Thus the formula

$$u_Mu_N=\sum_{[L]}g^L_{M,N}u_L$$

has finite support, and extends R-bilinearly to H. One need not enumerate all subobjects of each arbitrary L or choose a middle object simultaneously for every extension class.

The zero object gives the unit u_0: for g^L_(M,0), the only subobject is the zero subobject and L≅M; for g^L_(0,N), the quotient is zero precisely when the subobject is the whole object and L≅N. Hence u_Mu_0=u_M=u_0u_M.

Fix M,N,P,L. The coefficient of u_L in (u_Mu_N)u_P is

$$\sum_{[E]}g^E_{M,N}g^L_{E,P}.$$

It counts flags W⊂U⊂L with W≅P, U/W≅N and L/U≅M. Indeed, first choose W⊂L with W≅P and L/W≅E, then choose a subobject U/W⊂L/W of type N with quotient M. An isomorphism L/W≅E identifies this finite set with the set counted by g^E_(M,N); its cardinality is independent of that isomorphism. The inverse-image correspondence for subobjects of a quotient gives exactly U⊂L containing W.

The coefficient of u_L in u_M(u_Nu_P) is

$$\sum_{[F]}g^F_{N,P}g^L_{M,F}.$$

It counts the same flags by first choosing U⊂L of type F with quotient M and then W⊂U of type P with quotient N. The two constructions are inverse flag descriptions. The required quotient identity (L/W)/(U/W)≅L/U is the abelian-category subobject/quotient correspondence, and must be an exact cited supplier or a proved intermediate lemma. All displayed sums are finite by the already proved support statement; bilinearity gives associativity on all of H. This is a counting bijection, not an appeal to an unproved generic convolution theorem.

For comparison with a short-exact-sequence convention, let P^L_(M,N) count pairs (i,p) forming 0→N→L→M→0 with fixed endpoints. Aut(N)×Aut(M) acts freely on these pairs by changing the chosen endpoint identifications. Its orbit set is the subobject set counted by g: for a fixed subobject, choosing an isomorphism N≅U and L/U≅M gives exactly |Aut(N)|·|Aut(M)| choices. Thus

$$P^L_{M,N}=|\operatorname{Aut}(N)|\,|\operatorname{Aut}(M)|\,g^L_{M,N}.$$

This equality is an identity of finite integers; no divisions in the arbitrary coefficient ring R are necessary. If a normalized product instead uses inverses of automorphism orders, state the coefficient localization separately.

The small/supplied-skeleton condition avoids class-size problems. A class-sized category cannot be replaced silently by a chosen skeleton without addressing the required foundational principle. The general finitary algebra includes finite abelian p-groups; finite-dimensional F_q quiver representations are an additional important specialization, not its definition. Euler twists, Green compatibility, antipodes/doubles and derived/motivic/cohomological Hall algebras require separate statements and proofs.
