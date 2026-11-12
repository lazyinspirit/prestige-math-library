---
title: External qcqs classical perfect generator
status: published
research_item: thm-author-c5bc2838d897-kcoherent-qcqs-classical-generator-input
dependency_level: 7
sources:
  references:
    - title: The Stacks Project, Derived Categories of Schemes, Compact and perfect
        objects
      url: https://stacks.math.columbia.edu/tag/09M0
      locator: Remark 36.17.2; Proposition 36.17.1; Theorem 36.15.3 (09IS), together
        with Proposition 13.37.6 (09SR)
      statement: "For a qcqs scheme X there is a perfect complex P that is a classical
        generator of D_perf(O_X): every perfect complex lies in its closure
        under finite sums, shifts, cones and direct summands."
      hypotheses: X quasi-compact and quasi-separated. This is a statement about the
        ordinary derived category of O_X-module sheaves with quasi-coherent
        cohomology.
      reading_limits: Read Remark 36.17.2 and full statements/proofs of Proposition
        36.17.1, Theorem 36.15.3 and Proposition 13.37.6. Theorem 36.15.3 itself
        says a small detail is omitted; its affine-gluing, compact-generation
        and Koszul prerequisites are imported, not reconstructed. This is used
        only for object smallness, never to infer a coherent enhancement or
        monoidal equivalence.
external_input: true
---

PDF p. 3: Nonconnective algebraic K theory: enhanced prerequisite interface

## Prerequisites

- [def-scheme-perfect-complexes](item-def-scheme-perfect-complexes)
- [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [` The Stacks Project, Derived Categories of Schemes, Compact and perfect objects · Remark 36.17.2; Proposition 36.17.1; Theorem 36.15.3 (09IS), together with Proposition 13.37.6 (09SR) `](https://stacks.math.columbia.edu/tag/09M0)


## Statement
Assume AC and let X be a quasi-compact quasi-separated scheme. In the ordinary perfect subcategory of D($O_X$) there is a perfect object P such that every perfect object is obtained from P by finitely iterating integer shifts, finite sums, cones and direct summands. This is the classical generator statement of Stacks Remark 36.17.2; its proof combines the perfect generator of $D_{\mathrm{QCoh}}$ with compact=perfect and the compact-generation proposition.

## Source contract
**Given:** qcqs X and AC; perfection is the supplied sheaf-derived local condition [def-scheme-perfect-complexes](item-def-scheme-perfect-complexes).

**Goal:** Import one substantial scheme theorem needed only to enumerate perfect objects.

[F1] Stacks Remark 36.17.2, Proposition 36.17.1, Theorem 36.15.3 and Proposition 13.37.6 give the stated classical generator.

## External input
Import [F1]. The proof is not reconstructed. Its use below establishes essential smallness through finite constructions and small Hom sets; it supplies no coherent product, enhanced equivalence, or scheme localization theorem.
