---
page: harmonic-hardy-classes-and-fatou-boundary-limits
title: "Harmonic Hardy Classes and Fatou Boundary Limits"
status: draft
requires: [harmonic-functions-and-the-poisson-integral, complex-lp-spaces-and-test-function-conventions, the-duality-of-lp-and-lq, density-separability-and-convolution-in-lp, the-maximal-function-and-lebesgue-differentiation, radon-measures-and-the-riesz-markov-kakutani-theorem, banach-alaoglu-goldstine-and-krein-milman, reflexivity-and-eberlein-smulian, green-functions-harmonic-measure-and-conformal-invariance, measure-preserving-transformations-and-poincare-recurrence, trigonometric-and-oscillatory-examples-in-one-variable]
items:
  - def-poisson-integral-of-finite-boundary-measure
  - def-harmonic-hardy-class-disc
  - thm-poisson-extension-lp-contraction-and-norm-limit
  - thm-harmonic-hardy-one-measure-representation
  - thm-harmonic-hardy-representation-p-greater-one
  - def-circle-maximal-function-and-nontangential-region
  - lem-circle-maximal-weak-one-one
  - thm-poisson-nontangential-maximal-bound
  - thm-fatou-nontangential-boundary-theorem-harmonic
  - cor-bounded-harmonic-functions-have-nontangential-limits
  - thm-harnack-convergence-positive-harmonic-functions
examples: []
---

The harmonic Hardy classes $h^p(\mathbb D)$ collect the complex harmonic
functions on the unit disc whose radial traces stay bounded in
$L^p(\mathbb T,m)$. This page builds their boundary theory on top of
[[harmonic-functions-and-the-poisson-integral]], using the measure, duality and
maximal-function machinery of its declared prerequisites: the Poisson integral
is extended from continuous boundary data to finite regular complex Borel
measures, and the density case is identified with integration against the
corresponding $L^1$ function.

The boundary theory proceeds through maximal estimates. Centred circular arcs,
the circle maximal function, and the nontangential regions $\Gamma_A$ are
defined, and the weak-type $(1,1)$ inequality for the circle maximal function
is proved by a covering argument. The nontangential maximal function of a
Poisson integral is then dominated by the circle maximal function of its
boundary measure, with constant $(A+1)^2$. These two estimates yield the Fatou
theorem: the Poisson extension of an $L^1$ datum converges to that datum
$m$-almost everywhere within every nontangential region, while tangential paths
remain unconstrained.

The page then identifies the boundary behaviour of the Hardy classes
themselves. Every $h^1$ function is the Poisson integral of a unique finite
regular complex boundary measure, with equality of norms and weak-star
convergence of the radial measures; the boundary measure need not have an $L^1$
density. For $1<p\le\infty$ the class $h^p$ is exactly the Poisson image of
$L^p$, isometrically, with $L^p$ radial convergence for finite $p$ and weak-star
convergence at $p=\infty$. Nonnegative harmonic functions are characterized as
Poisson integrals of finite nonnegative measures with mass $u(0)$, normalized
positive families are shown to be compact, and bounded harmonic functions are
recovered as Poisson integrals of $L^\infty$ data with nontangential limits
almost everywhere.

The Axiom of Choice is stated where it is used, and each item identifies the
step that spends it: the maximal-function and Fatou results use countable
choice, while the measure-representation, representation, positivity and
bounded-function results carry the full axiom.
