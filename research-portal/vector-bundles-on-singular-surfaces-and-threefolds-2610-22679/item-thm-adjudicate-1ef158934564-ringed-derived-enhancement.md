---
title: Derived enhancements of module sheaves on ringed spaces
status: published
research_item: thm-adjudicate-1ef158934564-ringed-derived-enhancement
dependency_level: 0
sources:
  references:
    - title: The Stacks Project, Remark 19.13.3 (079Q)
      url: https://stacks.math.columbia.edu/tag/079Q
      locator: Remark 19.13.3, both paragraphs and displayed Hom formula
      statement: Module sheaves on a ringed site form a Grothendieck abelian category.
        For a Grothendieck abelian category, a K-injective replacement of the
        target computes ordinary derived Hom as Hom in the homotopy category.
      hypotheses: A small ringed site with module sheaves in the fixed base universe;
        for the Hom assertion, unbounded complexes in a Grothendieck abelian
        category.
      reading_limits: Read the complete remark and its displayed formula on
        2026-11-12. The cited K-injective existence theorem and its construction
        are imported, not reconstructed.
    - title: "Jacob Lurie, Higher Algebra (September 18, 2017): unbounded derived
        construction"
      url: https://www.math.ias.edu/~lurie/papers/HA.pdf
      locator: Definition 1.3.5.8; Proposition 1.3.5.9; Lemma 1.3.5.11; Propositions
        1.3.5.13–15 and 1.3.5.21(1), printed pp. 125–129
      statement: For a Grothendieck abelian category in Definition 1.3.5.1, the
        unbounded derived infinity-category is stable and presentable. It is the
        quasi-isomorphism localization of ordinary complexes and the reflective
        localization of their differential graded nerve. It is modeled by
        fibrant complexes; mapping complexes from acyclic complexes into these
        are acyclic, and each complex has a quasi-isomorphic fibrant
        replacement.
      hypotheses: A Grothendieck abelian category in the fixed base universe; category
        objects and localization may be viewed in a larger universe. No
        boundedness or projective hypothesis.
      reading_limits: Read these statements, the proofs of 1.3.5.9, 1.3.5.11,
        1.3.5.13–15 and 1.3.5.21, and the discussion preceding 1.3.5.15 on
        2026-11-12. The model structure and replacement machinery are imported;
        their foundational proofs were not reconstructed.
    - title: "Jacob Lurie, Higher Algebra: localization, differential graded nerves,
        and cofibers"
      url: https://www.math.ias.edu/~lurie/papers/HA.pdf
      locator: Definition 1.1.1.9; §1.1.4 opening and Proposition 1.1.4.1; Definition
        1.3.1.1, Construction 1.3.1.6, Remarks 1.3.1.9 and 1.3.1.11, and
        functoriality discussion 1.3.1.18–20; Definition 1.3.2.1 and Remark
        1.3.2.2; Remark 1.3.2.17; Definition 1.3.4.1
      statement: Localization is universal on full functor infinity-categories,
        including natural transformations. Differential graded functors induce
        functors of differential graded nerves; in the nerve of complexes, edges
        are chain maps and their homotopies are chain homotopies. The canonical
        mapping-cone square is a cofiber square. A stable infinity-category has
        a zero object and fibers and cofibers with coincident fiber and cofiber
        sequences; preserving zero objects and cofiber sequences is the
        exactness condition, equivalently preservation of finite limits and
        finite colimits.
      hypotheses: For localization, an infinity-category and a collection of edges,
        with larger universes as necessary. For complexes, an additive category;
        for exactness, source and target stable infinity-categories.
      reading_limits: Read the stated localization definition, stability definition
        and exactness discussion with Proposition 1.1.4.1 and its proof, the
        differential graded nerve construction and functoriality discussion,
        Definition 1.3.2.1, Remark 1.3.2.2 and the cone square of Remark
        1.3.2.17 on 2026-11-12. The Joyal model structure and nerve comparison
        theorems are imported, not reconstructed.
    - title: "Jacob Lurie, Higher Topos Theory: higher categorical formulation and
        preservation of colimits"
      url: https://www.math.ias.edu/~lurie/papers/HTT.pdf
      locator: Definition 1.1.2.4 and Example 1.1.2.6; §1.2.3, Proposition 1.2.3.1 and
        the following generators-and-relations description; Notation 1.2.7.2;
        Proposition 5.2.3.5; Definition 5.4.2.1 and Proposition 5.4.2.2;
        Definition 5.5.0.1
      statement: Infinity-categories are simplicial sets with inner horn fillers;
        ordinary categories enter by their nerves. The homotopy category has
        vertices as objects and homotopy classes of edges as arrows. Fun(C,E) is
        the simplicial mapping object; its edges are natural transformations.
        Presentable means accessible and admitting small colimits. Accessibility
        means generation under small kappa-filtered colimits by an essentially
        small collection of kappa-compact objects, for some regular kappa. Left
        adjoints preserve all existing colimits.
      hypotheses: The specified infinity-categories, with smallness, colimits and
        accessibility measured in the chosen base universe; the functor
        categories are formed in a larger universe. For colimit preservation, a
        functor admitting a right adjoint.
      reading_limits: Read the listed definitions, example, Proposition 1.2.3.1 with
        the displayed presentation, Notation 1.2.7.2 and the statements of
        Propositions 5.2.3.5 and 5.4.2.2 on 2026-11-12. These formulation
        interfaces are imported; their general existence and comparison
        machinery is not reproved.
    - title: Tibor Beke, Sheafifiable homotopy model categories (September 17, 2000
        manuscript)
      url: https://faculty.uml.edu/tbeke/sheafi.pdf
      locator: Proposition 3.10 and its proof, printed pp. 24–25
      statement: For an AB5 abelian category, being cocomplete with a generator is
        equivalent to being locally presentable. This bridges the published
        AB5-and-generator convention to Higher Algebra Definition 1.3.5.1.
      hypotheses: An abelian category satisfying AB5, with cocompleteness, generator
        and local presentability understood relative to the same base universe.
      reading_limits: Read Proposition 3.10 and its proof on 2026-11-12.
        Gabriel–Popescu and the orthogonal reflection theorem invoked there are
        imported through this proposition, not reconstructed.
