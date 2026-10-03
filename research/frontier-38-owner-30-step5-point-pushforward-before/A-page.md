---
page: blowups-exceptional-divisors-and-strict-transforms
title: "Blowups, Exceptional Divisors, and Strict Transforms"
status: draft
requires: [fibre-products-base-change-and-scheme-theoretic-fibres, finite-proper-and-projective-morphisms, quasi-coherent-and-coherent-sheaves-and-vector-bundles, proj-projective-schemes-twisting-sheaves-and-ampleness, cartier-and-weil-divisors-line-bundles-and-picard-groups, rees-modules-artin-rees-and-hilbert-samuel-theory, normalization-finiteness-for-affine-domains, sheaf-cohomology-cech-cohomology-and-comparison, cohomology-of-quasi-coherent-sheaves-on-affine-and-projective-schemes, regular-local-rings-and-homological-dimension, flat-smooth-and-etale-morphisms, linear-independence-bases-and-dimension, tensor-products-of-modules, krull-dimension-and-height-theorems, koszul-complexes-and-regular-sequences]
items:
  - def-rees-algebra-ideal-sheaf
  - def-blowup-scheme-along-ideal
  - def-exceptional-divisor-blowup
  - lem-regular-sequence-associated-graded-polynomial
  - lem-affine-blowup-algebra-properties
  - thm-affine-blowup-standard-charts
  - lem-blowup-local-on-base-scheme
  - lem-blowup-independent-ideal-generators
  - thm-pullback-center-ideal-invertible
  - lem-affine-blowup-chart-universal-property
  - thm-blowup-universal-property
  - cor-blowup-unique-up-to-unique-isomorphism
  - lem-blowup-isomorphism-off-center
  - thm-blowup-projective
  - cor-blowup-birational-integral-scheme
  - thm-blowup-base-change-flat
  - def-strict-transform-closed-subscheme
  - def-total-transform-divisor
  - lem-total-transform-strict-plus-exceptional-multiplicity
  - thm-exceptional-divisor-normal-cone-proj
  - cor-exceptional-divisor-smooth-center-normal-bundle
  - thm-blowup-effective-cartier-divisor-isomorphism
  - thm-blowup-smooth-surface-point-charts
  - lem-affine-point-blowup-pushforward-vanishing
  - lem-blowup-point-pushforward-vanishing
  - lem-projection-formula-invertible-twist
  - lem-exceptional-fiber-line-bundle-euler-characteristic
  - thm-blowup-regular-surface-closed-point-regular
  - lem-exceptional-curve-normal-bundle-minus-one
  - lem-blowup-plane-origin-incidence-equations
  - thm-blowup-separates-plane-curve-tangent-directions
  - lem-plane-curve-multiplicity-transform-chart
  - thm-normalization-reduced-curve-exists-finite
  - def-normalization-defect-of-reduced-curve
  - lem-normalization-defect-euler-and-lengths
  - lem-normalization-unchanged-under-finite-birational-curve-map
  - lem-blowup-multiplicity-euler-characteristic-drop
  - def-contact-order-regular-components
  - lem-blowup-lowers-contact-order
  - lem-blowup-separates-transverse-components
  - thm-resolution-plane-curves-by-point-blowups
  - def-blowup-fractional-ideal
  - lem-blowup-power-of-ideal-same
  - lem-blowup-reduced-integral-under-domain-rees
  - thm-blowup-closed-immersion-transform-universal
  - cor-rational-map-to-projective-space-resolved-by-base-ideal-blowup
  - rem-blowup-does-not-mean-delete-point
  - rem-resolution-higher-dimension-not-claimed
  - lem-acyclic-direct-image-cohomology-comparison
examples: []
---

This page develops the blowup of a scheme along a quasi-coherent ideal sheaf
of finite type, together with its exceptional subscheme, its functorial
universal property, its behaviour under base change and restriction, and the
strict and total transforms of closed subschemes and divisors.

For a scheme $X$ and a finite-type quasi-coherent ideal $\mathcal I$ one forms
the Rees algebra sheaf $\mathcal R(\mathcal I)=\bigoplus_{n\ge0}\mathcal I^n$
and sets $\operatorname{Bl}_{\mathcal I}X=\underline{\operatorname{Proj}}_X
\mathcal R(\mathcal I)$; on an affine chart $\operatorname{Spec}A$ with
$I=(f_0,\dots,f_r)$ the blowup is covered by the standard charts
$\operatorname{Spec}A[I/f_i]$, and the chart rings are the affine blowup
algebras, described by the normal form $b/a^n$ inside $A_a$ and by the
polynomial presentation $A[x_1,\dots,x_r]/(ax_i-a_i)$ modulo its $a$-power
torsion. The exceptional subscheme $E=\pi^{-1}V(\mathcal I)$ is the
scheme-theoretic preimage of the centre; when the centre is a regular
immersion its normal cone is the symmetric algebra of $\mathcal I/\mathcal I^2$
by the theory of regular sequences, so $E$ is the projectivised normal bundle
of the centre in $X$.

The page then specialises to the case of a point on a regular surface, where
the blowup is again regular, the exceptional curve is a projective line over
the residue field of the centre, and its normal sheaf has degree $-1$. The
chart computations are used to compute strict transforms of plane curves, to
show that a point blowup separates tangent directions, to prove the
multiplicity recurrence $\pi^*C=C'+mE$, and to track the normalization defect
$\delta_k$ and the contact order of regular branches under blowups. These are
the local inputs to the final resolution theorem, which resolves a reduced
projective plane curve over an arbitrary field into regular embedded
normal-crossing support by repeated point blowups. Choice conventions, the
case of inseparable residue fields, and the boundary of the claims
(no resolution in higher dimension, no relative smoothness over imperfect
fields) are recorded explicitly at the items where they occur.
