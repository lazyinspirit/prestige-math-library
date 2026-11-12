---
title: Huber–Kelly representable cdh sheafification input
status: published
research_item: thm-author-60d95bfb692a-huber-kelly-representable-input
dependency_level: 8
sources:
  references:
    - title: "Differential forms in positive characteristic, II: cdh-descent via
        functorial Riemann–Zariski spaces"
      url: https://msp.org/ant/2018/12-3/ant-v12-n3-p05-p.pdf
      locator: Published 2018 version, Algebra & Number Theory 12(3), 649–692; Theorem
        1.4 and comparisons (2)–(3), pp. 651–652; Section 2A, Definition 2.1 and
        Remark 2.2(1), pp. 653–654; Remark 2.7 and Proposition 2.8 statement,
        pp. 654–655
      statement: For a noetherian Nagata scheme S and separated finite-type S-schemes
        X and Y, the canonical maps identify the cdh sheafification of
        Hom_S(-,Y) at X with Hom_S(X^sn,Y). Section 2A and Definition 2.1/Remark
        2.2(1) specify the general-base scheme site and cdh generators; Remark
        2.7 specifies the Nagata condition; Proposition 2.8 supplies
        seminormalization and its finiteness in this scope.
      hypotheses: S is noetherian and Nagata; X and Y are separated and of finite type
        over S.
      reading_limits: "Historical reading record retained from the incoming generated
        item: Read the published PDF-extracted Theorem 1.4 and its displayed
        rh-to-cdh comparisons, Section 2A notation, Definition 2.1, Remark
        2.2(1), Remark 2.7 and the statement of Proposition 2.8. The proof of
        Proposition 6.14 was not read or reconstructed; no independent
        reconstruction of the imported results is claimed. Browser screenshot
        retrieval was unavailable; reading used PDF text. Current maintenance
        read the assigned consumer and its exact declared supplier interfaces;
        no fresh primary-source or page-image reading, reconstruction or
        independent acceptance is claimed for this reference."
    - title: The Stacks Project, Normalization (tag 035E)
      url: https://stacks.math.columbia.edu/tag/035E
      locator: Section 29.55, opening convention, Definition 29.55.1, Lemma 29.55.2
        and Lemma 29.55.3(3)–(4) (current numbering at tag 035E)
      statement: For a scheme whose quasi-compact opens have finitely many irreducible
        components (in particular a locally noetherian scheme), normalization is
        defined and equals the normalization of its reduction. On a reduced
        affine open Spec A its inverse image is Spec A′, where A′ is the
        integral closure of A in its total ring of fractions; these affine
        descriptions give the normalization scheme.
      hypotheses: Every quasi-compact open has finitely many irreducible components;
        the affine description applies to reduced affine opens. Here apply to
        reductions of schemes locally of finite type over a noetherian base,
        which are locally noetherian.
      reading_limits: "Historical reading record retained from the incoming generated
        item: Read the opening convention and Definition 29.55.1, the reduction
        statement and displayed proof of Lemma 29.55.2, and the statement and
        displayed proof of Lemma 29.55.3. The construction of relative
        normalization and the algebraic lemmas linked there were not
        reconstructed. Only this normalization convention and affine description
        are imported; later normalization theorems are not used. Current
        maintenance read the assigned consumer and its exact declared supplier
        interfaces; no fresh primary-source or page-image reading,
        reconstruction or independent acceptance is claimed for this reference."
external_input: true
---

PDF p. 5: HK18 Theorem 1.4

## Prerequisites

