---
title: External matrix, exact and bounded-projective K-theory comparisons
status: published
research_item: thm-author-da44cda020c0-units-k1-classical-comparisons
dependency_level: 0
sources:
  references:
    - title: Charles Weibel, The K-book, Chapter III
      url: https://sites.math.rutgers.edu/~weibel/Kbook/Kbook.III.pdf
      locator: Definition III.1.1 and Example III.1.1.1, PDF pp. 1–2
      statement: Classical K₁(A)=GL(A)/[GL(A),GL(A)] is natural in unital ring maps.
        For a commutative ring determinant gives a surjection to A× split by the
        one-by-one matrices.
      hypotheses: Unital rings for matrix K₁; commutative unital rings for determinant
        and the unit section. No regularity or noetherian hypothesis.
      reading_limits: The inherited record reports reading III.1.1 and Example
        III.1.1.1. This repair independently read those passages in the
        author-hosted web PDF text on 2026-11-12. Only the matrix definition,
        functoriality and stated determinant/unit calculation are imported here;
        no reconstruction of the Whitehead theorem is claimed.
    - title: Charles Weibel, The K-book, Chapter IV
      url: https://sites.math.rutgers.edu/~weibel/Kbook/Kbook.IV.pdf
      locator: IV.1.1, p. 2; IV.3.1/3.1.4, pp. 24–25; IV.4.9 and the explicit maps
        eta_n(g)=(g,1), pp. 42–43; IV.4.11/4.11.1, pp. 44–45;
        IV.6.1/6.3/6.3.1–6.3.2, pp. 53–55; IV.7.1–7.2, pp. 61–62; Exercises
        IV.7.8–7.9, p. 65; IV.8.1–8.3.2/8.5–8.6, pp. 66–70; Exercises
        IV.8.5–8.7, pp. 74–75 (printed and PDF page numbers).
      statement: For small exact E, Quillen K^Q(E) is the based loop space of BQ(E),
        where Q morphisms are isomorphism classes of admissible
        epimorphism/monomorphism spans composed by pullback. For small
        Waldhausen D, K^W(D) is the loop space of the realization of the nerves
        of wS_n(D). The canonical matrix, group-completion, Q and exact-category
        S comparisons agree on automorphism classes. For finite projectives
        these identify GL(A)_ab with pi_1 K^Q(P(A)); the canonical S/Q
        equivalence matches the same automorphisms. Essentially small exact
        categories are handled by a small equivalent category.
      hypotheses: Unital rings; the application restricts to commutative rings. P(A)
        is split exact. Its small idempotent-matrix presentation represents all
        finite projectives. Stabilization is diag(M,1). The S/Q comparison
        applies to small exact categories, with isomorphisms as weak
        equivalences. Matrix-loop orientation is fixed by eta_n(g)=(g,1),
        Exercise IV.7.9(c) and Exercise IV.8.7, reading the last exercise’s
        cross-reference as IV.7.9.
      reading_limits: Historical authoring records report the plus/group-completion/Q
        proofs and the S/Q exercise outline; they confer no fresh review. This
        repair read the cached author PDF text at IV.3.1/3.1.4, IV.4.9–4.11.1,
        IV.6.1/6.3/6.3.1–6.3.2, the statements IV.7.1–7.2, Exercises IV.7.8–7.9,
        IV.8.1–8.3.2/8.5–8.6 and Exercises IV.8.5–8.7. The author-hosted web PDF
        text was also checked for IV.1.1, IV.6.1/6.3, IV.8.1–8.3/8.5–8.6 and
        IV.8.7 on 2026-11-12. The construction interfaces, theorem statements
        and published exercise outline are imported; no fresh verification of
        all comparison proofs, group-completion prerequisites, Theorem B, or
        Waldhausen’s original paper is claimed. No byte identity between cached
        and live PDFs is claimed.
    - title: Charles Weibel, The K-book, Chapter V
      url: https://sites.math.rutgers.edu/~weibel/Kbook/Kbook.V.pdf
      locator: Theorem V.2.2 (Gillet–Waldhausen) and proof, pp. 13–14; §V.2.7.2, p. 18
      statement: For an exact category closed under kernels of surjections in an
        ambient abelian category, inclusion as complexes concentrated in degree
        zero induces a K-theory equivalence with its bounded chain-complex
        Waldhausen category. In particular K(P(A))≃K(Chᵇ(P(A))).
      hypotheses: P(A) is the category of finite projective A-modules, with split
        exact sequences. Chᵇ(P(A)) has degreewise split monomorphisms as
        cofibrations and quasi-isomorphisms as weak equivalences; the ambient
        abelian category is all A-modules. Kernels of surjections between finite
        projectives are finite projective because the sequence splits. Cochain
        reindexing does not change the statement.
      reading_limits: The inherited record reports reading V.2.2 and its displayed
        proof and V.2.7.2. This repair read those same passages in the cached
        author PDF text (pp. 13–14 and 18), and checked the theorem and
        preceding Waldhausen structures in the author-hosted web PDF text on
        2026-11-12. The localization and exact-complex prerequisites of the
        published proof remain imported; they are not reconstructed. Only the
        degree-zero bounded-projective inclusion is applied; the larger
        perfect-complex approximation of V.2.7.2 remains context.
    - title: The Stacks Project, Derived Categories, Remark 13.19.5
      url: https://stacks.math.columbia.edu/tag/0648
      locator: Remark 13.19.5 (tag 0648), entire statement; application in the abelian
        category of A-modules
      statement: If alpha:K→L is a quasi-isomorphism in an abelian category and P is a
        bounded above cochain complex of projective objects, postcomposition
        with alpha gives a bijection from cochain maps P→K modulo cochain
        homotopy to cochain maps P→L modulo cochain homotopy.
      hypotheses: An abelian category, a quasi-isomorphism alpha, and a bounded above
        complex P of projective objects. No flatness assumption on a subsequent
        ring map is part of this statement. Here both source and target
        complexes are bounded complexes of projective A-modules.
      reading_limits: Read the entire tag 0648 statement, the surrounding §13.19
        statements, and the linked dual Remark 13.18.5 (tag 05TF) explanation on
        2026-11-12. The result is imported; its triangulated-category and
        null-homotopy prerequisites were not reconstructed. The elementary
        two-sided-inverse application and preservation of its homotopies under
        base change are recorded below.
