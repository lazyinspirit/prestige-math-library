---
page: "kahler-differentials-conormal-sequences-and-infinitesimal-lifting"
title: "Kahler Differentials Conormal Sequences and Infinitesimal Lifting"
status: draft
requires: [sheaf-operations-exactness-ringed-spaces-and-module-pullback, affine-schemes-and-the-structure-sheaf, schemes-subschemes-and-morphisms-locally-of-finite-type, fibre-products-base-change-and-scheme-theoretic-fibres, tensor-products-of-modules, algebraic-differentials-separability-and-smooth-local-presentations, universal-coefficients-and-kunneth-theorems, the-fundamental-theorem-of-algebra]
items: ["def-derivation-algebra", "def-kahler-differentials-algebra", "thm-kahler-differentials-existence-presentation", "cor-derivations-represented-by-differentials", "lem-differentials-polynomial-algebra-free", "thm-conormal-exact-sequence-algebra", "cor-jacobian-presentation-differentials", "thm-transitivity-exact-sequence-differentials", "lem-differentials-localization", "lem-differentials-base-change", "def-sheaf-relative-differentials", "thm-sheaf-differentials-universal-property", "lem-affine-module-sheaf-universal-property", "lem-sheaf-differentials-affine-compatibility", "thm-conormal-sequence-closed-immersion", "thm-transitivity-sequence-schemes", "lem-differentials-commute-base-change-schemes", "def-relative-cotangent-space", "thm-cotangent-space-maximal-ideal-quotient", "thm-tangent-vectors-dual-numbers", "lem-differential-of-morphism-via-cotangent-map", "def-formally-unramified-morphism", "def-formally-smooth-morphism", "def-formally-etale-morphism", "lem-differentials-diagonal-ideal-square", "thm-formally-unramified-differentials-zero", "def-unramified-morphism-finite-type", "thm-unramified-diagonal-open-immersion", "lem-field-is-noetherian", "lem-finite-type-field-zero-differentials-finite-separable", "lem-etale-residue-extensions-finite-separable", "def-smooth-relative-dimension-via-differentials", "rem-conormal-map-need-not-injective", "rem-differentials-detect-infinitesimals-not-all-singularities-alone"]
---

Kähler differentials linearise derivations. The page begins with derivations and the universal
property that defines $\Omega_{B/A}$, proves existence by generators and relations for an arbitrary ring
homomorphism, and records the resulting representation of the derivation functor, the freeness of
$\Omega_{A[x_1,\dots,x_n]/A}$, the conormal sequence of a quotient and the Jacobian presentation it
produces, and the transitivity sequence $C\otimes_B\Omega_{B/A}\to\Omega_{C/A}\to\Omega_{C/B}\to0$.
Localization and scalar base change are shown to commute with $\Omega$, and the first arrow of each
sequence is deliberately not asserted to be injective.

The same package is then sheafified on schemes: relative differentials are built by gluing the affine
constructions, their universal property is a bijection onto derivations of the structure sheaf, and on
$\operatorname{Spec}B\to\operatorname{Spec}A$ they are computed by the sheaf attached to the module
$\Omega_{B/A}$, for which the affine module-sheaf universal property is supplied locally. From there the
page develops the conormal sequence of a closed immersion, the transitivity sequence of composable
morphisms, base change $g^*\Omega_{X/S}\cong\Omega_{X'/S'}$, the cotangent space
$\Omega_{X/k}\otimes_{\mathcal O_{X,x}}\kappa(x)$ at a $k$-rational point together with its identification
with $\mathfrak m_x/\mathfrak m_x^2$, the bijection between dual-number points and tangent vectors, and the
map induced by a morphism on differentials with its identity and chain rules.

The final part reads infinitesimal lifting off the differentials. Formally unramified, formally smooth and
formally étale morphisms are defined, the diagonal ideal is identified through $J/J^2\cong\Omega_{B/A}$,
and $\Omega_{X/S}=0$ is proved equivalent to formal unramifiedness. An unramified morphism of finite type
is characterised by its diagonal being an open immersion; conversely, the finite-type field lemma (which,
like the residue-extension lemma $\kappa(x)/\kappa(s)$ finite separable with
$\mathfrak m_s\mathcal O_{X,x}=\mathfrak m_x$, assumes the Axiom of Choice and states its exact uses) feeds
the structure theorem for unramified morphisms with locally finite type. Smoothness of relative dimension
$d$ is recorded as smoothness together with locally free $\Omega$ of rank $d$; the page closes with two
remarks: the left map of the conormal sequence need not be injective, and differentials detect
infinitesimal thickening but not every singularity on their own.
