---
page: hecke-base-change-semisimplicity-and-deformation
title: "Hecke Base Change, Semisimplicity, and Deformation"
status: published
items: []
examples: []
---

Deformation arguments use hypotheses on the coefficient ring, field and parameter. Freeness makes base change legitimate; nondegenerate trace pairing alone does not imply semisimplicity. This page supplies the precise determinant and lifting arguments before invoking a Tits-style conclusion.

This is a prose scaffold for future item authoring. The constructions and results below are explicit proof obligations; an empty item list does not certify that they have been proved in the library. The source-grounded contracts and prerequisite audit are recorded in `research/plan-hopf-hecke-algebras-track.md`.

## Construction and proof obligations

**def-hh-specialization-and-regular-trace-determinant.** Define the specialized finite-W algebra using HH-1, and the matrix (Tr(L_TxTy)) in its finite basis. Determinant is basis dependent up to a squared unit; nonvanishing is invariant and meaningful over a field.

**lem-hh-regular-trace-criterion-in-characteristic-zero.** Define J as intersection of annihilators of simple finite modules. A finite composition chain of the regular module gives J^length=0. Finite dimensionality selects finitely many maximal left ideals whose intersection is J, embedding H/J into a finite sum of simples and proving H/J semisimple by HH-1’s finite semisimple-submodule proof. For j∈J, L_jb is nilpotent for every b and has zero trace, so nondegenerate regular-trace pairing forces J=0 and H semisimple. This implication is sufficient; no unproved separable-division-algebra trace converse is consumed. Prove the two definitions of J agree using the maximal kernels of maps a↦av for every nonzero vector in a simple module. Select the finite maximal-ideal intersection by successive strict dimension drops; this uses no arbitrary Choice.

**thm-hh-generic-finite-hecke-semisimplicity.** At v=1, evaluate the regular-trace matrix of characteristic-zero kW directly: Tr(L_g)=|W|δ_g1, so determinant is nonzero. The universal determinant is therefore a nonzero Laurent polynomial and the generic fraction-field algebra is semisimple. Splitness is not inferred merely from semisimplicity.

**lem-hh-formal-deformation-matrix-unit-lifting.** For a finite free k[[h]] algebra with split semisimple reduction, prove formal series arithmetic and completeness coefficientwise. Lift the finitely many diagonal matrix idempotents by Newton corrections e↦e−(2e−1)^−1(e²−e), whose error squares, and successively work in complementary corners to keep them orthogonal and summing to 1. Their corners are direct summands of a finite free module; a finite elimination/completeness argument shows each corner has rank given by its reduction (zero between different blocks, one within a block). In each block lift x_a∈e_aAe_1 and y_a∈e_1Ae_a; y_ax_a is an invertible scalar multiple of e_1, so normalize it to e_1 and obtain x_ay_a=e_a by the rank-one corner and reduction. Then E_ab=x_a y_b are exact matrix units. Their reductions are a basis, so the determinant of their coordinate matrix is a unit; they form a k[[h]] basis and give mutually inverse full matrix-block algebra maps. Block sums are now central; centrality was not assumed at the initial idempotent-lifting step.

**thm-hh-split-deformation-labels-and-exceptional-parameters.** State and prove the label bijection in the formal split setting using the lifted matrix blocks. For a general specialization only determinant-nonvanishing semisimplicity is claimed; splitness and simple labels require an explicitly chosen splitting field or proven type-A generic models. Do not extrapolate to roots of unity or modular fields.

## Reading and applications

Prerequisite pages: [[tensor-coherence-and-algebraic-descent]], [[generic-coxeter-hecke-algebras-and-the-standard-basis]], [[hecke-parabolic-induction-and-symmetrizing-traces]], [[chain-conditions-and-semisimple-modules]]. The companion [[hecke-base-change-semisimplicity-and-deformation-examples]] develops the calculations and failures needed to test these constructions.
