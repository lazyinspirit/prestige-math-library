---
page: riemannian-comparison-theorems-examples
title: "Riemannian Comparison Theorems — Examples"
status: published
requires: [riemannian-comparison-theorems]
items: []
examples:
  - ex-model-jacobi-fields-in-positive-zero-and-negative-curvature
  - ex-rauch-comparison-between-euclidean-and-spherical-geodesics
  - ex-distance-hessian-and-laplacian-in-space-forms
  - ex-cartan-hadamard-for-hyperbolic-space
  - ex-a-flat-torus-showing-simple-connectedness-is-needed-for-global-exp-injectivity
  - ex-bonnet-myers-for-the-round-sphere
  - ex-bishop-gromov-ratio-is-constant-in-the-model-space
  - ex-volume-growth-in-euclidean-and-hyperbolic-space
  - ex-toponogov-comparison-on-a-round-sphere
  - cex-positive-sectional-curvature-with-no-fixed-lower-bound-on-a-noncompact-manifold
  - cex-ricci-lower-bound-does-not-control-every-sectional-curvature-in-dimension-at-least-three
  - ex-equality-cases-as-diagnostics-for-all-comparison-signs
---

The companion page collects the explicit computations that pin the
comparison statements of the theory page to concrete numbers and the
counterexamples that bound their hypotheses. All items work in the same
curvature convention and inherit $\mathrm{AC}_\omega$ exactly where the
corresponding theory suppliers do.

Model Jacobi fields in the three constant-curvature signs, the
Euclidean-versus-spherical Rauch comparison, and the equality of the Hessian,
Laplacian, volume and Toponogov comparisons in the model spaces are computed
directly from the model functions and the constant-curvature tensor identity.
The examples for hyperbolic space and the flat torus test Cartan--Hadamard
and the covering-map theorem at both sides: the hyperboloid model is verified
complete and globally exponential, while the flat torus shows that simple
connectedness cannot be dropped from global injectivity of $\exp_p$; the
Bonnet--Myers sphere example attains the diameter bound with
$\operatorname{Ric}=(n-1)k\,g$. The two volume examples re-derive the model
ball volumes, for all three signs of $k$ and with the exponential growth rate
in the hyperbolic case, and the Toponogov example verifies the hinge,
triangle and chord equalities on the round sphere as a diagnostic of the
direction conventions.

The counterexamples show where the hypotheses are load-bearing: the
paraboloid $z=x^2+y^2$ is complete, noncompact and positively curved with
curvature tending to zero, so no fixed positive lower bound may be inferred
from pointwise positivity; and the product $H^2(-1)\times\mathbb R^{n-2}$
has Ricci curvature bounded below while one sectional curvature stays at
$-1$, so a Ricci bound controls the trace but not the individual planes. The
final diagnostic example records the equality and strict signs of all
comparison families in the constant-curvature models and is never used as a
dependency of a later proof.
