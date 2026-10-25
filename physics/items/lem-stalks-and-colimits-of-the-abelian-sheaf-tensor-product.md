---
id: "lem-stalks-and-colimits-of-the-abelian-sheaf-tensor-product"
kind: "lemma"
title: "Stalks, coproducts and right exactness of the abelian sheaf tensor product"
status: published
origin: pipeline
deps: [def-tensor-product-of-abelian-sheaves, thm-sheafification-preserves-stalks, def-stalk-of-presheaf, thm-sheafification-universal-property, thm-limits-and-colimits-in-functor-categories-are-computed-pointwise, lem-equality-in-a-filtered-colimit-of-sets-is-eventual, def-topological-space, thm-exactness-of-sheaves-stalkwise, thm-sheaf-morphism-isomorphism-stalkwise, thm-right-exactness-of-tensor-products, thm-tensor-products-commute-with-arbitrary-direct-sums, thm-symmetry-and-associativity-over-a-commutative-ring, thm-unit-isomorphisms-for-module-tensor-products, def-tensor-product-of-modules-by-generators-and-relations, thm-universal-property-of-module-tensor-products, def-tensor-product-total-complex-of-chain-complexes, lem-constant-sheaf-is-the-sheaf-of-locally-constant-functions, def-sheaf-on-topological-space, thm-abelian-sheaves-form-abelian-category]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-27
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  references:
    - title: "The Stacks Project, Cohomology of Sheaves"
      url: https://stacks.math.columbia.edu/download/cohomology.pdf
      locator: "Section 26: Lemmas 26.1, 26.4 and 26.9 with the tensor conventions of Section 26; Stacks Project Modules, Lemma 17.2"
---

## Statement

Let $X$ be a topological space and let
$\otimes_{\mathbb Z}$ be the tensor product of abelian sheaves over $X$ of
[[def-tensor-product-of-abelian-sheaves]].

1. For every $x\in X$ and all abelian sheaves
   $\mathcal F,\mathcal G$ there is a canonical isomorphism
   $$(\mathcal F\otimes_{\mathbb Z}\mathcal G)_x\cong\mathcal F_x\otimes_{\mathbb Z}\mathcal G_x,$$
   natural in $\mathcal F$ and $\mathcal G$.
2. For every family $(\mathcal G_i)_{i\in I}$ of abelian sheaves with coproduct
   $\bigoplus_{i\in I}\mathcal G_i$ in $\mathrm{Ab}(X)$ and every $x\in X$
   there is a canonical isomorphism
   $$\Bigl(\bigoplus_{i\in I}\mathcal G_i\Bigr)_x\cong\bigoplus_{i\in I}(\mathcal G_i)_x;$$
   the coproduct is the sheafification of the presheaf direct sum.
3. For bounded-above complexes $\mathcal F^\bullet,\mathcal G^\bullet$ of
   abelian sheaves the tensor-product total complex of
   [[def-tensor-product-of-abelian-sheaves]] is a cochain complex with
   $d^2=0$, and for every $x$ there is a canonical isomorphism of complexes
   $$(\operatorname{Tot}(\mathcal F^\bullet\otimes_{\mathbb Z}\mathcal G^\bullet))_x\cong\operatorname{Tot}(\mathcal F_x^\bullet\otimes_{\mathbb Z}\mathcal G_x^\bullet),$$
   the right-hand total complex being the module-level Koszul total complex of
   [[def-tensor-product-total-complex-of-chain-complexes]] reindexed to
   cochains.
4. The tensor product is right exact in each variable: for every short exact
   sequence $0\to\mathcal G'\to\mathcal G\to\mathcal G''\to0$ of abelian sheaves
   the sequence
   $$\mathcal F\otimes_{\mathbb Z}\mathcal G'\to\mathcal F\otimes_{\mathbb Z}\mathcal G\to\mathcal F\otimes_{\mathbb Z}\mathcal G''\to0$$
   is exact, and symmetrically in the first variable. It also commutes with
   coproducts: the canonical map
   $\bigoplus_i(\mathcal F\otimes_{\mathbb Z}\mathcal G_i)\to\mathcal F\otimes_{\mathbb Z}(\bigoplus_i\mathcal G_i)$
   is an isomorphism, and symmetrically.
