---
page: hecke-parabolic-induction-and-symmetrizing-traces
title: "Hecke Parabolic Induction and Symmetrizing Traces"
status: draft
items: []
examples: []
---

Parabolic induction and traces expose useful structure without yet invoking semisimplicity. The standard basis makes the parabolic subalgebra embedding and coset freeness actual theorems. A symmetrizing trace requires a perfect pairing, which is proved integrally and survives every base change.

This is a prose scaffold for future item authoring. The constructions and results below are explicit proof obligations; an empty item list does not certify that they have been proved in the library. The source-grounded contracts and prerequisite audit are recorded in `research/plan-hopf-hecke-algebras-track.md`.

## Construction and proof obligations

**def-hh-parabolic-hecke-subalgebra-and-induced-module.** Using the basis, embed H_J via T_u,u∈W_J. Define induction H⊗_HJ M and restriction with the published balanced tensor construction, rather than informal coset symbols.

**thm-hh-parabolic-hecke-freeness-and-induced-bases.** Use minimal representatives and length additivity to prove H is free on {T_d} on the stated left/right side over H_J. Construct induced bases when M has one; supply induction-restriction adjunction explicitly via h⊗m↦h·f(m).

**def-hh-canonical-hecke-trace-and-symmetrizing-form.** For finite W set τ(T_w)=δ_w1, extending R-linearly using the proved basis. Symmetrizing means τ(ab)=τ(ba) and the pairing induces an isomorphism H→Hom_R(H,R); no field semisimplicity enters this definition.

**thm-hh-canonical-hecke-trace-is-symmetric-and-perfect.** On the free regular module E, use the bilinear coordinate pairing (e_x,e_y)=δ_xy. Each left length operator P_s is self-transpose: on the pair e_w,e_sw with ℓ(sw)>ℓ(w), its matrix is [[0,1],[1,v_s−v_s^−1]]. Therefore P_x^t=P_(x^−1), reversing a reduced word, and τ(T_xT_y)=(e_1,P_xP_y e_1)=(P_(x^−1)e_1,P_y e_1)=δ_(x^−1,y). Thus the dual family to {T_w} is {T_(w^−1)}, rather than the algebra inverse T_w^−1. The symmetric basis-pair formula gives τ(ab)=τ(ba); the permutation Gram matrix gives the integral dual-module isomorphism for finite W and every base change.

## Reading and applications

Prerequisite pages: [[tensor-coherence-and-algebraic-descent]], [[coxeter-presentations-exchange-and-reduced-word-theorems]], [[generic-coxeter-hecke-algebras-and-the-standard-basis]]. The companion [[hecke-parabolic-induction-and-symmetrizing-traces-examples]] develops the calculations and failures needed to test these constructions.
