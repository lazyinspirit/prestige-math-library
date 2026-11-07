---
id: rem-siegel-proof-route-and-effectivity-boundary
kind: remark
title: Cover reduction and the ineffectivity boundary in Siegel finiteness
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 28
deps:
  - def-axiom-of-choice
  - def-s-integral-points-on-an-affine-curve
  - thm-siegel-finiteness-of-integral-points-on-hyperbolic-curves
  - thm-mordell-faltings-finiteness-for-genus-at-least-two-curves
  - lem-pointed-genus-one-curve-has-genus-two-etale-cover
  - lem-double-cover-from-square-root-line-bundle-over-number-field
  - lem-three-punctured-projective-line-has-a-genus-one-etale-cover
  - lem-s-integral-points-lift-through-finite-etale-covers
  - lem-number-field-extensions-bounded-degree-unramified-outside-finite-set-finite
  - thm-existence-of-algebraic-closures
  - thm-algebraic-embedding-extension
  - prop-degree-bound-for-composita
justified_by: []
proof_strategy: direct
axiom_use: "AC is inherited from the Mordell–Faltings and covering suppliers; the remark adds no axiom."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: G. Faltings, G. Wüstholz et al., Rational Points, Chapter V §5, Theorem 5.1 and proof, printed pp. 198–200
      url: https://yhzhumath.github.io/Mordell2024/RP.pdf
      locator: Cover reduction for Siegel's theorem, including the finite-field-extension step
    - title: J. S. Milne, Abelian Varieties, version 2.0, Chapter IV §5, Theorem 5.1 and proof, printed pp. 146–149
      url: https://www.jmilne.org/math/CourseNotes/AV.pdf
      locator: Fixed cover field, bounded-degree lifts, and the Shafarevich-to-Mordell route
---

## Statement

Under the hypotheses of the Siegel finiteness theorem, the proof reduces genus at least two directly to rational-point finiteness. In genus one, and in genus zero with at least three distinct geometric boundary points, it constructs a finite étale cover of the affine curve whose smooth proper completion has genus at least two. The cover and its auxiliary number-field extension are fixed independently of the integral point; each integral point lifts over a field of bounded degree unramified outside one fixed finite set of primes. The argument uses no approximation theorem for algebraic numbers and gives no general algorithm for listing the integral points.

## Statement references

[Faltings–Wüstholz et al., *Rational Points*, Chapter V §5](https://yhzhumath.github.io/Mordell2024/RP.pdf)

[Milne, *Abelian Varieties*, Chapter IV §5](https://www.jmilne.org/math/CourseNotes/AV.pdf)

## Facts & Assumptions

**Given:** The hypotheses and conclusion of [[thm-siegel-finiteness-of-integral-points-on-hyperbolic-curves]].

[A1] AC is inherited by the cited curve and Jacobian suppliers. It also supplies a common algebraic closure and embeddings of the finitely many representative fields; their compositum is finite. [[def-axiom-of-choice]] [[thm-existence-of-algebraic-closures]] [[thm-algebraic-embedding-extension]] [[prop-degree-bound-for-composita]]

[F1] The Siegel theorem has three cases: genus at least two; genus one with nonempty boundary; and genus zero with at least three distinct geometric boundary points. Its affine-model section set injects into $Y(K)$, and for every field extension $K'/K$ the scalar-extension map $Y(K)\to Y(K')$ is injective. [[thm-siegel-finiteness-of-integral-points-on-hyperbolic-curves]] [[def-s-integral-points-on-an-affine-curve]]

[L2] For genus one the fixed degree-eight cover has genus two and is finite étale off one chosen boundary point. The helper [[lem-pointed-genus-one-curve-has-genus-two-etale-cover]] now uses the complete field-level double-cover proof [[lem-double-cover-from-square-root-line-bundle-over-number-field]]; its field-geometric argument uses the independently accepted field Picard provider and the unchanged pointed Abel–Jacobi Definition, with AC supplying DC.

[F3] The three-punctured projective line has a fixed degree-three finite étale cover whose smooth proper completion has genus one. [[lem-three-punctured-projective-line-has-a-genus-one-etale-cover]]

[L3] Each integral section lifts through the fixed finite étale cover to a rational point over a field of degree at most the cover degree, unramified outside a fixed finite set; only finitely many such field classes occur. The current helper [[lem-s-integral-points-lift-through-finite-etale-covers]] supplies the local lifting/unramified clauses and uses the separate global arithmetic input for its finite-class clause.

[L4] For fixed $K$, finite $S$, and degree bound $n$, only finitely many degree-at-most-$n$ extensions unramified outside $S$ occur up to $K$-isomorphism. The current helper [[lem-number-field-extensions-bounded-degree-unramified-outside-finite-set-finite]] now has the separate GLn-owned120global/91Gram-index reconstruction as its exact arithmetic supplier; that exact arithmetic interface has separate independent review and root acceptance, used here without a duplicate arithmetic review.

[L1] The genus-at-least-two endpoint is [[thm-mordell-faltings-finiteness-for-genus-at-least-two-curves]]. This remark records the conditional reduction to that endpoint; it does not assert that the endpoint theorem or its good-reduction, Shafarevich and Parshin inputs have been proved.

## Proof

1.1 If the compactifying curve has genus at least two, the integral sections inject into its rational points by [F1], so [L1] gives finiteness directly, conditional on that supplier. If the genus is one, [L2] supplies a smooth proper genus-two completion finite étale over the affine curve, using the independently accepted field Picard input and the unchanged pointed Abel–Jacobi Definition. If the genus is zero and the boundary has at least three distinct geometric points, [F3] first produces a genus-one curve; applying [L2] then gives a genus-two cover finite étale over the original affine curve, using the same field-level inputs. [F1, F3, L1, L2, given, cases]

2.1 In either low-genus case the geometric cover is fixed before any integral section is chosen. Spread it over a finite localization as in the Siegel proof, and apply [L3] and [L4]. Every integral point then lifts to a point on the fixed genus-two curve over one of finitely many number fields. Choose representatives for the finite field classes, embed them in one fixed algebraic closure and take their finite compositum $L$. Transport every lift through its field isomorphism and then to $L$; all original section images lie in the image of the fixed genus-two curve's $L$-points. Under [L1], that set is finite. This takes images in $X(L)$, not an undefined map from arbitrary extension-valued points to $X(K)$. The injectivity in [F1] then makes the original integral-section set finite. The proof uses covers, bounded-degree field finiteness, and Mordell–Faltings; it contains no approximation-theorem step and supplies no general enumeration procedure. [A1, F1, L1, L3, L4, step 1.1, given, choose, construct] ∎

## Proof status

Complete as the stated conditional cover-reduction and effectivity remark. The field-geometric cover and bounded-degree arithmetic interfaces are already supplied. Mordell–Faltings and Siegel finiteness remain the named conditional endpoints; this remark does not supply their proofs or a general enumeration algorithm. Relative-DVR Picard, Shafarevich, Parshin and Faltings obligations are not closed here.
