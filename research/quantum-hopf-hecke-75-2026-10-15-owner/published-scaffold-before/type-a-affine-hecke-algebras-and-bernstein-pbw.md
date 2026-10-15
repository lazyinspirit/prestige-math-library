---
page: type-a-affine-hecke-algebras-and-bernstein-pbw
title: "Type A Affine Hecke Algebras and Bernstein PBW"
status: published
items: []
examples: []
---

Affine type A adds commuting invertible weight variables to the finite Hecke generators. The Bernstein relation contains a quotient of Laurent polynomials; its divisibility must be proved before it can define an operator. The construction here is algebraic and avoids importing p-adic Iwasawa decomposition as an invisible prerequisite.

This is a prose scaffold for future item authoring. The constructions and results below are explicit proof obligations; an empty item list does not certify that they have been proved in the library. The source-grounded contracts and prerequisite audit are recorded in `research/plan-hopf-hecke-algebras-track.md`.

## Construction and proof obligations

**def-hh-type-a-weight-lattice-laurent-ring-and-divided-differences.** Set Λ=Z^n, A=R[X_1^±1,…,X_n^±1], let s_i permute Xi,Xi+1, and prove f−s_i f is divisible by 1−Xi/Xi+1 using monomial finite geometric sums, including negative exponents. Define D_i f only after divisibility and prove the twisted Leibniz rule.

**def-hh-type-a-affine-bernstein-presentation.** Use multiplicative Q normalization: (T_i−Q)(T_i+1)=0, finite braid relations, commuting invertible Xi, and T_i f−s_i(f)T_i=(Q−1)D_i(f). Equivalently T_i Xi T_i=Q Xi+1; prove equivalence from generator relations using twisted Leibniz. Q is a unit in the universal ring.

**lem-hh-demazure-lusztig-operators-satisfy-affine-relations.** In K⋊S_n, define T_i=Q s_i+(Q−1)(1−s_i)/(1−Xi/Xi+1). Construct this skew group algebra directly, prove associative multiplication, then check quadratic, distant and adjacent rank-three braid relations by clearing denominators and collecting permutation coefficients. The coefficient of s_i is nonzero over the universal fraction field. The operator preserves A by divisibility.

**thm-hh-affine-type-a-bernstein-pbw.** Rewrite all words to X^λT_w for spanning. The skew-group images of T_w have distinct nonzero leading permutation terms and lower-length terms, so a longest-length coefficient argument proves independence over the universal ring. Descend the explicit basis isomorphism through every base change, rather than reusing generic faithfulness at singular parameters.

**thm-hh-affine-type-a-center.** Commute a central Σf_wT_w with all Xi in the fraction skew algebra to force w=1; then commute f with Ti to force S_n invariance over the universal domain. State center after arbitrary specialization separately: base change does not automatically preserve centers and is not claimed here.

## Reading and applications

Prerequisite pages: [[tensor-coherence-and-algebraic-descent]], [[coxeter-presentations-exchange-and-reduced-word-theorems]], [[generic-coxeter-hecke-algebras-and-the-standard-basis]], [[polynomial-rings-and-roots]]. The companion [[type-a-affine-hecke-algebras-and-bernstein-pbw-examples]] develops the calculations and failures needed to test these constructions.
