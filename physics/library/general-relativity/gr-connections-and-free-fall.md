---
requires:
  - gr-tensors-and-observers
  - euclidean-ordinary-differential-equations-with-smooth-dependence
  - geodesics-the-exponential-map-completeness-and-hopf-rinow
  - improper-integrals
  - inverse-and-implicit-function-theorems
  - monotone-sequences-and-cauchy-completeness
  - picard-lindelof-and-first-order-odes
  - properties-of-the-integral-and-the-working-ftc
  - rank-theorems-and-embedded-submanifolds
  - smooth-partitions-of-unity-and-exhaustions
  - the-lebesgue-integral-and-the-convergence-theorems
  - the-logarithm-and-general-powers
  - gr-framework-and-geometry
page: gr-connections-and-free-fall
title: "Connections And Free Fall"
status: draft
library: physics
items:
  - def-gr-timelike-worldline-and-proper-time
  - lem-gr-proper-time-reparametrization-and-four-velocity
  - thm-gr-nondegenerate-levi-civita-and-tensor-derivative
  - lem-gr-parallel-transport-and-geodesic-speed
  - thm-gr-local-geodesics-and-exponential-map
  - thm-gr-point-normal-and-exponential-coordinate-charts
  - lem-gr-first-variation-of-proper-time
  - thm-gr-lorentz-gauss-lemma-and-normal-maximum
  - post-gr-ideal-clocks-and-free-fall
  - pthm-gr-free-fall-worldline-is-determined-by-initial-data
  - rem-gr-normal-coordinates-and-local-inertial-frames-scope
examples: []
---

This page supplies the connection, the geodesic theory and the free-fall
postulate of the classical framework built on [[gr-tensors-and-observers]].
Everything on the page is stated for a time-oriented smooth Lorentzian
four-manifold $(M,g,N)$ in the sense of [[gr-framework-and-geometry]]; the
first eight items are mathematics — complete conditional deductions from that
structure — and the last three items are physics: one adopted postulate, one
model-conditional theorem and one scope note. No item on this page reports a
measurement or asserts that the model describes nature.

**Proper time and four-velocity.** A future timelike worldline is defined as a
$C^1$ or piecewise-$C^1$ curve whose velocity, and whose one-sided tangents at
piece endpoints, are future timelike; its proper-time density is
$\sqrt{-g(\gamma',\gamma')}/c$, with $c>0$ the unit-convention constant, and
its four-velocity is the corresponding unit tangent
([[def-gr-timelike-worldline-and-proper-time]]). The proper-time increment is
proved to be independent of the admissible partition, additive over
subintervals and strictly positive over nondegenerate parameter intervals; it
is invariant under orientation-preserving reparametrization, the four-velocity
satisfies $g(U,U)=-c^2$ and $d\gamma/d\tau=U$, and $U$ reparametrizes the
worldline by proper time
([[lem-gr-proper-time-reparametrization-and-four-velocity]]).

