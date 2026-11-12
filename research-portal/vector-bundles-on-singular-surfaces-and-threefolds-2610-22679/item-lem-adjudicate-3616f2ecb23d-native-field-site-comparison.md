---
title: Classical realization of the native smooth field site
status: draft
research_item: lem-adjudicate-3616f2ecb23d-native-field-site-comparison
dependency_level: 15
sources:
  references:
    - title: Jacob Lurie, Spectral Algebraic Geometry, February 2018 author manuscript
      url: https://www.math.ias.edu/~lurie/papers/SAG-rootfile.pdf
      locator: Definition 1.1.2.8 and Remark 1.1.2.10, p. 72; Definition 11.2.3.1, p.
        978; Proposition 11.2.3.6, p. 979; Definition 11.2.5.5, p. 987
      statement: A connective spectral scheme has an ordinary underlying scheme.
        Fiber-smooth affine maps are flat and almost finitely presented; among
        almost finitely presented maps, fiber smoothness is equivalent to
        discreteness and regularity of all algebraically closed geometric
        fibers. The global condition is tested on etale affine charts.
      hypotheses: Connective spectral schemes and connective commutative ring spectra;
        use fiber smoothness and the usual flat projective line of the supplied
        closure lemma. The base here is the discrete field k, not the sphere
        spectrum. No assertion about differential smoothness is imported.
      reading_limits: For this repair, read the complete named definitions, Remark
        1.1.2.10 and the Proposition 11.2.3.6 statement in indexed extracts of
        the primary author PDF. The full PDF exceeded the web retrieval size
        limit. No reading of the proposition proof is claimed here. Import the
        stated geometric primitives; the global open and qcqs comparison is also
        supplied by the declared site-closure lemma. No equivalence of ambient
        animated and spectral geometry is used.
    - title: Jacob Lurie, Higher Algebra, 18 September 2017
      url: https://www.math.ias.edu/~lurie/papers/HA.pdf
      locator: Corollary 4.2.4.7, p. 531; Proposition 7.1.3.18 and proof, p. 1219;
        Definition 7.2.2.10 and Remark 7.2.2.12, p. 1240
      statement: Discrete commutative ring spectra form the ordinary category of
        commutative rings. A module over a discrete ring is flat exactly when it
        is discrete with flat ordinary underlying module. Maps from the free
        rank-one R-module to M are its underlying infinite-loop space.
      hypotheses: For discreteness use the underlying flat Hk-module. For finite free
        module maps use spectra as the monoidal category in Corollary 4.2.4.7.
        All rings are connective; take the commutative case of Proposition
        7.1.3.18.
      reading_limits: For this repair, read Corollary 4.2.4.7 and its short proof, the
        complete Proposition 7.1.3.18 statement and proof, and Definition
        7.2.2.10 with Remark 7.2.2.12 in the primary PDF extraction. Corollary
        4.2.4.7 is on printed p. 531; the nearby Proposition 4.2.4.9 concerns a
        different assertion. The module and algebra interfaces are imported;
        their operadic foundations are not reconstructed.
    - title: Can Yaylali, Notes on derived algebraic geometry, arXiv:2208.01506v1
      url: https://arxiv.org/pdf/2208.01506v1
      locator: Remark 2.29, p. 16; Definition 2.53, p. 23; Definition 3.33, p. 32;
        Remark and Definition 3.35, pp. 32–33, properties (1)–(4); Definition
        3.43, p. 36; Remarks 3.53–3.55, p. 39
      statement: Animated smooth maps are classically smooth on pi_0 with higher
        homotopy groups obtained by scalar extension. Classical schemes embed
        fully faithfully into animated derived schemes; truncation and inclusion
        preserve smooth maps. Derived schemes admit affine open covers.
        Quasi-coherent modules are the limit of affine module categories and
        satisfy descent, in particular Zariski descent; on a derived scheme they
        are compatible families on affine opens. For a discrete animated ring A,
        Mod_A is the derived infinity-category of ordinary pi_0(A)-modules.
      hypotheses: Animated derived schemes over the discrete field k in fixed
        compatible universes. Use the scalar-extension criterion only for smooth
        maps; use the affine module and descent interfaces to define the rank-n
        locally free substack. On the smooth field site all affine rings are
        discrete, so the ordinary-module comparison is used only there. No
        equivalence with the ambient category of connective spectral rings is
        asserted. Only Zariski descent is required for the stack claim.
      reading_limits: For this repair, read the complete displayed Remark 2.29,
        Definition 2.53, Definition 3.33 and truncation discussion with
        properties (1)–(4), Definition 3.43, and Remarks 3.53–3.55 in the
        primary v1 PDF extraction. These supply the animated affine, module and
        descent interfaces. Their cited HAG II and SAG foundational proofs are
        imported, not reconstructed. The animated coefficient action below is
        explicitly transported over the field-site equivalences; it is not a
        theorem attributed to this source or an ambient change-of-model
        assertion.
    - title: Jacob Lurie, Higher Topos Theory, 2009
      url: https://www.math.ias.edu/~lurie/papers/HTT.pdf
      locator: Definition 6.2.2.6 and Proposition 6.2.2.7, p. 579; proof pp. 582–583
      statement: Space-valued sheaves are the full subcategory local for
        covering-sieve inclusions, with a left exact sheafification left
        adjoint.
      hypotheses: Small sites in the stated larger universe. Apply to the equivalent
        Zariski sites, using covering-sieve descent without hypercompletion.
      reading_limits: For this repair, read Definition 6.2.2.6 and Proposition 6.2.2.7
        in the primary PDF extraction, together with portions of the displayed
        sheafification proof on printed pp. 582–583. Import the
        localization/existence theorem without claiming a complete proof reading
        or reconstruction of the transfinite foundations. Use covering-sieve
        descent without hypercompletion.
    - title: Sabin Cautis and Harold Williams, Tamely presented morphisms and coherent
        pullback, Mathematische Zeitschrift 311, article 88 (2025)
      url: https://link.springer.com/article/10.1007/s00209-025-03872-x
      locator: Section 2, conventions for CAlg and the Noetherian base; Section 4.4,
        paragraph immediately before Proposition 4.18
      statement: For connective commutative ring spectra, fiber smoothness is flatness
        together with ordinary smoothness of the induced map on degree-zero
        rings. For ordinary rings it agrees with ordinary smoothness.
      hypotheses: The paper fixes a Noetherian connective commutative ring spectrum as
        base and uses spectral CAlg. Apply over Hk for an arbitrary discrete
        field k. Its introductory characteristic-zero simplification is not the
        convention of Section 2. Do not use its speculative animated extension.
      reading_limits: For this repair, read all Section 2 conventions in the primary
        published HTML, including the spectral CAlg and Noetherian base
        conventions, and the complete fiber-smoothness paragraph immediately
        before Proposition 4.18 in Section 4.4. Import only this recalled affine
        interface. No tamely-presented or coherent-pullback theorem,
        characteristic-zero restriction, or speculative animated extension is
        used.
