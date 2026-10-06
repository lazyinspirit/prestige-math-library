---
page: "thom-spectra-and-unoriented-bordism-detection"
title: "Thom Spectra and Unoriented Bordism Detection"
status: published
items:
  - def-mod-two-square-algebra-admissible-sequences-and-excess
  - lem-mod-two-eilenberg-maclane-base-and-path-loop-inputs
  - lem-infinite-real-projective-space-is-a-marked-mod-two-eilenberg-maclane-space
  - lem-steenrod-squares-commute-with-relative-cohomology-connectors
  - lem-fiber-and-limit-isomorphisms-force-the-base-axis-isomorphism
  - thm-connected-graded-module-coalgebra-with-injective-unit-orbit-is-free
  - lem-finite-cover-transfer-with-inverted-degree-and-sign-anti-invariants
  - thm-simply-connected-cw-integral-homology-comparison-implies-finite-range-homotopy-comparison
  - lem-rationalization-is-exact-and-commutes-with-singular-homology
  - def-weak-join-classifying-model-for-a-discrete-group
  - lem-oriented-grassmannian-has-two-lifted-schubert-cells
  - lem-adem-reduction-spans-by-admissible-composites
  - lem-admissible-square-action-has-a-distinct-leading-monomial
  - lem-fundamental-path-fibration-class-has-the-normalized-relative-lift
  - lem-relative-lifts-produce-cohomological-transgressions
  - lem-finite-type-and-odd-primary-acyclicity-of-k-f2-q
  - cor-finite-range-comparison-for-arbitrary-target
  - lem-rational-k-z-n-calculation-through-weak-cw-fiber-comparison
  - lem-weak-join-classifying-model-is-a-cw-k-g-one
  - thm-bo-bso-cohomology-away-from-two
  - thm-integral-finite-generation-of-mo-and-mso-homology
  - def-thom-prespectrum-of-the-universal-real-and-oriented-bundles
  - thm-admissible-composites-present-the-mod-two-square-algebra
  - thm-borel-polynomial-base-from-a-transgressive-simple-fiber-system
  - lem-eilenberg-maclane-spaces-of-torsion-abelian-groups-are-rationally-acyclic
  - thm-unoriented-thom-cohomology-away-from-two-below-2r
  - lem-finite-products-and-comparison-cones-have-finite-type
  - def-degreewise-mod-two-cohomology-of-the-universal-thom-prespectrum
  - lem-universal-real-thom-spaces-are-r-minus-one-connected
  - lem-universal-mod-two-class-detects-admissible-composites-in-the-strict-range
  - lem-external-evaluation-detects-tensor-square-operations
  - prop-serre-polynomial-cohomology-of-mod-two-eilenberg-maclane-spaces
  - lem-rational-first-hurewicz-after-killing-lower-torsion-homotopy
  - thm-finite-generation-cohomological-uct-gives-integral-cone-comparison
  - lem-stable-thom-cohomology-is-degreewise-eventually-constant
  - thm-admissible-square-algebra-is-a-connected-bialgebra
  - lem-metastable-cohomology-of-eilenberg-maclane-spaces
  - cor-rational-homology-vanishing-implies-rational-homotopy-vanishing-in-a-finite-range
  - lem-rational-homotopy-isomorphisms-and-an-endpoint-surjection-give-homology-isomorphisms
  - lem-stable-squares-on-universal-thom-classes
  - def-whitney-sum-coalgebra-on-stable-unoriented-thom-cohomology
  - lem-rational-homotopy-of-a-sphere-below-its-first-unstable-degree
  - lem-zero-section-proves-injectivity-of-the-thom-unit-orbit
  - lem-whitney-sum-coalgebra-is-well-defined-on-stable-thom-cohomology
  - lem-rational-hurewicz-for-arbitrary-wedges-of-high-dimensional-spheres
  - lem-stable-thom-cohomology-is-a-square-module-coalgebra
  - thm-rational-hurewicz-for-highly-connected-cw-complexes
  - thm-stable-unoriented-thom-cohomology-is-free-over-the-square-algebra
  - def-finite-thom-classifying-detector-map
  - lem-finite-thom-classifying-detector-map-exists-and-is-continuous
  - thm-finite-thom-detector-is-a-mod-two-cohomology-isomorphism-below-2r
  - thm-finite-thom-detector-is-an-integral-homology-isomorphism-below-2r-minus-1
  - thm-finite-thom-detector-is-a-homotopy-isomorphism-through-2r-minus-2
  - lem-stable-thom-detector-coordinates-commute-with-suspension
  - thm-stable-unoriented-thom-homotopy-is-injectively-detected
examples:
  []
---

Assuming AC, this page constructs the shared fixed-coordinate Thom prespectrum of the
universal real and oriented bundles and uses it to detect stable unoriented
Thom homotopy. The prespectrum is built by explicit coordinate-first
stabilization maps; its degreewise mod-two cohomology is the inverse limit
$\mathbb F_2[w_1,w_2,\ldots]\cdot U$, identified with actual finite-rank
coordinates once the rank exceeds the degree. The page also constructs the
mod-two square algebra $\mathcal A$ with its admissible basis, proves that it
is a connected graded bialgebra, and proves that stable Thom cohomology is a
free graded $\mathcal A$-module whose unit orbit $a\mapsto aU$ is injective.

For each rank the page builds a finite detector $f_r:T_r\to P_r$ into a finite
product of Eilenberg–Mac Lane spaces, one factor per free generator in degrees
below $r$, using one global basis and lift fixed once and for all. The detector
is a mod-two cohomology isomorphism for $k<2r$, an integral homology
isomorphism for $i<2r-1$ with a surjection at $2r-1$, and a homotopy
isomorphism through $2r-2$. The coordinates commute with prespectrum
stabilization, so on the cofinal tail $r\ge n+2$ the stable group
$\pi_n(MO)$ maps injectively to $\mathbb F_2^{B_n}$.

Two independent branches run parallel to the mod-two argument. The odd-primary
and integral branch proves the away-from-two Thom and $BO/BSO$ calculations,
integral finite generation, and the finite-generation cohomological universal
coefficient comparison that upgrades field isomorphisms to the integral
endpoint. The rational branch proves rationalization exactness, acyclic models
for torsion Eilenberg–Mac Lane spaces and weak-join classifying spaces, the
rational $K(\mathbb Z,n)$ and sphere calculations, and the rational Hurewicz
theorem for highly connected CW complexes in the range $c\le i\le 2c-2$.

The identification of unoriented bordism with $\pi_*(MO)$ and its conversion
to Stiefel–Whitney-number detection remain downstream obligations of the
differential-topology consumer; this page supplies exactly the prespectrum,
algebra, detector coordinates and stable injectivity that consumer cites.
