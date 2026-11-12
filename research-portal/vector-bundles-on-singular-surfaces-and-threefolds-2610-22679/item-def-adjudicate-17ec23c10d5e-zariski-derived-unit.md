---
title: Small Zariski site, abelian sheafification and derived unit
status: published
research_item: def-adjudicate-17ec23c10d5e-zariski-derived-unit
dependency_level: 9
sources:
  references:
    - title: "The Stacks Project, Section 18.3: Abelian sheaves"
      url: https://stacks.math.columbia.edu/tag/03CM
      locator: Opening paragraphs and Lemma 18.3.1(1)-(4), including its proof and its
        abelian-presheaf premise
      statement: Abelian presheaves and sheaves form abelian categories; abelian
        sheafification is an additive left adjoint to inclusion.
      hypotheses: A site with fixed size bounds; apply to the open-set site of a scheme.
      reading_limits: Read the indicated paragraphs and lemma/proof in this
        assignment. The cited general sheafification foundations were not
        independently reconstructed.
    - title: "The Stacks Project, Section 20.32: Some properties of K-injective
        complexes"
      url: https://stacks.math.columbia.edu/tag/0D5U
      locator: Opening paragraphs and Lemmas 20.32.1-20.32.2 with proofs
      statement: Restriction to an open subspace is exact and preserves K-injective
        complexes, so the restricted resolution computes derived sections on
        that subspace.
      hypotheses: A ringed topological space and an open subspace; use the underlying
        Zariski space with the constant integer sheaf, whose modules are abelian
        sheaves.
      reading_limits: Read the opening and both named lemmas/proofs. Their
        exact-extension-by-zero and adjunction foundations remain imported. No
        claim about arbitrary inverse-image functors is used.
    - title: "The Stacks Project, Section 13.31: K-injective complexes"
      url: https://stacks.math.columbia.edu/tag/070G
      locator: Definition 13.31.1 and Lemma 13.31.2, statement and proof
      statement: For a K-injective target, morphisms in the derived category are
        uniquely represented up to chain homotopy, and precomposition by a
        quasi-isomorphism gives a bijection on homotopy classes.
      hypotheses: An abelian category and a K-injective target complex; apply to
        abelian sheaves on the small Zariski site.
      reading_limits: Read the displayed definition and complete lemma/proof.
        Existence of K-injective resolutions is supplied separately by the
        declared general site input; it is not proved by this lemma.
    - title: "The Stacks Project, Section 7.44: Sheaves of algebraic structures"
      url: https://stacks.math.columbia.edu/tag/00YR
      locator: Properties alpha-zeta, Proposition 7.44.3 final assertion and proof for
        abelian groups
      statement: Abelian sheafification has underlying set sheafification given by the
        double plus construction, with its natural unit.
      hypotheses: A site and abelian-group-valued presheaves, within fixed size bounds.
      reading_limits: Read the displayed properties, final assertion and abelian-group
        proof. General sheafification existence and algebraic-structure
        foundations are imported.
---

PDF p. 4: Smooth raw cycle comparison; PDF p. 16: Supported generic localization

## Prerequisites