- [def-cdh-topology-interface](item-def-cdh-topology-interface)
- [def-seminormal-scheme-interface](item-def-seminormal-scheme-interface)
- [def-scheme-sites-and-sheafification](item-def-scheme-sites-and-sheafification)
- [math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme)
- [math:def-separated-morphism-schemes](https://alphabetamath.cc/item/def-separated-morphism-schemes)
- [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)
- [math:def-finite-morphism-schemes](https://alphabetamath.cc/item/def-finite-morphism-schemes)
- [math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian](https://alphabetamath.cc/item/cor-finite-type-algebra-over-noetherian-ring-is-noetherian)
- [math:def-total-ring-of-fractions](https://alphabetamath.cc/item/def-total-ring-of-fractions)
- [math:def-etale-morphism-schemes](https://alphabetamath.cc/item/def-etale-morphism-schemes)
- [` Differential forms in positive characteristic, II: cdh-descent via functorial Riemann–Zariski spaces · Published 2018 version, Algebra & Number Theory 12(3), 649–692; Theorem 1.4 and comparisons (2)–(3), pp. 651–652; Section 2A, Definition 2.1 and Remark 2.2(1), pp. 653–654; Remark 2.7 and Proposition 2.8 statement, pp. 654–655 `](https://msp.org/ant/2018/12-3/ant-v12-n3-p05-p.pdf)
- [` The Stacks Project, Normalization (tag 035E) · Section 29.55, opening convention, Definition 29.55.1, Lemma 29.55.2 and Lemma 29.55.3(3)–(4) (current numbering at tag 035E) `](https://stacks.math.columbia.edu/tag/035E)


## Statement
Let $S$ be noetherian and Nagata, and let $X,Y$ be separated finite-type $S$-schemes. The canonical map identifies the cdh sheafification of the presheaf $h_Y(Z)=\operatorname{Hom}_S(Z,Y)$, evaluated at $X$, with $\operatorname{Hom}_S(X^{\mathrm{sn}},Y)$, naturally in $X$ and $Y$. Here noetherian means admitting a finite affine cover by spectra of noetherian rings; Nagata means that the normalization of every finite-type $S$-scheme is finite over that scheme. The notation $X^{\mathrm{sn}}\to X$ denotes the seminormalization of the reduction, with its canonical map to $X$. Normalization in the Nagata condition means the scheme construction on the reduction specified in External input below; finite means affine with coordinate algebras finite as modules over the base coordinate rings.

Work in a fixed scheme universe. Fix Grothendieck universes $U\in V$ and a $U$-small model $\mathcal C$ equivalent to the category of separated finite-type $S$-schemes in that scheme universe, with all $S$-morphisms; include representatives of $X,Y$ and $X^{\mathrm{sn}}$ in this model. Presheaves take values in $\mathrm{Set}_V$. The sheafification $a_{\mathrm{cdh}}F$ means the set-valued sheafification with its unit $F\to a_{\mathrm{cdh}}F$ and universal property on this site. In $h_Y$, restriction along $f:Z\to Z′$ is precomposition $g\mapsto g\circ f$. The **cdh topology** on $\mathcal C$ is the least Grothendieck topology in which Nisnevich covering families and singleton proper completely decomposed morphisms generate covering sieves. A Nisnevich family consists of étale morphisms such that every target point has a lift inducing an isomorphism of residue fields. A morphism is completely decomposed if it has such a lift at every target point, and proper means separated, of finite type and universally closed. On a field base this is the supplied field-site topology.

## Statement references

[def-cdh-topology-interface](item-def-cdh-topology-interface)

[def-seminormal-scheme-interface](item-def-seminormal-scheme-interface)

[def-scheme-sites-and-sheafification](item-def-scheme-sites-and-sheafification)

[math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme)

[math:def-separated-morphism-schemes](https://alphabetamath.cc/item/def-separated-morphism-schemes)

[math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism)

[math:def-finite-morphism-schemes](https://alphabetamath.cc/item/def-finite-morphism-schemes)

[math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian](https://alphabetamath.cc/item/cor-finite-type-algebra-over-noetherian-ring-is-noetherian)

[math:def-total-ring-of-fractions](https://alphabetamath.cc/item/def-total-ring-of-fractions)

[math:def-etale-morphism-schemes](https://alphabetamath.cc/item/def-etale-morphism-schemes)

## External input
The formula is the cdh case of Huber–Kelly Theorem 1.4: its rh formula (2) and rh-to-cdh comparison (3) give the stated identification. The source includes the spectrum of a perfect field as an example of a noetherian Nagata base. Its general-base site convention is Section 2A and Remark 2.2(1), using the cdp-morphisms of Definition 2.1; the statement above supplies that convention explicitly rather than extending the field-only interface by reference. The source's Proposition 2.8 also places $X^{\mathrm{sn}}$ in this finite-type site under the Nagata hypothesis. These are precise external inputs; their proofs are not reconstructed here. The local finite-subintegral descent lemmas do not by themselves prove this representable-sheaf formula.

The normalization convention in the Nagata condition is the construction in [The Stacks Project, tag 035E](https://stacks.math.columbia.edu/tag/035E): normalization is unchanged by reduction, and over a reduced affine open $\operatorname{Spec}A$ it has coordinate ring the integral closure of $A$ in $Q(A)$. Here $Q(A)$ is the total ring of fractions, obtained by inverting the nonzerodivisors, and integral closure consists of the elements of $Q(A)$ satisfying a monic polynomial over $A$. The construction and this affine description are imported with the hypotheses in the second reference, not proved here. Those hypotheses apply locally: finite-type algebras over noetherian rings are noetherian, so the finite-type affine charts over a noetherian base are noetherian. [math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian](https://alphabetamath.cc/item/cor-finite-type-algebra-over-noetherian-ring-is-noetherian) [math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme) [math:def-locally-finite-type-and-finite-type-morphism](https://alphabetamath.cc/item/def-locally-finite-type-and-finite-type-morphism) [math:def-total-ring-of-fractions](https://alphabetamath.cc/item/def-total-ring-of-fractions)
