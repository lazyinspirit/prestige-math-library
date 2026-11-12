---
title: Finite constant cdh sections
status: published
research_item: lem-finite-constant-cdh-sections
dependency_level: 12
sources:
  references:
    - title: Vector bundles on singular surfaces and threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: PDF page 5, proof of Lemma 2.4, displays preceding and including
        equation (2.5)
      statement: For a finite set A and Y_A the disjoint union of A copies of Spec k,
        the constant cdh sheaf is the cdh sheafification of h_{Y_A}, and its
        value on seminormal X is naturally Hom_k(X,Y_A) = Map(pi_0(X),A).
      hypotheses: The article works over an algebraically closed field k with
        separated finite-type seminormal X. A is finite. The local argument
        retains AC through its declared suppliers and makes empty cases
        explicit.
      reading_limits: Read the supplied extracted text of PDF page 5 from the
        representable cdh comparison through equation (2.5). No fresh external
        theorem or literature proof is imported; the proof below is locally
        authored.
---

PDF p. 5: Proof of Lemma 2.4, YA and equation (2.5)

## Prerequisites

- [prop-cdh-representable-seminormalization](item-prop-cdh-representable-seminormalization)
- [lem-clopen-finite-constant-maps](item-lem-clopen-finite-constant-maps)
- [def-cdh-topology-interface](item-def-cdh-topology-interface)
- [def-scheme-sites-and-sheafification](item-def-scheme-sites-and-sheafification)
- [def-seminormal-scheme-interface](item-def-seminormal-scheme-interface)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:ex-localization-etale-open-immersion](https://alphabetamath.cc/item/ex-localization-etale-open-immersion)
- [math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian](https://alphabetamath.cc/item/cor-finite-type-algebra-over-noetherian-ring-is-noetherian)
- [math:thm-noetherian-ring-has-noetherian-spectrum](https://alphabetamath.cc/item/thm-noetherian-ring-has-noetherian-spectrum)
- [math:thm-noetherian-ring-ideal-characterisations](https://alphabetamath.cc/item/thm-noetherian-ring-ideal-characterisations)
- [math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme)
- [math:lem-finite-type-local-on-source-and-target](https://alphabetamath.cc/item/lem-finite-type-local-on-source-and-target)
- [math:def-affine-open-subscheme](https://alphabetamath.cc/item/def-affine-open-subscheme)
- [math:def-open-immersion-schemes](https://alphabetamath.cc/item/def-open-immersion-schemes)
- [math:def-separated-morphism-schemes](https://alphabetamath.cc/item/def-separated-morphism-schemes)
- [math:def-diagonal-morphism-scheme](https://alphabetamath.cc/item/def-diagonal-morphism-scheme)
- [math:def-closed-immersion-schemes](https://alphabetamath.cc/item/def-closed-immersion-schemes)
- [math:def-fibre-product-schemes-universal-property](https://alphabetamath.cc/item/def-fibre-product-schemes-universal-property)
- [math:thm-fibre-products-of-schemes-exist](https://alphabetamath.cc/item/thm-fibre-products-of-schemes-exist)
- [math:lem-fibre-product-open-restriction](https://alphabetamath.cc/item/lem-fibre-product-open-restriction)
- [math:def-base-change-morphism-schemes](https://alphabetamath.cc/item/def-base-change-morphism-schemes)
- [math:lem-base-change-open-closed-immersions](https://alphabetamath.cc/item/lem-base-change-open-closed-immersions)
- [math:def-algebraically-closed-field](https://alphabetamath.cc/item/def-algebraically-closed-field)
- [math:thm-evaluation-kernel-and-minimal-polynomial](https://alphabetamath.cc/item/thm-evaluation-kernel-and-minimal-polynomial)
- [math:def-separable-elements-and-separable-extensions](https://alphabetamath.cc/item/def-separable-elements-and-separable-extensions)


## Statement
Assume the Axiom of Choice. Let $k$ be an algebraically closed field, $X$ a separated seminormal scheme of finite type over $k$, and $A$ a finite set. Put $Y_A=\coprod_{a\in A}\operatorname{Spec}k$. On the big cdh site of separated finite-type $k$-schemes, the constant cdh sheaf associated to $A$ is canonically isomorphic to $h_{Y_A}^{\mathrm{cdh}}$, the cdh sheafification of $T\mapsto\operatorname{Hom}_k(T,Y_A)$. Consequently there are natural bijections
$$\Gamma_{\mathrm{cdh}}(X,A)\cong\operatorname{Hom}_k(X,Y_A)\cong\operatorname{Map}(\pi_0(X),A).$$
These assertions include the empty set and empty scheme cases.

Here the constant cdh sheaf associated to $A$ is the sheafification of the constant presheaf with value $A$ and identity restriction maps. Sections $\Gamma_{\mathrm{cdh}}(X,A)$ mean its value at $X$. The set $\pi_0(X)$ consists of the connected components of the underlying topological space; a connected component is a maximal nonempty subset that cannot be partitioned into two nonempty relatively open subsets. Thus $\pi_0(\varnothing)=\varnothing$. A finite-type $k$-scheme has a finite affine cover by spectra of finitely generated $k$-algebras; separated means that its diagonal is a closed immersion. Seminormal means that every point has an affine neighbourhood with coordinate ring $R$ such that each pair $x,y\in R$ satisfying $x^3=y^2$ has a unique $a\in R$ with $a^2=x$ and $a^3=y$.

## Facts & Assumptions

**Given:** The Axiom of Choice, an algebraically closed field $k$, a separated seminormal finite-type $k$-scheme $X$, and a finite set $A$.

**Goal:** Identify the constant cdh sheaf with $h_{Y_A}^{\mathrm{cdh}}$ and obtain the displayed natural bijections.

[F1] The big cdh site has separated finite-type $k$-schemes as objects, and its coverings include Nisnevich coverings. In particular, an open cover is a cdh covering family: open immersions are étale and each point has a lift with unchanged residue field. [def-cdh-topology-interface](item-def-cdh-topology-interface) [math:ex-localization-etale-open-immersion](https://alphabetamath.cc/item/ex-localization-etale-open-immersion)

[F2] Sheafification is left adjoint to the inclusion of sheaves into presheaves. A sheaf assigns a unique amalgamation to every compatible family on a covering sieve. [def-scheme-sites-and-sheafification](item-def-scheme-sites-and-sheafification) Use the universe and small-model conventions of this interface, with set-valued presheaves, their natural transformations as morphisms, and the sheafification unit. Restrictions in $h_Y$ are precomposition; $\operatorname{Hom}$ between presheaves or sheaves denotes natural transformations.

[F3] For a perfect field $k$ and separated finite-type $k$-schemes $T,Y$, the cdh sheafification of $h_Y$ evaluated at a seminormal $T$ is naturally $\operatorname{Hom}_k(T,Y)$. A field is perfect when every algebraic extension is separable. [prop-cdh-representable-seminormalization](item-prop-cdh-representable-seminormalization) [def-seminormal-scheme-interface](item-def-seminormal-scheme-interface)

[F4] Under the Axiom of Choice, if $T$ is a Noetherian $k$-scheme, morphisms $T\to Y_A$ correspond naturally to functions $\pi_0(T)\to A$. Here Noetherian for a scheme means having a finite affine cover by spectra of Noetherian rings, as in [F6]; Noetherian for a space means that descending chains of closed subsets stabilize. [lem-clopen-finite-constant-maps](item-lem-clopen-finite-constant-maps) [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F5] Under the stated Axiom of Choice, a commutative ring is Noetherian if and only if every ideal is finitely generated. A finite-type algebra over a Noetherian commutative ring is Noetherian. The spectrum of a Noetherian ring is a Noetherian topological space. [math:thm-noetherian-ring-ideal-characterisations](https://alphabetamath.cc/item/thm-noetherian-ring-ideal-characterisations) [math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian](https://alphabetamath.cc/item/cor-finite-type-algebra-over-noetherian-ring-is-noetherian) [math:thm-noetherian-ring-has-noetherian-spectrum](https://alphabetamath.cc/item/thm-noetherian-ring-has-noetherian-spectrum)

[F6] A scheme is Noetherian if it has a finite affine open cover by spectra of Noetherian rings; equivalently it is locally Noetherian and quasi-compact. Quasi-compact means that every open cover admits a finite subcover. [math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme)

[F7] Being locally of finite type is affine-local on source and target, and a quasi-compact locally finite-type morphism is of finite type. In particular restricting the source to an open subscheme preserves local finite type. [math:lem-finite-type-local-on-source-and-target](https://alphabetamath.cc/item/lem-finite-type-local-on-source-and-target)

[F8] An open subset $U$ of a scheme $T$ carries the open subscheme structure $(U,\mathcal O_T|_U)$; an open immersion identifies its source with such a subscheme. Separatedness here is relative to $k$: the structure morphism is separated if its diagonal $\Delta_{T/k}:T\to T\times_k T$ is a closed immersion. The diagonal is the unique morphism whose two projections are the identity. A closed immersion is a homeomorphism onto a closed subset with surjective structure-sheaf map $\mathcal O_Z\to i_*\mathcal O_T$. [math:def-affine-open-subscheme](https://alphabetamath.cc/item/def-affine-open-subscheme) [math:def-open-immersion-schemes](https://alphabetamath.cc/item/def-open-immersion-schemes) [math:def-separated-morphism-schemes](https://alphabetamath.cc/item/def-separated-morphism-schemes) [math:def-diagonal-morphism-scheme](https://alphabetamath.cc/item/def-diagonal-morphism-scheme) [math:def-closed-immersion-schemes](https://alphabetamath.cc/item/def-closed-immersion-schemes)

[F9] Scheme fibre products exist and represent compatible pairs of morphisms. For $P=T\times_k T$ with projections $p_1,p_2$ and open subschemes $U,V\subseteq T$, the open subscheme $p_1^{-1}(U)\cap p_2^{-1}(V)$ represents $U\times_k V$. The inverse-image open $f^{-1}(U)$ represents the pullback of an open subscheme $U$ along $f$. Base change of a morphism means its pullback, formed using these fibre products. [math:def-fibre-product-schemes-universal-property](https://alphabetamath.cc/item/def-fibre-product-schemes-universal-property) [math:thm-fibre-products-of-schemes-exist](https://alphabetamath.cc/item/thm-fibre-products-of-schemes-exist) [math:lem-fibre-product-open-restriction](https://alphabetamath.cc/item/lem-fibre-product-open-restriction) [math:def-base-change-morphism-schemes](https://alphabetamath.cc/item/def-base-change-morphism-schemes)

[F10] A base change of a closed immersion is a closed immersion, with no flatness or nonemptiness assumption. [math:lem-base-change-open-closed-immersions](https://alphabetamath.cc/item/lem-base-change-open-closed-immersions)

[F11] Algebraic closedness means that every nonconstant polynomial over $k$ has a root in $k$. An element of an extension is algebraic when some nonzero polynomial over $k$ vanishes at it; an algebraic extension has this property for every element. Such an element $b$ has a unique monic irreducible minimal polynomial $m_b$, and $f(b)=0$ if and only if $m_b$ divides $f$. An algebraic element is separable when its minimal polynomial has no repeated root in any extension field, and an extension is separable when every element is separable. Here a repeated root $c$ means that $(t-c)^2$ divides the polynomial in that extension. [math:def-algebraically-closed-field](https://alphabetamath.cc/item/def-algebraically-closed-field) [math:thm-evaluation-kernel-and-minimal-polynomial](https://alphabetamath.cc/item/thm-evaluation-kernel-and-minimal-polynomial) [math:def-separable-elements-and-separable-extensions](https://alphabetamath.cc/item/def-separable-elements-and-separable-extensions)

## Proof

**Proof technique:** Use the universal property of sheafification and the open decomposition induced by a map to the finite disjoint union, then apply the two stated suppliers.

1.1 Let $C_A$ be the constant presheaf. There is a natural map $C_A\to h_{Y_A}$ sending $a\in A$ to the composite $T\to\operatorname{Spec}k\to Y_A$ through the summand labelled $a$. The same definition covers $A=\varnothing$, when the map has empty domain at each object. [given, construct]

1.2 Every site object $T$ has a finite affine cover $\operatorname{Spec}R_i$ with each $R_i$ a finitely generated $k$-algebra. Every ideal of $k$ is either zero or the unit ideal: an ideal containing a nonzero $b$ contains $b^{-1}b=1$. Both ideals are finitely generated, so $k$ is Noetherian by [F5]. Thus [F5] makes each $R_i$ Noetherian and each $\operatorname{Spec}R_i$ a Noetherian space. By [F6], $T$ is a Noetherian scheme and is quasi-compact. Its underlying space is Noetherian as well: a descending chain of closed subsets stabilizes on each member of this finite cover, so taking the largest of the finitely many stabilization indices makes it stabilize on $T$. This also covers empty $T$, using the empty affine cover. [F1, F5, F6, given]

2.1 For any cdh sheaf $F$, restriction along this map gives a function $\operatorname{Hom}(h_{Y_A},F)\to\operatorname{Hom}(C_A,F)$. It is bijective. Indeed, given a presheaf map $u:C_A\to F$ and a morphism $f:T\to Y_A$, write $T_a$ for the inverse image of the $a$-summand, with its open subscheme structure from [F8]. The $T_a$ are pairwise disjoint open-and-closed subschemes covering $T$, by the disjoint-union construction and open-target factorization proved in [F4]. They are objects of the site: each is a closed subspace of the quasi-compact $T$ from step 1.2 and hence quasi-compact (adjoin its open complement to any open cover and take a finite subcover of $T$); local finite type is inherited by open restriction by [F7]. Over $\operatorname{Spec}k$, which has one point since a field has only the zero and unit ideals, quasi-compactness of $T_a$ gives quasi-compactness of its structure morphism, so [F7] gives finite type. For separatedness let $P=T\times_k T$ and $Q_a=p_1^{-1}(T_a)\cap p_2^{-1}(T_a)$. By [F9], $Q_a=T_a\times_k T_a$ as an open subscheme of $P$, and $\Delta_{T/k}^{-1}(Q_a)=T_a$. The inverse-image assertion of [F9] makes the square with arrows $\Delta_{T_a/k}$, $\Delta_{T/k}$, $T_a\hookrightarrow T$ and $Q_a\hookrightarrow P$ cartesian: its projections are the two identities on $T_a$, as required by [F8]. Thus $\Delta_{T_a/k}$ is a base change of the closed immersion $\Delta_{T/k}$; [F10] and [F8] give separatedness of $T_a$. On $T_a$ take $u_{T_a}(a)$. For distinct labels the overlaps are empty, and the sheaf axiom for the empty open cover gives $F(\varnothing)$ exactly one element; on a self-overlap the sections coincide with themselves. Hence these sections are compatible, and by the sheaf axiom they glue uniquely to an element of $F(T)$. For a site morphism $q:T'\to T$, the pieces for $f\circ q$ are $q^{-1}(T_a)$ by [F9]. Naturality of $u$ identifies the pulled-back sections on these pieces; uniqueness of gluing therefore gives naturality in $T$, defining a presheaf map $h_{Y_A}\to F$. If $A$ is empty, a map $T\to Y_A=\varnothing$ exists only for $T=\varnothing$, and the same empty-cover argument applies. [F1, F2, F4, F7, F8, F9, F10, step 1.1, step 1.2, construct]

3.1 The construction in step 2.1 restricts to $u$: the constant morphism labelled $a$ has $T_a=T$ and all other inverse images empty. Conversely, any presheaf map $h_{Y_A}\to F$ must take $f$ to the glued section in step 2.1, since its restriction to each $T_a$ is determined by naturality and the constant map labelled $a$. Thus the two operations are inverse. By [F2], restriction along the induced sheaf map $i:a_{\mathrm{cdh}}C_A\to a_{\mathrm{cdh}}h_{Y_A}$ is therefore a bijection on maps into every sheaf $F$. This makes $i$ an isomorphism without any extra representability premise: taking $F=a_{\mathrm{cdh}}C_A$ gives $r$ with $ri=\operatorname{id}$; taking $F=a_{\mathrm{cdh}}h_{Y_A}$ and using injectivity gives $ir=\operatorname{id}$, since $(ir)i=i=\operatorname{id}i$. This proves the asserted canonical identification of sheaves. [F2, step 1.1, step 2.1]

4.1 The finite disjoint union $Y_A$ is a scheme with clopen summands $S_a=\operatorname{Spec}k$ by the disjoint-union construction in [F4]. Its finitely many affine summands give local finite type by [F7]. Each $S_a$ is a one-point space, so $Y_A$ is quasi-compact: an open cover needs at most one member for each of its finitely many points. As in step 2.1, its structure morphism to the one-point $\operatorname{Spec}k$ is quasi-compact, hence of finite type by [F7]. For separatedness, form $P=Y_A\times_k Y_A$ by [F9]. The opens $P_{ab}=p_1^{-1}(S_a)\cap p_2^{-1}(S_b)$ are a finite disjoint cover of $P$; each is also closed, since its complement is the union of the other opens. By [F9] they represent $S_a\times_k S_b$, canonically isomorphic to $\operatorname{Spec}k$: both factors have identity structure morphism, so a compatible pair of maps is precisely a single map to $\operatorname{Spec}k$. By [F8], the diagonal restricts to that isomorphism from $S_a$ on $P_{aa}$ and has empty inverse image on $P_{ab}$ for $a\ne b$. It is therefore a homeomorphism onto the closed union of the $P_{aa}$. Its structure-sheaf map is surjective: on each $P_{aa}$ it is an isomorphism, and on each mixed piece its target is the zero sheaf of rings; sections on any open of $P$ are tuples of sections on these disjoint pieces, so projection to the equal-label factors is surjective (put zero in the other factors). By [F8] the diagonal is a closed immersion and $Y_A$ is separated. These arguments include empty $Y_A$ and empty $P$. To verify perfectness in the convention of [F3], let $K/k$ be any algebraic extension and $b\in K$. Its monic irreducible minimal polynomial $m_b$ from [F11] has a root $c\in k$. Applied also to $c$, [F11] gives $m_c=t-c$, since $m_c$ divides the monic linear polynomial $t-c$. Since $m_b(c)=0$, [F11] makes $t-c$ divide $m_b$; irreducibility and monicity give $m_b=t-c$. Hence $b=c\in k$, and this linear minimal polynomial has no repeated root. Thus every algebraic extension is trivial and separable, so $k$ is perfect. Now [F3] applies to the given $X$ and the separated finite-type $Y_A$; seminormality of $X$ gives $h_{Y_A}^{\mathrm{cdh}}(X)\cong\operatorname{Hom}_k(X,Y_A)$. Together with step 3.1 this yields the first displayed bijection. [F3, F4, F7, F8, F9, F11, given, step 2.1, step 3.1]

5.1 Step 1.2 proves that the given $X$ is a Noetherian scheme, so applying [F4] to $X$ gives the second displayed bijection. The Axiom of Choice is used through the declared suppliers in [F4] and [F5]; the gluing construction adds no choice assumption. The two bijections are natural in $X$ and $A$: the first is induced by natural sheaf maps and the natural comparison in [F3], and the second is natural by [F4]. [F4, F5, step 1.2, given, step 4.1]

6.1 Steps 3.1, 4.1 and 5.1 prove the sheaf identification and both claimed bijections, including the empty cases covered by the constructions and [F4]. [F4, step 3.1, step 4.1, step 5.1] ∎
