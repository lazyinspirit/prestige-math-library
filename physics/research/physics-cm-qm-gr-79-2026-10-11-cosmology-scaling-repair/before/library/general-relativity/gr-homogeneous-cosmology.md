---
requires: ["gr-einstein-and-matter","riemannian-metrics-length-distance-and-volume","riemann-curvature-and-riemannian-submanifolds","the-exponential-function"]
page: gr-homogeneous-cosmology
title: "Homogeneous Cosmology"
status: draft
library: physics
items: [lem-gr-constant-rescaling-preserves-levi-civita-and-curvature,
        def-gr-flrw-spatial-model,
        lem-gr-constant-curvature-three-manifold-ricci,
        def-gr-flrw-model-data,
        lem-gr-flrw-metric-and-comoving-data,
        lem-gr-flrw-christoffel-symbols,
        lem-gr-flrw-comoving-congruence-expansion,
        lem-gr-flrw-ricci-and-einstein-tensors,
        def-gr-flrw-friedmann-system,
        prop-gr-flrw-equation-equivalences,
        post-gr-flrw-homogeneous-cosmological-model,
        pthm-gr-flrw-field-equations-reduction,
        pthm-gr-flrw-power-law-solutions,
        pthm-gr-flrw-de-sitter-solutions,
        pthm-gr-flrw-cosmological-redshift,
        rem-gr-flrw-observation-and-model-dependence]
examples: []
---

This page develops the homogeneous and isotropic cosmological model of the
classical gravitational framework: the FLRW metric, its curvature and
kinematics, the reduction of the adopted field law to the Friedmann system,
restricted explicit solutions and the cosmological redshift relation. Ten
items are mathematics — complete conditional calculations on an FLRW model
datum — and six are physics: one adopted model postulate, four
model-conditional theorems and one scope note. No item reports a measurement,
and none asserts that the model describes nature.

**Spatial models.** A spatial model datum is a connected smooth three-manifold
with a Riemannian metric whose Ricci tensor satisfies
$\operatorname{Ric}(\gamma)=2k\gamma$ for a normalized parameter
$k\in\{-1,0,1\}$ ([[def-gr-flrw-spatial-model]]). Constant rescaling of the
metric preserves the Levi-Civita connection, the curvature operator, the Ricci
tensor and the sectional curvatures ([[lem-gr-constant-rescaling-preserves-levi-civita-and-curvature]]),
so the normalized curvature condition is unchanged by a choice of spatial
scale; in dimension three the condition is equivalent to constant sectional
curvature $k$ ([[lem-gr-constant-curvature-three-manifold-ricci]]). The
definition names the three standard complete simply connected models realizing
the three signs but proves no classification theorem.

**FLRW data and kinematics.** An FLRW model datum is a tuple
$(I,\Sigma,\gamma,k,a)$ with a smooth scale factor $a:I\to(0,\infty)$ on a time
interval; its spacetime is $I\times\Sigma$ with metric
$g=-c^2dt^2+a(t)^2\gamma$ and comoving congruence $n=c^{-1}\partial_t$
([[def-gr-flrw-model-data]]). The metric is smooth Lorentzian, the comoving
curves are unit-speed observers whose parameter is proper time, and the
slices carry the scaled spatial metric $a(t_0)^2\gamma$ of curvature
$k/a(t_0)^2$ ([[lem-gr-flrw-metric-and-comoving-data]]). The Christoffel
symbols are computed in every product chart
([[lem-gr-flrw-christoffel-symbols]]), and the comoving congruence is a
geodesic unit timelike congruence with expansion
$\vartheta=3H/c$, where $H=\dot a/a$
([[lem-gr-flrw-comoving-congruence-expansion]]).

**Curvature and the reduced system.** Substitution of the symbols gives the
Ricci, scalar and Einstein tensors in the product chart
([[lem-gr-flrw-ricci-and-einstein-tensors]]). The Friedmann, acceleration,
continuity and spatial-component equations for a datum
$(c,G_N,\Lambda,I,k,a,\varepsilon,p)$ are defined in
[[def-gr-flrw-friedmann-system]]; with the Friedmann equation held fixed, the
spatial-component equation is equivalent to the acceleration equation, and the
acceleration equation follows from the Friedmann equation and continuity
wherever the Hubble parameter does not vanish
([[prop-gr-flrw-equation-equivalences]]).

**Adopted model and reduction of the field law.** The physical model is
adopted in [[post-gr-flrw-homogeneous-cosmological-model]]: a standard spatial
model, an FLRW metric and either the vacuum sector or a comoving perfect fluid
with homogeneous density and pressure and an explicit equation of state, all
as model assumptions with stated exclusions. For that model, the field law of
[[post-gr-einstein-field-law]] holds exactly when the Friedmann and
acceleration equations hold, and the continuity equation follows from the
field law and the fluid conservation equations
([[pthm-gr-flrw-field-equations-reduction]]).

**Restricted solutions and redshift.** For the flat standard model with
$\Lambda=0$ and a barotropic equation of state $p=w\varepsilon$, $w>-1$, the
expanding power-law data with exponent $q=2/(3(1+w))$ solve the reduced
equations on a half-open interval, including the dust and radiation exponents
([[pthm-gr-flrw-power-law-solutions]]); for the flat vacuum model with
$\Lambda>0$ the exponential data with rate $c\sqrt{\Lambda/3}$ solve them on
the whole line, while $\Lambda<0$ admits no flat vacuum solution
([[pthm-gr-flrw-de-sitter-solutions]]). Along an ideal future null geodesic of
any FLRW datum, the product of the scale factor with the time component of the
tangent is conserved, and the ratio of the observer energies measured by
comoving observers at two events is the inverse ratio of the scale factors,
equivalently $1+z=a(t_R)/a(t_E)$ for the associated redshift parameter
([[pthm-gr-flrw-cosmological-redshift]]). The final scope note records that
all of these are conditional model results, distinguishes model predictions
from reported observations and statistical inference, and lists what a future
experiment item would have to record
([[rem-gr-flrw-observation-and-model-dependence]]).
