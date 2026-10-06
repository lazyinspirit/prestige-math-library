---
page: principal-series-representations-of-gl-n-over-a-finite-field
title: "Principal Series Representations of GL N over a Finite Field"
status: published
requires:
  - young-diagrams-tableaux-and-permutation-modules
  - specht-modules-and-the-irreducibles-of-the-symmetric-group
  - the-branching-rule-and-the-young-graph
  - the-hook-length-formula-and-rsk-correspondence
  - bruhat-decomposition-and-flags-over-finite-fields
  - induced-representations-and-frobenius-reciprocity
  - chain-conditions-and-semisimple-modules
  - polynomial-rings-and-roots
  - inverse-limits-and-noetherian-completion
  - modular-representations-and-projective-covers
  - braided-and-symmetric-monoidal-categories
  - classical-affine-varieties-coordinate-rings-morphisms-and-rational-maps-interface
  - affine-algebraic-sets-and-coordinate-rings
  - dimension-constructible-images-and-dimensions-of-fibres
  - finite-weyl-invariants-bruhat-and-kostant-harmonics
items:
  - def-diagonal-torus-characters-and-weyl-action
  - lem-lifting-idempotents-in-complete-deformation-algebras
  - lem-trace-form-nondegeneracy-characterizes-semisimple-finite-dimensional-algebras
  - lem-constituent-multiplicities-under-a-semisimple-endomorphism-algebra
  - def-generic-type-a-hecke-algebra
  - def-principal-series-module-for-finite-gl-n
  - thm-standard-basis-of-the-generic-type-a-hecke-algebra
  - lem-formal-triviality-of-one-parameter-semisimple-algebras
  - lem-spherical-principal-series-is-the-flag-permutation-module
  - lem-mackey-support-for-homs-between-finite-principal-series
  - thm-weyl-stabilizer-controls-principal-series-endomorphisms
  - thm-finite-hecke-algebra-as-convolution-corner-and-endomorphisms
  - cor-regular-finite-principal-series-is-irreducible
  - def-bruhat-double-coset-basis-of-the-finite-hecke-algebra
  - lem-principal-series-endomorphisms-as-the-chi-idempotent-corner
  - lem-length-increasing-hecke-products
  - lem-rank-one-hecke-quadratic-relation
  - lem-semisimplicity-and-trace-form-for-the-finite-spherical-hecke-algebra
  - def-standard-intertwining-operators-for-finite-principal-series
  - thm-type-a-iwahori-hecke-presentation
  - lem-standard-intertwiners-form-a-basis-of-the-principal-series-endomorphism-algebra
  - lem-equal-coordinate-rank-one-principal-series-of-gl2-fq
  - prop-group-algebra-and-finite-field-specializations-of-the-generic-hecke-algebra
  - lem-length-additive-products-of-standard-intertwiners
  - thm-tits-deformation-for-the-type-a-hecke-algebra
  - lem-rank-one-hecke-parameter-for-equal-torus-characters
  - cor-type-a-finite-hecke-algebra-is-noncanonically-isomorphic-to-csn
  - thm-general-finite-principal-series-endomorphism-algebra
  - thm-spherical-principal-series-constituents-of-gl-n-fq
  - cor-constituents-of-general-principal-series-for-finite-gl-n
examples: []
---

This page develops the principal series of the finite general linear group
$G=\operatorname{GL}_n(\mathbb F_q)$ and the Hecke-algebraic control of its
intertwiners. It fixes the diagonal torus $T$, its character group
$\widehat T$, the Weyl action of $S_n$ on characters and the Weyl stabiliser
$W_\chi$, defines the principal series $I(\chi)=\operatorname{Ind}_B^G(\widetilde\chi)$
and records its dimension $[G:B]$, and identifies the spherical case
$I(1)\cong\mathbb C[G/B]$ with the permutation module on the complete flags.

The endomorphism algebra of $I(\chi)$ is studied through the idempotent corner
$e_\chi\mathbb C[G]e_\chi$: the standard elements $e_\chi\dot we_\chi$ with
$w\in W_\chi$ form a basis, the compensated standard intertwiners $B_w$ form a
basis of $\operatorname{End}_G(I(\chi))$ of dimension $|W_\chi|$, and the
Hom-spaces between two principal series are governed by the Mackey support
$\{w:\chi=w\cdot\chi'\}$. On the spherical side the corner
$H=e_B\mathbb C[G]e_B$ is the finite Hecke algebra: its Bruhat double-coset
basis $T_w$, its length-additive products, its rank-one quadratic relation
$T_s^2=(q-1)T_s+q\,T_1$ and the type-A Iwahori-Hecke presentation are proved
here, together with the semisimplicity of $H$ and the nondegeneracy of its trace
form.

The final part specializes the generic type-A Hecke algebra at $v=1$ and $v=q$
and proves Tits deformation: the finite Hecke algebra is isomorphic to
$\mathbb C[S_n]$, noncanonically and through the Axiom of Choice inherited from
the Chevalley constructibility and Nullstellensatz suppliers used in the
deformation argument. From the resulting identification of the endomorphism
algebra of a general principal series with a tensor product of Hecke algebras,
the page derives the constituent parametrisation: the constituents of $I(\chi)$
are indexed by tuples of partitions of the equal-character block sizes, with
multiplicities the products of the hook-length numbers of the parts, and the
spherical case $\mathbb C[G/B]\cong\bigoplus_{\lambda\vdash n}V_\lambda^{\oplus f^\lambda}$
recovers the multiplicity $f^\lambda$ of each partition. The regular case is
irreducible, the trivial case is the spherical case, and the parametrisation is
explicitly noncanonical.
