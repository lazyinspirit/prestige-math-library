---
id: thm-author-c5bc2838d897-kflat-addendum-verdier-criterion
kind: theorem
title: External full-subcategory localization criterion
status: published
domain: mathematics
deps:
  - math:def-axiom-of-choice
  - math:def-category-with-translation
  - math:def-triangle-in-a-category-with-translation
  - math:def-triangulated-category-axiom-tr-one
  - math:def-triangulated-category-axiom-tr-two
  - math:def-triangulated-category-axiom-tr-three
  - math:def-multiplicative-system-in-a-category
  - math:def-localization-of-a-category-at-a-class-of-morphisms
  - math:def-equivalence-and-adjoint-equivalence-of-categories
  - math:def-abelian-category
  - math:def-homotopy-category-of-chain-complexes
  - math:def-quasi-isomorphism
  - math:def-derived-category-of-an-abelian-category
  - math:def-filtered-category-and-filtered-colimit
  - math:def-simplicial-set-homotopy-and-trivial-kan-fibration
dependency_roles:
  math:def-axiom-of-choice: mathematical-premise
  math:def-category-with-translation: mathematical-premise
  math:def-triangle-in-a-category-with-translation: mathematical-premise
  math:def-triangulated-category-axiom-tr-one: mathematical-premise
  math:def-triangulated-category-axiom-tr-two: mathematical-premise
  math:def-triangulated-category-axiom-tr-three: mathematical-premise
  math:def-multiplicative-system-in-a-category: mathematical-premise
  math:def-localization-of-a-category-at-a-class-of-morphisms: mathematical-premise
  math:def-equivalence-and-adjoint-equivalence-of-categories: mathematical-premise
  math:def-abelian-category: mathematical-premise
  math:def-homotopy-category-of-chain-complexes: mathematical-premise
  math:def-quasi-isomorphism: mathematical-premise
  math:def-derived-category-of-an-abelian-category: mathematical-premise
  math:def-filtered-category-and-filtered-colimit: mathematical-premise
  math:def-simplicial-set-homotopy-and-trivial-kan-fibration: mathematical-premise
provenance:
  statement: ai-altered
  proof: literature-derived
