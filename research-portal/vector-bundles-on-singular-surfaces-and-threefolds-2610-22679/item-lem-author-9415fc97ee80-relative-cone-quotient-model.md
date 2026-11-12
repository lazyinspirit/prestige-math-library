---
title: Relative cofibers and quotient complexes
status: published
research_item: lem-author-9415fc97ee80-relative-cone-quotient-model
dependency_level: 0
---

PDF p. 7: Motivic purity at a smooth closed point

## Prerequisites

- [math:def-abelian-category](https://alphabetamath.cc/item/def-abelian-category)
- [math:thm-abelian-groups-form-an-abelian-category](https://alphabetamath.cc/item/thm-abelian-groups-form-an-abelian-category)
- [math:def-cochain-complex-in-an-abelian-category](https://alphabetamath.cc/item/def-cochain-complex-in-an-abelian-category)
- [math:def-cochain-map](https://alphabetamath.cc/item/def-cochain-map)
- [math:def-cohomology-object-of-a-cochain-complex](https://alphabetamath.cc/item/def-cohomology-object-of-a-cochain-complex)
- [math:def-derived-category-of-an-abelian-category](https://alphabetamath.cc/item/def-derived-category-of-an-abelian-category)
- [math:thm-the-derived-category-inherits-a-triangulated-structure](https://alphabetamath.cc/item/thm-the-derived-category-inherits-a-triangulated-structure)
- [math:def-exact-sequence-and-short-exact-sequence-in-an-abelian-category](https://alphabetamath.cc/item/def-exact-sequence-and-short-exact-sequence-in-an-abelian-category)
- [math:thm-long-exact-sequence-in-cohomology](https://alphabetamath.cc/item/thm-long-exact-sequence-in-cohomology)
- [math:def-triangulated-category](https://alphabetamath.cc/item/def-triangulated-category)
- [math:def-functor-and-contravariant-functor](https://alphabetamath.cc/item/def-functor-and-contravariant-functor)
- [math:def-morphism-and-isomorphism-of-triangles](https://alphabetamath.cc/item/def-morphism-and-isomorphism-of-triangles)
- [math:thm-every-monomorphism-is-the-kernel-of-its-cokernel](https://alphabetamath.cc/item/thm-every-monomorphism-is-the-kernel-of-its-cokernel)
- [math:cor-a-morphism-in-an-abelian-category-is-monic-exactly-when-its-kernel-is-zero-and-epic-exactly-when-its-cokernel-is-zero](https://alphabetamath.cc/item/cor-a-morphism-in-an-abelian-category-is-monic-exactly-when-its-kernel-is-zero-and-epic-exactly-when-its-cokernel-is-zero)
- [math:thm-an-abelian-category-is-balanced](https://alphabetamath.cc/item/thm-an-abelian-category-is-balanced)


## Statement
Let $\mathcal A$ be an abelian category, in particular the category of abelian groups, and let $f:A\to B$ be a cochain map. Use cohomological shifts $A[s]^n=A^{n+s}$, $d_{A[s]}=(-1)^sd_A$, and put
$$Q_f^n=B^n\oplus A^{n+1},\qquad d(b,a)=(d_Bb+f(a),-d_Aa).$$
This is the cone of $f$. The maps $b\mapsto(b,0)$ and $(b,a)\mapsto a$ give the distinguished relative cofiber triangle $A\xrightarrow f B\to Q_f\to A[1]$ in $D(\mathcal A)$, under the derived-localization size convention stated below.

If each $f^n$ is monic (injective for abelian groups), define the quotient complex $C_f=B/f(A)$ by $C_f^n=\operatorname{coker}(f^n)$ and the differential induced by $d_B$. Projection $\pi:Q_f\to C_f$, $(b,a)\mapsto[b]$, is a quasi-isomorphism, meaning that every $H^n(\pi)$ is an isomorphism.

For a motivic application, let $u:M(U)\to M(X)$ be a separately supplied open-inclusion map in a triangulated category $\mathcal T$. A chosen relative motive here means an object $R$ together with a distinguished triangle $M(U)\xrightarrow u M(X)\to R\to M(U)[1]$. Suppose a functor $T:D(\mathcal A)\to\mathcal T$, an isomorphism $\eta:T(A[1])\to T(A)[1]$, and an isomorphism of triangles from the image of the complete cone triangle to this chosen triangle are supplied. Its components $\alpha:T(A)\to M(U)$, $\beta:T(B)\to M(X)$ and $\gamma:T(Q_f)\to R$ must commute with all three arrows, using $\eta$ at the connecting arrow; in particular $\beta T(f)=u\alpha$. If $f$ is termwise monic, these data give $R\cong T(C_f)$ via $T(\pi)\gamma^{-1}$. Thus a quotient-complex model for a relative motive requires this cofiber-compatible comparison in addition to a monomorphic complex model of the first arrow. No monomorphism for an arbitrary map of motives, existence of such a comparison, or unique choice of relative cone is asserted. The notation $M(U),M(X)$ denotes supplied objects; constructing the motive functor and its open-inclusion map remains application data.

## Facts & Assumptions

**Given:** Cochain complexes $A,B$ in an abelian category and a cochain map $f$. Termwise monicity is assumed only for the quotient conclusion. The motivic application additionally assumes exactly the category, chosen triangle, functor, shift identification and complete triangle comparison in the Statement. Coordinate formulas denote biproduct morphisms, so no elementwise realization of a general abelian category is assumed.

**Goal:** Establish the cone differential, the monomorphic quotient model and its conditional transport to the chosen relative object.

[F1] An abelian category has the additive structure, kernels, cokernels and invertible coimage-to-image comparisons of [math:def-abelian-category](https://alphabetamath.cc/item/def-abelian-category). The category of abelian groups is an example by [math:thm-abelian-groups-form-an-abelian-category](https://alphabetamath.cc/item/thm-abelian-groups-form-an-abelian-category). These structures supply the biproducts, quotient objects and subobject calculations used below.

[F2] Cochain objects and the relation $d_Bf=fd_A$ use [math:def-cochain-complex-in-an-abelian-category](https://alphabetamath.cc/item/def-cochain-complex-in-an-abelian-category) and [math:def-cochain-map](https://alphabetamath.cc/item/def-cochain-map). Cohomology is $H^n(C)=\ker(d_C^n)/\operatorname{im}(d_C^{n-1})$ as in [math:def-cohomology-object-of-a-cochain-complex](https://alphabetamath.cc/item/def-cohomology-object-of-a-cochain-complex). A complex is called contractible here if it has degree $-1$ morphisms $h$ satisfying $dh+hd=\operatorname{id}$.

[F3] The shifts, cone and derived localization are those of [math:def-derived-category-of-an-abelian-category](https://alphabetamath.cc/item/def-derived-category-of-an-abelian-category); quasi-isomorphisms become invertible in that localization. Whenever this derived category is used, adopt that supplier's standing size hypothesis: a small category of complexes or supplied small cofinal denominator families. Its cone triangles are distinguished by [math:thm-the-derived-category-inherits-a-triangulated-structure](https://alphabetamath.cc/item/thm-the-derived-category-inherits-a-triangulated-structure). No general local-smallness assertion for arbitrary unbounded derived categories is added.

[F4] A short exact sequence means exactness at all three nonzero terms, as in [math:def-exact-sequence-and-short-exact-sequence-in-an-abelian-category](https://alphabetamath.cc/item/def-exact-sequence-and-short-exact-sequence-in-an-abelian-category). A termwise short exact sequence of cochain complexes in any abelian category has the long exact cohomology sequence of [math:thm-long-exact-sequence-in-cohomology](https://alphabetamath.cc/item/thm-long-exact-sequence-in-cohomology).

[F5] The application category has the specified translation and distinguished triangles of [math:def-triangulated-category](https://alphabetamath.cc/item/def-triangulated-category). The comparison functor obeys the identity and composition laws of [math:def-functor-and-contravariant-functor](https://alphabetamath.cc/item/def-functor-and-contravariant-functor). An isomorphism of triangles consists of three isomorphisms commuting with the first, second and connecting arrows, as in [math:def-morphism-and-isomorphism-of-triangles](https://alphabetamath.cc/item/def-morphism-and-isomorphism-of-triangles). The supplied $\eta$ makes the image of this particular cone triangle a triangle in $\mathcal T$; the supplied complete comparison makes it distinguished. Global exactness of $T$ is not needed or assumed.

[F6] A monomorphism is the kernel of its cokernel by [math:thm-every-monomorphism-is-the-kernel-of-its-cokernel](https://alphabetamath.cc/item/thm-every-monomorphism-is-the-kernel-of-its-cokernel). A morphism is monic exactly when its kernel is zero and epic exactly when its cokernel is zero by [math:cor-a-morphism-in-an-abelian-category-is-monic-exactly-when-its-kernel-is-zero-and-epic-exactly-when-its-cokernel-is-zero](https://alphabetamath.cc/item/cor-a-morphism-in-an-abelian-category-is-monic-exactly-when-its-kernel-is-zero-and-epic-exactly-when-its-cokernel-is-zero). A morphism both monic and epic is an isomorphism by [math:thm-an-abelian-category-is-balanced](https://alphabetamath.cc/item/thm-an-abelian-category-is-balanced).

## Proof

1.1 Applying the displayed differential twice gives first coordinate $d_B^2b+d_Bf(a)-fd_Aa=0$ and second coordinate $d_A^2a=0$. Thus $Q_f$ is a cochain complex; its displayed maps give the cone triangle of [F3]. If $f$ is termwise monic, $d_B$ descends to the cokernels since $d_Bf=fd_A$, so $C_f$ is a cochain complex and $\pi$ is a cochain map. In each degree $\pi$ is epic. Its kernel $K^n$ identifies with $A^n\oplus A^{n+1}$ through $(a_0,a_1)\mapsto(fa_0,a_1)$, since by [F6] a monomorphism identifies its domain with the kernel of its cokernel. The induced differential is $d_K(a_0,a_1)=(d_Aa_0+a_1,-d_Aa_1)$. Hence $0\to K\to Q_f\xrightarrow\pi C_f\to0$ is termwise short exact. All coordinate identities are identities of biproduct morphisms. [F1, F2, F3, F4, F6, given, algebra, construct]

2.1 On $K$ put $h(a_0,a_1)=(0,a_0)$, of degree $-1$. Then $d_Kh(a_0,a_1)=(a_0,-d_Aa_0)$ and $hd_K(a_0,a_1)=(0,d_Aa_0+a_1)$, so $d_Kh+hd_K=\operatorname{id}$. For the cycle inclusion $z:Z^n(K)\to K^n$ this identity gives $z=d_Khz$. Thus every cycle factors through the boundary subobject; the reverse inclusion follows from $d_K^2=0$. Consequently $H^n(K)=0$. Applying [F4] to step 1.1 gives the exact segment $0=H^n(K)\to H^n(Q_f)\xrightarrow{H^n(\pi)}H^n(C_f)\to H^{n+1}(K)=0$. Exactness gives zero kernel and cokernel for $H^n(\pi)$, so [F6] makes it monic, epic and hence an isomorphism for every $n$. This proves the asserted quasi-isomorphism. It is invertible in $D(\mathcal A)$ by [F3]. Under the additional application data, $\gamma:T(Q_f)\to R$ is an isomorphism and $T(\pi)$ is an isomorphism: the functor sends the two inverse identities for $\pi$ in the derived category to inverse identities. Therefore $T(\pi)\gamma^{-1}:R\to T(C_f)$ is an isomorphism, proving precisely the conditional quotient interpretation in the Statement. [F1, F2, F3, F4, F5, F6, given, step 1.1, algebra] ∎
