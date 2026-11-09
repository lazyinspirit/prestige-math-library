---
id: thm-author-59b1a831fe59-classical-derived-input
kind: theorem
title: External classical coefficient, derived Yoneda and effective-localization
  interface
status: draft
domain: mathematics
deps: []
dependency_roles: {}
provenance:
  statement: literature-derived
  proof: literature-derived
external_input: true
sources:
  references:
    - title: "Mazza–Voevodsky–Weibel, Lecture notes on motivic cohomology: derived
        coefficient evaluation"
      url: https://sites.math.rutgers.edu/~weibel/MVWnotes/xprova.pdf
      locator: Theorem13.1 and Lemma13.4 with full printed proof pp101–102/PDF112–113;
        Exercise13.5 p102; Proposition13.10 and Example13.11 p103/PDF114;
        Definition14.6/equation14.6.1 pp115–116; Propositions14.8/14.9,
        Theorem14.11 and Remark14.12 pp116–117; Proposition14.16 p118/PDF129.
      statement: Classical motivic complexes are A¹-local; their Nisnevich and Zariski
        hypercohomology agree by the canonical comparison. Derived Yoneda
        evaluates the coefficient on smooth schemes, and the A¹-local target
        computes Hom after localization. The source includes the actual derived
        Hom construction for geometric motives and coefficient complexes.
      hypotheses: Perfect field for A¹-locality and Zariski/Nisnevich comparison;
        smooth separated finite-type schemes as Sm/k; integral coefficients
        here; bounded-above complexes in the effective category. AC and
        resolution choices are retained explicitly.
      reading_limits: Read actual full statements and displayed proofs at the
        indicated locators, including13.4,13.10,14.8–14.11 and14.16, and all of
        Remark14.12. Read Exercise13.5 as an exercise statement; no printed
        proof of that exercise is claimed. Its standard derived-evaluation
        conclusion is part of this explicit imported package, implemented by
        actual Yoneda on coefficient resolutions; it is not claimed to follow
        from objectwise Chow group agreement. Earlier foundational
        injective/derived constructions are not reconstructed.
    - title: MVW, Tate coefficients and negative-weight convention
      url: https://sites.math.rutgers.edu/~weibel/MVWnotes/xprova.pdf
      locator: Definition3.1 p23/PDF34; Example8.10 p60/PDF71; Definition14.2
        p113/PDF124 and Lemma14.4 p114/PDF125; Sm/k convention p5/PDF16.
      statement: Z(r) is the shifted singular complex on the r-fold pointed G_m smash;
        pointed representables tensor as smash products. Singular-complex
        replacement is an A¹-equivalence, yielding the ordinary Tate-power
        convention in DM. Definition3.1 explicitly puts Z(r)=0 for r<0.
      hypotheses: Nonnegative r for the tensor-power construction; nonnegative r,d for
        the effective twist identity. The negative-zero statement is a
        coefficient convention. Use the source smooth separated finite-type
        category.
      reading_limits: Read the actual exact definitions, full Example8.10, Lemma14.4
        statement and short proof reference, and the source Sm/k convention. The
        tensor-category/localization foundations are imported; no effective
        inverse Tate object in negative weight is asserted.
dependency_level: 0
---

## Statement
Over a perfect field, let $\mathcal A$ be the category of Nisnevich sheaves with transfers on smooth separated finite-type schemes, with integral coefficients. For $j\geq0$, the classical complex $\mathbb Z(j)$ is bounded above and A¹-local. Its actual restriction functor is naturally modeled by
$$R\Gamma_{\mathrm{Zar}}(Y,\mathbb Z(j))\simeq R\Gamma_{\mathrm{Nis}}(Y,\mathbb Z(j))\simeq R\operatorname{Hom}_{D(\mathcal A)}(\mathbb Z_{\mathrm{tr}}(Y),\mathbb Z(j)).$$
The first comparison is the canonical topology-change map, not a chosen isomorphism of groups; the second is derived Yoneda evaluation. Against an A¹-local target, localization identifies Hom in $D^-(\mathcal A)$ with Hom in $DM^{\mathrm{eff},-}_{\mathrm{Nis}}$. These comparisons are natural for actual open maps, and derived Hom takes a cone in the source to the corresponding restriction fiber.

The Tate convention is $\mathbb Z(r)=C_*\mathbb Z_{\mathrm{tr}}(\mathbb G_m^{\wedge r})[-r]$ for $r\geq0$. In the motive category this is the $r$-fold tensor power of $\mathbb Z(1)$, so $\mathbb Z(r)(d)\cong\mathbb Z(r+d)$ for $r,d\geq0$. Classical negative weights are zero by MVW Definition3.1. The current EM construction itself has weights $j\geq0$; extending its notation by zero for $j<0$ is an explicit convention, not another EM construction.

## Source contract
**Given:** Perfect field, integral coefficients, the source's bounded-above effective category, smooth separated finite-type $Y$, AC and fixed small sites/universes.

**Goal:** Import the concrete classical coefficient model needed for the exact restriction/Hom calculation.

[F1] MVW13.1/13.4 give the sheaf-with-transfers category, enough injectives and actual Yoneda evaluation;13.5 describes its complex version. MVW13.10–13.11 give the canonical Zariski/Nisnevich comparison;14.6.1,14.8–14.12 and14.16 give A¹-local models and representability.

[F2] MVW Definition3.1, Example8.10, Definition14.2 and Lemma14.4 give the stated coefficient and Tate tensor conventions: singular-complex replacement is an A¹-equivalence, while pointed representables tensor as the smash product. This identifies $\mathbb Z(r)(d)$ with $\mathbb Z(r+d)$ in the motive category.

## External input
Import [F1]–[F2] as the concrete derived coefficient package. At the chain level, the derived Yoneda assertion is implemented by resolving the coefficient and using $\operatorname{Hom}(\mathbb Z_{\mathrm{tr}}(Y),I)=I(Y)$ termwise. Injective sheaves with transfers are Nisnevich-acyclic by13.4, and the complex derived-evaluation interpretation is the standard hyperext construction recorded in13.5; no isomorphism of unrelated group functors is used to choose a restriction arrow. The local relative-Hom lemma applies the actual cone to these Hom complexes. Foundational derived resolutions, A¹-locality and the comparison foundations are imports; this does not claim a new reconstruction of all motivic categories.
