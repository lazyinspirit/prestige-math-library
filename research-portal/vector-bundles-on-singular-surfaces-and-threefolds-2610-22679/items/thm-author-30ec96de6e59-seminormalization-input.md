---
id: thm-author-30ec96de6e59-seminormalization-input
kind: theorem
title: Seminormalization and the finite-type interface
status: published
domain: mathematics
deps:
  - math:def-scheme
  - math:def-morphism-of-schemes
  - math:def-fibre-product-schemes-universal-property
  - math:thm-fibre-products-of-schemes-exist
  - math:def-homeomorphism-and-open-maps
  - math:def-residue-field-scheme-point
  - math:def-initial-terminal-and-zero-object
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:def-finite-morphism-schemes
  - math:def-reduction-of-scheme
  - math:thm-reduction-universal-property
  - math:def-integral-closure-and-integrally-closed-domain
  - math:def-nilradical-and-reduced-ring
  - math:def-finite-type-and-module-finite-algebras
  - math:def-locally-noetherian-and-noetherian-scheme
  - lem-author-30ec96de6e59-finite-intermediate-module
  - lem-author-30ec96de6e59-seminormal-ring-reduced
dependency_roles:
  math:def-scheme: mathematical-premise
  math:def-morphism-of-schemes: mathematical-premise
  math:def-fibre-product-schemes-universal-property: mathematical-premise
  math:thm-fibre-products-of-schemes-exist: mathematical-premise
  math:def-homeomorphism-and-open-maps: mathematical-premise
  math:def-residue-field-scheme-point: mathematical-premise
  math:def-initial-terminal-and-zero-object: mathematical-premise
  math:def-locally-finite-type-and-finite-type-morphism: mathematical-premise
  math:def-finite-morphism-schemes: mathematical-premise
  math:def-reduction-of-scheme: mathematical-premise
  math:thm-reduction-universal-property: mathematical-premise
  math:def-integral-closure-and-integrally-closed-domain: mathematical-premise
  math:def-nilradical-and-reduced-ring: mathematical-premise
  math:def-finite-type-and-module-finite-algebras: mathematical-premise
  math:def-locally-noetherian-and-noetherian-scheme: mathematical-premise
  lem-author-30ec96de6e59-finite-intermediate-module: mathematical-premise
  lem-author-30ec96de6e59-seminormal-ring-reduced: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: The Stacks Project, Absolute weak normalization and seminormalization
      url: https://stacks.math.columbia.edu/tag/0EUS
      locator: Lemma 29.48.7(3)–(4), functoriality assertion, and displayed proof
      statement: For every scheme, the residue-field-preserving universal
        homeomorphisms to it admit an initial object with seminormal source;
        morphisms of schemes induce unique compatible maps between these
        objects.
      hypotheses: An arbitrary scheme; seminormality has the square-cube convention of
        Definitions 29.48.1 and 29.48.3.
      reading_limits: Read the complete statement and displayed proof on this page in
        this adjudication. The proof explicitly omits parts (3) and (4); these
        are imported here as precise established inputs, not locally
        reconstructed.
    - title: The Stacks Project, Weak normalization
      url: https://stacks.math.columbia.edu/tag/0H3I
      locator: Lemmas 29.56.3–29.56.5 (especially 29.56.5(2) and its affine
        construction), 29.56.7, and the implication after Definition 29.56.9
      statement: Relative seminormalization is obtained from intermediate subalgebras
        of an affine dominant algebra and is compatible with open restriction.
        Applying this to normalization gives absolute seminormalization when
        quasi-compact opens have finitely many irreducible components. Normal
        schemes in that scope are seminormal.
      hypotheses: "Relative scheme construction: quasi-compact, quasi-separated,
        dominant morphism. Comparison with absolute seminormalization: every
        quasi-compact open of the target has finitely many irreducible
        components. In this application the morphism is finite normalization of
        a scheme locally of finite type over a field."
      reading_limits: Read these statements, the displayed affine construction, the
        comparison proof and the normality implication. The proof of 29.56.3
        refers to the analogous preceding proof; 29.56.5 explicitly omits the
        seminormal part (2). No independent reconstruction of those proofs or
        their cited algebraic prerequisites is claimed.
    - title: The Stacks Project, Normalization
      url: https://stacks.math.columbia.edu/tag/0BXR
      locator: Lemma 33.27.1(1)–(2), and the first paragraph of its proof
      statement: For a scheme locally of finite type over a field, normalization is
        finite and factors through the reduction. Such a scheme is locally
        noetherian and every quasi-compact open has finitely many irreducible
        components.
      hypotheses: A field and a scheme locally of finite type over that field; the
        source calls this locally algebraic.
      reading_limits: Read the statement and complete displayed proof, including the
        first-paragraph justification of the component-finiteness hypothesis.
        The normalization and Nagata results invoked in the proof are imported,
        not reconstructed here.
    - title: The Stacks Project, Absolute weak normalization and seminormalization
      url: https://stacks.math.columbia.edu/tag/0H3G
      locator: Lemma 29.48.9(1)–(3) and displayed proof
      statement: A scheme is seminormal exactly when every universal homeomorphism to
        it with reduced source and residue-field isomorphisms is an isomorphism.
      hypotheses: An arbitrary target scheme; the source in the test morphism must be
        reduced.
      reading_limits: Read the complete statement and displayed proof. Its cited
        separatedness and closed-immersion results were not independently
        reconstructed; the equivalence itself is imported.
    - title: The Stacks Project, Seminormal rings and schemes
      url: https://stacks.math.columbia.edu/tag/0EUK
      locator: Definitions 29.48.1(1) and 29.48.3(1), and Lemma 29.48.4
      statement: Seminormality means existence and uniqueness of a compatible
        square-cube root. A scheme is seminormal if this holds on affine
        neighbourhoods of every point, equivalently on every affine open.
      hypotheses: Commutative rings and arbitrary schemes, with no noetherian hypothesis.
      reading_limits: Read the definitions, the complete affine-locality statement and
        its displayed proof by reference to local properties of rings. The
        referenced locality machinery was not reconstructed. Other results on
        the section page are not used as additional inputs.
    - title: The Stacks Project, Noetherian schemes
      url: https://stacks.math.columbia.edu/tag/01OU
      locator: Definition 28.5.1 and Lemma 28.5.2(1)–(2), including displayed proof
      statement: Every affine open in a locally noetherian scheme has a noetherian
        coordinate ring.
      hypotheses: The scheme is locally noetherian, meaning it admits affine
        neighbourhoods with noetherian coordinate rings.
      reading_limits: Read the definition, all four equivalent conditions and the
        displayed proof. Only (1) implies (2) is imported; the referenced
        local-property and localization results were not reconstructed.
    - title: The Stacks Project, Integral and finite morphisms
      url: https://stacks.math.columbia.edu/tag/01WG
      locator: Lemma 29.45.3(1)–(2), including displayed proof
      statement: A morphism is finite if its target admits an affine open cover on
        which the inverse images are affine and their coordinate algebras are
        finite modules.
      hypotheses: An arbitrary morphism of schemes and an affine open cover of its
        target with the stated inverse-image and module-finiteness properties.
      reading_limits: Read the statement and the displayed proof, which refers to
        Algebra, Lemma 10.36.14 and omits some details. This target-local
        criterion is imported without claiming a local reconstruction or a
        choice-free foundational analysis. The existing library lemma with this
        topic explicitly assumes AC in its converse; it is not used as an
        unconditional supplier.
