---
title: Excision and K theory purity at a smooth closed point
status: published
research_item: prop-smooth-point-excision-purity
dependency_level: 17
sources:
  references:
    - title: Jean Fasel and Maria Yakerson, Vector bundles on singular surfaces and
        threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: p. 7, squares preceding equation (2.8)
      reading_limits: Read the supplied extracted PDF p. 7 from the opening qcqs
        paragraph through (2.8). The article asserts the squares and purity; the
        local proof below supplies the arbitrary-open extension argument and
        residue-class normalization. No unprinted proof or independent K-theory
        comparison is attributed to the article.
      statement: For a qcqs scheme over a perfect field and a smooth closed point, the
        smooth-locus/open-complement square is bicartesian; Zariski locality
        gives a cartesian K-theory square, and purity identifies its supported
        degree-zero groups with Z before the map (2.8) to the global
        support-image group.
      hypotheses: X is qcqs over a perfect field k, and x is a closed point in its
        open smooth locus. No global finite-type or pure-dimension hypothesis
        occurs in the paragraph preceding (2.8).
    - title: "Kerodon: adjoints and cofinality"
      url: https://kerodon.net/tag/02P3
      locator: Corollary 7.2.3.7(1), tag 02P3
      statement: A left adjoint between infinity-categories is left cofinal in the
        terminology of Kerodon.
      hypotheses: An actual adjunction of infinity-categories; ordinary poset
        adjunctions are applied through their nerves. The opposites of the right
        adjoints constructed here are left adjoints.
      reading_limits: Read the complete corollary and its displayed proof on the
        primary tag page. Import its cofinality theorem; do not reconstruct the
        Quillen Theorem A foundations it cites.
    - title: "Kerodon: restriction of limit cones"
      url: https://kerodon.net/tag/02XQ
      locator: Corollary 7.2.2.2, tag 02XQ, absolute case with U the functor to a point
      statement: Restriction along a left cofinal simplicial map preserves and detects
        limit cones, using the same cone vertex and the restricted cone maps.
      hypotheses: A left cofinal map of indexing simplicial sets and a coherent cone
        in an infinity-category. Small spectral limits exist in the chosen
        universe.
      reading_limits: Read the statement and displayed proof on the primary tag page.
        Only the absolute limit-cone comparison is imported; its underlying
        equivalence of cone categories is not reproved.
    - title: "Kerodon: pointwise limits in diagram infinity-categories"
      url: https://kerodon.net/tag/02X9
      locator: Proposition 7.1.8.3(1)-(2), tag 02X9, applied by passage to opposite
        infinity-categories
      statement: If the evaluated diagrams have limits, their diagram-category limit
        exists and is computed at each object. This is the limit dual of the
        stated colimit result.
      hypotheses: A diagram K to Fun(B,C) with limits for each evaluation. Here C is
        spectra, B and K are small; passage to opposites gives the limit
        assertion.
      reading_limits: Read the statement and proof on the primary tag page. Import the
        result and take its formal opposite; the proofs of the cited extension
        and levelwise-colimit lemmas are not reconstructed.
    - title: "Kerodon: right adjoints preserve limits"
      url: https://kerodon.net/tag/02KE
      locator: Corollary 7.1.4.28, tag 02KE, assertion for the right adjoint G
      statement: In an adjunction of infinity-categories the right adjoint preserves
        all existing limits of any fixed small shape.
      hypotheses: An actual adjunction and existing limits; here the right adjoint is
        the spectral limit functor, adjoint to the constant-diagram functor by
        the limit universal property.
      reading_limits: Read the complete statement and proof on the primary tag page.
        Import the right-adjoint assertion; apply it to the locally specified
        limit/constant-diagram adjunction.
    - title: "Kerodon: universal property of a coherent limit"
      url: https://kerodon.net/tag/02VZ
      locator: Definition 7.1.1.1, tag 02VZ, limit clause
      statement: A cone is limiting when mapping into its vertex from any test object
        gives the space of coherent natural transformations from the constant
        test-object diagram to the given diagram.
      hypotheses: An infinity-category, an indexing simplicial set, a diagram and a
        specified natural-transformation cone. Mapping objects are spaces, not
        merely sets of homotopy classes.
      reading_limits: Read the full definition on the primary tag page. Use this
        mapping-space universal property for the constant-diagram/limit
        adjunction; no alternate model of infinity-categories is constructed.