external_input: true
---

PDF p. 9: Surjectivity of the determinant on K1

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-projective-module](https://alphabetamath.cc/item/def-projective-module)
- [math:thm-projective-module-characterizations](https://alphabetamath.cc/item/thm-projective-module-characterizations)
- [math:ex-the-idempotent-completion-of-a-ring-is-the-finitely-generated-projective-modules](https://alphabetamath.cc/item/ex-the-idempotent-completion-of-a-ring-is-the-finitely-generated-projective-modules)
- [math:thm-modules-over-a-ring-form-an-abelian-category](https://alphabetamath.cc/item/thm-modules-over-a-ring-form-an-abelian-category)
- [math:def-split-short-exact-sequence](https://alphabetamath.cc/item/def-split-short-exact-sequence)
- [math:def-cochain-complex-in-an-abelian-category](https://alphabetamath.cc/item/def-cochain-complex-in-an-abelian-category)
- [math:def-cochain-map](https://alphabetamath.cc/item/def-cochain-map)
- [math:def-cohomology-object-of-a-cochain-complex](https://alphabetamath.cc/item/def-cohomology-object-of-a-cochain-complex)
- [math:def-quasi-isomorphism](https://alphabetamath.cc/item/def-quasi-isomorphism)
- [math:prop-a-chain-map-is-a-quasi-isomorphism-exactly-when-its-cochain-reindexing-is](https://alphabetamath.cc/item/prop-a-chain-map-is-a-quasi-isomorphism-exactly-when-its-cochain-reindexing-is)
- [math:def-stable-general-linear-group-and-elementary-subgroup-of-a-ring](https://alphabetamath.cc/item/def-stable-general-linear-group-and-elementary-subgroup-of-a-ring)
- [math:def-abelianisation-of-a-group](https://alphabetamath.cc/item/def-abelianisation-of-a-group)
- [math:def-based-loops-and-fundamental-group](https://alphabetamath.cc/item/def-based-loops-and-fundamental-group)
- [math:def-restriction-and-extension-of-scalars](https://alphabetamath.cc/item/def-restriction-and-extension-of-scalars)
- [` Charles Weibel, The K-book, Chapter III · Definition III.1.1 and Example III.1.1.1, PDF pp. 1–2 `](https://sites.math.rutgers.edu/~weibel/Kbook/Kbook.III.pdf)
- [` Charles Weibel, The K-book, Chapter IV · IV.1.1, p. 2; IV.3.1/3.1.4, pp. 24–25; IV.4.9 and the explicit maps eta_n(g)=(g,1), pp. 42–43; IV.4.11/4.11.1, pp. 44–45; IV.6.1/6.3/6.3.1–6.3.2, pp. 53–55; IV.7.1–7.2, pp. 61–62; Exercises IV.7.8–7.9, p. 65; IV.8.1–8.3.2/8.5–8.6, pp. 66–70; Exercises IV.8.5–8.7, pp. 74–75 (printed and PDF page numbers). `](https://sites.math.rutgers.edu/~weibel/Kbook/Kbook.IV.pdf)
- [` Charles Weibel, The K-book, Chapter V · Theorem V.2.2 (Gillet–Waldhausen) and proof, pp. 13–14; §V.2.7.2, p. 18 `](https://sites.math.rutgers.edu/~weibel/Kbook/Kbook.V.pdf)
- [` The Stacks Project, Derived Categories, Remark 13.19.5 · Remark 13.19.5 (tag 0648), entire statement; application in the abelian category of A-modules `](https://stacks.math.columbia.edu/tag/0648)


## Statement
Assume AC. For every commutative unital ring A, let P(A) be the exact category of finite projective modules and let C(A)=Chᵇ(P(A)) be bounded cochain complexes, with degreewise split monomorphisms as cofibrations and quasi-isomorphisms as weak equivalences. The canonical matrix-automorphism maps and degree-zero inclusion give natural isomorphisms

$$GL(A)_{ab}\xrightarrow{\sim}\pi_1 K^Q(P(A))\xrightarrow{\sim}\pi_1 K^W(C(A)).$$

The first is the classical matrix/Quillen comparison; the second includes the canonical exact-category S/Q comparison and Gillet–Waldhausen inclusion. The image of M∈$GL_n$(A) is the standard automorphism class of M acting on Aⁿ in degree zero. In particular the one-by-one unit u maps to the class of multiplication by u on A. These comparisons are natural for extension of scalars along unital ring maps.

## Formulation conventions
Here “finite projective” means finitely generated and projective: a finite list generates the module, and projectivity is the lifting property against surjective module maps in [math:def-projective-module](https://alphabetamath.cc/item/def-projective-module). For size purposes use the small presentation whose objects are pairs $(n,e)$ with $n\geq0$ and $e\in M_n(A)$ satisfying $e^2=e$, representing $eA^n$. A morphism $(n,e)\to(m,f)$ is a matrix $v\in M_{m\times n}(A)$ with $fve=v$; composition is matrix multiplication and the identity at $(n,e)$ is $e$. The fully faithful image functor has exactly the finite projectives as essential image by [math:ex-the-idempotent-completion-of-a-ring-is-the-finitely-generated-projective-modules](https://alphabetamath.cc/item/ex-the-idempotent-completion-of-a-ring-is-the-finitely-generated-projective-modules). We use $P(A)$ for this presentation when making the categorical constructions; it has a set of objects and arrows, includes the free objects $(n,I_n)$, and uses block direct sums. This is the small-equivalent-category convention of Weibel IV.6.3.1, not an assumption that all finite projectives are free.

The ambient category of all $A$-modules is abelian by [math:thm-modules-over-a-ring-form-an-abelian-category](https://alphabetamath.cc/item/thm-modules-over-a-ring-form-an-abelian-category). The exact structure on $P(A)$ consists of sequences isomorphic to $0\to P\to P\oplus Q\to Q\to0$, with the displayed inclusion and projection. “Split” means that the surjection has an $A$-linear section, as in [math:def-split-short-exact-sequence](https://alphabetamath.cc/item/def-split-short-exact-sequence). Thus admissible monomorphisms and epimorphisms are precisely the split injections and split surjections between these projectives. The ordinary inherited short exact sequences have this structure because a surjection onto a projective splits, as supplied by [math:thm-projective-module-characterizations](https://alphabetamath.cc/item/thm-projective-module-characterizations).

An object of $C(A)$ is a cochain complex $C^i$ with $C^i=0$ outside some finite interval and $d^{i+1}d^i=0$, computed in the ambient module category, with each term in $P(A)$; morphisms are the degree-preserving maps commuting with the differentials. These are the interfaces of [math:def-cochain-complex-in-an-abelian-category](https://alphabetamath.cc/item/def-cochain-complex-in-an-abelian-category) and [math:def-cochain-map](https://alphabetamath.cc/item/def-cochain-map). A cofibration is a cochain map that is a split injection in every degree; a splitting is not required to commute with the differential. Its degreewise quotient is again a bounded complex of finite projectives. A weak equivalence induces isomorphisms on all $H^i(C)=\ker d^i/\operatorname{im}d^{i-1}$, using [math:def-cohomology-object-of-a-cochain-complex](https://alphabetamath.cc/item/def-cohomology-object-of-a-cochain-complex). Under $C_n=C^{-n}$ and $d_n=d^{-n}$ this is exactly [math:def-quasi-isomorphism](https://alphabetamath.cc/item/def-quasi-isomorphism), by [math:prop-a-chain-map-is-a-quasi-isomorphism-exactly-when-its-cochain-reindexing-is](https://alphabetamath.cc/item/prop-a-chain-map-is-a-quasi-isomorphism-exactly-when-its-cochain-reindexing-is). Bounded complexes of objects in the small presentation form a small category. The Waldhausen structure just specified is the bounded-complex structure preceding Weibel V.2.2, transported by this reindexing.

The group $GL(A)$ is the union of the invertible matrix groups under $M\mapsto\operatorname{diag}(M,1)$, as defined in [math:def-stable-general-linear-group-and-elementary-subgroup-of-a-ring](https://alphabetamath.cc/item/def-stable-general-linear-group-and-elementary-subgroup-of-a-ring); commutativity identifies its right-module column convention with the left-module convention above. The subscript ${ab}$ means quotient by the commutator subgroup, as in [math:def-abelianisation-of-a-group](https://alphabetamath.cc/item/def-abelianisation-of-a-group). The symbol $\pi_1$ denotes the group of based loops modulo endpoint-fixed homotopy from [math:def-based-loops-and-fundamental-group](https://alphabetamath.cc/item/def-based-loops-and-fundamental-group). For the K-spaces below the basepoint is the constant loop at the zero object.

For a small category $\mathcal D$, write $B\mathcal D=|N\mathcal D|$: the nerve has composable strings of $n$ arrows as its $n$-simplices, faces compose or omit arrows and degeneracies insert identities; realization glues the corresponding standard simplices by these maps. For a small exact category $\mathcal E$, $Q\mathcal E$ has the same objects, and an arrow $E\to E^{\prime}$ is an isomorphism class of spans $E\leftarrow T\rightarrow E^{\prime}$ whose left arrow is an admissible epimorphism and right arrow an admissible monomorphism. Isomorphisms of spans fix the endpoints; composition uses pullback. Set $K^Q(\mathcal E)=\Omega BQ\mathcal E$, with $\Omega$ the based loop space. These are the imported construction interfaces in Weibel IV.3.1.4 and IV.6.1/6.3, included in [F3].

For a small Waldhausen category $\mathcal D$, $S_n\mathcal D$ consists of flags $0=D_0\rightarrowtail D_1\rightarrowtail\cdots\rightarrowtail D_n$ of cofibrations with compatible chosen quotients $D_{ij}=D_j/D_i$. Compatibility means $D_{ii}=0$ and each $D_{ij}\rightarrowtail D_{ik}\twoheadrightarrow D_{jk}$ is a cofibration sequence for $i\leq j\leq k$. Morphisms are natural transformations of these diagrams. Write $wS_n\mathcal D$ for the subcategory with all the objects and the componentwise weak equivalences. Restricting the diagrams along order-preserving maps gives faces and degeneracies. Set $K^W(\mathcal D)=\Omega|B(wS_\bullet\mathcal D)|$, realizing the category nerves and then the simplicial direction, based at the zero diagram. An exact category is regarded here as Waldhausen with its admissible monomorphisms as cofibrations and its isomorphisms as weak equivalences. These are Weibel IV.8.1–8.3/8.5–8.6 in [F3]; in particular the second comparison in the Statement is the inverse of the canonical S/Q equivalence followed by degree-zero inclusion.

For a unital map $\varphi:A\to B$, extension of scalars is $B\otimes_A(-)$ on modules and maps, as in [math:def-restriction-and-extension-of-scalars](https://alphabetamath.cc/item/def-restriction-and-extension-of-scalars), applied degreewise on complexes. On the small presentations it is $(n,e)\mapsto(n,\varphi(e))$, with entries of every morphism sent through $\varphi$. The represented module is the usual scalar extension; the image/summand splitting of $e$ identifies these models. A cochain homotopy from $a$ to $b$ is a family $h^i:C^i\to D^{i-1}$ satisfying $a-b=dh+hd$; brackets for maps modulo homotopy below mean this equivalence relation. The categorical constructions, their well-definedness and their functoriality are imported in [F3]; the applicability checks for this particular scalar-extension functor appear below.

## Source contract
**Given:** A commutative unital ring, AC, and the exact/Waldhausen structures specified above. AC is the assumption in [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and is retained for the imported classical comparisons. The explicit small presentation and finite applicability checks make no further appeal to AC; no sharper choice strength is asserted for the imported proofs. In particular AC does not imply that an arbitrary projective module is free.

**Goal:** Import the actual classical comparison maps with their matrix-loop normalization.

[F1] Weibel III.1.1 identifies matrix K₁ with GL(A)_ab. IV.1.1, IV.4.9/4.11.1 and IV.7.1–7.2 identify its canonical automorphism maps with exact-category Quillen K-theory.

[F2] Weibel Exercise IV.7.9(c) matches the Quillen automorphism class with its group-completion class. IV.8.3.2/8.5–8.6 and Exercises IV.8.5–8.7 supply the canonical S/Q comparison and its automorphism-class normalization. V.2.2 supplies the K-theory equivalence induced by P(A)→C(A).

[F3] Weibel IV.3.1/3.1.4, IV.6.1/6.3/6.3.1 and IV.8.1–8.3.2/8.5–8.6 supply the nerve/realization, Q and Waldhausen S construction interfaces, small-category conventions and functoriality specified above. The paragraph preceding V.2.2 supplies the bounded-complex Waldhausen structure in an ambient abelian category.

[F4] Stacks Project Remark 13.19.5 imports the following fact: if f:C→D is a quasi-isomorphism in an abelian category and P is a bounded above complex of projectives, postcomposition induces a bijection from maps P→C modulo cochain homotopy to maps P→D modulo cochain homotopy. Only this fact is imported from that source.

## External input
Import [F1]–[F4] with the exact source statements, hypotheses and reading limits in the frontmatter. The comparison theorem and the construction interfaces are literature inputs; the elementary applicability checks below do not reconstruct their proofs. The automorphism normalization uses the actual categorical maps, rather than the mere existence of abstract fundamental-group isomorphisms.

For the kernel hypothesis of [F2], a surjection $P\twoheadrightarrow Q$ between finite projectives has a section by projectivity. Its kernel is the image of the complementary projection on $P$ and is therefore finitely generated; as a direct summand of a projective it is projective by [math:thm-projective-module-characterizations](https://alphabetamath.cc/item/thm-projective-module-characterizations). Thus $P(A)$ is closed under kernels of its surjections in the ambient abelian module category. This verifies the stated hypothesis of V.2.2 here, without borrowing a premise from a later consumer.

For base change, let $f:C\to D$ be a quasi-isomorphism in $C(A)$. In [F4] first take $P=D$ to obtain $g:D\to C$ with $fg$ homotopic to $1_D$. Taking $P=C$, injectivity then gives $gf$ homotopic to $1_C$, since postcomposition with $f$ identifies their homotopy classes. Both uses satisfy bounded-above projectivity because $C$ and $D$ are bounded projective complexes. Applying the additive functor $B\otimes_A(-)$ preserves the two equations $fg-1=dh+hd$ and $gf-1=dk+kd$, so the base-changed map also has a homotopy inverse. On a cycle, a difference $dh+hd$ is a boundary; hence homotopy inverses induce inverse maps on cohomology, and base change preserves quasi-isomorphisms without flatness. It preserves the split cofibrations, their pushouts and finite projectives: the module splittings and finite free retractions are preserved by the additive scalar-extension functor, and pushouts along split inclusions are computed degreewise by direct sums with the complementary module summand; no chain-compatible splitting is asserted. Consequently [F3] applies to this functor. The comparisons of [F1]–[F2] commute with it and send matrices entrywise, proving that their stated naturality has exactly the scope claimed.

The determinant and its unit calculation are separate local results; no determinant compatibility is inferred here from a comparison of degree-zero K-groups. No regularity, noetherianity, global resolution property or flatness of the ring map is added to the Statement.

Source correction retained from the existing item: Exercise IV.8.7 cites IV.7.8 for the automorphism class; the intended reference is IV.7.9. This historical source cross-reference correction does not change the imported comparison.
