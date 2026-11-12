---
title: Exact true-triangle and Waldhausen determinant one-type input
status: published
research_item: thm-adjudicate-f6007757a8ac-waldhausen-determinant-one-type
dependency_level: 13
sources:
  references:
    - title: "Knudsen–Mumford, The projectivity of the moduli space of stable curves
        I: Preliminaries on det and Div"
      url: https://journals.msp.org/mscand/article/download/2000/1999
      locator: Printed pp. 20–21 (graded invertible sheaves and exterior determinant),
        p. 31 (alternating determinant), Definition 2 p. 37 and remark p. 38
        (true triangles), Definition 4 pp. 40–42 including the p. 41 footnote,
        Theorem 2 p. 42, and pp. 43–44 (scope and warning).
      statement: Graded invertible sheaves have the tensor sign symmetry. The
        alternating determinant on bounded finite locally free complexes extends
        to perfect complexes, with additivity on true triangles in the derived
        category of short complex diagrams, naturality for their isomorphisms,
        true-triangle-of-triangles compatibility, and base-change isomorphisms
        compatible with composition. A true triangle is a degreewise short exact
        complex diagram considered in D(A_3), where A_3 consists of pairs of
        composable arrows with zero composite. These data do not assert
        functorial additivity on all ordinary distinguished-triangle diagrams.
      hypotheses: Schemes and locally perfect complexes, without a reducedness
        assumption in Theorem 2. True-triangle morphisms retain their D(A_3)
        data. Bounded finite-projective complexes over a commutative unital ring
        are the affine application. The additional reducedness in Proposition 7
        is not used.
      reading_limits: In this assignment visually read the cached primary scans of
        printed pp. 20–21, 31, 37–38 and 40–44, including the p. 41 footnote and
        the base-change composition square. The journal URL was opened but
        inaccessible. Theorem 2 and the omitted Proposition 4 construction are
        imported; no full-paper reading, reconstruction, or unrestricted higher
        enhancement is claimed.
    - title: Fernando Muro, Andrew Tonks and Malte Witte, On determinant functors and
        K-theory, Publicacions Matematiques59(2015),137–233
      url: https://fmuro.github.io/assets/files/papers/zbMATH06417698.pdf
      locator: §1.1 pp. 143–144 (Picard groupoids, graded lines and tensor functors);
        §1.2 pp. 144–148, especially Example 1.2.1, Definition 1.2.3 and its
        axioms, Example 1.2.7 and Definition 1.2.9; Theorem 1.5.4 pp. 161–162;
        §1.6 pp. 166–167 including Lemma 1.6.1 and Theorem 1.6.3; §3.1 p. 194
        (symmetric tensor functors and tensor natural transformations);
        naturality/2-functoriality and Theorem 4.3.4 p. 212.
      statement: A Picard groupoid is a symmetric monoidal groupoid in which tensoring
        by each object is an equivalence. Graded lines use locally constant
        integer degrees and the Koszul sign symmetry. Symmetric tensor functors
        carry compatible unit and multiplication comparison isomorphisms, and
        tensor natural transformations preserve the comparison data. A
        Waldhausen determinant functor has weak-equivalence maps and cofiber
        additivity, satisfying naturality, staircase associativity and coproduct
        commutativity. Its universal Picard target exists and models the
        connective Waldhausen K-spectrum truncated to degrees zero and one,
        including its stable k-invariant. This model and universal construction
        are natural; the bounded-complex graded determinant is an example.
      hypotheses: Small Waldhausen categories in fixed compatible universes and Picard
        groupoid targets. Apply only the ordinary Waldhausen branch, not derived
        or arbitrary triangulated K-theory. Keep the symmetric monoidal
        constraints and graded signs. The extension example applies to bounded
        complexes in the exact category of finite projectives, where admissible
        monomorphisms split.
      reading_limits: In this assignment read the cached author-hosted journal PDF
        text of printed pp. 143–148, 161–162, 166–167, 194 and 212, including
        the definitions, both determinant axioms, the full universal
        factorization condition, tensor functor/transformation definitions, the
        named theorem statements and naturality passage; also opened the live
        author-hosted PDF. The long construction and homotopy-model proofs are
        imported, not reconstructed. No use of the other K-theory branches is
        made.
    - title: Blumberg–Gepner–Tabuada, A universal characterization of higher algebraic
        K-theory
      url: https://arxiv.org/pdf/1001.2282v4
      locator: §2.2 pp. 13–14 (localization, stable categories, exact functors and
        idempotent completeness); Lemma 7.11 and Corollary 7.12 pp. 48–49;
        Proposition 9.32 and Remark 9.33 p. 64. The existing enhanced-comparison
        supplier identifies the canonical comparison with the specified
        nonconnective functor.
      statement: Localization inverts the specified weak equivalences. DHKS-saturation
        means that a map is a weak equivalence exactly when it becomes
        invertible in the homotopy category of that localization. Under
        saturation and cofibration/weak-equivalence factorization, the
        Waldhausen-to-infinity K comparison is natural in weakly exact functors.
        The canonical connective-to-nonconnective comparison agrees in positive
        degrees and in degree zero when the underlying infinity-category is
        idempotent complete. Stable infinity-categories have finite limits and
        colimits with coincident pushout and pullback squares; exact functors
        preserve these operations. Idempotent completeness is closure under
        retracts in the presheaf Yoneda embedding.
      hypotheses: Small Waldhausen category with DHKS-saturation and factorization.
        The associated localization is already stable in the bounded-projective
        application. Degree-zero agreement additionally requires its idempotent
        completeness; this is supplied by the declared perfect-category and
        retract suppliers, not by BGT for an arbitrary localization. Compatible
        universes and AC are retained.
      reading_limits: In this assignment read cached arXiv:1001.2282v4 text of pp.
        13–14, 48–49 and 64, including the displayed comparison proofs and
        Remark 9.33; also opened the live versioned primary PDF. The canonical
        identification with the current nonconnective functor is used through
        the explicitly declared enhanced-comparison supplier, whose full current
        body was read. The corepresentability and delooping foundations are
        imported, not reconstructed.
    - title: "Charles Weibel, The K-book, Chapter IV: Definitions of Higher K-theory"
      url: https://sites.math.rutgers.edu/~weibel/Kbook/Kbook.IV.pdf
      locator: §3, pp. 24–25, Characterization 3.1, Recipe 3.1.1 and Definition 3.1.4;
        §8, pp. 66–69, Definition 8.1, Definition 8.3/8.3.1, Remark 8.3.2,
        Definition 8.5 and Infinite Loop Structure 8.5.5.
      statement: The nerve has composable-arrow strings as simplices; its realization
        is the classifying space. A Waldhausen category has a zero object,
        cofibrations closed under cobase change, weak equivalences closed under
        composition, and the gluing axiom. Exact functors preserve zero,
        cofibrations, weak equivalences and pushouts along cofibrations. The
        S-construction consists of cofibration filtrations with compatible
        chosen quotients. K-space is the loop of the realization of the
        weak-equivalence S-construction, and its iterations give a connective
        spectrum. The one-skeleton gives the canonical maps on objects and weak
        self-equivalences.
      hypotheses: A small category for its nerve; a small Waldhausen category for the
        K-space and spectrum; fixed universes. No saturation, extension axiom or
        cylinder axiom is added to the general definition. Those are separate
        hypotheses when required by a comparison theorem.
      reading_limits: In this assignment read cached primary author-hosted Chapter IV
        PDF text of pp. 24–25 and 66–69, including the complete named
        definitions and the iterated S-construction passage, and opened the live
        author-hosted PDF. The additivity theorem supporting the infinite-loop
        assertion is an established imported result; no full chapter reading or
        reconstruction is claimed.
