---
page: extremal-length-and-planar-quasiconformality
title: Extremal Length and Planar Quasiconformality
status: draft
items:
- def-acl-sobolev-quasiconformal-homeomorphism
- def-extremal-length-and-curve-family-modulus
- def-beltrami-coefficient-and-maximal-dilatation
- lem-rho-length-and-extremal-length-are-well-defined
- def-geometric-quasiconformal-homeomorphism
- thm-extremal-length-conformal-invariance-and-monotonicity
- thm-modulus-rectangle-and-annulus
- thm-round-annulus-conformal-parameter-is-complete-invariant
- lem-riemann-maps-of-jordan-domains-extend-homeomorphically
- lem-analytic-quasiconformality-implies-quadrilateral-modulus-bounds
- thm-geometric-and-analytic-quasiconformality-equivalent
- lem-inverse-of-a-quasiconformal-map-is-quasiconformal
- lem-analytic-quasiconformality-implies-modulus-distortion
- thm-composition-and-inverse-quasiconformal
- thm-one-quasiconformal-is-conformal
- thm-normalized-quasiconformal-compactness
- lem-circular-dilatation-quasisymmetry-and-analytic-quasiconformality
examples: []
requires:
- logarithmic-potential-capacity-and-riesz-decomposition
- simply-connected-plane-domains
- classification-of-compact-connected-surfaces
- hurewicz-whitehead-freudenthal-and-cw-approximation
- geodesics-the-exponential-map-completeness-and-hopf-rinow
- the-dbar-complex-and-integral-solutions
- the-direct-method-and-euler-lagrange-equations
---

This page develops the extremal-length method in the plane and uses it to compare the geometric and analytic definitions of quasiconformality. Extremal length is the supremum over finite positive-area Borel densities of the squared family length divided by area, and the curve-family modulus is its extended reciprocal; [[def-extremal-length-and-curve-family-modulus]] fixes this convention before any computation, and [[lem-rho-length-and-extremal-length-are-well-defined]] discharges the parameterization, ambient-domain and line-integral obligations of that definition.

Conformal invariance and monotonicity, the series law and the parallel law are proved in [[thm-extremal-length-conformal-invariance-and-monotonicity]]. The rectangle and round-annulus computations of [[thm-modulus-rectangle-and-annulus]] then identify the joining-family value of a round annulus with its conformal parameter, and [[thm-round-annulus-conformal-parameter-is-complete-invariant]] shows that this parameter is a complete invariant of finite round annuli while the punctured disc has infinite parameter and vanishing reciprocal modulus.

On the quasiconformal side, [[def-geometric-quasiconformal-homeomorphism]] defines orientation-preserving homeomorphisms whose quadrilateral moduli are distorted by at most $K$, and [[def-acl-sobolev-quasiconformal-homeomorphism]] and [[def-beltrami-coefficient-and-maximal-dilatation]] fix the analytic $W^{1,2}_{\rm loc}$ and Beltrami-coefficient formulations with the constant $K=(1+k)/(1-k)$. The earlier Jordan boundary theorem [[lem-riemann-maps-of-jordan-domains-extend-homeomorphically]] and the quadrilateral-only core [[lem-analytic-quasiconformality-implies-quadrilateral-modulus-bounds]] prove the two-sided geometric bounds through lower area and transverse reciprocity. The independent equivalence [[thm-geometric-and-analytic-quasiconformality-equivalent]] then supplies inverse regularity; [[lem-inverse-of-a-quasiconformal-map-is-quasiconformal]] proves the signed-degree area formula and the inverse coefficient. The full wrapper [[lem-analytic-quasiconformality-implies-modulus-distortion]] retains arbitrary annular-end comparison and both null-set properties. Composition, conformality and normalized compactness follow without using the later general circular-dilatation branch, which uses the single explicitly authorized qualitative Gehring criterion alongside local sharp estimates.

The extremal-length items use Countable Choice only, through the length, measure and integration interfaces. The analytic quasiconformal items carry the Axiom of Choice inherited from the published ACL characterization of $W^{1,2}_{\rm loc}$, and each item states that assumption explicitly. The revised proofs are subject to the current owner review and stable certification; the later circular-dilatation branch identifies its single cited qualitative regularity interface and proves its sharp bounds and local quasisymmetry estimates.
