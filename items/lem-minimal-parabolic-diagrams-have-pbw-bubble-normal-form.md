---
id: lem-minimal-parabolic-diagrams-have-pbw-bubble-normal-form
kind: lemma
title: "PBW and bubble normal form in the minimal-parabolic diagram category"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 9
deps: [def-minimal-parabolic-klr-diagram-proof-category,
       lem-minimal-parabolic-polynomial-flag-model-realizes-the-graded-diagram-relations,
       def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum,
       def-klr-grading-and-diagrammatic-composition,
       def-graded-ring-module-bimodule-and-internal-shift,
       thm-klr-pbw-basis-theorem,
       lem-oriented-minimal-parabolic-klr-normal-forms-and-cyclotomic-cap-ideal-intersection]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
sources:
  references:
    - title: "Ben Webster, Knot invariants and higher representation theory I, arXiv:1001.2020v9"
      url: "https://arxiv.org/pdf/1001.2020"
      locator: "Sections 1.1-1.4, PDF pages 5-21: Definition 1.1, the matching-diagram calculus of Definition 1.2, the polynomial model of Theorem 1.4, and the basis statement after the local relations."
    - title: "Raphael Rouquier, 2-Kac-Moody Algebras, arXiv:0812.5023v3"
      url: "https://arxiv.org/pdf/0812.5023"
      locator: "Sections 3.2.1-3.2.3, PDF pages 22-27: the downward KLR presentation and PBW; Section 5.2, PDF pages 54-55: the rank-one unit."
---

## Statement

Fix a color $i$. In the formal graded minimal-parabolic proof category of
[[def-minimal-parabolic-klr-diagram-proof-category]], the reduced
perfect-matching diagrams, dot monomials on their open components, and
monomials in the independent far-left normalized $i$-bubble coefficients form
a basis of every morphism space. In particular, at all-downward boundaries of
weight difference $\beta$, the morphism space is the corresponding KLR PBW
corner tensored with the polynomial ring in one positive bubble family; the
opposite/fake family is its coefficientwise reciprocal. The graded polynomial
flag models of
[[lem-minimal-parabolic-polynomial-flag-model-realizes-the-graded-diagram-relations]],
with universal monic framing and arbitrarily large auxiliary framing at each
fixed physical source weight, are jointly faithful. The assertion is about this
formal proof category before cyclotomic quotient transfer.

## Facts & Assumptions

**Given:** The formal graded minimal-parabolic proof category
$\mathcal P_i$ of [[def-minimal-parabolic-klr-diagram-proof-category]] for a
fixed color $i$, with its generators, graded shifts and relations.

[F1] The relations of $\mathcal P_i$ are the model-verified local equations of
[[lem-minimal-parabolic-polynomial-flag-model-realizes-the-graded-diagram-relations]]:
downward KLR relations, both rank-one triangles with cyclic dots, the
rho/cross-and-cap equations, bubble inversion, the mixed cap/cup equations and
the finite-coefficient bubble slides; the polynomial flag models realize all of
them.

[F2] The PBW basis of the KLR algebra
([[thm-klr-pbw-basis-theorem]],
[[def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum]]) and the
grading conventions of [[def-klr-grading-and-diagrammatic-composition]] with
internal shifts of [[def-graded-ring-module-bimodule-and-internal-shift]].

[F3] The complete oriented normal-form and fixed-weight faithful-witness construction is proved in [[lem-oriented-minimal-parabolic-klr-normal-forms-and-cyclotomic-cap-ideal-intersection]]: its disk routing lowers crossing count before accounting for inserted extrema, and its generic free-root leading matching test treats arbitrary oriented boundaries without individually bending interior upward endpoints.

## Proof

**Proof technique:** apply the independently proved finite oriented straightening
and faithful universal-framing separation, retaining the exact normal forms.

1.1 Finite spanning and the downward corner. The construction in [F3] first counts intersections, clears an innermost monogon/bigon by its finite disk sweep and uses the typed curl/cancellation and KLR equations. A correction may add extrema, but it removes crossings and hence enters a smaller primary induction value. After intersections are reduced, triangles remove extra extrema, finite coefficient slides move bubbles left, and reciprocal coefficients are finite polynomials in the positive family. The output is precisely the reduced matching, open-dot and far-left bubble family of the Statement. With all boundaries downward, each open component is a colored permutation strand and the reduced crossings and dots are the chosen KLR PBW family [F2]. Thus the claimed downward tensor product follows once independence is established. [F1, F2, F3, construct]

2.1 Independence and joint faithfulness. The actual flag witness of [F3] assigns distinct free framing roots to the open components of a maximal crossing-number matching. Its leading root-label transport has a nonzero crossing/cup/cap coefficient; any other term deletes a crossing, and a different maximal matching imposes different endpoint equalities. Unused complementary framing roots make the finitely many bubble coefficients a unit triangular independent family over the component roots. This remains valid when spectator factors are inseparable: only free framing roots enter the selected flag summands. For a downward PBW combination the same construction has the concrete fixed-source-weight degree witness: take background count $r$ increasing, total degree $N=h+2r$ and framing degree $N-A_{mathrm{spect}}$; all tested flag relations then have degree greater than the fixed nonzero polynomial output. Every finite nonzero normal-form combination therefore survives in an actual flag model. This proves independence at arbitrary boundaries and joint faithfulness, with the normalized $H_i$ and word shifts already fixed by [F1]. No unrelated cyclotomic quotient or Frobenius conclusion is used. [step 1.1, F1, F2, F3, algebra]

3.1 The family spanning in step 1.1 is independent by step 2.1, so it is a basis and its all-downward corner is the stated KLR PBW corner tensored with the polynomial positive-bubble ring. Bubble inversion expresses the opposite family by its reciprocal, and the finite straightening has unique output coefficients because this basis is independent. The assertions hold in every characteristic for all the admissible homogeneous parameters and concern the formal category before quotient transfer. [step 1.1, step 2.1, F3] ∎