---

PDF p. 17: Corollary 6.9; native-to-classical smooth-site comparison used by the coefficient mapping bridge

## Prerequisites

- [def-adjudicate-c387df8ff29b-non-a1-spectrum-framework](item-def-adjudicate-c387df8ff29b-non-a1-spectrum-framework)
- [lem-adjudicate-cc64bae62648-derived-zariski-site-closure](item-lem-adjudicate-cc64bae62648-derived-zariski-site-closure)
- [thm-author-16f30f6b95cb-lowweight-augmented-slice-comparison](item-thm-author-16f30f6b95cb-lowweight-augmented-slice-comparison)
- [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes)
- [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)
- [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)
- [math:def-locally-free-sheaf-finite-rank](https://alphabetamath.cc/item/def-locally-free-sheaf-finite-rank)
- [` Jacob Lurie, Spectral Algebraic Geometry, February 2018 author manuscript · Definition 1.1.2.8 and Remark 1.1.2.10, p. 72; Definition 11.2.3.1, p. 978; Proposition 11.2.3.6, p. 979; Definition 11.2.5.5, p. 987 `](https://www.math.ias.edu/~lurie/papers/SAG-rootfile.pdf)
- [` Jacob Lurie, Higher Algebra, 18 September 2017 · Corollary 4.2.4.7, p. 531; Proposition 7.1.3.18 and proof, p. 1219; Definition 7.2.2.10 and Remark 7.2.2.12, p. 1240 `](https://www.math.ias.edu/~lurie/papers/HA.pdf)
- [` Can Yaylali, Notes on derived algebraic geometry, arXiv:2208.01506v1 · Remark 2.29, p. 16; Definition 2.53, p. 23; Definition 3.33, p. 32; Remark and Definition 3.35, pp. 32–33, properties (1)–(4); Definition 3.43, p. 36; Remarks 3.53–3.55, p. 39 `](https://arxiv.org/pdf/2208.01506v1)
- [` Jacob Lurie, Higher Topos Theory, 2009 · Definition 6.2.2.6 and Proposition 6.2.2.7, p. 579; proof pp. 582–583 `](https://www.math.ias.edu/~lurie/papers/HTT.pdf)
- [` Sabin Cautis and Harold Williams, Tamely presented morphisms and coherent pullback, Mathematische Zeitschrift 311, article 88 (2025) · Section 2, conventions for CAlg and the Noetherian base; Section 4.4, paragraph immediately before Proposition 4.18 `](https://link.springer.com/article/10.1007/s00209-025-03872-x)



## Statement
Assume the Axiom of Choice and compatible nested Grothendieck universes containing $\omega$, with the bounds of the supplied native geometric framework. Let $k$ be a field, let $\mathcal C$ be the ordinary category of smooth finite-type $k$-schemes, including nonseparated schemes, and let $\mathcal D=\mathrm{Sm}_{\operatorname{Spec}k}$ be the framework's native qcqs smooth connective spectral site. Regard $\mathcal C$ as an infinity-category via its nerve. Use its supplied usual projective line and retain the flat, fiber-smooth convention of the native site-closure supplier. Discrete realization defines an equivalence of Zariski sites $j:\mathcal C\simeq\mathcal D$, with inverse classical truncation.

Consequently restriction $j^*$ gives equivalences of space- and spectrum-valued presheaves and of Zariski sheaves, including pointed objects, and identifies sheafification. It preserves the pointed usual projective line, circle stabilization, the symmetric $\mathbb P^1$-spectrum construction, and suspension/evaluation and shift adjunctions. Thus native cohomology can be computed after restriction, for arbitrary presheaves as well as representables. Evaluation on pointed stacks uses stack coefficients or a multiplicative coefficient model with its specified stack-to-coefficient functor and reduced coefficient image; for a general coefficient module, the assertion concerns coefficient objects and its supplied stack action. The coefficient levels are restricted as the same functors evaluated on the same classical schemes, rather than replaced by a different theory.

For every integer $n\geq0$, restriction of the native stack $\mathrm{Vect}_{n,k}$ is the classical stack of rank-$n$ vector bundles and isomorphisms, where a vector bundle means a locally free $\mathcal O$-module of constant rank $n$. It is pointed by the trivial bundle, and equals the Zariski sheafification of $U\mapsto BGL_n(\Gamma(U,\mathcal O_U))$. Here $GL_n(R)$ is the group of invertible matrices over $R$ and $B$ is its one-object groupoid nerve. These identifications commute with pullbacks, direct sum with the trivial line, and all source maps. No separatedness hypothesis or hypercompletion is imposed.


The separate animated instance is specified as follows. Let $\mathcal D_{\rm an}$ be the infinity-category of qcqs smooth animated derived $k$-schemes with Zariski covers, with affine charts and smoothness as in the cited animated geometry. Let $\operatorname{QCoh}(U)$ be the limit of its affine module categories with pullback by scalar extension. Define $\mathrm{Vect}^{\rm an}_{n,k}(U)$ to be the space of objects and equivalences in $\operatorname{QCoh}(U)$ that are Zariski locally isomorphic to $\mathcal O_U^n$. Use the usual animated projective line pointed at infinity. Discrete animated realization gives an equivalence of Zariski sites $j_{\rm an}:\mathcal C\simeq\mathcal D_{\rm an}$. Its restriction identifies this locally free stack with the same classical vector-bundle stack and the same sheafification of $BGL_n$.

For precision, the animated coefficient counterpart here is defined by transport along $E=(j_{\rm an}^*)^{-1}j^*:\operatorname{Shv}_{\rm Zar}(\mathcal D,\mathrm{Spaces})\simeq\operatorname{Shv}_{\rm Zar}(\mathcal D_{\rm an},\mathrm{Spaces})$. For a native coefficient category $\mathcal V$, keep its underlying presentable category and define its animated stack action by $A\otimes_{\rm an}v=E^{-1}(A)\otimes v$. Transport a specified multiplicative stack-to-coefficient functor by precomposing it with $E^{-1}$, and use the supplied symmetric-sequence, sphere-module and adjoint-bonding definitions with this action and the usual pointed projective line. These are the animated coefficient and motivic constructions meant here. They satisfy all the restriction, pointing, cohomology and source-map compatibilities above, with the same evaluation qualifications. This construction makes no identification of the two ambient geometric categories and does not import a second geometric model from the native framework.

## Statement references

[def-adjudicate-c387df8ff29b-non-a1-spectrum-framework](item-def-adjudicate-c387df8ff29b-non-a1-spectrum-framework)

[lem-adjudicate-cc64bae62648-derived-zariski-site-closure](item-lem-adjudicate-cc64bae62648-derived-zariski-site-closure)

[thm-author-16f30f6b95cb-lowweight-augmented-slice-comparison](item-thm-author-16f30f6b95cb-lowweight-augmented-slice-comparison)

[math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes)

[math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)

[math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)

[math:def-locally-free-sheaf-finite-rank](https://alphabetamath.cc/item/def-locally-free-sheaf-finite-rank)

## Facts & Assumptions

[A1] Assume [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and the separate existence of the compatible universes of [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention), containing $\omega$. These are inherited premises of the imported geometric and categorical constructions; use the same bounds for each site and all functor categories.

[F1] [def-adjudicate-c387df8ff29b-non-a1-spectrum-framework](item-def-adjudicate-c387df8ff29b-non-a1-spectrum-framework) supplies the native spectral geometric category, its Zariski stacks, vector-bundle stack, coefficient categories, symmetric spectra and their adjunction conventions, including the qualifications for evaluating a stack in coefficients. It does not supply an animated geometric model. [lem-adjudicate-cc64bae62648-derived-zariski-site-closure](item-lem-adjudicate-cc64bae62648-derived-zariski-site-closure) supplies the affine-open and classical-truncation comparison, equivalence of qcqs conditions, and the usual pointed projective line, separately in animated and flat fiber-smooth spectral geometry.

[F2] [math:def-smooth-morphism-schemes](https://alphabetamath.cc/item/def-smooth-morphism-schemes) fixes classical smoothness, including local finite presentation, flatness and geometric regularity. [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism) defines finite type as local finite type plus quasi-compactness. [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme) fixes qcqs. The geometric clause of [thm-author-16f30f6b95cb-lowweight-augmented-slice-comparison](item-thm-author-16f30f6b95cb-lowweight-augmented-slice-comparison) makes smooth finite-type field-schemes Noetherian and qcqs without separatedness, including the base field and their smooth affine charts. [math:def-locally-free-sheaf-finite-rank](https://alphabetamath.cc/item/def-locally-free-sheaf-finite-rank) supplies the classical locally free module and rank convention.

[F3] Reference 0 supplies the spectral affine smoothness test and its geometric-fiber criterion. Reference 4 gives its equivalent description as flatness together with classical smoothness on $\pi_0$. Reference 1 supplies flat discreteness over a discrete base and the ordinary category of discrete commutative ring spectra. It also identifies maps from a free rank-one module with the underlying infinite-loop space; finite sums therefore give the matrix mapping spaces used below. The discrete field is a Noetherian base as required by reference 4.

[F4] Reference 2 supplies the animated smoothness condition $\pi_mB=\pi_mA\otimes_{\pi_0A}\pi_0B$, classical full faithfulness and preservation of smoothness. It also supplies the affine module limit defining $\operatorname{QCoh}$, its descent, and the ordinary derived-module comparison for discrete animated rings. These inputs specify $\mathcal D_{\rm an}$ and $\mathrm{Vect}^{\rm an}_{n,k}$ as defined in the Statement, independently of the native geometric framework. The locally free condition is Zariski local and is preserved by pullback, so the subspace of such objects and equivalences satisfies Zariski descent.

[F5] Reference 3 supplies sheafification and the covering-sieve definition. Under an equivalence of sites these local-object conditions correspond, so they define equivalent full subcategories of presheaves.


[F6] The animated coefficient counterpart is the transport defined in the Statement from the coefficient constructions of [F1]. Once the two site equivalences are proved, its action is well-defined by the inverse equivalence $E^{-1}$; the action and any multiplicative functor inherit their coherence from [F1]. Its local module stack is instead specified by [F4]. No ambient geometric comparison or additional animated coefficient theorem is assumed.

## External input

References 0 and 1 provide the spectral primitives in [F3]; reference 2 provides the separate animated geometric, module and descent primitives in [F4]. Reference 3 provides the categorical existence input in [F5]. Reference 4 supplies the exact spectral flat-plus-classically-smooth interface, under its Noetherian-base convention. Only their stated domains and locators are imported. The global equivalences over the discrete field, the explicit animated coefficient transport, and the vector-bundle identifications below are local consequences; this lemma is not an imported theorem or a local reconstruction of the foundational sources.

## Proof

**Given:** The discrete field $k$, the bounded sites $\mathcal C,\mathcal D,\mathcal D_{\rm an}$, the native convention and [A1].

**Goal:** Identify the sites before applying any native motivic adjunction to classical presheaves.

1.1 Every affine chart in either smooth field site is classical. In the native spectral site it is flat over $Hk$ by [F3], so its positive homotopy groups vanish by the flatness formula and its negative groups vanish by connectivity. Its ordinary algebra is classically smooth by reference 4. Conversely, a classical smooth affine $k$-algebra is flat over $k$ by [F2]. Reference 1 makes its discrete realization flat over $Hk$, and reference 4 then makes it fiber smooth. This applies over $Hk$ because a field is Noetherian by the geometric input in [F2], with no characteristic restriction. In $\mathcal D_{\rm an}$, [F4]'s scalar-extension formula over the discrete ring $k$ kills all positive homotopy groups, and gives both directions of classical smoothness. The affine identifications glue over the same opens and preserve qcqs by the separate geometric comparisons in [F1]. The realized classical schemes form a full subcategory: affine morphism spaces are the discrete ordinary ring-map sets by [F3] in spectral geometry and [F4] in animated geometry. Maps between their open gluings are compatible local maps; limits of these discrete spaces remain discrete and give the ordinary gluing condition. A qcqs smooth object in either site therefore becomes a quasi-compact classically smooth $k$-scheme; local finite presentation implies local finite type, so it is finite type by [F2]. Conversely every object of $\mathcal C$ is qcqs by [F2] and realizes to an object of each stated smooth site. Realization and truncation are inverse on charts, their gluings and morphisms. The open comparison in [F1] identifies covering families and hence covering sieves. This proves $j$ and $j_{\rm an}$ separately, without comparing the ambient geometric categories. [A1, F1, F2, F3, F4]

2.1 Precomposition with either site equivalence and its inverse gives inverse functors on space- or spectrum-valued presheaves. Step 1.1 and [F5] identify their sheaf full subcategories and, by the universal property of the left adjoint, sheafification. Equivalences preserve the terminal object, limits, colimits and adjunctions, hence pointing and ordinary spectrum objects. The usual projective line and infinity section correspond by [F1]. For the native coefficients, transport their stack action by the induced equivalence; for the animated counterpart this is precisely the action in [F6]. The action unit and associativity diagrams are the images of the original diagrams under inverse equivalences, which also transport any specified multiplicative functor and the pushout defining its reduced coefficient image. Symmetric sequences, their tensor products, sphere modules and the adjoint-bonding equivalences of [F1] are therefore transported with these actions. This gives the claimed motivic suspension/evaluation and shifts, and their cohomology maps on coefficient objects or on stacks with the stated coefficient functor, including pointed sheafifications of arbitrary presheaves. For bundles work on affine opens where a bundle is trivial. Over a discrete ring $R$, reference 1 gives $\operatorname{Map}_R(R,M)=\Omega^\infty M$. Applied to finite free sums, the coproduct universal property identifies a map with its column entries; composition computes ordinary matrix multiplication. Thus maps between $R^n$ are the discrete matrix space, with equivalences precisely $GL_n(R)$. Reference 2 gives the same module interpretation for discrete animated rings. The native bundle stack of [F1], the animated locally free stack of [F4], and the classical locally free objects of [F2] consequently have identical local objects, isomorphisms and transition cocycles. Native stack descent and animated module descent identify them globally. The one-object prestack of the trivial bundle is fully faithful and locally essentially surjective, so its sheafification is each bundle stack by [F5]. This uses the same trivial-bundle point and the maps $g\mapsto\operatorname{diag}(g,1)$ on every chart, including rank zero with its unique automorphism. Restriction and gluing commute with these maps and with pullback. Since the categorical transports use the site equivalences and their adjunctions, they preserve all source maps and their coherent restriction diagrams. [F1, F2, F3, F4, F5, F6, step 1.1] ∎