---

PDF p. 9: Actual low-weight projections and determinant normalization

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-symmetric-monoidal-category](https://alphabetamath.cc/item/def-symmetric-monoidal-category)
- [def-exterior-determinant-bundles](item-def-exterior-determinant-bundles)
- [thm-author-da44cda020c0-units-k1-enhanced-comparisons](item-thm-author-da44cda020c0-units-k1-enhanced-comparisons)
- [def-scheme-perfect-complexes](item-def-scheme-perfect-complexes)
- [lem-author-4f716d60801a-supported-stability](item-lem-author-4f716d60801a-supported-stability)
- [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface)
- [math:cor-affine-scheme-quasi-compact](https://alphabetamath.cc/item/cor-affine-scheme-quasi-compact)
- [math:thm-affine-schemes-quasi-separated](https://alphabetamath.cc/item/thm-affine-schemes-quasi-separated)
- [` Knudsen–Mumford, The projectivity of the moduli space of stable curves I: Preliminaries on det and Div · Printed pp. 20–21 (graded invertible sheaves and exterior determinant), p. 31 (alternating determinant), Definition 2 p. 37 and remark p. 38 (true triangles), Definition 4 pp. 40–42 including the p. 41 footnote, Theorem 2 p. 42, and pp. 43–44 (scope and warning). `](https://journals.msp.org/mscand/article/download/2000/1999)
- [` Fernando Muro, Andrew Tonks and Malte Witte, On determinant functors and K-theory, Publicacions Matematiques59(2015),137–233 · §1.1 pp. 143–144 (Picard groupoids, graded lines and tensor functors); §1.2 pp. 144–148, especially Example 1.2.1, Definition 1.2.3 and its axioms, Example 1.2.7 and Definition 1.2.9; Theorem 1.5.4 pp. 161–162; §1.6 pp. 166–167 including Lemma 1.6.1 and Theorem 1.6.3; §3.1 p. 194 (symmetric tensor functors and tensor natural transformations); naturality/2-functoriality and Theorem 4.3.4 p. 212. `](https://fmuro.github.io/assets/files/papers/zbMATH06417698.pdf)
- [` Blumberg–Gepner–Tabuada, A universal characterization of higher algebraic K-theory · §2.2 pp. 13–14 (localization, stable categories, exact functors and idempotent completeness); Lemma 7.11 and Corollary 7.12 pp. 48–49; Proposition 9.32 and Remark 9.33 p. 64. The existing enhanced-comparison supplier identifies the canonical comparison with the specified nonconnective functor. `](https://arxiv.org/pdf/1001.2282v4)
- [` Charles Weibel, The K-book, Chapter IV: Definitions of Higher K-theory · §3, pp. 24–25, Characterization 3.1, Recipe 3.1.1 and Definition 3.1.4; §8, pp. 66–69, Definition 8.1, Definition 8.3/8.3.1, Remark 8.3.2, Definition 8.5 and Infinite Loop Structure 8.5.5. `](https://sites.math.rutgers.edu/~weibel/Kbook/Kbook.IV.pdf)


## Statement
Assume AC and fixed universe bounds. For a small Waldhausen category $\mathcal W$ a determinant functor to a Picard groupoid $\mathcal P$ consists of a functor on weak equivalences and additivity isomorphisms for actual cofibration sequences, satisfying weak-equivalence naturality, staircase associativity and commutativity. It factors essentially uniquely through the universal Picard groupoid $V(\mathcal W)$, which represents the 1-type of $K^W(\mathcal W)$. Hence it gives an actual map of connective K-space 1-types to the nerve of $\mathcal P$, natural in exact functors and compatible with object/automorphism classes. For bounded finite-projective complexes over a commutative unital ring $A$, the Knudsen–Mumford alternating graded determinant is such a functor. Its triangle coherence is for true/enhanced triangles. It is not a claim of natural additivity under every morphism of ordinary distinguished-triangle diagrams.

In this affine application use $\mathcal W(A)=Ch^b(\operatorname{proj}A)$ with degreewise split monomorphisms as cofibrations and quasi-isomorphisms as weak equivalences. Its canonical comparison with the connective cover of the specified nonconnective perfect K-spectrum on $\operatorname{Spec}A$ is an equivalence. Thus the determinant map transports to that K-space 1-type, naturally under extension of scalars and with the same object and automorphism values. No noetherian, regularity or flatness assumption on $A$ or on a ring map is imposed.

## Statement references

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[math:def-symmetric-monoidal-category](https://alphabetamath.cc/item/def-symmetric-monoidal-category)

[def-exterior-determinant-bundles](item-def-exterior-determinant-bundles)

[thm-author-da44cda020c0-units-k1-enhanced-comparisons](item-thm-author-da44cda020c0-units-k1-enhanced-comparisons)

[def-scheme-perfect-complexes](item-def-scheme-perfect-complexes)

[lem-author-4f716d60801a-supported-stability](item-lem-author-4f716d60801a-supported-stability)

[def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface)

[math:cor-affine-scheme-quasi-compact](https://alphabetamath.cc/item/cor-affine-scheme-quasi-compact)

[math:thm-affine-schemes-quasi-separated](https://alphabetamath.cc/item/thm-affine-schemes-quasi-separated)

## External input
Import the following definitions and established results at the exact source locations in the four reference records. The numbered proof composes these inputs with the declared local suppliers; it does not reconstruct their published foundations.

A Waldhausen category has a chosen zero object $0$ and subcategories of cofibrations and weak equivalences containing every isomorphism. Every $0\to X$ is a cofibration. Pushouts of a cofibration along any map exist and the resulting map is a cofibration. For a map between two such pushout spans whose three component maps are weak equivalences, the induced map of pushouts is a weak equivalence (gluing). Both designated classes are closed under composition. A cofiber sequence is $X\hookrightarrow Y\to Y/X$, where $Y/X=Y\sqcup_X0$, with that pushout data. An exact functor preserves zero, both designated classes and these pushouts. These are Weibel IV.8.1, p. 66; no saturation or cylinder axiom is part of this general definition.

A Picard groupoid is a symmetric monoidal category in which every arrow is invertible and tensoring by each object is an equivalence, as in MTW §1.1, pp. 143–144. Symmetric monoidal has the meaning of the declared library definition, including associativity, unit and symmetry constraints. A symmetric tensor functor $F:\mathcal P\to\mathcal Q$ carries natural isomorphisms $1_{\mathcal Q}\to F(1_{\mathcal P})$ and $F(x)\otimes F(y)\to F(x\otimes y)$ compatible with associativity, units and symmetry; a tensor natural transformation commutes with the comparison maps (MTW §3.1, p. 194). Its graded-line example on $X$ has objects $(n,L)$, with $n:X\to\mathbb Z$ locally constant and $L$ an invertible sheaf; arrows are line isomorphisms at the same degree. Tensor is $(n,L)\otimes(m,M)=(n+m,L\otimes M)$, with unit $(0,\mathcal O_X)$ and symmetry $a\otimes b\mapsto(-1)^{nm}b\otimes a$. Here line bundles and exterior determinants have the meaning of the declared exterior-determinant supplier, applied on the disjoint open rank loci when rank varies. MTW Example 1.2.7, p. 147, imports the extension of this determinant to bounded complexes. On a bounded complex $P$ its value is $\bigotimes_i(\operatorname{rk}P^i,\det P^i)^{(-1)^i}$, where exponent $-1$ means the tensor inverse (dual line and opposite degree); the tensor order and constraints are those of KM p. 31.

For a small category $C$, its nerve $NC$ has strings of $n$ composable arrows as $n$-simplices, with faces given by deletion/composition and degeneracies by inserting identities, and $BC=|NC|$ is its classifying space (Weibel IV.3.1.4, pp. 24–25). Let $S_n\mathcal W$ have filtrations $0=X_0\hookrightarrow\cdots\hookrightarrow X_n$ with chosen compatible quotients $X_j/X_i$ and their pushout squares; morphisms preserve that diagram. In $wS_n\mathcal W$ keep its objectwise weak equivalences. The simplicial operators omit or repeat stages, using quotients for the first face. The K-space is $\Omega|NwS_\bullet\mathcal W|$ and iterated S-constructions give its connective spectrum $K^W(\mathcal W)$ (Weibel IV.8.3–8.5.5, pp. 67–69). The canonical one-skeleton map $B(w\mathcal W)\to\Omega^\infty K^W(\mathcal W)$ supplies the object and weak-self-equivalence classes.

For a connective spectrum $E$, its 1-type $\tau_{\leq1}E$ is its Postnikov truncation with homotopy groups in degrees zero and one, retaining the stable k-invariant; $\Omega^\infty$ denotes its infinite loop space. MTW §1.6, pp. 166–167, imports the equivalence between these spectral 1-types and Picard groupoids, including the k-invariant, and identifies the universal $V(\mathcal W)$ with the 1-type of the actual Waldhausen spectrum. Thus $BV(\mathcal W)\simeq\Omega^\infty\tau_{\leq1}K^W(\mathcal W)$ as the corresponding grouplike spaces. A symmetric tensor functor induces the required map on nerves, with the monoidal data retained; no inference from just two abstract groups is used. The universal determinant functor and its factorization are MTW Definition 1.2.9 and Theorem 1.5.4; its construction is natural in exact functors, as recorded on p. 212.

The determinant data are exactly MTW Definition 1.2.3, pp. 145–146: a functor $d:w\mathcal W\to\mathcal P$ and isomorphisms $d(Y/X)\otimes d(X)\to d(Y)$, natural for weak-equivalence diagrams of actual cofiber sequences. For $X\hookrightarrow Y\hookrightarrow Z$, the two composites from $d(Z/Y)\otimes d(Y/X)\otimes d(X)$ to $d(Z)$ agree with the associativity constraint; the two coproduct cofiber sequences agree with the symmetry constraint. KM Definition 2, pp. 37–38, defines true triangles using the category $\mathcal A_3$ of diagrams $E''\to E\to E'$ with zero composite in an abelian category $\mathcal A$: take the full subcategory of $D(\mathcal A_3)$ represented by degreewise short exact sequences of complexes. Its isomorphisms are taken there. They carry more data than ordinary triangle diagrams in $D(\mathcal A)$. KM Definition 4 and Theorem 2, pp. 40–42, import determinant additivity and its naturality, true-triangle compatibility and base-change composition on these data. The p. 41 footnote and p. 44 warning exclude the unrestricted ordinary-triangle interpretation.

For the affine comparison, $\operatorname{proj}A$ consists of finitely generated projective $A$-modules and $Ch^b$ means bounded cochain complexes with chain maps; a quasi-isomorphism is a map inducing isomorphisms on all cohomology modules. Use the actual model and its enhanced localization furnished by the declared enhanced-comparison supplier. BGT §2.2, pp. 13–14, defines localization by inverting weak equivalences, stable infinity-categories by finite limits and colimits with pushout squares equal to pullback squares, and exact functors by preservation of those operations. DHKS-saturation means that a map is a weak equivalence exactly when its image is invertible in the localized homotopy category. BGT Lemma 7.11/Corollary 7.12 require this saturation and factorization into a cofibration followed by a weak equivalence. BGT Remark 9.33 additionally requires idempotent completeness for degree zero: the Yoneda image is closed under retracts. These model and retract premises are supplied in [F3] and [F4], rather than assumed for every Waldhausen category. The connective cover $\tau_{\geq0}E\to E$ preserves all nonnegative homotopy groups and has no negative groups. BGT supplies the comparison through this cover under those hypotheses; [F5] fixes its actual nonconnective target.

## Facts & Assumptions
**Given:** A small Waldhausen category and a determinant functor with the imported axioms; in the affine application, any commutative unital ring $A$, the stated Waldhausen structure on bounded finite-projective complexes, AC and compatible universe bounds.

**Goal:** Supply the determinant map with its exact coherence and verify transport to the specified affine nonconnective K-space.

[F1] Import the KM true-triangle determinant, the MTW determinant/universal-one-type theorems, and the Weibel object types and S-construction, with exactly the definitions, hypotheses and reading limits recorded above.

[F2] Import BGT Lemma 7.11/Corollary 7.12 and Remark 9.33 with factorization, DHKS-saturation and, for degree zero, idempotent completeness.

[F3] [thm-author-da44cda020c0-units-k1-enhanced-comparisons](item-thm-author-da44cda020c0-units-k1-enhanced-comparisons) supplies the specified Waldhausen model, verifies its factorization and DHKS-saturation in Proof 1.2 and 2.2, identifies its enhanced localization by the actual associated-sheaf functor, and identifies the canonical comparison with the specified nonconnective functor. Its positive-degree assertion alone does not supply degree-zero agreement.

[F4] [def-scheme-perfect-complexes](item-def-scheme-perfect-complexes) fixes the full enhanced perfect category, and [lem-author-4f716d60801a-supported-stability](item-lem-author-4f716d60801a-supported-stability) supplies its stability and idempotent completeness, including the affine case $X=\operatorname{Spec}A$. Thus the underlying localization in [F3] is idempotent complete.

[F5] [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface) fixes $K(X)=\mathbb K(\operatorname{Perf}(X))$ in its common localized family, with the specified inclusion-induced enhanced equivalences and pullbacks. [math:cor-affine-scheme-quasi-compact](https://alphabetamath.cc/item/cor-affine-scheme-quasi-compact) under AC and [math:thm-affine-schemes-quasi-separated](https://alphabetamath.cc/item/thm-affine-schemes-quasi-separated) show that every affine $X=\operatorname{Spec}A$ is qcqs, so its hypotheses apply here. The compatible identification in [F3] refers to this target.

[F6] [math:def-symmetric-monoidal-category](https://alphabetamath.cc/item/def-symmetric-monoidal-category) supplies the symmetric monoidal structure used in the Picard definition. [def-exterior-determinant-bundles](item-def-exterior-determinant-bundles) supplies the line and exterior-determinant constructions and their pullbacks; for a locally varying rank use its constant-rank construction on each disjoint open rank locus.

[A1] [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) is assumed for the enhanced realizations and small presentations in [F3]–[F5]. Fixed compatible universes contain all the categories used; a small equivalent Waldhausen presentation retains the cofibration, quotient and factorization constructions, as in [F3]. No extra choice principle is inferred from a finite tensor product.

## Proof
1.1 With the object types and constructions in the External input section, MTW Theorem 1.5.4 and Definition 1.2.9 give a symmetric tensor factorization $V(\mathcal W)\to\mathcal P$ of the specified determinant functor, unique up to the stated compatible tensor natural isomorphism. MTW Theorem 1.6.3 and §1.6 identify $BV(\mathcal W)$ with the 1-type of the actual Waldhausen K-space. Taking the nerve of the factorization therefore gives the asserted map, retaining its object and weak-self-equivalence classes and its naturality under exact functors. For $\mathcal W(A)$, MTW Example 1.2.7 identifies the bounded-complex graded determinant as such a functor. KM Definition 4 supplies its true-triangle naturality, associativity and pullback composition; the graded symmetry in [F6] and MTW §1.1 retains the commutativity sign. Hence this uses actual cofiber/true-triangle diagrams, with no naturality claim for arbitrary ordinary distinguished-triangle diagrams. The universality and spectral comparison are imported theorems, not a reconstruction from $K_0$ and $K_1$. [F1, F6, A1]

2.1 For the stated commutative unital $A$, [F3] supplies the bounded finite-projective Waldhausen model and verifies BGT's hypotheses: mapping cylinders give cofibration/weak-equivalence factorization, and quasi-isomorphisms between these complexes are homotopy equivalences because their bounded acyclic projective cones are contractible. A map inverted in the localization is conversely a quasi-isomorphism, proving DHKS-saturation. That supplier identifies the localization, by the actual associated-sheaf equivalence, with the affine perfect category of [F4] and with the specified realization used in [F5]. Idempotent completeness is supplied by [F4]; it is preserved under these equivalences, so the degree-zero clause of [F2] applies as well as its positive-degree clause. The canonical map $K^W(\mathcal W(A))\to\tau_{\geq0}K(\operatorname{Spec}A)$ is consequently an equivalence, allowing transport of step 1.1 to its K-space 1-type. For a ring map $A\to B$, termwise tensor sends finite projectives to finite projectives, preserves split cofibrations and their pushouts, and preserves quasi-isomorphisms here because it preserves the contractions of their cones. It is therefore an exact functor on these models without flatness assumptions. The natural comparison of [F2]–[F3], the pullback identifications of [F5]–[F6], and KM's composition-compatible pullback data transport the same object and automorphism determinant maps, naturally under these exact functors. These are supplied maps and monoidal naturality data, rather than an inference of an unspecified higher enhancement from an ordinary triangle statement. [F1, F2, F3, F4, F5, F6, A1, step 1.1] ∎
