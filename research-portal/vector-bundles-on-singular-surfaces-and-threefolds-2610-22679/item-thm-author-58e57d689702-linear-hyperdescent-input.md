---
title: Exact linear hyperdescent and derived-localization input
status: published
research_item: thm-author-58e57d689702-linear-hyperdescent-input
dependency_level: 1
sources:
  references:
    - title: Utsav Choudhury and Martin Gallauer Alves de Souza, Homotopy theory of dg
        sheaves
      url: https://arxiv.org/pdf/1511.02828v1
      locator: §3 pp.8–12, including Corollary 3.1, Definition 3.7, Example 3.8, Fact
        3.10 and Lemma 3.16; §5.1 Definitions 5.1 and 5.3 pp.17–18; Remark 5.4,
        Definition 5.6 and Theorem 5.7 p.18; Lemma 5.10 p.19; Fact 5.15 p.22
      statement: The projective model on unbounded presheaf complexes is proper and
        combinatorial. Bounded-below chain complexes of projective presheaves
        are cofibrant, and dg mapping complexes from cofibrant domains compute
        derived maps. Its cohomology-sheaf localization has precisely
        hypercover-descent local objects and is equivalent, by sheafification,
        to the derived category of sheaves.
      hypotheses: A small Grothendieck site, a commutative unital coefficient ring,
        and fixed size conventions. No boundedness, finite-dimensionality or
        enough-points assumption.
      reading_limits: Read §3 setup, Corollary 3.1, Definition 3.7, Example 3.8, Fact
        3.10 and Lemma 3.16 with their printed proof text; §5.1 definitions and
        totalization description, Remark 5.4, Definition 5.6, Theorem 5.7, Lemma
        5.10 with its displayed proof, and the setup and statement of Fact 5.15
        in this session. Existence and the deeper localization/model-comparison
        proofs are imported, not reconstructed. The retrieved PDF has an arXiv
        v1 header and an internal June 11, 2019 date; remote bytes are not
        pinned. Homological indices are reindexed by C_n=C^{-n}.
    - title: "The Stacks Project, Section 18.11: Sheafification of presheaves of
        modules"
      url: https://stacks.math.columbia.edu/tag/03CX
      locator: Lemmas 18.11.1 and 18.11.2 and the adjunction paragraph between them
      statement: For a presheaf of rings O, sheafification of O-modules is exact and
        left adjoint to the inclusion with restriction from modules over
        O-sharp.
      hypotheses: A site and a presheaf of rings; apply to the constant presheaf with
        value Lambda. Its sheafification is the constant ring sheaf
        underline-Lambda.
      reading_limits: Read the two statements, the intervening adjunction and the
        printed exactness proof. Lemma 18.11.1 has an omitted proof; underlying
        abelian-sheaf sheafification results are imported. Online tagged text
        read this session, no revision pinned.
    - title: "The Stacks Project, Lemma 18.14.1: The abelian category of sheaves of
        modules"
      url: https://stacks.math.columbia.edu/tag/03DA
      locator: Lemma 18.14.1, statement and proof
      statement: Modules over a sheaf of rings on a site form an abelian category,
        with exact forgetful functor to abelian sheaves.
      hypotheses: A ringed site or ringed topos; here use the sheafification of the
        constant ring presheaf Lambda.
      reading_limits: Read the statement and printed proof reducing the claim to
        kernels, cokernels and the abelian-sheaf result. Those underlying
        results are imported. Online tagged text read this session, no revision
        pinned.
    - title: "The Stacks Project, Section 21.19: Cohomology of unbounded complexes"
      url: https://stacks.math.columbia.edu/tag/07A5
      locator: Opening paragraphs before Lemma 21.19.1, especially additive-functor
        clause (2) and RF(F)=F(I)
      statement: Every unbounded complex of modules on a ringed site admits a
        functorial K-injective resolution. Any additive functor to an abelian
        category has a right derived functor computed on these resolutions.
      hypotheses: A ringed site with fixed size bounds, standard Choice foundations,
        and an additive functor into an abelian category; here the constant ring
        sheaf and the sheaf inclusion into presheaves.
      reading_limits: Read the opening existence and derived-functor construction,
        including clause (2), in this session. The cited general
        Grothendieck-category K-injective existence theorem is imported; its
        transfinite proof is not reconstructed. No boundedness assumption is
        added. Online tagged text, no revision pinned.
    - title: "The Stacks Project, Section 13.31: K-injective complexes"
      url: https://stacks.math.columbia.edu/tag/070G
      locator: Definition 13.31.1 and Lemma 13.31.2, including the displayed proof
      statement: A K-injective complex receives no nonzero homotopy-class map from an
        acyclic complex. Maps into it in the derived category are exactly maps
        in the homotopy category.
      hypotheses: An abelian category; K-injectivity of the target complex. Use this
        both for sheaves and, after the exact-adjunction argument, for
        presheaves.
      reading_limits: Read the definition, all three equivalent clauses of Lemma
        13.31.2 and its proof in this session. General cone and roof facts
        invoked there remain imported. Existence is supplied separately by
        Section 21.19. Online tagged text, no revision pinned.
    - title: Clark Barwick, On (enriched) left Bousfield localizations of model
        categories
      url: https://arxiv.org/pdf/0708.2067v2
      locator: §2 Definition 2.6 pp.15–16; §2.8 p.16; Theorem 2.11 pp.17–18
      statement: Left Bousfield localization at a small set of maps exists for a left
        proper combinatorial model category; its fibrant objects are the
        original fibrant local objects.
      hypotheses: Fixed universe; a left proper combinatorial model category and a
        small set of homotopy classes of maps. Apply to the projective
        presheaf-complex model and all integer shifts of the linearized
        covering-sieve maps.
      reading_limits: Read Definition 2.6, §2.8, the full statement and displayed
        proof of Theorem 2.11 in this session. Its recognition and accessibility
        inputs are imported. The left-properness hypothesis in §2.8 is retained.
        Retrieved header identifies v2; deeper localization foundations are not
        reconstructed.
    - title: Daniel Dugger, Sharon Hollander and Daniel C. Isaksen, Hypercovers and
        simplicial presheaves
      url: https://arxiv.org/pdf/math/0205027v2
      locator: "Appendix A p.34: Čech-complex definition, Proposition A.1 with proof,
        and the following covering-sieve localization discussion"
      statement: The Čech nerve of a family of representables maps objectwise weakly
        equivalently to its generated sieve; this permits covering-sieve
        generators for ordinary Čech localization.
      hypotheses: A small Grothendieck site; products in presheaves; a family of
        arrows with common representable target. Its generated sieve must cover
        when used as a localization generator.
      reading_limits: Read the nerve definition, Proposition A.1 and its proof and the
        subsequent sieve-generator discussion in this session. This is a
        simplicial-set result, not an imported linear or unbounded theorem. The
        free-module chain comparison needed here is verified locally in Proof
        2.1. No claim is made to have read or reconstructed the entire Appendix.
