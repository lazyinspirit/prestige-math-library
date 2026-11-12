---
title: Exactness of ordinary derived cdh sheafification and evaluation
status: published
research_item: lem-adjudicate-e4768ff43a65-ordinary-localization-exactness
dependency_level: 9
sources:
  references:
    - title: Jacob Lurie, Higher Algebra (September 18, 2017)
      url: https://www.math.ias.edu/~lurie/papers/HA.pdf
      locator: Proposition 1.1.3.1 and its proof; Definition 1.1.3.2; Lemma 1.1.3.3
        and its proof; Proposition 1.1.3.4; section 1.1.4 opening and
        Proposition 1.1.4.1 with its proof, printed pp. 30–34 (zero-based PDF
        pages 29–33).
      statement: Diagram categories with stable target are stable, with pointwise
        fibers and cofibers. A full subcategory containing zero and closed under
        fibers and cofibers is stable. In stable categories pullbacks are
        pushouts; finite-limit preservation and finite-colimit preservation are
        equivalent exactness criteria.
      hypotheses: Stable infinity-categories and coherent diagram categories; a full
        subcategory for Definition 1.1.3.2. All indexing simplicial sets and
        universes must fit the stipulated size bounds. Apply to D(Z)-valued
        presheaves and the full ordinary cdh-sheaf subcategory proved closed
        below.
      reading_limits: Read primary PDF text in this assignment — Proposition 1.1.3.1
        and its proof, Definition 1.1.3.2, Lemma 1.1.3.3 and its proof,
        Proposition 1.1.3.4 and its proof, and the section 1.1.4 opening with
        Proposition 1.1.4.1 and its proof. The underlying higher categorical
        foundations remain imported. The cdh closure and reflector application
        below are local arguments. No visual PDF inspection or reconstruction of
        the foundational machinery is claimed.
    - title: Jacob Lurie, Higher Topos Theory (2009)
      url: https://www.math.ias.edu/~lurie/papers/HTT.pdf
      locator: Corollary 5.1.2.3, printed p. 319 (zero-based PDF page 336);
        Proposition 5.2.3.5, printed pp. 349–350 (PDF pages 366–367); Corollary
        5.5.2.4, printed p. 464 (PDF page 481).
      statement: Existing diagram colimits are pointwise, with the dual assertion for
        limits. Left adjoints preserve existing colimits and right adjoints
        preserve existing limits. Presentable infinity-categories admit small
        limits.
      hypotheses: Coherent diagrams in infinity-categories admitting the indexed
        colimits or, dually, limits; an adjunction for the preservation
        assertion; presentability for the last assertion. Use the supplied
        presentable D(Z) and the ordinary sheafification adjunction on the fixed
        small site.
      reading_limits: Read in this assignment the complete statements and displayed
        proofs of Corollaries 5.1.2.3 and 5.5.2.4 and Proposition 5.2.3.5 in
        primary PDF text. The foundational machinery they invoke remains
        imported. Pointwise limits use the dual of the stated colimit result. No
        visual PDF inspection or reconstruction of the foundational machinery is
        claimed.