---

PDF p. 7: Opening squares and purity

## Prerequisites

- [def-cohomology-with-support](item-def-cohomology-with-support)
- [prop-perfect-k-localization-input](item-prop-perfect-k-localization-input)
- [def-scheme-perfect-complexes](item-def-scheme-perfect-complexes)
- [lem-koszul-point-support-class](item-lem-koszul-point-support-class)
- [prop-supported-k-zero-devissage](item-prop-supported-k-zero-devissage)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface)
- [def-stable-spectra-interface](item-def-stable-spectra-interface)
- [math:def-scheme](https://alphabetamath.cc/item/def-scheme)
- [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base)
- [math:def-morphism-of-schemes](https://alphabetamath.cc/item/def-morphism-of-schemes)
- [math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme)
- [math:def-affine-open-subscheme](https://alphabetamath.cc/item/def-affine-open-subscheme)
- [math:def-open-immersion-schemes](https://alphabetamath.cc/item/def-open-immersion-schemes)
- [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme)
- [math:def-closed-point-scheme](https://alphabetamath.cc/item/def-closed-point-scheme)
- [math:def-residue-field-scheme-point](https://alphabetamath.cc/item/def-residue-field-scheme-point)
- [math:def-closed-immersion-schemes](https://alphabetamath.cc/item/def-closed-immersion-schemes)
- [math:def-sheaf-on-topological-space](https://alphabetamath.cc/item/def-sheaf-on-topological-space)
- [math:lem-fibre-product-open-restriction](https://alphabetamath.cc/item/lem-fibre-product-open-restriction)
- [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes)
- [math:def-smooth-morphism-to-field-classical](https://alphabetamath.cc/item/def-smooth-morphism-to-field-classical)
- [math:def-locally-finite-presentation-morphism](https://alphabetamath.cc/item/def-locally-finite-presentation-morphism)
- [math:thm-smooth-locus-open](https://alphabetamath.cc/item/thm-smooth-locus-open)
- [math:lem-distinguished-open-refinement-at-a-point](https://alphabetamath.cc/item/lem-distinguished-open-refinement-at-a-point)
- [math:lem-spectrum-localization-open-immersion](https://alphabetamath.cc/item/lem-spectrum-localization-open-immersion)
- [math:cor-affine-scheme-quasi-compact](https://alphabetamath.cc/item/cor-affine-scheme-quasi-compact)
- [math:def-finite-type-and-module-finite-algebras](https://alphabetamath.cc/item/def-finite-type-and-module-finite-algebras)
- [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)
- [math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian](https://alphabetamath.cc/item/cor-finite-type-algebra-over-noetherian-ring-is-noetherian)
- [math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme)
- [math:thm-noetherian-ring-has-noetherian-spectrum](https://alphabetamath.cc/item/thm-noetherian-ring-has-noetherian-spectrum)
- [math:def-dimension-noetherian-topological-space](https://alphabetamath.cc/item/def-dimension-noetherian-topological-space)
- [math:cor-dimension-of-a-finite-polynomial-ring-over-a-field](https://alphabetamath.cc/item/cor-dimension-of-a-finite-polynomial-ring-over-a-field)
- [math:cor-quotient-dimension-does-not-increase](https://alphabetamath.cc/item/cor-quotient-dimension-does-not-increase)
- [math:thm-irreducible-closed-subsets-and-prime-ideals](https://alphabetamath.cc/item/thm-irreducible-closed-subsets-and-prime-ideals)
- [math:def-regular-local-ring-geometric-point](https://alphabetamath.cc/item/def-regular-local-ring-geometric-point)
- [math:thm-rank-nullity](https://alphabetamath.cc/item/thm-rank-nullity)
- [math:cor-finite-dimensional-vector-spaces-are-isomorphic-iff-equal-dimension](https://alphabetamath.cc/item/cor-finite-dimensional-vector-spaces-are-isomorphic-iff-equal-dimension)
- [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)
- [math:def-separable-elements-and-separable-extensions](https://alphabetamath.cc/item/def-separable-elements-and-separable-extensions)
- [math:def-coherent-module-scheme](https://alphabetamath.cc/item/def-coherent-module-scheme)
- [math:def-finite-type-finite-presentation-module-sheaf](https://alphabetamath.cc/item/def-finite-type-finite-presentation-module-sheaf)
- [` Kerodon: adjoints and cofinality · Corollary 7.2.3.7(1), tag 02P3 `](https://kerodon.net/tag/02P3)
- [` Kerodon: restriction of limit cones · Corollary 7.2.2.2, tag 02XQ, absolute case with U the functor to a point `](https://kerodon.net/tag/02XQ)
- [` Kerodon: pointwise limits in diagram infinity-categories · Proposition 7.1.8.3(1)-(2), tag 02X9, applied by passage to opposite infinity-categories `](https://kerodon.net/tag/02X9)
- [` Kerodon: right adjoints preserve limits · Corollary 7.1.4.28, tag 02KE, assertion for the right adjoint G `](https://kerodon.net/tag/02KE)
- [` Kerodon: universal property of a coherent limit · Definition 7.1.1.1, tag 02VZ, limit clause `](https://kerodon.net/tag/02VZ)


## Statement
Assume the Axiom of Choice. Let $X$ be a quasi-compact quasi-separated scheme over a perfect field $k$, and let $x$ be a closed point at which $X\to\operatorname{Spec}k$ is smooth. Write $S=X_{\mathrm{smooth}}$ for the open locus where this morphism is smooth and $U=X\setminus\{x\}$. The square of open immersions
$$\begin{matrix}S\cap U&\longrightarrow&U\\\downarrow&&\downarrow\\S&\longrightarrow&X\end{matrix}$$
is both cartesian and cocartesian in schemes. With $K$ on arbitrary opens interpreted by the quasi-compact-open homotopy-limit convention of the support definition, its restriction square is homotopy cartesian. Restriction and dévissage give canonical isomorphisms
$$\pi_0K(X/U)\xrightarrow{\sim}\pi_0K(S/(S\cap U))\xrightarrow{\sim}K_0(\kappa(x))\xrightarrow{\dim_{\kappa(x)}}\mathbb Z.$$
Here $K(A/B)$ denotes the fiber of $K(A)\to K(B)$ for an open immersion $B\subseteq A$, and $K_0(\kappa(x))$ is the Grothendieck group of finite-dimensional vector spaces over the residue field. The inverse image of $1$ is the supported class of the residue sheaf $i_*\kappa(x)$, for $i:\operatorname{Spec}\kappa(x)\hookrightarrow X$; its image in $K_0(X)$ is the ordinary perfect-complex class of that sheaf. Neither support-to-global map is asserted to be injective.

## Statement references
[def-cohomology-with-support](item-def-cohomology-with-support)

## Facts & Assumptions
[A1] The already assumed [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) is retained for the support, localization, Koszul, dévissage, affine compactness and categorical inputs below. Fix compatible suitable universes containing the scheme data and $\omega$, with the closure conventions of [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention), large enough for all displayed diagrams and supplied categories. Universe existence is a separate standing size assumption. These are the same size conventions as the support construction.

**Given:** AC, $X,k,x,S,U$ as in the statement. Smoothness is that of [F5]; a perfect field is a field all of whose algebraic extensions are separable, with separability as in [math:def-separable-elements-and-separable-extensions](https://alphabetamath.cc/item/def-separable-elements-and-separable-extensions).

**Goal:** Prove the scheme and K-theory squares, the supported degree-zero identifications and the normalization of the generator, without requiring $S$ to be quasi-compact.

[F1] [def-cohomology-with-support](item-def-cohomology-with-support) defines $K$ on an arbitrary open as the homotopy limit over quasi-compact opens, with coherent restriction maps, and defines $K(A/B)$ as the indicated fiber. [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface) specifies $K$ and $K_T$ on qcqs schemes using the actual perfect categories, their inclusion and restriction maps, and $K_i=\pi_iK$ in every integer degree.

[F2] [prop-perfect-k-localization-input](item-prop-perfect-k-localization-input) gives localization and supported open excision for qcqs schemes with the stated quasi-compact opens and complements. It identifies $K_T$ with the restriction fiber naturally for open restriction and support-to-global maps. Its Proof 1.1 also proves that finite unions and finite intersections of quasi-compact opens of a quasi-separated scheme are quasi-compact, by finite affine covers.

[F3] [lem-koszul-point-support-class](item-lem-koszul-point-support-class), applied only after choosing a smooth affine finite-type neighbourhood, supplies a further smooth affine principal shrinking $V$ on which the closed point ideal is generated by a finite regular sequence; its Koszul complex resolves the residue sheaf there. The principal choice is explicit in its Proof 2.1. [prop-supported-k-zero-devissage](item-prop-supported-k-zero-devissage) identifies the supported $K_0$ of a regular Noetherian finite-dimensional ambient scheme with $G_0$ of the closed subscheme, with inverse coherent pushforward. Its regularity is absolute regularity of local rings. The required ambient hypotheses for $V$ are verified in step 7.1, rather than inferred from the point resolution.

[F4] [def-scheme-perfect-complexes](item-def-scheme-perfect-complexes) defines perfectness by local bounded finite locally free representations, and the supported perfect category by vanishing of cohomology stalks outside the specified subset. Perfectness of a fixed derived object can thus be checked on an open cover; the zero complex is perfect.

[F5] A scheme has affine open neighbourhoods by [math:def-scheme](https://alphabetamath.cc/item/def-scheme) and [math:def-affine-scheme](https://alphabetamath.cc/item/def-affine-scheme); a $k$-scheme has a structure morphism by [math:def-scheme-over-base](https://alphabetamath.cc/item/def-scheme-over-base). [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes) defines smoothness at a point by local finite presentation, flatness and geometric regularity of its fiber. Local finite presentation supplies a finitely presented affine chart around that point by [math:def-locally-finite-presentation-morphism](https://alphabetamath.cc/item/def-locally-finite-presentation-morphism). On this chart [math:thm-smooth-locus-open](https://alphabetamath.cc/item/thm-smooth-locus-open) applies and gives a smooth open neighbourhood. Applying this at every smooth point proves that $S$ is open even though the structure morphism on all of $X$ need not be locally of finite presentation. For a smooth morphism to $\operatorname{Spec}k$, taking the field extension $k/k$ in the geometric-regularity clause makes each local ring regular; this is precisely the absolute regularity of [math:def-regular-local-ring-geometric-point](https://alphabetamath.cc/item/def-regular-local-ring-geometric-point). For applications to the finite-type neighbourhood, [math:def-smooth-morphism-to-field-classical](https://alphabetamath.cc/item/def-smooth-morphism-to-field-classical) proves that regularity of all local rings after every field extension is equivalent, under AC, to the local standard-smooth convention used by the Koszul supplier [F3]. The geometric-regularity clause supplies exactly this all-field condition, so both smoothness conventions apply there.

[F6] Open subschemes carry restricted structure sheaves by [math:def-affine-open-subscheme](https://alphabetamath.cc/item/def-affine-open-subscheme); their inclusions are open immersions by [math:def-open-immersion-schemes](https://alphabetamath.cc/item/def-open-immersion-schemes). [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme) gives the open-cover and affine-intersection meanings of qcqs. Every point of an affine Zariski open has a principal neighbourhood inside it by [math:lem-distinguished-open-refinement-at-a-point](https://alphabetamath.cc/item/lem-distinguished-open-refinement-at-a-point), and $D(f)=\operatorname{Spec}A_f$ as an open subscheme by [math:lem-spectrum-localization-open-immersion](https://alphabetamath.cc/item/lem-spectrum-localization-open-immersion); here $D(f)$ consists of primes not containing $f$. These affines are quasi-compact under AC by [math:cor-affine-scheme-quasi-compact](https://alphabetamath.cc/item/cor-affine-scheme-quasi-compact). [math:lem-fibre-product-open-restriction](https://alphabetamath.cc/item/lem-fibre-product-open-restriction) supplies the fiber products of open inclusions. Scheme morphisms are morphisms of locally ringed spaces by [math:def-morphism-of-schemes](https://alphabetamath.cc/item/def-morphism-of-schemes); the gluing and locality axioms of [math:def-sheaf-on-topological-space](https://alphabetamath.cc/item/def-sheaf-on-topological-space) allow their sheaf maps to be glued on an open cover, with local stalk maps inherited from the pieces.

[F7] [math:def-finite-type-and-module-finite-algebras](https://alphabetamath.cc/item/def-finite-type-and-module-finite-algebras) presents a finitely generated $k$-algebra as $k[t_1,\ldots,t_n]/I$; principal localization remains finitely generated by adjoining the inverse of the element. By [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism), finite type means locally of finite type and quasi-compact. Thus an affine chart with finitely generated coordinate algebra is a finite-type $k$-scheme, using affine quasi-compactness in [F6] and the fact that $\operatorname{Spec}k$ has only one point. Such an algebra is Noetherian by [math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian](https://alphabetamath.cc/item/cor-finite-type-algebra-over-noetherian-ring-is-noetherian), since the ideals of a field are $0$ and the field. Its affine scheme is Noetherian by [math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme) and has Noetherian underlying space by [math:thm-noetherian-ring-has-noetherian-spectrum](https://alphabetamath.cc/item/thm-noetherian-ring-has-noetherian-spectrum). [math:cor-dimension-of-a-finite-polynomial-ring-over-a-field](https://alphabetamath.cc/item/cor-dimension-of-a-finite-polynomial-ring-over-a-field) and [math:cor-quotient-dimension-does-not-increase](https://alphabetamath.cc/item/cor-quotient-dimension-does-not-increase) bound its Krull dimension by $n$. [math:thm-irreducible-closed-subsets-and-prime-ideals](https://alphabetamath.cc/item/thm-irreducible-closed-subsets-and-prime-ideals) identifies the nonempty irreducible closed subsets with prime vanishing sets, reversing strict inclusions. Thus this bound is also the chain dimension of [math:def-dimension-noetherian-topological-space](https://alphabetamath.cc/item/def-dimension-noetherian-topological-space).

[F8] [def-stable-spectra-interface](item-def-stable-spectra-interface) supplies coherent diagrams, small limits, the zero spectrum, fibers, cofibers and stability: a defining fiber square is also a pushout square. The limit universal property in External input reference 5 makes the small limit functor right adjoint to the constant-diagram functor. References 3 and 4 then imply that limits commute with fibers, since diagram-category fibers are computed pointwise and the limit functor preserves pullbacks and the zero object. References 1 and 2 allow restriction of a limit cone along a left adjoint indexing functor. All adjunctions used in steps 4.1 and 5.1 are specified there, including the opposites, so the variance is fixed.

[F9] [math:def-closed-point-scheme](https://alphabetamath.cc/item/def-closed-point-scheme) defines a closed singleton and identifies a closed affine point with a maximal ideal under AC. [math:def-residue-field-scheme-point](https://alphabetamath.cc/item/def-residue-field-scheme-point) gives $\kappa(x)=\mathcal O_{X,x}/\mathfrak m_x$, canonically the affine quotient field at a maximal ideal. [math:def-closed-immersion-schemes](https://alphabetamath.cc/item/def-closed-immersion-schemes) defines closed immersion by a homeomorphism onto a closed subset and a surjective sheaf map. The residue immersion on $V$ supplied by [F3] extends to $X$ by its singleton image and the residue map on stalks; its sheaf map is surjective locally on $V$ and on $U$, where the target is zero. For a field $L$, coherent sheaves on $\operatorname{Spec}L$ identify exactly and exactly on sequences with finite-dimensional $L$-vector spaces. Indeed, this scheme has one point, local ring $L$ and only the whole space and the empty open; a module sheaf is therefore determined by its $L$-module of global sections, and sheaf maps and exactness are those of these modules. The finite-type condition of [math:def-finite-type-finite-presentation-module-sheaf](https://alphabetamath.cc/item/def-finite-type-finite-presentation-module-sheaf) is finite generation of that module. A finite spanning list reduces to a basis by deleting dependent members, so finite generation is finite dimension. Conversely a finite-dimensional vector space gives the sheaf of a finite free module. The coherence kernel condition of [math:def-coherent-module-scheme](https://alphabetamath.cc/item/def-coherent-module-scheme) holds because the kernel of every map from $L^n$ is finite-dimensional by rank-nullity. Thus $G_0(L)$ and the $K_0(L)$ defined in the Statement have precisely the same generators and short-exact-sequence relations. [math:cor-finite-dimensional-vector-spaces-are-isomorphic-iff-equal-dimension](https://alphabetamath.cc/item/cor-finite-dimensional-vector-spaces-are-isomorphic-iff-equal-dimension) identifies each such space with $L^n$, and [math:thm-rank-nullity](https://alphabetamath.cc/item/thm-rank-nullity) makes dimension additive in those relations.

## External input
Reference 0 records the article's assertion and its hypotheses; it supplies statement provenance, not a proof of the arbitrary-open extension. References 1 and 2 import the precise adjoint/cofinality and limit-cone comparison facts in [F8]. Reference 3 imports pointwise diagram limits by taking the opposite of its colimit statement. Reference 4 imports preservation of limits by right adjoints, and reference 5 supplies the mapping-space definition of a limit used to identify that adjunction. These categorical premises apply to the small coherent spectral diagrams fixed in [A1] and [F8]. Their foundational proofs are imported with the reading limits in sources.references. The geometric applications, indexing adjunctions, stable fiber criterion and purity composition in the following Proof are local arguments; the whole proposition is not an imported external-input item.

## Proof
1.1 By [F5], take a finitely presented affine chart $N$ around $x$, apply smooth-locus openness to $N\to\operatorname{Spec}k$, and choose a principal affine neighbourhood of $x$ inside that locus by [F6]. It is smooth and of finite type over $k$: a finitely presented algebra is finitely generated, and principal localization adds one inverse generator by [F7]. Its geometric regularity at every point means that every local ring after every field extension is regular, so [F5] also gives smoothness in the standard-smooth convention of [F3]. Apply [F3] to this finite-type scheme and take the principal shrinking specified there. This gives a smooth affine finite-type $V$ containing $x$ with the point ideal generated by a finite regular sequence. Its complement of $x$ is the finite union of the principal opens where those generators are nonzero, hence quasi-compact by [F6]. For the empty sequence the ideal is zero and the complement is empty. [A1, F3, F5, F6, F7, F9, given]

2.1 If $Z$ is any quasi-compact open of $X$ containing $V$, cover $Z$ by finitely many affine opens, using the affine neighbourhood basis in [F5] and [F6] and quasi-compactness. For an affine $A$ containing $x$, choose a principal neighbourhood $D(f)$ of $x$ inside $A\cap V$ by [F6]. The closed subset $A\setminus D(f)$ is quasi-compact: an open cover of it together with $D(f)$ covers the quasi-compact $A$. It avoids $x$, so its cover by principal opens in $A$ avoiding $x$ has a finite subcover. The remaining part $D(f)\setminus\{x\}$ is the intersection of the quasi-compact opens $D(f)$ and $V\setminus\{x\}$ in the quasi-separated $X$, hence is quasi-compact by [F2]. An affine $A$ avoiding $x$ needs no removal. These finite covers prove that $Z\setminus\{x\}$ is quasi-compact; taking $Z=X$ proves this for $U$. Every open subscheme is quasi-separated: two of its affine opens are affine opens of $X$, and their intersection is quasi-compact by quasi-separatedness of $X$. [F2, F5, F6, F9, step 1.1, given]

3.1 The scheme square is cartesian by the open restriction fiber-product property in [F6]. It is cocartesian since $S\cup U=X$. Indeed, two morphisms from these opens into a scheme $Y$ agreeing on their intersection glue as continuous maps. For each open $O\subseteq Y$, their sheaf maps send a section of $\mathcal O_Y(O)$ to compatible sections on the two open pieces of its inverse image; these glue uniquely by [F6]. The glued maps respect ring operations and restrictions by locality, and their stalk maps are local because those on the pieces are local. Thus they give the unique scheme morphism $X\to Y$ restricting to the given two maps. [F5, F6, given, step 2.1]

4.1 Write $\mathcal Q(W)$ for the poset of quasi-compact opens of $W$, ordered by inclusion, and let $\mathcal C$ be its subposet for $W=S$ on opens containing $V$. The inclusion $a:\mathcal C\to\mathcal Q(S)$ has left adjoint $B\mapsto B\cup V$, since $B\cup V\subseteq Z$ is equivalent to $B\subseteq Z$ for $Z\in\mathcal C$. The complement functor $b:\mathcal C\to\mathcal Q(S\setminus\{x\})$, $Z\mapsto Z\setminus\{x\}$, is defined by step 2.1 and has left adjoint $B\mapsto B\cup V$: for $B$ avoiding $x$, $B\subseteq Z\setminus\{x\}$ is equivalent to $B\cup V\subseteq Z$. Finite unions are quasi-compact by [F2]. Therefore $a^{\mathrm{op}}$ and $b^{\mathrm{op}}$ are left adjoints and [F8] identifies both limits in the support fiber with the limits over $\mathcal C^{\mathrm{op}}$, using the actual restricted cones. Commuting this limit with the fiber by [F8] gives $K(S/(S\cap U))\simeq\operatorname*{holim}_{Z\in\mathcal C^{\mathrm{op}}}\operatorname{fib}\bigl(K(Z)\to K(Z\setminus\{x\})\bigr)$. Compatibility follows from the natural inclusions $Z\setminus\{x\}\subseteq Z$; this is a restriction comparison, not merely an abstract equivalence. [F1, F2, F8, step 1.1, step 2.1, step 3.1]

5.1 Localization and supported excision in [F2] give a coherent natural equivalence from the displayed fiber diagram to the constant diagram $K_{\{x\}}(V)$, using restriction to $V$ at every $Z$. Here all $Z$ are qcqs and all complements are quasi-compact by step 2.1. The poset $\mathcal C$ has least element $V$, so $\mathcal C^{\mathrm{op}}$ has terminal element $V$. Its projection to the one-object category is left adjoint to the functor selecting $V$. Applying [F8] to this left adjoint identifies the limit of any coherent constant diagram with its value. In particular the fiber limit is $K_{\{x\}}(V)$, and its projection at $V$ is an equivalence. Applying [F2] also to $V\subseteq X$, with complement $U$ from step 2.1, identifies $K(X/U)$ with the same spectrum. The restriction comparisons commute, so the actual restriction $K(X/U)\to K(S/(S\cap U))$ is an equivalence. [A1, F2, F8, step 2.1, step 4.1]

6.1 Put $P=K(S)\times_{K(S\cap U)}K(U)$. Coherent restriction gives a map $K(X)\to P$ over $K(U)$, whose fiber map is the equivalence of step 5.1 by the pullback universal property. Here is the stable fiber criterion from [F8]. For any map $A\to A'$ over a common base $B$, write $F=\operatorname{fib}(A\to B)$ and $F'=\operatorname{fib}(A'\to B)$. The defining fiber square is also a pushout, so $B\simeq A\sqcup_F0$. Pasting pushouts gives $B\sqcup_A0\simeq0\sqcup_F0=F[1]$. The resulting cofiber square is also a pullback by stability, hence $A\simeq\operatorname{fib}(B\to F[1])$, naturally in the map over $B$. The same holds for $A'$. If $F\to F'$ is an equivalence, these two coherent pullback diagrams are equivalent and so are $A$ and $A'$. Apply this with $A=K(X)$, $A'=P$ and $B=K(U)$. Thus the restriction square is homotopy cartesian, even for non-quasi-compact $S$. [F1, F8, step 5.1]

7.1 Write $V=\operatorname{Spec}A$ with $A=k[t_1,\ldots,t_n]/I$ as in steps 1.1 and [F7]. Since $x\in V$, $A\ne0$ and $I$ is proper. By [F7], $A$ is Noetherian, $V$ is a Noetherian scheme with Noetherian underlying space, and $\dim V=\dim A\leq n$. By smoothness of $V$, the geometric-regularity clause of [F5] with extension $k/k$ makes every local ring regular, in exactly the absolute sense needed in [F3]. Thus all ambient hypotheses of dévissage hold. The residue immersion $\operatorname{Spec}\kappa(x)\hookrightarrow V$ from [F3] and [F9] is closed with underlying set $\{x\}$. Dévissage gives $\pi_0K_{\{x\}}(V)\cong G_0(\kappa(x))$. By [F9], dimension descends to this group and every generator satisfies $[W]=\dim(W)[\kappa(x)]$; conversely $\dim[\kappa(x)]=1$. Thus dimension is an isomorphism with $\mathbb Z$, with inverse $1\mapsto[\kappa(x)]$. This is also the $K_0(\kappa(x))$ presentation in the Statement. Combine it with the compatible equivalences in step 5.1 to obtain all the stated isomorphisms. [A1, F3, F5, F7, F9, step 1.1, step 5.1, step 6.1]

8.1 Let $i:\operatorname{Spec}\kappa(x)\hookrightarrow X$ be the closed residue immersion in [F9], and $E=i_*\kappa(x)[0]$ its residue sheaf in degree zero. Explicitly its sections on an open $W$ are $\kappa(x)$ if $x\in W$, and zero otherwise, with scalar action through the residue map. Its restriction to $V$ is perfect by the Koszul resolution in [F3], applied only to the finite-type scheme $V$; its restriction to $U$ is zero, hence perfect. Since $V\cup U=X$, [F4] makes this fixed object perfect on $X$. Its cohomology stalks vanish away from $x$, so it belongs to the supported perfect category. The inverse in dévissage sends $[\kappa(x)]$ to this residue-sheaf class on $V$, and naturality of localization and restriction in [F2] identifies the supported class on $X$ with its restriction there. Its support-to-global image is the class of the same perfect object on $X$. It is therefore the inverse image of $1$ under the asserted isomorphisms. This image can vanish, so no support-to-global injectivity is used. [A1, F1, F2, F3, F4, F9, step 7.1] ∎
