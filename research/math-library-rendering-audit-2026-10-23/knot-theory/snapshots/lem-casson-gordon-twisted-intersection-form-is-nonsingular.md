---
id: lem-casson-gordon-twisted-intersection-form-is-nonsingular
kind: lemma
title: Nonsingularity of the Casson–Gordon twisted intersection form
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 9
deps:
  - lem-unitary-field-witt-forms-respect-bordism-and-whole-boundary-gluing
  - lem-prime-power-character-twists-of-knot-and-disk-covers-are-acyclic
  - def-torsion-linking-form-and-casson-gordon-bordism
  - lem-casson-gordon-bordism-admissibility
  - def-axiom-of-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Charles Livingston and Swatee Naik, Introduction to Knot Concordance
      url: https://chuck-livingston.github.io/math/Concordance_Book.pdf
      locator: Chapter 8, §8.2, pp. 167–168; complete caveat and capping discussion read
    - title: A. J. Casson and C. McA. Gordon, Cobordism of Classical Knots (1986), with appendix by P. M. Gilmer
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/cassgord.pdf
      locator: Printed pp. 190–192, Lemma 4 and corollary; proof of the special disk-exterior twisted-homology case read
    - title: Patrick Gilmer, Slice Knots in S3
      url: https://www.maths.ed.ac.uk/~v1ranick/papers/gilmer3.pdf
      locator: §1, printed pp. 307–309; the relevant nonsingularity issue is cited but not proved
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

Assume AC. Let $(W,\eta)$ be a Casson–Gordon bordism datum for a prime-power order character, and let $Y$ be its regular cover with deck action $G=\mathbb Z/d\oplus\mathbb Z$. After the boundary capping that kills the meridian-class radical, the twisted intersection form on
$$H_2(Y;\mathbb C)\otimes_{\mathbb C[G]}\mathbb C(t)$$
is a nonsingular Hermitian form for the involution $(\zeta_d,t)\mapsto(\overline{\zeta_d},t^{-1})$. The capping preserves the $H_2$ module used in the Witt-class construction.

## Statement references

[[def-torsion-linking-form-and-casson-gordon-bordism|The character pair and bounding manifold]]

[[lem-casson-gordon-bordism-admissibility|Existence of a multiple bounding pair]]

[Charles Livingston and Swatee Naik, *Introduction to Knot Concordance*, §8.2, pp. 167–168](https://chuck-livingston.github.io/math/Concordance_Book.pdf)

[[def-axiom-of-choice|Axiom of Choice]]

## Facts & Assumptions

**Given:** AC and the stated smooth Casson–Gordon multiple bounding datum, with its actual extending character pair.

[F1] Its boundary components are the marked zero-surgery covers from the bordism convention. [[def-torsion-linking-form-and-casson-gordon-bordism]], [[lem-casson-gordon-bordism-admissibility]]

[F2] Their prime-power character systems over $F=\mathbb C(t)$ are acyclic. The full finite-matrix specialization proof also identifies the cover-tensor module with actual local chain homology. [[lem-prime-power-character-twists-of-knot-and-disk-covers-are-acyclic]]

[F3] Local duality identifies the absolute-to-relative map with the middle Hermitian form, and the radical is exactly the boundary image. The field Witt-form construction and its ordinary nonsingular quotient are proved explicitly. [[lem-unitary-field-witt-forms-respect-bordism-and-whole-boundary-gluing]]

[A1] [[def-axiom-of-choice]] is retained.

## Proof

1.1 The deck group $G=C_d\times\mathbb Z$ includes an infinite cyclic factor. Thus its regular cover $Y$ is not a finite-sheeted cover: the free coordinate takes the boundary meridian to one and gives arbitrarily many different sheets. Use the regular cover and the rank-one character projection followed by Laurent-field localization specified in [F2]. Its exactness identifies the module in the Statement with $H_2(W;F)$. [F1, F2, given, construct]

2.1 By [F2], $H_i(\partial W;F)=0$ in every degree. The actual pair sequence therefore identifies $H_2(W;F)$ with $H_2(W,\partial W;F)$. By [F3] the latter is its conjugate dual, with this map exactly the intersection pairing. It follows that the pairing is nonsingular. The involution in [F2] is precisely complex conjugation with $t\mapsto t^{-1}$, so the pairing is Hermitian in the stated convention. [F2, F3, step 1.1, algebra]

3.1 To spell out the boundary cap, split each finite-dimensional boundary chain group into its cycles and a complement; the differential on that complement is an isomorphism to the preceding boundary space. Its inverses give a contraction of the acyclic boundary complex. The quotient from absolute to relative chains consequently has contractible kernel and preserves the absolute middle homology. This algebraic Poincare cap is enough for the Witt construction; it changes neither its module nor its pairing. The ordinary form, which need not be nonsingular on all ordinary $H_2$, instead uses [F3]'s quotient by its boundary radical. These are distinct operations, and no nonexistent finite $G$-cover or geometric attachment preserving a singular ordinary form has been assumed. [F2, F3, step 2.1, construct, algebra] ∎