- [def-scheme-sites-and-sheafification](item-def-scheme-sites-and-sheafification)
- [lem-author-a44f2061570d-site-derived-input](item-lem-author-a44f2061570d-site-derived-input)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)
- [math:def-cochain-complex-in-an-abelian-category](https://alphabetamath.cc/item/def-cochain-complex-in-an-abelian-category)
- [math:def-restriction-sheaf-open-subspace](https://alphabetamath.cc/item/def-restriction-sheaf-open-subspace)
- [` The Stacks Project, Section 18.3: Abelian sheaves · Opening paragraphs and Lemma 18.3.1(1)-(4), including its proof and its abelian-presheaf premise `](https://stacks.math.columbia.edu/tag/03CM)
- [` The Stacks Project, Section 20.32: Some properties of K-injective complexes · Opening paragraphs and Lemmas 20.32.1-20.32.2 with proofs `](https://stacks.math.columbia.edu/tag/0D5U)
- [` The Stacks Project, Section 13.31: K-injective complexes · Definition 13.31.1 and Lemma 13.31.2, statement and proof `](https://stacks.math.columbia.edu/tag/070G)
- [` The Stacks Project, Section 7.44: Sheaves of algebraic structures · Properties alpha-zeta, Proposition 7.44.3 final assertion and proof for abelian groups `](https://stacks.math.columbia.edu/tag/00YR)


## Definition
Assume the Axiom of Choice. Fix Grothendieck universes $\mathcal U\in\mathcal V$ with $\omega\in\mathcal U$ and size bounds containing the scheme $Y$, its opens and the coefficient groups; these bounds are hypotheses, not an assertion of universe existence. The small Zariski site $Y_{\mathrm{Zar}}$ is the poset of open subschemes of $Y$, with one arrow $V\to W$ when $V\subseteq W$. Covering families are families of open inclusions whose union is the target. Work within the fixed enlarged bounds for sheaf and derived categories.

An abelian presheaf assigns an abelian group to each open and restriction homomorphisms to inclusions, with identity and composition laws. An abelian sheaf is such a presheaf satisfying the sheaf condition. Let $a$ denote abelian sheafification, with its natural unit $P\to aP$, rather than merely set-valued sheafification. For a cochain complex $P$ of abelian presheaves, set $(aP)^q=a(P^q)$ and $d_{aP}^q=a(d_P^q)$. The cochain convention is $d^{q+1}d^q=0$; a homological complex $C_n$ is reindexed as $P^q=C_{-q}$ with $d_P^q=\partial_{-q}$.

For a complex $B$ in an abelian category, $H^q(B)=\ker d_B^q/\operatorname{im}d_B^{q-1}$, and acyclic means that all these objects vanish. A cochain map commutes with differentials. A homotopy between cochain maps $f,g:A\to B$ is a family $h^q:A^q\to B^{q-1}$ with $f^q-g^q=d_B^{q-1}h^q+h^{q+1}d_A^q$; null-homotopic means homotopic to zero.

Write $D(\operatorname{Ab}(Y_{\mathrm{Zar}}))$ for the unbounded derived category, formed by inverting quasi-isomorphisms, and $D(\operatorname{Ab})$ for that of abelian groups. A quasi-isomorphism induces isomorphisms on every cohomology object. Choose a K-injective resolution $\iota:aP\to I$ of complexes of abelian sheaves, where K-injective means that maps from acyclic complexes are null-homotopic. For each open $W\subseteq Y$, $R\Gamma(W,aP)$ is represented by $I(W)$; write $R\Gamma(Y_{\mathrm{Zar}},aP)=R\Gamma(Y,aP)$. The derived-evaluation unit is the morphism in $D(\operatorname{Ab})$ represented by
$$\eta_{P,W}:P(W)\longrightarrow(aP)(W)\xrightarrow{\iota(W)}I(W).$$
It is independent of the resolution under the canonical derived identifications and is natural for inclusions of opens. If $U\subseteq Y$ is open, $P|_U$ means the same assignments restricted to opens contained in $U$; $(aP)|_U=a(P|_U)$ canonically, and $I|_U$ computes derived sections on $U_{\mathrm{Zar}}$. Thus the unit over $U$ agrees with the restriction of this construction. No assertion that $\eta_{P,W}$ is a quasi-isomorphism for arbitrary $P$ is part of this definition.

## Definition references
[def-scheme-sites-and-sheafification](item-def-scheme-sites-and-sheafification)

[lem-author-a44f2061570d-site-derived-input](item-lem-author-a44f2061570d-site-derived-input)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)

[math:def-cochain-complex-in-an-abelian-category](https://alphabetamath.cc/item/def-cochain-complex-in-an-abelian-category)

[math:def-restriction-sheaf-open-subspace](https://alphabetamath.cc/item/def-restriction-sheaf-open-subspace)

## Facts & Assumptions
**Given:** The stated size bounds, Choice, the scheme $Y$ and a complex $P$ of abelian presheaves on its open-set site.

**Goal:** Specify the sheafified complex and the canonical, restriction-compatible derived-evaluation unit.

[A1] Choice is retained for the imported K-injective existence construction and the selection of a resolution. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) The universe closure convention is [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention).

[F1] Scheme sites, covering sieves, sheafification units and matching families have the meaning of [def-scheme-sites-and-sheafification](item-def-scheme-sites-and-sheafification). The general small-site input [lem-author-a44f2061570d-site-derived-input](item-lem-author-a44f2061570d-site-derived-input) supplies unbounded derived evaluation using K-injective resolutions, also for this site. Cochain grading is as in [math:def-cochain-complex-in-an-abelian-category](https://alphabetamath.cc/item/def-cochain-complex-in-an-abelian-category), and restriction to an open is as in [math:def-restriction-sheaf-open-subspace](https://alphabetamath.cc/item/def-restriction-sheaf-open-subspace).

[F2] Abelian presheaves and sheaves form abelian categories; abelian sheafification is additive and has its natural adjunction unit. Its underlying set sheafification is the double plus construction of [F1]. [Stacks, Section 18.3](https://stacks.math.columbia.edu/tag/03CM) and [Section 7.44, properties alpha-zeta and Proposition 7.44.3](https://stacks.math.columbia.edu/tag/00YR).

[F3] On a ringed space, restriction to an open is exact and preserves K-injective complexes. [Stacks, Lemmas 20.32.1-20.32.2](https://stacks.math.columbia.edu/tag/0D5U). Apply this with the constant integer sheaf: integer multiplication and sheaf gluing identify its modules with abelian sheaves.

[F4] Precomposition by a quasi-isomorphism gives a bijection on homotopy classes of maps into a K-injective complex. [Stacks, Lemma 13.31.2](https://stacks.math.columbia.edu/tag/070G).

## External input
References 0 and 3 supply [F2], reference 1 supplies [F3], and reference 2 supplies [F4], under their recorded hypotheses and reading limits. K-injective existence and derived evaluation are supplied by the declared general site input in [F1]. The following verification composes these premises; it does not reconstruct their foundational proofs.

## Justification
1.1 The open-set poset has a set of objects within the chosen bounds. Identities cover, pullback of a cover is intersection with an open, and successive covers compose because unions of their members recover the target. It is therefore the stated small site. By [F2], $a(d_P^{q+1})a(d_P^q)=a(0)=0$, so degreewise sheafification gives a cochain complex, and naturality of the unit makes $P\to aP$ a chain map. For an open $W\subseteq U$, its open subsets, covering families, matching families and refinements are identical whether regarded inside $U$ or $Y$. The double plus construction of [F1], with the underlying-set compatibility in [F2], therefore gives $(aP)|_U=a(P|_U)$ with the same unit, degree by degree. [F1, F2, A1, construct]

2.1 By [F1] and [A1], choose $aP\to I$; evaluating it after the sheafification unit gives the displayed morphism. For another resolution $aP\to J$, [F4] gives a comparison $I\to J$ commuting with those resolution maps up to homotopy, uniquely up to homotopy. Applying the same bijection in the reverse direction gives inverse comparisons up to homotopy. Evaluation preserves the chain-homotopy equations, so the evaluated comparison identifies both units canonically in $D(\operatorname{Ab})$. Each representative composite commutes with restriction homomorphisms, proving naturality. By [F3], $I|_U$ remains a K-injective resolution of $(aP)|_U$; its value at every open of $U$ is the same $I(W)$. Together with step 1.1 this identifies the construction on $U_{\mathrm{Zar}}$ and proves the claimed restriction compatibility. [F1, F3, F4, A1, step 1.1] ∎
