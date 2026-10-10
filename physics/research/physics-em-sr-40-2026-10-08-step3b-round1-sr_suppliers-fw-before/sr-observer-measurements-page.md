---
page: sr-observer-measurements
title: "Observer Measurements"
status: draft
library: physics
items:
  - def-sr-chart-tetrad-and-congruence-distinction
  - def-flat-covariant-derivative-on-affine-minkowski-space
  - def-sr-observer-congruence-and-kinematics
  - def-sr-simultaneity-slice-and-rest-distance
  - def-sr-operational-radar-protocol
  - lem-sr-radar-midpoint-for-inertial-observer
  - pthm-sr-radar-synchronization-of-inertial-observers
  - lem-sr-boost-time-length-and-velocity-formulas
  - pthm-sr-observer-time-length-and-velocity-measurements
  - def-sr-fermi-walker-transport
  - lem-sr-fermi-walker-transport-existence-and-uniqueness
  - thm-sr-local-congruence-adapted-charts-and-frobenius
  - lem-sr-closed-one-form-primitive-on-simply-connected-open-sets
  - thm-sr-fermi-walker-and-rigid-observer-examples
  - thm-sr-smooth-local-herglotz-noether
examples: []
---

This page develops observer measurements in the affine Minkowski model of
[[sr-spacetime-primitives]]: what an ideal observer's clock, radar signals and
comoving lattice assign to events, and how those assignments behave under
changes of inertial frame and for accelerated observer congruences.

The kinematic language is fixed first. A chart, an inertial chart, a tetrad and
tetrad field, a congruence and an adapted chart are defined as distinct objects,
with the explicit non-inertial-chart witness and the commutation test for
coordinate frames ([[def-sr-chart-tetrad-and-congruence-distinction]]); the flat
covariant derivative is defined through inertial charts, with its
torsion-freeness, metric compatibility, zero curvature and the trivial parallel
transport of the flat model, together with the first-order $C^{1}$ interface
used by the congruence kinematics
([[def-flat-covariant-derivative-on-affine-minkowski-space]]). A congruence then
carries its acceleration $a=\nabla_{n}n$, rest metric $h$, expansion, shear and
vorticity with the decomposition
$\nabla_{a}n_{b}=-n_{a}a_{b}+\theta_{ab}+\omega_{ab}$, and Born rigidity is
defined by $\theta=0$, equivalently $\mathcal L_{n}h=0$
([[def-sr-observer-congruence-and-kinematics]]). Simultaneity is relative to a
future unit timelike vector: the slice $H(m,n)$ and its rest distance are
defined for an arbitrary observer direction, with no global synchronization
assumed ([[def-sr-simultaneity-slice-and-rest-distance]]).

The operational layer starts from the radar protocol of an ideal observer: the
symmetric half-split of the emission-to-reception interval, conditional on the
ideal-clock and ideal-light postulates, with the one-way-convention caveat
stated explicitly ([[def-sr-operational-radar-protocol]]). The geometric
midpoint lemma shows that a round trip through future null segments determines
the midpoint slice and the rest distance
$(\lambda_{+}-\lambda_{-})/2$ and that all admissible reflection events differ
only in the rest-space direction of the reflected signal
([[lem-sr-radar-midpoint-for-inertial-observer]]); the conditional physics
theorem then proves that for an inertial observer this protocol reproduces the
inertial chart's time and rest-frame distance, so the operational content of
inertial simultaneity is the two-way radar convention
([[pthm-sr-radar-synchronization-of-inertial-observers]]).

The measurement consequences of a boost of parameter $v$ are developed next:
the clock-rate factor $1/\gamma$, the length comparison $L_{0}/\gamma$ at equal
times of the measuring frame, the simultaneity shift
$-\gamma(v/c)L$ and the velocity transformation
$w_{1}'=(w_{1}-v)/(1-vw_{1}/c^{2})$,
$w_{\perp}'=w_{\perp}/(\gamma(1-vw_{1}/c^{2}))$ with $|w'|<c$
([[lem-sr-boost-time-length-and-velocity-formulas]]), and their physical
reading as time dilation, length contraction, relativity of simultaneity and
the relativistic velocity transformation, conditional on the adopted ideal
postulates and carrying no empirical or statistical claim
([[pthm-sr-observer-time-length-and-velocity-measurements]]).

Accelerated and rotating observers are handled with Fermi-Walker transport and
the rigidity calculus. Fermi-Walker transport is defined by
$X'=c^{-2}(\eta(A,X)U-\eta(U,X)A)$, with the four-velocity always transported
and the transport reducing to parallel transport exactly when $A=0$
([[def-sr-fermi-walker-transport]]); existence, uniqueness and linearity for
prescribed initial data are proved through an ordinary linear initial-value
problem ([[lem-sr-fermi-walker-transport-existence-and-uniqueness]]). The
local congruence theory shows that every congruence admits an adapted flow-box
chart and proves the Frobenius criterion
$\alpha\wedge d\alpha=0\Leftrightarrow\omega=0\Leftrightarrow$ integrable rest
distribution for $\alpha=n^{\flat}$
([[thm-sr-local-congruence-adapted-charts-and-frobenius]]), with the local
closed-one-form primitive theorem supplying the simply-connected positive
rescaling used by the rigidity classification
([[lem-sr-closed-one-form-primitive-on-simply-connected-open-sets]]). The
preservation of the metric under Fermi-Walker transport and the explicit
Rindler, rigid-rotation and Bell-type congruences — including the nonzero
ambient Frobenius form of the rotating field, the non-closing ring rest lines
and the first-order Bell deformation $\gamma^{3}q_{1}'q_{1}''/c^{3}$ — are
collected in [[thm-sr-fermi-walker-and-rigid-observer-examples]], and the local
Herglotz-Noether classification is completed for smooth fields: a rotational
Born-rigid motion is locally a Killing motion up to a positive rescaling, while
the irrotational motions are orthogonal affine-plane tubular families
([[thm-sr-smooth-local-herglotz-noether]]).

The companion examples page [[sr-observer-measurements-examples]] works the
exact rational cases of these constructions.
