---
page: generic-coxeter-hecke-algebras-and-the-standard-basis
title: "Generic Coxeter Hecke Algebras and the Standard Basis"
status: draft
items: []
examples: []
---

A generic Hecke algebra replaces each involution relation by a quadratic relation while retaining braid relations. Reduced-word independence and a basis theorem are distinct obligations: neither the presentation nor a count of spanning words proves freeness. The regular-module length-operator construction supplies independence before specialization.

This is a prose scaffold for future item authoring. The constructions and results below are explicit proof obligations; an empty item list does not certify that they have been proved in the library. The source-grounded contracts and prerequisite audit are recorded in `research/plan-hopf-hecke-algebras-track.md`.

## Construction and proof obligations

**def-hh-universal-coxeter-hecke-parameters-and-presentation.** For a finite Coxeter generator set S (W may be infinite), take the finite-variable universal ring R=Z[v_C,v_C^−1], one parameter per connected component of the odd-edge graph. An odd dihedral braid explicitly conjugates its two generators. Conversely abelianization to one sign coordinate per odd-edge component separates generators in different components, so simple-generator conjugacy is exactly odd-edge connectivity. Define (T_s−v_s)(T_s+v_s^−1)=0 and finite braid relations using the proved free associative ring quotient.

**lem-hh-reduced-word-independence-and-length-multiplication.** Define T_w as a reduced product only after HH-11 Matsumoto. Prove T_sT_w=T_sw if ℓ(sw)>ℓ(w), otherwise T_sw+(v_s−v_s^-1)T_w; derive right multiplication similarly and show all words span.

**lem-hh-commuting-left-right-hecke-length-operators.** On free module with basis e_w define P_s and Q_t by the two length cases. Prove P_sQ_t=Q_tP_s by all rank-two/length configurations (Lusztig §§3.2–3.3 six cases). Obtain braid relations for P by commuting through a reduced right word and evaluating at e_1, then verify quadratics and unit.

**thm-hh-generic-coxeter-hecke-standard-basis.** The preceding representation sends T_w e_1=e_w, so spanning elements are independent over R. This gives the universal free basis; base change from HH-1 gives it over every commutative specialization. No torsion-free conclusion is assumed in the proof.

**lem-hh-hecke-anti-involution-bar-and-normalization.** Prove w↦w^-1 defines the anti-involution by checking relations; prove v_s↦v_s^-1,T_s↦T_s^-1 defines bar, with T_s^-1=T_s−(v_s−v_s^-1). Equal parameter Q=v² and S_s=vT_s gives (S_s−Q)(S_s+1)=0. Record this conversion before comparing application homes.

## Reading and applications

Prerequisite pages: [[tensor-coherence-and-algebraic-descent]], [[coxeter-presentations-exchange-and-reduced-word-theorems]], [[polynomial-rings-and-roots]]. The companion [[generic-coxeter-hecke-algebras-and-the-standard-basis-examples]] develops the calculations and failures needed to test these constructions.
