---
page: residues-serre-duality-for-curves-and-the-full-riemann-roch-theorem
title: "Residues Serre Duality for Curves and the Full Riemann Roch Theorem"
status: draft
requires: [kahler-differentials-conormal-sequences-and-infinitesimal-lifting, sheaf-cohomology-cech-cohomology-and-comparison, cohomology-of-quasi-coherent-sheaves-on-affine-and-projective-schemes, smooth-proper-curves-divisors-genus-and-ramification, riemann-roch-for-curves-via-euler-characteristics, smooth-projective-serre-duality-and-flag-variety-line-bundles]
items:
  - lem-uniformizer-differential-is-a-basis
  - def-residue-rational-differential-curve-point
  - lem-residue-independent-uniformizer
  - lem-residue-exact-differential-zero
  - lem-finite-potent-trace-existence-and-uniqueness
  - def-commensurable-subspaces-and-ideals-of-endomorphisms
  - lem-finite-potent-trace-linearity-and-conjugation
  - lem-e-ideals-and-commutator-trace
  - thm-abstract-residue-exists-unique
  - lem-abstract-residue-basic-properties
  - lem-abstract-residue-additivity
  - lem-abstract-residue-trace-under-finite-free-extension
  - cor-coefficient-trace-residue-agreement
  - lem-adelic-quotient-computes-h1-structure-sheaf
  - thm-global-residue-theorem-algebraic-curve
  - def-principal-parts-sheaf-line-bundle-curve
  - lem-principal-parts-cech-h1-presentation
  - def-residue-pairing-principal-parts
  - lem-residue-pairing-descends-cohomology
  - lem-residue-pairing-functorial-line-bundle
  - lem-local-residue-annihilator-regular-sections
  - lem-global-residue-pairing-injective-left
  - lem-twisting-sheaf-projective-space-ample
  - cor-projective-embedding-every-smooth-proper-curve
  - lem-global-residue-pairing-dimension-balance
  - thm-serre-duality-curves-line-bundles
  - thm-serre-duality-curves-vector-bundles
  - thm-serre-duality-curves-coherent-sheaves
  - cor-h1-line-bundle-dual-sections
  - thm-full-riemann-roch-divisor
  - cor-h0-canonical-differentials-genus
  - cor-canonical-degree-two-g-minus-two
  - cor-h1-line-bundle-vanishes-degree-over-two-g-minus-two
  - cor-rr-exact-high-degree-formula
  - thm-degree-two-g-line-bundle-basepoint-free
  - thm-degree-two-g-plus-one-line-bundle-very-ample
  - def-hyperelliptic-curve
  - thm-canonical-map-nonhyperelliptic-curve
  - thm-adjunction-smooth-plane-curve
  - cor-genus-degree-smooth-plane-curve
  - lem-degree-pullback-divisor-finite-morphism-curves
  - thm-riemann-hurwitz-complete
  - cor-unramified-cover-curves-genus-complete
  - thm-genus-one-canonical-bundle-trivial
  - cor-degree-three-line-bundle-embeds-genus-one-plane-cubic
  - rem-duality-trace-normalization
  - rem-general-serre-duality-deferred
examples: []
---

This page develops residues of rational differentials on a smooth curve, the
residue pairing on principal parts, Serre duality for curves over an arbitrary
field, and the full divisor Riemann–Roch theorem with its standard
consequences. It is the apex of the curve chain: it consumes the divisor,
genus and Euler-characteristic theory of the earlier curve pages and the
published smooth-projective Serre duality theorem.

Local residues are defined at a closed point of a smooth curve over a field
$k$ whose residue field is finite separable over $k$: after choosing a
uniformizer $t$ and a coefficient field in the complete local ring, the
residue of $\omega = f\,dt$ is the trace from $\kappa(p)$ to $k$ of the
coefficient of $t^{-1}$. The uniformizer-differential basis lemma shows that
$dt$ really is an $\mathcal O_{C,p}$-basis of the module of differentials, the
definition is proved independent of the uniformizer, and exact differentials
have residue zero, in every characteristic. The global theorem is Tate's
abstract residue theory: finite-potent traces on commensurable ideals,
existence and uniqueness of an abstract residue with its (R)-properties,
additivity, behaviour under finite free extensions, and the identification of
the abstract residue with the coefficient-trace definition. The sum of the
residues of a rational differential on a smooth proper curve vanishes over a
perfect field.

Principal parts of meromorphic sections of a line bundle are organized into a
sheaf whose Čech $H^1$ presentation matches the adelic quotient computing
$H^1$ of the structure sheaf, and duality is then read off a residue pairing
between principal parts valued in $\mathcal L$ and global regular sections of
$\omega_C\otimes\mathcal L^{-1}$. The pairing descends to cohomology by the
global residue theorem, is functorial in the line bundle, has the expected
annihilator of regular sections, and is injective on the left; a dimension
balance lemma pairs the two sides so that the published smooth-projective
duality theorem, transported along the projective embedding of an arbitrary
smooth proper curve, yields Serre duality for line bundles, finite locally
free sheaves and coherent sheaves in Ext form. The duality is recorded with
the trace normalization that makes the pairing canonical, and no
higher-dimensional duality is imported.

From duality the page obtains $h^1(\mathcal O(D)) = \ell(K-D)$, the full
divisor Riemann–Roch theorem $\ell(D) - \ell(K-D) = \deg D + 1 - g$, the
identities $\deg K = 2g-2$ and $h^0(C,\omega_C) = g$, vanishing of $H^1$ and
the exact formula beyond degree $2g-2$, base-point-freeness for
$\deg \mathcal L \ge 2g$, and very ampleness for $\deg \mathcal L \ge 2g+1$.
The canonical-map criterion for non-hyperelliptic curves, the hyperelliptic
definition, adjunction for smooth plane curves with the genus formula
$g=(d-1)(d-2)/2$, the complete Riemann–Hurwitz formula with the different
divisor, the finite étale genus relation, triviality of the canonical bundle
on a genus-one curve, and the plane-cubic embedding of a genus-one curve
close the page. Several items inherit the Axiom of Choice from the published
projective-space and duality suppliers, to which the local Fitting-type and
finite-generation arguments appeal; each item that uses it names the supplier
and carries the assumption in its contract, and the residue computations
themselves are choice-free.