external_input: true
sources:
  references:
    - title: The Stacks Project, full-subcategory localization criterion
      url: https://stacks.math.columbia.edu/tag/0GSL
      locator: Lemma 13.5.8, entire statement and proof; Proposition 13.5.6 (05R6) and
        Lemma 13.5.7 (05R7) for the localized pretriangulated structure and
        exact functor
      statement: Under the replacement hypothesis, localization of the full
        pretriangulated subcategory is equivalent to the ambient localization,
        with saturated compatible restricted system.
      hypotheses: D pretriangulated; Dprime full pretriangulated; S saturated and
        compatible; every ambient X receives an S-arrow from Dprime. Work in the
        size convention of the body.
      reading_limits: This repair read the full HTML statement and proof of 0GSL, 05R6
        and 05R7. The general localization construction and its prerequisites
        are imported, not reproved. No chapter-PDF rereading is claimed.
    - title: The Stacks Project, quasi-isomorphisms and derived localization
      url: https://stacks.math.columbia.edu/tag/05RT
      locator: Lemma 13.11.2, entire statement and proof; Definition 13.11.3
        (https://stacks.math.columbia.edu/tag/05RU)
      statement: The acyclic complexes determine a saturated compatible
        quasi-isomorphism system in the cochain homotopy category; its
        localization is the derived category.
      hypotheses: A abelian, unbounded cochain complexes. Categories and denominator
        diagrams are small in the larger working universe specified below; no
        small-Hom assertion in the original universe is made.
      reading_limits: This repair read both full HTML entries, including the proof of
        05RT reducing to Lemma 13.6.11. That earlier kernel theorem is imported,
        not reconstructed.
    - title: The Stacks Project, right fractions and localized Hom sets
      url: https://stacks.math.columbia.edu/tag/04VB
      locator: Definition 4.27.1 (right multiplicative systems); right-calculus
        construction immediately before Lemma 4.27.11 (04VH), that lemma; Lemmas
        4.27.13 (04VI), 4.27.14 (04VJ); Remark 4.27.15
        (https://stacks.math.columbia.edu/tag/05Q4), equation 4.27.15.1
      statement: Right fractions are roofs, with equality given by a common
        refinement; S/X is cofiltered and Hom in the localization is the colimit
        over (S/X) opposite.
      hypotheses: C an ordinary category and S a right multiplicative system; all sets
        and denominator diagrams are in the working universe. Refinement maps
        need not themselves be in S, but their common composite denominator must
        be in S.
      reading_limits: This repair read the stated HTML definition, the complete
        right-calculus construction, statement and duality proof of 4.27.11, the
        full statements and duality proofs of 4.27.13 and 4.27.14, and all of
        Remark 4.27.15. The earlier left-calculus proofs are not reconstructed
        here.
    - title: Jacob Lurie, Higher Topos Theory
      url: https://www.math.ias.edu/~lurie/papers/HTT.pdf
      locator: Proposition 1.2.3.1 and proof, printed pp. 28–29 (PDF pages 46–47);
        following generators-and-relations description of hT on printed p. 29
      statement: The ordinary nerve N has left adjoint h on simplicial sets, giving
        natural bijections between functors hT to B and simplicial maps T to
        N(B).
      hypotheses: T a simplicial set and B an ordinary category, in fixed universes; h
        is the underlying ordinary homotopy category, with enrichment forgotten.
      reading_limits: This repair read the proposition, its full displayed proof and
        the following generators-and-relations description in the PDF text, and
        Definition 1.1.2.4. No reconstruction of the earlier simplicial-category
        adjunction machinery is claimed. The consumer supplies the application
        to infinity-localization; that application is not attributed verbatim to
        this proposition.
    - title: The Stacks Project, pretriangulated convention
      url: https://stacks.math.columbia.edu/tag/0145
      locator: Definition 13.3.2, including the final sentence defining
        pre-triangulated by TR1–TR3
      statement: An additive category with translation and distinguished triangles
        satisfying TR1, TR2 and TR3 is pretriangulated; imposing TR4
        additionally gives a triangulated category.
      hypotheses: Specified additive translation autoequivalence and triangle class;
        the pretriangulated convention omits the octahedral axiom.
      reading_limits: Read the complete HTML definition and its final pretriangulated
        convention. The three axioms are supplied by the exact existing Math
        Library definitions listed in deps.
    - title: The Stacks Project, compatibility with the triangulated structure
      url: https://stacks.math.columbia.edu/tag/05R2
      locator: Definition 13.5.1, conditions (1) and (2)
      statement: Compatibility requires shift-invariant membership in S and a triangle
        completion whose third vertical map is in S when the first two are in S.
      hypotheses: A pretriangulated category and a two-sided multiplicative system S.
      reading_limits: Read the full HTML definition, including both conditions. This
        is a formulation convention, not a locally proved theorem.
    - title: The Stacks Project, saturation
      url: https://stacks.math.columbia.edu/tag/05Q8
      locator: Definition 4.27.20, condition MS4
      statement: For a multiplicative system, saturation is the condition that fg and
        gh in S imply g in S for three composable arrows.
      hypotheses: S already satisfies the two-sided multiplicative-system axioms.
      reading_limits: Read the entire HTML definition. The equivalent characterization
        by invertibility in the localization is not needed as an additional
        local theorem.
dependency_level: 0
---

## Statement
Assume AC and the size convention below. Let $D$ be a pretriangulated category, $D'\subseteq D$ a full pretriangulated subcategory, and $S$ a saturated multiplicative system compatible with the triangulated structure. If every $X\in D$ receives $s:X'\to X$ in $S$ with $X'\in D'$, then $S'=S\cap\operatorname{Arrows}(D')$ is a saturated compatible multiplicative system and $(S')^{-1}D'\to S^{-1}D$, induced by inclusion, is an exact equivalence. This conclusion includes full faithfulness, not merely essential surjectivity.

For the intended application, if $A$ is any abelian category subject to that size convention, $S=\operatorname{Qis}(A)$ in $K(A)$ is a saturated compatible multiplicative system and $S^{-1}K(A)=D(A)$. For a right multiplicative system, roofs and their common-refinement equivalence compute the localization; equivalently, Hom in the localization is the filtered colimit over denominators into the source.

## Statement references
[[math:def-axiom-of-choice]]

[[math:def-abelian-category]]

[[math:def-homotopy-category-of-chain-complexes]]

[[math:def-quasi-isomorphism]]

[[math:def-derived-category-of-an-abelian-category]]

[[math:def-localization-of-a-category-at-a-class-of-morphisms]]

[Full-subcategory criterion, Stacks Lemma 13.5.8](https://stacks.math.columbia.edu/tag/0GSL)

[Quasi-isomorphism system, Stacks Lemma 13.11.2](https://stacks.math.columbia.edu/tag/05RT)

[Derived localization, Stacks Definition 13.11.3](https://stacks.math.columbia.edu/tag/05RU)

[Localized Hom formula, Stacks Remark 4.27.15](https://stacks.math.columbia.edu/tag/05Q4)

## Definition
The size convention is relative to a fixed larger working universe: the objects and arrows of every ordinary category in a localization or Hom formula, and each denominator diagram, form sets there. Thus these categories and diagrams are small there, and the Hom sets and colimits asserted here are sets in that universe. For categories of all sheaves or complexes from an initial universe, choose the larger universe to contain their object and arrow collections as sets. No claim of small Hom sets in the initial universe for an arbitrary unbounded derived category is made. AC permits set-indexed choices of representatives and quasi-inverse data in the working universe; no choice over a proper class there is used.

A pretriangulated category means a category with additive translation and a specified class of triangles satisfying exactly TR1, TR2 and TR3. Translation includes a chosen inverse and coherence for integer shifts; triangles have the form $X\to Y\to Z\to X[1]$. A full pretriangulated subcategory has the ambient Hom sets between its objects and inherited translation and distinguished-triangle structure, itself satisfying these three axioms. No octahedral axiom is imposed. An exact functor is an additive functor $F$ with a specified natural isomorphism $F(X[1])\cong F(X)[1]$ carrying distinguished triangles to distinguished triangles, using that isomorphism on the last arrow. An exact equivalence is such a functor that is an equivalence of ordinary categories.

A multiplicative system is the two-sided system of identities, composites, Ore squares and cancellation in the cited library definition. A right multiplicative system requires only the right-hand fraction conditions: identities and composites lie in $S$; for $f:U\to Y$ and $s:V\to Y$ with $s\in S$ there are $t:W\to U$ in $S$ and $g:W\to V$ with $ft=sg$; if $f,g:X\to Y$ and $s:Y\to Z$ in $S$ satisfy $sf=sg$, some $t:W\to X$ in $S$ satisfies $ft=gt$. A two-sided system is saturated when, for composable $f,g,h$, membership of both $fg$ and $gh$ in $S$ implies $g\in S$. Compatibility means $f\in S$ if and only if $f[1]\in S$, and every commuting square on the first two objects of distinguished triangles whose two vertical arrows lie in $S$ extends to a morphism of triangles with third vertical arrow also in $S$.

The notation $S^{-1}C$ means the same-object localization with its universal functor $Q_C:C\to S^{-1}C$ inverting $S$. For the pretriangulated localizations in the criterion, translation is induced by that of $C$, the shift comparison for $Q_C$ is the identity, and distinguished triangles are precisely triangles isomorphic to images of distinguished triangles of $C$. The functor in the Statement is the factorization of $D'\hookrightarrow D\xrightarrow{Q_D}S^{-1}D$ through $Q_{D'}$, with the induced shift comparison. Existence of these structures and exactness are part of the imported localization results, not an inference from the universal property alone.

For an abelian category $A$, use unbounded cochain complexes, with $K(A)$ the chain homotopy category reindexed by $C^n=C_{-n}$, and with the usual cone triangles. A quasi-isomorphism induces an isomorphism on every cohomology object; $\operatorname{Qis}(A)$ denotes their homotopy classes in $K(A)$. Put $D(A)=\operatorname{Qis}(A)^{-1}K(A)$. A complex is acyclic when all its cohomology objects vanish.

A right roof from $X$ to $Y$ is $X\xleftarrow{s}Q\xrightarrow{a}Y$ with $s\in S$. A common refinement of two such roofs consists of $u_i:R\to Q_i$ with $s_1u_1=s_2u_2\in S$ and $a_1u_1=a_2u_2$; the $u_i$ need not themselves lie in $S$. The denominator category $S/X$ has objects $s:Q\to X$ in $S$ and arrows from $s$ to $t:R\to X$ given by $u:Q\to R$ with $tu=s$. Cofiltered means that the opposite category is filtered. The functor on $(S/X)^{\mathrm{op}}$ sends $s:Q\to X$ to $\operatorname{Hom}_C(Q,Y)$, with transition maps given by precomposition. Its colimit is the ordinary set-valued filtered colimit; the claim that it computes localized Hom, including the asserted common-refinement equality, is imported below.

For the additional imported adjunction, a simplicial set $T$ is a functor $\Delta^{\mathrm{op}}\to\mathrm{Set}$, with face maps $d_i$ and degeneracies $s_i$. The ordinary nerve of $B$ has $N(B)_n=\operatorname{Fun}([n],B)$, where $[n]$ is the ordered category on $0,\ldots,n$, and simplicial operators act by precomposition. The ordinary category $hT$ has the vertices of $T$ as objects and is generated by its directed edges, subject to $d_0(\sigma)\circ d_2(\sigma)=d_1(\sigma)$ for each $2$-simplex $\sigma$ and to each degenerate edge $s_0(x)$ being the identity. Morphisms are finite edge paths modulo the smallest composition-compatible equivalence relation generated by these relations. Composition is induced by concatenation, with empty paths as identities; associativity and identities descend to the quotient. Thus this construction specifies an ordinary category. This is the underlying ordinary homotopy-category convention in the imported proposition. The adjunction $h\dashv N$ means a bijection $\operatorname{Fun}(hT,B)\cong\operatorname{Hom}_{\mathrm{sSet}}(T,N(B))$, natural in $T$ and $B$; here $\operatorname{Fun}$ denotes the set of ordinary functors and the right side the set of simplicial maps.

## Definition references
[[math:def-category-with-translation]]

[[math:def-triangle-in-a-category-with-translation]]

[[math:def-triangulated-category-axiom-tr-one]]

[[math:def-triangulated-category-axiom-tr-two]]

[[math:def-triangulated-category-axiom-tr-three]]

[[math:def-equivalence-and-adjoint-equivalence-of-categories]]

[[math:def-multiplicative-system-in-a-category]]

[[math:def-filtered-category-and-filtered-colimit]]

[[math:def-simplicial-set-homotopy-and-trivial-kan-fibration]]

[Pretriangulated convention, Stacks Definition 13.3.2](https://stacks.math.columbia.edu/tag/0145)

[Compatibility, Stacks Definition 13.5.1](https://stacks.math.columbia.edu/tag/05R2)

[Saturation, Stacks Definition 4.27.20](https://stacks.math.columbia.edu/tag/05Q8)

[Right multiplicative systems and fractions, Stacks Section 4.27](https://stacks.math.columbia.edu/tag/04VB)

[Localized pretriangulated structure, Stacks Proposition 13.5.6](https://stacks.math.columbia.edu/tag/05R6)

[Exact factorization, Stacks Lemma 13.5.7](https://stacks.math.columbia.edu/tag/05R7)

[Ordinary nerve and homotopy category, HTT Proposition 1.2.3.1 and following presentation](https://www.math.ias.edu/~lurie/papers/HTT.pdf)

## Source contract
**Given:** $D,D',S$ with exactly the hypotheses in the Statement and the explicit size and formulation conventions above.

**Goal:** Import the precise localization criterion and the actual Hom-set/equality description used in its application.

[F1] Stacks Lemma 13.5.8 gives the exact equivalence under those hypotheses. Proposition 13.5.6 and Lemma 13.5.7 supply the pretriangulated localizations and exact factorization used in its formulation.

[F2] Stacks Lemma 13.11.2 and Definition 13.11.3 give the saturated compatible quasi-isomorphism system in $K(A)$ and the classical derived localization $D(A)$, with the size convention above.

[F3] Stacks Section 4.27 right calculus, Lemmas 4.27.11, 4.27.13 and 4.27.14, and Remark 4.27.15 give well-defined roof localization, common-refinement equality, and the formula $\operatorname{Hom}_{S^{-1}C}(X,Y)=\operatorname*{colim}_{(s:Q\to X)\in(S/X)^{\mathrm{op}}}\operatorname{Hom}_C(Q,Y)$. In particular $S/X$ is cofiltered.

[F4] HTT Proposition 1.2.3.1 states the adjunction $h\dashv N$ in the precise ordinary-category/simplicial-set sense defined above. Its formal application to the localization universal property is made in the local consumer; it is not attributed verbatim as an additional source theorem.

## External input
Import [F1]–[F4] with the statements, hypotheses, locators and reading limits in the four corresponding source records. The three additional definition records fix the pretriangulated, compatibility and saturation conventions. The proof of [F1] uses the denominator-colimit formula for full faithfulness. The replacement hypothesis applies to every ambient object. No projectivity or orthogonality hypothesis is added, and no K-flat object is asserted K-projective.
