---
page: lie-groups-invariant-fields-and-the-exponential-map
title: Lie Groups, Invariant Fields, and the Exponential Map
status: published
items:
  - def-lie-group
  - def-lie-group-homomorphism-isomorphism-and-automorphism
  - def-left-and-right-translations-on-a-lie-group
  - prop-translations-are-diffeomorphisms-and-their-differentials-trivialize-the-tangent-bundle
  - def-left-and-right-invariant-vector-fields
  - thm-left-invariant-vector-fields-evaluate-isomorphically-at-the-identity
  - prop-the-lie-bracket-of-left-invariant-fields-is-left-invariant
  - def-lie-bracket-on-the-tangent-space-of-a-lie-group
  - def-finite-dimensional-lie-algebra
  - thm-the-tangent-space-at-the-identity-is-a-lie-algebra
  - prop-right-invariant-fields-carry-the-opposite-lie-bracket
  - def-left-maurer-cartan-form
  - prop-maurer-cartan-form-is-a-pointwise-isomorphism-and-left-invariant
  - def-finite-dimensional-vector-valued-forms-and-their-exterior-derivative
  - thm-maurer-cartan-structure-equation
  - def-one-parameter-subgroup-of-a-lie-group
  - thm-left-invariant-vector-fields-are-complete
  - thm-one-parameter-subgroups-are-integral-curves-of-left-invariant-fields
  - def-exponential-map-of-a-lie-group
  - prop-exponential-scales-one-parameter-subgroups
  - thm-the-lie-group-exponential-map-is-smooth-with-identity-differential-at-zero
  - cor-the-exponential-map-is-a-local-diffeomorphism-at-zero
  - def-local-logarithm-on-a-lie-group
  - thm-one-parameter-subgroups-are-exactly-exponentials
  - prop-commuting-lie-algebra-elements-have-multiplicative-exponentials
  - def-lie-algebra-homomorphism
  - thm-differential-of-a-lie-group-homomorphism-is-a-lie-algebra-homomorphism
  - prop-exponential-map-is-natural-for-lie-group-homomorphisms
  - thm-a-homomorphism-from-a-connected-lie-group-is-determined-by-its-differential-at-the-identity
  - def-conjugation-and-the-adjoint-representation-of-a-lie-group
  - prop-adjoint-is-a-smooth-lie-group-representation
  - def-adjoint-representation-of-a-lie-algebra
  - thm-the-differential-of-adjoint-is-ad
  - prop-adjoint-intertwines-the-exponential-map
  - prop-adjoint-exponential-identity
  - lem-right-trivialized-differential-of-the-lie-group-exponential
  - def-baker-campbell-hausdorff-series
  - lem-local-convergence-of-the-baker-campbell-hausdorff-series
  - thm-baker-campbell-hausdorff
  - cor-the-local-lie-group-law-is-determined-by-the-lie-bracket
  - cor-commuting-nearby-group-elements-have-commuting-logarithms-under-the-stated-domain-hypotheses
  - def-real-and-complex-lie-groups
  - fs-the-exponential-map-of-a-lie-group-is-a-group-homomorphism
  - fs-the-exponential-map-is-globally-injective-on-every-connected-lie-group
  - fs-the-exponential-map-is-surjective-on-every-connected-lie-group
  - fs-right-invariant-fields-identify-t-e-g-with-the-same-bracket-as-left-invariant-fields
  - fs-every-continuous-group-homomorphism-is-smooth-by-definition
  - fs-differential-at-the-identity-determines-a-homomorphism-from-a-disconnected-lie-group
examples: []
---

A Lie group's tangent space at the identity acquires its bracket from
left-invariant vector fields; right-invariant fields instead realize the
opposite bracket. The left Maurer--Cartan form packages the resulting global
trivialization and satisfies the Maurer--Cartan structure equation with this
fixed sign convention.

Complete invariant fields produce one-parameter subgroups and the exponential
map. The exponential is smooth, has identity differential at zero, and is
therefore a local diffeomorphism, but it need not be a homomorphism, globally
injective, or globally surjective. Naturality and connectedness determine
homomorphisms locally and, where stated, globally. The smooth invariant-field
and exponential interfaces on this page explicitly retain
$\mathrm{AC}_\omega$.

Conjugation gives the adjoint representation, whose differential is the
Lie-algebra adjoint map. The final section proves a local
Baker--Campbell--Hausdorff formula from the right-trivialized differential of
the exponential. All logarithm and commutation conclusions retain their
neighbourhood hypotheses; no global BCH or global logarithm claim is made.