dependency_level: 1
proof_strategy: direct
---

## Statement

For a scheme $X$, the category of universal homeomorphisms $Y\to X$ inducing isomorphisms on residue fields has an initial object $\pi_X:X^{\mathrm{sn}}\to X$, with seminormal source; its construction is functorial in $X$. A scheme is seminormal precisely when every such morphism with reduced source is an isomorphism. If $X$ is locally of finite type over a field, then $\pi_X$ factors uniquely through a finite morphism $X^{\mathrm{sn}}\to X_{\mathrm{red}}$, and a normal $X$ is seminormal.

Here a commutative ring $A$ is seminormal when, for every $x,y\in A$ satisfying $x^3=y^2$, there is a unique $a\in A$ with $a^2=x$ and $a^3=y$. A scheme is seminormal when every point has an affine open neighbourhood with seminormal coordinate ring. A scheme is reduced when its affine coordinate rings have no nonzero nilpotents. In the normality clause, normal means that every local ring is an integrally closed domain.

A morphism $f:Y\to X$ is a universal homeomorphism when, for every morphism $T\to X$, the projection $Y\times_X T\to T$ is a homeomorphism on underlying topological spaces. The residue-field condition requires $\kappa(f(y))\to\kappa(y)$ to be an isomorphism for every $y\in Y$. The category above has these morphisms to $X$ as objects and commuting morphisms over $X$ as arrows; initial means there is exactly one arrow from $\pi_X$ to each object. Functoriality means that every $h:X'\to X$ induces the unique compatible $h^{\mathrm{sn}}:(X')^{\mathrm{sn}}\to X^{\mathrm{sn}}$, with identity maps and compositions respected. The reduction $X_{\mathrm{red}}$ has the same underlying space as $X$ and structure sheaf obtained by quotienting out the locally nilpotent sections.