5. There are canonical isomorphisms
   $\sigma:\mathcal F\otimes_{\mathbb Z}\mathcal G\to\mathcal G\otimes_{\mathbb Z}\mathcal F$,
   $\lambda:\mathbb Z_X\otimes_{\mathbb Z}\mathcal G\to\mathcal G$ and
   $\mathbb Z_X\otimes_{\mathbb Z}\mathbb Z_X\cong\mathbb Z_X$, where
   $\mathbb Z_X$ is the constant sheaf and $\lambda(f\otimes s)=f\cdot s$ is
   the section with germs $(f\cdot s)_x=f(x)s_x$; these are natural and, for
   sheaves concentrated in degree zero, they are the degree-zero
   identifications of the tensor-product total complex of clause 3.

## Facts & Assumptions

[F1] Sheafification preserves stalks: for every presheaf $\mathcal F$ the sheafification map induces a bijection $\eta_{\mathcal F,x}:\mathcal F_x\to(a\mathcal F)_x$ ([[thm-sheafification-preserves-stalks]]).

[F2] The stalk at $x$ is the filtered colimit of the section groups over the open neighbourhoods of $x$ ([[def-stalk-of-presheaf]]).

[F3] Every presheaf morphism from a presheaf into a sheaf factors uniquely through the sheafification map ([[thm-sheafification-universal-property]]).

[F4] Colimits in a functor category with small source and index categories are computed pointwise ([[thm-limits-and-colimits-in-functor-categories-are-computed-pointwise]]).

[F5] In a filtered colimit of sets, two elements have equal image if and only if they become equal after applying arrows to a common object ([[lem-equality-in-a-filtered-colimit-of-sets-is-eventual]]).

[F6] A topology is closed under finite intersections, so an intersection of finitely many open neighbourhoods of a point is again an open neighbourhood of that point ([[def-topological-space]]).

[F7] A sequence of abelian sheaves is exact if and only if its stalk sequence at every point is exact ([[thm-exactness-of-sheaves-stalkwise]]).

[F8] A morphism of sheaves is an isomorphism if and only if every induced map on stalks is a bijection ([[thm-sheaf-morphism-isomorphism-stalkwise]]).

[F9] For modules over a commutative ring, tensoring an exact sequence $A\to B\to C\to0$ gives an exact sequence $A\otimes N\to B\otimes N\to C\otimes N\to0$: tensoring preserves cokernels and surjections ([[thm-right-exactness-of-tensor-products]]).

[F10] Tensor product of modules over a commutative ring commutes with arbitrary direct sums in each variable ([[thm-tensor-products-commute-with-arbitrary-direct-sums]]).

[F11] For modules over a commutative ring the swap $\sigma_{M,N}(m\otimes n)=n\otimes m$ is an isomorphism $M\otimes_RN\cong N\otimes_RM$ ([[thm-symmetry-and-associativity-over-a-commutative-ring]]).

[F12] The unit maps $R\otimes_RN\to N$, $r\otimes n\mapsto rn$, and $M\otimes_RR\to M$ of a unital ring are group isomorphisms ([[thm-unit-isomorphisms-for-module-tensor-products]]).

[F13] Every element of a tensor product of abelian groups is a finite sum of elementary tensors $m\otimes n$, and the defining relations make the elementary tensors additive in each variable ([[def-tensor-product-of-modules-by-generators-and-relations]]).

[F14] A balanced map on $M\times N$ induces a unique group homomorphism on $M\otimes_RN$ ([[thm-universal-property-of-module-tensor-products]]).

[F15] The tensor product of abelian sheaves is the sheafification of the tensor-product presheaf, and the tensor-product total complex has degree-$n$ term the direct sum over the diagonal $i+j=n$ with Koszul differential ([[def-tensor-product-of-abelian-sheaves]]).

[F16] The constant sheaf $\mathbb Z_X$ is the sheaf of locally constant integer-valued functions and its stalk at $x$ is canonically $\mathbb Z$ by evaluation at $x$ ([[lem-constant-sheaf-is-the-sheaf-of-locally-constant-functions]]).

[F17] The module-level tensor total complex has differential $d(p\otimes q)=d_Pp\otimes q+(-1)^pp\otimes d_Qq$ on the degree diagonal ([[def-tensor-product-total-complex-of-chain-complexes]]).

[F18] In a sheaf, compatible local sections over an open cover glue uniquely ([[def-sheaf-on-topological-space]]).

## Proof

**Given:** A topological space $X$, abelian sheaves $\mathcal F,\mathcal G$ and families $(\mathcal G_i)_{i\in I}$, points $x\in X$, bounded-above complexes $\mathcal F^\bullet,\mathcal G^\bullet$ of abelian sheaves, and a short exact sequence $0\to\mathcal G'\to\mathcal G\to\mathcal G''\to0$ of abelian sheaves.

