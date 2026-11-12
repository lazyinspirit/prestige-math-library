---
title: External dg-nerve mapping and complex-localization bridges
status: published
research_item: thm-adjudicate-2ee8c9528eaa-dg-nerve-derived-mapping-input
dependency_level: 1
sources:
  references:
    - title: Jacob Lurie, Higher Algebra (September 18, 2017)
      url: https://www.math.ias.edu/~lurie/papers/HA.pdf
      locator: Construction 1.3.1.6, Remark 1.3.1.12 (pp. 81, 83); Proposition 1.3.4.5
        (p. 109); Definition 1.3.5.8 and Propositions 1.3.5.13–15 (pp. 125, 127)
      statement: The dg nerve computes mapping spaces from Hom complexes; fibrant
        replacement realizes reflective derived localization; cylinder-closed
        full complex subcategories localize at homotopy equivalences to their dg
        nerves.
      hypotheses: Additive categories for cylinders; Grothendieck abelian module
        categories for unbounded derived localization; fixed universes. Reverse
        chain grading for cochains.
      reading_limits: Read the listed construction, remark, definition and
        propositions, including the proofs of 1.3.5.13–15. The proof of 1.3.4.5
        and nerve/model foundations are imported, not reconstructed. Printed
        page numbers.
external_input: true
---

PDF p. 16: Perfect complexes with support

## Prerequisites

- [thm-author-4f716d60801a-derived-enhancement-input](item-thm-author-4f716d60801a-derived-enhancement-input)
- [math:def-hom-complex-of-chain-complexes](https://alphabetamath.cc/item/def-hom-complex-of-chain-complexes)
- [math:def-mapping-cone-of-a-chain-map](https://alphabetamath.cc/item/def-mapping-cone-of-a-chain-map)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)
- [` Jacob Lurie, Higher Algebra (September 18, 2017) · Construction 1.3.1.6, Remark 1.3.1.12 (pp. 81, 83); Proposition 1.3.4.5 (p. 109); Definition 1.3.5.8 and Propositions 1.3.5.13–15 (pp. 125, 127) `](https://www.math.ias.edu/~lurie/papers/HA.pdf)


## Statement
Assume Choice and the fixed universes of the derived enhancement. For module complexes, use the differential graded nerve $N_{\mathrm{dg}}$ of the category enriched in Hom complexes. Quasi-isomorphisms of Hom complexes induce equivalences of the associated mapping spaces. Its reflective derived localization $L$ has unit a quasi-isomorphism $Q\to I_Q$ to a fibrant complex, and adjunction identifies $\operatorname{Map}_{\mathcal D(A)}(LP,LQ)$ with $\operatorname{Map}_{N_{\mathrm{dg}}\mathrm{Ch}(A)}(P,I_Q)$, naturally in $P,Q$. The composite from ordinary complexes is the quasi-isomorphism localization defining the supplied $\mathcal D(A)$.

For a full dg subcategory $\mathcal C$ of complexes in an additive category, closed under identity mapping cylinders, its ordinary category localized at cochain homotopy equivalences is equivalent to $N_{\mathrm{dg}}\mathcal C$ by the canonical inclusion.

## Statement references
[thm-author-4f716d60801a-derived-enhancement-input](item-thm-author-4f716d60801a-derived-enhancement-input)

[math:def-hom-complex-of-chain-complexes](https://alphabetamath.cc/item/def-hom-complex-of-chain-complexes)

[math:def-mapping-cone-of-a-chain-map](https://alphabetamath.cc/item/def-mapping-cone-of-a-chain-map)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)

## Source contract
**Given:** Module complexes and, in the last assertion, a full dg subcategory with the stated cylinder closure.

**Goal:** Import the mapping-space and localization bridges, not a proof of perfect-model equivalence.

[A1] [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention) retain the assumptions of [thm-author-4f716d60801a-derived-enhancement-input](item-thm-author-4f716d60801a-derived-enhancement-input), including the module categories and their unbounded derived localization. Universes containing the data and $\omega$ are assumed to exist; this is not deduced from Choice.

[F1] [math:def-hom-complex-of-chain-complexes](https://alphabetamath.cc/item/def-hom-complex-of-chain-complexes) supplies the Hom enrichment. Read its chain grading as $C^\sharp_n=C^{-n}$; its Hom degree $r$ is cochain degree $-r$. Composition is composition of graded maps, with its usual graded Leibniz identity. The dg nerve is the construction imported from reference 0, rather than the nerve of the ordinary category obtained by forgetting higher homotopies.

[F2] Identity mapping cylinders are those of reference 0, equivalently $P\oplus\operatorname{Cone}(\mathrm{id}_P)$ with the usual endpoint maps. [math:def-mapping-cone-of-a-chain-map](https://alphabetamath.cc/item/def-mapping-cone-of-a-chain-map) supplies cones after the same reversal of grading. A cochain homotopy equivalence is a cochain map admitting an inverse up to homotopies $f-g=dh+hd$, as in the supplied derived enhancement.

## External input
Import reference 0 under [A1], using the cochain translation [F1] and the cylinder convention [F2]. The adjunction and nerve comparisons are established external inputs; no local proof is claimed.