## Statement references

[[math:def-scheme]]

[[math:def-morphism-of-schemes]]

[[math:def-fibre-product-schemes-universal-property]]

[[math:thm-fibre-products-of-schemes-exist]]

[[math:def-homeomorphism-and-open-maps]]

[[math:def-residue-field-scheme-point]]

[[math:def-initial-terminal-and-zero-object]]

[[math:def-locally-finite-type-and-finite-type-morphism]]

[[math:def-finite-morphism-schemes]]

[[math:def-reduction-of-scheme]]

[[math:def-integral-closure-and-integrally-closed-domain]]

[[math:def-nilradical-and-reduced-ring]]

[[math:def-finite-type-and-module-finite-algebras]]

[[math:def-locally-noetherian-and-noetherian-scheme]]

## Facts & Assumptions

**Given:** A scheme $X$ with the conventions in the Statement; for the finite-type and normality clauses, assume that $X$ is locally of finite type over a field.

[F1] For arbitrary $X$, the initial object, its seminormal source and the compatible functorial maps are imported from [Stacks, Lemma 29.48.7(3)–(4)](https://stacks.math.columbia.edu/tag/0EUS).

[F2] The test using all reduced sources is imported from [Stacks, Lemma 29.48.9](https://stacks.math.columbia.edu/tag/0H3G).

[F3] The relative construction and comparison in [Stacks, Section 29.56](https://stacks.math.columbia.edu/tag/0H3I) place the inverse image of an affine $U=\operatorname{Spec}A\subseteq X$ under $\pi_X$ in the form $\operatorname{Spec}C$, where $C$ is an $A$-subalgebra of the normalization algebra $B$ over $U$. The comparison requires finitely many irreducible components on every quasi-compact open; this requirement holds for our locally finite type $X$ by the first paragraph of [Lemma 33.27.1](https://stacks.math.columbia.edu/tag/0BXR). The implication after Definition 29.56.9 also gives normality implies seminormality in this scope. Here the normalization algebra is the affine coordinate algebra of the normalization supplied in [F4]; its existence and the stated intermediate-algebra description are imported constructions.

[F4] For $X$ locally of finite type over a field, [Stacks, Lemma 33.27.1](https://stacks.math.columbia.edu/tag/0BXR) supplies a finite normalization and proves $X$ locally noetherian. Thus, for every affine $U=\operatorname{Spec}A\subseteq X$, its normalization inverse image is $\operatorname{Spec}B$ with $B$ finite over $A$ by [[math:def-finite-morphism-schemes]], and $A$ is noetherian by [Stacks, Lemma 28.5.2](https://stacks.math.columbia.edu/tag/01OU). Locally noetherian has the meaning in [[math:def-locally-noetherian-and-noetherian-scheme]]; noetherian means every ideal is finitely generated, and finite algebra means finite as a module, as in [[math:def-finite-type-and-module-finite-algebras]].

[F5] The square-cube definition and its validity on every affine open of a seminormal scheme are imported from [Stacks, Definitions 29.48.1 and 29.48.3 and Lemma 29.48.4](https://stacks.math.columbia.edu/tag/0EUK).

[F6] The square-cube condition implies reducedness by [[lem-author-30ec96de6e59-seminormal-ring-reduced]]. Nilpotence and reducedness use [[math:def-nilradical-and-reduced-ring]]. By [[math:thm-reduction-universal-property]], a morphism from a reduced scheme factors uniquely through the target's reduction; that reduction is the one in [[math:def-reduction-of-scheme]].

[F7] If $A$ is noetherian and $B$ is a finite $A$-algebra, every $A$-subalgebra $C\subseteq B$ is finite over $A$, by [[lem-author-30ec96de6e59-finite-intermediate-module]]. An $A$-subalgebra contains the image of $A$; injectivity of $A\to B$ is not required.

[F8] We import the affine-cover criterion for a finite morphism from [Stacks, Lemma 29.45.3](https://stacks.math.columbia.edu/tag/01WG): an affine open cover of the target with affine inverse images and module-finite coordinate algebras suffices.

## Proof

**Goal:** Establish the statement under its stated hypotheses.

1.1 The construction and functoriality follow from [F1], the reduced-source characterization from [F2], and the normality implication in the specified scope from [F3]. The affine coordinate rings of $X^{\mathrm{sn}}$ satisfy the square-cube condition by [F1] and [F5], hence are reduced by [F6]. Therefore [F6] gives a unique factorization $\rho:X^{\mathrm{sn}}\to X_{\mathrm{red}}$ of $\pi_X$. The reduction has the same underlying points by definition; quotienting local rings by nilpotents leaves their residue fields unchanged, since nilpotents vanish in a field. This also explains the reduction convention used in the statement. [given, F1, F2, F3, F5, F6, algebra]

2.1 Assume $X$ locally of finite type over a field. For every affine $U=\operatorname{Spec}A\subseteq X$, [F3] and [F4] give $\pi_X^{-1}(U)=\operatorname{Spec}C$ with $C$ an $A$-subalgebra of a finite $A$-algebra $B$ and $A$ noetherian. Apply [F7] to conclude that $C$ is a finite $A$-module. Since $C$ is reduced by step 1.1, the image of every element of $\sqrt{(0)}\subseteq A$ in $C$ is zero. The scalar action therefore factors through $A_{\mathrm{red}}=A/\sqrt{(0)}$, and the same finite list of module generators generates $C$ over $A_{\mathrm{red}}$: reduce the coefficients of each $A$-linear expression modulo $\sqrt{(0)}$. By the reduction definition and step 1.1, the inverse image under $\rho$ of $U_{\mathrm{red}}=\operatorname{Spec}A_{\mathrm{red}}$ is precisely $\operatorname{Spec}C$. The opens $U_{\mathrm{red}}$ cover $X_{\mathrm{red}}$, so [F8] proves $\rho$ finite. Empty affine charts have zero coordinate modules and satisfy the same argument. All stated claims follow. [given, F3, F4, F6, F7, F8, step 1.1, algebra] ∎

## External input

The construction, characterization, affine relative comparison, normality implication, normalization finiteness, affine-locality statements and target-local finite-morphism criterion in [F1]–[F5] and [F8] are the precise imported premises recorded in sources.references. The cited Stacks proofs omit or refer away parts of the seminormal construction and the finite-morphism criterion; no reconstruction of those parts is claimed. The proof here is a local composition of these inputs with the two declared local lemmas and the published universal property of reduction. In particular the finiteness inference in step 2.1 is supplied locally, so this whole theorem is not marked external_input.
