---
requires:
  - construction-of-r-via-cauchy-sequences
  - gr-local-and-global-energy
  - gr-flat-and-newtonian-bridges
  - gr-framework-and-geometry
  - gr-tensors-and-observers
  - gr-einstein-and-matter
  - gr-curvature-and-tides
  - gr-connections-and-free-fall
page: gr-linearized-waves
title: "Linearized Waves"
status: draft
library: physics
items:
  - def-gr-plane-wave-perturbation
  - def-gr-wave-screen-and-tt-projection
  - lem-gr-null-phase-coordinate
  - lem-gr-tt-screen-projector
  - lem-gr-plane-wave-gauge-decomposition
  - thm-gr-tt-plane-wave-solutions
  - thm-gr-tt-plane-wave-curvature
  - pthm-gr-linearized-field-equations
  - def-gr-linearized-wave-regime-and-detector-coupling
  - pthm-gr-plane-wave-polarizations
  - pthm-gr-plane-wave-tidal-detector-response
  - rem-gr-linearized-wave-scope-and-deferred
examples: []
---

This page builds the wave sector of the flat linearization: the definition of
plane-wave perturbations, the screen and transverse-traceless projectors, the
gauge classification of harmonic-gauge plane waves with two polarizations,
the first-order curvature, and the conditional physical reading as the
model's vacuum waves and as the response of ideal test bodies and an ideal
two-body detector. Twelve items are locally authored: seven are mathematics
— complete conditional computations in the flat model — and five are physics
— one derivation of the linearized field equations from the adopted field
law, one modelling definition, two model-conditional theorems and one scope
note. No item reports a measurement or an experiment; no empirical premise
or uncertainty occurs anywhere on the page, and the physics items state
explicitly that they assert nothing about nature.

**Plane-wave objects.** The phase coordinate $u=x^0-x^3$ and its null
differential $n=du$ are fixed in [[def-gr-plane-wave-perturbation]], together
with planar profile perturbations $h_{ab}(x)=F_{ab}(u(x))$, their
transverse-traceless (TT) form with plus and cross amplitudes
$A_+,A_\times$, single-frequency plane waves
$h_{ab}=X_{ab}\cos(k\cdot x)+Y_{ab}\sin(k\cdot x)$, the momentum-space
harmonic-gauge condition $k^a\bar X_{ab}=k^a\bar Y_{ab}=0$, and the
linearized field equation
$G^{(1)}_{ab}(h)+\Lambda h_{ab}=S_{ab}$. The elementary properties of the
phase coordinate — $n$ is null, every profile is annihilated by the flat
d'Alembertian and is constant along the null transport direction — are
proved in [[lem-gr-null-phase-coordinate]]. The SI coordinate-speed and
angular-frequency readings are stated in [[pthm-gr-plane-wave-polarizations]].
The observer screen, the screen and
spatial projectors $p$ and $h$ and the transverse-traceless projection
$\Pi_{n,s}$ are defined in [[def-gr-wave-screen-and-tt-projection]], and
[[lem-gr-tt-screen-projector]] proves that $p$ and $h$ are the orthogonal
projections of rank two and three, that $\Pi_{n,s}$ is the orthogonal
projection onto the two-dimensional TT space, and that the half-trace
subtraction belongs to the rank-two screen: the same formula with the
rank-three projector is not trace-free.

**Gauge classification and polarizations.**
[[lem-gr-plane-wave-gauge-decomposition]] fixes an adapted orthonormal frame
from a null wave covector and proves the exact decomposition
$V_0=T\oplus G$ of the harmonic-gauge amplitude space into the pure
plane-wave gauge amplitudes and the transverse-traceless amplitudes, with a
unique TT representative of every class for each real phase coefficient.
The quotient for one cosine or sine coefficient is two-dimensional, with the
amplitudes $(A_+,A_\times)$ of the TT representative as linear coordinates;
the full real cosine-and-sine pair has two such copies, four real
coefficients for the two polarization types. [[ex-gr-plane-wave-regauge-to-tt]] works the explicit regauging
of a non-TT amplitude. [[thm-gr-tt-plane-wave-solutions]] shows that TT
planar perturbations with arbitrary bounded smooth profiles solve the
linearized vacuum equations, are in harmonic gauge, and give small-amplitude
Lorentzian metrics whose exact zero-source, $\Lambda=0$ vacuum residual is
bounded by a constant times the square of the amplitude on nonempty compact
sets.
[[thm-gr-tt-plane-wave-curvature]] computes the first-order curvature
coefficient — in particular $R^{(1)}_{0i0j}=-\tfrac12\partial_0^2h_{ij}$ for
spatial planar waves — proves its gauge invariance, and identifies its
contraction with the linearized Ricci coefficient.

**Physical reading.** [[pthm-gr-linearized-field-equations]] derives the
linearized field equation and its vacuum branch by differentiating the
adopted field law along a smooth family of exact solutions; its compact-set
quadratic residual bound follows separately from the Taylor estimate once
$G^{(1)}(h)=0$. The all-space harmonic-gauge clause assumes
$\mathrm{AC}_\omega$. [[def-gr-linearized-wave-regime-and-detector-coupling]]
fixes linearized-wave data, including its smooth stress-energy family and
chosen quadratic threshold, and defines an ideal detector as two freely
falling worldlines with the metric length of a prescribed chart-straight arm
path at equal inertial-chart time. [[pthm-gr-plane-wave-polarizations]]
states the model reading of the amplitude classification: two polarization types
at fixed null wave covector, with gauge-invariant first-order curvature
coefficients as their geometric content. In SI length coordinates $x^0=ct$,
phase fronts have coordinate speed $c$ and a single-frequency phase
coefficient $\omega$ corresponds to physical angular frequency $c|\omega|$.
[[pthm-gr-plane-wave-tidal-detector-response]] derives the TT plane-wave
free-fall worldlines, the infinitesimal first-order relative-acceleration
law $\tfrac12c^2\lambda\,\partial_0^2h^i{}_j\delta^j$, and the finite arm
strain as a path integral. For screen-plane arms this reduces to
$\sqrt{1+\lambda a}-1$ with $a=A_+\cos2\theta+A_\times\sin2\theta$.

**Status.** Every physical statement on the page is conditional on the
adopted postulates and on the stated families; in the zero-source, $\Lambda=0$
branch, the exact metric $\eta+\lambda h$ has a vacuum residual bounded by
$O(\lambda^2)$ on each nonempty compact set for sufficiently small amplitudes,
and no observation, apparatus model, noise model, light-propagation model or
numerical amplitude occurs. [[rem-gr-linearized-wave-scope-and-deferred]]
records the exclusions and the material (source radiation and quadrupole
energy, curved backgrounds, light propagation and optical readout, nonlinear
and exact strong-field solutions, quantum aspects) deferred to other
modules.