---

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [lem-author-dcdf962edbda-qcqs-site](item-lem-author-dcdf962edbda-qcqs-site)
- [thm-author-e71ff76fe904-cdh-factorization-input](item-thm-author-e71ff76fe904-cdh-factorization-input)
- [thm-adjudicate-1ef158934564-ringed-derived-enhancement](item-thm-adjudicate-1ef158934564-ringed-derived-enhancement)
- [` Jacob Lurie, Higher Algebra (September 18, 2017) · Proposition 1.1.3.1 and its proof; Definition 1.1.3.2; Lemma 1.1.3.3 and its proof; Proposition 1.1.3.4; section 1.1.4 opening and Proposition 1.1.4.1 with its proof, printed pp. 30–34 (zero-based PDF pages 29–33). `](https://www.math.ias.edu/~lurie/papers/HA.pdf)
- [` Jacob Lurie, Higher Topos Theory (2009) · Corollary 5.1.2.3, printed p. 319 (zero-based PDF page 336); Proposition 5.2.3.5, printed pp. 349–350 (PDF pages 366–367); Corollary 5.5.2.4, printed p. 464 (PDF page 481). `](https://www.math.ias.edu/~lurie/papers/HTT.pdf)


## Statement
Assume the Axiom of Choice and the fixed nested universes and site-size bounds of the supplied constructions. Let $\mathcal C_F$ be the supplied entire qcqs prime-field cdh site, with its representative convention. Set $\mathcal D=D(\mathbb Z)$, the unbounded stable derived infinity-category of abelian groups, and $\mathcal P=\operatorname{Fun}(\mathcal C_F^{\mathrm{op}},\mathcal D)$. All diagrams, limits and colimits are homotopy coherent. Use a coefficient universe containing the chosen site and all cover and diagram index sets, and form the functor categories in a further universe, as permitted by the fixed bounds. Let $\mathcal S\subseteq\mathcal P$ be the full subcategory of ordinary covering-family/Čech cdh sheaves, and let $a^o:\mathcal P\to\mathcal S$ be the supplied left adjoint to its inclusion $i$. Write $L^{o,F}_{\mathrm{cdh}}=i a^o$, viewed as an endofunctor of presheaves.

Then $\mathcal S$ is stable, $i$ and $a^o$ are exact, and both $L^{o,F}_{\mathrm{cdh}}$ and evaluation $\operatorname{ev}_X(P)=P(X)$ preserve cofiber sequences. This includes evaluation at any supplied representative of a qcqs $F$-scheme $X$. Thus every presheaf cofiber sequence $P\to Q\to R$ gives a cofiber sequence
$$ (L^{o,F}_{\mathrm{cdh}}P)(X)\longrightarrow(L^{o,F}_{\mathrm{cdh}}Q)(X)\longrightarrow(L^{o,F}_{\mathrm{cdh}}R)(X). $$
Here $0$ denotes a zero object, $\operatorname{fib}(f)=A\times_B0$ and $\operatorname{cofib}(f)=B\sqcup_A0$ for $f:A\to B$. A cofiber sequence includes this defining pushout and its nullhomotopy; exact means preservation of finite limits and finite colimits. No identification with hypercompletion is needed.

## Facts & Assumptions
**Given:** The site, size bounds, ordinary reflector and derived target specified in the statement.

**Goal:** Establish exactness into the ambient presheaf category and after evaluation.

[A1] Assume the Axiom of Choice for the inherited representative choices and derived foundations. The fixed universes are assumed to exist, not deduced from Choice. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F1] [lem-author-dcdf962edbda-qcqs-site](item-lem-author-dcdf962edbda-qcqs-site) supplies the site and representative-based evaluation. [thm-author-e71ff76fe904-cdh-factorization-input](item-thm-author-e71ff76fe904-cdh-factorization-input) supplies its ordinary sheafification adjunction and the source $D(\mathbb Z)$ convention. For a covering family, the Čech descent comparison is from $P(T)$ to the limit of the cosimplicial diagram of products of $P$ on iterated fiber products. Products interpret formal families; an infinite disjoint union need not be a site object. The empty-cover comparison has target $0$.

[F2] [thm-adjudicate-1ef158934564-ringed-derived-enhancement](item-thm-adjudicate-1ef158934564-ringed-derived-enhancement) supplies a stable presentable enhancement: apply its Statement to the one-point ringed space with section ring $\mathbb Z$. A module sheaf on this space is just an abelian group with its integer action, so this is the same unbounded $D(\mathbb Z)$ used in [F1]. Reference 1 below supplies its small limits; presentability includes small colimits.

[F3] Reference 0 supplies the stable-category and exactness facts. Reference 1 supplies pointwise limits and colimits, their preservation by adjoints, and the small-limit consequence of presentability. These facts apply within the size bounds of [A1] and [F1].

## External input
Import only the categorical facts specified in [F3] from [Higher Algebra](https://www.math.ias.edu/~lurie/papers/HA.pdf) and [Higher Topos Theory](https://www.math.ias.edu/~lurie/papers/HTT.pdf), at the exact locators and under the hypotheses and reading limits in references 0 and 1. Existence of the ordinary source reflector and the derived enhancement are supplied by [F1] and [F2]. Closure of ordinary cdh sheaves and the resulting application to this reflector are proved locally below.

## Proof
1.1 By [F2]–[F3], $\mathcal P$ is stable with pointwise limits and colimits. Ordinary sheaves are closed under ambient limits: for a diagram of sheaves, evaluate its pointwise limit on a covering Čech diagram and interchange the two limits. The interchange follows from their universal property: either iterated limit represents cones on the same product-indexed diagram. Products over formal families are themselves limits. This also preserves the empty-cover comparison. The zero presheaf satisfies descent. Both cochain shifts $[1]$ and $[-1]$ of $\mathcal D$ are mutually inverse equivalences, hence preserve limits, and therefore preserve the Čech descent comparisons. Consequently $\mathcal S$ is closed under fibers and both shifts; since $\operatorname{cofib}(f)\simeq\operatorname{fib}(f)[1]$ in a stable category, it is also closed under ambient cofibers. Reference 0 now makes $\mathcal S$ stable. The inclusion preserves finite limits by the closure just proved, so it is exact by the same reference. [given, A1, F1, F2, F3]

2.1 The functor $a^o$ is a left adjoint by [F1], so reference 1 makes it preserve finite colimits into $\mathcal S$. Both source and target are stable by step 1.1, hence reference 0 makes $a^o$ exact. Composing with the exact inclusion proves exactness of the ambient endofunctor $i a^o$. Evaluation preserves zero and cofibers because these are pointwise by [F3]; evaluating at a chosen representative is the same evaluation functor at that site object. Thus applying $i a^o$ and then evaluation to the defining cofiber square of $P\to Q\to R$ gives the displayed sequence with its actual maps and nullhomotopy. This proves the claim for the ordinary reflector on the entire site. [A1, F1, F2, F3, step 1.1] ∎