1.1 For open $U\ni x$ the germ maps $\mathcal F(U)\to\mathcal F_x$ and $\mathcal G(U)\to\mathcal G_x$ are compatible with the restriction maps of the neighbourhood diagram, so tensoring them gives maps $\mathcal F(U)\otimes_{\mathbb Z}\mathcal G(U)\to\mathcal F_x\otimes_{\mathbb Z}\mathcal G_x$ [F14] which form a cocone over that diagram. By the universal property of the filtered colimit [F2], applied to the tensor-product presheaf of [F15], they induce a canonical homomorphism $\varphi:(\mathcal F\otimes_{p,\mathbb Z}\mathcal G)_x\to\mathcal F_x\otimes_{\mathbb Z}\mathcal G_x$. [F2, F14, F15]

1.2 Let $(\mathcal G_i)_{i\in I}$ be a family of abelian sheaves and let $P$ be the presheaf $P(U):=\bigoplus_{i\in I}\mathcal G_i(U)$ with the canonical injections $\iota_i:\mathcal G_i\to P$. Since colimits in the presheaf category are computed pointwise [F4], $P$ with the $\iota_i$ is the coproduct of the $\mathcal G_i$ among presheaves. I claim that $aP$ with the maps $\eta\circ\iota_i$, where $\eta:P\to aP$ is the sheafification map, is a coproduct in $\mathrm{Ab}(X)$: given a cocone $(H,f_i)$ with $H$ an abelian sheaf, the presheaf coproduct property gives a unique presheaf morphism $f:P\to H$ with $f\iota_i=f_i$, and by the sheafification universal property [F3] there is a unique morphism of sheaves $\bar f:aP\to H$ with $f=\bar f\eta$; then $\bar f\eta\iota_i=f_i$, and any competitor with this property induces a presheaf map $P\to H$ equal to $f$, hence equals $\bar f$. [F3, F4]

1.3 Recall from [F15] that $\operatorname{Tot}^n(\mathcal F^\bullet\otimes_{\mathbb Z}\mathcal G^\bullet)=\bigoplus_{i+j=n}\mathcal F^i\otimes_{\mathbb Z}\mathcal G^j$ and that the differential $D$ on the summand $\mathcal F^i\otimes_{\mathbb Z}\mathcal G^j$ equals $d_{\mathcal F}^i\otimes\operatorname{id}+(-1)^i\operatorname{id}\otimes d_{\mathcal G}^j$. For $y\in\mathcal F^i$ and $z\in\mathcal G^j$ this gives $D(y\otimes z)=d_{\mathcal F}y\otimes z+(-1)^iy\otimes d_{\mathcal G}z$, hence $$D^2(y\otimes z)=d_{\mathcal F}^2y\otimes z+(-1)^{i+1}d_{\mathcal F}y\otimes d_{\mathcal G}z+(-1)^id_{\mathcal F}y\otimes d_{\mathcal G}z+(-1)^{2i}y\otimes d_{\mathcal G}^2z=0,$$ because $d_{\mathcal F}^2=0=d_{\mathcal G}^2$ and $(-1)^{i+1}+(-1)^i=0$. The summands generate $\operatorname{Tot}^n$ and $D$ is additive, so $D^2=0$: the tensor-product total complex is a cochain complex. [F15, F17]

1.4 Let $f\in\mathbb Z_X(U)$ be a locally constant function and $s\in\mathcal G(U)$. On an open $V\subseteq U$ on which $f$ is constant with value $n$, the assignment $x\mapsto f(x)s_x$ is the section $n\cdot s|_V$; these local sections agree on overlaps because the constants agree there, so by unique gluing in the sheaf $\mathcal G$ [F18] they define a section $f\cdot s\in\mathcal G(U)$ with $(f\cdot s)_x=f(x)s_x$. The pairing $(f,s)\mapsto f\cdot s$ is additive in each variable and compatible with restrictions, so it defines a morphism of presheaves $\mathbb Z_X\otimes_{p,\mathbb Z}\mathcal G\to\mathcal G$; since $\mathcal G$ is a sheaf, this factors uniquely through the sheafification [F3] and yields $\lambda:\mathbb Z_X\otimes_{\mathbb Z}\mathcal G\to\mathcal G$ with $\lambda(f\otimes s)=f\cdot s$ [F15]. At $x$ the stalk of $\mathbb Z_X$ is $\mathbb Z$ with $f\mapsto f(x)$ [F16] and the induced map is the unitor $n\otimes t\mapsto nt$ of [F12], an isomorphism; hence $\lambda$ is an isomorphism by [F8]. The same construction with $\mathcal G=\mathbb Z_X$ gives $\mathbb Z_X\otimes_{\mathbb Z}\mathbb Z_X\cong\mathbb Z_X$. For sheaves concentrated in degree zero the total complex is the tensor product in degree zero [F15], so these identifications are the degree-zero identifications of clause 3. [F3, F8, F12, F15, F16, F18]