---

PDF p. 6: Proposition 2.6 proof

## Prerequisites

- [def-author-cf6ede58b450-site-plus-data](item-def-author-cf6ede58b450-site-plus-data)
- [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-commutative-ring](https://alphabetamath.cc/item/def-commutative-ring)
- [math:thm-universal-property-of-free-modules](https://alphabetamath.cc/item/thm-universal-property-of-free-modules)
- [math:def-presheaf-representable-functor-and-representation](https://alphabetamath.cc/item/def-presheaf-representable-functor-and-representation)
- [math:def-cochain-complex-in-an-abelian-category](https://alphabetamath.cc/item/def-cochain-complex-in-an-abelian-category)
- [math:def-cochain-map](https://alphabetamath.cc/item/def-cochain-map)
- [math:def-cohomology-object-of-a-cochain-complex](https://alphabetamath.cc/item/def-cohomology-object-of-a-cochain-complex)
- [math:def-quasi-isomorphism](https://alphabetamath.cc/item/def-quasi-isomorphism)
- [math:def-derived-category-of-an-abelian-category](https://alphabetamath.cc/item/def-derived-category-of-an-abelian-category)
- [math:def-localization-of-a-category-at-a-class-of-morphisms](https://alphabetamath.cc/item/def-localization-of-a-category-at-a-class-of-morphisms)
- [math:def-model-category-and-quillen-adjunction](https://alphabetamath.cc/item/def-model-category-and-quillen-adjunction)
- [math:def-simplicial-object-and-simplicial-commutative-ring](https://alphabetamath.cc/item/def-simplicial-object-and-simplicial-commutative-ring)
- [math:def-product-total-complex-of-a-double-complex](https://alphabetamath.cc/item/def-product-total-complex-of-a-double-complex)
- [math:def-adjunction-by-unit-counit-and-triangle-identities](https://alphabetamath.cc/item/def-adjunction-by-unit-counit-and-triangle-identities)
- [math:thm-modules-over-a-ring-form-an-abelian-category](https://alphabetamath.cc/item/thm-modules-over-a-ring-form-an-abelian-category)
- [` Utsav Choudhury and Martin Gallauer Alves de Souza, Homotopy theory of dg sheaves · §3 pp.8–12, including Corollary 3.1, Definition 3.7, Example 3.8, Fact 3.10 and Lemma 3.16; §5.1 Definitions 5.1 and 5.3 pp.17–18; Remark 5.4, Definition 5.6 and Theorem 5.7 p.18; Lemma 5.10 p.19; Fact 5.15 p.22 `](https://arxiv.org/pdf/1511.02828v1)
- [` The Stacks Project, Section 18.11: Sheafification of presheaves of modules · Lemmas 18.11.1 and 18.11.2 and the adjunction paragraph between them `](https://stacks.math.columbia.edu/tag/03CX)
- [` The Stacks Project, Lemma 18.14.1: The abelian category of sheaves of modules · Lemma 18.14.1, statement and proof `](https://stacks.math.columbia.edu/tag/03DA)
- [` The Stacks Project, Section 21.19: Cohomology of unbounded complexes · Opening paragraphs before Lemma 21.19.1, especially additive-functor clause (2) and RF(F)=F(I) `](https://stacks.math.columbia.edu/tag/07A5)
- [` The Stacks Project, Section 13.31: K-injective complexes · Definition 13.31.1 and Lemma 13.31.2, including the displayed proof `](https://stacks.math.columbia.edu/tag/070G)
- [` Clark Barwick, On (enriched) left Bousfield localizations of model categories · §2 Definition 2.6 pp.15–16; §2.8 p.16; Theorem 2.11 pp.17–18 `](https://arxiv.org/pdf/0708.2067v2)
- [` Daniel Dugger, Sharon Hollander and Daniel C. Isaksen, Hypercovers and simplicial presheaves · Appendix A p.34: Čech-complex definition, Proposition A.1 with proof, and the following covering-sieve localization discussion `](https://arxiv.org/pdf/math/0205027v2)


## Statement
Assume the Axiom of Choice and the fixed-universe conventions below. Let $\mathcal C$ be a small Grothendieck site and $\Lambda$ a commutative unital ring. The localization of presheaves of unbounded $\Lambda$-module complexes at maps inducing isomorphisms on every associated cohomology sheaf exists. Its local objects are exactly the presheaves satisfying descent for every hypercover, and its homotopy category is $D(\operatorname{Sh}(\mathcal C,\Lambda))$. Writing $a$ for degreewise sheafification and $i$ for the sheaf inclusion, the reflector on $D(\operatorname{PSh}(\mathcal C,\Lambda))$ is $L^h=Ri\,a$: sheafify exactly, take a K-injective sheaf resolution, and regard that resolution as a presheaf complex. Hypercover descent uses the derived product totalization specified below. Every hypercomplete local object is ordinary covering-family/Čech local. No boundedness, finite dimension or enough-points hypothesis is imposed.

## Statement references
[def-author-cf6ede58b450-site-plus-data](item-def-author-cf6ede58b450-site-plus-data)

[math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[math:def-commutative-ring](https://alphabetamath.cc/item/def-commutative-ring)

[math:thm-universal-property-of-free-modules](https://alphabetamath.cc/item/thm-universal-property-of-free-modules)

[math:def-presheaf-representable-functor-and-representation](https://alphabetamath.cc/item/def-presheaf-representable-functor-and-representation)

[math:def-cochain-complex-in-an-abelian-category](https://alphabetamath.cc/item/def-cochain-complex-in-an-abelian-category)

[math:def-cochain-map](https://alphabetamath.cc/item/def-cochain-map)

[math:def-cohomology-object-of-a-cochain-complex](https://alphabetamath.cc/item/def-cohomology-object-of-a-cochain-complex)

[math:def-quasi-isomorphism](https://alphabetamath.cc/item/def-quasi-isomorphism)

[math:def-derived-category-of-an-abelian-category](https://alphabetamath.cc/item/def-derived-category-of-an-abelian-category)

[math:def-localization-of-a-category-at-a-class-of-morphisms](https://alphabetamath.cc/item/def-localization-of-a-category-at-a-class-of-morphisms)

[math:def-model-category-and-quillen-adjunction](https://alphabetamath.cc/item/def-model-category-and-quillen-adjunction)

[math:def-simplicial-object-and-simplicial-commutative-ring](https://alphabetamath.cc/item/def-simplicial-object-and-simplicial-commutative-ring)

[math:def-product-total-complex-of-a-double-complex](https://alphabetamath.cc/item/def-product-total-complex-of-a-double-complex)

[math:def-adjunction-by-unit-counit-and-triangle-identities](https://alphabetamath.cc/item/def-adjunction-by-unit-counit-and-triangle-identities)

[math:thm-modules-over-a-ring-form-an-abelian-category](https://alphabetamath.cc/item/thm-modules-over-a-ring-form-an-abelian-category)

## Definition
Fix Grothendieck universes $\mathbb U\in\mathbb V$ with $\omega\in\mathbb U$. The objects and arrows of $\mathcal C$, the ring $\Lambda$, all module values and all indexing sets used for a single cover or hypercover are $\mathbb U$-small. Ambient categories and their localizations are formed in $\mathbb V$. The categories of complexes here are $\mathbb V$-small: each object and each morphism is coded by $\mathbb U$-small data. This meets the size condition of the declared derived-category interface; it does not assert existence of universes. Grothendieck topology, covering sieve, matching family and sheaf have the meanings of the small-site definition.

Put $\mathcal A=\operatorname{PSh}(\mathcal C,\Lambda)$, the category of contravariant functors from $\mathcal C$ to $\Lambda$-modules and $\Lambda$-linear natural transformations, and let $\mathcal B=\operatorname{Sh}(\mathcal C,\Lambda)$ be its full subcategory satisfying the sheaf condition on underlying sets. The presheaf category is abelian with kernels and cokernels computed objectwise; this follows by applying the module kernel and cokernel constructions to each restriction map. Write $\Lambda_{\mathrm{pre}}$ for the constant ring presheaf and $\underline\Lambda=a\Lambda_{\mathrm{pre}}$ for its associated ring sheaf. A sheaf in $\mathcal B$ is equivalently a sheaf of $\underline\Lambda$-modules: its constant $\Lambda$-action extends uniquely through sheafification, and restriction recovers the original action. Thus $a:\mathcal A\to\mathcal B$ and $i:\mathcal B\to\mathcal A$ are the exact-left-adjoint/sheaf-inclusion pair of the site module theorem, with $ai\cong\mathrm{id}_{\mathcal B}$; $i$ is left exact, not assumed exact.

Use unbounded cochains, their cochain maps and cohomology objects. A quasi-isomorphism induces isomorphisms on all cohomology objects. Write $K(\mathcal A)$ for cochain maps modulo homotopy, where a homotopy has degree $-1$ and $f-g=ds+sd$, and put $D(\mathcal A)=K(\mathcal A)[\mathrm{qis}^{-1}]$; use the same conventions for $\mathcal B$. A complex is acyclic when all its cohomology objects vanish. A complex $J$ is K-injective when $\operatorname{Hom}_{K}(M,J)=0$ for every acyclic $M$; a K-injective resolution is a quasi-isomorphism into such a complex. Set $W=\{f:aH^n(f)\text{ is an isomorphism for every }n\in\mathbb Z\}$. Locality for a class of maps means that precomposition induces bijections on derived Hom groups into every integer shift of the local object. Reflector means left adjoint to inclusion of the full subcategory of local objects; the projective model used here has objectwise quasi-isomorphisms as weak equivalences and objectwise degreewise surjections as fibrations before localization.

For $U\in\mathcal C$, write $h_U(V)=\operatorname{Hom}_{\mathcal C}(V,U)$. A hypercover $H_\bullet\to h_U$ is an augmented simplicial presheaf of sets, each $H_n$ a $\mathbb U$-small coproduct of representables, whose maps $H_n\to M_n$ become epimorphisms after set-sheafification. Here $M_0=h_U$ and $M_n$ is the presheaf limit of the compatible proper faces in degrees below $n$, including their augmentations. For $H_n=\coprod_\alpha h_{V_{n\alpha}}$, set $P(H_n)=\prod_\alpha P(V_{n\alpha})$. Descent means that $P(U)\to\operatorname{Tot}^{\Pi}P(H_\bullet)$ is a quasi-isomorphism. Explicitly, $\operatorname{Tot}^{\Pi}P(H_\bullet)^m=\prod_{p\geq0}P(H_p)^{m-p}$, with differential $(Dx)_p=\delta x_{p-1}+(-1)^p d_Px_p$, where $x_{-1}=0$ and $\delta$ is the alternating coface sum. This is the cochain reindexing of the product-total convention; $\delta^2=0$ and $d_P\delta=\delta d_P$ give $D^2=0$. In the cited model, this product total computes derived evaluation on the hypercover, so no underived infinite-sum totalization is substituted.

## Localization convention
For a set presheaf $S$, let $\Lambda[S](V)$ be the free $\Lambda$-module on $S(V)$, with restrictions induced by those of $S$. Define $L^o$ as localization at all maps $\Lambda[R][n]\to\Lambda[h_U][n]$, for covering sieves $R\subset h_U$ and $n\in\mathbb Z$. These form a set in the fixed universe. Thus ordinary locality is precisely derived descent for those sieve maps.

This is also the derived Čech convention on an arbitrary site. For a family $\{U_\alpha\to U\}$ generating a covering sieve $R$, put $S=\coprod_\alpha h_{U_\alpha}$ and $C(S)_n=S\times_{h_U}\cdots\times_{h_U}S$ with $n+1$ factors, all products being taken in presheaves. Let $\Lambda[C(S)]$ be its free-module Moore complex, with term $\Lambda[C(S)_n]$ in cochain degree $-n$ and alternating face differential. Ordinary descent requires the augmentation to induce bijections $\operatorname{Hom}_{D(\mathcal A)}(\Lambda[h_U],P[k])\to\operatorname{Hom}_{D(\mathcal A)}(\Lambda[C(S)],P[k])$ for every $k$. Proof 2.1 identifies these generators with the sieve generators. If the intersections are representable this is the familiar product-totalized cosimplicial evaluation diagram; otherwise the displayed derived Hom convention supplies the evaluation. A Čech nerve need not have representable intersections on an arbitrary site, so the comparison below uses sieve generators rather than assuming every such nerve has the representable levels of the chosen hypercover definition. The superscript $h$ denotes localization at $W$; no equivalence $L^oP\simeq L^hP$ for arbitrary unbounded $P$ is asserted.

## External input
The imported premises have the statements, hypotheses and reading limits recorded in sources.references. Choudhury–Gallauer supplies the projective model, hypercover criterion and derived-sheaf comparison. Stacks Lemmas 18.11.1–18.11.2 and 18.14.1 supply exact site sheafification, its adjunction and the abelian sheaf-module category. Stacks §21.19 supplies unbounded K-injective resolutions and derived-functor computation for the ringed site $(\mathcal C,\underline\Lambda)$, and Lemma 13.31.2 supplies computation of derived maps into K-injectives. Barwick supplies existence of set-generated localization, applied to the left proper combinatorial projective model of Choudhury–Gallauer. Dugger–Hollander–Isaksen supplies the set-valued Čech nerve and its factorization through the generated sieve. Their simplicial-set statement is not being used as an unproved claim about arbitrary linear complexes. The reflector calculation and the linear Čech comparison below are local arguments using these premises; they are not attributed to a single imported theorem.

## Facts & Assumptions
**Given:** The site, coefficient ring, universes and Choice in the Statement and Definition.

**Goal:** Retain the hypercover localization and prove the reflector formula and its ordinary-locality comparison.

[A1] Choice is retained for the imported resolution/model existence results and for selecting lifts in the Čech-chain contraction in step 2.1. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F1] Site module sheafification is exact, $a\dashv i$ and $ai\cong\mathrm{id}$; $\mathcal B$ is abelian, by the cited Stacks site-module results. The underlying site and sheaf conventions are supplied by [def-author-cf6ede58b450-site-plus-data](item-def-author-cf6ede58b450-site-plus-data). The pointwise presheaf argument uses the abelian module category supplied by [math:thm-modules-over-a-ring-form-an-abelian-category](https://alphabetamath.cc/item/thm-modules-over-a-ring-form-an-abelian-category).

[F2] The cited Stacks results give K-injective resolutions in $\mathcal B$, the computation of right derived functors on them, and the identification of derived maps into K-injectives with homotopy classes of maps.

[F3] The cited Choudhury–Gallauer results give the projective model, the $W$-localization, its hypercover-descent objects and the comparison with $D(\mathcal B)$. Example 3.8, Fact 3.10 and Lemma 3.16 also supply projectivity of sums of free representables, cofibrancy of bounded-above cochain complexes of these, and computation of derived mapping objects by their dg Hom complexes. Model-category terminology is supplied by [math:def-model-category-and-quillen-adjunction](https://alphabetamath.cc/item/def-model-category-and-quillen-adjunction).

[F4] The cited Barwick set-localization theorem applies to a left proper combinatorial model category. Covering-sieve inclusions on the small category, together with integer shifts, give a small set of maps. Testing all these shifts gives the derived-Hom locality above: by the cited dg mapping computation, the cohomology groups of a derived mapping complex are the corresponding shifted derived Hom groups.

[F5] The free-module universal property is supplied by [math:thm-universal-property-of-free-modules](https://alphabetamath.cc/item/thm-universal-property-of-free-modules). For a sheaf $F$, linear presheaf maps $\Lambda[R]\to iF$ are exactly its matching families on $R$, and those on $h_U$ are exactly sections of $F$ over $U$.

[F6] The cited Čech construction has an augmentation through the generated sieve; its presheaf fibre products exist without assuming fibre products in $\mathcal C$.

## Proof
1.1 By [F1], $H^n(aP)=aH^n(P)$, so $W$ consists precisely of the maps whose sheafifications are quasi-isomorphisms. Let $Q\to J$ be a K-injective sheaf resolution from [F2]. For every acyclic presheaf complex $M$, exactness of $a$ and the adjunction on cochain maps and homotopies give $\operatorname{Hom}_{K(\mathcal A)}(M,iJ)=\operatorname{Hom}_{K(\mathcal B)}(aM,J)=0$; hence $iJ$ is K-injective in $\mathcal A$. Applying the derived-map computation in [F2] on both sides gives $\operatorname{Hom}_{D(\mathcal A)}(P,iJ)=\operatorname{Hom}_{K(\mathcal A)}(P,iJ)=\operatorname{Hom}_{K(\mathcal B)}(aP,J)=\operatorname{Hom}_{D(\mathcal B)}(aP,Q)$, naturally. Thus $a\dashv Ri$, with $Ri(Q)$ represented by $iJ$ and counit $aRi(Q)\simeq Q$ because $aiJ=J$. In particular $\operatorname{Hom}(RiQ,RiQ')=\operatorname{Hom}(aRiQ,Q')=\operatorname{Hom}(Q,Q')$, so $Ri$ is fully faithful. Its image is $W$-local by this adjunction, and the unit $P\to Ri(aP)$ belongs to $W$, since applying $a$ gives the chosen sheaf resolution. The unit therefore exhibits $Ri\,a$ as the reflector into $W$-local objects. This verifies the formula rather than merely identifying its target category. Finally [F3], reindexed from chains by $C_n=C^{-n}$, identifies these local objects with the displayed hypercover-descent objects and identifies the localized homotopy category with $D(\mathcal B)$. [F1, F2, F3, A1]

2.1 The projective model is left proper and combinatorial by [F3]; hence [F4] gives $L^o$ for the stated set of shifted sieve maps. For each cover $R\subset h_U$ and every sheaf $F$, adjunction and [F5] identify precomposition by $a\Lambda[R]\to a\Lambda[h_U]$ with the bijection $F(U)\to\operatorname{Match}(R,F)$. A map inducing bijections into every $F$ is invertible: take $F$ first to be its domain to obtain a left inverse and then its codomain to check that this is a right inverse. Thus this sheafified map is an isomorphism and each ordinary generator lies in $W$. Every $W$-local object is consequently ordinary local. To check the Čech description, evaluate [F6] at any $V$. The fibre of $S(V)\to R(V)$ over each $r$ is a nonempty set $T_r$ of lifts; the fibre of $C(S)_n(V)$ is $T_r^{n+1}$. Choose $t_r\in T_r$ using [A1]. Inserting $t_r$ as the first coordinate defines the degree-raising homotopy on its augmented free chain complex, including the augmentation generator in chain degree $-1$; the alternating face formula gives $\partial h+h\partial=1$. Hence $\Lambda[C(S)]\to\Lambda[R]$ is an objectwise quasi-isomorphism. Naturality of the augmentation suffices; the chosen contractions need not be natural in $V$. Derived maps out of these two complexes therefore coincide, proving that the stated derived Čech and sieve localities agree. This also explains the usual evaluation totalization when the nerve levels are coproducts of representables: their free-module complexes are bounded above complexes of projective presheaves, hence projective cofibrant by the imported Fact 3.10 after reindexing; the dg Hom computation of [F3] then computes these derived maps. The implication proved here is from hypercover locality to ordinary locality and supplies no converse for unbounded inputs. [F1, F3, F4, F5, F6, A1, step 1.1] ∎
