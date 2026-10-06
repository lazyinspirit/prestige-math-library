---
id: rem-surface-contraction-and-resolution-scope-boundaries
kind: remark
title: "What this page does and does not prove about contractions and resolution"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 22
deps: [
          def-exceptional-curve-and-contraction, lem-blowing-up-a-regular-point-is-a-contraction,
                    lem-universal-property-of-a-contraction,
                    thm-factorization-of-birational-morphisms-of-smooth-surfaces,
                    thm-negativity-for-exceptional-curves-on-smooth-surfaces,
                    thm-resolution-of-normal-surface-singularities]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "The Stacks Project, Resolution of Surfaces, Chapter 54 (complete chapter PDF)"
      url: "https://stacks.math.columbia.edu/download/resolve.pdf"
    - title: "The Stacks Project, Resolution of Surfaces, Section 54.16 (Contracting exceptional curves)"
      url: "https://stacks.math.columbia.edu/tag/0C2I"
    - title: "Olivier Debarre, Introduction to Mori Theory (M2 course notes, 2016 version)"
      url: "https://www.math.ens.psl.eu/~debarre/M2.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

The page's commissioned claims comprise the intrinsic exceptional-curve and contraction definition, universal property and uniqueness of a contraction, the point-blowup direction, negativity of contracted curves, factorization of proper birational morphisms of regular surfaces, and resolution of normal integral finite-type surfaces over every field and characteristic ([[def-exceptional-curve-and-contraction]], [[lem-universal-property-of-a-contraction]], [[lem-blowing-up-a-regular-point-is-a-contraction]], [[thm-negativity-for-exceptional-curves-on-smooth-surfaces]], [[thm-factorization-of-birational-morphisms-of-smooth-surfaces]], [[thm-resolution-of-normal-surface-singularities]]). The surface resolution concludes regularity over an arbitrary field and smoothness only over a perfect field.

The page does not claim Castelnuovo's existence criterion for contracting every exceptional curve on a proper regular surface, negative definiteness of the complete intersection matrix of a reducible exceptional divisor, the arbitrary-Noetherian alteration/resolution equivalence of Stacks 54.14.5, or a resolution theorem in dimension at least three. These are outside the commissioned scope. The corrected local proof of the commissioned surface theorem includes the triple-cubic and stable-cubic square-conic cases, without adding these stronger statements.

## Remarks

- The list of commissioned claims is exhaustive for this page; omitted classical statements are deliberately not asserted anywhere on it.
- The corrected local proof of the surface resolution theorem includes the triple-cubic and stable-cubic square-conic cases, which is what lets the scope note exclude the stronger classical statements without weakening the commissioned one.