2.1 Conversely let $s_x\in\mathcal F_x$ and $t_x\in\mathcal G_x$ be represented by sections $s\in\mathcal F(U)$ and $t\in\mathcal G(V)$; by [F6] the intersection $U\cap V$ is an open neighbourhood of $x$ and the restrictions $s|_{U\cap V},t|_{U\cap V}$ represent the same germs. The resulting class $[(s|_{U\cap V})\otimes(t|_{U\cap V})]$ does not depend on the choices: if $s'$ over $U'$ also represents $s_x$ and $t'$ over $V'$ also represents $t_x$, then by the equality criterion in filtered colimits [F5] and the stalk description [F2] there are neighbourhoods of $x$ on which $s$ agrees with $s'$ and $t$ with $t'$, and their intersection [F6] is a neighbourhood on which the two tensor representatives agree. The assignment $s_x\otimes t_x\mapsto[(s\otimes t)]$ is thus well defined on elementary tensors and is additive in each variable by the tensor relations [F13], so the universal property of the tensor product [F14] produces a homomorphism $\psi:\mathcal F_x\otimes_{\mathbb Z}\mathcal G_x\to(\mathcal F\otimes_{p,\mathbb Z}\mathcal G)_x$ with $\psi(s_x\otimes t_x)=[(s\otimes t)]$. On elementary tensors $\varphi\psi$ is the identity and $\psi\varphi$ fixes every class of an elementary tensor; these classes generate the filtered colimit and the elementary tensors generate $\mathcal F_x\otimes_{\mathbb Z}\mathcal G_x$ [F13], so $\varphi$ and $\psi$ are mutually inverse. [F2, F5, F6, F13, F14, step 1.1]

2.2 At $x$ the stalk of $P$ is $P_x=\varinjlim_{U\ni x}\bigoplus_{i\in I}\mathcal G_i(U)$ by [F2]. The canonical maps induce a homomorphism $\theta:P_x\to\bigoplus_{i\in I}(\mathcal G_i)_x$, which is bijective: a finite tuple of germs of sections over neighbourhoods $U_1,\ldots,U_k$ is represented by the restricted tuple over the open neighbourhood $U_1\cap\cdots\cap U_k$ [F6], so $\theta$ is surjective; and if two finite tuples over $U$ and $V$ have the same tuple of germs, then, component by component, the equality criterion in filtered colimits [F5] with the stalk description [F2] and finitely many intersections [F6] produce a common neighbourhood on which all components agree, so the two classes in $P_x$ coincide. Since the coproduct of the family in $\mathrm{Ab}(X)$ is $aP$ by [step 1.2] and sheafification preserves stalks by [F1], there is a canonical isomorphism $(\bigoplus_i\mathcal G_i)_x\cong P_x\cong\bigoplus_i(\mathcal G_i)_x$, which is clause 2. [F1, F2, F5, F6, step 1.2]

3.1 By [F15] one has $\mathcal F\otimes_{\mathbb Z}\mathcal G=a(\mathcal F\otimes_{p,\mathbb Z}\mathcal G)$, and by [F1] the sheafification map induces a bijection on stalks, so composing its inverse with the isomorphism of step 2.1 gives a canonical isomorphism $(\mathcal F\otimes_{\mathbb Z}\mathcal G)_x\cong\mathcal F_x\otimes_{\mathbb Z}\mathcal G_x$. Every map entering its construction is induced by the functorial germ and restriction maps, so the isomorphism is natural in $\mathcal F$ and $\mathcal G$. This is clause 1. [F1, F15, step 2.1]

4.1 In degree $n$ the canonical maps of clause 2 for the finite direct sum $\bigoplus_{i+j=n}\mathcal F^i\otimes_{\mathbb Z}\mathcal G^j$ and of clause 1 for each summand identify the stalk $(\operatorname{Tot}^n(\mathcal F^\bullet\otimes_{\mathbb Z}\mathcal G^\bullet))_x$ with $\bigoplus_{i+j=n}\mathcal F^i_x\otimes_{\mathbb Z}\mathcal G^j_x=\operatorname{Tot}^n(\mathcal F_x^\bullet\otimes_{\mathbb Z}\mathcal G_x^\bullet)$. These identifications are built from the natural stalk maps of [step 1.3] and [step 2.2], so they respect the Koszul differentials, which are given by the same formula on both sides [F17]; hence they assemble into an isomorphism of complexes. This is clause 3. [F17, step 3.1, step 2.2, step 1.3]