**The metric-selected connection.** For the symmetric nondegenerate metric $g$
there is exactly one torsion-free $g$-compatible affine connection: the
construction is the Koszul form $2g(\nabla_XY,Z)=K(X,Y,Z)$ in the three smooth
vector fields, from which torsion freedom and metric compatibility are
verified from the defining identities and uniqueness is derived; the same
theorem extends the derivative to dual and tensor fields so that it commutes
with contraction, satisfies the Leibniz rule and annihilates $g$ and $g^{-1}$
([[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]). Along a curve
the covariant derivative satisfies the metric pairing identity; parallel
sections exist and are unique, the transport map is a linear bijection
preserving $g$, geodesic speed is constant so the causal character of a
nonconstant geodesic cannot change, proper time is an affine parameter of a
future timelike geodesic, and a reparametrization of a geodesic with nowhere-zero
tangent preserves the geodesic equation exactly when it is affine. Constant
geodesics remain constant under every reparametrization
([[lem-gr-parallel-transport-and-geodesic-speed]]).

**Geodesics and exponential coordinates.** The geodesic initial-value problem
has a unique maximal solution $\gamma_{p,v}$ for every $(p,v)\in TM$; its flow
domain is open with smooth evaluation map, the scaling relation
$\gamma_{p,sv}(t)=\gamma_{p,v}(st)$ holds, and the exponential map
$\exp_p(v):=\gamma_{p,v}(1)$ is smooth on a star-shaped open domain with
$d(\exp_p)_0=\operatorname{id}_{T_pM}$, so it is a local diffeomorphism at the
origin ([[thm-gr-local-geodesics-and-exponential-map]]). Point-normal
coordinates $\exp_p\circ\psi_p^{-1}$ then give $g_{ab}(p)=\eta_{ab}$,
$\partial_ag_{bc}(p)=0$ and $\Gamma^a{}_{bc}(p)=0$ at the point. In the
exponential chart, a geodesic through $p$ is the straight radial line while its
initial vector remains in the chosen star-shaped domain; no claim is made for a
later return to the chart after that vector leaves the domain. The theorem
explicitly claims nothing at second order
([[thm-gr-point-normal-and-exponential-coordinate-charts]]).

**Variational characterization and the radial maximum.** For a $C^2$ future
timelike curve parametrized by proper time up to origin, the first variation
of the length functional is computed under the integral sign, with
$D_s$-$D_t$ commutation and an integration by parts; using compactly supported
bump variation fields one concludes that $L'(0)=0$ for every variation with
fixed endpoints if and only if $D_t\gamma'=0$, i.e. stationarity is exactly
the geodesic equation in the given proper-time parameter
([[lem-gr-first-variation-of-proper-time]]). The Lorentzian Gauss lemma
$g_{\exp_pv}(d(\exp_p)_vv,d(\exp_p)_vw)=g_p(v,w)$ is proved from the
two-parameter family $F(s,r)=\exp_p(sv(r))$ and $D_sJ=D_rT$, and it yields the
radial maximum: every piecewise-$C^1$ future timelike curve from $p$ to $q$ in
the exponential domain has length at most $\sqrt{-g_p(v_q,v_q)}$, with
equality exactly for monotone reparametrizations of the radial geodesic from
$p$ to $q$ ([[thm-gr-lorentz-gauss-lemma-and-normal-maximum]]).

**Adopted clock, free-fall and light-ray rules.** The physical content of the
page is one postulate
([[post-gr-ideal-clocks-and-free-fall]]): ideal clocks measure the proper time
of their future timelike worldlines; an ideal freely falling massive test body
has as worldline a future timelike geodesic of the metric-selected connection
traversed with four-velocity $U=d\gamma/d\tau$, $g(U,U)=-c^2$; and an ideal
light ray is a future null geodesic in the geometric-optics approximation.
These clauses are adopted assumptions of the classical smooth model in the
test-field regime, explicitly not derived from the geometry and not empirical
results; they exclude self-force and radiation back-reaction, finite-size and
tidal couplings beyond the test-body idealization, non-geometric-optics
propagation, dispersion and dissipation, matter with non-negligible
self-field, distributional or lower-dimensional sources, and quantum effects.
From the free-fall clause and the uniqueness and maximality of geodesics it
follows as a model-conditional theorem that the worldlines of two ideal freely
falling massive test bodies released at the same event with the same
four-velocity are restrictions of the same unique maximal timelike geodesic,
independent of rest mass or other body parameters
([[pthm-gr-free-fall-worldline-is-determined-by-initial-data]]).
The theorem uses no measured input and establishes nothing about bodies in
nature; empirical comparisons of free-fall universality are separate
source-backed observations with apparatus, calibration and uncertainty
qualifications and are not recorded on this page.

**Scope of the local-inertial reading.** The final item separates the
mathematics of normal coordinates from its physical reading
([[rem-gr-normal-coordinates-and-local-inertial-frames-scope]]): the identities
$g_{ab}(p)=\eta_{ab}$, $\partial_ag_{bc}(p)=0$, $\Gamma^a{}_{bc}(p)=0$ are
first order at a single event; they assert nothing about second derivatives,
curvature or a neighborhood isometric to Minkowski space, they give no global
inertial frame and no relation between the exponential charts at different
points, and they are not an empirical equivalence-principle statement. The
standard sources for the page are Carroll, *Lecture Notes on General
Relativity* (Chs. 1-4), Reall, *Part III General Relativity* (§§3.1-3.4, 6.4)
and Tong, *General Relativity* (§§1.1, 3.2-3.3); the harvest, locators and
dispositions are recorded in the batch coverage file.