---

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)
- [math:def-ringed-space](https://alphabetamath.cc/item/def-ringed-space)
- [math:def-module-on-ringed-space](https://alphabetamath.cc/item/def-module-on-ringed-space)
- [math:def-grothendieck-category](https://alphabetamath.cc/item/def-grothendieck-category)
- [math:def-category-of-chain-complexes](https://alphabetamath.cc/item/def-category-of-chain-complexes)
- [math:def-quasi-isomorphism](https://alphabetamath.cc/item/def-quasi-isomorphism)
- [math:def-derived-category-of-an-abelian-category](https://alphabetamath.cc/item/def-derived-category-of-an-abelian-category)
- [math:def-exact-functor-between-abelian-categories](https://alphabetamath.cc/item/def-exact-functor-between-abelian-categories)
- [math:def-natural-transformation](https://alphabetamath.cc/item/def-natural-transformation)
- [math:prop-an-additive-functor-applies-degreewise-to-complexes-and-chain-maps](https://alphabetamath.cc/item/prop-an-additive-functor-applies-degreewise-to-complexes-and-chain-maps)
- [math:cor-an-exact-functor-preserves-and-reflects-quasi-isomorphisms-when-conservative](https://alphabetamath.cc/item/cor-an-exact-functor-preserves-and-reflects-quasi-isomorphisms-when-conservative)
- [math:prop-an-exact-functor-carries-mapping-cone-sequences-to-mapping-cone-sequences](https://alphabetamath.cc/item/prop-an-exact-functor-carries-mapping-cone-sequences-to-mapping-cone-sequences)
- [` The Stacks Project, Remark 19.13.3 (079Q) · Remark 19.13.3, both paragraphs and displayed Hom formula `](https://stacks.math.columbia.edu/tag/079Q)
- [` Jacob Lurie, Higher Algebra (September 18, 2017): unbounded derived construction · Definition 1.3.5.8; Proposition 1.3.5.9; Lemma 1.3.5.11; Propositions 1.3.5.13–15 and 1.3.5.21(1), printed pp. 125–129 `](https://www.math.ias.edu/~lurie/papers/HA.pdf)
- [` Jacob Lurie, Higher Algebra: localization, differential graded nerves, and cofibers · Definition 1.1.1.9; §1.1.4 opening and Proposition 1.1.4.1; Definition 1.3.1.1, Construction 1.3.1.6, Remarks 1.3.1.9 and 1.3.1.11, and functoriality discussion 1.3.1.18–20; Definition 1.3.2.1 and Remark 1.3.2.2; Remark 1.3.2.17; Definition 1.3.4.1 `](https://www.math.ias.edu/~lurie/papers/HA.pdf)
- [` Jacob Lurie, Higher Topos Theory: higher categorical formulation and preservation of colimits · Definition 1.1.2.4 and Example 1.1.2.6; §1.2.3, Proposition 1.2.3.1 and the following generators-and-relations description; Notation 1.2.7.2; Proposition 5.2.3.5; Definition 5.4.2.1 and Proposition 5.4.2.2; Definition 5.5.0.1 `](https://www.math.ias.edu/~lurie/papers/HTT.pdf)
- [` Tibor Beke, Sheafifiable homotopy model categories (September 17, 2000 manuscript) · Proposition 3.10 and its proof, printed pp. 24–25 `](https://faculty.uml.edu/tbeke/sheafi.pdf)


## Statement
Assume the Axiom of Choice and fix Grothendieck universes $\mathcal U\in\mathcal V$ with $\omega\in\mathcal U$. For any $\mathcal U$-small ringed space $(X,\mathcal O_X)$, let $\mathcal A_X=\mathrm{Mod}_{\mathcal U}(\mathcal O_X)$ denote all module sheaves with $\mathcal U$-small section sets. Then $\mathcal A_X$ is Grothendieck abelian. Its unbounded derived infinity-category $\mathcal D(X)$ is stable and presentable relative to $\mathcal U$ and is the infinity-localization of $\operatorname{Ch}(\mathcal A_X)$ at quasi-isomorphisms. Its homotopy category is the ordinary unbounded derived category $D(\mathcal A_X)$. Ordinary localizations and functor categories are interpreted in $\mathcal V$; the category of these complexes is $\mathcal V$-small, satisfying the ordinary derived-category interface's size condition. Chain and cochain conventions agree by $C_n=C^{-n}$, with the same differentials reindexed.

For any two such ringed spaces $X,Y$ and any exact additive functor $F:\mathcal A_X\to\mathcal A_Y$, degreewise application induces an actual exact infinity-functor $\mathcal D(F):\mathcal D(X)\to\mathcal D(Y)$. Every ordinary natural transformation $\alpha:F\Rightarrow G$ between two such exact functors induces a natural transformation $\mathcal D(\alpha):\mathcal D(F)\Rightarrow\mathcal D(G)$. These descents are determined up to the equivalences supplied by localization. No quasi-coherence or finiteness hypothesis is imposed.

## Facts & Assumptions
**Given:** The universes, ringed spaces and exact functors specified in the Statement.

[A1] Choice is retained for the imported unbounded resolution and model-category constructions. Universes are assumed to exist here, rather than deduced from Choice. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)

[F1] The formulation uses ringed spaces, their module sheaves, and Grothendieck abelian categories in the AB5-and-generator convention. [math:def-ringed-space](https://alphabetamath.cc/item/def-ringed-space) [math:def-module-on-ringed-space](https://alphabetamath.cc/item/def-module-on-ringed-space) [math:def-grothendieck-category](https://alphabetamath.cc/item/def-grothendieck-category)

[F2] Complexes and quasi-isomorphisms use the published chain conventions; $D(\mathcal A)$ is the quasi-isomorphism localization of the cochain homotopy category, subject to its stated size condition. [math:def-category-of-chain-complexes](https://alphabetamath.cc/item/def-category-of-chain-complexes) [math:def-quasi-isomorphism](https://alphabetamath.cc/item/def-quasi-isomorphism) [math:def-derived-category-of-an-abelian-category](https://alphabetamath.cc/item/def-derived-category-of-an-abelian-category)

[F3] Exact additive functors and ordinary natural transformations use their published definitions. [math:def-exact-functor-between-abelian-categories](https://alphabetamath.cc/item/def-exact-functor-between-abelian-categories) [math:def-natural-transformation](https://alphabetamath.cc/item/def-natural-transformation)

[F4] Additive functors apply degreewise to complexes and chain maps; exact functors preserve quasi-isomorphisms. Only the preservation assertion is used, with no conservativity assumption. [math:prop-an-additive-functor-applies-degreewise-to-complexes-and-chain-maps](https://alphabetamath.cc/item/prop-an-additive-functor-applies-degreewise-to-complexes-and-chain-maps) [math:cor-an-exact-functor-preserves-and-reflects-quasi-isomorphisms-when-conservative](https://alphabetamath.cc/item/cor-an-exact-functor-preserves-and-reflects-quasi-isomorphisms-when-conservative)

[F5] The natural biproduct comparison identifies $F(\operatorname{Cone}(f))$ with $\operatorname{Cone}(F(f))$, compatibly with the cone sequence. [math:prop-an-exact-functor-carries-mapping-cone-sequences-to-mapping-cone-sequences](https://alphabetamath.cc/item/prop-an-exact-functor-carries-mapping-cone-sequences-to-mapping-cone-sequences)

[F6] Stacks Remark 19.13.3 supplies the ringed-site module assertion and the ordinary derived Hom formula using K-injective resolutions. Here K-injective means that maps from any acyclic complex into any shift of the resolution vanish in the homotopy category. Beke Proposition 3.10 supplies local presentability of an AB5 category with a generator, so the Stacks convention meets Higher Algebra Definition 1.3.5.1.

[F7] Higher Algebra Definition 1.3.5.8, Proposition 1.3.5.9, Lemma 1.3.5.11 and Propositions 1.3.5.13–15 and 1.3.5.21 supply the unbounded stable presentable enhancement, its fibrant-complex model and its two localization descriptions. Lemma 1.3.5.11 makes the fibrant models K-injective; these imports include the existence of replacements.

[F8] Higher Algebra Definition 1.3.4.1 supplies the full functor-category universal property: precomposition by $q:\operatorname{Ch}(\mathcal A)\to\mathcal D(\mathcal A)$ identifies $\operatorname{Fun}(\mathcal D(\mathcal A),\mathcal E)$ with the full subcategory of $\operatorname{Fun}(N\operatorname{Ch}(\mathcal A),\mathcal E)$ consisting of functors inverting quasi-isomorphisms. Its differential graded nerve construction is functorial, and Remark 1.3.2.17 identifies the canonical cone square with a cofiber square. Combined with the reflective localization of [F7], which preserves colimits by Higher Topos Theory Proposition 5.2.3.5, this identifies the image of a chain-map cone square with its derived cofiber square. The stability and exactness conventions are Definition 1.1.1.9 and §1.1.4 with Proposition 1.1.4.1: preservation of zero objects and cofiber sequences is exactness.

[F9] Higher Topos Theory supplies the formulation interfaces for infinity-categories, ordinary nerves, homotopy categories and functor infinity-categories at Definition 1.1.2.4, Example 1.1.2.6, §1.2.3 and Notation 1.2.7.2. In particular, morphisms of functor infinity-categories are natural transformations. Definition 5.4.2.1, Proposition 5.4.2.2 and Definition 5.5.0.1 fix accessibility and presentability, always relative to $\mathcal U$ here. These definitions and the substantial results [F6]–[F8] are imported at the exact source contracts above; the following proof is the local application, not a reconstruction of those foundations.

## External input
Import the ringed-site and K-injective facts of Stacks 079Q, Beke Proposition 3.10, the Higher Algebra unbounded construction, localization and coherent cone interfaces, and the Higher Topos Theory formulation and adjoint facts specified in [F6]–[F9]. Their hypotheses and reading limits are recorded in the source contracts. These foundations are imported; the proof below locally composes them and checks functoriality.

## Proof

**Goal:** Establish the statement under its stated hypotheses.

Import the ringed-site and K-injective facts of Stacks 079Q, Beke Proposition 3.10, the Higher Algebra unbounded construction, localization and coherent cone interfaces, and the Higher Topos Theory formulation and adjoint facts specified in [F6]–[F9]. Their hypotheses and reading limits are recorded in the source contracts. These foundations are imported; the proof below locally composes them and checks functoriality.


**Proof technique:** direct composition of the stated imported interfaces and the published exact-functor results.

1.1 Regard $X$ as the small site of its open subsets, ordered by inclusion and covered by ordinary open covers, with the given structure sheaf. Its module sheaves are exactly those of [F1], so [F6] makes $\mathcal A_X$ Grothendieck and locally presentable in the convention needed for [F7]. Applying [F7] gives stability, presentability and the quasi-isomorphism localization. The same applies to $Y$. A module sheaf is encoded by its section sets and structure maps indexed by the $\mathcal U$-small set of opens; because $\mathcal U\in\mathcal V$, all these encodings, and their integer-indexed complexes, form sets in $\mathcal V$. Thus [F2]'s ordinary localization is formed from a $\mathcal V$-small category. For the comparison of homotopy categories, use the fibrant replacements of [F7]. Their maps in the homotopy category are chain-homotopy classes, and they are K-injective by the same input. The Hom formula in [F6] therefore identifies these mapping sets, compatibly with composition, with the ordinary derived Hom sets; every complex has a replacement. This gives $h\mathcal D(X)\simeq D(\mathcal A_X)$. Reindexing by $C_n=C^{-n}$ identifies the conventions without changing quasi-isomorphisms. All resolutions and model structures used here retain [A1]. [A1, F1, F2, F6, F7, F9]

2.1 By [F3]–[F4], degreewise $F$ is a functor on complexes preserving quasi-isomorphisms, so [F8] gives $\mathcal D(F)$ with $\mathcal D(F)q_X\simeq q_YF$. Degreewise $\alpha$ is a natural transformation since its components commute with every differential and chain map; composing with $q_Y$ gives a morphism in the functor category on $N\operatorname{Ch}(\mathcal A_X)$. The full faithfulness in [F8], applied with target $\mathcal D(Y)$, lifts this morphism to $\mathcal D(\alpha)$; no invertibility of its components is required. To check enhanced exactness, $F$ also acts on graded maps of complexes componentwise, preserving addition, composition and the differential $d(f)=d\circ f-(-1)^{|f|}f\circ d$. Thus it defines a differential graded functor and hence a functor on differential graded nerves by [F8]. It preserves the zero complex. Composing with target localization inverts quasi-isomorphisms, hence descends through the reflective localization of [F7]. On ordinary complexes it is $q_YF$, so the full faithfulness in [F8] identifies its descent with $\mathcal D(F)$. The cone comparison [F5] preserves the canonical nullhomotopy of $C\to D\to\operatorname{Cone}(f)$: its degree-$n$ map sends $x$ to $(0,x)$ in $\operatorname{Cone}(f)_{n+1}$, and the comparison carries its image under $F$ to that same coordinate map. Consequently it preserves the coherent cone square, whose localization is a cofiber square by [F8]. Every morphism in the fibrant-complex model of step 1.1 is a chain map; hence these squares compute cofibers for all derived morphisms, up to equivalence. The induced functor preserves zero objects and cofiber sequences, and is exact by [F8]. This proves all functoriality assertions on the infinity-localizations themselves. [F3, F4, F5, F7, F8, F9, step 1.1] ∎
