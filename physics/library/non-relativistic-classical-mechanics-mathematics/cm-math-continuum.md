---
page: cm-math-continuum
title: Cm Math Continuum
status: published
items:
  - def-cm-euclidean-spatial-calculus
  - def-cm-continuum-motion
  - lem-cm-determinant-derivative-along-a-matrix-curve
  - lem-cm-localization-of-vanishing-integrals
  - thm-cm-transport-theorem
  - thm-cm-local-mass-balance
  - thm-cm-local-momentum-balance
  - thm-cm-traction-is-given-by-a-stress-matrix
  - thm-cm-stress-matrix-is-symmetric
  - thm-cm-control-volume-balance
  - def-cm-linear-elastic-constitutive-law
  - lem-cm-isotropic-elastic-strain-energy-positivity
  - thm-cm-plane-elastic-waves
  - def-cm-fluid-constitutive-models
  - thm-cm-barotropic-momentum-and-bernoulli
  - thm-cm-kelvin-circulation
  - thm-cm-dalembert-formula-and-string-solutions
  - def-cm-cyclic-spring-chain
  - thm-cm-spring-chain-dispersion-relation
  - lem-cm-second-difference-remainder-bound
  - lem-cm-discrete-periodic-summation-by-parts
  - thm-cm-spring-chain-continuum-limit
  - thm-cm-burgers-characteristics-and-gradient-blowup
  - def-cm-scalar-conservation-law-weak-and-entropy-solution
  - thm-cm-burgers-riemann-shock-and-rarefaction
  - thm-cm-plane-couette-and-poiseuille-flows
  - def-cm-sine-coefficients-of-periodic-functions
  - lem-cm-cosine-sine-orthogonality-and-odd-extension
  - lem-cm-fejer-completeness-for-continuous-periodic-functions
  - lem-cm-uniform-convergence-with-derivatives-on-a-rectangle
  - lem-cm-sine-coefficient-decay-by-integration-by-parts
  - thm-cm-smooth-string-fourier-series-solution
examples: []
requires:
  - cm-math-dynamics
  - euclidean-surface-measure-divergence-and-green-identities
  - fejer-and-poisson-summability-of-fourier-series
  - product-measures-and-the-fubini-tonelli-theorems
  - uniform-convergence-of-functions
  - cm-math-geometry
---

The continuum layer of the non-relativistic classical mechanics mathematics
collection, all of it mathematics: the Euclidean spatial calculus and continuum
motions; the transport theorem for the stated $C^2$ family of diffeomorphisms; the
localization of mass and momentum balance and the control-volume identities;
the Cauchy-tetrahedron representation of a balanced traction field by a stress
matrix and the symmetry of that matrix under couple-free angular balance;
explicit linear elastic and fluid constitutive models with exact plane-wave,
channel-flow, Bernoulli and Kelvin-circulation results; the two characteristic
scalar conservation laws of Burgers' equation with weak and entropy solutions;
the classical $C^2$ fixed-end string for $C^5$/$C^4$ data solved by its sine series; and the proved
finite-time continuum limit of a cyclic spring chain. Every item carries
`domain: mathematics` and depends only on mathematical suppliers; nothing here
asserts that any continuum model describes a physical body.

The transport layer begins with [[def-cm-euclidean-spatial-calculus]] and
[[def-cm-continuum-motion]], which fix the objects: gradient, divergence and
material derivative for time-dependent velocities using the spatial derivative at fixed time, in the standard Euclidean coordinates, and a motion as a
$C^2$ family of diffeomorphisms with positive Jacobian on the material region.
[[lem-cm-determinant-derivative-along-a-matrix-curve]] proves the Jacobi
formula $(\det A)'=\det A\operatorname{tr}(A^{-1}A')$, and
[[thm-cm-transport-theorem]] combines it with the change-of-variables theorem to
transport integrals over moving regions for the stated $C^2$ family of
diffeomorphisms. [[lem-cm-localization-of-vanishing-integrals]]
records the localization step used by every balance statement.

The balance layer is [[thm-cm-local-mass-balance]],
[[thm-cm-local-momentum-balance]], [[thm-cm-traction-is-given-by-a-stress-matrix]],
[[thm-cm-stress-matrix-is-symmetric]] and [[thm-cm-control-volume-balance]]: they
are conditional localization theorems, each stating its own integral balance or
contact hypothesis explicitly; none derives a balance law from particle
mechanics. On them rest the adopted constitutive branches
[[def-cm-linear-elastic-constitutive-law]] and [[def-cm-fluid-constitutive-models]],
the strain-energy decomposition [[lem-cm-isotropic-elastic-strain-energy-positivity]],
the exact plane-wave solutions [[thm-cm-plane-elastic-waves]], the barotropic
gradient form and Bernoulli law [[thm-cm-barotropic-momentum-and-bernoulli]] with
the circulation theorem [[thm-cm-kelvin-circulation]], and the exact channel
flows [[thm-cm-plane-couette-and-poiseuille-flows]] of the explicitly adopted steady differential equations. Scalar conservation laws are treated in
[[def-cm-scalar-conservation-law-weak-and-entropy-solution]], which fixes the weak
and entropy solution classes under the declared countable-choice measure foundation, with test functions smooth up to the initial boundary and allowed nonzero initial trace, and in [[thm-cm-burgers-characteristics-and-gradient-blowup]]
and [[thm-cm-burgers-riemann-shock-and-rarefaction]], which prove the characteristic
gradient blow-up criterion and the shock and rarefaction Riemann solutions, including all convex $C^1$ entropy pairs as well as the Kružkov family.

The one-dimensional wave layer is self-contained: [[thm-cm-dalembert-formula-and-string-solutions]]
solves the free wave equation and exhibits the fixed-end modes; the sine
coefficients and their orthogonality and completeness are developed in
[[def-cm-sine-coefficients-of-periodic-functions]],
[[lem-cm-cosine-sine-orthogonality-and-odd-extension]],
[[lem-cm-fejer-completeness-for-continuous-periodic-functions]] and
[[lem-cm-sine-coefficient-decay-by-integration-by-parts]], with
[[lem-cm-uniform-convergence-with-derivatives-on-a-rectangle]] supplying the
two-variable differentiation pass; [[thm-cm-smooth-string-fourier-series-solution]]
assembles the unique $C^2$ solution with an explicit $O(N^{-4})$ tail bound.
Finally [[def-cm-cyclic-spring-chain]] and
[[thm-cm-spring-chain-dispersion-relation]] describe the discrete chain,
[[lem-cm-second-difference-remainder-bound]] and
[[lem-cm-discrete-periodic-summation-by-parts]] supply the two estimates, and
[[thm-cm-spring-chain-continuum-limit]] proves the finite-time uniform limit.
