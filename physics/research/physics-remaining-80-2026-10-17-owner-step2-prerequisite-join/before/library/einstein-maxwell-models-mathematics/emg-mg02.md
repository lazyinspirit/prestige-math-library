---
page: emg-mg02
title: Local potentials and smooth circle-bundle connection data
status: draft
library: mathematics
items:
- def-emg-finite-real-supremum-domain
- def-emg-real-metric-axiom-convention
- lem-emg-metric-axioms-imply-nonnegativity
- def-emg-explicit-power-regimes
- lem-emg-positive-square-root-smoothness
- lem-emg-sequence-limit-criterion-with-choice
- def-emg-boundaryless-completeness-domain
- def-emg-set-size-and-class-schema
- def-emg-extended-pointwise-product
- def-emg-lp-class-and-representative
- def-emg-local-potentials-and-circle-data
- lem-emg-local-potential-construction
- lem-emg-circle-connection-gluing
- lem-emg-sphere-flux-holonomy
examples: []
requires:
- emg-mg01
- fibrations-fiber-bundles-and-homotopy-exact-sequences
- the-de-rham-complex-homotopy-and-mayer-vietoris
- the-de-rham-theorem-and-degree
- construction-of-r-via-cauchy-sequences
- foundations-of-the-real-numbers
- suprema-and-infima
- metric-spaces
- roots-and-rational-powers
- the-logarithm-and-general-powers
- countability-and-uncountability
- limits-of-real-functions
- sequences-and-limits
- topology-of-r
- smooth-manifolds-and-smooth-maps
- morse-critical-points-hessians-and-indices
- connections-levi-civita-and-parallel-transport
- riemannian-metrics-length-distance-and-volume
- geodesics-the-exponential-map-completeness-and-hopf-rinow
- the-inverse-function-theorem-completed
- the-derivative-and-mean-value-theorems
- the-zfc-axioms-and-basic-set-constructions
- relations-functions-and-quotients
- limsup-and-subsequential-limits
- measures-and-their-basic-properties
- measurable-functions-and-simple-approximation
- the-lp-spaces-holder-minkowski-and-riesz-fischer
- the-fundamental-theorems-of-calculus
- the-riemann-integral
- properties-of-the-integral-and-the-working-ftc
- the-total-derivative
- the-complex-exponential-and-eulers-formula
- fundamental-trigonometric-identities
- complex-differentiability-and-cauchy-riemann
---
## Scope

This page first supplies the finite-real, metric, explicit power, sequence-limit, boundaryless completeness and set-size conventions, with proofs of metric nonnegativity, positive-root smoothness and the exact countable-choice sequence criterion. It also defines a total extended pointwise product with a specified zero-at-infinity convention, and distinguishes real $L^p$ quotient classes from explicit measurable representatives. It then fixes the local-potential, de Rham exactness, transition-function and circle-connection conventions used in the Einstein–Maxwell mathematics sequence. It proves a radial primitive formula for smooth closed forms, constructs a smooth principal circle bundle and connection from compatible countable chart data, and computes one explicit sphere-flux obstruction and one flat-holonomy example. The flux condition is only for the specified circle normalization; no general bundle classification, empirical monopole, or quantum charge-quantization claim is made.

For $U_{ij}=U_i\cap U_j$, the chart transition is $\tau_{ji}(x,z_i)=(x,g_{ij}^{-1}(x)z_i)$. It covers the identity on the base, as the following commutative square records:

```tikzcd
U_{ij}\times U(1) \arrow[r,"\tau_{ji}"] \arrow[d,"\operatorname{pr}_1"'] &
U_{ij}\times U(1) \arrow[d,"\operatorname{pr}_1"] \\
U_{ij} \arrow[r,equal] & U_{ij}
```

The upper arrow changes only the fibre coordinate, and both vertical arrows project to $U_{ij}$. This diagram records the chart convention only; the cocycle, smoothness, Hausdorff property, second countability and connection compatibility are proved in the A-page items and do not rely on a diagram.
