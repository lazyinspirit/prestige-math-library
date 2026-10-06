---
id: rem-cap-product-order-awaits-the-at-sign-convention
kind: remark
title: "The cap-product order is fixed by the AT convention, not minted here"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [thm-geometric-intersection-equals-the-poincare-dual-cup-pairing, def-cap-product-with-cohomology-first, def-relative-cap-product, def-local-oriented-intersection-sign, thm-intersection-number-under-factor-interchange]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Ralph L. Cohen, Bundles, Manifolds, and Homotopy (author draft bookR4)"
      url: https://math.stanford.edu/~ralph/bookR4.pdf
      locator: "Chapter 8 (Tubular Neighborhoods, more on Transversality, and Intersection Theory) and Chapter 9 (Poincare Duality, Intersection theory, and Linking numbers) Sections 9.1-9.3, printed pp. 249-263, PDF pp. 260-274: Definition 9.3 and Theorems 9.4-9.5 (the intersection product is Poincare dual to the cup product and is represented by transverse intersections), Theorems 9.2 and Corollary 9.3 (the Thom class of a normal bundle is dual to the submanifold), Theorem 9.9, Corollaries 9.10-9.11 and Theorem 9.12 (self-intersection, nowhere-zero sections, Euler characteristic), and the representability remark after Theorem 9.5. The design register cites the earlier bookR3 numbering Sections 8.3-9.3, pp. 244-260; the recovered current draft bookR4 renumbers these sections, so the named results above are the binding locator."
    - title: "Victor Guillemin and Alan Pollack, Differential Topology (Prentice-Hall, 1974; complete 236-page PDF)"
      url: https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf
      locator: "Ch. 2 Sec. 4, printed pp. 79-80 (the Mobius central curve and the RP^1 in RP^2 boundary example, mod two); Ch. 3 Sec. 3, printed pp. 107-118 (orientation number, factor order, and the exercise I(Delta,Delta)=chi(M))."
dependency_level: 4
---

## Remark

This page mints no independent cap-product or cup-product sign convention. The cap product is the cohomology-first, front-evaluation operation of [[def-cap-product-with-cohomology-first]] with its relative form [[def-relative-cap-product]], and [[thm-geometric-intersection-equals-the-poincare-dual-cup-pairing]] is stated in exactly that convention. The geometric factor order (first factor $A$, second factor $B$, as in [[def-local-oriented-intersection-sign]]) is authoritative: if a source writes the dual pairing with the opposite valuation order, the identity must be read through the sign of [[thm-intersection-number-under-factor-interchange]], $I(B,A)=(-1)^{ab}I(A,B)$. No third convention is to be introduced at authoring time; a mismatch is a sign error in the translation, not a choice.