4.2 Let $0\to\mathcal G'\to\mathcal G\to\mathcal G''\to0$ be a short exact sequence of abelian sheaves and let $\mathcal F$ be an abelian sheaf. Applying $\mathcal F\otimes_{\mathbb Z}-$ degreewise gives the sequence $\mathcal F\otimes_{\mathbb Z}\mathcal G'\to\mathcal F\otimes_{\mathbb Z}\mathcal G\to\mathcal F\otimes_{\mathbb Z}\mathcal G''\to0$; by clause 1 and naturality of the stalk identification its stalk at $x$ is the sequence $\mathcal F_x\otimes_{\mathbb Z}\mathcal G'_x\to\mathcal F_x\otimes_{\mathbb Z}\mathcal G_x\to\mathcal F_x\otimes_{\mathbb Z}\mathcal G''_x\to0$, which is exact by the right exactness of the tensor product of $\mathbb Z$-modules [F9]. Since $x$ was arbitrary, the sheaf sequence is exact by the stalkwise exactness criterion [F7]. No injectivity on the left is claimed, and the argument in the first variable is symmetric. [F7, F9, step 3.1]

4.3 The assignment $u\otimes v\mapsto v\otimes u$ on sections over an open set is additive in each variable and commutes with restrictions, so it defines a morphism of presheaves $\mathcal F\otimes_{p,\mathbb Z}\mathcal G\to\mathcal G\otimes_{p,\mathbb Z}\mathcal F$; by [F15] its sheafification is a morphism $\sigma:\mathcal F\otimes_{\mathbb Z}\mathcal G\to\mathcal G\otimes_{\mathbb Z}\mathcal F$. At each $x$ its stalk is the swap map $\mathcal F_x\otimes_{\mathbb Z}\mathcal G_x\to\mathcal G_x\otimes_{\mathbb Z}\mathcal F_x$, an isomorphism by [F11], so $\sigma$ is an isomorphism by [F8]. [F8, F11, F15, step 3.1]

5.1 For a family $(\mathcal G_i)$ the maps $\mathcal F\otimes_{\mathbb Z}\mathcal G_i\to\mathcal F\otimes_{\mathbb Z}\bigl(\bigoplus_i\mathcal G_i\bigr)$ induced by the coproduct injections give a canonical map $\bigoplus_i(\mathcal F\otimes_{\mathbb Z}\mathcal G_i)\to\mathcal F\otimes_{\mathbb Z}\bigl(\bigoplus_i\mathcal G_i\bigr)$. At $x$ the source identifies with $\bigoplus_i(\mathcal F_x\otimes_{\mathbb Z}(\mathcal G_i)_x)$ by clause 2 and the target with $\mathcal F_x\otimes_{\mathbb Z}\bigl(\bigoplus_i(\mathcal G_i)_x\bigr)$ by clause 1 and clause 2, and these agree by the module-level commutation of tensor products with direct sums [F10]; the comparison is the canonical one, hence an isomorphism by the stalkwise criterion [F8]. The first variable is treated symmetrically. Together with [step 4.1] this proves clause 4. [F8, F10, step 3.1, step 2.2, step 4.2]

6.1 Clauses 1 to 5 are step 3.1, step 2.2, step 4.1, step 4.2 with step 5.1, and step 4.3 with step 1.4. Each isomorphism constructed is canonical: it is assembled from germ and restriction maps, the universal property of the filtered colimit [F2], the sheafification map [F1, F3], the module-level symmetry, unitor and distributivity isomorphisms [F10, F11, F12], and the gluing of compatible local sections [F18], all of which are unique once their data are specified; consequently the identifications are natural in their arguments and commute with the morphisms of clause 5. No choice principle is used: the only finitely many open sets intersected are canonical intersections [F6], the sheafification is the canonical double-plus construction [F15], the coproduct and its universal property are canonical [step 1.2], and every tensor element is a finite sum of elementary tensors [F13], so no infinite or arbitrary selection occurs. ∎ [F1, F2, F3, F6, F10, F11, F12, F13, F15, F17, F18, step 3.1, step 2.2, step 4.1, step 4.2, step 5.1, step 4.3, step 1.4]
